import { Button, Input } from "react-daisyui";
import { BsSearch } from "react-icons/bs";

function Home() {
  return (
    <div className="flex flex-col items-center p-12">
      <form action="" className="flex flex-col w-full md:flex-row">
        <Input
          className="text-center focus:text-gray-500 focus:outline-none md:flex-1 md:rounded-r-none"
          placeholder="Enter Podcast URL"
          size="lg"
        />
        <Button
          className="mt-4 md:mt-0 md:rounded-l-none"
          type="submit"
          size="lg"
          startIcon={<BsSearch color="white" size="1rem" />}
        >
          Search
        </Button>
      </form>
    </div>
  );
}

export default Home;
