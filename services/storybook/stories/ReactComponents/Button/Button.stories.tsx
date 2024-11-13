import "@ej/react-components-button/style.css";
import { Button as _Button } from "@ej/react-components-button";
import "@ej/react-components-layout/style.css";
import { Text } from "@ej/react-components-layout";
import { vars } from "@ej/themes";
import { useButton, useToggleButton } from "@ej/react-hooks-button";
import * as React from "react";

export default {
  title: "React Components/Button",
  component: _Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "select",
    },
  },
};

export const ButtonStory = {
  args: {
    size: "lg",
    children: "Button",
    variant: "outline",
    isDisabled: false,
    isLoading: false,
    leftIcon: "😀",
  },
};

export const TextButtonStory = {
  render: () => {
    const { buttonProps } = useButton({
      elementType: "div",
      onClick: () => {
        console.log("ttt");
      },
    });

    return (
      <Text
        {...buttonProps}
        as="div"
        fontSize="md"
        color="green"
        style={{
          userSelect: "none",
          cursor: "pointer",
        }}
      >
        텍스트 버튼입니다.
      </Text>
    );
  },
};

export const ToggleButtonStory = {
  render: () => {
    const { buttonProps, isSelected } = useToggleButton(
      { elementType: "button" },
      false,
    );

    return (
      <_Button
        {...buttonProps}
        variant={isSelected ? "solid" : "outline"}
        color="green"
      >
        {isSelected ? "😀" : "😂"}
      </_Button>
    );
  },
};
