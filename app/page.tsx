"use client";
import Image from "next/image";
import Link from "next/link";

// import HeavyComponent from "@/app/components/LazyLoading/HeavyComponent";

import dynamic from "next/dynamic";
import Loader from "@/app/components/Loader";

const HeavyComponent = dynamic(
  () => import("@/app/components/LazyLoading/HeavyComponent"),
  //   ds adds a loader while the component is loading
  {
    loading: () => <Loader />,
  }
);

export default function Home() {
  return (
    <div>
      <HeavyComponent />

      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainer-sneaker-shoes--BR9U1PPC01_PM1_Cropped%20worn%20view.png"
            alt="Advancly"
            width={300}
            height={170}
            sizes="100vw"
            objectFit="contain"
            quality={100}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            {/*  using our custom font-poppins*/}
            <h1 className="text-5xl font-bold font-poppins">
              NextJS x Louis Vuitton!
            </h1>
            <p className="py-6 text-secondary-content">
              Enhancing the Luxury Fashion Experience with Modern Web
              Technologies: A Deep Dive into Next.js and Louis Vuitton
              Collaboration
            </p>
            <Link href="/users" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

//Overriding metadata in the route
// The title here will show in the home tab of our browser instead of using the default specified in the layout route
// on all pages
/*
export const metadata: Metadata = {
  title: "The Home Route",
  description: "The Home route of crash course on nextjs with tailwind css",
};
*/
