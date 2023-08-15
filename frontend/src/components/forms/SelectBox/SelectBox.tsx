import React from "react";
import { BsAsterisk } from "react-icons/bs";

interface Props {
  label: string;
  options: string[];
  required?: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectBox: React.FC<Props> = (props) => {
  const { label, options, required = false, value, setValue } = props;

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label justify-start">
        <span className="label-text">{label}</span>
        {required && <BsAsterisk className="text-red-500 ml-1" size="8" role="img" />}
      </label>
      {options.length !== 0 ? (
        <select
          className="select select-bordered bg-white font-normal text-base"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option>未選択</option>
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      ) : (
        <div>選択肢の取得に失敗しました</div>
      )}
    </div>
  );
};
