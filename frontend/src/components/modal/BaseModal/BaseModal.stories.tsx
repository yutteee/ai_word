import type { Meta, StoryObj } from "@storybook/react";
import { BaseModal } from "./BaseModal";

type T = typeof BaseModal;

export default {
  component: BaseModal,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    isOpen: true,
    setIsOpen: () => {},
    labelId: "base-modal",
    children: <div>children</div>,
  },
};
