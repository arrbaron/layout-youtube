const input = document.querySelector('.opacity');

input.addEventListener('change', handleUpdate);
input.addEventListener('mousemove', handleUpdate);

function handleUpdate() {
  let value = this.value;
  document.documentElement.style.setProperty('--opacity', value);
}
