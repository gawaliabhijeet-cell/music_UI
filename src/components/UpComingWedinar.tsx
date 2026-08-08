
"use client";

import { HoverEffect } from "./ui/card-hover-effect";
import ViewAllCourse from "./ui/view_all_course";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "The Art of Songwriting",
      description:
        "Learn the craft of songwriting from experienced musicians and songwriters.",
      slug: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Mastering Your Instrument",
      description:
        "Advanced techniques to master your musical instrument of choice.",
      slug: "mastering-your-instrument",
      isFeatured: true,
    },
    {
      title: "Music Production Essentials",
      description:
        "Get started with music production with this comprehensive overview.",
      slug: "music-production-essentials",
      isFeatured: true,
    },
    {
      title: "Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies.",
      slug: "live-performance-techniques",
      isFeatured: true,
    },
    {
      title: "Digital Music Marketing",
      description:
        "Learn how to promote your music effectively in the digital age.",
      slug: "digital-music-marketing",
      isFeatured: true,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
            Featured Webinars
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl dark:text-white">
            Enhance Your Musical Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
            Explore our featured music webinars and learn from experienced
            musicians, producers, and instructors.
          </p>
        </div>

        {/* Webinar Cards */}
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: `/courses/${webinar.slug}`,
            }))}
          />
        </div>

        {/* View All Courses */}
        <div className="mt-10 flex justify-center">
          <ViewAllCourse />
        </div>
      </div>
    </section>
  );
}

export default UpcomingWebinars;
