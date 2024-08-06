import React from "react";
import BlogCard from "@/components/cardforblog";

const dummyPosts = [
  {
    id: 1,
    title: "Delicious Cakes for Every Occasion",
    content: "Explore our wide range of cakes, from birthdays to weddings.",
  },
  {
    id: 2,
    title: "Freshly Baked Pastries Daily",
    content:
      "Enjoy our daily fresh pastries and bread, made with the finest ingredients.",
  },
  {
    id: 3,
    title: "Traditional Indonesian Treats",
    content:
      "Try our authentic Asinan Betawi and other traditional Indonesian sweets.",
  },

  {
    id: 4,
    title: "Traditional Indonesian Treats",
    content:
      "Try our authentic Asinan Betawi and other traditional Indonesian sweets.",
  },

  {
    id: 5,
    title: "Traditional Indonesian Treats",
    content:
      "Try our authentic Asinan Betawi and other traditional Indonesian sweets.",
  },
];

const BlogList = () => {
  return (
    <div className="flex flex-col items-start gap-4">
      {dummyPosts.map((post) => (
        <BlogCard key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default BlogList;
