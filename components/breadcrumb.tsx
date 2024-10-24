import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";

interface Breadcrumb {
  label: string;
  href: string;
  children?: React.ReactNode;
}

interface BreadcrumbsProps {
  items: Breadcrumb[];
}

const App: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <Breadcrumbs>
      {items.map((item, index) => (
        <BreadcrumbItem key={index} href={item.href}>
          {item.children ? item.children : item.label}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
