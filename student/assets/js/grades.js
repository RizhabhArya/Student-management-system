// assets/js/grades.js
document.addEventListener('DOMContentLoaded', function() {
    // Example data (you can fetch this from a server)
    const grades = [
        { course: 'Math 101', grade: 'A', credits: 3, comments: 'Excellent performance!' },
        { course: 'Physics 201', grade: 'B+', credits: 4, comments: 'Good understanding, needs improvement in practicals.' },
        { course: 'Computer Science 101', grade: 'A-', credits: 3, comments: 'Great progress on projects.' }
    ];

    // Get the table body element
    const gradesTable = document.getElementById('grades-table');

    // Add rows dynamically
    grades.forEach(function(grade) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="border px-4 py-2">${grade.course}</td>
            <td class="border px-4 py-2">${grade.grade}</td>
            <td class="border px-4 py-2">${grade.credits}</td>
            <td class="border px-4 py-2">${grade.comments}</td>
        `;
        gradesTable.appendChild(row);
    });
});
