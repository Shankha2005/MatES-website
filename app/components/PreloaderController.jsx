"use client";
import { useEffect } from "react";

export default function PreloaderController() {
  useEffect(() => {
    const hide = () => {
      const el = document.getElementById("preloader");
      if (el) {
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
        setTimeout(() => {
          if (el && el.parentElement) {
            try { el.parentElement.removeChild(el); } catch {}
          }
        }, 500);
      }
      document.body.classList.add("ready");
    };
    if (document.readyState === "complete") hide();
    else window.addEventListener("load", hide, { once: true });
  return () => window.removeEventListener("load", hide);
  }, []);
  return null;
}
