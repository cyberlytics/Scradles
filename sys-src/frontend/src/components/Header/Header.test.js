import {render} from "@testing-library/react";
import Header from "./Header";
import {BrowserRouter as Router} from "react-router-dom";

describe("Header Component", () => {
    it("Rendered Header", () => {
        const { getByTestId } = render(<Router><Header /></Router>);
        const header = getByTestId('header');
        expect(header).toBeTruthy();
    });
});