import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { WordModal } from "../WordModal";

jest.mock("../utils/useOptions", () => ({
  useOptions: jest.fn(() => {
    return ["test1", "test2"];
  }),
}));

jest.mock("../utils/addWord", () => ({
  addWord: jest.fn(),
}));

describe("WordModal", () => {
  test("isOpenがtrueのとき、モーダルが表示される", () => {
    render(<WordModal labelId="テスト" isOpen={true} setIsOpen={jest.fn()} />);
    expect(screen.getByRole("checkbox", { checked: true })).toBeInTheDocument();
  });
  test("isOpenがfalseのとき、モーダルが表示されない", () => {
    render(<WordModal labelId="テスト" isOpen={false} setIsOpen={jest.fn()} />);
    expect(screen.queryByRole("checkbox", { checked: false })).toBeInTheDocument();
  });
  test("単語帳を選択すると、選択した単語帳が表示される", async () => {
    render(<WordModal labelId="テスト" isOpen={true} setIsOpen={jest.fn()} />);

    const selectBox = waitFor(() => screen.getByRole("combobox"));

    fireEvent.change(await selectBox, { target: { value: "test1" } });
    expect(screen.getByDisplayValue("test1")).toBeInTheDocument();
  });
});
