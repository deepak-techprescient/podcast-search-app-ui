import _ from "lodash";
import ContentLoader from "react-content-loader";
import { Badge, Hero } from "react-daisyui";
import { useSelector } from "react-redux";
import { homePageState, Podcast } from "../redux/reducers/homePageReducer";

interface PodcastInfoProps {
  podcast: Podcast;
}

function PodcastInfo({ podcast }: PodcastInfoProps) {
  const { loading } = useSelector((state: homePageState) => state);

  const smallScreenContentLoader = () => (
    <ContentLoader
      width={"100%"}
      height={"65vh"}
      viewBox="0 0 850 1300"
      backgroundColor="#eaeced"
      foregroundColor="#ffffff"
    >
      <rect x="42" y="57" rx="4" ry="4" width="417" height="29" />
      <rect x="42" y="105" rx="4" ry="4" width="67" height="15" />
      <rect x="127" y="105" rx="4" ry="4" width="147" height="15" />
      <circle cx="739" cy="109" r="9" />
      <circle cx="765" cy="109" r="9" />
      <rect x="217" y="157" rx="4" ry="4" width="433" height="291" />
      <rect x="359" y="457" rx="4" ry="4" width="150" height="10" />
      <rect x="48" y="515" rx="4" ry="4" width="720" height="15" />
      <rect x="49" y="547" rx="4" ry="4" width="598" height="15" />
      <rect x="48" y="581" rx="4" ry="4" width="720" height="15" />
      <rect x="49" y="612" rx="4" ry="4" width="520" height="15" />
      <rect x="48" y="652" rx="4" ry="4" width="720" height="15" />
      <rect x="48" y="684" rx="4" ry="4" width="598" height="15" />
      <rect x="48" y="718" rx="4" ry="4" width="720" height="15" />
      <rect x="49" y="748" rx="4" ry="4" width="419" height="15" />
      <circle cx="713" cy="810" r="9" />
      <circle cx="739" cy="810" r="9" />
      <rect x="41" y="836" rx="4" ry="4" width="720" height="3" />
      <rect x="122" y="880" rx="4" ry="4" width="320" height="11" />
      <circle cx="79" cy="900" r="26" />
      <rect x="135" y="901" rx="4" ry="4" width="120" height="10" />
      <rect x="123" y="949" rx="4" ry="4" width="320" height="11" />
      <circle cx="80" cy="969" r="26" />
      <rect x="136" y="970" rx="4" ry="4" width="120" height="10" />
      <rect x="124" y="1021" rx="4" ry="4" width="320" height="11" />
      <circle cx="81" cy="1041" r="26" />
      <rect x="137" y="1042" rx="4" ry="4" width="120" height="10" />
      <rect x="125" y="1090" rx="4" ry="4" width="320" height="11" />
      <circle cx="82" cy="1110" r="26" />
      <rect x="138" y="1111" rx="4" ry="4" width="120" height="10" />
    </ContentLoader>
  );

  const mediumScreenContentLoader = () => {
    return (
      <ContentLoader
        width={"100%"}
        height={"60vh"}
        viewBox="0 0 450 500"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
      >
        <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
        <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
        <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
      </ContentLoader>
    );
  };

  return (
    <div>
      {loading ? (
        <>
          <div className="md:hidden">{smallScreenContentLoader()}</div>
          <div className="hidden md:block">{mediumScreenContentLoader()}</div>
        </>
      ) : _.values(podcast).some((value) => !_.isEmpty(value)) ? (
        <Hero className="pb-16">
          <Hero.Content className="w-full md:mt-10 md:px-14">
            <div className="flex flex-col items-center md:flex-row md:items-start">
              {/* Image */}
              <div className="flex items-center justify-center md:flex-1 md:justify-end md:pr-10">
                <img
                  src={podcast.image}
                  alt=""
                  className="w-3/6 md:h-80 md:w-auto rounded-2xl"
                />
              </div>
              {/* Info */}
              <div className="flex flex-col items-center px-4 md:justify-start md:items-start md:px-0 md:flex-1">
                {/* Title and author */}
                <div className="md:pl-0.5">
                  <h1 className="text-4xl text-center font-extrabold text-gray-600 pt-10 md:pt-0 md:text-left md:text-5xl">
                    {podcast.name}
                  </h1>
                  <h3 className="font-light text-lg text-center mt-8 md:mt-5 md:text-left">
                    {podcast.author}
                  </h3>
                </div>
                {/* Genres */}
                <div className="flex flex-wrap gap-2 pt-10 justify-center md:pt-6">
                  {podcast.genres &&
                    podcast.genres.map((item: string, i: number) => (
                      <Badge key={i} className="p-3">
                        {item}
                      </Badge>
                    ))}
                </div>
              </div>
            </div>
          </Hero.Content>
        </Hero>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PodcastInfo;
