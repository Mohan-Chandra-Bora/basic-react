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