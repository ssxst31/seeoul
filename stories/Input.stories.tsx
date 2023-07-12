import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Input from "app/_component/atoms/Input";

export default {
  title: "Component/Input",
  component: Input,
  args: {
    type: "text",
    placeholder: "검색어를 입력해주세요.",
    fontColor: "text-black",
    bgColor: "bg-white",
    paddingSize: "pl-2",
    className: "hover:bg-red-900",
    width: "w-full",
    textSize: "text-base",
    outline: "outline-0",
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = function Template(args) {
  const { type, className, placeholder, bgColor, paddingSize, fontColor, width, textSize, outline } = args;

  return (
    <Input
      type={type}
      placeholder={placeholder}
      fontColor={fontColor}
      bgColor={bgColor}
      paddingSize={paddingSize}
      className={className}
      width={width}
      textSize={textSize}
      outline={outline}
    />
  );
};

export const NotTyping = Template.bind({});
NotTyping.args = {
  placeholder: "작성 전",
};

export const Typing = Template.bind({});
Typing.args = {
  placeholder: "작성 중",
};
