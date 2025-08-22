import { memo, type FC } from "react";

interface VideoSectionProps {
  data: any;
}

const VideoSection: FC<VideoSectionProps> = ({ data }) => {
  const videoNewData = data?.results.find(
    (item: any) => item.type === "Trailer"
  );

  return (
    <section className="mt-16">
      <div className="container">
        <div className="mt-16">
          {!videoNewData ? (
            <div className="w-full flexItemCenter rounded-mainRadius bg-neutral-900 h-[300px] min-[450px]:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[700px] xl:h-[800px]">
              Video not found
            </div>
          ) : (
            <div>
              <iframe
                className="w-full rounded-mainRadius h-[300px] min-[450px]:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[700px] xl:h-[800px]"
                src={`https://www.youtube.com/embed/${videoNewData?.key}`}
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(VideoSection);
