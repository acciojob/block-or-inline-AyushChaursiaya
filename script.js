//your code here
const elements = [
	{tag : "button", attribute : "block-inline-button", answer : "Inline"},
	{tag : "div", attribute : "block-inline-div", answer : "Block"},	
	{tag : "span", attribute : "block-inline-span", answer : "Inline"},	
	{tag : "p", attribute : "block-inline-p", answer : "Block"},	
	{tag : "input", attribute : "block-inline-input", answer : "Inline"},	
	{tag : "cite", attribute : "block-inline-cite", answer : "Inline"},	
	{tag : "code", attribute : "block-inline-code", answer : "Inline"},	
	{tag : "h1", attribute : "	block-inline-h1", answer : "Block"},	
	{tag : "sup", attribute : "block-inline-sup", answer : "Inline"},	
	{tag : "sub", attribute : "block-inline-sub", answer : "Inline"},	
];

const app = document.getElementById('app');

elements.forEach(({tag, attribute, name}) => {
	const container = document.createElement('div');
	container.className = 'output';

	const element1 = document.getElementById(tag);
	element1.setAttribute('data-ns-test', attribute);
	element1.textContent = 'test1';

	const element2 = document.getElementById(tag);
	element2.setAttribute('data-ns-test', attribute);
	element2.textContent = 'test2';

	container.appendChild(element1);
	container.appendChild(element2);
	
	const answerText = document.createTextNode(`Answer : ${answer}`);

	container.appendChild(answerText);
	app.appendChild(container);
})