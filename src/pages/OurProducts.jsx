import { Link, Outlet } from "react-router-dom";
import { multiLevelLinks } from "../../constants";
import NavTest from "../components/NavTest";
import TestTab from "./TestTab";

export default function OurProducts() {
  return (
    <main className={"antialiased"}>
      OurProducts
      <NavTest />
      <div className={"h-96"}>
        <ul className={"list-disk"}>
          {multiLevelLinks.map((link) => (
            <li key={link.id}>
              <Link to={`/our-products/${link.link}`}>{link.link}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
      <div className={"space-y-12"}>
        <TestTab />
      </div>
    </main>
  );
}
