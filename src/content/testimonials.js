const assetUrl = (path) =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\//, "")}`;

const testimonialSlides = [
  {
    src: assetUrl("/testimonials/testimonial-1.png"),
    alt: "Screenshot of a parent message thanking Bryan for tutoring support and guidance.",
  },
  {
    src: assetUrl("/testimonials/testimonial-2.png"),
    alt: "Screenshot of a parent testimonial expressing gratitude for schedule support and tutoring.",
  },
  {
    src: assetUrl("/testimonials/testimonial-3.png"),
    alt: "Screenshot of a parent message offering a higher hourly rate because they value Bryan's tutoring.",
  },
];

const compactTestimonialSlides = [
  testimonialSlides[2],
  testimonialSlides[0],
  testimonialSlides[1],
];

export { testimonialSlides, compactTestimonialSlides };
