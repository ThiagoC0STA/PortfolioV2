"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export type Testimonial = {
  quote: string[] | string;
  name: string;
  title: string;
  image?: string;
};

export const InfiniteMovingCards = ({
  items,
  className,
}: {
  items: Testimonial[];
  className?: string;
}) => {
  return (
    <div className="w-full mx-auto px-4">
      <style jsx global>{`
        .swiper-slide {
          opacity: 0.4;
          transform: scale(0.85);
          transition: all 0.3s ease;
          height: auto !important;
          display: flex;
          align-items: stretch;
        }
        .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }
        .swiper-wrapper {
          height: auto !important;
          display: flex;
          align-items: stretch;
        }
      `}</style>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 1.5,
        //   }
        // }}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className={className}
        watchSlidesProgress={true}
        observer={true}
        observeParents={true}
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative w-full rounded-2xl border border-slate-800 px-6 py-8 md:p-8 flex flex-col"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
            >
              <blockquote className="flex flex-col flex-grow">
                <div className="relative z-20 text-sm md:text-base font-normal leading-[1.6] text-white space-y-2 md:space-y-3">
                  {Array.isArray(item.quote)
                    ? item.quote.map((q, i) => <p key={i}>{q}</p>)
                    : <p>{item.quote}</p>}
                </div>

                <div className="relative z-20 mt-4 md:mt-6 flex flex-row items-center">
                  <div className="me-3">
                    {item.image ? (
                      <Image
                        height={50}
                        width={50}
                        src={item.image}
                        alt={item.name}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-[40px] w-[40px] md:h-[50px] md:w-[50px] items-center justify-center rounded-full bg-[#4933a4] text-white text-lg md:text-xl font-bold">
                        {item.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-lg md:text-xl font-bold leading-[1.6] text-white">
                      {item.name}
                    </span>

                    <span className="text-xs md:text-sm font-normal leading-[1.6] text-white-200">
                      {item.title}
                    </span>
                  </div>
                </div>
              </blockquote>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
