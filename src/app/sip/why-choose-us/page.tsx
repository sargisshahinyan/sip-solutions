import styles from "./styles.module.scss";
import { Navbar } from "@/shared/components/Navbar";
import { Footer } from "@/shared/components/Footer";
import { PageTitle } from "@/shared/components/PageTitle";

export default function WhyChooseUsPage() {
  return (
    <>
      <Navbar />
      <main className={styles["why-choose-us"]}>
        <PageTitle>Why choose Us?</PageTitle>
      </main>
      <Footer />
    </>
  );
}
