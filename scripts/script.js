// Page transitions ------------------------------------------------->

// State
const stateList = ['landing', 'projects', 'contact'];
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
document.addEventListener('wheel', wheel);

function wheel(e) {
	let pageIndex = stateList.indexOf(state);
	if (e.deltaY < 0) {							// on scroll down
		if (pageIndex > 0) { 					// if target is in bounds
			setPage(stateList[pageIndex - 1]);
		}
	} else if (e.deltaY > 0) {					// on scroll down
		if (pageIndex < stateList.length - 1) {	// if target is in bounds
			setPage(stateList[pageIndex + 1]);
		}
	}

	document.removeEventListener('wheel', wheel);	// timeout
	setTimeout(() => document.addEventListener('wheel', wheel), 150);
}

// Set event listeners for arrow keys
document.addEventListener('keydown', key);

function key(e) {
  let pageIndex = stateList.indexOf(state);
  if (e.keyCode === 39 || e.keyCode === 40) {
    setPage(stateList[pageIndex + 1]);
  } else {
    setPage(stateList[pageIndex - 1]);
  }
}

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
  if (target === undefined) {
    return;
  }

	// Swap visibility from current to target
	document.getElementById(state).classList.add('invisible');
	document.getElementById(target).classList.remove('invisible');

	// Swap highlighted nav button
	// document.getElementById(state + 'Btn').classList.remove('active');
	// document.getElementById(target + 'Btn').classList.add('active');
	let navState = document.getElementById(state + 'Btn');
	if (navState) {
		navState.classList.remove('active')
		// navState.classList.add('inactive')
	}

	let navTarget = document.getElementById(target + 'Btn');
	if (navTarget) {
		navTarget.classList.add('active')
		// navTarget.classList.remove('inactive')
	}

	// Change state
	state = target;
}

// Form stuff ------------------------------------------------------->
// include("https://smtpjs.com/v3/smtp.js")

let form = document.getElementById('contact-form');
let email = document.getElementById('contact-email');

form.addEventListener('submit', (e) => {
	e.preventDefault();
    console.log("submit");



	// function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        // success(xhr.response, xhr.responseType);
		console.log("success");
      } else {
        // error(xhr.status, xhr.response, xhr.responseType);
		console.log("error");
      }
    };
    xhr.send(new FormData(form));
	  // }









});

// Clipboard -------------------------------------------------------->
// expand on this function with a better solutino that alerts
email.addEventListener('click', (e) => {
	navigator.clipboard.writeText("jacecallihoo@gmail.com").then(function() {
		alert("coppied to clipboard");
	}, function() {
		alert("failed to coppy to clipboard");
	});
});
