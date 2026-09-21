import React, { useEffect, useMemo, useState } from "react";

function getSlidesPerView(isCompact, width) {
  if (isCompact) return 1;
  if (width >= 1280) return 3;
  if (width >= 768) return 2;
  return 1;
}

function TestimonialSlider({ slides, compact = false, ariaLabel = "Testimonials slider" }) {
  const [viewportWidth, setViewportWidth] = useState(
    typeof window === "undefined" ? 1280 : window.innerWidth
  );
  const [pageIndex, setPageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [dragStartX, setDragStartX] = useState(null);
  const [isMouseDragging, setIsMouseDragging] = useState(false);

  useEffect(() => {
    function onResize() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const slidesPerView = getSlidesPerView(compact, viewportWidth);
  const pageCount = Math.max(1, Math.ceil(slides.length / slidesPerView));

  useEffect(() => {
    setPageIndex((prev) => Math.min(prev, pageCount - 1));
  }, [pageCount]);

  const slideWidthPercent = 100 / slidesPerView;
  const translatePercent = pageIndex * 100;
  const canGoPrev = pageCount > 1;
  const canGoNext = pageCount > 1;

  const visibleSlides = useMemo(() => slides, [slides]);

  function goToPage(nextPage, { loop = false } = {}) {
    if (pageCount <= 1) {
      setPageIndex(0);
      return;
    }

    if (loop) {
      const wrapped = ((nextPage % pageCount) + pageCount) % pageCount;
      setPageIndex(wrapped);
      return;
    }

    const bounded = Math.max(0, Math.min(nextPage, pageCount - 1));
    setPageIndex(bounded);
  }

  function handleTouchStart(event) {
    setTouchStartX(event.changedTouches[0].clientX);
  }

  function handleTouchEnd(event) {
    if (touchStartX == null) return;
    const delta = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 45) {
      if (delta < 0 && canGoNext) goToPage(pageIndex + 1, { loop: true });
      if (delta > 0 && canGoPrev) goToPage(pageIndex - 1, { loop: true });
    }
    setTouchStartX(null);
  }

  function handleMouseDown(event) {
    setDragStartX(event.clientX);
    setIsMouseDragging(false);
  }

  function handleMouseMove(event) {
    if (dragStartX == null) return;
    if (!isMouseDragging && Math.abs(event.clientX - dragStartX) > 4) {
      setIsMouseDragging(true);
    }
  }

  function handleMouseUp(event) {
    if (dragStartX == null) return;
    const delta = event.clientX - dragStartX;
    if (Math.abs(delta) > 45) {
      if (delta < 0 && canGoNext) goToPage(pageIndex + 1, { loop: true });
      if (delta > 0 && canGoPrev) goToPage(pageIndex - 1, { loop: true });
    }
    setDragStartX(null);
    setIsMouseDragging(false);
  }

  function handleMouseLeave() {
    if (dragStartX == null) return;
    setDragStartX(null);
    setIsMouseDragging(false);
  }

  const frameClassName = compact
    ? "relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0f18] p-3 ring-1 ring-white/[0.05]"
    : "relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0f18] p-3 ring-1 ring-white/[0.05]";

  return (
    <div className={compact ? "mx-auto w-full max-w-[420px]" : "w-full"}>
      <div
        className={frameClassName}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${translatePercent}%)` }}
        >
          {visibleSlides.map((slide, index) => (
            <div
              key={slide.src}
              className="shrink-0 p-2"
              style={{ flexBasis: `${slideWidthPercent}%` }}
              aria-hidden={
                index < pageIndex * slidesPerView ||
                index >= (pageIndex + 1) * slidesPerView
              }
            >
              <figure
                tabIndex={0}
                className="group overflow-hidden rounded-xl bg-[#111827] outline-none transition duration-300 hover:scale-[1.06] hover:shadow-[0_20px_40px_-20px_rgba(148,163,184,0.45)] focus-visible:scale-[1.06] focus-visible:shadow-[0_20px_40px_-20px_rgba(148,163,184,0.45)] focus-visible:ring-2 focus-visible:ring-indigo-300/80"
                onClick={(event) => {
                  if (isMouseDragging) {
                    event.preventDefault();
                  }
                }}
              >
                <div
                  className={`flex items-center justify-center bg-[#0f172a] ${
                    compact ? "h-[300px] sm:h-[360px]" : "h-full min-h-[260px]"
                  }`}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    loading="lazy"
                    draggable={false}
                    onDragStart={(event) => event.preventDefault()}
                    className="h-full max-h-[560px] w-full object-contain"
                  />
                </div>
              </figure>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#0b0f18] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#0b0f18] to-transparent" />
      </div>

      <div className={`mt-4 flex items-center gap-3 ${compact ? "justify-center" : "justify-between"}`}>
        {!compact && (
          <button
            type="button"
            onClick={() => goToPage(pageIndex - 1, { loop: true })}
            disabled={!canGoPrev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#111827] text-slate-200 transition hover:border-white/35 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            aria-label="Previous slide"
          >
            <span aria-hidden="true">←</span>
          </button>
        )}

        <div
          className="flex items-center gap-2"
          role="tablist"
          aria-label="Select testimonial slide"
        >
          {Array.from({ length: pageCount }).map((_, dotIndex) => {
            const selected = dotIndex === pageIndex;
            return (
              <button
                key={dotIndex}
                type="button"
                onClick={() => goToPage(dotIndex)}
                className={`h-2.5 w-2.5 rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 ${
                  selected ? "bg-white" : "bg-slate-500 hover:bg-slate-300"
                }`}
                role="tab"
                aria-label={`Slide ${dotIndex + 1} of ${pageCount}`}
                aria-selected={selected}
              />
            );
          })}
        </div>

        {!compact && (
          <button
            type="button"
            onClick={() => goToPage(pageIndex + 1, { loop: true })}
            disabled={!canGoNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#111827] text-slate-200 transition hover:border-white/35 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            aria-label="Next slide"
          >
            <span aria-hidden="true">→</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default TestimonialSlider;
