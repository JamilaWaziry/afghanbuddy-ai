import { NavLink, useLocation } from "react-router-dom";
import { Menu, Heart, X, Compass, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import Logo from "./Logo";
import { navigation } from "../../constants/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 30);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const darkNavbar = !isHome || scrolled;

  return (
    <header
      className={`
        fixed left-0 top-0 z-50 w-full
        transition-all duration-500 ease-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        ${
          scrolled
            ? "border-b border-slate-200/60 bg-white/85 shadow-sm backdrop-blur-xl"
            : isHome
              ? "bg-transparent"
              : "border-b border-slate-100 bg-white/95 backdrop-blur-xl"
        }
      `}
    >
      <div
        className="
          mx-auto flex h-[76px] max-w-7xl
          items-center justify-between
          px-5 sm:px-6 lg:px-8
        "
      >
        <NavLink to="/" className="shrink-0" aria-label="AfghanBuddy Home">
          <Logo dark={darkNavbar} />
        </NavLink>

        <nav
          className="
            hidden items-center gap-1
            rounded-full
            border border-white/10
            bg-white/10
            p-1
            backdrop-blur-md
            md:flex
          "
        >
          {navigation.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `
                rounded-full px-4 py-2.5
                text-sm font-medium
                transition-all duration-300

                ${
                  isActive
                    ? darkNavbar
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-white/25 text-white shadow-sm"
                    : darkNavbar
                      ? "text-slate-600 hover:bg-cyan-50 hover:text-cyan-600"
                      : "text-white/90 hover:bg-white/15 hover:text-cyan-200"
                }
                `
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <NavLink
            to="/favorites"
            className={`
              group flex h-10 w-10
              items-center justify-center
              rounded-full
              transition-all duration-300

              ${
                darkNavbar
                  ? "text-slate-700 hover:bg-cyan-50 hover:text-cyan-600"
                  : "text-white hover:bg-white/15 hover:text-cyan-200"
              }
            `}
            aria-label="Favorites"
          >
            <Heart
              size={20}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </NavLink>

          <NavLink
            to="/destinations"
            className="
              group flex items-center gap-2
              rounded-full
              bg-gradient-to-r from-cyan-500 to-teal-500
              px-5 py-2.5
              text-sm font-semibold
              text-white
              shadow-lg shadow-cyan-500/20
              transition-all duration-300
              hover:-translate-y-0.5
              hover:from-cyan-400
              hover:to-teal-400
              hover:shadow-xl hover:shadow-cyan-500/30
            "
          >
            <Compass
              size={17}
              className="transition-transform duration-300 group-hover:rotate-12"
            />

            <span>Explore</span>

            <ArrowRight
              size={16}
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </NavLink>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`
            flex h-10 w-10
            items-center justify-center
            rounded-full
            transition-all duration-300
            md:hidden

            ${
              darkNavbar
                ? "text-slate-900 hover:bg-cyan-50 hover:text-cyan-600"
                : "text-white hover:bg-white/10 hover:text-cyan-200"
            }
          `}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`
          overflow-hidden
          border-t
          transition-all duration-300
          md:hidden

          ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}

          ${
            darkNavbar
              ? "border-slate-200 bg-white"
              : "border-white/10 bg-slate-900/95 backdrop-blur-xl"
          }
        `}
      >
        <nav className="space-y-1 px-5 py-4">
          {navigation.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `
                flex items-center justify-between
                rounded-xl px-4 py-3.5
                text-sm font-medium
                transition-all

                ${
                  isActive
                    ? "bg-cyan-50 text-cyan-600"
                    : darkNavbar
                      ? "text-slate-700 hover:bg-cyan-50 hover:text-cyan-600"
                      : "text-white hover:bg-white/10 hover:text-cyan-200"
                }
                `
              }
            >
              {item.name}

              <ArrowRight size={16} />
            </NavLink>
          ))}

          <NavLink
            to="/favorites"
            className={`
              flex items-center gap-3
              rounded-xl px-4 py-3.5
              text-sm font-medium
              transition-all

              ${
                darkNavbar
                  ? "text-slate-700 hover:bg-cyan-50 hover:text-cyan-600"
                  : "text-white hover:bg-white/10 hover:text-cyan-200"
              }
            `}
          >
            <Heart size={18} />
            Favorites
          </NavLink>

          <NavLink
            to="/destinations"
            className="
              group mt-3 flex
              items-center justify-center gap-2
              rounded-xl
              bg-gradient-to-r from-cyan-500 to-teal-500
              px-4 py-3.5
              font-semibold
              text-white
              shadow-lg shadow-cyan-500/20
              transition-all duration-300
              hover:from-cyan-400
              hover:to-teal-400
              hover:shadow-cyan-500/30
            "
          >
            <Compass
              size={18}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
            Explore Destinations
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
