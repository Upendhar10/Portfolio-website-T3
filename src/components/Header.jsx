// import { MdWbSunny } from "react-icons/md";
// import { IoMoon } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";
function Header() {
  return (
    <div className="flex justify-between items-center sticky top-0 py-4 px-2 bg-black">
      <div>
        <svg
          id="logo-72"
          width="45"
          height="25"
          viewBox="0 0 53 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z"
            className="ccustom"
            fill="#3b82f6"
          ></path>{" "}
        </svg>
      </div>
      <div className="flex gap-5 text-2xl">
        <a href="https://www.linkedin.com/in/upendharnemmani/" target="_blank">
          <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
        </a>
        <a href="https://peerlist.io/upendhar10" target="_blank">
          <SiPeerlist className="hover:text-green-600 cursor-pointer" />
        </a>
        {/* <IoMoon /> */}
      </div>
    </div>
  );
}

export default Header;
