import React from "react";
import "./globals.css";
import Image from "next/image";
import home1 from "../public/assets/home1.jpeg";

function page() {
  return (
    <div className="block w-full mr-10 overflow-y-auto bg-black ">
      {/*section 1 */}
      <div className="flex flex-col w-full px-4 mb-20 md:flex-row">
        <div className="mb-10 md:w-1/2 md:mr-10">
          <h1 className="mb-5 head_text">
            MUSIC IN A DECENTRALIZED DIGITAL AGE
          </h1>
          <p className="text-gray-600 md:mr-28 ">
            Stream, Connect, and Empower Your Sound Revolution. Discover the
            future of streaming with HarmonyWave. Join the decentralized digital
            movement today.
          </p>
          <div className="flex gap-4 mt-10">
            <button className="black_btn">Join Waitlist</button>
            <button className="outline_btn">Our Story</button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/Frame1.png"
            alt="Image"
            className="w-full rounded-sm right-img"
            width={350}
            height={350}
          />
        </div>
      </div>

      {/*section 2 */}
      <div className="flex flex-col-reverse px-4 mb-20 md:flex-row">
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/home1.jpeg"
            alt="Image"
            className="w-full rounded-sm right-img"
            width={250}
            height={250}
          />
        </div>
        <div className="w-full mt-8 text-center text-white md:w-1/2">
          <h3>Explore Stream</h3>
          <h1 className="desc">
            STREAM: Your One-Stop Shop for all Things Entertainment
          </h1>
          <p className="text-gray-600 md:mr-28">
            STREAM offers a vast and diverse library of audio and video content,
            including comedy, music, podcasts, and more. Discover new artists
            and genres, explore curated playlists, and delve into the world of
            knowledge with educational podcasts. STREAM is the perfect platform
            for anyone seeking entertainment, education, or simply a good laugh.
          </p>
        </div>
      </div>

      {/* Main Section 3 */}
      <div className="flex flex-col px-4 mb-0 md:flex-row">
        <div className="w-full text-white md:w-1/2">
          <h3>Creative Talent Platform</h3>
          <h1 className="desc">STREAM: Your Stage for Expression</h1>
          <p className="w-full text-gray-600 md:w-1/2">
            STREAM offers a platform for undiscovered comedians, musicians, and
            educational podcast creators to showcase their talent and reach a
            broad audience. Share your talent and connect with other passionate
            creatives. STREAM is the perfect place to express yourself and build
            a community.
          </p>
        </div>
        <div className="w-full mt-6 md:w-1/2">
          <Image
            src="/assets/home2.jpeg"
            alt="Image"
            className="w-full rounded-sm right-img"
            width={250}
            height={250}
          />
        </div>
      </div>

      {/* Main Section 4 */}
      <div className="flex flex-col-reverse px-4 mb-20 md:flex-row">
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/home3.jpeg"
            alt="Image"
            className="w-full rounded-sm right-img"
            width={250}
            height={250}
          />
        </div>
        <div className="w-full mt-8 text-center text-white md:w-1/2">
          <h3 className="text-2xl">Vinyl Record Haven</h3>
          <h1 className="desc">STREAM: Your Vinyl Record Destination</h1>
          <p className="mb-10 text-gray-600 md:mr-28">
            STREAM offers a wide selection of vinyl records, from classic albums
            to the latest releases. Experience the warm sound of analog music
            and discover new artists and genres. Whether you're a seasoned
            collector or just starting out, STREAM is the perfect place to find
            your next favorite record.
          </p>
        </div>
      </div>

      {/* Main Section 5 */}
      <div className="px-10 mb-20">
        <div className="mb-5 text-center text-white desc">Why Choose Us</div>
        <div className="max-w-screen-lg mx-auto overflow-x-auto">
          <div className="flex flex-no-wrap space-x-4 overflow-x-auto">
            <div className="mr-4 ">
              <div className="text-5xl font-bold text-gray-600">1</div>
              <h2 className="mb-5 text-2xl text-white">Variety</h2>
              <p className="p-4 text-gray-200 bg-gray-800 rounded-lg">
                STREAM offers a wide variety of audio and video content,
                including comedy, music, podcasts, and more. With so many
                options to choose from, there's something for everyone.
              </p>
            </div>
            <div className="mr-4 lg:block">
              <div className="text-5xl font-bold text-gray-600">2</div>
              <h2 className="mb-5 text-2xl text-white">Quality</h2>
              <p className="p-4 text-gray-200 bg-gray-800 rounded-lg">
                STREAM is committed to providing users with the highest quality
                audio and video experience possible. Our content is streamed at
                high resolution and bitrates, ensuring that you enjoy every
                detail.
              </p>
            </div>
            <div className="mr-4 lg:block ">
              <div className="text-5xl font-bold text-gray-600">3</div>
              <h2 className="mb-5 text-2xl text-white">Affordability</h2>
              <p className="p-4 text-gray-200 bg-gray-800 rounded-lg">
                STREAM offers a variety of subscription plans to fit your
                budget. Whether you're a casual listener or a hardcore streamer,
                we have a plan that's right for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
