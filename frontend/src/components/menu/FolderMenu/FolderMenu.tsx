import React, { forwardRef } from "react";
import { BsTrash } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";

interface Props {}

export const FolderMenu: React.FC<Props> = forwardRef((props) => {
  return (
    <ul className="menu w-56 rounded-box bg-white">
      <li>
        <button className="text-black hover:text-black focus:text-black active:text-black">
          <BiSolidEdit className="w-5 h-5" />
          <span className="ml-2">編集</span>
        </button>
      </li>
      <li>
        <button className="text-red-500 hover:text-red-500">
          <BsTrash className="w-5 h-5" />
          <span className="ml-2">削除</span>
        </button>
      </li>
    </ul>
  );
});
