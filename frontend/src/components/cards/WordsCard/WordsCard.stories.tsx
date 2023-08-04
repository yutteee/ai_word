import type { Meta, StoryObj } from "@storybook/react";
import { WordsCard } from "./WordsCard";

type T = typeof WordsCard;

export default {
  component: WordsCard,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    title: "全ての単語",
    count: 52,
  },
};
