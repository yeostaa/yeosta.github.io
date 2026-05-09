document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("article img");
  const colorModes = [
    "color-mode-rose",
    "color-mode-warm",
    "color-mode-cool",
    "color-mode-soft",
    "color-mode-ink",
  ];

  images.forEach((image) => {
    const frame = image.closest("figure") || image.parentElement;

    if (!frame) {
      return;
    }

    frame.classList.add("image-cursor-frame");

    const cursor = document.createElement("span");
    cursor.className = "image-cursor-dot";
    cursor.setAttribute("aria-hidden", "true");
    frame.append(cursor);

    frame.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "touch") {
        return;
      }

      frame.classList.add("is-cursor-active");
    });

    frame.addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch") {
        return;
      }

      const rect = frame.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    });

    frame.addEventListener("pointerleave", () => {
      frame.classList.remove("is-cursor-active");
    });

    image.addEventListener("click", () => {
      const currentMode = colorModes.find((mode) => image.classList.contains(mode));
      const nextModes = colorModes.filter((mode) => mode !== currentMode);
      const nextMode = nextModes[Math.floor(Math.random() * nextModes.length)];

      image.classList.remove(...colorModes);
      image.classList.add(nextMode);
    });
  });
});
