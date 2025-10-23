"use client";

import styles from "@/styles/enquireNow.module.scss";

export default function EnquireNow() {
  return (
    <section className={styles.enquireNow}>
      

      <div className={styles.container}>
        <h2 className={styles.title}>Enquire Now</h2>

        <form className={styles.form}>
          <div className={styles.row}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>

          <div className={styles.row}>
            <input type="text" placeholder="Mobile No." required />
            <select required>
              <option value="">Country of Residence</option>
              <option>Malaysia</option>
              <option>Singapore</option>
              <option>Indonesia</option>
              <option>Thailand</option>
              <option>Philippines</option>
            </select>
          </div>

          <textarea placeholder="Enter your message here" required />

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
