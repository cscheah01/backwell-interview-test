"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/navigateApp.module.scss";

export default function NavigateApp() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      title: "Discover",
      text: "Explore all the investment Masters available on Blackwell Invest. Dive into their profiles and analyse their profitability at a glance.",
      image: "/discover-tab.png",
      activeIcon: "/discover-active.png",
      inactiveIcon: "/discover.png",
    },
    {
      id: 2,
      title: "Activity",
      text: "See the past trades made by the signals you are copying from the last 30 days or track their open positions. Monitor their strategy, and make informed decisions with timely updates of the trades shaping your portfolio.",
      image: "/activity-tab.png",
      activeIcon: "/activity-active.png",
      inactiveIcon: "/activity.png",
    },
    {
      id: 3,
      title: "Trade",
      text: "Seamlessly trade oil CFDs, indices, and currency pairs with ease.",
      image: "/trade-tab.png",
      activeIcon: "/trade-active.png",
      inactiveIcon: "/trade.png",
    },
    {
      id: 4,
      title: "Positions",
      text: "Easily track the status of all your trades and monitor your account metrics in real-time.",
      image: "/positions-tab.png",
      activeIcon: "/positions-active.png",
      inactiveIcon: "/positions.png",
    },
    {
      id: 5,
      title: "Account",
      text: "Access detailed information about your trading account, monitor copier drawdown levels, assess your profitability, and keep track of your trade performance – all in one place!",
      image: "/account-tab.png",
      activeIcon: "/account-active.png",
      inactiveIcon: "/account.png",
    },
  ];

  return (
    <section className={styles.navigateApp}>
      <div className={styles.container}>
        <h2 className={styles.title}>Navigate Our App in 5 Clicks</h2>

        <div className={styles.tabWrapper}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.active : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Image
                src={activeTab === tab.id ? tab.activeIcon : tab.inactiveIcon}
                alt={tab.title}
                width={40}
                height={40}
                className={styles.tabIcon}
              />
              <span>{tab.title}</span>
            </div>
          ))}
        </div>

        <div className={styles.contentArea}>
          <AnimatePresence mode="wait">
            {tabs.map(
              (tab) =>
                activeTab === tab.id && (
                  <motion.div
                    key={tab.id}
                    className={styles.tabContent}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={styles.textContent}>
                      <h3>{tab.title}</h3>
                      <p>{tab.text}</p>
                    </div>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={tab.image}
                        alt={tab.title}
                        width={350}
                        height={600}
                        className={styles.tabImage}
                      />
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
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
