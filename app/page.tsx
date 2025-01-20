import Image from "next/image"
import { socialLinks } from "./config"

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Next Folio Starter
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          A clean, fast portfolio starter with smooth scrolling and animations, built with Next.js,
          Vercel, and Tailwind CSS.
        </p>
        <p>
          Next Folio Starter includes everything you need: MDX blog, SEO, RSS feeds, analytics, 
          smooth scrolling with Lenis, GSAP animations, and{" "}
          <a
            target="_blank"
            href="https://github.com/filipz/next-folio-starter?tab=readme-ov-file#features"
          >
            more
          </a>
          .
        </p>
        <p>
          This project is{" "}
          <a href={socialLinks.github} target="_blank">
            open-source
          </a>{" "}
          and fully customizable, making it easy to add more features.
        </p>
        <p>
          <a
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ffilipz%2Fnext-folio-starter"
            target="_blank"
          >
            Deploy
          </a>{" "}
          your portfolio with Vercel in minutes and follow the setup
          instructions in the{" "}
          <a href="/blog/getting-started">Getting Started</a> post.
        </p>
        <p>
          Based on{" "}
          <a href="https://github.com/1msirius/Nextfolio" target="_blank">
            Nextfolio
          </a>{" "}
          by{" "}
          <a href="https://imsirius.xyz/" target="_blank">
            Sirius
          </a>
          , enhanced with smooth scrolling and animations.
        </p>
      </div>
    </section>
  )
}