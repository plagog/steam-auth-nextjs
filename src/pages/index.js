import { useRouter } from "next/router";
import router from "/src/context/router";
import styles from "../../styles/Home.module.css";
import SteamId from "../components/SteamId";
import Link from "next/link";

const Steam = ({ steamUser }) => {
  return (
    <main className={styles.main}>
      <h1>Steam Auth | NextJs</h1>
      <p>
        Navigate to{" "}
        <Link href="/any">
          <a>/any</a>
        </Link>{" "}
        and initiate login process to test url persistency.
      </p>
      <SteamId steamUser={steamUser} />
    </main>
  );
};

export async function getServerSideProps({ req, res }) {
  await router.run(req, res);

  console.log("req", req);
  console.log("req");
  return {
    props: {
      steamUser: req.user || null,
    },
  };
}

export default Steam;
