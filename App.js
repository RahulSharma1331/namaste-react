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

import React from "react";
import ReactDOM from "react-dom";

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

//TO AVOID CREATING HTML TAGS/ ELEMENTS USING "React.createElement", JSX COMES IN PICTURE !!!