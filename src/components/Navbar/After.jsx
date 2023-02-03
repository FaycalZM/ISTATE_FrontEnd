import Logout from "../shared/Logout";
import { api } from "../../utils/api";

export default function After() {
  return (
    <nav className="bg-white shadow-md py-4 md:py-3 px-4 md:px-8 lg:px-16 xl:px-20 flex items-center justify-between ">
      <a href="/">
        <img src="/shared//Logo.svg" alt="Logo" />
      </a>
      <button
        onClick={async () => {
          console.log(api.defaults.withCredentials);
          api
            .get("/user/1")
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        }}
      >
        test
      </button>
      <Logout />
    </nav>
  );
}
