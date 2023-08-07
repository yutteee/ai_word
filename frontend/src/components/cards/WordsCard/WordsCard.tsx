"use client";

import React, { useState, useEffect, useRef, memo } from "react";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";
import { FolderMenu } from "../../menu/FolderMenu/FolderMenu";

interface Props {
  title: string;
  count: number;
}

export const WordsCard: React.FC<Props> = memo((props) => {
  const { title, count } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContextMenu = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsMenuOpen(true);
  };

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("contextmenu", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("contextmenu", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <Link
        href={`/words/${title}`}
        className="card w-56 h-20 px-6 bg-white drop-shadow-base flex flex-row items-center justify-between hover:bg-hover"
        onContextMenu={(e) => handleContextMenu(e)}
      >
        <div className="flex flex-row items-center">
          <div className="text-lg font-bold">{title}</div>
          <div>&#40;{count}&#41;</div>
        </div>
        <MdNavigateNext size="1.5rem" />
      </Link>
      {isMenuOpen && (
        <div className="drop-shadow-base absolute mt-1 z-10">
          <FolderMenu />
        </div>
      )}
    </div>
  );
});
