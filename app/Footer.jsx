"use client";
import "./globals.css"; // Your global styles
import React, { useState } from "react";
import { db } from "./firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

library.add(fab);

export default function footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    console.log("submitting", email);
    e.preventDefault();
    setLoading(true);

    try {
      addDoc(collection(db, "waitlist"), {
        email,
        createdAt: serverTimestamp(),
      });
      // consolel.log all the datas from the waitlist
      const querySnapshot = await getDocs(collection(db, "waitlist"));
      console.log("Current waitlist:", querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().email}`);
        // console.log(doc.data().email);
      });
      // I want to get every data in the wailist collection
      const waitlist = querySnapshot.docs.map((doc) => doc.data());
      console.log(waitlist);

      setEmail("");
      toast.success("You have been added to the waitlist");
    } catch (error) {
      toast.error(error.message);
      console.error("Error adding document: ", error);
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <footer className="p-5 text-white bg-black ">
      {/* Logo and Follow Us section */}
      <div className="text-center">
        <h1 className="mb-3 text-3xl">Join The WaitList</h1>
        <h5 className="mb-10 text-gray-500">
          Be amoung our first user,join today!
        </h5>
      </div>
      <div className="flex items-center justify-center gap-5 mb-28">
        <div>
          <input
            type="email"
            id="email"
            placeholder=" Email"
            value={email}
            onChange={handleChange}
            className="p-2 text-white bg-black border rounded"
          />
        </div>
        <button
          // type="button"
          className="black_btn"
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading ? "Submitting..." : "join waitlist"}
        </button>
      </div>

      <div className="flex items-center justify-between">
        {/* Logo on the left */}
        <img src="/assets/logo.jpeg" alt="Logo" className="h-20" />

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
      </div>
    </footer>
  );
}
