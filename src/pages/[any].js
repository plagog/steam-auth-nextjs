import { useRouter } from "next/router";
import router from "/src/context/router";
import styles from "../../styles/Home.module.css";
import SteamId from "../components/SteamId";

const Steam = ({ steamUser }) => {
  const rtr = useRouter();
  return (
    <main className={styles.main}>
      <h1>Steam Auth | NextJs</h1>
      <h3>You are at {rtr.asPath}</h3>
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
