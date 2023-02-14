import { useEffect, useState } from "react";
import { Button, Input } from "react-daisyui";
import { BsSearch } from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";
import isURL from "validator/lib/isURL";
import isEmpty from "validator/lib/isEmpty";

function SearchPodcast() {
  const [searchUrl, setSearchUrl] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [validationMessage, setValidationMessage] = useState("");

  useEffect(() => {
    if (isEmpty(searchUrl)) {
      setValidationMessage("Empty URL");
      setIsButtonDisabled(true);
    } else if (isURL(searchUrl, { require_protocol: true })) {
      setValidationMessage("");
      setIsButtonDisabled(false);
    } else {
      setValidationMessage("Invalid URL");
      setIsButtonDisabled(true);
    }
  }, [searchUrl]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUrl(e.target.value);
  };

  return (
    <div className="flex flex-col items-center p-12">
      {!isEmpty(validationMessage) && (
        <div className="flex justify-start items-center w-full gap-2 m-2 text-red-500 text-lg">
          <BsInfoCircle size="1.1rem" />
          <p>{validationMessage}</p>
        </div>
      )}
      <form action="" className="flex flex-col w-full md:flex-row">
        <Input
          className="text-center focus:text-gray-500 focus:outline-none md:flex-1 md:rounded-r-none"
          placeholder="Enter Podcast URL"
          size="lg"
          onChange={handleChange}
        />
        <Button
          className="mt-4 md:mt-0 md:rounded-l-none disabled:text-gray-400"
          type="submit"
          size="lg"
          startIcon={<BsSearch size="1rem" />}
          disabled={isButtonDisabled}
        >
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchPodcast;
