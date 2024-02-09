import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./globals.css"; // Your global styles
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./Footer";

//import firebase from "./firebase"
//import 'firebase/firestore'; // if you're using Firestore

// Configure Font Awesome
library.add(fab);

const Navbar = () => (
  <nav className="flex items-center justify-between p-5 bg-black navbar">
    {/* Add your navbar content here */}
    <img
      src="/assets/logo.jpeg"
      alt="Logo"
      className=""
      width={80}
      height={80}
    />
    <ul className="flex gap-10 text-white cursor-pointer">
      <li>
        <Link href="/">
          <p className="cursor-pointer">Home</p>
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
    <button className="black_btn">Join Waitlist</button>
  </nav>
);

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="w-full">
        <ToastContainer />
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
