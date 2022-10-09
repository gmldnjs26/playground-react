import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Hello World as a text", () => {
    // Arrage
    render(<Greeting />);

    // Act
    // ...nothing this case

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("p tag text is existed", () => {
    // Arrage
    render(<Greeting />);

    // Act
    // ...nothing this case

    // Assert
    const pElement = screen.getByText("It's good to see you!");
    expect(pElement).toBeInTheDocument();
  });

  test("after click p tag text is changed", () => {
    // Arrage
    render(<Greeting />);

    // Act
    const btnElement = screen.getByRole("button");
    userEvent.click(btnElement);

    // Assert
    const changedTextElement = screen.getByText("Changed!");
    expect(changedTextElement).toBeInTheDocument();

    const beforeChangeTextElement = screen.queryByText("It's good to see you!");
    expect(beforeChangeTextElement).not.toBeInTheDocument();
  });
});
