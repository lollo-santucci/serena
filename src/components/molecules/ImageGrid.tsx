import type { Image as ImageType } from "@/types";
import React from 'react';
import Image from 'next/image';

interface ImageGridProps {
  images: ImageType[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-square w-full"
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
