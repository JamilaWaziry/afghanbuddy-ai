import { NavLink } from "react-router-dom";
import { Menu, Mountain, Heart, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import { navigation } from "../../constants/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full transition-all duration-500">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <NavLink to="/">
          <Logo />
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `transition duration-200 ${
                  isActive
                    ? "font-semibold text-emerald-400"
                    : "text-white hover:text-emerald-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <NavLink to="/favorites">
            <Heart className="h-5 w-5 text-white transition hover:text-red-400" />
          </NavLink>

          <button className="rounded-full bg-emerald-600 px-5 py-2 text-white transition hover:bg-emerald-700">
            Explore
          </button>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="flex flex-col p-5">
            {navigation.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 ${
                    isActive
                      ? "bg-emerald-50 text-emerald-600"
                      : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <NavLink
              to="/favorites"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-lg px-3 py-3 text-slate-700 hover:bg-slate-100"
            >
              Favorites
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
