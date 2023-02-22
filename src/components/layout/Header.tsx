import { Button, Navbar } from "react-daisyui";
import Logo from "../../assets/Logo.png";

function Header() {
  return (
    <header>
      <Navbar className="flex bg-neutral justify-center p-6 md:justify-start">
        {/* logo and title */}
        <div>
          <a href="/">
            <img className="h-10 md:h-12" src={Logo} alt="" />
          </a>
          <a href="/">
            <h2 className="text-primary-content text-2xl mb-1 font-light italic p-1">
              <span className="text-[#50e6ff] font-medium not-italic">
                Podcast
              </span>{" "}
              Search
            </h2>
          </a>
        </div>
        {/* about button */}
        <div className="flex-1 justify-end pr-5 hidden md:flex">
          <Button variant="outline" color="info" size="md">
            ABOUT
          </Button>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
