import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

type T = typeof Textarea;

export default {
  component: Textarea,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    label: "メモ",
    text: "",
    setText: () => {},
    required: false,
  },
};

export const Required: StoryObj<T> = {
  args: {
    label: "メモ",
    text: "",
    setText: () => {},
    required: true,
  },
};
