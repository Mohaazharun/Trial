document.addEventListener("DOMContentLoaded", function () {
    let name = prompt("Enter your name");
    let admissionNumber = prompt("Enter your admission number");
    let course = prompt("Enter your course");
    let year = prompt("Enter the year");
    let semester = prompt("Enter the semester");

    displayInfo(name, admissionNumber, course, year, semester);
});

function displayInfo(name, admissionNumber, course, year, semester) {
    const container = document.querySelector(".container");
    container.innerHTML = `
        <h1>User Information</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Admission Number:</strong> ${admissionNumber}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Year:</strong> ${year}</p>
        <p><strong>Semester:</strong> ${semester}</p>
    `;
}
