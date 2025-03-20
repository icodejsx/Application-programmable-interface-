
	function iCadPay() {
	const form = document.getElementById("payment-form");
	const handler = IcadPay.setup({
		key: 'test_YzA1MmNmYzE0OTc1Y2QyM2ViNWUwNTIxOGMzZjA2MjI5N2M4ZDU3YmY5ZDg1ZmU1OWIwNWE1NDU0YjkzYTZkOQ', //this is a demo key.
		email: document.getElementById("email").value, // customer email 
		amount: document.getElementById("amount").value,  // amount to be processed
		currency: "NGN", // currency
		first_name: document.getElementById("firstName").value, 
		last_name: document.getElementById("lastName").value,
		phone_number: document.getElementById("phone").value, // customer's phone number (optional)
		customerId: document.getElementById("email").value,
		ref: ` ${Math.floor((Math.random() * 1000000000) + 1)}`, // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
		narration: document.getElementById("narration").value,
		callback_url: 'https://icadpay.com', // specified redirect URL (optional)
		meta: { // optional parameters
			consumer_id: 'data.customer_id',
			item_ref: 'payment.res',
		    },
			callback: (response) => {
			console.log(response);
			},
		onSuccess: (response) => {
			console.log(response);
			// alert(`success. transaction ref is ${response.paymentReference}`);
			// alert('Success');
		},
		onError: (response) => {
			console.log(response);
			alert('Error');
		},
		onClose: () => {
			console.log('window closed');
			// alert('window closed');
		}
	});
	}
