import type { Meta, StoryObj } from "@storybook/react";
import { BaseButton } from "./BaseButton";
import { BiSolidEdit } from "react-icons/bi";

type T = typeof BaseButton;

export default {
  component: BaseButton,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    children: "Button",
  },
};

export const Outline: StoryObj<T> = {
  args: {
    children: "Button",
    outline: true,
  },
};

export const IconButton: StoryObj<T> = {
  args: {
    children: (
      <div className="flex align-center justify-between	w-20">
        <BiSolidEdit size="1rem" />
        <div>button</div>
      </div>
    ),
  },
};
