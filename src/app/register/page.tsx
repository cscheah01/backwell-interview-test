"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "@/styles/register.module.scss";
import { useUserStore } from "@/store/user";



const schema = yup.object({
  firstName: yup.string().required("First name is required").max(60),
  lastName: yup.string().required("Last name is required").max(60),
  email: yup.string().email("Invalid email").required("Email is required"),
  mobile: yup
    .string()
    .required("Mobile number is required")
    .matches(/^[0-9+\-\s()]{6,20}$/, "Enter a valid phone number"),
  country: yup.string().required("Country is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Use at least 8 characters")
    .matches(/[A-Z]/, "Include at least one uppercase letter")
    .matches(/[a-z]/, "Include at least one lowercase letter")
    .matches(/[0-9]/, "Include at least one number"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm your password"),
});

type FormValues = yup.InferType<typeof schema>;

export default function RegisterPage() {
  const { setUser } = useUserStore();

  const [showSuccess, setShowSuccess] = useState(false);
  const [firstNameForGreeting, setFirstNameForGreeting] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: yupResolver(schema), mode: "onTouched" });

  const onSubmit = async (data: FormValues) => {
    setFirstNameForGreeting(data.firstName);
    await new Promise((r) => setTimeout(r, 1200));

    setUser({
      firstName: data.firstName,
      email: data.email,
    });

    setShowSuccess(true);
    reset();
  };

  return (
    <section className={styles.registerSection} aria-label="Register">
      <div className={styles.waveBg}>
      </div>
      <div className={styles.container}>
        
        <motion.div
          className={styles.formPane}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className={styles.title}>Create your account</h1>
          <p className={styles.subtitle}>
            Join Blackwell Invest and start copying ready-to-go strategies.
          </p>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
            
            <div className={styles.grid2}>
              <div className={styles.field}>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" {...register("firstName")} />
                {errors.firstName && <span className={styles.error}>{errors.firstName.message}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" {...register("lastName")} />
                {errors.lastName && <span className={styles.error}>{errors.lastName.message}</span>}
              </div>
            </div>

            <div className={styles.grid2}>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" {...register("email")} />
                {errors.email && <span className={styles.error}>{errors.email.message}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="mobile">Mobile No.</label>
                <input id="mobile" type="text" {...register("mobile")} />
                {errors.mobile && <span className={styles.error}>{errors.mobile.message}</span>}
              </div>
            </div>

            <div className={styles.grid2}>
              <div className={styles.field}>
                <label htmlFor="country">Country</label>
                <select id="country" {...register("country")}>
                  <option value="">Select country</option>
                  <option>Malaysia</option>
                  <option>Singapore</option>
                  <option>Indonesia</option>
                  <option>Thailand</option>
                  <option>Philippines</option>
                  <option>Vietnam</option>
                </select>
                {errors.country && <span className={styles.error}>{errors.country.message}</span>}
              </div>

              <div className={styles.field} />
            </div>

            <div className={styles.grid2}>
              <div className={styles.field}>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" {...register("password")} />
                {errors.password && <span className={styles.error}>{errors.password.message}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input id="confirmPassword" type="password" {...register("confirmPassword")} />
                {errors.confirmPassword && (
                  <span className={styles.error}>{errors.confirmPassword.message}</span>
                )}
              </div>
            </div>

            <motion.button
              type="submit"
              className={styles.submitBtn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Register Now"}
            </motion.button>

            <p className={styles.footNote}>
              Already have an account?{" "}
              <Link href="/login" className={styles.loginLink}>
                Login
              </Link>
            </p>
          </form>
        </motion.div>
      </div>

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
                Welcome to Blackwell!
              </h3>
              <p className={styles.modalText}>
                Hi <strong>{firstNameForGreeting}</strong>, please verify your email immediately to
                activate your account.
              </p>

              <div className={styles.modalActions}>
                <Link href="/" className={styles.modalPrimary}>
                  Go to Home
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
