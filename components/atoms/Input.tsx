import React from "react";

interface InputProps {
  type: string;
  className?: string | undefined;
  placeholder: string;
  bgColor: string;
  paddingSize: string;
  onKeyUp?: ((e: React.KeyboardEvent<HTMLInputElement>) => any) | undefined;
  fontColor: string;
  width: string;
  textSize: string;
  outline: string;
}

export default function Input({
  type,
  bgColor,
  className,
  placeholder,
  onKeyUp,
  paddingSize,
  fontColor,
  width,
  textSize,
  outline,
}: InputProps) {
  return (
    <input
      type={type}
      className={`${bgColor} ${paddingSize} ${fontColor} ${className} ${width} ${textSize} ${outline}`}
      placeholder={placeholder}
      onKeyUp={onKeyUp}
    />
  );
}
