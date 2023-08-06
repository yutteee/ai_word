import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from './TextInput';

type T = typeof TextInput

export default {
  component: TextInput,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};