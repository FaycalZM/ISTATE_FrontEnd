import After from "../Navbar/After";
import Before from "../Navbar/Before";

export default function NavBar() {
  const connected = localStorage.getItem("user") ? true : false;
  return (
    <div>
      {connected && <After />}
      {!connected && <Before />}
    </div>
  );
}
