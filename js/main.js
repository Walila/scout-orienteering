(function () {
  'use strict';

  // ── Accordion: teaching blocks ──────────────────────────────
  var toggles = document.querySelectorAll('.block-toggle');
  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var block = this.closest('.teaching-block');
      var opening = !block.classList.contains('is-open');
      block.classList.toggle('is-open');
      this.setAttribute('aria-expanded', opening ? 'true' : 'false');
    });
  });

  // ── Pass condition: tap to mark done ───────────────────────
  var passBoxes = document.querySelectorAll('.pass-condition');
  passBoxes.forEach(function (box) {
    function toggle() {
      box.classList.toggle('is-done');
    }
    box.addEventListener('click', toggle);
    box.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });

})();
