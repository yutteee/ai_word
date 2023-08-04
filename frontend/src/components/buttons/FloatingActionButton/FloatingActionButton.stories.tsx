import type { Meta, StoryObj } from "@storybook/react";
import { FloatingActionButton } from "./FloatingActionButton";

type T = typeof FloatingActionButton;

export default {
  component: FloatingActionButton,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    children: <div>hogehogehoge</div>,
  },
};
