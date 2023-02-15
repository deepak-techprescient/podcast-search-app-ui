import PodcastInfo from "../components/PodcastInfo";
import SearchPodcast from "../components/SearchPodcast";

function Home() {
  return (
    <>
      <SearchPodcast />
      <PodcastInfo
        {...{
          podcastName: "The Jordan B. Peterson Podcast",
          author: "Dr. Jordan B. Peterson",
          genres: [
            "Education",
            "Podcasts",
            "Science",
            "Society & Culture",
            "Podcasts",
            "Health & Fitness",
            "Mental Health",
          ],
          image:
            "https://is5-ssl.mzstatic.com/image/thumb/Podcasts112/v4/6e/7b/5a/6e7b5af3-b8c9-9d4c-9ca7-d23238187f10/mza_5230574258595727520.jpeg/600x600bb.jpg",
        }}
      ></PodcastInfo>
    </>
  );
}

export default Home;
