const heading = React.createElement(
    "h1",
    { id: "heading", anotherAttribute: "abc" },
    "Hello World using React !"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);

root.render(heading);

/*
How to create nested HTML tags like
<div id="parent">
    <div id="child">
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
</div>


const parent = React.createElement(
    "div", 
    { id: "parent" }, 
    React.createElement(
        "div", 
        { id: "child" }, [
            React.createElement(
                "h1", 
                {}, 
                "I'm an h1 tag"
            ),
            React.createElement(
                "h2", 
                {}, 
                "I'm an h2 tag"
            )
        ]
    )
);

root.render(parent);
*/

/*
If we gonna create complex nested HTML tags like, then using "React.createElement()" will make our code looks ugly & hard to read.
<div id="parent">
    <div id="child">
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
</div>

const parent = React.createElement(
    "div", 
    { id: "parent" }, 
    [
        React.createElement(
            "div", 
            { id: "child" }, [
                React.createElement(
                    "h1", 
                    {}, 
                    "I'm an h1 tag"
                ),
                React.createElement(
                    "h2", 
                    {}, 
                    "I'm an h2 tag"
                )
            ]
        ),
        React.createElement(
            "div", 
            { id: "child2" }, [
                React.createElement(
                    "h1", 
                    {}, 
                    "I'm an h1 tag"
                ),
                React.createElement(
                    "h2", 
                    {}, 
                    "I'm an h2 tag"
                )
            ]
        )
    ]
);

root.render(parent);

To overcome that issue, JSX is introduced.
*/