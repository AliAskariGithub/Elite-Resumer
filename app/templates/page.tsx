"use client";
import { useState } from "react";
import Link from "next/link";
import { Orbitron, Open_Sans, Akaya_Kanadaka } from "next/font/google";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import { MdFilterAlt, MdFilterAltOff } from "react-icons/md";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "600",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const akayaKanadaka = Akaya_Kanadaka({
  subsets: ["latin"],
  weight: "400",
});

const templates = [
  {
    title: "Business Pro",
    description: "A professional template designed for business portfolios.",
    category: "Business",
    image: "/templates/tem01.png",
    tag: "Top Hit",
  },
  {
    title: "Creative CV",
    description: "A creative and modern resume template for designers.",
    category: "Personal",
    image: "/templates/tem02.png",
    tag: "Trending",
  },
  {
    title: "Simple Resume",
    description: "A clean, simple, and minimalist template for resumes.",
    category: "Personal",
    image: "/templates/tem03.png",
    tag: "Most Popular",
  },
  {
    title: "Tech Portfolio",
    description:
      "A sleek portfolio template for developers and tech professionals.",
    category: "Business",
    image: "/templates/tem04.png",
    tag: "Top Hit",
  },
  {
    title: "Freelance CV",
    description: "A template suited for freelancers to showcase their work.",
    category: "Personal",
    image: "/templates/tem05.png",
    tag: "Trending",
  },
  {
    title: "Corporate Resume",
    description: "A formal template designed for corporate job applications.",
    category: "Business",
    image: "/templates/tem06.png",
    tag: "Most Popular",
  },
  {
    title: "Designer Portfolio",
    description: "A vibrant and creative portfolio template for designers.",
    category: "Personal",
    image: "/templates/tem07.png",
    tag: "Trending",
  },
  {
    title: "Modern Startup",
    description:
      "A dynamic template crafted for modern startups and entrepreneurs.",
    category: "Business",
    image: "/templates/tem08.png",
    tag: "Top Hit",
  },
  {
    title: "Classic Resume",
    description: "A timeless template with a classic resume design.",
    category: "Personal",
    image: "/templates/tem09.png",
    tag: "Most Popular",
  },
  {
    title: "Agency Portfolio",
    description: "A versatile template for showcasing agency projects.",
    category: "Business",
    image: "/templates/tem010jnpg",
    tag: "Top Hit",
  },
  {
    title: "Developer CV",
    description: "A modern resume template for software developers.",
    category: "Personal",
    image: "/templates/tem011jnpg",
    tag: "Trending",
  },
  {
    title: "E-Commerce Business",
    description: "A sleek template for showcasing online businesses.",
    category: "Business",
    image: "/templates/tem012jnpg",
    tag: "Top Hit",
  },
  {
    title: "Photographer Portfolio",
    description: "A visually stunning template for photographers.",
    category: "Personal",
    image: "/templates/tem013jnpg",
    tag: "Most Popular",
  },
  {
    title: "Startup Pitch",
    description: "A compelling template designed for startup presentations.",
    category: "Business",
    image: "/templates/tem014jnpg",
    tag: "Trending",
  },
  {
    title: "Writer's Resume",
    description: "A clean and elegant resume template for writers.",
    category: "Personal",
    image: "/templates/tem015jnpg",
    tag: "Most Popular",
  },
  {
    title: "Tech Agency",
    description: "A tech-inspired template for agencies and companies.",
    category: "Business",
    image: "/templates/tem016jnpg",
    tag: "Top Hit",
  },
  {
    title: "Creative Freelancer",
    description:
      "An eye-catching template for freelancers to showcase their work.",
    category: "Personal",
    image: "/templates/tem017jnpg",
    tag: "Trending",
  },
  {
    title: "Professional Resume",
    description: "A professional and structured resume template.",
    category: "Personal",
    image: "/templates/tem018jnpg",
    tag: "Most Popular",
  },
  {
    title: "Corporate Business",
    description:
      "A sleek and modern template for corporate presentations and portfolios.",
    category: "Business",
    image: "/templates/tem019jnpg",
    tag: "Top Hit",
  },
  {
    title: "Artistic Portfolio",
    description: "A creative template designed for artists and illustrators.",
    category: "Personal",
    image: "/templates/tem020jnpg",
    tag: "Trending",
  },
];

