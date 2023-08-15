import '@testing-library/jest-dom'
import { BaseModal } from "../BaseModal";
import { render, screen, fireEvent } from "@testing-library/react";

const props = {
  isOpen: true,
  setIsOpen: () => {},
  labelId: "test",
  children: <div>テスト</div>
}

describe("BaseModal", () => {
  test("isOpenがtrueの時、モーダルが表示される", () => {
    render(<BaseModal {...props} />);
    expect(screen.getByRole("checkbox", { checked: true })).toBeInTheDocument();
    expect(screen.getByText("テスト")).toBeInTheDocument();
  });
  test("モーダルの外側をクリックするとモーダルが閉じる", () => {
    const setIsOpen = jest.fn();
    render(<BaseModal {...props} setIsOpen={setIsOpen} />);
    const backdrop = screen.getByRole("button");
    fireEvent.click(backdrop);
    expect(setIsOpen).toHaveBeenCalledTimes(1);
    expect(setIsOpen).toHaveBeenCalledWith(false);
  });
})