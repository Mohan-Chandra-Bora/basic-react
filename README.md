# This is basic of React from scratch 🍿


# Parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching Faster Builds
- Image Optimization
- Minification of files for prod builds
- Bundling
- compress files
- Consistent Hasing
- Code Splitting
- Differential Bundling - support older version of browsers
- Diagnostics
- Error Handling
- Https
- Tree shaking - remove unused code
- prod deployment - npx parcel build index.html (delete main:"app.js" from package.json )


## Food Ordering App layout
Header
    - Logo
    - Nav Items
Body
    - Search
    - RestaurantContainer
        - RestaurantCard
            - Img
            - Name of Restaurant, Start Rating, Cusines, Delivery Time
Footer
    - Copyrigts
    - Address
    - Contact
    - Links

# React Hooks
    (Normal JS utility functions)
    - useState() - used to generate state variables
    - useEffect() - it takes two arguments 
        - callback function
        - dependency array
        - called post the Component is rendered
        - Page Loads -> Renders Skeleton -> API Call -> Renders the full page (useEffect can be useful as it can be called post componenet render)
        - When deoendency array is not present, useEffect is called after every render
        - When empty dependency array = [] => useEffect called only during intial render
        - If dependency array is having value of lets say the useState variable = [btnName] => useEffect will render when btnName useState changes

# Best Practices for Hooks
    - Never create useState() outside of component => useState is used to create local state variables inside component
    - Always create state variables at the top of the component
    - Never create useState() inside if else => this can create inconsistencies 
    - Never create useState() inside for loop => this can create inconsistencies 
    - Never create useState() inside a function => this can create inconsistencies 

# React works
    - Reconciliation algorithm (also known as React Fibre)
    - React Fibre came in React v16

# Virtual DOM
    - Not actual DOM (This is the react element === normal JS Object)
    - Representation of actual DOM

# 2 types of routing
    - Client Side Routing
    - Server Side Routing

# React Life Cycle Management Diagram
    - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# componentDidMount is used for API calls in Class based component.
    - This is not equal to useEffet in functional components.

# componentWillUnmount equivalent in functional component
    - /**
    *   useEffect(()=>{
        <!-- API Call and other things -->
        return () = {
        <!--This is where we cleanup anything that needs to go away during un-mount  -->
        }
    })
    */

# (Data related - Data is the new Oil) Higher-Order component is component that takes a component and returns a new component - it is also a pure function, meaning it doesn't modify the original component

# (Data related - Data is the new Oil) Controlled and Uncontrolled components
    - When a component (RestaurantCategory for its items accordion to open only one item and close when another item is opened) is controlled by another component (RestaurantMenu by passing the showItem state), then it is called Controlled component
    - Restaurant Menu is uncontrolled component

# (Data related - Data is the new Oil) Lifting the state up
    - This is when we pass the state from parent (RestaurantMenu) to child (RestaurantCategory)
    - And then, the state is manipulated from the child back to parent

# (Data related - Data is the new Oil)  Props drilling
    - React has one way data flow (top to bottom)
    - Pass data from a parent to a grand child by using the intermidiate parents of the child
    - This is not a nice way of handing the use-case, think about scenarios where there are ~7/8 parent child depth
    - Soultion is to use React Context

# (Data related - Data is the new Oil) React Context
    - For class based component, there are no Hooks, so use `<UserContext.Consumer>{()=> callback to use the context data} </UserContext.Consumer>` (check AboutUs.js)
    - for Function based components, useContext Hooks is used (check Header.js)
    - to generate the context, createContext is provided by React (check UserContext.js)
    - To update the context data, example, we want to update the loggedInUser post authentication, we can wrap the component where we want to provide/update the user.

    - Example, if we wrap the complete App like below, it will have the loggedInUser updated everywhere
        <div className="app">
            <UserContext.Provider value={loggedInUser: "useEffect that stores the useState post authentication"}>
                <Header />
                <Outlet />
            </UserContext.Provider>
        </div>

    -Example, if we wrap the only Header like below, it will have the loggedInUser updated for Header and rest will have Default user
        <div className="app">
            <UserContext.Provider value={loggedInUser: "useEffect that stores the useState post authentication"}>
                <Header />
            </UserContext.Provider>
            <Outlet />
        </div>
    
    - Example
        // Defautl User
        <UserContext.Provider value={{loggedInUser: userName}}>
            {/* Mohan Bora */}
        <div className='App'> 
            <UserContext.Provider value={{loggedInUser: "Another User"}}>
                {/* Another User */}
                <Header />
            </UserContext.Provider>   
            <Outlet />        
        </div>
        </UserContext.Provider>

    - The lazy loaded files will also get the updated data in React Context if we try to change it


# Redux (Let's build our store)
    - Redux should only be used for larege scale applications
    - Most of the usecases can be managed using UseContext
    - Redux and React are two separate libraries
    - Redux is not the only library to manage states. Example -Zustand
    - Redux is used manage the sate of the application
    - Another advantage is that it makes the applicaiton easier to debug (Redux chrome extensions)


# Redux Architecture (Let's build our store)
    - Redux Toolkit (modern Redux library) store is kind of a big Object store kept at a global central place
    - Any component can access from and to the store
    - Redux can use only a single object to store all the application data. Although it is fine to have a single object to store everything, it can become clumsy; To mitigate this, Redux uses SLICES
    - What benifits can Slices bring
        - Logical partitions are slices - Example cart slice, User Slice, etc
        - We cannot write/add/modify data directly to the Cart slice from the functional component (in react)
            - When we click on the ADD button, it will DISPATCH an ACTION
            - And the it calls a FUNCTION (Also known as REDUCER)
            - And this FUNCTION  MODIFIES the SLICE
            - Function component (event) => Dispatches and action => Reducer function is called => Modifies the Slice in Redux store
        - How to READ the data from Redux store
            - We need to use SELECTOR to read the data from Slice
            - This is also known as SUBSCRIBING to the store
            - The functional component in React is subsribed to the store. So when the Slice updates, the functional component updates automatically
    - Performance tip - in useSelector (to read data from store) - ONLY subscribe the needed data
    - In old Redux, the State was not recommended to be MUTATED => it prescribed to create a tempState and return that
    - But in new Redux (Redux ToolKit) the state only gets mutated, returning is not mandatory
    - React manages the state management that was done the old way now internally
    - Behind the seen, Redux uses Immer library to manage the immutable states
    - The state can be returned from the reducers in slice and Redux will manage the state using immer
        -  clearCart: (state) => {
            state.items.length = 0;
            }
    - Or a new return can be used and RTK manages the return state
        -  clearCart: (state) => {
            return {items: []};
            }

    - RTK query

# Testing the application
    - Install React Testing Library
    - Install Jest
    - Install Babel dependencies (required when using Jest with Babel)
    - Configure Babel (suggested by Babel for Jest)
    - Parcel also uses Babel internally - So there will be conflicts when we are using Babel configuration - use .parcelrc to use the .babel.config.jsnpm 
    - Jest configuration unsing npx jest --init
    - Install jest-environment-jsdom (post jest 28 jsdom needs to be added separately)
    - Install @babel/preset-react - to make JSX work in test cases
    - Include @babel/preset-react  in .babel.config.js
    - Install @testing-library/jest-dom