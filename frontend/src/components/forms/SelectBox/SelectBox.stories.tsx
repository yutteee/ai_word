import type { Meta, StoryObj } from "@storybook/react";
import { SelectBox } from "./SelectBox";

type T = typeof SelectBox;

export default {
  component: SelectBox,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    label: "単語帳",
    options: ["Star Wars", "Harry Potter", "Lord of the Rings", "Planet of the Apes", "Star Trek"],
  },
};

export const Required: StoryObj<T> = {
  ...Default,
  args: {
    ...Default.args,
    required: true,
  },
};
