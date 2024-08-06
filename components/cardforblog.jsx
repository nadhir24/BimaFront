import React from "react";
import { Card, CardBody } from "@nextui-org/react";

const BlogCard = ({ title, content }) => {
  return (
    <Card>
      <CardBody>
        <h3>{title}</h3>
        <p>{content}</p>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
