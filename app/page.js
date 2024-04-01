"use client";
import { Hero } from "@/components/Hero";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isclikk, setIsclikk] = useState(false);

  return (
    <div>
      <main className={styles.main}>
        <div
          className={styles.contents}
          style={{
            background: "rgba(0, 223, 154, 0.3)",
            borderRadius: "10px", // Adjust the radius value as needed
            padding: "22px", // Adjust the padding value as needed
          }}
        >
          <h1 className="text-4xl font-bold tracking-tighter text-black sm:text-4xl md:text-8xl/none p-7">
            Digitize The World
          </h1>
          <p className="justify-center text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed p-7">
            We help businesses transform through technology. Through our Digital
            It Solutions.
          </p>
          <div className={styles.buttons}>
            <button onClick={() => setIsclikk(!isclikk)}>
              <Link href="./contactpage">Contact Us</Link>
            </button>
          </div>
        </div>
        <video
          src={require("../public/bg2.webm")}
          autoPlay
          muted
          loop
          className={styles.video}
        />
      </main>

      <Hero />
    </div>
  );
}
