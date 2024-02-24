import React  from 'react';
import ReactDOM from 'react-dom/client';

// JSX (transpiled before it reached JS Engine) - Parcel - Babel

// JSX => React.createElement => React Element - JS Object => HTMLElement(render)
const jsxHeading = (
    <h1 className="heading" tabIndex="5">
        This is rendered using JSX 🍫
    </h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);