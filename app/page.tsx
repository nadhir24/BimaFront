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
import tentangkami from "@/public/tentangkami.png";
import tii from "@/public/tii.jpg";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 lg:px-12 py-8">
        <div className={`${subtitle({ fullWidth: true })} text-justify`}>
          <div
            className={title({ color: "blue", size: "lg", fullWidth: true })}
          >
            Selamat Datang di Toko Rano Cake
          </div>{" "}
          <p>
            Selamat datang di toko Rano Cake! Kami menjual aneka kue
            tradisional, kue ulang tahun, kue kering lebaran, hingga asinan
            Betawi. Toko kami telah dipercaya oleh puluhan pelanggan yang selalu
            repeat order untuk berbagai acara, baik kecil maupun besar. Produk
            kami disukai oleh berbagai kalangan, mulai dari anak-anak hingga
            orang dewasa.
          </p>
          <div className="mt-2">
            <Link href="/katalog" passHref>
              <NextUIButton
                size="lg"
                variant="ghost"
                label="Pesan Sekarang"
                onClick={handleClick}
                isLoading={loading}
                endContent={
                  <Icon
                    icon="icon-park-outline:buy"
                    width="1.2rem"
                    height="1.2rem"
                  />
                }
              />
            </Link>
          </div>
        </div>

        {/* Scrollable Image Section */}
        <div className="overflow-x-auto py-4 snap-x snap-mandatory">
          <div className="flex space-x-4 min-w-max">
            <div className="snap-center flex-none w-64">
              <Image src={wkwkwk} alt="wkwkwk" className="w-full h-auto" />
            </div>
            <div className="snap-center flex-none w-64">
              <Image src={wkwkwkwk} alt="wkwkwkwk" className="w-full h-auto" />
            </div>
            <div className="snap-center flex-none w-64">
              <Image src={wkwkwkwk} alt="wkwkwkwk" className="w-full h-auto" />
            </div>
            <div className="snap-center flex-none w-64">
              <Image src={wkwkwkwk} alt="wkwkwkwk" className="w-full h-auto" />
            </div>
            <div className="snap-center flex-none w-64">
              <Image src={wkwkwkwk} alt="wkwkwkwk" className="w-full h-auto" />
            </div>
            <div className="snap-center flex-none w-64">
              <Image src={wkwkwkwk} alt="wkwkwkwk" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-span-12 flex justify-center pt-10">
        <h1 className={`${title()} pb-10`}>Galeri Kecil Kami</h1>
      </div>{" "} */}
      {/* <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 mx-auto">
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
      </div> */}
      <div className="grid grid-cols-3">
        <h1 className={title()}>Dapat di pesan</h1>
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

// <div className=" absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 opacity-0 transition-opacity duration-200 hover:opacity-100 rounded-lg mx-auto">
// <div className=" bg-black mb-2 rounded-lg">
//   <h1 className={title({ color: "violet" })}>
//     Temukan Kue Impian Anda
//   </h1>
// </div>

// </div>
