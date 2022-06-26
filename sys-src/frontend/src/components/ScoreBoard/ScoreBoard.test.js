import {render} from "@testing-library/react";
import ScoreBoard from "./ScoreBoard";

describe("ScoreBoard Component", () => {
    it("Rendered Scoreboard", () => {
        const { getByTestId } = render(<ScoreBoard playerNumber={1} roundWinner={[]}/>);
        const scoreboard = getByTestId('scoreboard');
        expect(scoreboard).toBeTruthy();
    });

    it("Rendered pre-selected score", () => {
        const { getByTestId, getAllByText } = render(<ScoreBoard playerNumber={1} roundWinner={["p1", "p2", "draw"]}/>);
        const scoreboard = getByTestId('scoreboard');
        const scoreGroup = scoreboard.children[1];

        expect(scoreGroup.children[0].className.includes("score-win")).toBeTruthy();
        expect(scoreGroup.children[0].className.includes("score-loss")).toBeFalsy();
        expect(scoreGroup.children[0].className.includes("score-null")).toBeFalsy();

        expect(scoreGroup.children[1].className.includes("score-loss")).toBeTruthy();
        expect(scoreGroup.children[1].className.includes("score-win")).toBeFalsy();
        expect(scoreGroup.children[1].className.includes("score-null")).toBeFalsy();

        expect(scoreGroup.children[2].className.includes("score-null")).toBeTruthy();
        expect(scoreGroup.children[2].className.includes("score-win")).toBeFalsy();
        expect(scoreGroup.children[2].className.includes("score-loss")).toBeFalsy();
    });
});