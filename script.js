let input = document.getElementById('input');
let focus = document.getElementById('btn');
console.log(input);
console.log(btn);
focus.addEventListener('click', function() {
	input.focus();
});