import { useState, useEffect } from "react";
import { db } from "../../../../db";

export const useOptions = () => {
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    const getFolders = async () => {
      try {
        const folders = await db.folders.toArray();
        const options = folders.map((folder) => folder.folder);
        setOptions(options);
      } catch (error) {
        console.error(error);
      }
    };
    getFolders();
  }, []);

  return options;
};
