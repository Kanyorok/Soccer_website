// Set the starting time in seconds (20 hours)
let countdownTime = 20 * 60 * 60;

// Function to update countdown every second
const updateCountdown = () => {
  // Calculate hours, minutes, and seconds
  const hours = Math.floor(countdownTime / 3600);
  const minutes = Math.floor((countdownTime % 3600) / 60);
  const seconds = countdownTime % 60;

  // Update the HTML elements with calculated values
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").innerText = String(seconds).padStart(
    2,
    "0"
  );

  // Decrement countdown time by 1 second
  countdownTime--;

  // Stop the countdown when time reaches zero
  if (countdownTime < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerText = "Countdown Ended";
  }
};

// Update countdown every 1 second
const countdownInterval = setInterval(updateCountdown, 1000);

// Toggle Mobile Menu
document.getElementById("hamburger-btn").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.style.display =
    menu.style.display === "none" || menu.style.display === ""
      ? "block"
      : "none";
});
