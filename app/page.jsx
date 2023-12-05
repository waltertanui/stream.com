import React from 'react'
import "./globals.css"


function page() {
  return (
    <div className="bg-[#032030] mr-10 block overflow-y-auto w-full ">
    <div className=" flex w-1/2 mb-20 ml-10">
      <div className="mb-10">
        <h1 className='head_text mb-5'>MUSIC IN A DECENTRALIZED DIGITAL AGE</h1>
       <p className='text-gray-600 mr-28 '>
        Stream, Connect, and Empower Your Sound Revolution. Discover the future
        of streaming with HarmonyWave. Join the decentralized digital movement today.
    </p>
    <div className="flex gap-4">
      <button className="black_btn">Join Waitlist</button>
      <button className="outline_btn">Our Story</button>
    </div>
    
  </div>
  <div className="w-1/2">
    <img
      src="https://images.pexels.com/photos/18821647/pexels-photo-18821647/free-photo-of-model-with-umbrella-in-the-park-wearing-a-white-sleeveless-a-line-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      alt="Image"
      className="right-img rounded-sm"
      width={350}
      height={350}
    />
    </div>
   </div>

   <div className=' mb-20 px-10 flex '>
        <div className="w-1/2">
        <img src="https://images.pexels.com/photos/18821647/pexels-photo-18821647/free-photo-of-model-with-umbrella-in-the-park-wearing-a-white-sleeveless-a-line-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image" className="right-img rounded-sm"width={250} height={250} />
        </div>
        <div className="right-section text-white w-1/2">
          <h3>Explore Stream</h3>
          <h1 className='desc'>STREAM: Your One-Stop Shop for all Things Entertainment</h1>
          <p className='text-gray-600 mr-28'>
            STREAM offers a vast and diverse library of audio and video content,
            including comedy, music, podcasts, and more. Discover new artists and genres,
            explore curated playlists, and delve into the world of knowledge with educational podcasts.
            STREAM is the perfect platform for anyone seeking entertainment, education, or simply a good laugh.
          </p>
        </div>
      </div>


      {/* Main Section 3 */}
      <div className="flex mb-20 px-10">
        <div className=" text-white w-1/2 ">
          <h3>Creative Talent Platform</h3>
          <h1 className='desc'>STREAM: Your Stage for Expression</h1>
          <p className='text-gray-600 w-1/2'>
            STREAM offers a platform for undiscovered comedians, musicians, and educational
            podcast creators to showcase their talent and reach a broad audience. Share your talent
            and connect with other passionate creatives. STREAM is the perfect place to express yourself
            and build a community.
          </p>
        </div>
        <div className="w-1/2 mt-6">
        <img src="https://images.pexels.com/photos/18821647/pexels-photo-18821647/free-photo-of-model-with-umbrella-in-the-park-wearing-a-white-sleeveless-a-line-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image" className="right-img rounded-sm"width={250} height={250} />
        </div>
      </div>

      {/* Main Section 4 */}
      <div className="flex mb-20 px-10">
        <div className="w-1/2">
        <img src="https://images.pexels.com/photos/18821647/pexels-photo-18821647/free-photo-of-model-with-umbrella-in-the-park-wearing-a-white-sleeveless-a-line-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image" className="right-img rounded-sm"width={250} height={250} />
        </div>
        <div className=" text-white w-1/2">
          <h3 className='text-2xl'>Vinyl Record Haven</h3>
          <h1 className='desc'>STREAM: Your Vinyl Record Destination</h1>
          <p className='text-gray-600 mb-10 mr-28 '>
            STREAM offers a wide selection of vinyl records, from classic albums to the latest releases.
            Experience the warm sound of analog music and discover new artists and genres. Whether you're
            a seasoned collector or just starting out, STREAM is the perfect place to find your next favorite record.
          </p>
        </div>
      </div>

      {/* Main Section 5 */}
      <div className="mb-20 px-10">
        <div className="text-white desc mb-5 text-center ">Why Choose Us</div>
        <div className='flex'>
          <div className="">
            <div className="text-gray-600 text-5xl font-bold">1</div>
            <h2 className='text-white text-2xl mb-5'>Variety</h2>
            <p className='text-gray-600 '>
              STREAM offers a wide variety of audio and video content, including comedy, music, podcasts, and more.
              With so many options to choose from, there's something for everyone.
            </p>
          </div>
          <div className="ml-10">
            <div className="text-gray-600 text-5xl font-bold">2</div>
            <h2 className='text-white text-2xl mb-5'>Quality</h2>
            <p className='text-gray-600 '>
              STREAM is committed to providing users with the highest quality audio and video experience possible.
              Our content is streamed at high resolution and bitrates, ensuring that you enjoy every detail.
            </p>
          </div>
          <div className="ml-10">
            <div className="text-gray-600 text-5xl font-bold">3</div>
            <h2 className='text-white text-2xl mb-5'>Affordability</h2>
            <p className='text-gray-600'>
              STREAM offers a variety of subscription plans to fit your budget.
              Whether you're a casual listener or a hardcore streamer, we have a plan that's right for you.
            </p>
          </div>
          </div>
      </div>
      <div>
      </div>
      </div>
  )
}

export default page