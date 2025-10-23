import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles/easyAnalysis.module.scss";

export default function EasyAnalysis() {
  return (
    <section className={styles.easyAnalysis}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Easy Analysis
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Instant clarity on the Masters’ profile. Get a snapshot of their trade
          history, profitability, risk, and portfolio all in one place.
        </motion.p>

        <div className={styles.imageGroup}>
          <motion.div
            className={styles.centerImage}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/easy-analysis-main.png"
              alt="Easy Analysis Main"
              width={300}
              height={600}
            />
          </motion.div>

          <motion.div
            className={`${styles.card} ${styles.card1}`}
            initial={{ opacity: 0, x: -80, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image src="/easy-card1.png" alt="Card 1" width={250} height={150} />
          </motion.div>

          <motion.div
            className={`${styles.card} ${styles.card2}`}
            initial={{ opacity: 0, x: 100, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Image src="/easy-card2.png" alt="Card 2" width={190} height={110} />
          </motion.div>

          <motion.div
            className={`${styles.card} ${styles.card3}`}
            initial={{ opacity: 0, x: -60, y: 80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Image src="/easy-card3.png" alt="Card 3" width={250} height={120} />
          </motion.div>

          <motion.div
            className={`${styles.card} ${styles.card4}`}
            initial={{ opacity: 0, x: 60, y: 100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Image src="/easy-card4.png" alt="Card 4" width={250} height={210} />
          </motion.div>

          <motion.div
            className={`${styles.card} ${styles.card5}`}
            initial={{ opacity: 0, x: 60, y: 100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Image src="/easy-card5.png" alt="Card 5" width={230} height={140} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
