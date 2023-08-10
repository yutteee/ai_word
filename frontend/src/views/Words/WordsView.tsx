"use client";

import React, { useEffect } from "react";
import { WordsCard } from "../../components/cards/WordsCard/WordsCard";
import { db } from "../../db";
import { useFolders, useFoldersDispatch } from "../../app/FoldersContext";

interface Props {}

export const WordsView: React.FC<Props> = (props) => {
  const folders = useFolders();
  const dispatch = useFoldersDispatch();
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

        dispatch({ type: "init", payload: folderNamesAndWordsCount });

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
