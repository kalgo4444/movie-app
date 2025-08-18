import { memo, type FC } from "react";
import { IMAGE_URL } from "../../static";

interface ImageCarouselProps {
  data: any | undefined;
  title: string;
}

const ImageCarousel: FC<ImageCarouselProps> = ({ data, title }) => {
  return (
    <section className=" mt-10 md:mt-20">
      <h2 className="mb-3 text-2xl md:text-3xl font-medium">{title}</h2>
      <div className="scrollDesign flex items-center overflow-x-auto gap-3">
        {data?.backdrops?.map((item: any, inx: number) => (
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
