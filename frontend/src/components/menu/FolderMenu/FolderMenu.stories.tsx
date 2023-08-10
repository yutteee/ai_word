import type { Meta, StoryObj } from "@storybook/react";
import { FolderMenu } from './FolderMenu';

type T = typeof FolderMenu

export default {
  component: FolderMenu,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};