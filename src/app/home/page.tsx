import styles from "../page.module.css";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import Navigation from "@/app/components/navigation/navigation";
import MemoriesContainer from "@/app/components/memoriesContainer/memoriesContainer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header></Header>
        <Navigation></Navigation>
        <div className={styles.content}>
          <h2>Welcome to MyMemories</h2>
          <p>Store and share your precious memories.</p>
        </div>
        <main>
          <MemoriesContainer></MemoriesContainer>
        </main>
        <Footer></Footer>
      </main>
    </div>
  );
}
