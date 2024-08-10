// Function to perform the activity selection
function activitySelection(activities) {
    // Sort activities based on their end times
    activities.sort((a, b) => a.end - b.end);

    // The list to store the selected activities
    const selectedActivities = [];

    // Select the first activity
    let lastSelected = activities[0];
    selectedActivities.push(lastSelected);

    // Iterate through the activities
    for (let i = 1; i < activities.length; i++) {
        // If the start time of the current activity is greater than or equal to the end time of the last selected activity
        if (activities[i].start >= lastSelected.end) {
            selectedActivities.push(activities[i]);
            lastSelected = activities[i];
        }
    }

    return selectedActivities;
}

// Example usage
const activities = [
    { start: 1, end: 2 },
    { start: 3, end: 4 },
    { start: 0, end: 6 },
    { start: 5, end: 7 },
    { start: 8, end: 9 },
    { start: 5, end: 9 }
];

const selected = activitySelection(activities);
console.log("Selected activities:", selected);
