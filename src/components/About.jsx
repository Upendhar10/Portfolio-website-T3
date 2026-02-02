function About() {
  return (
    <div className="md:max-w-[100%] md:m-auto">
      <h1 className="text-3xl alkatra-bold mb-2 text-blue-500 text-center">
        About.
      </h1>
      <div>
        <p className=" alkatra-regular leading-loose tracking-wide text-justify ">
          Namasthe👋, <br />
          I&apos;m <strong>Upendhar NM</strong>, a Junior Full-Stack Developer building user-focused web applications. I have hands-on experience working with real APIs and dynamic UI features, and I’m currently leveling up my backend skills using the MERN stack to understand how servers, databases, and APIs work together. <br />
          I’m focused on strengthening my fundamentals, building real projects, and growing into a well-rounded engineer who understands both design and engineering perspectives.
        </p>
        <p className=" alkatra-regular leading-loose tracking-wide text-justify ">
          Outside of work, I enjoy playing cricket, badminton and
          reading books occasionally, Btw my current read is {" "}  
          <a
            href="https://en.wikipedia.org/wiki/The_Psychology_of_Money"
            className="hover:text-blue-500"
          >
            &apos;The Psychology of Money&apos;
          </a>
          {" "} by Morgan Housel.
        </p>
      </div>
    </div>
  );
}

export default About;
