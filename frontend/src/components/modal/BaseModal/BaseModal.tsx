import React from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  labelId: string;
  children?: React.ReactNode;
}

export const BaseModal: React.FC<Props> = (props) => {
  const { isOpen, setIsOpen, labelId, children } = props;

  return (
    <>
      <input
        type="checkbox"
        id={labelId}
        className="modal-toggle"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <div className="modal">
        <div className="modal-box bg-white">{children}</div>
        <label
          className="modal-backdrop"
          htmlFor={labelId}
          onClick={() => setIsOpen(false)}
          role="button"
        >
          Close
        </label>
      </div>
    </>
  );
};
