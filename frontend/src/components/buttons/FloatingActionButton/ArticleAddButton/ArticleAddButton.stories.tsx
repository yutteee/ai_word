import type { Meta, StoryObj } from "@storybook/react";
import { ArticleAddButton } from './ArticleAddButton';

type T = typeof ArticleAddButton

export default {
  component: ArticleAddButton,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};