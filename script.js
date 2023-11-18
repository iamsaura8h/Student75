function calculateAttendance() {
    var totalDays = parseFloat(document.getElementById("totalDays").value);
    var daysAttended = parseFloat(document.getElementById("daysAttended").value);

    if (!isNaN(totalDays) && !isNaN(daysAttended)) {
        var currentAttendance = (daysAttended / totalDays) * 100;
        var targetPercentage = 75;

        if (currentAttendance > 76) {
            var remainingLeaves = calculateRemainingLeaves(currentAttendance, totalDays, targetPercentage);
            document.getElementById("result").innerText = `You can take up to ${remainingLeaves} leaves and still have attendance more than 75%.`;
        } else {
            var additionalDays = calculateAdditionalDays(daysAttended, totalDays, targetPercentage);

            if (currentAttendance > 74.5 && currentAttendance <= 75.5) {
                document.getElementById("result").innerText = "Your current attendance is already at or below 75%. No additional days or leaves needed.";
            } else {
                document.getElementById("result").innerText = `Your current attendance percentage is: ${currentAttendance.toFixed(2)}%\n` +
                    `You need to attend ${additionalDays} more days to achieve a ${targetPercentage}% attendance rate.`;
            }
        }
    } else {
        document.getElementById("result").innerText = "Please enter valid numeric values.";
    }
}

function calculateAdditionalDays(currentAttended, totalDays, targetPercentage) {
    var x = 0;
    while ((currentAttended + x) / (totalDays + x) * 100 < targetPercentage) {
        x += 1;
    }
    return x;
}

function calculateRemainingLeaves(currentAttendance, totalDays, targetPercentage) {
    var remainingLeaves = 0;
    while ((currentAttendance - (remainingLeaves / totalDays) * 100) > targetPercentage) {
        remainingLeaves += 1;
    }
    return remainingLeaves;
}
