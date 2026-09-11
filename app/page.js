import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="max-w-2xl w-full">
        <header className="text-center mb-10 sm:mb-12">
          <div>
            <Image
              src="/images/alket-rexhepi.jpeg"
              alt="Alket Rexhepi"
              width={200}
              height={200}
              priority
              className="rounded-full mx-auto mb-6 border-4 border-black"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold">Alket Rexhepi</h1>
          <p className="text-lg sm:text-xl mt-2">
            Software Developer / Psychology student
          </p>
        </header>

        <main className="mb-12">
          {/* Featured Game Section */}
          <section className="mb-12">
            <div className="border-2 border-black rounded-2xl p-5 sm:p-6 bg-neutral-50">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-block uppercase tracking-wider text-xs font-bold px-2.5 py-1 bg-black text-white rounded">
                  Latest Game
                </span>
                <a
                  href="https://pishp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-neutral-600 hover:text-black hover:underline inline-flex items-center gap-1"
                >
                  pishp.com
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Check out <a href="https://pishp.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-80">Pishp</a>!
              </h2>
              <p className="text-base sm:text-lg text-neutral-700 mb-4 leading-relaxed">
                I built <strong>Pishp</strong>, a multiplayer online card game. Play classic games like Pishpirik and Zhol directly in your browser with friends!
              </p>

              <a
                href="https://pishp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl border-2 border-black transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <Image
                  src="/images/pishp.webp"
                  alt="Pishp - Play online card games"
                  width={600}
                  height={315}
                  sizes="(max-width: 672px) 100vw, 600px"
                  className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </a>

              <div className="mt-5 flex justify-end">
                <a
                  href="https://pishp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-neutral-800 transition-colors shadow-sm text-center"
                >
                  <span>Play Pishp Now</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 border-b-2 border-black pb-2">
              About Me
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Hello, I am Alket Rexhepi, a seasoned full-stack developer with
              over 15 years of experience in the industry. I possess a
              comprehensive understanding of a wide range of programming
              languages, including their respective frameworks, which have been
              acquired through my extensive experience in the field.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              My passion for coding and development was sparked at a young age
              when I played my first video game. This experience deepened my
              interest and desire to create my own games, eventually leading me
              to pursue a career in the field starting as a web developer in
              2010.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Throughout my career, I have consistently sought new and
              challenging opportunities to further my growth and development. My
              proactive approach has allowed me to become involved in various
              initiatives, such as volunteering as an open-source software
              advocate. This involvement has enabled me to give back to the
              community and contribute to developing multiple projects.
            </p>
            <p className="text-lg leading-relaxed">
              In addition to my technical skills, I am known for my strong work
              ethic, attention to detail, and ability to communicate and
              collaborate with both technical and non-technical stakeholders
              effectively. I am confident in taking on new challenges and
              delivering high-quality results.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6 border-b-2 border-black pb-2">
              Contact
            </h2>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/alket-rexhepi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/alketii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                Github
              </a>
              <a
                href="https://x.com/alketii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/alketii/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                Instagram
              </a>
            </div>
          </section>
        </main>

        <footer className="text-center text-sm pt-8 border-t-2 border-black">
          <p>
            &copy; {new Date().getFullYear()} Alket Rexhepi. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
