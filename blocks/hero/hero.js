export default function decorate(block) {
  const p = document.createElement('p');
  p.textContent = 'amazing!';
  block.append(p);
}
