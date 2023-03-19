import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const links = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "PC ",
    url: "/pc",
  },
  {
    id: 3,
    text: "PS5",
    url: "/ps",
  },
  {
    id: 4,
    text: "Xbox",
    url: "/xbox",
  },

  {
    id: 5,
    text: "Contact",
    url: "/contact",
  },
];
const Nav = () => {
  return (
    <>
      {links.map((link) => {
        const { id, text, url } = link;

        return (
          <Navbar key={id}>
            <li className="nav-item ">
              <NavLink
                className="nav-link fw-bold mx-2 my-2  "
                aria-current="page"
                to={url}
              >
                {text}
              </NavLink>
            </li>
          </Navbar>
        );
      })}
    </>
  );
};

const Navbar = styled.nav`
  .nav-item {
    position: relative;
  }
  .nav-item::before {
    content: "";
    width: 0;
    height: 0.3rem;
    position: absolute;
    bottom: -0.9rem;
    left: 50%;
    transform: translateX(-50%);
    background: #3e403e;
    transition: all 0.3s ease;
    color: white;
  }

  .nav-link {
    text-transform: uppercase;
    color: white;
  }

  .nav-link.active {
    color: grey;
  }
  .nav-item:hover::before {
    width: 100%;
  }
`;
export default Nav;
