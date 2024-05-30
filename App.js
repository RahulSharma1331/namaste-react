// Lecture: 01

/*
Ques: Create below HTML structure using React.

<h1 id="heading"></h1>

const heading = React.createElement("h1", {id: "heading"}, "Hello World !!! Using React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

*/

/*
Ques: Create below HTML structure using React.

<div id="parent">
    <div id="child1">
        <h1 id="heading1">Hello1 !!!</h1>
        <h1 id="heading2">Hello2 !!!</h1>
    </div>
    <div id="child2">
        <h1 id="heading1">Hello1 !!!</h1>
        <h1 id="heading2">Hello2 !!!</h1>
    </div>
</div>

Note: In real applications, HTML structures are very complex & creating using React (as above) will be a complex task.
*/

//Lecture: 02

/*
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", { id: "heading1" }, "Hello1 !!!"),
        React.createElement("h1", { id: "heading2" }, "Hello2 !!!"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", { id: "heading1" }, "Hello1 !!!"),
        React.createElement("h1", { id: "heading2" }, "Hello2 !!!"),
    ]),
]);

//React.createElement creates an element but it's not same as HTML element, it's a normal JS object.
// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// render() method is responsible to convert the JS object into HTML element
root.render(parent);

*/

//Lecture: 03

/*
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id: "heading"}, "This is a h1 heading");

//TO AVOID CREATING HTML TAGS/ ELEMENTS USING "React.createElement", JSX COMES IN PICTURE !!!

//JSX is not HTML in JS, it is HTML like syntax, using which we can create HTML tags/ elements easily. Also, JSX is different & React is different.

//This is not pure JS, JS engines understand JS (es6 or es). But, JS engine still understands that's bcoz of bundler (parcel).
//JSX => transpiled before it reaches to JS engine. "parcel" uses "babel" to do it.
//JSX => React.createElement (babel does it) => React element or JS Object => render => HTML
const jsxHeading = <h1 id="heading">This is a h1 heading using JSX.</h1>;

//"jsxHeading" is also a JS object, same to "heading".
// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

*/

import React from "react";
import ReactDOM from "react-dom/client";

// FunctionalComponent: It's a normal JS function which returns JSX.

const FunctionalComponent = function() {
    return (
        <div is="container">
            <h1>This is a FunctionalComponent.</h1>
        </div>
    )
}

//We can call another component inside a component as well. 
//Using "{}" inside JSX, we can write any JS. In JSX, using "{}" is very safe, it sanities the api response & saves from misc attacks.
//We can add React elements in a components.

const data = 1000;

const header = React.createElement("h2", {id: "head"}, "This is a h2 header.");

const FunctionalComponent2 = function() {
    return (
        <div is="container">
            <FunctionalComponent />
            {FunctionalComponent()}
            {data}
            {header}
            <h1>This is FunctionalComponent2.</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunctionalComponent2 />);