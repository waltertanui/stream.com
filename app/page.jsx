import React from 'react'
import "./globals.css"
import Image from "next/image";
import home1 from "../public/assets/home1.jpeg"


function page() {
  return (
    <div className="bg-black mr-10 block overflow-y-auto w-full ">
      {/*section 1 */}
     <div class="flex flex-col md:flex-row w-full mb-20 px-4">
      <div class="mb-10 md:w-1/2 md:mr-10">
        <h1 class="head_text mb-5">MUSIC IN A DECENTRALIZED DIGITAL AGE</h1>
        <p class="text-gray-600 md:mr-28 ">
          Stream, Connect, and Empower Your Sound Revolution. Discover the future
          of streaming with HarmonyWave. Join the decentralized digital movement today.
        </p>
      <div class="flex gap-4 mt-10">
        <button class="black_btn">Join Waitlist</button>
        <button class="outline_btn">Our Story</button>
      </div>
      </div>
      <div className="w-full md:w-1/2">
      <Image
        src="/assets/Frame1.png"
        alt="Image"
        className="right-img rounded-sm w-full"
        width={350}
        height={350}
      />
    </div>
    </div>

    {/*section 2 */}
    <div class="flex flex-col-reverse md:flex-row mb-20 px-4">
      <div class="w-full md:w-1/2">
        <Image
          src="/assets/home1.jpeg"
          alt="Image"
          class="right-img rounded-sm w-full"
          width={250}
          height={250}
        />
      </div>
      <div class="w-full md:w-1/2 text-white text-center mt-8">
        <h3>Explore Stream</h3>
        <h1 class="desc">STREAM: Your One-Stop Shop for all Things Entertainment</h1>
        <p class="text-gray-600 md:mr-28">
          STREAM offers a vast and diverse library of audio and video content, including comedy, music, podcasts, and more. Discover new artists and genres, explore curated playlists, and delve into the world of knowledge with educational podcasts. STREAM is the perfect platform for anyone seeking entertainment, education, or simply a good laugh.
        </p>
      </div>
    </div>


      {/* Main Section 3 */}
      <div class="flex flex-col md:flex-row mb-0 px-4">
        <div class="w-full md:w-1/2 text-white">
          <h3>Creative Talent Platform</h3>
          <h1 class="desc">STREAM: Your Stage for Expression</h1>
          <p class="text-gray-600 w-full md:w-1/2">
            STREAM offers a platform for undiscovered comedians, musicians, and educational podcast creators to showcase their talent and reach a broad audience. Share your talent and connect with other passionate creatives. STREAM is the perfect place to express yourself and build a community.
          </p>
         </div>
         <div class="w-full md:w-1/2 mt-6">
         <Image
          src="/assets/home2.jpeg"
          alt="Image"
          class="right-img rounded-sm w-full"
          width={250}
          height={250}
        />
       </div>

      </div> 


      {/* Main Section 4 */}
      <div class="flex flex-col-reverse md:flex-row mb-20 px-4">
        <div class="w-full md:w-1/2">
        <Image
          src="/assets/home3.jpeg"
          alt="Image"
          class="right-img rounded-sm w-full"
          width={250}
          height={250}
        />
        </div>
        <div class="w-full md:w-1/2 text-white  text-center mt-8">
          <h3 class="text-2xl">Vinyl Record Haven</h3>
          <h1 class="desc">STREAM: Your Vinyl Record Destination</h1>
          <p class="text-gray-600 mb-10 md:mr-28">
            STREAM offers a wide selection of vinyl records, from classic albums to the latest releases. Experience the warm sound of analog music and discover new artists and genres. Whether you're a seasoned collector or just starting out, STREAM is the perfect place to find your next favorite record.
          </p>
        </div>
        </div>


      {/* Main Section 5 */}
      <div className="mb-20 px-10">
    <div className="text-white desc mb-5 text-center">Why Choose Us</div>
    <div className="overflow-x-auto max-w-screen-lg mx-auto">
        <div className="flex flex-no-wrap space-x-4 overflow-x-auto">
            <div className="mr-4 ">
                <div className="text-gray-600 text-5xl font-bold">1</div>
                <h2 className="text-white text-2xl mb-5">Variety</h2>
                <p className="text-gray-200 bg-gray-800 rounded-lg p-4">
                    STREAM offers a wide variety of audio and video content, including comedy, music, podcasts, and more.
                    With so many options to choose from, there's something for everyone.
                </p>
            </div>
            <div className="mr-4 lg:block">
                <div className="text-gray-600 text-5xl font-bold">2</div>
                <h2 className="text-white text-2xl mb-5">Quality</h2>
                <p className="text-gray-200 bg-gray-800 rounded-lg p-4">
                    STREAM is committed to providing users with the highest quality audio and video experience possible.
                    Our content is streamed at high resolution and bitrates, ensuring that you enjoy every detail.
                </p>
            </div>
            <div className="mr-4 lg:block ">
                <div className="text-gray-600 text-5xl font-bold">3</div>
                <h2 className="text-white text-2xl mb-5">Affordability</h2>
                <p className="text-gray-200 bg-gray-800 rounded-lg p-4">
                    STREAM offers a variety of subscription plans to fit your budget.
                    Whether you're a casual listener or a hardcore streamer, we have a plan that's right for you.
                </p>
            </div>
        </div>
    </div>
</div>


      </div>
  )
}

export default page