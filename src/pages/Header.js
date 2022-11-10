import { useState, useEffect } from "react";
import { themeChange } from "theme-change";

const Header = () => {
  const [isChecked, setIsCheck] = useState(false);
  const [theme, setTheme] = useState("cmyk");

  useEffect(() => {
    themeChange(false);
  }, []);

  const handleChecked = (e) => {
    setIsCheck(!isChecked);
    e.target.blur();
    if (isChecked) {
      if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", theme);
      } else {
        if (localStorage.getItem("theme") === "cmyk") {
          localStorage.setItem("theme", "night");
        } else {
          localStorage.setItem("theme", "cmyk");
        }
      }
    } else {
      localStorage.setItem("theme", "cmyk");
    }
    setTheme(localStorage.getItem("theme"));
  };

  useEffect(() => {
    setTheme(theme);
  }, [isChecked]);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Map</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <h1 className="normal-case font-semibold text-xl">Abortion App</h1>
      </div>
      <div className="form-control w-52">
        <label className="cursor-pointer label">
          <span className="label-text">theme</span>
          <input
            data-toggle-theme="night,cmyk"
            data-act-class="ACTIVECLASS"
            type="checkbox"
            className="toggle toggle-primary"
            checked={isChecked}
            onChange={handleChecked}
          />
        </label>
      </div>
      <div className="navbar-end">
      </div>
    </div>
  );
};

export default Header;
