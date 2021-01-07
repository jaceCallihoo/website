// Page transitions ------------------------------------------------->

// State
const stateList = ['landing', 'about', 'projects', 'blog', 'contact'];
var state = stateList[0];

// Set event listeners for nav buttons
document.getElementById('navbar')
.querySelectorAll('button')
.forEach((item) => {
	item.addEventListener('click', (event) => {
		setPage(event.target.dataset.link);
	});
});

// Set event listeners for scroll wheel
document.addEventListener('wheel', (e) => {
	let pageIndex = stateList.indexOf(state);
	if (e.deltaY < 0) {
		if (pageIndex > 0) {
			setPage(stateList[pageIndex - 1]);
		}
	} else if (e.deltaY > 0) {
		if (pageIndex < stateList.length - 1) {
			setPage(stateList[pageIndex + 1]);
		}
	}
});

// Set event listeners for touch
document.addEventListener('swiped-left', (e) => {
	console.log("left");
	let pageIndex = stateList.indexOf(state);
	if (pageIndex < stateList.length - 1) {
		setPage(stateList[pageIndex + 1]);
	}
});

document.addEventListener('swiped-right', (e) => {
	console.log("right");
	let pageIndex = stateList.indexOf(state);
	if (pageIndex > 0) {
		setPage(stateList[pageIndex - 1]);
	}
});

// Function to set page to a given target
function setPage(target) {
	document.getElementById(state).classList.add('invisible');
	document.getElementById(target).classList.remove('invisible');
	state = target;
}

// Form stuff ------------------------------------------------------->
let form = document.getElementById('contact-form');

console.log(form);

form.addEventListener('submit',(event) => {
    console.log("submit");
});
