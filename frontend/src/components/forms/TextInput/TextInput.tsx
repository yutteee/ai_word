import React, { memo } from "react";
import { BsAsterisk } from "react-icons/bs";

interface Props {
  label: string;
  required?: boolean;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export const TextInput: React.FC<Props> = memo((props) => {
  const { label, required = false, text, setText } = props;

  return (
    <div className="w-full">
      <div className="form-control w-full max-w-xs">
        <label className="label justify-start">
          <span className="label-text">{label}</span>
          {required && <BsAsterisk className="text-red-500 ml-1" size="8" role="img" />}
        </label>
        <input
          type="text"
          placeholder={label}
          className="input input-bordered w-full max-w-xs bg-white text-base"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
});
