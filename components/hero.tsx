'use client';

import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { saveAs } from "file-saver";
import ReactPlayer from "react-player";

import { Spotlight } from "@/components/ui/spotlight";
import { MagicButton } from "@/components/ui/magic-button";
import Image from "next/image";

const stats = [
  {
    value: "6+",
    label: "Years of\nExperience"
  },
  {
    value: "50+",
    label: "Projects\nCompleted"
  },
  {
    value: "140+",
    label: "Happy\nClients"
  },
  {
    value: "∞",
    label: "Lines of\nCode Written"
  }
] as const;

export const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);

  const handleDownload = () => {
    saveAs("/thiago-costa-the-best-developer.pdf", "thiago-costa-the-best-developer.pdf");
  };

  return (
    <div className="pb-28 pt-20 md:pt-40">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      {/* Main Content */}
      <div className="relative z-10 px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left Column */}
          <div className="flex flex-col space-y-6 md:space-y-8 w-full md:flex-[7]">
            <div>
              <p className="text-gray-300 text-lg md:text-2xl md:mb-1">I am Thiago Costa</p>
              <h1 className="text-4xl md:text-6xl font-bold text-[#a895f5] bg-[linear-gradient(90deg,#8750f7 0,#fff)] md:text-[80px]">
                Next-Level Web
                Developer.
              </h1>
            </div>

            {/* Video in mobile view */}
            <div className="md:hidden">
              <div className="group relative aspect-square w-full overflow-hidden rounded-3xl border-2 border-[#0B0B14]/20">
                <div className="absolute inset-0">
                  <ReactPlayer
                    url="/u1.mp4"
                    width="100%"
                    height="100%"
                    playing={isPlaying}
                    volume={volume}
                    muted={isMuted}
                    controls={true}
                    playsinline
                    style={{ position: 'absolute', top: 0 }}
                    config={{
                      file: {
                        attributes: {
                          style: {
                            objectFit: 'cover',
                            opacity: 0.9
                          }
                        }
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            <p className="text-base md:text-lg text-gray-400">
              I help startups and product teams turn ideas into real, high-performance applications built with clean architecture and designed to grow.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <MagicButton
                title="Download CV"
                icon={<FaLocationArrow className="ml-2" />}
                position="right"
                asChild
                otherClasses="border-none bg-[#0B0B14] px-6 py-3 text-white hover:bg-purple-500/10 !mt-0"
                handleClick={handleDownload}
              />

              <div className="flex items-center md:space-x-6 space-x-12 md:pt-0 pt-2">
                <Link href="https://github.com/ThiagoC0STA" target="_blank" className="text-2xl text-gray-500 transition-colors hover:text-white">
                  <FaGithub />
                </Link>
                <Link href="https://www.linkedin.com/in/rodcdev/" target="_blank" className="text-2xl text-gray-500 transition-colors hover:text-white">
                  <FaLinkedin />
                </Link>
                <Link href="https://www.upwork.com/freelancers/thiagoc14?mp_source=share" target="_blank" className="text-2xl text-gray-500 opacity-50 hover:opacity-100 transition hover:text-white">
                  <Image src="/upwork-white.svg" alt="Upwork" className="w-6 h-6 inline" width={24} height={24} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Video (Desktop only) */}
          <div className=" md:block group relative aspect-square w-full flex justify-center items-center overflow-hidden lg:justify-self-end border-2 border-[#0B0B14]/20 md:flex-[6]">
            <div className="absolute inset-0">
              <ReactPlayer
                url="/intro.mov"
                width="100%"
                height="100%"
                playing={isPlaying}
                volume={volume}
                muted={isMuted}
                controls={true}
                playsinline
                style={{ position: 'absolute', top: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                config={{
                  file: {
                    attributes: {
                      style: {
                        objectFit: 'cover',
                        opacity: 0.8
                      }
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-20 grid grid-cols-2 md:flex justify-between items-center gap-6 md:gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-4xl md:text-6xl font-semibold text-white">{stat.value}</h3>
              <p className="mt-1 text-xs md:text-sm text-white md:max-w-[85px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
