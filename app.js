import React  from 'react';
import ReactDOM from 'react-dom/client';


const Title = () => (
    <h1 id="title">This is a title 🍡</h1>
)


// React Component
// Class Based Componenet - OLD
// Funciton Component - NEW (variable should start with capital letter)

const HeadingComponent = () => (
    <div id="continer">
        <Title />
        <h1>From a Functional Component 🍢</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);