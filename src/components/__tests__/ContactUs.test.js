import {render, screen} from '@testing-library/react';
import { ContactUs } from '../ContactUs';
import "@testing-library/jest-dom";


describe("ContctUs page test cases", ()=>{
    test("should load contact us component", ()=> {
        render(<ContactUs/>);
    
        const heading =  screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    
    });
    
    test("should load submit button inside contact us component", ()=>{
        render(<ContactUs/>);
        const submitButton = screen.getByText("Submit");
    
        expect(submitButton).toBeInTheDocument();
    });
    
    test("should load 2 input boxes on the contact us component", ()=>{
        render(<ContactUs/>);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        // console.log(inputBoxes); // returns JSX element/React Fibre
    
        expect(inputBoxes.length).toBe(2);
    });
});
