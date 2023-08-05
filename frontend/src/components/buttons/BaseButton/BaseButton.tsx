import React, { memo } from "react";

interface Props {
  children?: React.ReactNode;
  outline?: boolean;
  handleClick?: () => void;
  labelId?: string;
}

export const BaseButton: React.FC<Props> = memo(
  ({ outline = false, children, handleClick, labelId }) => {
    const style = outline
      ? "btn border border-primary text-primary bg-white hover:bg-hover hover:border-primary transition-all"
      : "btn bg-primary text-white border-none drop-shadow-base hover:bg-hoverPrimary transition-all";

    const props = {
      className: style,
      onClick: handleClick,
      htmlFor: labelId,
    };

    return labelId ? <label {...props}>{children}</label> : <button {...props}>{children}</button>;
  }
);
