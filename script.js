// ---- Password gate ----
// WARNING: the password is visible in the page source, this is NOT real
// security. Use it only as a cosmetic filter.
(function () {
  var CORRECT_PASSWORD = "data2026"; // <-- change this password
  var gate = document.getElementById('password-gate');
  var content = document.getElementById('site-content');
  if (!gate || !content) return; // page without a password

  if (sessionStorage.getItem('gate-unlocked') === 'yes') {
    gate.hidden = true;
    gate.style.display = 'none';
    content.hidden = false;
  }

  var form = document.getElementById('password-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var input = document.getElementById('password-input');
    var error = document.getElementById('gate-error');
    if (input.value === CORRECT_PASSWORD) {
      sessionStorage.setItem('gate-unlocked', 'yes');
      gate.hidden = true;
      gate.style.display = 'none';
      content.hidden = false;
    } else {
      error.hidden = false;
      input.value = '';
      input.focus();
    }
  });
})();

// ---- Data cards accordion ----
document.querySelectorAll('.card-head').forEach(function (head) {
  head.addEventListener('click', function () {
    head.closest('.data-card').classList.toggle('open');
  });
});

// Dropdown menu (nav)
document.querySelectorAll('.nav-item').forEach(function (item) {
  var btn = item.querySelector('button');
  if (!btn) return;
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    var isOpen = item.classList.contains('open');
    document.querySelectorAll('.nav-item.open').forEach(function (o) { o.classList.remove('open'); });
    if (!isOpen) item.classList.add('open');
  });
});
document.addEventListener('click', function () {
  document.querySelectorAll('.nav-item.open').forEach(function (o) { o.classList.remove('open'); });
});

// Accordion (subcategories on the data page)
document.querySelectorAll('.subcategory-head').forEach(function (head) {
  head.addEventListener('click', function () {
    head.closest('.subcategory').classList.toggle('open');
  });
});

// Open the subcategory targeted by the URL hash (from the category index links)
window.addEventListener('DOMContentLoaded', function () {
  if (window.location.hash) {
    var target = document.querySelector(window.location.hash);
    if (target && target.classList.contains('subcategory')) {
      target.classList.add('open');
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});
