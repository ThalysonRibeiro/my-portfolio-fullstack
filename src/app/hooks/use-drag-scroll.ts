"use client";

import { useCallback, useRef, useState } from "react";

export function useDragScroll(
  changeLayout: boolean,
  scrollRef: React.RefObject<HTMLDivElement | null>
) {
  const [isDown, setIsDown] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeftStart, setScrollLeftStart] = useState<number>(0);
  const [hasMoved, setHasMoved] = useState<boolean>(false);
  const animationFrameRef = useRef<number | null>(null);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (changeLayout) return;

      // Pega o elemento interno com scroll
      const container = scrollRef.current?.querySelector(
        ".relative.w-full.overflow-x-auto"
      ) as HTMLElement;
      if (!container) return;

      // Não inicia drag em elementos interativos
      const target = e.target as HTMLElement;
      if (
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.closest("a")
      ) {
        return;
      }

      setIsDown(true);
      setHasMoved(false);
      container.style.cursor = "grabbing";
      container.style.userSelect = "none";
      container.style.scrollBehavior = "auto";

      setStartX(e.pageX - container.offsetLeft);
      setScrollLeftStart(container.scrollLeft);
    },
    [changeLayout, scrollRef]
  );

  const handleMouseLeave = useCallback(() => {
    setIsDown(false);

    // Cancela qualquer animação pendente
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    const container = scrollRef.current?.querySelector(
      ".relative.w-full.overflow-x-auto"
    ) as HTMLElement;
    if (container) {
      container.style.cursor = "grab";
      container.style.userSelect = "auto";
    }
  }, [scrollRef]);

  const handleMouseUp = useCallback(() => {
    setIsDown(false);

    // Cancela qualquer animação pendente
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    const container = scrollRef.current?.querySelector(
      ".relative.w-full.overflow-x-auto"
    ) as HTMLElement;
    if (container) {
      container.style.cursor = "grab";
      container.style.userSelect = "auto";
    }
  }, [scrollRef]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDown) return;

      const container = scrollRef.current?.querySelector(
        ".relative.w-full.overflow-x-auto"
      ) as HTMLElement;
      if (!container) return;

      e.preventDefault();

      const x = e.pageX - container.offsetLeft;
      const walk = x - startX;

      const newScrollLeft = scrollLeftStart - walk;

      container.scrollLeft = newScrollLeft;
    },
    [isDown, scrollLeftStart, startX, scrollRef]
  );

  return {
    hasMoved,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove
  };
}
