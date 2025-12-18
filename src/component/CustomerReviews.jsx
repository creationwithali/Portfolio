import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Sarah Khan",
    role: "Business Owner",
    review:
      "Ali Moavia did an amazing job on my website! The design was clean, fast, and exactly how I wanted it.",
    img: "/girl.jpg",
  },
  {
    id: 2,
    name: "Thomson Lee",
    role: "Startup Founder",
    review:
      "Professional and very responsive. Built our landing page with great SEO and performance.",
    img: "/boyy.jpg",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Blogger",
    review:
      "The portfolio website he made for me looks stunning. Easy to manage and coded perfectly!",
    img: "/man.jpg",
  },
];

const CustomerReviews = () => {
  return (
    <section
      id="reviews"
      className="text-white py-20 px-6 md:px-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-[#38BDF8]">Customer</span>{" "}
        <span className="text-[#34D399]">Reviews</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-15">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-[#1E293B]/60 w-[350px] h-[420px] rounded-2xl shadow-lg overflow-hidden
                       hover:scale-105 hover:bg-[#1E293B]/80 transition-all duration-300
                       flex flex-col items-center text-center p-6"
          >
            <img
              src={r.img}
              alt={r.name}
              className="w-24 h-24 rounded-full border-2 border-[#38BDF8] object-cover mb-4"
            />
              <h3 className="text-xl font-semibold text-[#38BDF8]">{r.name}</h3>
              <p className="text-gray-400 text-sm">{r.role}</p>
              <br /> <br />
            <FaQuoteLeft className="text-[#34D399] text-2xl mb-3 opacity-80" />
            <p className="text-gray-300 italic mb-6 text-sm leading-relaxed line-clamp-4">
              {r.review}
            </p>
            <div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
