"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import styles from "@/styles/forgotPassword.module.scss";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
});

type FormValues = yup.InferType<typeof schema>;

export default function ForgotPasswordPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: yupResolver(schema), mode: "onTouched" });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 1200)); // mock request
    setShowSuccess(true);
    reset();
  };

  return (
    <section className={styles.forgotSection} aria-label="Forgot Password">
      <div className={styles.container}>
        <motion.div
          className={styles.formPane}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={styles.title}>Forgot Your Password?</h1>
          <p className={styles.subtitle}>
            Enter your registered email below and we’ll send you a reset link.
          </p>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" {...register("email")} />
              {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            </div>

            <motion.button
              type="submit"
              className={styles.submitBtn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending Link..." : "Send Reset Link"}
            </motion.button>

            <p className={styles.footNote}>
              Back to{" "}
              <Link href="/login" className={styles.loginLink}>
                Login
              </Link>
            </p>
          </form>
        </motion.div>
      </div>

      {/* Success Modal */}
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
              aria-labelledby="resetSuccessTitle"
            >
              <h3 id="resetSuccessTitle" className={styles.modalTitle}>
                Reset Link Sent
              </h3>
              <p className={styles.modalText}>
                We’ve sent a password reset link to your email. Please check your inbox and follow
                the instructions to reset your password.
              </p>

              <div className={styles.modalActions}>
                <Link href="/login" className={styles.modalPrimary}>
                  Go to Login
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
