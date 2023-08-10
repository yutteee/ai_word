"use client";

import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { WordAddButton } from "./WordAddButton/WordAddButton";
import { FolderAddButton } from "./FolderAddButton/FolderAddButton";
import { ArticleAddButton } from "./ArticleAddButton/ArticleAddButton";

interface Props {
  children?: React.ReactNode;
}

export const FloatingActionButton: React.FC<Props> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed z-10 bottom-12 right-12">
        <label className="btn btn-circle bg-primary border-none  drop-shadow-base swap swap-rotate hover:bg-hoverPrimary">
          <input type="checkbox" onChange={() => setIsModalOpen(!isModalOpen)} />
          <AiOutlinePlus size="1rem" className="swap-off fill-current text-white" />
          <RxCross2 size="1rem" className="swap-on fill-current text-white" />
        </label>
      </div>
      {isModalOpen && (
        <div className="fixed bottom-28 right-12 flex flex-col gap-y-4 z-10">
          <WordAddButton />
          <FolderAddButton />
          <ArticleAddButton />
        </div>
      )}
    </>
  );
};
