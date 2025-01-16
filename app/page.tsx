"use client";
import { Orbitron, Open_Sans, Akaya_Kanadaka } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FcOk } from "react-icons/fc";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { FaRegCommentDots } from "react-icons/fa";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const akayaKanadaka = Akaya_Kanadaka({
  subsets: ["latin"],
  weight: "400",
});
export default function Home() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const testimonials = [
    {
      id: 1,
      name: "Kanwal",
      rating: 5,
      feedback:
        "“Elite Resumer made creating my resume a breeze! The templates are professional, modern, and easy to customize. I landed my dream job within a week of applying!”",
    },
    {
      id: 2,
      name: "Alex K.",
      rating: 5,
      feedback:
        "“As someone who struggled with creating resumes in the past, Elite Resumer was a game-changer. The process was seamless, and the final result looked fantastic!”",
    },
    {
      id: 3,
      name: "Fizza F.",
      rating: 5,
      feedback:
        "“The variety of resume templates on Elite Resumer is amazing. I loved how user-friendly the platform is, and the feedback I received from recruiters has been phenomenal!”",
    },
    {
      id: 4,
      name: "James L.",
      rating: 5,
      feedback:
        "“Elite Resumer’s professional templates gave me the confidence to apply for my dream job. The resume helped me stand out from other applicants!”",
    },
    {
      id: 5,
      name: "Mooen P.",
      rating: 5,
      feedback:
        "“I’ve tried other resume-building tools before, but none come close to the ease and quality of Elite Resumer. Highly recommended for anyone job hunting!”",
    },
    {
      id: 6,
      name: "Sumana Za.",
      rating: 5,
      feedback:
        "“I was blown away by how polished and professional my resume looked after using Elite Resumer. I’ve received so many compliments from interviewers!”",
    },
    {
      id: 7,
      name: "Farah M.",
      rating: 5,
      feedback:
        "“Elite Resumer helped me create a stunning resume in no time. The process was smooth, and the outcome exceeded my expectations!”",
    },
    {
      id: 8,
      name: "Irfan M.",
      rating: 5,
      feedback:
        "“The resume I built with Elite Resumer stood out in a crowded job market. I landed multiple interviews within days of applying!”",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100">
      <section className="bg-gradient-to-r from-[#4338ca] via-[#5748ff] to-[#ffffff] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-6 ${orbitron.className}`}
          >
            Welcome to <span className="text-[#4338ca]">Elite Resumer</span>
          </h1>
          <p
            className={`text-lg md:text-xl leading-relaxed ${openSans.className}`}
          >
            Build professional resumes in minutes! Choose from modern templates,
            customize your information, and land your dream job effortlessly.
          </p>
          <Link href="/templates">
            <button
              className={`mt-8 button-hover-effect text-lg font-semibold shadow-md ${orbitron.className}`}
            >
              <span>Get Started Now</span>
            </button>
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className={`text-4xl font-bold text-center text-[#4338ca] mb-12 ${orbitron.className}`}
          >
            Why Choose Elite Resumer?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Modern Templates",
                description:
                  "Choose from a wide range of modern and professional resume templates.",
                icon: "/icons/icons01.png",
              },
              {
                title: "Customizable Fonts",
                description:
                  "Style your resume with unique fonts to stand out from the crowd.",
                icon: "/icons/icons02.png",
              },
              {
                title: "Fast and Easy",
                description:
                  "Build your resume quickly with our intuitive interface.",
                icon: "/icons/icons03.png",
              },
              {
                title: "Mobile-Friendly",
                description:
                  "Access and edit your resumes on the go from any device.",
                icon: "/icons/icons04.png",
              },
              {
                title: "One-Click Downloads",
                description:
                  "Download your resume in multiple formats with a single click.",
                icon: "/icons/icons05.png",
              },
              {
                title: "Save & Share",
                description:
                  "Save your progress and share resumes easily with a custom link.",
                icon: "/icons/icons06.png",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={1000}
                  height={1000}
                  className="mx-auto mb-4 object-cover h-40"
                />
                <h3
                  className={`text-xl font-semibold text-[#4338ca] mb-2 ${orbitron.className}`}
                >
                  {feature.title}
                </h3>
                <p className={`text-gray-600 ${openSans.className}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className={`text-4xl font-bold text-center text-[#4338ca] mb-12 ${orbitron.className}`}
          >
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "1",
                title: "Choose a Template",
                description:
                  "Pick your favorite resume template from our vast collection.",
              },
              {
                step: "2",
                title: "Add Your Information",
                description:
                  "Fill in your details, skills, and experience effortlessly.",
              },
              {
                step: "3",
                title: "Download & Share",
                description:
                  "Export your resume in PDF format and share it with employers.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105"
              >
                <div className="bg-[#4338ca] text-white w-12 h-12 mx-auto rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3
                  className={`text-xl font-semibold text-[#4338ca] mb-2 ${orbitron.className}`}
                >
                  {step.title}
                </h3>
                <p className={`text-gray-600 ${openSans.className}`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#4338ca] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className={`text-4xl font-bold mb-6 ${orbitron.className}`}>
            Ready to Create Your Dream Resume?
          </h2>
          <p className={`text-lg leading-relaxed mb-8 ${openSans.className}`}>
            Join thousands of professionals who trust Elite Resumer for their
            resume needs. Start building yours today!
          </p>
          <Link href="/templates">
            <button
              className={`button-hover-effect-border text-lg font-semibold shadow-md ${orbitron.className}`}
            >
              <span>Explore Templates</span>
            </button>
          </Link>
        </div>
      </section>

      <div className="container mx-auto py-10">
        <div className="flex justify-center items-center mb-12 w-full">
          <h1
            className={`text-4xl font-bold text-center text-[#4338ca] ${orbitron.className} tracking-in-contract-bck`}
          >
            OUR HAPPY CUSTOMERS
          </h1>
          <div className="flex justify-center items-center absolute right-4">
          <div className="w-2 h-2 bg-[#4338ca] rounded-full relative -top-4 left-2 border-2 border-[#837ae0] animate-ping-2"/>
          <button
            className={`bg-transparent flex justify-center items-center gap-1 text-[#4338ca] hover:text-[#837ae0] duration-150 transition-all px-4 py-2 border border-[#4338ca] hover:border-[#837ae0] rounded-lg hover:-translate-y-0.5 hover:shadow-lg text-xs shadow-md ${orbitron.className}`}
          >
            
            <FaRegCommentDots size={18} /> Feedback
          </button>
          </div>
        </div>
        <Carousel
          className="relative w-full"
          plugins={[autoplayPlugin.current]}
          onMouseEnter={autoplayPlugin.current.stop}
          onMouseLeave={autoplayPlugin.current.reset}
        >
          <CarouselContent className="flex gap-5">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="sm:basis-1/2 md:basis-1/3 p-8 rounded-lg shadow-md space-y-4 mx-2 slide-in-fwd-center bg-white"
              >
                <p className="text-2xl text-yellow-500">
                  {"★ ".repeat(testimonial.rating).trim()}
                </p>
                <h3
                  className={`text-xl flex justify-start items-center gap-3 font-semibold text-[#4338ca] mb-2 ${orbitron.className}`}
                >
                  {testimonial.name} <FcOk size={20} />
                </h3>
                <p className={`text-gray-600 ${akayaKanadaka.className}`}>
                  {testimonial.feedback}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-5" />
          <CarouselNext className="right-5" />
        </Carousel>
      </div>
    </main>
  );
}
