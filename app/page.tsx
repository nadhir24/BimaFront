"use client";

import { title, subtitle } from "@/components/primitives";
import Image from "next/image";
import satu from "@/public/satu.jpg";
import dua from "@/public/dua.jpg";
import NextUIButton from "@/components/button";
import Avatars from "@/components/avatars";
import { useState } from "react";
import CardComponent from "@/components/cake";
import wk from "@/public/wk.jpg";
import wkwk from "@/public/wkwk.jpg";
import wkwkwk from "@/public/wkwkwk.jpg";
import wkwkwkwk from "@/public/wkwkwkwk.jpg";
import jaja from "@/public/jaja.jpg";
import Kartu from "@/components/card";
import sa from "@/public/sa.jpg";
import du from "@/public/du.jpg";
import Group10 from "@/public/Group 10.png";
import Placement from "@/components/placement"; // Sesuaikan dengan path file Placement

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="relative max-w-full ">
        <Image
          src={Group10}
          alt="dua"
          className=" inset-0 flex flex-col justify-center items-center rounded-lg"
        />
        <div className=" absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-0 transition-opacity duration-200 hover:opacity-100 rounded-lg mx-auto">
          <div className=" bg-black mb-2 rounded-lg">
            <h1 className={title({ color: "violet" })}>
              Temukan Kue Impian Anda
            </h1>
          </div>
          <NextUIButton
            size="md"
            variant="faded"
            label="Pesan Sekarang"
            onClick={handleClick}
            isLoading={loading}
          />
        </div>
      </div>
      <div>
        <p className={`${subtitle({ fullWidth: true })} text-center`}>
          Selamat datang di toko Rano Cake, menjual aneka kue tradisional, kue
          ulang tahun, kue kering lebaran hingga asinan Betawi dan juga telah di
          percaya oleh puluhan customer yang selalu repeat order setiap ada
          acara kecil maupun besar dan juga disukai oleh berbagai kalangan mulai
          dari yang kecil hingga orang dewasa*
        </p>
      </div>
      <div className="col-span-12 flex justify-center pt-10">
        <h1 className={`${title()} pb-10`}>Galeri Kecil Kami</h1>
      </div>{" "}
      <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 mx-auto">
        {/* Tambahkan text-center di sini */}
        <CardComponent
          imageSrc={wk}
          title="bersih dan rapih"
          subtitle="pembuatan kue"
          buttonText={undefined}
        />
        <CardComponent
          imageSrc={wkwk}
          title="tepung kue"
          subtitle="Adonan Kue"
          buttonText={undefined}
        />
        <CardComponent
          imageSrc={wkwkwk}
          title="Kue ulang tahun"
          subtitle="Black Forest"
          buttonText={undefined}
        />
        <CardComponent imageSrc={wkwkwkwk} title="New" subtitle="Nasi Kuning" />
        <CardComponent
          imageSrc={sa}
          title="Your day your way"
          subtitle="kue yang menarik"
          buttonText=""
        />
        <CardComponent
          imageSrc={du}
          title="Your day your way"
          subtitle="nasi tumpeng"
        />
      </div>
      <div className="col-span-12 flex justify-center pt-10">
        <h1 className={title()}>Apa Kata Mereka?</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
        <Kartu
          logoSrc="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          title="Bima Aryantoro"
          subTitle="Pelanggan Setia Rano Cake"
          description="Saya merupakan pelanggan yang cukup sering memesan kue disini karena permintaan para tamu yang bilang kue nya lezat saya ingin merekomendasikan Rano 
          cake pada semua orang karena memang enak dan bergizi"
          textAlign="justify"
        />
        <Kartu
          logoSrc="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          title="Tina Salsabila"
          subTitle="Pelanggan Setia Rano Cake"
          description="Kue-kue dari Rano Cake selalu lezat dan tampilannya menawan. Pelayanan yang ramah dan responsif membuat saya selalu kembali untuk memesan kue di sini!"
          textAlign="justify"
        />
        <Kartu
          logoSrc="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          title="Sabina  Fitriana"
          subTitle="Pelanggan Setia Rano Cake"
          description="Rano Cake benar-benar memahami kebutuhan pelanggannya. Setiap pesanan saya selalu tepat waktu dan sesuai dengan harapan. Terima kasih Rano Cake!"
          textAlign="justify"
        />
        <Kartu
          logoSrc="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          title="adi putra"
          subTitle="Pelanggan Setia Rano Cake"
          description="Saya sangat puas dengan pelayanan Rano Cake. Mereka sangat profesional dalam menangani pesanan dan selalu memberikan kue-kue yang lezat!"
          textAlign="justify"
        />
        <Kartu
          logoSrc="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          title="Ardi Putranto"
          subTitle="Pelanggan Setia Rano Cake"
          description="Rano Cake tidak pernah mengecewakan! Kue-kue mereka selalu segar dan enak. Saya pasti akan merekomendasikan Rano Cake kepada teman-teman saya."
          textAlign="justify"
        />
        <Kartu
          logoSrc="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          title="Galih Saputra"
          subTitle="Pelanggan Setia Rano Cake"
          description="Langganan saya dari tahun 2017,kue nya selalu made by order dan rasanya nikmat menurut keluarga saya."
          textAlign="justify"
        />
      </div>
    </>
  );
}
