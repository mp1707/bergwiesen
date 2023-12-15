import React from "react";

interface Props {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: Props) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-64 rounded-lg md:w-2/3 lg:w-1/3 object-cover object-center"
    />
  );
};

export default Image;
