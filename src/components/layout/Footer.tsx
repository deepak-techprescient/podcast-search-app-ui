import { Footer as DaisyFooter } from "react-daisyui";
import { VscGithub } from "react-icons/vsc";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
  FaRegCopyright,
} from "react-icons/fa";
import { BsDot } from "react-icons/bs";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <DaisyFooter>
        <div className="flex flex-col bg-neutral-focus p-12 w-full items-center">
          {/* social icons */}
          <div className="flex flex-row gap-3">
            <a href="/">
              <VscGithub color="white" size="2rem" />
            </a>
            <a href="/">
              <FaTwitter color="white" size="2rem" />
            </a>
            <a href="/">
              <FaInstagram color="white" size="2rem" />
            </a>
            <a href="/">
              <FaFacebookSquare color="white" size="2rem" />
            </a>
          </div>
          {/* description */}
          <div className="flex flex-col gap-2 mt-1 items-center text-zinc-100 text-xs">
            {/* terms and policy */}
            <p className="flex flex-row">
              <a href="/">Terms of Use</a>
              <BsDot size="1rem" className="" />
              <a href="/">Privacy Policy</a>
            </p>
            {/* copyright */}
            <p className="text-gray-400 flex flex-row font-thin text-xs">
              <FaRegCopyright className="m-1" />
              {currentYear} Podcast Search
            </p>
          </div>
        </div>
      </DaisyFooter>
    </footer>
  );
}

export default Footer;
