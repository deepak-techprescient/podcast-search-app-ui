import { Button, Input } from "react-daisyui";
import { BsSearch, BsInfoCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "validator/lib/isEmpty";

import {
  searchUrlChangeAction,
  fetchPodcastAction,
} from "../redux/actions/homePageActionCreators";
import { homePageState } from "../redux/reducers/homePageReducer";

function SearchPodcast() {
  const dispatch = useDispatch();

  const {
    searchUrl,
    isSearchButtonActive,
    validationMessage,
    extractedIdFromInput,
  } = useSelector((state: homePageState) => state);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchUrlChangeAction(e.target.value));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchPodcastAction(extractedIdFromInput) as any);
  };

  return (
    <div className="flex flex-col items-center p-12">
      {!isEmpty(validationMessage) && (
        <div className="flex justify-start items-center w-full gap-2 m-2 text-red-500 text-lg">
          <BsInfoCircle size="1.1rem" />
          <p>{validationMessage}</p>
        </div>
      )}
      <form
        action=""
        onSubmit={handleFormSubmit}
        className="flex flex-col w-full md:flex-row"
      >
        <Input
          className="text-center text-gray-500 focus:outline-none md:flex-1 md:rounded-r-none"
          placeholder="Enter Podcast URL"
          size="lg"
          value={searchUrl}
          onChange={handleUrlChange}
        />
        <Button
          className="mt-4 md:mt-0 md:rounded-l-none disabled:text-gray-400"
          type="submit"
          size="lg"
          startIcon={<BsSearch size="1rem" />}
          disabled={!isSearchButtonActive}
        >
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchPodcast;
