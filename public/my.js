document.addEventListener("DOMContentLoaded", () => {
    const noteButtons = document.querySelectorAll("[data-note]");

    noteButtons.forEach((button, index) => {
        const noteNumber = index + 1;
        button.dataset.note = noteNumber;

        const supElement = button.querySelector("sup");
        if (supElement) {
            supElement.textContent = noteNumber;
        }

        const tooltip = button.querySelector(".tooltip-content");
        if (!tooltip) return;

        // Nasconde il tooltip inizialmente
        tooltip.style.position = "fixed";
        tooltip.style.visibility = "hidden";

        const updateTooltipPosition = () => {
            // Reset temporaneo per calcolare posizione corretta
            tooltip.style.opacity = "1";
            tooltip.style.position = "absolute"; // Torna in posizione
            tooltip.style.visibility = "hidden";

            const buttonRect = button.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();
            const viewportWidth = window.innerWidth;

            let transformX = "translateX(0)";

            if (buttonRect.right + tooltipRect.width > viewportWidth) {
                transformX = "translateX(-100%)";
            } else if (buttonRect.left - tooltipRect.width < 0) {
                transformX = "translateX(0)";
            }

            tooltip.style.transform = transformX;

            // Ora che è posizionato correttamente, lo mostriamo
            tooltip.style.visibility = "visible";
            tooltip.style.opacity = "";
        };

        button.addEventListener("mouseenter", updateTooltipPosition);
        button.addEventListener("focus", updateTooltipPosition);
        window.addEventListener("resize", updateTooltipPosition);
    });
});
