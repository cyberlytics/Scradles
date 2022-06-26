import {render} from "@testing-library/react";
import MatchMenu from "./MatchMenu";
import {BrowserRouter as Router} from "react-router-dom";

describe("MatchMenu Component", () => {
    it("Rendered MatchMenu", () => {
        const { getByTestId } = render(<Router><MatchMenu /></Router>);
        const matchMenu = getByTestId('matchMenu');
        expect(matchMenu).toBeTruthy();
    });
});