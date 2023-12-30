import React from 'react'
import Image from "next/image";


function product() {
  return (
    //section 1
  <div className="bg-black mr-10 flex-1 overflow-y-auto w-full ">
    <div class="flex flex-col mb-20 md:flex-row">
      <div class="w-full md:w-1/2 mb-4 md:mb-0 ml-10">
        <h1 class="head_text mb-5">Discover Web 3 Music Innovation</h1>
          <p class="text-gray-600 mb-10 md:mr-28">
            Stream, Connect, and Empower Your Sound Revolution. Discover the future
            of streaming with HarmonyWave. Join the decentralized digital movement today.
          </p>
      </div>
      <div class="w-full md:w-1/2 p-6">
      <Image
        src="/assets/Frame1.png"
        alt="Image"
        className="right-img rounded-sm w-full"
        width={350}
        height={350}
      />
     </div>
   </div>


    {/* section 2*/ }
    <div class="flex flex-col-reverse mb-20 md:flex-row px-4">
     <div class="w-full md:w-1/2">
     <Image
        src="/assets/Frame 3.png"
        alt="Image"
        className="right-img rounded-sm w-full"
        width={350}
        height={350}
      />
     </div>
    <div class="w-full md:w-1/2 text-white mb-5 md:ml-10">
      <h3>Explore Stream</h3>
      <h1 class="desc">Audio and Video Streaming</h1>
        <p class="text-gray-600 md:mr-28">
          STREAM provides a rich diverse library of audio and video content, offering a wide range array of entertainment options. Whether you are in the mood for stand-up comedy, the latest chart-topping music, or thought-provoking podcasts, STREAM has you covered.
        </p>
    </div>
    </div>


      {/* Main Section 3 */}
      <div class="flex flex-col mb-20 md:flex-row px-4">
        <div class="w-full md:w-1/2 text-white">
          <h3>Explore Stream</h3>
          <h1 class="desc">Comedy Central</h1>
            <p class="text-gray-600 md:mr-28 mb-6">
              Immerse yourself in the world of laughter with our comedy streaming section. From classic comedy to up-and-coming humor, enjoy a non-stop stream of humor that'll brighten your day.
            </p>
        </div>
        <div class="w-full md:w-1/2">
        <Image
          src="/assets/Frame 2.png"
          alt="Image"
          className="right-img rounded-sm w-full"
          width={350}
          height={350}
        />
        </div>
      </div>
      
      {/* Main Section 4 */}
      <div class="flex flex-col-reverse md:flex-row md:flex-grow mb-20 px-4">
        <div class="w-full md:w-1/2">
        <Image
          src="/assets/Frame 4.png"
          alt="Image"
          className="right-img rounded-sm w-full"
          width={350}
          height={350}
      />
        </div>
        <div class="w-full md:w-1/2 text-white md:ml-10">
          <h3 class="text-2xl">Explore Stream</h3>
          <h1 class="desc">Music Maven</h1>
            <p class="text-gray-600 mb-10 md:mr-28">
              Dive into the world of music with our extensive collection of tracks, albums, and playlists. Discover new artists, revisit your favorite classics, and explore curated playlists that suit every mood.
            </p>
        </div>
        </div>
       
       {/* Main Section 5 */}
      <div class="flex flex-col-reverse md:flex-row md:flex-grow mb-20 px-4">
        <div class="w-full md:w-1/2 text-white">
          <h3>Explore Stream</h3>
          <h1 class="desc">School Repo</h1>
            <p class="text-gray-600 md:mr-28 w-full md:w-1/2 mb-6">
              Our School Repository is a centralized hub where educational institutions can effortlessly store and organize a wealth of valuable resources, including video and audio lectures, support documents, past papers, and essential reading materials. This innovative solution empowers schools to streamline content management and deliver an immersive learning environment.
            </p>
        </div>
        <div class="w-full md:w-1/2 md:mr-10">
          <Image
            src="/assets/Frame 2.png"
            alt="Image"
            className="right-img rounded-sm w-full"
            width={350}
            height={350}
        />
        </div>
        </div>
      </div>
  )
}

export default product