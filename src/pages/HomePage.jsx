import { Navigate } from "react-router-dom";
import HomePageAfter from "../components/HomePageAfter/HomePageAfter";
import HomePageBefore from "../components/HomePageBefore/HomePageBefore";

export default function HomePage() {
  const connected = localStorage.getItem("user") ? true : false;
  const confirmed = parseInt(localStorage.getItem("confirmed"))
  
  if (connected && confirmed === 0) return <Navigate to="/register"  replace/>;

  return (
    <>
      {connected && <HomePageAfter />}
      {!connected && <HomePageBefore />}
    </>
  );
}
