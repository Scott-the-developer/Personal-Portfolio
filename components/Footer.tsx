import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-10 " id="footer">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-10 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:text-3xl font-bold lg:max-w-[45vw]">
          Ready to bring <span className="text-purple">Innovative Solutions </span> to your team? Let&apos;s make great things happen together.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        Feel free to connect with me on LinkedIn by clicking on the Link below
        </p>
        <a href="http://www.linkedin.com/in/telly-sello">
          <MagicButton
            title="LinkedIn Profile"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Sello Telly
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
