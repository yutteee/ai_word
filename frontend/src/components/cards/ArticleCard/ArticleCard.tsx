import React from "react";
import Link from "next/link";

interface Props {
  title: string;
  text: string;
  id: number;
}

export const ArticleCard: React.FC<Props> = (props) => {
  const { title, text, id } = props;

  return (
    <Link
      href={`articles/${id}`}
      className="card bg-white shadow-shadow p-4 flex flex-col gap-4 w-80"
    >
      <div
        className="h-24"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {text}
      </div>
      <div
        className="text-lg font-bold h-12"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {title}
      </div>
    </Link>
  );
};
