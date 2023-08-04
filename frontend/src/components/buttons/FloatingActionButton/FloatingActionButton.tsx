"use client";

import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

interface Props {
  children?: React.ReactNode;
}

export const FloatingActionButton: React.FC<Props> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <label className="z-50 btn btn-circle bg-primary border-none swap swap-rotate hover:bg-hoverPrimary">
        <input type="checkbox" onChange={() => setIsModalOpen(!isModalOpen)} />
        <AiOutlinePlus size="1rem" className="swap-off fill-current text-white" />
        <RxCross2 size="1rem" className="swap-on fill-current text-white" />
      </label>
      {isModalOpen && (
        <div
          className="fixed w-screen	h-screen bg-black bg-opacity-50 top-0 left-0 z-40"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          {props.children}
        </div>
      )}
    </>
  );
};
