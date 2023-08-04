import React from "react";
import { ArticleCard } from "../../components/cards/ArticleCard/ArticleCard";

interface Props {}

export const ArticlesView: React.FC<Props> = (props) => {
  const mockProps = {
    title: "title",
    text: "text",
    id: 1,
  };
  return (
    <div>
      <h2 className="text-xl font-bold mb-8">文章</h2>
      <div className="flex flex-row flex-wrap gap-4">
        <ArticleCard {...mockProps} />
      </div>
    </div>
  );
};
