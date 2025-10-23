"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "@/styles/howToLinkMT4.module.scss";

export default function HowToLinkMT4() {
  const steps = [
    {
      id: 1,
      text: 'Install our app, “Blackwell Invest”',
      image: "/link-1.png",
    },
    {
      id: 2,
      text: "Login OR create a new account",
      image: "/link-2.png",
    },
    {
      id: 3,
      text: "Click “Account”",
      image: "/link-3.png",
    },
    {
      id: 4,
      text: "Click “Link an account”",
      image: "/link-4.png",
    },
    {
      id: 5,
      text: "Select “BlackwellGlobalAsia-Live” server",
      image: "/link-5.png",
    },
    {
      id: 6,
      text: "Fill in your Blackwell Global trading account OR create a new account",
      image: "/link-6.png",
    },
    {
      id: 7,
      text: "Click “Copy Trades”",
      image: "/link-7.png",
    },
    {
      id: 8,
      text: "Click “Done”",
      image: "/link-8.png",
    },
  ];

  return (
    <section className={styles.howToLink}>
      <div className={styles.container}>
        <h2 className={styles.title}>How to Link MT4 Account</h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={75}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            600: { slidesPerView: 2, spaceBetween: 25 },
            992: { slidesPerView: 3, spaceBetween: 75 },
          }}
          centeredSlides={false}
          className={styles.swiper}
        >
          {steps.map((step, index) => (
            <SwiperSlide key={step.id} className={styles.slide}>
              <div className={styles.card}>
                <Image
                  src={step.image}
                  alt={`Step ${step.id}`}
                  width={300}
                  height={340}
                  className={styles.image}
                />
                <p>{step.text}</p>
              </div>

              {/* Arrow between slides */}
              {index < steps.length - 1 && (
                <div className={styles.arrowWrapper}>
                  <Image
                    src="/arrow-double.png"
                    alt="arrow"
                    width={40}
                    height={40}
                    className={styles.arrow}
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <Link href="/register" className={styles.registerBtn}>Register Now</Link>
      </div>
    </section>
  );
}
