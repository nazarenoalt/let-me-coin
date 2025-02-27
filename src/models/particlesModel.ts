import React from "react"

export interface ButtonPropsInterface extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
  color?: string;
  rest?: React.HTMLAttributes<HTMLButtonElement>;
}

export interface TextInputPropsInterface extends React.InputHTMLAttributes<HTMLInputElement>{
  color?: string;
  inputSize?: string;
  rest?: React.InputHTMLAttributes<HTMLInputElement>;
} 