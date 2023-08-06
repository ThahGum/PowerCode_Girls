function openTab(tabName) {
    const tabs = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';

    const activeTabs = document.getElementsByClassName('tab');
    for (let i = 0; i < activeTabs.length; i++) {
        activeTabs[i].classList.remove('active');
    }
    document.querySelector('.tab[onclick="openTab(\'' + tabName + '\')"]').classList.add('active');
}

function redirectToAnalysis() {
    alert("Redirecting to Analysis Page");
    window.location.href = "analysis.html";
    // You can add any additional logic here if needed.
}

document.addEventListener("DOMContentLoaded", function () {
    // ... (existing Chart.js scripts) ...

    // Calculate the overall bias score based on mock questions
    function calculateBiasScore() {
        // Replace with your own logic to calculate the bias score based on the mock questions
        // For example, you can assign points to each answer and calculate the total score.
        // A higher score indicates bias, while a lower score indicates less bias.
        const biasScore = 60; // Mock value, replace with your actual calculation.

        return biasScore;
    }

    // Display thumbs up or thumbs down emoji based on the bias score
    function displayResultEmoji(biasScore) {
        const resultEmoji = document.getElementById("resultEmoji");

        if (biasScore <= 50) {
            resultEmoji.innerHTML = "👍"; // Thumbs up emoji for unbiased
        } else {
            resultEmoji.innerHTML = "👎"; // Thumbs down emoji for biased
        }
    }

    // Get the bias score and display the result emoji on page load
    const biasScore = calculateBiasScore();
    displayResultEmoji(biasScore);
});

document.addEventListener("DOMContentLoaded", function () {
    // ... (existing Chart.js scripts) ...
});
// ... (existing Chart.js scripts) ...

function generateReview() {
    const resultEmoji = document.getElementById("resultEmoji");
    const companyReview = document.getElementById("companyReview");

    // Hide the thumbs up/down emoji and display the company review
    resultEmoji.style.display = "none";
    companyReview.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
    // ... (existing Chart.js scripts) ...

    // Calculate the overall bias score based on mock questions
    function calculateBiasScore() {
        // ... (existing code for calculating bias score) ...
    }

    // Display thumbs up or thumbs down emoji based on the bias score
    function displayResultEmoji(biasScore) {
        // ... (existing code for displaying emoji) ...
    }

    // Get the bias score and display the result emoji on page load
    const biasScore = calculateBiasScore();
    displayResultEmoji(biasScore);
});

document.addEventListener("DOMContentLoaded", function () {
    // ... (existing Chart.js scripts) ...
});
