"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/header.module.scss";
import { useUserStore } from "@/store/user";

export default function Header() {
  const { user, logout } = useUserStore();
  const [timeLeft, setTimeLeft] = useState({
    days: 27,
    hours: 23,
    minutes: 45,
    seconds: 7,
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotice, setShowNotice] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Countdown
  useEffect(() => {
    const targetDate = new Date("2025-11-30T23:59:59").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    logout();
    setShowLogoutModal(true);
    setTimeout(() => setShowLogoutModal(false), 2500); 
  };
  // console.log("User info:", user);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo}>
            <Image
              src="/backwellglobal-sitelogo.png"
              alt="Blackwell Global"
              width={180}
              height={60}
              priority
            />
          </div>

          {/* Promotion */}
          <div className={styles.promotion}>
            <div className={styles.promotionLabel}>
              <span>PROMOTION</span>
              <span>ENDS IN</span>
            </div>

            <div className={styles.timer}>
              <div className={styles.timeUnit}>
                <span className={styles.timeValue}>
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
                <span className={styles.timeLabel}>Days</span>
              </div>
              <span className={styles.separator}>:</span>

              <div className={styles.timeUnit}>
                <span className={styles.timeValue}>
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className={styles.timeLabel}>Hours</span>
              </div>
              <span className={styles.separator}>:</span>

              <div className={styles.timeUnit}>
                <span className={styles.timeValue}>
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className={styles.timeLabel}>Minutes</span>
              </div>
              <span className={styles.separator}>:</span>

              <div className={styles.timeUnit}>
                <span className={styles.timeValue}>
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className={styles.timeLabel}>Seconds</span>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            {!user ? (
              <>
                <Link href="/register" className={styles.registerBtn}>
                  REGISTER NOW
                </Link>
                <Link href="/login" className={`${styles.registerBtn} ${styles.loginBtn}`}>
                  LOGIN NOW
                </Link>
              </>
            ) : (
              <>
                <p className={styles.greeting}>
                  Hi {user.firstName}, welcome to Blackwell!
                </p>
                <button onClick={handleLogout} className={styles.logoutBtn}>
                  LOGOUT
                </button>
              </>
            )}

            {/* Hamburger icon for mobile */}
            <button
              className={`${styles.menuToggle} ${menuOpen ? styles.open : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
        <nav className={styles.mobileMenu}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Promotion</Link>
          <Link href="/">Contact</Link>

          {/* Dynamic auth section */}
          {!user ? (
            <div className={styles.mobileButtons}>
              <Link href="/register">
                Register 
              </Link>
              <Link href="/login">
                Login
              </Link>
            </div>
          ) : (
            <div className={styles.mobileButtons}>
              <button onClick={handleLogout} className={styles.logoutBtn}>
                LOGOUT
              </button>
            </div>
          )}
        </nav>
      )}

      </header>

      {/* Notice bar */}
      {showNotice && (
        <div className={styles.noticeBar}>
          Notice: Fraudulent Cloned Website and App Download.
          <Link href="/notice"> Learn More &gt;&gt;</Link>
          <button
            className={styles.closeBtn}
            onClick={() => setShowNotice(false)}
            aria-label="Close notice"
          >
            ×
          </button>
        </div>
      )}


      {/* ✅ Logout Success Modal */}
      <AnimatePresence>
        {showLogoutModal && (
          <motion.div
            className={styles.logoutModal}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className={styles.logoutBox}>
              <h3>Thank You!</h3>
              <p>You have successfully logged out. Come again soon!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
