import { useState } from "react"
import { Link } from "react-router"
import { List, NavbarBody, Wrapper } from "./NavbarMobile.styles"

interface pageInterface {
  path: string;
  src: string;
  selected: boolean
}

const pagesObjects: pageInterface[] = [
  { path: "/categories", src: "./src/assets/icons/categories.svg", selected: false },
  { path: "/budgets", src: "./src/assets/icons/wallet.svg", selected: false },
  { path: "/", src: "./src/assets/icons/movements.svg", selected: true },
  { path: "/charts", src: "./src/assets/icons/chart.svg", selected: false },
  { path: "/user", src: "./src/assets/icons/user-alt.svg", selected: false }
]

const NavbarMobile = () => {
  const [pages, setPages] = useState(pagesObjects);

  const handleSelect = (e: React.MouseEvent<HTMLLIElement>) => {
    const newPages = pages.map((page) => {
      return {
        ...page,
        selected: (e.currentTarget as HTMLLIElement).getAttribute("path") === page.path ? true : false
      }
    })
    setPages(newPages);
  }

  return (
    <Wrapper>
      <NavbarBody>
        <ul>
          {pages.map(( page: pageInterface )=> {
            return (
              <List key={page.path} selected={page.selected} path={page.path} onClick={handleSelect}>
                <Link to={page.path}>
                  <img src={page.src} />
                </Link>
              </List>
            )
          })}
        </ul>
      </NavbarBody>
    </Wrapper>
  )
}

export default NavbarMobile