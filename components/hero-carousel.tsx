"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { heroCarouselImages } from "@/lib/site-images";

const INTERVAL = 5500; // ms between slides
const FADE_DURATION = 1200; // ms — must match CSS transition

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advance = (next: number) => {
    if (fading) return;
    setPrev(current);
    setFading(true);
    // After fade completes, commit new slide and reset prev
    setTimeout(() => {
      setCurrent(next);
      setPrev(null);
      setFading(false);
    }, FADE_DURATION);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      advance((current + 1) % heroCarouselImages.length);
    }, INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, fading]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* Outgoing slide fades out */}
      {prev !== null && (
        <Image
          key={`prev-${prev}`}
          src={heroCarouselImages[prev].src}
          alt={heroCarouselImages[prev].alt}
          fill
          loading="eager"
          fetchPriority="low"
          sizes="100vw"
          className="object-cover object-center"
          style={{
            opacity: 0,
            transition: `opacity ${FADE_DURATION}ms ease-in-out`,
          }}
        />
      )}

      {/* Current slide — fades in when fading=true */}
      <Image
        key={`curr-${current}`}
        src={heroCarouselImages[current].src}
        alt={heroCarouselImages[current].alt}
        fill
        priority={current === 0}
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
        style={{
          opacity: fading ? 1 : 1,
          transition: `opacity ${FADE_DURATION}ms ease-in-out`,
        }}
      />

      {/* Dot indicators */}
      <div
        className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2"
        role="tablist"
        aria-label="Slides do carrossel"
      >
        {heroCarouselImages.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            onClick={() => advance(i)}
            className="focus-ring h-1.5 rounded-full transition-all duration-500"
            style={{
              width: i === current ? "24px" : "6px",
              background:
                i === current
                  ? "rgba(245,158,11,0.9)"
                  : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
