import type { Meta, StoryObj } from "@storybook/react";
import { WordsView } from "./WordsView";

type T = typeof WordsView;

export default {
  component: WordsView,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};
