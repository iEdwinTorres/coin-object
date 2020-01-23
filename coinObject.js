const Coin = {
	state: 0,
	flip: function() {
		this.state = Math.floor(Math.random() * 2);
	},

	toString: function() {
		if (this.state == 0) {
			return "Heads";
		} else {
			return "Tails";
		}
	},

	toHTML: function() {
		const image = document.createElement("img");
		if (this.state == 0) {
			image.setAttribute("src", "resources/Heads.png");
		} else {
			image.setAttribute("src", "resources/Tails.png");
		}
		return image;
	}
};

function display20Flips() {
	const results = [];
	for (let i = 0; i < 20; i++) {
		Coin.flip();
		newElement = document.createElement("div");
		newElement.textContent = Coin.toString();
		document.body.appendChild(newElement);
		results.push(Coin.state);
	}
	return results;
	// 4. One point: Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
}

function display20Images() {
	const results = [];
	for (let i = 0; i < 20; i++) {
		Coin.flip();
		if (Coin.state == 0) {
			var coinSide = Coin.toHTML();
			coinSide.src = "resources/Heads.png";
			document.body.appendChild(coinSide);
			results.push(Coin.state);
		} else {
			var coinSide = Coin.toHTML();
			coinSide.src = "resources/Tails.png";
			document.body.appendChild(coinSide);
			results.push(Coin.state);
		}
	}
	// 5. One point: Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
}

display20Flips();
display20Images();
