document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("p_6NLiMqrYWZDq8ln"); // Initialize EmailJS

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(this);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            number: formData.get("number"),
            message: formData.get("message") // Ensure message is captured
        };

        console.log(data); // Debug: Log the data object

        emailjs.send("service_ang21yk", "template_51co73b", data)
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                    alert("Message sent successfully!");
                    document.getElementById("contact-form").reset();
                },
                function (error) {
                    console.log("FAILED...", error);
                    alert("Failed to send message. Please try again.");
                }
            );
    });

});


