document.addEventListener("DOMContentLoaded", function () {
    // Simulate loading upcoming events and featured courses from an API or server
    setTimeout(function () {
        const eventsList = document.getElementById("events-list");
        const coursesList = document.getElementById("courses-list");

        // Replace with real event and course data
        const upcomingEvents = ["Event 1", "Event 2", "Event 3"];
        const featuredCourses = ["Course 1", "Course 2", "Course 3"];

        upcomingEvents.forEach(event => {
            const li = document.createElement("li");
            li.textContent = event;
            eventsList.appendChild(li);
        });

        featuredCourses.forEach(course => {
            const li = document.createElement("li");
            li.textContent = course;
            coursesList.appendChild(li);
        });
    }, 1000); // Simulate a 1-second loading delay
});
document.addEventListener("DOMContentLoaded", function () {
    const coursesList = document.getElementById("courses-list");

    // Simulate loading course data from an API or server
    setTimeout(function () {
        const availableCourses = ["Course 1: Introduction to Music Theory", "Course 2: Music History", "Course 3: Advanced Composition"];
        
        // Clear the "Loading..." message
        coursesList.innerHTML = '';

        availableCourses.forEach(course => {
            const li = document.createElement("li");
            li.textContent = course;
            coursesList.appendChild(li);
        });
    }, 1000); // Simulate a 1-second loading delay
});
const events = document.querySelectorAll('.event');
events.forEach(event => {
    event.addEventListener('click', () => {
        alert(`You clicked on the event: ${event.querySelector('h3').textContent}`);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // You can add JavaScript validation here.

        // For this example, we're just showing an alert.
        alert("Thank you for your message! We'll get back to you soon.");
        form.reset();
    });
});
