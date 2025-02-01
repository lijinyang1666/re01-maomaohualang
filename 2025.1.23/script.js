document.addEventListener("DOMContentLoaded", function () {
  const praiseButtons = document.querySelectorAll(".praise-btn");

  praiseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const praiseCountSpan = button.querySelector(".praise-count");
      let count = parseInt(praiseCountSpan.textContent);
      praiseCountSpan.textContent = count + 1;
    });
  });

  // Add reset functionality
  const resetButton = document.createElement("button");
  resetButton.textContent = "Reset Praise Counts";
  resetButton.style.padding = "10px 20px";
  resetButton.style.margin = "20px auto";
  resetButton.style.display = "block";
  resetButton.style.backgroundColor = "#FF4081";
  resetButton.style.color = "white";
  resetButton.style.border = "none";
  resetButton.style.borderRadius = "5px";
  resetButton.style.cursor = "pointer";

  resetButton.addEventListener("click", () => {
    document.querySelectorAll(".praise-count").forEach((praiseCountSpan) => {
      praiseCountSpan.textContent = "0";
    });
  });

  // Append reset button to the footer
  document.querySelector("footer").appendChild(resetButton);

  // Add zoom effect on hover (already handled in CSS, just confirming JS usage)
  const catCards = document.querySelectorAll(".cat-card");

  catCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.05)"; // Add zoom on hover
    });

    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)"; // Reset to original scale
    });
  });
});
