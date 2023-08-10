import type { Meta, StoryObj } from "@storybook/react";
import { FolderModal } from "./FolderModal";

type T = typeof FolderModal;

export default {
  component: FolderModal,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {
  args: {
    labelId: "folder-add-button",
    isOpen: true,
    setIsOpen: () => {},
  },
};
