// List of elements with their attributes and expected answers
const elements = [
    { tag: "button", attribute: "block-inline-button", answer: "Inline" },
    { tag: "div", attribute: "block-inline-div", answer: "Block" },
    { tag: "span", attribute: "block-inline-span", answer: "Inline" },
    { tag: "p", attribute: "block-inline-p", answer: "Block" },
    { tag: "input", attribute: "block-inline-input", answer: "Inline" },
    { tag: "cite", attribute: "block-inline-cite", answer: "Inline" },
    { tag: "code", attribute: "block-inline-code", answer: "Inline" },
    { tag: "h1", attribute: "block-inline-h1", answer: "Block" },
    { tag: "sup", attribute: "block-inline-sup", answer: "Inline" },
    { tag: "sub", attribute: "block-inline-sub", answer: "Inline" },
];

// Reference to the parent div where all elements will be rendered
const app = document.getElementById("app");

// Function to create and render elements
elements.forEach(({ tag, attribute, answer }) => {
    // Create a container for the elements and answer
    const container = document.createElement("div");
    container.className = "output";

    // Create the first element
    const element1 = document.createElement(tag);
    element1.setAttribute("data-ns-test", attribute);
    element1.textContent = "Test1";

    // Create the second element
    const element2 = document.createElement(tag);
    element2.setAttribute("data-ns-test", attribute);
    element2.textContent = "Test2";

    // Append both elements to the container
    container.appendChild(element1);
    container.appendChild(element2);

    // Add the answer as text
    const answerText = document.createTextNode(` Answer: ${answer}`);
    container.appendChild(answerText);

    // Append the container to the parent div
    app.appendChild(container);
});
