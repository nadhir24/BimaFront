import React from "react";
import {
  Card as NextUICard,
  CardHeader,
  CardBody,
  Divider,
  Image,
} from "@nextui-org/react";
import type { StaticImageData } from "next/image";

interface KartuProps {
  logoSrc: string;
  title: string;
  subTitle: string;
  description: string;
  fullWidth?: boolean;
  textAlign?: "justify" | "left" | "right" | "center";
}

const Kartu: React.FC<KartuProps> = ({
  logoSrc,
  title,
  subTitle,
  description,
  fullWidth = false,
  textAlign = "left",
}) => {
  const textAlignClass = textAlign === "justify" ? "text-justify" : "";

  return (
    <NextUICard className={`max-w-[400px] ${fullWidth ? "!w-full" : ""}`}>
      <CardHeader className="flex gap-3">
        <Image alt="logo" height={40} radius="sm" src={logoSrc} width={40} />
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          <p className="text-small text-default-500">{subTitle}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className={` ${textAlignClass}`}>{description}</p>
      </CardBody>
      <Divider />
    </NextUICard>
  );
};

export default Kartu;
