import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "@/components/header";
import { getCurrentDate } from "@/utils/getCurrentDate";
import { getCurrentTime } from "@/utils/getCurrentTime";

describe("<Header />", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("should render the Header component", () => {
    const currentDate = getCurrentDate();
    const currentTime = getCurrentTime();

    const h1 = screen.getByRole("heading", { level: 1 });
    const date = screen.getByText(`${currentDate} | ${currentTime}`);
    const p = screen.getByText(
      /Dados de câmbio disponibilizados pela Morningstar./
    );

    expect(h1).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(p).toBeInTheDocument();
  });
});
