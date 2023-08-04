import type { Meta, StoryObj } from "@storybook/react";
import { ArticlesView } from './ArticlesView';

type T = typeof ArticlesView

export default {
  component: ArticlesView,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};