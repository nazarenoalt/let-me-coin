import { FC, useContext } from "react";
import { appContext } from "../../context/appContext";
import { ButtonWrapper } from "./Button.styles"
import { ButtonPropsInterface } from "../../models/particlesModel";

const Button: FC<ButtonPropsInterface> = ({ children, color, rest }) => {
  const { colorMap } = useContext(appContext) as { colorMap: { [key: string]: string } };

  return (
    <ButtonWrapper color={colorMap[color || "default"] || colorMap["default"]} {...rest}>{children}</ButtonWrapper>
  )
}

export default Button