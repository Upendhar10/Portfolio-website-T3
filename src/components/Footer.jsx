function Copyright() {
  return (
    <div className="text-center text-base leading-loose ">
      <hr className="border-1 mb-3 " />
      <p className="mx-auto max-w-[300px] md:max-w-full">
        Built with ♥️ and plenty of caffeine! ☕
      </p>
      <p> &copy; Nemmani Upendhar | All rights & wrongs reserved.</p>
    </div>
  );
}

function Footer() {
  return (
    <div
      id="connect"
      className="flex w-full flex-col justify-center gap-5 p-5 alkatra-regular"
    >
      <Copyright />
    </div>
  );
}

export default Footer;
