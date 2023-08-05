import React from "react";

interface Props {
  labelId: string;
  children?: React.ReactNode;
}

export const BaseModal: React.FC<Props> = (props) => {
  const { labelId, children } = props;

  return (
    <>
      <input type="checkbox" id={labelId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">{children}</div>
        <label className="modal-backdrop" htmlFor={labelId}>
          Close
        </label>
      </div>
    </>
  );
};
