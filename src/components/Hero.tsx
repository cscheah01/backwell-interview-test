"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "@/styles/hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Top text (headline + badges + stamp) */}
        <motion.div
          className={styles.topGroup}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            COPY TRADING <br />
            <span>with Blackwell Invest</span>
          </motion.h1>

          <motion.div
            className={styles.appButtons}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="#" target="_blank" aria-label="Google Play">
              <Image src="/google-play.png" alt="Google Play" width={300} height={90} />
            </Link>
            <Link href="#" target="_blank" aria-label="App Store">
              <Image src="/app-store.svg" alt="App Store" width={300} height={90} />
            </Link>
          </motion.div>

          {/* Floating Regulated Stamp */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{
              duration: 2,
              delay: 0.8,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className={styles.regulatedWrapper}
          >
            <Image
              src="/regulated.png"
              alt="Regulated Badge"
              width={120}
              height={120}
              className={styles.regulated}
            />
          </motion.div>
        </motion.div>

        {/* Phone Image */}
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <Image
            src="/hero-hand.png"
            alt="Blackwell Invest App"
            width={650}
            height={550}
            priority
            className={styles.heroImage}
          />
        </motion.div>

        {/* Bottom content */}
        <motion.div
          className={styles.bottomGroup}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        >
          <h2>
            Choose & Trade <br />
            <span>Ready-To-Go Strategies</span>
          </h2>

          <p>
            Browse and copy hundreds of investment strategies developed by master traders!
            Whether you are a pro or beginner, you can now trade quicker and more confidently.
          </p>

          <motion.div
            className={styles.tags}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            <motion.span whileHover={{ scale: 1.1 }}>Forex</motion.span>
            <motion.span whileHover={{ scale: 1.1 }}>Precious Metals</motion.span>
            <motion.span whileHover={{ scale: 1.1 }}>Oil</motion.span>
            <motion.span whileHover={{ scale: 1.1 }}>Indices</motion.span>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/register" className={styles.registerBtn}>
              Register Now
            </Link>
          </motion.div>

          <p className={styles.disclaimer}>
            When you invest, your capital is at risk. Be prudent.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
