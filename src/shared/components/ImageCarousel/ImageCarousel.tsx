import { memo, type FC } from "react";
import { IMAGE_URL } from "../../static";
import { Flex, Image } from "antd";

interface ImageCarouselProps {
  data: any | undefined;
  title: string;
}

const ImageCarousel: FC<ImageCarouselProps> = ({ data, title }) => {
  const nowData = data?.backdrops?.slice(0, 4);
  return (
    <section className=" mt-10 md:mt-20">
      <h2 className="mb-3 text-2xl md:text-3xl font-medium">{title}</h2>
      <Flex wrap justify='center' gap={'small'}>
        {nowData?.map((item: any, inx: number) => (
          <Image
            key={inx}
            src={`${IMAGE_URL}${item.file_path}`}
            alt="Movie detail image"
            height={200}
            className="rounded-mainRadius"
          />
        ))}
      </Flex>
    </section>
  );
};

export default memo(ImageCarousel);
