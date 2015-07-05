// Program to determine if my son Vinny can have privileges; it will be 
var grades = prompt("Enter Vinny's currrent grade percent, rounded to the nearest percentage point.");
var attitude = prompt("Enter Vinny's attitude on a scale of 1 (bad) to 5 (good).");
var chores = prompt("Enter Vinny's performance of chores on a scale of 1 (least helpful) to 5 (most helpful)");

if (chores >= 4 && attitude >= 4 && grades >= 88) {
    alert("Good job on everything. You may go to your friend's house.");
}
else {
    alert("You must a have at least a 4 on attitude and chores and at least 88 percent on grades. You are deficient in one or more areas so you can't go.")
}