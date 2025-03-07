const Skill = ({ skill }) => {
  return (
    <p className="text-md alkatra-regular py-1 px-3 bg-gray-100 rounded-md text-black">
      {skill}
    </p>
  );
};

function Techstack() {
  return (
    <div className="my-3 md:max-w-[95%] md:m-auto">
      <h1 className="text-3xl alkatra-bold my-5 text-blue-500 text-center">
        Skillset.
      </h1>
      <div className=" flex items-center justify-around md:justify-center gap-3 md:gap-4 flex-wrap my-5">
        <Skill skill="HTML5" />
        <Skill skill="CSS3" />
        <Skill skill="Javascript" />
        <Skill skill="ReactJS" />
        <Skill skill="TailwindCSS" />
        <Skill skill="Redux" />
        <Skill skill="Responsive Design" />
        <Skill skill="Typescript" />
        <Skill skill="REST API" />
        <Skill skill="SASS" />
        <Skill skill="Git & Github" />
        <Skill skill="Postman" />
        <Skill skill="Mongo DB" />
        <Skill skill="AWS Cloud" />
      </div>
    </div>
  );
}

export default Techstack;
