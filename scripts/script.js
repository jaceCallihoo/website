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

	// Swap visibility from current to target
	document.getElementById(state).classList.add('invisible');
	document.getElementById(target).classList.remove('invisible');

	// Swap highlighted nav button
	console.log(state + 'Btn')
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

var Email = { send: function(a)
	{
		return new Promise(function(n, e)
		{
			a.nocache = Math.floor(1e6 *Math.random() + 1), a.Action = "Send";
			var t = JSON.stringify(a);
			Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e)
			{
				n(e) }) })
	}, ajaxPost: function(e, n, t)
	{
		var a = Email.createCORSRequest("POST", e);
		a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function()
		{
			var e = a.responseText;
			null != t && t(e)
		}, a.send(n)
	}, ajax: function(e, n)
	{
		var t = Email.createCORSRequest("GET", e);
		t.onload = function()
		{
			var e = t.responseText;
			null != n && n(e)
		}, t.send()
	}, createCORSRequest: function(e, n)
	{
		var t = new XMLHttpRequest;
		return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t
	}
};

let form = document.getElementById('contact-form');
let email = document.getElementById('contact-email');

form.addEventListener('submit', (e) => {
	e.preventDefault();
    console.log("submit");

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      this.responseText = "a";
	      document.getElementById("demo").innerHTML = this.responseText;
	  	}
	};
	xhttp.open("POST", "demo_post.asp", true);
	xhttp.send();
});

// expand on this function with a better solutino that alerts
email.addEventListener('click', (e) => {
	navigator.clipboard.writeText("jacecallihoo@gmail.com").then(function() {
		alert("coppied to clipboard");
	}, function() {
		alert("failed to coppy to clipboard");
	});
});
