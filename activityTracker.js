const myWeek = [
  { day: "Monday", activity: "Jogging", category: "physical", hoursSpent: 1, enjoyment: 7, timeOfDay: "morning" },
  { day: "Tuesday", activity: "Drawing", category: "creative", hoursSpent: 2, enjoyment: 9, timeOfDay: "evening" },
  { day: "Wednesday", activity: "Cooking", category: "creative", hoursSpent: 1.5, enjoyment: 8, timeOfDay: "afternoon" },
  { day: "Thursday", activity: "Gaming", category: "social", hoursSpent: 3, enjoyment: 6, timeOfDay: "evening" },
  { day: "Friday", activity: "Gym", category: "physical", hoursSpent: 1, enjoyment: 7, timeOfDay: "morning" },
  { day: "Saturday", activity: "Writing", category: "creative", hoursSpent: 2.5, enjoyment: 8, timeOfDay: "afternoon" },
  { day: "Sunday", activity: "Singing", category: "creative", hoursSpent: 2, enjoyment: 10, timeOfDay: "evening" }
];

// Predictions:
// Highest enjoyment: Painting
// Dominant category: creative
// Time of day patterns: evening activities tend to be longer and more enjoyable

function totalPhysicalHours(data) {
  return data
    .filter(entry => entry.category === "physical")
    .reduce((sum, entry) => sum + entry.hoursSpent, 0);
}

function averageEveningEnjoyment(data) {
  const evening = data.filter(entry => entry.timeOfDay === "evening");
  const totalEnjoyment = evening.reduce((sum, entry) => sum + entry.enjoyment, 0);
  return (totalEnjoyment / evening.length).toFixed(1);
}

function mostCommonCategory(data) {
  const counts = {};
  for (let entry of data) {
    counts[entry.category] = (counts[entry.category] || 0) + 1;
  }
  return Object.entries(counts).reduce((max, curr) => (curr[1] > max[1] ? curr : max))[0];
}

console.log("Total physical hours:", totalPhysicalHours(myWeek));
console.log("Avg evening enjoyment:", averageEveningEnjoyment(myWeek));
console.log("Most common category:", mostCommonCategory(myWeek));