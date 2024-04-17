import { render, screen, fireEvent } from '@testing-library/react';
import {Header} from '../Header';
import {RestaurantMenu} from '../RestaurantMenu';
import Cart from '../Cart';
import { Provider } from 'react-redux';
import appStore from "../../utils/appStore";
import '@testing-library/jest-dom';
import MOCK_DATA from '../mocks/RestaurantMenuMock.json';
import {act} from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';


global.fetch =  jest.fn(async ()=>{
    return  ({
        json: async()=>{
            return MOCK_DATA;
        }
    })
})

test("should load Restaurant Menu Component", async()=>{
    await act(async()=> render(
        <BrowserRouter>
             <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
        </BrowserRouter>
    ))

    const accordionHeader =  screen.getByText("Recommended (17)");
    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(17);

    const addBtn = screen.getAllByRole("button", {name: 'Add +'});

    fireEvent.click(addBtn[0]);
    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
    fireEvent.click(addBtn[1]);
    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(19);

    fireEvent.click(screen.getByRole("button", {name:"Clear Cart"}));

    expect(screen.getAllByTestId("foodItems").length).toBe(17);

    expect(screen.getByText("Cart is empty! Please add items to the cart!")).toBeInTheDocument();

});