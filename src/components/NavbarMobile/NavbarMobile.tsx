import { Link } from "react-router"
import { List, NavbarBody, Wrapper } from "./NavbarMobile.styles"

const NavbarMobile = () => {
  const pages = [
    { endpoint: "/categories", src: "./src/assets/icons/categories.svg", selected: false },
    { endpoint: "/budgets", src: "./src/assets/icons/wallet.svg", selected: false },
    { endpoint: "/", src: "./src/assets/icons/movements.svg", selected: true },
    { endpoint: "/charts", src: "./src/assets/icons/chart.svg", selected: false },
    { endpoint: "/account", src: "./src/assets/icons/user-alt.svg", selected: false }
  ]
  return (
    <Wrapper>
      <NavbarBody>
        <ul>
          {pages.map(page => {
            return (
              <List key={page.endpoint} selected={page.selected}>
                <Link to={page.endpoint}>
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