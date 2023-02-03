import Logout from "../shared/Logout";

export default function After() {
  return (
    <nav className="bg-white shadow-md py-4 md:py-3 px-4 md:px-8 lg:px-16 xl:px-20 flex items-center justify-between ">
      <a href="/">
        <img src="/shared//Logo.svg" alt="Logo" />
      </a>
      <Logout />
    </nav>
  );
}
