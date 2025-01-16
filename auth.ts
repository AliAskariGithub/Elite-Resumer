import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { User } from "./models/User";
import connectDB from "./lib/db";
import { compare } from "bcryptjs";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),

    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    Credentials({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const passowrd = credentials.password as string | undefined;

        if (!email || !passowrd) {
          throw new CredentialsSignin("Please provide both email & password.");
        }

        await connectDB();

        const user = await User.findOne({ email }).select("+password +role");

        if (!user) {
          throw new Error("Invalid email or password.");
        }

        if (!user.password) {
          throw new Error("Invalid email or password.");
        }

        const isMatched = await compare(passowrd, user.password);
        if (!isMatched) {
          throw new Error("Password did not match.");
        }

        const userData = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
          id: user._id,
        };

        return userData;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    session: async ({ session, token }) => {
      if (token?.sub && token?.role) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }
      return session;
    },

    jwt: async ({ token, user }) => {
      if (user) {
        token.role = user.role;
      }
      return token;
    },

    signIn: async ({ account, user }) => {
      if (account?.provider === "google") {
        try {
          const { email, name, image } = user;

          await connectDB();

          const alreadyUser = await User.findOne({ email });

          if (!alreadyUser) {
            await User.create({
              email,
              name,
              image,
              authProviderId: account.providerAccountId,
            });
          }

          return true;
        } catch (error) {
          console.error("Error while creating user:", error);
          return false;
        }
      }

      if (account?.provider === "credentials") {
        return true;
      }
      return false;
    },
  },
});
