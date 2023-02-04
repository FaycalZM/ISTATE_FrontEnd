import Logout from "../shared/Logout";

export default function After() {
  return (
    <nav className="bg-white-blue shadow-md py-4 md:py-3 px-4 md:px-8 lg:px-16 xl:px-20 flex items-center justify-between ">
      <a href="/">
        <img className="h-16 w-auto" src="https://static.thenounproject.com/png/921432-200.png" alt="Logo" />
      </a>
      <Logout />
    </nav>
  );
}
