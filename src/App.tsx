import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import SearchBar from "./components/shared/SearchBar";

import { Button } from "react-daisyui";
import { BsSearch } from "react-icons/bs";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="grow">
        <div>
          <form action="">
            <div className="flex justify-start flex-col p-12 md:flex-row md:px-20 lg:px-28 xl:px-60">
              {/* search bar */}
              <SearchBar
                {...{
                  placeholder: "Enter Podcast URL",
                }}
                className="md:flex-1 md:rounded-r-none"
              />
              {/* search button */}
              <Button
                className="mt-4 md:mt-0 md:rounded-l-none"
                type="submit"
                size="lg"
                startIcon={<BsSearch color="white" size="1rem" />}
              >
                Search
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
