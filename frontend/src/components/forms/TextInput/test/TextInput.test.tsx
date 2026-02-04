import '@testing-library/jest-dom'
import { TextInput } from "../TextInput";
import { render, screen, fireEvent } from "@testing-library/react";

describe("TextInput", () => {
  test("ラベルが表示される", () => {
    render(<TextInput label="テスト" text="" setText={() => {}} />);
    expect(screen.getByText("テスト")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("テスト")).toBeInTheDocument();
  });
  test("必須マークが表示される", () => {
    render(<TextInput label="テスト" text="" setText={() => {}} required />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  test("テキストが入力できる", () => {
    const setText = jest.fn();
    const lbael = "テスト";
    const testText = "テスト";

    render(<TextInput label={lbael} text="" setText={setText} />);
    const textInput = screen.getByRole("textbox");
    fireEvent.change(textInput, { target: { value: testText } });

    expect(setText).toHaveBeenCalledTimes(1);
    expect(setText).toHaveBeenCalledWith(testText);
  });
});