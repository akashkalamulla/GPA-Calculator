function calculateGPA() {
  // Get input values
  const grades = [];
  const credits = [4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 4, 5]; // Corresponding credits for each subject

  for (let i = 1; i <= 14; i++) {
    const grade = parseFloat(document.getElementById(`subject${i}`).value);
    if (!isNaN(grade)) {
      grades.push(grade);
    } else {
      alert("Please enter valid grades for all subjects.");
      return;
    }
  }

  // Calculate GPA
  const totalCredits = credits.reduce((acc, credit) => acc + credit, 0);
  const weightedSum = grades.reduce(
    (acc, grade, index) => acc + grade * credits[index],
    0
  );
  const gpa = (weightedSum / totalCredits).toFixed(2);

  // Display the result
  document.getElementById(
    "result"
  ).innerHTML = `<p>Your GPA is: <strong>${gpa}</strong></p>`;
}
