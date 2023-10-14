import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PageContainer from "@/components/page-container";
import Button from "@/components/button";

describe("<Button />", () => {
  beforeEach(() => {
    render(
      <PageContainer>
        <Button disabled>Testing</Button>
      </PageContainer>
    );
  });

  it("should render the Button component", () => {
    const button = screen.getByRole("button", { name: "Testing" });

    expect(button).toBeInTheDocument();
  });

  it("should render the Button component as disabled", () => {
    const disabledButton = screen.getByText(/Testing/i).closest("button");

    expect(disabledButton).toHaveAttribute("disabled");
  });

  it("should render the Button component as active", () => {
    render(
      <PageContainer>
        <Button>Active</Button>
      </PageContainer>
    );

    const activeButton = screen.getByText(/Active/i).closest("button");

    expect(activeButton).not.toHaveAttribute("disabled");
  });

  it("should render the Button component as non variant", () => {
    const variantButton = screen.getByText(/Testing/i).closest("button");

    expect(variantButton).not.toHaveAttribute("variant");
  });

  it("should render the Button component as variant", () => {
    render(
      <PageContainer>
        <Button variant="true">Variant</Button>
      </PageContainer>
    );

    const variantButton = screen.getByText(/Variant/i).closest("button");

    expect(variantButton).toHaveAttribute("variant");
  });
});
