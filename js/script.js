const textSegments = [
    "Prasun Paudel.",
    "Web Developer.",
    "UI/UX Designer.",
  ];
  
  const typedTextElement = document.getElementById("typedText");
  const cursorElement = document.getElementById("cursor");
  
  let segmentIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function typeText() {
    const currentText = textSegments[segmentIndex];
    const typingSpeed = 100; // Typing speed in milliseconds
    const deletingSpeed = 50; // Deleting speed in milliseconds
    const delayBeforeSwitching = 2000; // Delay before switching to the next segment in milliseconds
  
    if (!isDeleting && charIndex <= currentText.length) {
      typedTextElement.textContent = currentText.substring(0, charIndex);
      charIndex++;
    } else if (isDeleting && charIndex >= 0) {
      typedTextElement.textContent = currentText.substring(0, charIndex);
      charIndex--;
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        segmentIndex = (segmentIndex + 1) % textSegments.length;
      }
    }
  
    const speed = isDeleting ? deletingSpeed : typingSpeed;
  
    // If typing is complete, delay before switching to the next segment
    if (charIndex === currentText.length && !isDeleting) {
      setTimeout(typeText, delayBeforeSwitching);
    } else {
      setTimeout(typeText, speed);
    }
  }
  
  // Start the typing animation
  typeText();
  