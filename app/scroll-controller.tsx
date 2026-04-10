"use client";

import { useEffect } from "react";

function getScrollableParent(start: EventTarget | null): HTMLElement | null {
  if (!(start instanceof HTMLElement)) {
    return null;
  }

  let node: HTMLElement | null = start;

  while (node && node !== document.body) {
    const styles = window.getComputedStyle(node);
    const overflowY = styles.overflowY;
    const canScroll =
      (overflowY === "auto" || overflowY === "scroll") &&
      node.scrollHeight > node.clientHeight + 4;

    if (canScroll) {
      return node;
    }

    node = node.parentElement;
  }

  return null;
}

export default function ScrollController() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopQuery = window.matchMedia("(min-width: 960px)");

    if (prefersReducedMotion.matches || !desktopQuery.matches) {
      return;
    }

    let frameId = 0;
    let targetY = window.scrollY;
    let currentY = window.scrollY;

    const stopAnimation = () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
      }
    };

    const animate = () => {
      currentY += (targetY - currentY) * 0.085;

      if (Math.abs(targetY - currentY) < 0.4) {
        currentY = targetY;
        window.scrollTo(0, currentY);
        stopAnimation();
        return;
      }

      window.scrollTo(0, currentY);
      frameId = window.requestAnimationFrame(animate);
    };

    const syncToNativeScroll = () => {
      if (!frameId) {
        currentY = window.scrollY;
        targetY = window.scrollY;
      }
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey) {
        return;
      }

      if (getScrollableParent(event.target)) {
        return;
      }

      event.preventDefault();

      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      targetY = Math.max(0, Math.min(maxScroll, targetY + event.deltaY * 0.55));

      if (!frameId) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", syncToNativeScroll, { passive: true });

    return () => {
      stopAnimation();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", syncToNativeScroll);
    };
  }, []);

  return null;
}
