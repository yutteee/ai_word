import React from "react";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";

interface Props {
  title: string;
  count: number;
}

export const WordsCard: React.FC<Props> = (props) => {
  const { title, count } = props;

  return (
    <Link
      href={`/words/${title}`}
      className="card w-56 h-20 px-6 bg-white drop-shadow-base flex flex-row items-center justify-between hover:bg-hover"
    >
      <div className="flex flex-row items-center">
        <div className="text-lg font-bold">{title}</div>
        <div>&#40;{count}&#41;</div>
      </div>
      <MdNavigateNext size="1.5rem" />
    </Link>
  );
};
