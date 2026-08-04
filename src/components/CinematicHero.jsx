import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function CinematicHero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Bind scroll progress to the hero track container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out scroll progress for 60fps luxury feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001,
  });

  // -------------------------------------------------------------
  // STEP 02 Animations: Hero Text & Features Fade Out & Move Up
  // -------------------------------------------------------------
  const heroTextOpacity = useTransform(smoothProgress, [0, 0.22], [1, 0]);
  const heroTextY = useTransform(smoothProgress, [0, 0.22], [0, -100]);

  const heroRightOpacity = useTransform(smoothProgress, [0, 0.22], [1, 0]);
  const heroRightY = useTransform(smoothProgress, [0, 0.22], [0, -80]);

  // Background Image scale and dimming
  const bgScale = useTransform(smoothProgress, [0, 0.6], [1, 1.08]);
  const bgOverlayOpacity = useTransform(
    smoothProgress,
    [0.08, 0.55],
    [0.35, 0.85],
  );

  // -------------------------------------------------------------
  // Video Card Peek & Scroll Slide Up
  // Initial state (scroll=0): Video card is positioned at 75vh,
  // so top portion of video card peeks up from the bottom of the hero screen.
  // -------------------------------------------------------------
  // Phase 1 (0 to 0.4): Card slides up to 15vh AND grows from 55% to 76% width
  // Phase 2 (0.4 to 0.7): Card slides up to 0vh to fill screen top. Background expands to 100%
  // Phase 3 (0.7 to 0.95): Card stays at 0vh (locked to screen)
  const cardTranslateY = useTransform(
    smoothProgress,
    [0, 0.4, 0.7, 0.95],
    ["85vh", "15vh", "0vh", "0vh"],
  );

  // Phase 1: Card width expands linearly from 55% to 100% starting IMMEDIATELY
  const cardWidth = useTransform(smoothProgress, [0, 0.7], ["55%", "100%"]);
  const cardBorderRadius = useTransform(
    smoothProgress,
    [0, 0.4, 0.7],
    ["32px", "32px", "0px"],
  );

  // Phase 1: Video relative width shrinks to 80% so the cream background frame thickens!
  // Phase 2: Video inversely scales from 80% down to 65% to remain physically still at 65vw!
  const videoWidth = useTransform(
    smoothProgress,
    [0, 0.4, 0.7],
    ["100%", "80%", "65%"],
  );

  // Phase 1: Increase padding to 12vh to match the thickening side borders.
  // Phase 2: Increase padding to 27vh to offset the 15vh card upward movement (keeps video still)
  // Phase 3: Decrease padding to 4vh to slide video & text UP so text fully fits on screen!
  const cardPaddingTop = useTransform(
    smoothProgress,
    [0, 0.4, 0.7, 0.95],
    ["2.2vh", "12vh", "27vh", "4vh"],
  );

  // Phase 3: Cream Content Card inner content reveals while sliding up (0.7 to 0.95)
  const creamContentOpacity = useTransform(smoothProgress, [0.7, 0.95], [0, 1]);
  const creamContentY = useTransform(smoothProgress, [0.7, 0.95], [40, 0]);

  // Handle Play/Pause toggle
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle Mute toggle
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[320vh] w-full bg-[#080d09]"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        {/* ============================================================== */}
        {/* BACKGROUND IMAGE LAYER (STEP 01)                               */}
        {/* ============================================================== */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ scale: bgScale }}
        >
          <img
            src="/images/hero-image.avif"
            alt="Ixolyn luxury skin treatment hero"
            className="w-full h-full object-cover object-center"
          />
          {/* Dynamic dark gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#080d09] via-[#080d09]/40 to-black/60"
            style={{ opacity: bgOverlayOpacity }}
          />
        </motion.div>

        {/* ============================================================== */}
        {/* HERO CONTENT LAYER (POSITIONED HIGHER)                        */}
        {/* ============================================================== */}
        <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 sm:px-10 lg:px-16 pt-20 sm:pt-24 lg:pt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 pb-44 pointer-events-none">
          {/* Left Column: Heading, Description, CTA */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start gap-5 pointer-events-auto"
            style={{ opacity: heroTextOpacity, y: heroTextY }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-['Outfit']">
              Professional skin <br className="hidden sm:inline" />
              treatment
            </h1>

            <p className="text-lg sm:text-xl text-gray-200/90 font-light tracking-wide max-w-xl">
              Skin & hair restoration treatments
            </p>

            <a
              href="#booking"
              className="mt-1 group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 backdrop-blur-md transition-all duration-300 font-medium text-base shadow-xl"
            >
              <span>Book your free consultation</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>

          {/* Right Column: Vertical Feature List */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end pointer-events-auto"
            style={{ opacity: heroRightOpacity, y: heroRightY }}
          >
            <ul className="flex flex-col gap-4 text-left sm:text-right font-medium text-white/90 text-base sm:text-lg">
              <li className="flex items-center gap-3 transition-opacity hover:opacity-100">
                <span className="text-[#c6ab82] font-semibold">—</span>
                <span className="tracking-wide">Hair restoration</span>
              </li>
              <li className="flex items-center gap-3 transition-opacity hover:opacity-100">
                <span className="text-[#c6ab82] font-semibold">—</span>
                <span className="tracking-wide">Tattoo removal</span>
              </li>
              <li className="flex items-center gap-3 transition-opacity hover:opacity-100">
                <span className="text-[#c6ab82] font-semibold">—</span>
                <span className="tracking-wide">Injectable treatments</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* REVEALABLE VIDEO & CREAM CONTENT CARD                          */}
        {/* ============================================================== */}
        {/* Anchored to top so expanding width doesn't shift video vertically! */}
        <div className="absolute inset-x-0 top-0 z-20 flex justify-center items-start pointer-events-auto h-[200vh] lg:pb-10">
          <motion.div
            style={{
              y: cardTranslateY,
              width: cardWidth,
              paddingTop: cardPaddingTop,
              minHeight: "100vh",
            }}
            className="overflow-hidden bg-[#e7e2d9] shadow-2xl transition-shadow duration-300 flex flex-col origin-top"
          >
            {/* ----------------------------------------------------------- */}
            {/* VIDEO CONTAINER (AT THE TOP WITH CREAM BORDER)              */}
            {/* ----------------------------------------------------------- */}
            <div className="w-full flex justify-center px-3 sm:px-5 lg:px-6 lg:pb-0">
              <motion.div
                style={{
                  borderRadius: "12px",
                  width: videoWidth,
                }}
                className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.4/1] bg-black overflow-hidden group shadow-md"
              >
                <video
                  ref={videoRef}
                  src="/images/skin-care.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle Gradient overlay on video */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Interactive Video Controls Overlay */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-30 flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-2.5 sm:p-3 rounded-full bg-black/60 text-white hover:bg-white hover:text-black backdrop-blur-md transition-all border border-white/20"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    )}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-2.5 sm:p-3 rounded-full bg-black/60 text-white hover:bg-white hover:text-black backdrop-blur-md transition-all border border-white/20"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>

                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs text-white/90 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Cinematic Treatment Showcase</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ----------------------------------------------------------- */}
            {/* CREAM CONTENT CARD (BELOW THE VIDEO)                        */}
            {/* ----------------------------------------------------------- */}
            <motion.div
              style={{ opacity: creamContentOpacity, y: creamContentY }}
              className="w-full px-6 sm:px-12 pt-6 sm:pt-10 pb-8 sm:pb-16 bg-[#e7e2d9] text-[#0f1712] flex flex-col items-center text-center"
            >
              {/* Small Eyebrow Title */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#526356] mb-3">
                <span className="inline-block w-2 h-2 rounded-full bg-[#3d4d41]" />
                <span>What we solve</span>
              </div>

              {/* Large Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0f1712] max-w-3xl leading-[1.15] font-['Outfit'] mb-4"
              >
                Target every skin concern with precision care
              </motion.h2>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-[#3d4d41] font-normal max-w-2xl leading-relaxed mb-6">
                No matter your skin challenge, our advanced treatments are
                designed to restore clarity, texture, and confidence.
              </p>

              {/* CTA Button */}
              <a
                href="#treatments"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#0f1712] hover:text-[#3d4d41] transition-colors border-b border-[#0f1712]/30 pb-0.5 group"
              >
                <span>Explore all treatments</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
