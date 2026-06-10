"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const observeElements = () => {
      document.querySelectorAll(".reveal:not(.revealed)").forEach((el) => {
        observer.observe(el);
      });
    };

    // Appliquer l'observateur avec un léger délai pour que le DOM soit rendu
    const timeout = setTimeout(observeElements, 100);

    // Mettre en place un MutationObserver pour surveiller les nouveaux éléments du DOM au cas où
    const mutationObserver = new MutationObserver((mutations) => {
      let shouldObserve = false;
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          shouldObserve = true;
          break;
        }
      }
      if (shouldObserve) {
        observeElements();
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
