"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "@/styles/fastMatching.module.scss";

export default function FastMatchingSection() {
  const features = [
    "Spotlight",
    "Top Strategies",
    "Low Drawdown",
    "Medium Drawdown",
    "High Drawdown",
    "New Strategies",
  ];

  return (
    <section className={styles.fastMatching}>
      <div className={styles.container}>
        {/* Section Title */}
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Fast Matching
        </motion.h2>

        <div className={styles.content}>
          {/* Left Image */}
          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/fast-matching-image.png"
              alt="Fast Matching App Preview"
              width={330}
              height={650}
              className={styles.phoneImage}
            />
          </motion.div>

          {/* Right Features */}
          <motion.ul
            className={styles.featureList}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/list-icon.png"
                  alt="list icon"
                  width={90}
                  height={30}
                  className={styles.listIcon}
                />
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
