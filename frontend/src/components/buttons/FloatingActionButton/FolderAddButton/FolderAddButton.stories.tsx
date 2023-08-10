import type { Meta, StoryObj } from "@storybook/react";
import { FolderAddButton } from './FolderAddButton';

type T = typeof FolderAddButton

export default {
  component: FolderAddButton,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};