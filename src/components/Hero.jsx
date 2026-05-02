import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaDribbble } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { HiOutlineDocumentText } from "react-icons/hi";

import { styles } from "../styles";

const socialLinks = [
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/agungairlangga" },
  { icon: <FaGithub />, href: "https://github.com/agungairlangg635-hue" },
  { icon: <FaDribbble />, href: "#about" },
  { icon: <SiGmail />, href: "mailto:agungairlangg635@gmail.com" },];

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Overlay gelap untuk meredam background topografi yang terlalu ungu */}
      <div className="absolute inset-0 bg-[#050816]/40 z-[1] pointer-events-none" />

      {/* Main content - 2 kolom */}
      <div
        className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12`}
      >
        {/* LEFT - Text content + garis vertikal ungu (asli) */}
        <div className="flex flex-row items-start gap-5 flex-1 z-[2]">
          {/* Garis ungu vertikal asli */}
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          {/* Konten teks */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            {/* Greeting kecil */}
            <p className="text-[#8b5cf6] text-[16px] sm:text-[18px] lg:text-[20px] font-bold uppercase tracking-[3px] mb-4">
              Hi, I'm Agung
            </p>

            {/* Heading utama */}
            <h1 className="text-white font-black leading-[1] text-[44px] sm:text-[60px] lg:text-[72px] xl:text-[88px] tracking-tight mb-6">
              {" "}
              <span className="bg-gradient-to-r from-[#a78bfa] via-[#8b5cf6] to-[#c4b5fd] bg-clip-text text-transparent">
                Data
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#a78bfa] via-[#8b5cf6] to-[#c4b5fd] bg-clip-text text-transparent">
                Engineer
              </span>
            </h1>

            {/* Deskripsi */}
            <p className="text-white/60 text-[14px] sm:text-[16px] lg:text-[17px] leading-[1.7] max-w-[500px] mb-8">
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#works"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#915EFF] text-white font-bold uppercase tracking-[1.5px] text-[14px] rounded-md hover:bg-[#7c4dff] transition-colors shadow-[0_10px_30px_rgba(145,94,255,0.3)] text-center"
              >
                View My Projects
              </motion.a>

              <motion.a
                href="/m.pdf"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-white/20 text-white font-bold uppercase tracking-[1.5px] text-[14px] rounded-md hover:border-[#915EFF] hover:text-[#915EFF] transition-all flex items-center justify-center gap-2"
              >
                <HiOutlineDocumentText className="text-[18px]" />
                Resume
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT - Photo dalam frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center items-center relative z-[2] flex-shrink-0"
        >
          <div className="relative">
            {/* Glow ATAS */}
            <div className="absolute -top-12 left-0 right-0 h-32 
                            bg-gradient-to-b from-[#915EFF]/40 via-[#915EFF]/20 to-transparent 
                            blur-[40px] rounded-full pointer-events-none" />
            
            {/* Glow KIRI */}
            <div className="absolute -left-12 top-8 bottom-12 w-32 
                            bg-gradient-to-r from-[#915EFF]/40 via-[#915EFF]/20 to-transparent 
                            blur-[40px] rounded-full pointer-events-none" />
            
            {/* Glow KANAN */}
            <div className="absolute -right-12 top-8 bottom-12 w-32 
                            bg-gradient-to-l from-[#915EFF]/40 via-[#915EFF]/20 to-transparent 
                            blur-[40px] rounded-full pointer-events-none" />

            {/* Glow ring tipis di pinggir frame */}
            <div className="absolute -inset-[2px] rounded-[26px] pointer-events-none"
                 style={{
                   background: 'linear-gradient(to bottom, #915EFF 0%, #a78bfa 50%, transparent 90%)',
                   filter: 'blur(2px)',
                   opacity: 0.5,
                 }} />

            {/* Frame foto - dengan GRADIENT INTERNAL */}
            <div 
              className="relative w-[280px] h-[360px] sm:w-[340px] sm:h-[440px] lg:w-[400px] lg:h-[500px] xl:w-[440px] xl:h-[540px] rounded-[24px] overflow-hidden border-t border-l border-r border-[#915EFF]/40 border-b border-b-[#915EFF]/10 shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
              style={{
                background: 'radial-gradient(ellipse at 50% 30%, #2d1b4e 0%, #1a1030 35%, #0d0820 70%, #050816 100%)'
              }}
            >
              {/* Layer ambient glow di dalam frame - ungu lembut */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 25%, rgba(145, 94, 255, 0.25) 0%, rgba(145, 94, 255, 0.08) 40%, transparent 70%)'
                }}
              />

              {/* Foto - di-crop hingga pinggang */}
              <img
                src="/me2.png"
                alt="Agung Airlangga"
                className="relative w-full h-full object-cover object-top z-10"
              />

              {/* Overlay gradient halus di bawah untuk depth (foto bagian bawah jadi lebih dark) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent pointer-events-none z-20" />

              {/* Vignette halus di pinggir untuk dimensi */}
              <div 
                className="absolute inset-0 pointer-events-none z-20"
                style={{
                  background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.3) 100%)'
                }}
              />
            </div>

            {/* Decorative corners - hanya atas */}
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#915EFF]/70 rounded-tr-lg" />
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#915EFF]/70 rounded-tl-lg" />
          </div>
        </motion.div>
      </div>

      {/* Left vertical socials */}
      {/* Social links - desktop kiri, mobile bawah tengah */}
      <div
        className="
          fixed md:absolute
          left-1/2 md:left-8
          bottom-5 md:bottom-10
          -translate-x-1/2 md:translate-x-0
          z-[9999]
          flex flex-row md:flex-col
          items-center justify-center
          gap-4 md:gap-5
          px-5 py-3 md:p-0
          rounded-full md:rounded-none
          border border-white/10 md:border-0
          bg-[#050816]/80 md:bg-transparent
          backdrop-blur-md md:backdrop-blur-0
          shadow-[0_0_25px_rgba(145,94,255,0.3)] md:shadow-none
        "
      >
        {socialLinks.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : "_self"}
            rel="noreferrer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
            className="
              flex items-center justify-center
              w-10 h-10
              rounded-full
              text-white/80 text-[20px]
              bg-white/5 md:bg-transparent
              border border-white/10 md:border-0
              hover:text-white
              hover:bg-[#915EFF]
              hover:scale-110
              transition-all duration-300
            "
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Hero;