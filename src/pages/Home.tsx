import { useSelector } from "react-redux";

import PodcastInfo from "../components/PodcastInfo";
import SearchPodcast from "../components/SearchPodcast";
import { homePageState } from "../redux/reducers/homePageReducer";

function Home() {
  const podcast = useSelector((state: homePageState) => state.podcast);
  return (
    <>
      <SearchPodcast />
      <PodcastInfo podcast={podcast} />
    </>
  );
}

export default Home;
