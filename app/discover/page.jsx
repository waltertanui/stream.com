import React from "react";
import Image from "next/image";

function discover() {
  return (
    <div className="bg-black">
      <div className="">
        <h1 className="text-white text-3xl text-center">Who Are We</h1>
        <p className="text-gray-300 text-center mt-6 px-10">
          Stream, Connect, and Empower: Your Sound RevolutionDiscover the future
          of music streaming with HarmonyWaveJoin the decentralized digital
          movement today
        </p>
      </div>
      <div className="flex h-40 gap-4 mt-10 justify-center mx-48">
        <img
          className="w-full sm:w-1/2 lg:w-1/4"
          src="/assets/discover1.jpeg"
          alt="description"
        />
        <img
          className="w-full sm:w-1/2 lg:w-1/4"
          src="/assets/discover2.jpeg"
          alt="description"
        />
        <img
          className="w-full sm:w-1/2 lg:w-1/4"
          src="/assets/discover3.jpeg"
          alt="description"
        />
        <img
          className="w-full sm:w-1/2 lg:w-1/4"
          src="/assets/discover4.jpeg"
          alt="description"
        />
      </div>

      {/*section 2 */}
      <div className="flex flex-col md:flex-row mb-20 px-4 mt-20">
        <div className="w-full md:w-1/2 text-white">
          <h3 className="hidden md:block">Explore Stream</h3>
          <h1 className="desc hidden md:block">
            Discover endless possibilities
          </h1>
          <p className="text-gray-300 md:mr-28 hidden md:block">
            Explore a world of audio & video content. Discover new artists,
            genres, & ideas. Discover your next favorite thing.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 relative">
          <img
            src="/assets/Frame 8.png"
            alt="Image"
            className="rounded-sm w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-center p-8 md:hidden">
            <div>
              <h3>Explore Stream</h3>
              <h1 className="desc">Discover endless possibilities</h1>
              <p className="text-gray-300">
                Explore a world of audio & video content. Discover new artists,
                genres, & ideas. Discover your next favorite thing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*section 3 */}
      <div className="mb-20 px-10 flex flex-col md:flex-row relative">
        <div className="w-full  md:w-1/2">
          <Image
            src="/assets/discover5.jpeg"
            alt="Image"
            className="rounded-sm w-full md:h-full object-cover"
            width={350}
            height={350}
          />
        </div>
        <div className="w-full md:w-1/2 absolute inset-0 flex flex-col justify-center items-center text-white md:relative">
          <div className="text-center">
            <h3 className="text-2xl">Explore Stream</h3>
            <h1 className="desc text-4xl">Discover your next favorite thing</h1>
            <p className="text-gray-300 mb-10 mx-10 ">
              Explore Stream's vast library of audio and video content, from
              comedy and music to podcasts and documentaries. Discover new
              artists, genres, and ideas with Stream's personalized
              recommendations and curated playlists.
            </p>
          </div>
        </div>
      </div>

      {/*section 4 */}
      <div className="text-white text-center">
        <h1 className="text-3xl mb-4">Our Vision</h1>
        <p className="text-center text-gray-300 px-4 mx-10">
          Stream is a platform that empowers creators and audiences to connect
          and experience the world of audio and video content in new and
          exciting ways. With Stream, you can discover new artists, genres, and
          ideas, and share your own creativity with the world.
        </p>
        <h1 className="text-3xl mt-8 mb-4">Our Mission</h1>
        <p className=" text-center text-gray-300 px-4 mx-10 ">
          Stream is the ultimate platform for audio and video streaming, with a
          vast library of content and cutting-edge technology. We're committed
          to providing our users with the best possible entertainment
          experience, and we're always innovating to find new ways to connect
          creators and audiences.
        </p>
      </div>

      {/*section 5 */}
      <div className="flex flex-col md:flex-row mb-20 px-4 mt-20 relative">
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/discover6.jpeg"
            alt="Image"
            className="rounded-sm w-full"
            width={350}
            height={350}
          />
        </div>
        <div className="w-full md:w-1/2 absolute inset-0 flex flex-col justify-center items-center text-white md:relative ml-10">
          <div className="text-center">
            <h3 className="mt-6">Explore Stream</h3>
            <h1 className="desc">Our Platform</h1>
            <p className="text-gray-300 md:mr-28">
              Immerse yourself in the world of streaming with our diverse
              platform. Discover a wide range of content, from comedy and music
              to podcasts and more. Join our community and explore the endless
              possibilities of streaming.
            </p>
            <ul className="flex flex-col text-gray-300">
              <li className="flex items-center mb-4">
                <span className="mr-2 text-2xl text-white">•</span>
                <p>
                  Discover endless possibilities: Dive into a vast library of
                  audio and video content across genres, formats, and interests.
                </p>
              </li>
              <li className="flex mb-4">
                <span className="mr-2 text-2xl text-white">•</span>
                <p>
                  Unleash your curiosity: Explore new artists, genres, and ideas
                  with personalized recommendations and curated playlists.
                </p>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-2xl text-white">•</span>
                <p>
                  Find your next favorite thing: Start exploring today and
                  discover podcasts, music, shows, movies, and more that
                  resonate with you.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*section 5 */}
      <div className="mt-10 flex flex-col md:flex-row relative">
        <div className="md:ml-10 w-full md:w-1/2 absolute inset-0 md:relative">
          <h3 className="text-white mb-5 text-center md:text-left">
            Explore Stream
          </h3>
          <h1 className="text-3xl text-white mb-5 text-center md:text-left">
            Our Values
          </h1>
          <div className="text-gray-300 md:mr-28 mx-10">
            <h3 className="mt-4">Value 1</h3>
            <p>
              Explore a world of entertainment possibilities: Stream's vast
              library of content has something for everyone, from comedy and
              music to podcasts and documentaries. Discover new voices and
              perspectives: Stream empowers creators from all walks of life to
              share their stories, giving you access to a diverse range of
              perspectives.
            </p>
            <hr className="border-gray-500 mt-2" />
          </div>
          <div className="text-gray-300 md:mr-28 mx-10">
            <h3 className="mt-4">Value 2</h3>
            <p>
              Fuel your curiosity and creativity: Stream's personalized
              recommendations and curated playlists help you discover new
              artists, genres, and ideas that you're sure to love. Connect with
              others who share your interests: Stream's community features make
              it easy to connect with other users who share your interests, so
              you can discover new content and have meaningful conversations.
            </p>
            <hr className="border-gray-500 mt-2" />
          </div>
          <div className="text-gray-300 md:mr-28 mx-10">
            <h3 className="mt-4">Value 3</h3>
            <p>
              Enjoy a seamless entertainment experience: Stream's intuitive
              interface and cutting-edge technology make it easy to find and
              enjoy your favorite content, wherever you are.
            </p>
            <hr className="border-gray-500 mt-2" />
          </div>
        </div>
        <div className="md:h-50 w-full md:w-1/2 md:ml-10">
          <Image
            src="/assets/discover7.jpeg"
            alt="Image"
            className="right-img rounded-sm w-full"
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  );
}

export default discover;
