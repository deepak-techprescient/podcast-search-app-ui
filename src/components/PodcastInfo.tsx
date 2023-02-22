import _, { isEmpty } from "lodash";
import React from "react";
import ContentLoader from "react-content-loader";
import { BiErrorAlt } from "react-icons/bi";
import { Badge, Button, Hero, Link } from "react-daisyui";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowMoreInfoAction } from "../redux/actions/homePageActionCreators";
import { homePageState, Podcast } from "../redux/reducers/homePageReducer";

interface PodcastInfoProps {
  podcast: Podcast;
}

function PodcastInfo({ podcast }: PodcastInfoProps) {
  const dispatch = useDispatch();
  const { loading, showMoreInfo, showMoreInfoButtonText, error } = useSelector(
    (state: homePageState) => state
  );

  const toggleMoreInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(toggleShowMoreInfoAction());
  };

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
    <div className="h-full">
      {loading ? (
        <>
          <div className="md:hidden">{smallScreenContentLoader()}</div>
          <div className="hidden md:block">{mediumScreenContentLoader()}</div>
        </>
      ) : isEmpty(error) &&
        _.values(podcast).some((value) => !_.isEmpty(value)) ? (
        <Hero>
          <Hero.Content className="flex flex-col">
            {/* Image */}
            <div className="md:mt-10">
              <img
                src={podcast.image}
                alt=""
                className="rounded-3xl h-64 md:h-80 lg:h-96"
              />
            </div>

            {/* Title */}
            <h1 className="text-4xl text-center font-extrabold text-gray-600 px-6 mt-10 md:text-5xl md:px-12 lg:text-7xl">
              {podcast.name}
            </h1>

            {/* By */}
            <p className="text-center my-4 font-light italic">By</p>

            {/* Author */}
            <h3 className="text-center font-light text-2xl">
              {podcast.author}
            </h3>

            {/* Podcast release date */}
            {showMoreInfo && (
              <div className="flex flex-col items-center mt-10">
                <p className="font-light font-mono text-gray-500">
                  {podcast.startDate}
                </p>
                <p className="font-light text-sm text-gray-500 italic mt-2">
                  (Official Start Date)
                </p>
              </div>
            )}

            {/* Genres */}
            <div className="flex flex-wrap gap-2 px-5 justify-center mt-12">
              {podcast.genres &&
                podcast.genres.map((item: string, i: number) => (
                  <Badge key={i} className="p-3">
                    {item}
                  </Badge>
                ))}
            </div>

            {showMoreInfo && podcast.isRssAvailable && (
              <>
                {/* Summary */}
                {!isEmpty(podcast) && (
                  <p
                    className="text-lg text-justify text-gray-500 font-light mt-12 px-8 leading-10 lg:px-20"
                    style={{ textAlignLast: "center" }}
                  >
                    {podcast.summary}
                  </p>
                )}

                {/* Total episodes */}
                <div>
                  <h3 className="font-extrabold text-8xl mt-16 text-center">
                    {podcast.totalEpisodes}
                  </h3>
                  <p className="text-center text-gray-400 font-light text-2xl mt-3">
                    Episodes
                  </p>
                </div>

                {/* Last episode release date */}
                <div className="mt-14 mb-10">
                  <p className="font-extralight text-2xl text-gray-400 text-center">
                    Latest Episode Release Date
                  </p>
                  <p className="font-extrabold text-lg text-gray-400 text-center italic mt-3">
                    {podcast.lastEpisodeReleaseDate}
                  </p>
                </div>
              </>
            )}

            {/* More info button */}
            <Button size="lg" onClick={toggleMoreInfo} className="mt-12 mb-16">
              {showMoreInfoButtonText}
            </Button>
          </Hero.Content>
        </Hero>
      ) : !isEmpty(error) ? (
        <>
          {/* Error page */}
          <div className="flex text-rose-400 bg-rose-100 flex-col w-full h-full items-center justify-start gap-5 md:justify-center">
            <BiErrorAlt className="text-9xl mt-10" />
            <h1 className="font-extrabold text-center text-4xl px-10 md:text-5xl">
              {error}
            </h1>
            <p className="px-10 text-center mb-20">
              Please try again or visit our{" "}
              <Link className="underline underline-offset-2">FAQ's</Link> page
              for more help
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PodcastInfo;
