import {render} from "@testing-library/react";
import GameBoard from "./GameBoard";

describe("GameBoard Component", () => {
    it("Rendered GameBoard", () => {
        const { getByTestId } = render(<GameBoard />);
        const gameBoard = getByTestId('gameBoard');
        expect(gameBoard).toBeTruthy();
    });
});