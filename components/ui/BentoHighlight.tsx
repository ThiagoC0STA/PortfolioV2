"use client";
import React, { useRef } from "react";
import { SiFigma } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaAws } from "react-icons/fa";


export const BentoHighlight = () => {
  const highlights = [
    {
      title: "AWS Certified Developer",
      icon: <FaAws className="text-yellow-500" />,
      year: 2023,
      url: "https://www.credly.com/badges/aws-cert",
      category: "Programação"
    },
    {
      title: "UI/UX Design Masterclass",
      icon: <SiFigma className="text-pink-500" />,
      year: 2022,
      url: "https://www.credly.com/badges/figma-cert",
      category: "Design"
    },
    { title: "Top Rated Freelancer", icon: "🏆", year: 2022, url: "https://www.example.com", category: "Pessoal" },
    { title: "Google Cloud Certified", icon: "☁️", year: 2023, url: "https://www.example.com", category: "Programação" },
    { title: "React Mastery", icon: <span className="text-cyan-500">⚛️</span>, year: 2021, url: "https://www.example.com", category: "Programação" },
    { title: "Personal Growth Summit", icon: <span className="text-green-500">🌱</span>, year: 2020, url: "https://www.example.com", category: "Pessoal" },
  ];

  const swiperRef = useRef<any>(null);

  return (
    <div className="flex flex-col w-full gap-6 items-center">
      <h2 className="text-2xl font-extrabold text-white mb-0 text-center">Highlights & Certifications</h2>
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
        {/* Custom Arrows */}
        <button
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white/30 border border-white/30 rounded-full shadow-md p-1.5 hover:bg-purple-100 hover:text-purple-600 transition-colors"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white/30 border border-white/30 rounded-full shadow-md p-1.5 hover:bg-purple-100 hover:text-purple-600 transition-colors"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next"
        >
          <ChevronRight size={16} />
        </button>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
          loop={true}
          spaceBetween={24}
          slidesPerView={1}
          onSwiper={swiper => (swiperRef.current = swiper)}
          className="w-full"
        >
          {highlights.map((item, idx) => (
            <SwiperSlide key={idx}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <div className="flex flex-col items-center justify-center gap-3 bg-[#10132e] border border-white/10 rounded-2xl px-6 py-8 shadow-lg h-[220px] min-h-[220px] max-h-[220px] text-center group transition-all duration-200 hover:border-purple-400 hover:shadow-purple-200">
                  <span className="text-4xl mb-1 drop-shadow-lg">
                    {item.icon}
                  </span>
                  <span className="font-bold text-white text-lg group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">{item.year}</span>
                  <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-gray-900 text-gray-200 border border-white/10">
                    {item.category}
                  </span>
                  <span className="mt-2 text-xs text-purple-300 underline">View Certificate</span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div className="custom-swiper-pagination flex justify-center mt-4 gap-2"></div>
        <style>{`
          .custom-swiper-pagination .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #10122E;
            opacity: 1;
            border-radius: 9999px;
            margin: 0 4px;
            transition: background 0.2s;
          }
          .custom-swiper-pagination .swiper-pagination-bullet-active {
            background: #CBACF9;
          }
        `}</style> */}
      </div>
    </div>
  );
}; 