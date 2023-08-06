import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";

type T = typeof TextInput;

export default {
  component: TextInput,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    label: "単語帳名",
    text: "",
    setText: () => {},
  },
};

export const Required: StoryObj<T> = {
  args: {
    label: "単語帳名",
    text: "hoge",
    setText: () => {},
    required: true,
  },
};
