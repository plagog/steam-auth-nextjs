import Link from "next/link";
import steam from "/src/assets/steam.png";
import Image from "next/image";
import { useRouter } from "next/router";

const SteamId = ({ steamUser }) => {
  const router = useRouter();

  const loginLink = `/api/auth/steamLogin/?returnUrl="${router.asPath}"`;
  const logoutLink = `/api/auth/steamLogout/?returnUrl="${router.asPath}"`;

  const steamSignOut = async () => {
    router.push(logoutLink);
  };
  return (
    <div style={{ minWidth: "180px" }}>
      {steamUser ? (
        <div
          style={{
            backgroundColor: "#404040",
            padding: "10px",
            width: "320px",
            borderRadius: "5px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "220px",
              alignItems: "center",
            }}
          >
            {steamUser?.photos?.[0]?.value && (
              <Image
                src={steamUser?.photos?.[0]?.value}
                alt="steam-Img"
                width={55}
                height={55}
                quality={100}
              />
            )}

            <div>
              <h3 style={{ color: "white", fontSize: "18px", margin: 0 }}>
                {steamUser?.displayName}
              </h3>
              <h3 style={{ color: "white", fontSize: "16px", margin: 0 }}>
                {steamUser?.id}
              </h3>
            </div>
          </div>

          <span
            style={{
              cursor: "pointer",
              position: "absolute",
              right: 5,
              bottom: 3,
              color: "#fff",
              textDecoration: "underline",
            }}
          >
            <a
              onClick={() => {
                steamSignOut();
              }}
              style={{ color: "white", fontSize: "15px" }}
            >
              Sign Out
            </a>
          </span>
        </div>
      ) : (
        <div style={{ display: "flex", paddingTop: "20px" }}>
          <Link href={loginLink}>
            <a style={{ color: "white" }}>
              <Image src={steam} alt="Steam Sign In" quality={100} />
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SteamId;
