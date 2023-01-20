import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from "react";
import AnimateHeight from "react-animate-height";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { key: 1, to: "/home", display: "Home" },
    { key: 2, to: "/menu", display: "Menu viewer" },
    { key: 3, to: "/about", display: "About" }
  ];

  return (
    <div>
      <MediaQuery minWidth={701}>
        <div className="fixed w-full z-50">
          <div className="bg-blue-200 py-4 px-10 h-14">
            <Link to="/home" className="inline-block text-xl">
              <span className="font-extrabold">Tufts</span>
              <span className="font-extralight"> Dining</span>
            </Link>
            <ul className="float-right">
              {
                links.map(link => (
                  <li className="inline-block mx-3 text-slate-700 font-light">
                    <Link key={link.key} to={link.to}>{ link.display }</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-teal-200 to-blue-600"></div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={700}>
        <div className={`fixed w-full z-50 bg-blue-200`}>
          <AnimateHeight height={open ? "auto" : 64 } duration={500} className="">
            <div className="bg-blue-200">
              <div className="inline-block text-3xl p-4">
                <span className="font-extrabold">Tufts</span>
                <span className="font-extralight"> Dining</span>
              </div>
              <button onClick={() => setOpen(!open)} className="float-right">
              {
                open ? 
                <ExpandLessIcon sx={{ fontSize: 64 }} /> :
                <MenuIcon sx={{ fontSize: 64 }} />
              }
              </button>
            </div>
            <ul className="clear-right w-full mt-5 border-t-2 py-3 border-blue-700 bg-slate-100">
              {
                links.map(link => (
                  <li className="px-5 ml-5 text-xl w-full border-t first:border-t-0 border-slate-500 font-light">
                    <Link key={link.key} to={link.to} className="block py-3">{ link.display }</Link>
                  </li>
                ))
              }
            </ul>
          </AnimateHeight>
          <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-teal-200 to-blue-600" />
        </div>
      </MediaQuery>
    </div>
  );
}
 
export default Navbar;
