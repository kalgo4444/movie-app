import { memo, useState, type FC } from "react";
import { IMAGE_URL } from "../../../../../static";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

const LoadingImage: FC<Props> = ({ src, alt, className }) => {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <div className="">
      {!src ? (
        <div className="h-[400px] flex items-center justify-center">
          Image not found
        </div>
      ) : (
        <img
          src={`${IMAGE_URL}${src}`}
          onLoad={() => setLoading(false)}
          alt={alt}
          className={className}
        />
      )}

      {loading && (
        <div className="max-h-[400px] h-full bg-neutral-700 animate-pulse"></div>
      )}
    </div>
  );
};

export default memo(LoadingImage);
