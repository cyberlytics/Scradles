import {render} from "@testing-library/react";
import ScoreBoard from "./ScoreBoard";

describe("ScoreBoard Component", () => {
    it("Rendered Scoreboard", () => {
        const { getByTestId } = render(<ScoreBoard playerNumber={1} roundWinner={[1,2,1]}/>);
        const scoreboard = getByTestId('scoreboard');
        expect(scoreboard).toBeTruthy();
    });
});