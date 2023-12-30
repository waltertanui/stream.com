import React from 'react'
import Image from "next/image";


function discover() {
  return (
    <div className='bg-[#040708]'>
        <div className=''>
          <h1 className='text-white text-3xl text-center'>Who Are We</h1>
            <p className='text-gray-600 text-center mt-6 px-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip 
              ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            </p>
        </div>
        <div className='flex h-40 gap-4 mt-10 justify-center mx-48'>
    <img className='w-full sm:w-1/2 lg:w-1/4' src='/assets/logo.jpg' alt='description'/>
    <img className='w-full sm:w-1/2 lg:w-1/4' src='/assets/logo.jpg' alt='description'/>
    <img className='w-full sm:w-1/2 lg:w-1/4' src='/assets/logo.jpg' alt='description'/>
    <img className='w-full sm:w-1/2 lg:w-1/4' src='/assets/logo.jpg' alt='description'/>
</div>





       {/*section 2 */}
       <div class="flex flex-col md:flex-row mb-20 px-4 mt-20">
        <div class="w-full md:w-1/2 text-white">
          <h3>Explore Stream</h3>
          <h1 class="desc">Discover endless possibilities</h1>
            <p class="text-gray-600 md:mr-28">
              Explore a world of audio & video content.
              Discover new artists, genres, & ideas.
              Discover your next favorite thing.y.
            </p>
        </div>
      <div class="w-full md:w-1/2 mt-6 md:mt-0">
      <Image
          src="/assets/logo.jpg"
          alt="Image"
          class=" rounded-sm w-full"
          width={250}
          height={250}
        />
     </div>
     </div>

    {/*section 3 */}
    <div className=" mb-20 px-10 flex flex-col md:flex-row">
  <div className=" w-full md:w-1/2">
    <Image
      src="/assets/logo.jpg"
      alt="Image"
      className="rounded-sm w-full md:h-full object-cover"
      width={350}
      height={350}
    />
    
  </div>
  <div className="w-full md:w-1/2 left-0 top-0 flex flex-col justify-center items-center text-white ">
  <div className="text-center ">
      <h3 className="text-2xl ">Explore Stream</h3>
      <h1 className="desc text-4xl "> Discover your next favorite thing</h1>
      <p className="text-gray-600 mb-10 mx-4">
        Explore Stream's vast library of audio and video content, 
        from comedy and music to podcasts and documentaries.
        Discover new artists, genres, and ideas with Stream's personalized recommendations and curated playlists.
      </p>
    </div>
  </div>
</div>

    {/*section 4 */}
    <div className='text-white text-center'>
      <h1 className="text-3xl mb-4">Our Vision</h1>
      <p className="text-center text-gray-500 px-4 mx-40">
      Stream is a platform that empowers creators and 
      audiences to connect and experience the world of 
      audio and video content in new and exciting ways. 
      With Stream, you can discover new artists, genres, and ideas, 
      and share your own creativity with the world.
      </p>
      <h1 className="text-3xl mt-8 mb-4">Our Mission</h1>
      <p className="text-center text-gray-500 px-4 mx-40 ">
      Stream is the ultimate platform for audio and video
       streaming, with a vast library of content and 
       cutting-edge technology. We're committed to providing
        our users with the best possible entertainment experience, and we're always innovating
       to find new ways to connect creators and audiences.
      </p>
    </div>


      {/*section 5 */}
      <div class="flex flex-col md:flex-row mb-20 px-4 mt-20">
      <div class="w-full md:w-1/2">
        <Image
          src="/assets/logo.jpg"
          alt="Image"
          class="rounded-sm w-full"
          width={350}
          height={350}
      />
  </div>
      <div class="w-full md:w-1/2 text-white ml-10">
    <h3 className='text-center mt-6'>Explore Stream</h3>
    <h1 class="desc text-center">Our Platform</h1>
    <p class="text-gray-600 md:mr-28">
      Immerse yourself in the world of streaming with our diverse platform. Discover a wide range of content, from comedy and music to podcasts and more. Join our community and explore the endless possibilities of streaming.
    </p>
    <ul class="flex flex-col text-gray-500">
  <li class="flex items-center mb-4">
    <span class="mr-2 text-2xl text-white">•</span>
    <p>Discover endless possibilities: Dive into a vast library of audio and video content across genres, formats, and interests.</p>
  </li>
  <li class="flex mb-4">
    <span class="mr-2 text-2xl text-white">•</span>
    <p>Unleash your curiosity: Explore new artists, genres, and ideas with personalized recommendations and curated playlists.</p>
  </li>
  <li class="flex items-center">
    <span class="mr-2 text-2xl text-white">•</span>
    <p>Find your next favorite thing: Start exploring today and discover podcasts, music, shows, movies, and more that resonate with you.</p>
  </li>
</ul>

  </div>
  
  
</div>







      
      {/*section 5 */}
      <div className='mt-10 flex flex-col md:flex-row'>
  <div className='md:ml-10 w-full md:w-1/2'>
    <h3 className='text-white mb-5'>Explore Stream</h3>
    <h1 className='text-3xl text-white mb-5'>Our Values</h1>
    <h3 className='text-gray-500 '>Value 1</h3>
    <p className='text-gray-500 md:mr-28'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat.
      <hr className="border-gray-500 mt-2" />
    </p>
    <h3 className='text-gray-500 mt-4'>Value 2</h3>
    <p className='text-gray-500 md:mr-28'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat.
      <hr className="border-gray-500 mt-2" />
    </p>
    <h3 className='text-gray-500 mt-4'>Value 3</h3>
    <p className='text-gray-500 md:mr-28'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat.
      <hr className="border-gray-500 mt-2" />
    </p>
  </div>
  <div className='md:h-50 w-full md:w-1/2 md:ml-10'>
    <Image
      src="/assets/logo.jpg"
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

export default discover