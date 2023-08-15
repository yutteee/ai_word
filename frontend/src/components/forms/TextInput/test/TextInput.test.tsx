import '@testing-library/jest-dom'
import { TextInput } from "../TextInput";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("TextInput", () => {
  test("ラベルが表示される", () => {
    render(<TextInput label="テスト" text="" setText={() => {}} />);
    expect(screen.getByText("テスト")).toBeInTheDocument();
  });
});