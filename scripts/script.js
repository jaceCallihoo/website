// Page transitions ------------------------------------------------->

// State
const stateList = ['landing', 'projects', 'contact'];
var state = stateList[0];

// Set event listeners for nav buttons
window.addEventListener('load', () => {
  document.getElementById('navbar')
  .querySelectorAll('button')
  .forEach((item) => {
  	item.addEventListener('click', (event) => {
  		setPage(event.target.dataset.link);
  	});
  });
});

// Set event listeners for scroll wheel
document.addEventListener('wheel', scroll);
function scroll (e) {
  let pageIndex = stateList.indexOf(state);
	if (e.deltaY < 0) {        // on scroll up
		setPage(stateList[pageIndex - 1]);
	} else if (e.deltaY > 0) { // on scroll down
		setPage(stateList[pageIndex + 1]);
	}

  // timeout to stop page skipping
	document.removeEventListener('wheel', scroll);
	setTimeout(() => document.addEventListener('wheel', scroll), 150);
}

// Set event listeners for arrow keys
document.addEventListener('keydown', (e) => {
  let pageIndex = stateList.indexOf(state);
  if (e.keyCode === 39 || e.keyCode === 40) {
    setPage(stateList[pageIndex + 1]);
  } else if (e.keyCode === 37 || e.keyCode === 38) {
    setPage(stateList[pageIndex - 1]);
  }
});

// Set event listeners for touch
document.addEventListener('swiped-left', (e) => {
	setPage(stateList[stateList.indexOf(state) + 1]);
});

document.addEventListener('swiped-right', (e) => {
	setPage(stateList[stateList.indexOf(state) - 1]);
});

// Function to set page to a given target
function setPage(target) {

  // check for oob
  if (target === undefined) { return; }

	// Swap visibility from current to target
	document.getElementById(state).classList.add('invisible');
	document.getElementById(target).classList.remove('invisible');

	// Update highlighted nav button
	document.getElementById(state + 'Btn').classList.remove('active');
	document.getElementById(target + 'Btn').classList.add('active');

	// Change state
	state = target;
}

// Clipboard -------------------------------------------------------->

window.addEventListener('load', () => {
  document.getElementById('contact-email').addEventListener('click', (e) => {
  	navigator.clipboard.writeText("jacecallihoo@gmail.com").then(function() {
  		alert("jacecallihoo@gmail.com - Coppied to clipboard");
  	}, function() {
  		alert("Failed to coppy to clipboard");
  	});
  });
});
