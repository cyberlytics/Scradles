import {render} from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
    it("Rendered App", () => {
        const { getByTestId } = render(<App />);
        const app = getByTestId('app');
        expect(app).toBeTruthy();
    });
});