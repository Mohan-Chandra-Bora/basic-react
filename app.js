import React  from 'react';
import ReactDOM from 'react-dom/client';


const Title = () => (
    <h1 className="head">
        React using JSX
    </h1>
)
const HeadingComponent = () => (
    <div id="continer">
        {Title()}
        <Title></Title>
        <Title />
        <h1>From a Functional Component 🍢</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);