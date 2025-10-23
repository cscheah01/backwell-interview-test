"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/tradeLikePro.module.scss";

export default function TradeLikePro() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      text: 'Install our app, “Blackwell Invest”',
      image: '/guide-1.png',
    },
    {
      id: 2,
      text: 'Choose a signal Master and click “Copy”',
      image: '/guide-2.png',
    },
    {
      id: 3,
      text: 'Set your trade size preferences',
      image: '/guide-3.png',
    },
    {
      id: 4,
      text: 'Click “Agree and Copy”',
      image: '/guide-4.png',
    },
  ];

  return (
    <section className={styles.tradeLikePro}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Trade Like a Pro in Minutes
        </motion.h2>

        <div className={styles.contentWrapper}>
          <div className={styles.steps}>
            {steps.map((step) => (
              <motion.div
                key={step.id}
                className={`${styles.step} ${activeStep === step.id ? styles.active : ""}`}
                onClick={() => setActiveStep(step.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className={styles.stepHeader}>
                    <div className={styles.stepNumber}>{step.id}</div>
                    <p>{step.text}</p>
                </div>

                {/* Image only shows on mobile (under each step) */}
                <AnimatePresence>
                  {activeStep === step.id && (
                    <motion.div
                      className={styles.stepImageWrapper}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={step.image}
                        alt={`Step ${step.id}`}
                        width={220}
                        height={400}
                        className={styles.stepImage}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Desktop image display */}
          <div className={styles.imageDisplay}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={styles.imageTransition}
              >
                <Image
                  src={steps.find((s) => s.id === activeStep)?.image || ""}
                  alt="Active Step"
                  width={260}
                  height={500}
                  className={styles.mainImage}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className={styles.appButtons}>
            <Link href="#" target="_blank" aria-label="Google Play">
            <Image src="/google-play.png" alt="Google Play" width={140} height={65} />
            </Link>
          <Link href="#" target="_blank" aria-label="App Store">
          <Image src="/app-store.svg" alt="App Store" width={140} height={45} />
          </Link>
          
        </div>
      </div>
    </section>
  );
}
