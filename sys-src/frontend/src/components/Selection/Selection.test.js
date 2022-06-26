import {render } from "@testing-library/react";
import Selection from "./Selection";

describe("Selection Component", () => {
    it("rendered Selection", () => {
        const { getByTestId } = render(<Selection/>);
        const selection = getByTestId('selection');
        expect(selection).toBeTruthy();
    });
});