const categories = ["All", "Business", "Personal"];
const tags = ["All", "Top Hit", "Most Popular", "Trending"];

const TemplatesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState("All");
  const [showFilter, setShowFilter] = useState(false);

  const filteredTemplates = templates.filter((template) => {
    const matchesSearchTerm =
      template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || template.category === selectedCategory;
    const matchesTag = selectedTag === "All" || template.tag === selectedTag;
    return matchesSearchTerm && matchesCategory && matchesTag;
  });

  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <section className="bg-[#4338ca] text-white rounded-xl p-6 md:p-10 shadow-md text-center">
          <h1
            className={`text-3xl md:text-5xl font-bold mb-4 ${orbitron.className}`}
          >
            Our Templates
          </h1>
          <p
            className={`text-base md:text-xl leading-relaxed ${openSans.className}`}
          >
            Browse through our collection of stunning templates designed for
            every need. Pick your favorite and start building your resume today!
          </p>
        </section>

        <section className="mt-12">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <div className="relative flex items-center gap-2 bg-white rounded-xl px-3 w-full sm:w-auto">
              <IoSearch color="#4338ca" size={20} />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`text-[#4338ca] py-2 px-2 w-full sm:w-52 focus:outline-none ${orbitron.className}`}
              />
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              {showFilter && (
                <div className="flex flex-wrap gap-4 items-center">
                  <div>
                    <label
                      htmlFor="category"
                      className={`mr-2 text-base text-gray-700 font-bold ${orbitron.className}`}
                    >
                      Select Category:
                    </label>
                    <select
                      id="category"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className={`text-[#4338ca] py-2 px-4 text-base rounded-lg focus:outline-none ${akayaKanadaka.className}`}
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="tag"
                      className={`mr-2 text-base text-gray-700 font-bold ${orbitron.className}`}
                    >
                      Select Tag:
                    </label>
                    <select
                      id="tag"
                      value={selectedTag}
                      onChange={(e) => setSelectedTag(e.target.value)}
                      className={`text-[#4338ca] py-2 px-4 text-base rounded-lg focus:outline-none ${akayaKanadaka.className}`}
                    >
                      {tags.map((tag) => (
                        <option key={tag} value={tag}>
                          {tag}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
              <button
                onClick={() => setShowFilter(!showFilter)}
                className={`bg-[#4338ca] text-white py-2 px-4 rounded-lg flex items-center gap-2 ${orbitron.className}`}
              >
                {showFilter ? "Unfilter" : "Filter"}
                {showFilter ? (
                  <MdFilterAltOff size={20} />
                ) : (
                  <MdFilterAlt size={20} />
                )}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTemplates.map((template) => (
              <div
                key={template.title}
                className="relative bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                <div className="relative">
                  <Image
                    src={template.image}
                    alt={template.title}
                    width={2000}
                    height={2000}
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3
                    className={`text-xl font-semibold text-gray-800 mb-2 ${orbitron.className}`}
                  >
                    {template.title}
                  </h3>
                  <p
                    className={`text-sm text-gray-600 mb-4 line-clamp-2 ${openSans.className}`}
                  >
                    {template.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Link
                      href={`/templates/${template.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      <button className="button-hover-effect-border">
                        <span className={`${orbitron.className}`}>Use</span>
                      </button>
                    </Link>
                    <Link
                      href={`/peview/${template.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      <button className="button-hover-effect">
                        <span className={`${orbitron.className}`}>demo</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default TemplatesPage;
