import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { FolderModal } from "../FolderModal";

describe("FolderModal", () => {
  test("isOpenがtrueの時、モーダルが表示される", () => {
    render(
      <FolderModal labelId="テスト" isOpen={true} setIsOpen={jest.fn()} handleClick={jest.fn()} />
    );
    expect(screen.getByRole("checkbox", { checked: true })).toBeInTheDocument();
  });
  test("isOpenがfalseの時、モーダルが表示されない", () => {
    render(
      <FolderModal labelId="テスト" isOpen={false} setIsOpen={jest.fn()} handleClick={jest.fn()} />
    );
    expect(screen.queryByRole("checkbox", { checked: false })).toBeInTheDocument();
  });
  test("nameがpropsに渡される時、textInputにnameが表示される", () => {
    render(
      <FolderModal
        labelId="テスト"
        isOpen={true}
        setIsOpen={jest.fn()}
        handleClick={jest.fn()}
        name="テスト"
      />
    );
    expect(screen.getByRole("textbox")).toHaveValue("テスト");
  });
  test("フォルダ名を入力すると、入力したフォルダ名が表示される", () => {
    render(
      <FolderModal labelId="テスト" isOpen={true} setIsOpen={jest.fn()} handleClick={jest.fn()} />
    );
    expect(screen.getByRole("textbox")).toHaveValue("");
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "単語帳" } });
    expect(screen.getByRole("textbox")).toHaveValue("単語帳");
  });
  test("確定ボタンを押すと、setIsOpen、handleClickが発火する", () => {
    const setIsOpen = jest.fn();
    const handleClick = jest.fn();
    render(
      <FolderModal labelId="テスト" isOpen={true} setIsOpen={setIsOpen} handleClick={handleClick} />
    );
    fireEvent.click(screen.getByRole("button", { name: "確定" }));
    expect(setIsOpen).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
