import React from "react";
import { BsAsterisk } from "react-icons/bs";

interface Props {
  label: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  required?: boolean;
}

export const Textarea: React.FC<Props> = (props) => {
  const { label, text, setText, required } = props;
  return (
    <div className="form-control">
      <label className="label justify-start">
        <span className="label-text">{label}</span>
        {required && <BsAsterisk className="text-red-500 ml-1" size="8" />}
      </label>
      <textarea
        className="textarea textarea-bordered h-24 bg-white"
        placeholder={label}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </div>
  );
};
