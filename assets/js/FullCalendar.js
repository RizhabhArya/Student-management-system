

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the calendar
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',  // Initial view: month grid
        events: [
            { 
                title: 'Math 101',
                start: '2024-12-18T10:00:00',
                description: 'Class on calculus'
            },
            { 
                title: 'Physics 201',
                start: '2024-12-18T12:00:00',
                description: 'Class on mechanics'
            }
        ]
    });
    calendar.render(); // Render the calendar
});