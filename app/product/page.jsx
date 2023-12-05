import React from 'react'

function product() {
  return (
    <div className="bg-[#032030] mr-10 flex-1 overflow-y-auto w-full ">
    <div className=" flex  mb-20">
      <div className="w-1/2 ">
       <h1 className='head_text mb-5'>Discover Web 3 Music Innovation</h1>
       <p className='text-gray-600 mb-10 mr-28'>
        Stream, Connect, and Empower Your Sound Revolution. Discover the future
        of streaming with HarmonyWave. Join the decentralized digital movement today.
    </p>
    
  </div>
  <div className="w-1/2 p-6 ">
    <img
      src="https://images.pexels.com/photos/18821647/pexels-photo-18821647/free-photo-of-model-with-umbrella-in-the-park-wearing-a-white-sleeveless-a-line-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      alt="Image"
      className="right-img rounded-sm"
      width={250}
      height={250}
    />
  </div>
</div>

      <div className='flex mb-20 px-10'>
        <div className="w-1/2">
        <img src="https://images.pexels.com/photos/18821647/pexels-photo-18821647/free-photo-of-model-with-umbrella-in-the-park-wearing-a-white-sleeveless-a-line-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image" className="right-img rounded-sm"width={250} height={250} />
        </div>
        <div className=" text-white w-1/2">
          <h3>Explore Stream</h3>
          <h1 className='desc'>Audio and Video Streaming</h1>
          <p className='text-gray-600 mr-28'>
            STREAM provide a rich divers library of audio and video content, offering a wide range 
            array of entertainment options. Whether you are in the mood of stand-up commedy, the latest 
            chart-topping musicor thought-provoking podcast, STREAM has you covered
          </p>
        </div>
      </div>

      {/* Main Section 3 */}
      <div className="flex mb-20 px-10">
        <div className=" text-white w-full md:w-1/2 ">
          <h3>Explore Stream</h3>
          <h1 className='desc'>Comedy Central</h1>
          <p className='text-gray-600 mr-28 mb-6'>
            Immers youself in the world of laughther whith our commedy streaming sections.
            from classic comedy to up and comming humoristic, enjoy a non-stop stream of humor 
            that'll brigthen your day
          </p>
        </div>
        <div className="w-full md:w-1/2">
        <img src="https://images.pexels.com/photos/18821647/pexels-photo-18821647/free-photo-of-model-with-umbrella-in-the-park-wearing-a-white-sleeveless-a-line-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image" className="right-img rounded-sm"width={250} height={250} />
        </div>
      </div>

      {/* Main Section 4 */}
      <div className="flex md:flex-grow mb-20 px-10">
        <div className="w-full md:w-1/2">
        <img src="https://images.pexels.com/photos/18821647/pexels-photo-18821647/free-photo-of-model-with-umbrella-in-the-park-wearing-a-white-sleeveless-a-line-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image" className="right-img rounded-sm"width={250} height={250} />
        </div>
        <div className=" text-white w-full md:w-1/2 ">
          <h3 className='text-2xl'>Explore Stream</h3>
          <h1 className='desc'>Music Maven</h1>
          <p className='text-gray-600 mb-10 mr-28'>
            Dive into the world of music whith our extensive collection of tracks, albumsand playlist.
            Discover new artist, revisit you fevorite classics and explore curated playlist that suit every mood
          </p>
        </div>
      </div>

      <div className="flex md:flex-grow mb-20 px-10 ">
        <div className="left-section text-white w-1/2 ">
          <h3>Explore Stream</h3>
          <h1 className='desc'>School Repo</h1>
          <p className='text-gray-600 md:mr-28 w-full md:w-1/2 mb-6 '>
          Our School Repository is a centralized hub where educational institutions 
          can effortlessly store and organize a wealth of valuable resources, including video and
          audio lectures, support documents, past papers, and essential reading materials. This innovative solution empowers
           schools to streamline content management and deliver an immersive learning environment.
          </p>
        </div>
        <div className="w-1/2 ml-10">
        <img src="https://images.pexels.com/photos/18821647/pexels-photo-18821647/free-photo-of-model-with-umbrella-in-the-park-wearing-a-white-sleeveless-a-line-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image" className="right-img rounded-sm"width={250} height={250} />
        </div>
      </div>
      </div>
  )
}

export default product