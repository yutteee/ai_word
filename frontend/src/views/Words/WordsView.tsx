import React from "react";
import { WordsCard } from "../../components/cards/WordsCard/WordsCard";

interface Props {}

export const WordsView: React.FC<Props> = (props) => {
  return (
    <div>
      <h2 className="text-xl mb-8 font-bold">単語帳</h2>
      <div className="flex flex-row flex-wrap gap-4">
        <WordsCard title="英単語" count={10} />
        <WordsCard title="英単語" count={10} />
        <WordsCard title="英単語" count={10} />
      </div>
    </div>
  );
};
