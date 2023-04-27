//Modern Mini Gallery
fetch('./modernMini.json')
	.then(response => response.json())
	.then(data => {
		const jsonData = data;

		const mainBody = document.getElementById('spotlight');
		const rand = Math.floor(Math.random() * (14 - 0 + 1));

		const data2 = jsonData[rand];

		mainBody.innerHTML =
			`<h2>Mini Spotlight: ${data2.title}</h2>
    <div>
    <img src="${atob(data2.image)}" alt"${data2.imageAlt}">
    <p>${data2.description}</p>
    </div>`;
	});