import React from "react";

interface Props {
  children?: React.ReactNode;
  outline?: boolean;
  handleClick?: () => void;
}

export const BaseButton: React.FC<Props> = ({ outline = false, children, handleClick }) => {
  const style = outline
    ? "btn border border-primary text-primary bg-white hover:bg-hover hover:border-primary transition-all"
    : "btn bg-primary text-white border-none drop-shadow-base hover:bg-hoverPrimary transition-all";

  return (
    <button className={style} onClick={handleClick}>
      {children}
    </button>
  );
};
