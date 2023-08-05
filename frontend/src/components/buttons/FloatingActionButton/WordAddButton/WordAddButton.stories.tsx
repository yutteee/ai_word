import type { Meta, StoryObj } from "@storybook/react";
import { WordAddButton } from './WordAddButton';

type T = typeof WordAddButton

export default {
  component: WordAddButton,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};