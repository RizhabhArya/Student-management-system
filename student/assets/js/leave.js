document.addEventListener("DOMContentLoaded", () => {
    // Handle the leave form submission (for students)
    const leaveForm = document.getElementById("leave-form");

    leaveForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get the form data
        const reason = document.getElementById("reason").value;
        const startDate = document.getElementById("start-date").value;
        const endDate = document.getElementById("end-date").value;
        const leaveType = document.getElementById("leave-type").value;

        // Simulate adding leave request (this can be replaced with an API call)
        const leaveRequest = {
            studentName: "John Doe",  // In a real scenario, you would get this dynamically
            reason,
            startDate,
            endDate,
            leaveType,
            status: "Pending"
        };

        // For now, we'll log the leave request
        console.log("Leave Request Submitted:", leaveRequest);

        // After submitting, we can display the leave request in the admin's table
        addLeaveRequestToTable(leaveRequest);

        // Reset the form
        leaveForm.reset();
    });

    // Add leave request to the admin's table (for demonstration)
    function addLeaveRequestToTable(leaveRequest) {
        const tableBody = document.getElementById("leave-requests");

        const row = document.createElement("tr");

        row.innerHTML = `
            <td class="border px-4 py-2">${leaveRequest.studentName}</td>
            <td class="border px-4 py-2">${leaveRequest.reason}</td>
            <td class="border px-4 py-2">${leaveRequest.startDate}</td>
            <td class="border px-4 py-2">${leaveRequest.endDate}</td>
            <td class="border px-4 py-2">${leaveRequest.leaveType}</td>
            <td class="border px-4 py-2">
                <button class="px-4 py-2 bg-green-500 text-white rounded-md">Approve</button>
                <button class="px-4 py-2 bg-red-500 text-white rounded-md">Reject</button>
            </td>
        `;

        tableBody.appendChild(row);

        // Attach click listeners for approve/reject buttons
        row.querySelector(".bg-green-500").addEventListener("click", () => approveLeave(leaveRequest));
        row.querySelector(".bg-red-500").addEventListener("click", () => rejectLeave(leaveRequest));
    }

    // Approve Leave Request (for admin)
    function approveLeave(leaveRequest) {
        leaveRequest.status = "Approved";
        alert(`Leave approved for ${leaveRequest.studentName}`);
    }

    // Reject Leave Request (for admin)
    function rejectLeave(leaveRequest) {
        leaveRequest.status = "Rejected";
        alert(`Leave rejected for ${leaveRequest.studentName}`);
    }
});
