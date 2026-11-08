"use client";

import { useEffect } from "react";

const LOADER_SESSION_KEY = "mukesh-portfolio-loader-seen";
const LOADER_MIN_DURATION = 850;
const LOADER_MAX_DURATION = 2200;
const LOADER_EXIT_DURATION = 720;

function hasSeenLoader() {
  try {
    return window.sessionStorage.getItem(LOADER_SESSION_KEY) === "true";
  } catch {
    return false;
  }
}

function rememberLoader() {
  try {
    window.sessionStorage.setItem(LOADER_SESSION_KEY, "true");
  } catch {
    // The loader still exits normally when session storage is unavailable.
  }
}

export function ExperienceMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const loader = document.querySelector<HTMLElement>(".site-loader");
    const hero = document.querySelector<HTMLElement>(".hero-section");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let enterFrame = 0;
    let scrollFrame = 0;
    let settleTimer = 0;
    let exitTimer = 0;
    let fallbackTimer = 0;
    let minimumTimer = 0;
    let loaderExited = false;
    let updateScrollMotion = () => {};
    const startedAt = performance.now();

    root.classList.add("motion-ready");

    const enterHero = () => {
      enterFrame = window.requestAnimationFrame(() => {
        root.classList.add("motion-entered");
        updateScrollMotion();
        settleTimer = window.setTimeout(
          () => root.classList.add("motion-settled"),
          1800,
        );
      });
    };

    const exitLoader = () => {
      if (loaderExited) return;
      loaderExited = true;
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(minimumTimer);
      loader?.classList.add("is-exiting");
      enterHero();
      rememberLoader();
      exitTimer = window.setTimeout(() => loader?.remove(), LOADER_EXIT_DURATION);
    };

    const onPageReady = () => {
      const remaining = Math.max(
        0,
        LOADER_MIN_DURATION - (performance.now() - startedAt),
      );
      minimumTimer = window.setTimeout(exitLoader, remaining);
    };

    const seen = hasSeenLoader();
    if (reducedMotion || seen) {
      loader?.classList.add("is-exiting");
      enterHero();
      exitTimer = window.setTimeout(() => loader?.remove(), 0);
    } else {
      window.requestAnimationFrame(() => loader?.classList.add("is-revealed"));
      window.addEventListener("load", onPageReady, { once: true });
      fallbackTimer = window.setTimeout(onPageReady, LOADER_MAX_DURATION);
      if (document.readyState === "complete") onPageReady();
    }

    if (reducedMotion || !hero) {
      return () => {
        window.cancelAnimationFrame(enterFrame);
        window.clearTimeout(exitTimer);
        window.clearTimeout(settleTimer);
        window.clearTimeout(fallbackTimer);
        window.clearTimeout(minimumTimer);
        window.removeEventListener("load", onPageReady);
        root.classList.remove("motion-ready", "motion-entered", "motion-settled");
      };
    }

    const name = hero.querySelector<HTMLElement>(".hero-name");
    const portrait = hero.querySelector<HTMLElement>(".portrait-layer");
    const description = hero.querySelector<HTMLElement>(".hero-description");
    const actions = hero.querySelector<HTMLElement>(".hero-actions");
    const scrollCue = hero.querySelector<HTMLElement>(".scroll-cue");
    const isMobile = window.matchMedia("(max-width: 760px)");
    let isScrollTicking = false;

    updateScrollMotion = () => {
      if (!root.classList.contains("motion-entered")) return;
      isScrollTicking = false;
      const distance = Math.max(1, hero.offsetHeight * 0.85);
      const progress = Math.min(
        1,
        Math.max(0, (window.scrollY - hero.offsetTop) / distance),
      );
      const intensity = isMobile.matches ? 0.6 : 1;

      if (name) {
        name.style.transform = `translate3d(0, ${-34 * progress * intensity}px, 0) scale(${1 - 0.075 * progress})`;
      }
      if (portrait) {
        portrait.style.transform = `translate3d(0, ${24 * progress * intensity}px, 0) scale(${1 + 0.025 * progress})`;
      }
      if (description) description.style.opacity = String(1 - 0.24 * progress);
      if (actions) actions.style.opacity = String(1 - 0.32 * progress);
      if (scrollCue) scrollCue.style.opacity = String(1 - progress);
    };

    const onScroll = () => {
      if (isScrollTicking) return;
      isScrollTicking = true;
      scrollFrame = window.requestAnimationFrame(updateScrollMotion);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateScrollMotion();

    return () => {
      window.cancelAnimationFrame(enterFrame);
      window.cancelAnimationFrame(scrollFrame);
      window.clearTimeout(exitTimer);
      window.clearTimeout(settleTimer);
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(minimumTimer);
      window.removeEventListener("load", onPageReady);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      root.classList.remove("motion-ready", "motion-entered", "motion-settled");
    };
  }, []);

  return (
    <div className="site-loader" aria-hidden="true">
      <div className="loader-content">
        <span className="loader-overline eyebrow">MUKESH KUMAR · PORTFOLIO</span>
        <span className="loader-name">Mukesh Kumar<span>.</span></span>
        <span className="loader-rule" />
      </div>
    </div>
  );
}
