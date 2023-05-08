var jsonData;
var user1;
var user2;
var user3;


const form = document.getElementById("form");

//Form Actions
form.addEventListener("submit", ev => {
	ev.preventDefault();

	const firstName = document.getElementById("firstName").value;
	const lastName = document.getElementById("lastName").value;
	const displayName = document.getElementById("displayName").value;
	const email = document.getElementById("email").value;
	const comments = document.getElementById("comments").value;

	user1 = user2;
	user2 = user3;
	user3 = {
		firstName: firstName,
		lastName: lastName,
		displayName: displayName,
		email: email,
		comment: comments,
		time: new Date()
	};

	updateHTML();

	form.reset();
});

//Default Comments
fetch('./userComments.json')
	.then(response => response.json())
	.then(data => {
		jsonData = data;

		user1 = jsonData[0];
		user2 = jsonData[1];
		user3 = jsonData[2];

		updateHTML();
	});

//Update the comment section
function updateHTML() {
	const mainBody = document.getElementById('commentsLeft');
	mainBody.innerHTML =
		`<h2>Comments Left by Users</h2>
    <div class="comment">
        <h3>Username</h3>
        <p>${user3.displayName}</p>
        <h3>Comment Left</h3>
        <p>${user3.comment}</p>
        <h3>Time Stamp</h3>
        <p>${user3.time}</p>
    </div>
    <div class="comment">
        <h3>Username</h3>
        <p>${user2.displayName}</p>
        <h3>Comment Left</h3>
        <p>${user2.comment}</p>
        <h3>Time Stamp</h3>
        <p>${user2.time}</p>
    </div>
    <div class="comment">
        <h3>Username</h3>
        <p>${user1.displayName}</p>
        <h3>Comment Left</h3>
        <p>${user1.comment}</p>
        <h3>Time Stamp</h3>
        <p>${user1.time}</p>
    </div>`
}