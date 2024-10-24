import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import type { StaticImageData } from "next/image";

interface CardProps {
  imageSrc: StaticImageData;
  title: string;
  subtitle: string;
  buttonText?: string;
}

const CardComponent: React.FC<CardProps> = ({
  imageSrc,
  title,
  subtitle,
  buttonText,
}) => {
  // Mendapatkan URL dari objek StaticImageData
  const imageUrl = imageSrc.src;

  return (
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">{title}</p>
        <h4 className="text-white font-medium text-large">{subtitle}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={imageUrl} // Menggunakan URL yang telah diambil dari objek StaticImageData
      />
      {buttonText && (
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            {buttonText}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default CardComponent;
