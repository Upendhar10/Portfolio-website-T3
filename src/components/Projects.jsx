import { MdOutlineArrowOutward } from "react-icons/md";
const Card = ({ title, description, skills, links }) => {
  return (
    <div className="border-2 p-4 rounded-md grid gap-3 hover:shadow-[3px_2px_0px_0px_rgba(0,0,255)]">
      <h2 className="text-2xl alkatra-medium">{title}</h2>
      <p className="alkatra-regular text-justify">{description}</p>
      <div className="alkatra-regular text-sm rounded-sm flex gap-2 items-center">
        {skills.map((skill, index) => {
          return (
            <p
              key={index}
              className="bg-gray-100 text-black py-1 px-2 rounded-md"
            >
              {skill}
            </p>
          );
        })}
      </div>
      <div className="alkatra-regular flex items-center gap-3">
        {links.map((link, index) => {
          return (
            <a
              href={link.url}
              key={index}
              target="_blank"
              className="flex items-center gap-1 hover:text-blue-500 "
            >
              {link.name} <MdOutlineArrowOutward />
            </a>
          );
        })}
      </div>
    </div>
  );
};

function Projects() {
  return (
    <div className="py-6 md:max-w-[95%] md:m-auto">
      <h1 className="text-3xl alkatra-bold mb-2 text-blue-500 text-center">
        Projects.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-2">
        <Card
          title={"Wistora"}
          description={
            " A YouTube-inspired video streaming platform that has a user-friendly responsive design UI optimized for various screen sizes and allows users to explore trending content, search for videos, and watch live streams."
          }
          skills={["React", "Tailwindcss", "Redux", "Youtube API"]}
          links={[
            {
              name: "codebase",
              url: "https://github.com/Upendhar10/Wistora-webapp",
            },
            { name: "live", url: "https://wistora-webapp.vercel.app/" },
          ]}
        />
        <Card
          title={"FoodVille"}
          description={
            "A Food ordering platform that has features such as secure user authentication, responsive design optimized for various screen sizes, dynamic cart management via Context API."
          }
          skills={["React", "CSS", "ContextAPI", "Firebase"]}
          links={[
            {
              name: "codebase",
              url: "https://github.com/Upendhar10/FoodVille-WebApp",
            },
            { name: "live", url: "https://foodville-web-app.netlify.app/" },
          ]}
        />
        <Card
          title={"Canvaskraft"}
          description={
            "A fully functional drawing tool built with HTML, Canvas API, JavaScript, and CSS. Features include drawing, erasing, sticky notes, image uploads, undo/redo, and board download functionality."
          }
          skills={["HTML", "CSS", "Javascript", "Canvas API"]}
          links={[
            {
              name: "codebase",
              url: "https://github.com/Upendhar10/Canvaskraft-webApp",
            },
            { name: "live", url: "https://canvaskraft-web-app.vercel.app/" },
          ]}
        />
        <Card
          title={"AudioWaveAnalyser"}
          description={
            "An web app that dynamically generates a continuous bar graph in sync with audio input until the audio terminates."
          }
          skills={["HTML", "CSS", "Javascript"]}
          links={[
            {
              name: "codebase",
              url: "https://github.com/Upendhar10/AudioWave-Analyser",
            },
            { name: "live", url: "https://audio-wave-analyser.vercel.app/" },
          ]}
        />
      </div>
    </div>
  );
}

export default Projects;
