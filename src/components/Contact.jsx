import { MdOutlineArrowOutward } from "react-icons/md";

const Socials = ({ SocialName, Sociallink }) => {
  return (
    <div className="flex items-center justify-between gap-3 px-3 text-base">
      <a
        href={Sociallink}
        className="alkatra-regular flex items-center gap-1 hover:text-blue-500 cursor-pointer"
      >
        {SocialName} <MdOutlineArrowOutward />
      </a>
    </div>
  );
};

function Contact() {
  return (
    <div className="my-3 md:max-w-[95%] md:m-auto">
      <h1 className="text-3xl alkatra-bold mb-2 text-blue-500 text-center">
        Let&apos;s Keep in Touch.
      </h1>
      <p className="alkatra-regular text-center tracking-wide leading-relaxed my-5">
        Stay updated on my latest projects and insights. <br /> Whether you have
        questions, collaboration opportunities, or just want to chat, don&apos;t
        hesitate to reach out!
      </p>
      <div className="flex flex-wap gap-2 justify-center">
        <Socials
          SocialName={"LinkedIn"}
          Sociallink={"https://www.linkedin.com/in/upendharnemmani/"}
        />
        <Socials
          SocialName={"Peerlist"}
          Sociallink={"https://peerlist.io/upendhar10"}
        />
        <Socials
          SocialName={"Gmail"}
          Sociallink={"mailto:upendharnemmani@gmail.com"}
        />
      </div>
    </div>
  );
}

export default Contact;
