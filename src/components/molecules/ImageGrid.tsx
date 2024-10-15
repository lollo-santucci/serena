import type { Image as ImageType } from "@/types";
import React from 'react';
import Image from 'next/image';

interface ImageGridProps {
  images: ImageType[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {images.map((image, index) => (
        <div
          key={index}
          className="w-full md:w-[calc(50%-1rem)] aspect-square"
        >
          <Image
            src={image.path || "/imgs/placeholder.png"}
            alt={`Image ${index + 1}`}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
