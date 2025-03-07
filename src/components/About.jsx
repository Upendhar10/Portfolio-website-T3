function About() {
  return (
    <div className="md:max-w-[95%] md:m-auto">
      <h1 className="text-3xl alkatra-bold mb-2 text-blue-500 text-center">
        About.
      </h1>
      <div>
        <p className=" alkatra-regular leading-loose tracking-wide text-justify ">
          Namasthe👋, <br />
          I&apos;m <strong>Upendhar N</strong>, a front-end Engineer, passionate
          about modern web development, emerging technologies, and AI-driven
          efficiency with a strong focus on crafting accessible, pixel-perfect
          user interfaces that blend thoughtful design with robust engineering.
          I’m always looking for opportunities to push boundaries, build
          impactful products, and grow as an engineer.
        </p>
        <p className=" alkatra-regular leading-loose tracking-wide text-justify ">
          In my free time, I would love to play cricket and badminton or I would
          prefer reading a book, Btw my current read is{" "}
          <a
            href="https://en.wikipedia.org/wiki/Rich_Dad_Poor_Dad"
            className="hover:text-blue-500"
          >
            &apos;Rich Dad Poor Dad&apos;
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default About;
