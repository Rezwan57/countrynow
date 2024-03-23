import Image from "next/image";
import './page.css'
import Search from "./homeComponents/search";
import Globe from "./homeComponents/globe";

export default function Home() {
  return (
    <main className="homeMain flex min-h-screen flex-col items-center justify-between">

      <div className="heroSection items-center justify-center font-mono text-sm lg:flex">

        <Image src={"/Map.svg"} className="backgroundMap" alt="Background Map" width={750} height={1000} />


        <div className="mainContainer w-full flex flex-col items-center justify-center">

          <div>

            <Globe />

          </div>

          <h1 className="heroHeading text-center">Country Insights</h1>

          <div className="searchContainer">

            <Search />

          </div>

          <p className="heroDescription text-center">Delve into the heart of nations with comprehensive country information. From population demographics to key landmarks, get instant access to essential data about every country on Earth. Explore, learn, and broaden your understanding of the world with our Country Insights section.</p>

        </div>

      </div>

    </main>
  );
}
