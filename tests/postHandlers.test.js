
// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
		"products": [
			{
				"id": 5,
				"quantity": 1
			},
			{
				"id": 4,
				"quantity": 5
			}
		]
}

test('Should check availability of goods in "Big World" warehouse', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody).toEqual({"Big World": {"Fruit Power Juice - Litchi": false, "Sprite Soft Drink": false}, "Everything You Need": {"Fruit Power Juice - Litchi": false, "Sprite Soft Drink": true}, "Food City": {"Fruit Power Juice - Litchi": true, "Sprite Soft Drink": true}, "Fresh Food": {"Fruit Power Juice - Litchi": true, "Sprite Soft Drink": true}});
});

test('Should return status code 200', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});