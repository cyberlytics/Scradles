import {render} from "@testing-library/react";
import Leaderboard from "./Leaderboard";

describe("Leaderboard Component", () => {
    it("Rendered Leaderboard", () => {
        const { getByTestId } = render(<Leaderboard />);
        const leaderboard = getByTestId('leaderboard');
        expect(leaderboard).toBeTruthy();
    });
});