import type { Meta, StoryObj } from "@storybook/react";
import { WordModal } from './WordModal';

type T = typeof WordModal

export default {
  component: WordModal,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};