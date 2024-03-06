import { NavLink } from "react-router-dom";

export default function NavLogo() {
  return (
    <div className={"aspect-h-1 aspect-w-1"}>
      <NavLink to={"/"}>
        <img
          src="/logo.jpg"
          alt="navlogo"
          decoding={"async"}
          fetchpriority={"high"}
          className={"h-10 w-auto"}
        />
      </NavLink>
    </div>
  );
}
