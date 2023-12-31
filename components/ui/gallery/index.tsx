"use client";

import { Tab } from "@headlessui/react";
import Image from "next/image";

import { Image as ImageType } from "@/types";
import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 w-full max-w-2xl overflow-x-auto p-2">
        <Tab.List className="flex flex-row gap-4 w-full h-16 snap-x snap-mandatory">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map(({ id, url }) => (
          <Tab.Panel key={id}>
            <div className="aspect-square relative h-full w-full rounded-lg overflow-hidden">
              <Image
                fill
                src={url}
                alt="Image"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
