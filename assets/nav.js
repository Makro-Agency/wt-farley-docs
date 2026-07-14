// Mobile sidebar toggle
document.addEventListener('click', function (e) {
  if (e.target && e.target.classList.contains('menu-btn')) {
    var sb = e.target.closest('.sidebar');
    if (sb) sb.classList.toggle('open');
  }
});
