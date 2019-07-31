export default (text = 'Hello World') => {
  const element = document.createElement('div');
  element.innerHTML = `
    <div class="parent">
      <div class="child">One</div>
      <div class="child">Two</div>
      <div class="child">Three</div>
    </div>
  `;
  return element;
};
