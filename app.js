(() => {
  const gate = document.querySelector('#age-gate');
  const confirm = document.querySelector('#age-confirm');
  const key = 'muse4kids-parent-age-confirmed';
  if (gate && sessionStorage.getItem(key) === 'true') gate.classList.add('hidden');
  if (confirm) confirm.addEventListener('click', () => {
    sessionStorage.setItem(key, 'true');
    gate.classList.add('hidden');
  });
})();
