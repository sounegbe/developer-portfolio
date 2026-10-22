"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPlayback = () => {
      if (reducedMotion.matches) {
        video.pause();
        video.currentTime = 0;
      } else {
        void video.play().catch(() => {
          // Browser autoplay restrictions may prevent playback; the static background remains.
        });
      }
    };

    syncPlayback();
    reducedMotion.addEventListener("change", syncPlayback);

    return () => {
      reducedMotion.removeEventListener("change", syncPlayback);
      video.pause();
    };
  }, []);

  return (
    <div aria-hidden="true" className="ambient-background">
      <div className="ambient-background__grid" />
      <div className="ambient-background__orb ambient-background__orb--one" />
      <div className="ambient-background__orb ambient-background__orb--two" />
      <div className="ambient-background__orb ambient-background__orb--three" />
      <video
        ref={videoRef}
        className="ambient-background__video"
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/ai-background.mp4" type="video/mp4" />
      </video>
      <div className="ambient-background__shade" />
    </div>
  );
}
