import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from '../mocks/RestaurantListMock.json';
import Body from "../Body";
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom';

global.fetch =  jest.fn(async ()=>{
    return  ({
        json: async()=>{
            return MOCK_DATA;
        }
    })
})

test("should Search Res List for Burger text input", async()=>{
   await act(async ()=> render(<BrowserRouter>
    <Body/>
   </BrowserRouter>) ) ;

    const cardsBeforeSearch =  screen.getAllByTestId('resCard');

    expect(cardsBeforeSearch.length).toBe(20);
    const searchButton = screen.getByRole('button', {name: 'Search'});

   const searchInput =  screen.getByTestId('searchInput');

   fireEvent.change(searchInput, {target: {value: 'burger'}});

   fireEvent.click(searchButton);

   const cards = screen.getAllByTestId("resCard");

   expect(cards.length).toBe(1);
});


test("should should filter Top Rated Restaurants", async()=>{
    await act(async ()=> render(<BrowserRouter>
     <Body/>
    </BrowserRouter>) ) ;
 
     const cardsBeforeSearch =  screen.getAllByTestId('resCard');
 
     expect(cardsBeforeSearch.length).toBe(20);

     const topRatedButton = screen.getByRole('button', {name: 'Top Rated Restaurants'});
 
    fireEvent.click(topRatedButton);
 
    const cardsAfterClick = screen.getAllByTestId("resCard");
 
    expect(cardsAfterClick.length).toBe(6);
 });