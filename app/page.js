import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <header className="text-center mb-12">
          <div>
            <Image
              src="/images/alket-rexhepi.jpeg"
              alt="Alket Rexhepi"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-6 border-4 border-black"
            />
          </div>
          <h1 className="text-5xl font-bold">Alket Rexhepi</h1>
          <p className="text-xl mt-2">
            Software Developer / Psychology student
          </p>
        </header>

        <main className="mb-12">
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
