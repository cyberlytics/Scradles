import {render} from "@testing-library/react";
import Summary from "./Summary";
import {BrowserRouter as Router} from "react-router-dom";

describe("Summary Component", () => {
    it("Rendered Summary", () => {
        const { getByTestId } = render(<Router><Summary /></Router>);
        const summary = getByTestId('summary');
        expect(summary).toBeTruthy();
    });
});