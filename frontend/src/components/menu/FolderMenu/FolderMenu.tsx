"use client";

import React from "react";
import { BsTrash } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { db } from "../../../db";
import { useFoldersDispatch } from "../../../app/FoldersContext";

interface Props {
  folderName: string;
}

export const FolderMenu: React.FC<Props> = (props) => {
  const { folderName } = props;
  const dispatch = useFoldersDispatch();

  const deleteFolder = async () => {
    try {
      await db.folders.where({ folder: folderName }).delete();
      await db.words.where({ folder: folderName }).modify({ folder: "" });
      dispatch({ type: "remove", payload: folderName });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ul className="menu w-40 rounded-box bg-white">
      <li>
        <button className="text-black hover:text-black focus:text-black active:text-black">
          <BiSolidEdit className="w-5 h-5" />
          <span className="ml-2">編集</span>
        </button>
      </li>
      <li>
        <button className="text-red-500 hover:text-red-500" onClick={deleteFolder}>
          <BsTrash className="w-5 h-5" />
          <span className="ml-2">削除</span>
        </button>
      </li>
    </ul>
  );
};
