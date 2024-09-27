import '@testing-library/jest-dom'
import { Textarea } from "../Textarea";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Textarea", () => {
  test("ラベル、placeholderが表示される", () => {
    render(<Textarea label="テスト" text="" setText={() => {}} />);
    expect(screen.getByText("テスト")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("テスト")).toBeInTheDocument();  
  });
  test("必須マークが表示される", () => {
    render(<Textarea label="テスト" text='' setText={() => {}} required />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  })
  test("テキストが入力できる", () => {
    const setText = jest.fn();
    const label = "テスト";
    const testText = "てすてす";

    render(<Textarea label={label} text="" setText={setText} />);
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: testText } });

    expect(setText).toBeCalledTimes(1);
    expect(setText).toHaveBeenCalledWith(testText);
  });
});