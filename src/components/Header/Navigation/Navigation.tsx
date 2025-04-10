import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <>
      <ul className="flex items-center justify-between h-[inherit]">
        <li>
          <NavLink to="/"  className="text-white text-xl font-bold">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact"  className="text-white text-xl font-bold">お問い合わせ</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
