// components/SmoothScroll.jsx
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  const scrollRef = useRef();

  useEffect(() => {
    const scrollEl = scrollRef.current;

    const loco = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    loco.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length ? loco.scrollTo(value, 0, 0) : loco.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: scrollEl.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => loco.update());

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener("refresh", loco.update);
      loco.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}
