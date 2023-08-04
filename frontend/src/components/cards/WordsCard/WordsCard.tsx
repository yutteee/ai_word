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
      className="card w-64 h-24 px-8 bg-white shadow-shadow flex flex-row items-center justify-between hover:bg-hover"
    >
      <div className="flex flex-row">
        <div className="text-lg font-bold">{title}</div>
        <div>&#40;{count}&#41;</div>
      </div>
      <MdNavigateNext size="1.5rem" />
    </Link>
  );
};
