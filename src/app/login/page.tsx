"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "@/styles/login.module.scss";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

type FormValues = yup.InferType<typeof schema>;

export default function LoginPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: yupResolver(schema), mode: "onTouched" });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 1200));
    setShowSuccess(true);
    reset();
  };

  return (
    <section className={styles.loginSection} aria-label="Login">
      <div className={styles.container}>
        <motion.div
          className={styles.formPane}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title}>Welcome Back</h1>
          <p className={styles.subtitle}>Login to your Blackwell Invest account</p>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" {...register("email")} />
              {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="password">Password</label>
              <input id="password" type="password" {...register("password")} />
              {errors.password && <span className={styles.error}>{errors.password.message}</span>}
            </div>

            <div className={styles.links}>
              <Link href="/forgot-password" className={styles.forgotLink}>
                Forgot Password?
              </Link>
            </div>

            <motion.button
              type="submit"
              className={styles.submitBtn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </motion.button>

            <p className={styles.footNote}>
              Don’t have an account?{" "}
              <Link href="/register" className={styles.registerLink}>
                Register
              </Link>
            </p>
          </form>
        </motion.div>
      </div>

      {/* Success Modal — Same Style as Register Page */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="successTitle"
            >
              <h3 id="successTitle" className={styles.modalTitle}>
                Login Successful
              </h3>
              <p className={styles.modalText}>
                Welcome back! Redirecting you to your dashboard...
              </p>

              <div className={styles.modalActions}>
                <Link href="/" className={styles.modalPrimary}>
                  Continue
                </Link>
                <button className={styles.modalSecondary} onClick={() => setShowSuccess(false)}>
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
