import { MdOutlineArrowOutward } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

import assets from "../assets/assets";
function Hero() {
  return (
    <div className="py-3 md:max-w-[95%] md:m-auto">
      <div className="flex items-center justify-around md:justify-evenly gap-5">
        <div className="heroImg">
          <img
            src={assets.hero}
            alt="hero"
            className="rounded-full max-w-28 min-h-28 "
          />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl alkatra-bold">
            Upendhar <span className="sm:hidden">NM</span>{" "}
            <span className="hidden sm:inline">Nemmani</span>
          </h1>
          <h2 className="text-md md:text-xl alkatra-regular my-2">
            Frontend Engineer
          </h2>
          <a
            href=""
            className="alkatra-regular flex items-center gap-1"
            target="_blank"
          >
            Resume <MdOutlineArrowOutward />
          </a>
        </div>
      </div>
      <div className="my-5">
        <p className="alkatra-regular tracking-wide leading-relaxed text-center">
          I build accessible and pixel-perfect digital experiences for web.
        </p>
        <div className="my-3 alkatra-regular flex gap-2 justify-center">
          <FaMapMarkerAlt />
          <span className="flex gap-1">Hyderabad, India.</span>
          [UTC + 5:30]
        </div>
        <div className="flex items-center justify-evenly my-3">
          <a
            href="mailto:upendharnemmani@gmail.com"
            className="alkatra-regular flex items-center gap-1 hover:text-blue-500"
            target="_blank"
          >
            HireMe <MdOutlineArrowOutward />
          </a>
          <a
            href="https://github.com/Upendhar10"
            className="alkatra-regular flex items-center gap-1 hover:text-blue-500"
            target="_blank"
          >
            GitHub <MdOutlineArrowOutward />
          </a>
          <a
            href="https://hashnode.com/@UpendharDev10"
            className="alkatra-regular flex items-center gap-1 hover:text-blue-500"
            target="_blank"
          >
            Hashnode <MdOutlineArrowOutward />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
