import { Badge, Hero } from "react-daisyui";

interface PodcastInfoProps {
  podcastName: string;
  author: string;
  genres: string[];
  image: string;
}

function PodcastInfo(props: PodcastInfoProps) {
  return (
    <div>
      <Hero className="pb-16">
        <Hero.Content className="flex flex-col w-full md:flex-row md:mt-10 px-14">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="flex items-center justify-center md:flex-1 md:justify-end md:pr-10">
              <img src={props.image} alt="" className="h-64 rounded-2xl" />
            </div>
            {/* Info */}
            <div className="flex flex-col self-start md:flex-1">
              {/* Title and author */}
              <div className="md:pl-0.5">
                <h1 className="text-4xl text-center font-extrabold text-gray-600 pt-10 md:pt-0 md:text-left md:text-5xl">
                  {props.podcastName}
                </h1>
                <h3 className="font-light text-lg text-center mt-8 md:mt-5 md:text-left">
                  {props.author}
                </h3>
              </div>
              {/* Genres */}
              <div className="flex flex-wrap gap-2 pt-10 items-center justify-center md:justify-start md:pt-6">
                {props.genres.map((item, i) => (
                  <Badge key={i} className="p-3">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Hero.Content>
      </Hero>
    </div>
  );
}

export default PodcastInfo;
