import {render} from "@testing-library/react";
import Login from "./Login";

describe("Login Component", () => {
    it("Rendered Login", () => {
        const { getByTestId } = render(<Login />);
        const login = getByTestId('login');
        expect(login).toBeTruthy();
    });
});