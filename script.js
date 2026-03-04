// Accordion behavior for recipe dropdowns (<details>)
// Ensures only one recipe is open at a time.
document.addEventListener("DOMContentLoaded", () => {
  const recipeDetails = Array.from(document.querySelectorAll(".recipe-details"));

  recipeDetails.forEach((detailsEl) => {
    detailsEl.addEventListener("toggle", () => {
      // Only run when this one is being opened (toggle also fires when closing)
      if (!detailsEl.open) return;

      // Close all other open recipes
      recipeDetails.forEach((otherEl) => {
        if (otherEl !== detailsEl) otherEl.removeAttribute("open");
      });

      // Optional: ensure the opened recipe is visible on small screens
      if (window.matchMedia("(max-width: 640px)").matches) {
        detailsEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});