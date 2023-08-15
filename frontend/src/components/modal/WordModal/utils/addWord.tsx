import { db } from "../../../../db";

export const addWord = async function (
  wordEnglish: string,
  wordJapanese: string,
  selectedOption: string,
  memo: string,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    await db.words.add({
      word_en: wordEnglish,
      word_jp: wordJapanese,
      folder: selectedOption,
      memo: memo,
    });
    setIsOpen(false);
    console.log("success");
  } catch (error) {
    console.error(error);
  }
};
