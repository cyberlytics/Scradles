import {render} from "@testing-library/react";
import LeaderboardElement from "./LeaderboardElement";

describe("LeaderboardElement Component", () => {
    it("Rendered LeaderboardElement", () => {
        const { getByTestId } = render(<LeaderboardElement />);
        const leaderboardElement = getByTestId('leaderboardElement');
        expect(leaderboardElement).toBeTruthy();
    });
});