export default function decorate(block) {
  const textEls = [...block.querySelectorAll('h1, h2, h3, h4, h5, h6, p')]
    .filter((el) => !el.closest('picture') && el.textContent.trim());
  if (textEls.length > 0) {
    const last = textEls[textEls.length - 1];
    last.textContent = `${last.textContent} amazing!`;
  }
}
