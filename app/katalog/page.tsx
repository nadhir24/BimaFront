import React from "react";
import Breadcrumb from "@/components/breadcrumb"; // Sesuaikan dengan path yang benar
import Placement from "@/components/placement";
import { title } from "@/components/primitives";
export default function BelanjaPage() {
  return (
    <div>
      <h1 className={title()}>Belanja</h1>
      <Placement />
    </div>
  );
}
