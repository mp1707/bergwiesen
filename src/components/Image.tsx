import React from "react";

interface Props {
  src: string;
  alt?: string;
  addStyles?: string;
}
const Image: React.FC<Props> = ({ src, alt, addStyles }: Props) => {
  const [zoomed, setZoomed] = React.useState(false);
  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={() => setZoomed((prevZoom) => !prevZoom)}
        className={`w-screen lg:w-80 h-64 rounded object-cover object-center shadow-2xl hover:scale-102 transition ease-linear duration-75 ${addStyles}`}
      />
      {zoomed && (
        <div
          onClick={() => setZoomed((prevZoom) => !prevZoom)}
          className="fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-90 flex justify-center items-center lg:p-10 z-50"
        >
          <img
            src={src}
            alt={alt}
            className="w-auto max-h-screen rounded-lg object-cover object-center shadow-2xl"
          />
          {/* Close button */}
          <div className="-space-y-0.5 absolute top-11 right-1 mx-5">
            <span className="block h-0.5 w-6 bg-white rotate-45"></span>
            <span className="block h-0.5 w-6 bg-white -rotate-45"></span>
          </div>
        </div>
      )}
    </>
  );
};
export default Image;
