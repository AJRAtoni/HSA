(function () {
  'use strict';

  var form = document.querySelector('[data-static-contact]');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;

      var name = form.elements['your-name'].value.trim();
      var email = form.elements['your-email'].value.trim();
      var message = form.elements['your-message'].value.trim();
      var subject = encodeURIComponent('Website inquiry from ' + name);
      var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
      if (typeof window.gtag === 'function') window.gtag('event', 'generate_lead', { method: 'email' });
      window.location.href = 'mailto:sales@higherstandardsaerospace.com?subject=' + subject + '&body=' + body;
    });
  }

  var search = document.getElementById('buscador');
  if (search) {
    search.addEventListener('keyup', function () {
      var filter = search.value.toUpperCase();
      var rows = document.querySelectorAll('#miTabla tr');
      for (var i = 1; i < rows.length; i += 1) {
        rows[i].style.display = rows[i].textContent.toUpperCase().indexOf(filter) > -1 ? '' : 'none';
      }
    });
  }

  var backToTop = document.getElementById('backToTopBtn');
  if (backToTop) {
    backToTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    window.addEventListener('scroll', function () {
      backToTop.style.display = window.scrollY > 20 ? 'block' : 'none';
    });
  }
}());

