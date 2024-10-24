import React from "react";
import { Avatar as NextUIAvatar } from "@nextui-org/avatar";

const Avatar = ({ src, className, size }) => {
  const imageSources = {
    sm: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    md: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    lg: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  };

  const imageUrl = src || imageSources[size];

  return (
    <NextUIAvatar src={imageUrl} className={className} size={size} />
  );
};

export default function Avatars() {
  return (
    <div className="flex gap-4 items-center">
      <Avatar size="sm" />
      <Avatar size="md" />
      <Avatar size="lg" />
    </div>
  );
}
