import { render, screen } from "@testing-library/react";
import { RestaurantCard, withAggregatedDiscountInfo } from "../RestaurantCard";
import MOCK_DATA from '../mocks/RestaurantCardMock.json';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';


test("should render RestaurantCard component with props Data", ()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const restaurntName = screen.getByText("Chaayos Chai+Snacks=Relax");

    expect(restaurntName).toBeInTheDocument();

});

test("should render RestaurantCard component with Discount label", ()=>{
   const Hof = withAggregatedDiscountInfo(RestaurantCard);
   render(<Hof resData={MOCK_DATA}/>);
   const discountLabel = screen.getByText("50% OFF UPTO ₹100");
   expect(discountLabel).toBeInTheDocument();
});