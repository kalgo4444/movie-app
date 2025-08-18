import { memo, type FC } from "react";
import type { IMovieImage } from "../../../features/movies/types";
import { IMAGE_URL } from "../../static";

interface ImageCarouselProps {
  posters: IMovieImage[] | undefined;
  title: string;
}

const ImageCarousel: FC<ImageCarouselProps> = ({ posters, title }) => {
  const newData: IMovieImage[] | undefined = posters?.slice(0, 10);

  return (
    <section className=" mt-10 md:mt-20">
      <h2 className="mb-3 text-2xl md:text-3xl font-medium">{title}</h2>
      <div className="scrollDesign flex items-center overflow-x-auto gap-3">
        {newData?.map((item: IMovieImage, inx: number) => (
          <img
            key={inx}
            src={`${IMAGE_URL}${item.file_path}`}
            alt="img"
            width={300}
            height={200}
            className="rounded-mainRadius"
          />
        ))}
      </div>
    </section>
  );
};

export default memo(ImageCarousel);
