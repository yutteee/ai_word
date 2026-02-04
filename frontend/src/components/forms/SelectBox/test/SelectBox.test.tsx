import '@testing-library/jest-dom'
import { SelectBox } from "../SelectBox";
import { render, screen, fireEvent } from "@testing-library/react";

const mockItems = ["テスト1", "テスト2", "テスト3"];

describe("SelectBox", () => {
  test("ラベルが表示される", () => {
    render(<SelectBox label="テスト" options={mockItems} value="" setValue={() => {}} />);
    expect(screen.getByText("テスト")).toBeInTheDocument();
  })
  test("必須マークが表示される", () => {
    render(<SelectBox label="テスト" options={mockItems} value="" setValue={() => {}} required />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  })
  test("選択肢が全て表示される", () => {
    render(<SelectBox label="テスト" options={mockItems} value="" setValue={() => {}} />);
    expect(screen.getByText("未選択")).toBeInTheDocument();
    expect(screen.getByText("テスト1")).toBeInTheDocument();
    expect(screen.getByText("テスト2")).toBeInTheDocument();
    expect(screen.getByText("テスト3")).toBeInTheDocument();
  })
  test("選択肢が選択できる", () => {
    const setValue = jest.fn();
    const label = "テスト";
    const testValue = "テスト1";

    render(<SelectBox label={label} options={mockItems} value="" setValue={setValue} />);
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: testValue } });

    expect(setValue).toBeCalledTimes(1);
    expect(setValue).toHaveBeenCalledWith(testValue);
  })
  test("選択肢がない場合、エラーメッセージが表示される", () => {
    render(<SelectBox label="テスト" options={[]} value="" setValue={() => {}} />);
    expect(screen.getByText("選択肢の取得に失敗しました")).toBeInTheDocument();
  })
});