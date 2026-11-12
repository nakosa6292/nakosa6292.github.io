const filters = document.querySelectorAll('[data-filter]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  const selected = button.dataset.filter;
  let count = 0;
  document.querySelectorAll('[data-category]').forEach(card => {
    const show = selected === 'all' || card.dataset.category.split(' ').includes(selected);
    card.hidden = !show;
    if(show) count++;
  });
  const status = document.getElementById('filter-status');
  if(status) status.textContent = `${count} projects shown`;
}));
