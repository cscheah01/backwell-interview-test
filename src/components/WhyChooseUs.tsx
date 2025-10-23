"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/whyChooseUs.module.scss";

export default function HowToChooseUs() {
  const cards = [
    {
      icon: "/icon-regulated.png",
      title: "Regulated",
      text: "The copy trading platform is regulated. Our technology partner is regulated. And so are we, as a brokerage. We operate under strict compliance for your peace of mind.",
    },
    {
      icon: "/icon-commission.png",
      title: "0 Commissions",
      text: "When investing, the small margins matter. Blackwell Invest offers 0 commissions investing, and 0 cost to install our app.",
    },
    {
      icon: "/icon-userfriendly.png",
      title: "User-friendly",
      text: "With an intuitive interface, easy trade execution, and hassle-free management, copying top traders has never been simpler. Trade smarter, not harder!",
    },
    {
      icon: "/icon-liquidity.png",
      title: "Tier 1 liquidity",
      text: "Blackwell Invest sources the best liquidity to provide a deep product range and broad market access. Fast order execution and transparent pricing.",
    },
  ];

  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Choose Us?</h2>

        <div className={styles.cardsWrapper}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconCol}>
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={45}
                  height={45}
                  className={styles.icon}
                />
              </div>
              <div className={styles.titleCol}>
                <h4>{card.title}</h4>
              </div>
              <div className={styles.descCol}>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        <Link href="/register" className={styles.registerBtn}>Register Now</Link>
      </div>
    </section>
  );
}
