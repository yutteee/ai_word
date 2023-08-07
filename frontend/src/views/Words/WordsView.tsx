"use client";

import React, { useState, useEffect } from "react";
import { WordsCard } from "../../components/cards/WordsCard/WordsCard";
import { db } from "../../db";

interface Props {}

export const WordsView: React.FC<Props> = (props) => {
  const [folders, setFolders] = useState<{ folderName: string; wordsCount: number }[] | null>(null);
  useEffect(() => {
    const getFolders = async () => {
      try {
        const folders = await db.folders.toArray();
        const foldersNames = folders.map((folder) => folder.folder);

        const getAllWordsCount = await db.words.count();

        const folderNamesAndWordsCount = [
          { folderName: "全ての単語", wordsCount: getAllWordsCount },
        ];

        for (let i = 0; i < foldersNames.length; i++) {
          const wordsCount = await db.words.where({ folder: foldersNames[i] }).count();
          folderNamesAndWordsCount.push({ folderName: foldersNames[i], wordsCount: wordsCount });
        }

        console.log(folderNamesAndWordsCount);
        setFolders(folderNamesAndWordsCount);
        return folderNamesAndWordsCount;
      } catch (error) {
        console.error(error);
      }
    };
    getFolders();
  }, []);

  return (
    <div>
      <h2 className="text-xl mb-8 font-bold">単語帳</h2>
      <div className="flex flex-row flex-wrap gap-4">
        {folders?.map((folder, index) => (
          <WordsCard title={folder.folderName} count={folder.wordsCount} key={index} />
        ))}
      </div>
    </div>
  );
};
