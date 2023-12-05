
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './globals.css'; // Your global styles
import Link from 'next/link';



// Configure Font Awesome
library.add(fab);


const Navbar = () => (
  <nav className="navbar p-5 bg-black flex items-center justify-between">
    {/* Add your navbar content here */}
    <img src="path/to/your/logo.png" alt="Logo" className="h-8" />
    <ul className="flex text-white gap-10 cursor-pointer">
      <li>
        <Link href="/">
          <p className='cursor-pointer'>Home</p>
        </Link>
      </li>
      <li>
        <Link href="/product">
          <p>Products</p>
        </Link>
      </li>
      <li>
        <Link href="/discover">
          <p>Discover</p>
        </Link>
      </li>
    </ul>
    <button className='black_btn'>Join Waitlist</button>
  </nav>
);

const Footer = () => (
  <footer className="p-5 bg-black text-white ">
    {/* Logo and Follow Us section */}
    <div className="text-center">
      <h1 className="text-3xl mb-3">Join The WaitList</h1>
      <h5 className="text-gray-500 mb-10">
        Be amoung our first user,join today!
      </h5>
    </div>
    <div className="flex items-center justify-center gap-5 mb-28">
      <div>
        <input
          type="email"
          id="email"
          placeholder=" Email"
          //value={email}
          className="p-2 border rounded bg-black text-white"
        />
      </div>
      <button className="black_btn">join waitlist</button>
    </div>

    <div className="flex items-center justify-between">
      {/* Logo on the left */}
      <img src="path/to/your/logo.png" alt="Logo" className="h-8" />

      {/* Follow Us in the center */}
      <div className="text-center ml-50">
        Follow Us:
        <ul className="flex gap-2 bg-white">
          <li>
            <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={["fab", "facebook-square"]} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <FontAwesomeIcon icon={["fab", "instagram-square"]} />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FontAwesomeIcon icon={["fab", "twitter-square"]} />
            </a>
          </li>
          <li>
            <a href="https://www.discord.com">
              <FontAwesomeIcon icon={["fab", "discord"]} />
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright on the right */}
      <div>&copy; Copyrights reserved to stream.com.</div>
    </div>
  </footer>
);

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className="w-full">
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;


