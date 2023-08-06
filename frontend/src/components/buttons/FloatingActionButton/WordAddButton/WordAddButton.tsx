import React from "react";
import { BaseButton } from "../../BaseButton/BaseButton";
import { AiFillFileAdd } from "react-icons/ai";
import { BaseModal } from "../../../modal/BaseModal/BaseModal";

interface Props {}

export const WordAddButton: React.FC<Props> = (props) => {
  const labelId = "word-add-button";
  return (
    <>
      <BaseButton labelId={labelId}>
        <AiFillFileAdd size="1rem" />
        <div>単語を追加</div>
      </BaseButton>
      <BaseModal labelId={labelId}>
        <div className="flex items-center justify-center flex-col gap-4">
          <div className="w-full">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">英単語</span>
              </label>
              <input
                type="text"
                placeholder="英単語"
                className="input input-bordered w-full max-w-xs bg-white text-base"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">日本語訳</span>
              </label>
              <input
                type="text"
                placeholder="日本語"
                className="input input-bordered w-full max-w-xs bg-white text-base"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">保存先の単語帳</span>
              </label>
              <select className="select select-bordered bg-white font-normal text-base">
                <option selected>選択しない</option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">メモ</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24 bg-white"
                placeholder="メモ"
              ></textarea>
            </div>
          </div>
          <BaseButton outline>
            <div className="text-base font-normal">追加</div>
          </BaseButton>
        </div>
      </BaseModal>
    </>
  );
};
