import { memo, useState, type FC } from "react";
import { IMAGE_URL } from "../../static";

interface Props {
  src: string;
  alt: string;
  className: string;
}

const Image: FC<Props> = ({ src, alt, className }) => {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <div className="">
      <img
        src={`${IMAGE_URL}${src}`}
        onLoad={() => setLoading(false)}
        alt={alt}
        className={className}
      />
      {loading && <div className=""></div>}
    </div>
  );
};

export default memo(Image);
