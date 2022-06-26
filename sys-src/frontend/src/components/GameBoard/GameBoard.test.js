import {render, fireEvent} from "@testing-library/react";
import GameBoard from "./GameBoard";

describe("GameBoard Component", () => {
    it("Rendered GameBoard", () => {
        const { getByTestId } = render(<GameBoard />);
        const gameBoard = getByTestId('gameBoard');
        expect(gameBoard).toBeTruthy();
    });

    it("Rendered pre-selected Image/Text", () => {
        const handleSelection = (selection) => {
        }
        const { getByTestId, getAllByText } = render(<GameBoard value="Stein" main={true} gameState="test" onSelectionChange={handleSelection}/>);
        const gameBoard = getByTestId('gameBoard');

        expect(getAllByText('rock.svg')).toBeTruthy();
        expect(getAllByText('Stein')).toBeTruthy();
    });
});