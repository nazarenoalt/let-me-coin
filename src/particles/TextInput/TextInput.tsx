import { TextInputWrapper } from './TextInput.styles'
import React, { useContext } from 'react';
import { appContext } from '../../context/appContext';
import { TextInputPropsInterface } from '../../models/particlesModel';

const TextInput: React.FC<TextInputPropsInterface> = ({ color = "default", inputSize = "1", ...rest }) => {
  const { colorMap } = useContext(appContext) as { colorMap: { [key: string]: string } };

  return (
    <TextInputWrapper inputSize={inputSize} color={colorMap[color || "default"]} {...rest} />
  )
}

export default TextInput