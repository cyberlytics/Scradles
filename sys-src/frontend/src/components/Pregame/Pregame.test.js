import {render} from "@testing-library/react";
import Pregame from "./Pregame.js";

describe("Pregame Component", () => {
    it("Rendered Pregame", () => {
        const { getByTestId } = render(<Pregame />);
        const pregame = getByTestId('pregame');
        expect(pregame).toBeTruthy();
    });
});