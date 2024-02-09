import React from "react";
import Image from "next/image";

function Product() {
  return (
    <div className="bg-black mr-10 flex-1 overflow-y-auto w-full block">
      {/* Main Section 1 */}
      <div className="flex flex-col mb-20 md:flex-row relative">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 ml-10 md:relative">
          <h1 className="head_text mb-5 text-white">
            Discover Web 3 Music Innovation
          </h1>
          <p className="text-gray-600 mb-10 md:mr-28 text-white">
            Stream, Connect, and Empower Your Sound Revolution. Discover the
            future of streaming with HarmonyWave. Join the decentralized digital
            movement today.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-6 md:pl-0">
          <Image
            src="/assets/Frame1.png"
            alt="Image"
            className="rounded-sm w-full"
            width={350}
            height={350}
          />
        </div>
      </div>

      {/* Main Section 2 */}
      <div className="flex flex-col mb-20 md:flex-row relative px-4">
        <div className="w-full md:w-1/2 md:order-2 mb-4 md:mb-0">
          <img
            src="/assets/product1.jpeg"
            alt="Image"
            className="right-img rounded-sm w-full"
            width="350"
            height="350"
          />
          <div className="overlay-text md:hidden absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-6">
            <h3 className="text-center md:text-left">Explore Stream</h3>
            <h1 className="desc text-center md:text-left">
              Audio and Video Streaming
            </h1>
            <p className="text-gray-300 md:mr-28 text-center md:text-left">
              STREAM provides a rich diverse library of audio and video content,
              offering a wide range array of entertainment options. Whether you
              are in the mood for stand-up comedy, the latest chart-topping
              music, or thought-provoking podcasts, STREAM has you covered.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-white mb-5 md:ml-10 md:relative hidden md:block">
          <div className="md:absolute inset-0 flex flex-col justify-center items-center text-white md:relative">
            <h3 className="text-center md:text-left">Explore Stream</h3>
            <h1 className="desc text-center md:text-left">
              Audio and Video Streaming
            </h1>
            <p className="text-gray-300 md:mr-28 text-center md:text-left">
              STREAM provides a rich diverse library of audio and video content,
              offering a wide range array of entertainment options. Whether you
              are in the mood for stand-up comedy, the latest chart-topping
              music, or thought-provoking podcasts, STREAM has you covered.
            </p>
          </div>
        </div>
      </div>

      {/* Main Section 3 */}
      <div className="flex flex-col mb-20 md:flex-row-reverse relative px-4">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:order-2 md:relative">
          <img
            src="/assets/product2.jpeg"
            alt="Image"
            className="right-img rounded-sm w-full"
            width="350"
            height="350"
          />
          <div className="overlay-text md:hidden absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-6">
            <h3 className="text-center md:text-left">Explore Stream</h3>
            <h1 className="desc text-center md:text-left">Comedy Central</h1>
            <p className="text-gray-300 md:mr-28 text-center md:text-left mb-6">
              Immerse yourself in the world of laughter with our comedy
              streaming section. From classic comedy to up-and-coming humor,
              enjoy a non-stop stream of humor that'll brighten your day.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-white md:ml-10 md:absolute inset-0 flex flex-col justify-center items-center md:relative hidden md:block">
          <h3 className="text-center md:text-left">Explore Stream</h3>
          <h1 className="desc text-center md:text-left">Comedy Central</h1>
          <p className="text-gray-300 md:mr-28 text-center md:text-left mb-6">
            Immerse yourself in the world of laughter with our comedy streaming
            section. From classic comedy to up-and-coming humor, enjoy a
            non-stop stream of humor that'll brighten your day.
          </p>
        </div>
      </div>

      {/* Main Section 4 */}
      <div className="flex flex-col mb-20 md:flex-row relative px-4">
        <div className="w-full md:w-1/2 md:order-2 mb-4 md:mb-0">
          <img
            src="/assets/product3.jpeg"
            alt="Image"
            className="right-img rounded-sm w-full"
            width="350"
            height="350"
          />
          <div className="overlay-text md:hidden absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-6">
            <h3 className="text-2xl text-center md:text-left">
              Explore Stream
            </h3>
            <h1 className="desc text-center md:text-left">Music Maven</h1>
            <p className="text-gray-300 mb-10 md:mr-28 text-center md:text-left">
              Dive into the world of music with our extensive collection of
              tracks, albums, and playlists. Discover new artists, revisit your
              favorite classics, and explore curated playlists that suit every
              mood.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-white md:ml-10 md:relative hidden md:block">
          <div className="md:absolute inset-0 flex flex-col justify-center items-center text-white md:relative">
            <h3 className="text-2xl text-center md:text-left">
              Explore Stream
            </h3>
            <h1 className="desc text-center md:text-left">Music Maven</h1>
            <p className="text-gray-300 mb-10 md:mr-28 text-center md:text-left">
              Dive into the world of music with our extensive collection of
              tracks, albums, and playlists. Discover new artists, revisit your
              favorite classics, and explore curated playlists that suit every
              mood.
            </p>
          </div>
        </div>
      </div>

      {/* Main Section 5 */}
      <div className="flex flex-col mb-20 md:flex-row-reverse relative px-4">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:relative">
          <div className="md:absolute inset-0 flex flex-col justify-center items-center text-white md:relative">
            <h3 className="text-center md:text-left hidden md:block">
              Explore Stream
            </h3>
            <h1 className="desc text-center md:text-left hidden md:block">
              School Repo
            </h1>
            <p className="text-gray-300 md:mr-28 hidden md:block w-full md:w-1/2 mb-6 text-center md:text-left">
              Our School Repository is a centralized hub where educational
              institutions can effortlessly store and organize a wealth of
              valuable resources, including video and audio lectures, support
              documents, past papers, and essential reading materials. This
              innovative solution empowers schools to streamline content
              management and deliver an immersive learning environment.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:ml-10 md:relative">
          <img
            src="/assets/product1.jpeg"
            alt="Image"
            className="right-img rounded-sm w-full"
            width="350"
            height="350"
          />
          <div className="overlay-text md:hidden absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white p-6">
            <h3 className="text-center md:text-left">Explore Stream</h3>
            <h1 className="desc text-center md:text-left">School Repo</h1>
            <p className="text-gray-300 md:mr-28 w-full md:w-1/2 mb-6 text-center md:text-left">
              Our School Repository is a centralized hub where educational
              institutions can effortlessly store and organize a wealth of
              valuable resources, including video and audio lectures, support
              documents, past papers, and essential reading materials. This
              innovative solution empowers schools to streamline content
              management and deliver an immersive learning environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
