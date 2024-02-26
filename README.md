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

# React works
    - Reconciliation algorithm (also known as React Fibre)
    - React Fibre came in React v16

# Virtual DOM
    - Not actual DOM (This is the react element === normal JS Object)
    - Representation of actual DOM
