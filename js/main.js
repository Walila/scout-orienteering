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

  // ── Question tracking (station-c) ───────────────────────────
  var statusBar   = document.getElementById('q-status-bar');
  var countEl     = document.getElementById('q-asked-count');
  var resetBtn    = document.getElementById('q-reset-btn');
  var qItems      = document.querySelectorAll('.q-item');
  var askedCount  = 0;
  var totalQ      = qItems.length;

  function updateStatus() {
    if (!statusBar) return;
    if (countEl) countEl.textContent = askedCount;
    statusBar.classList.toggle('is-visible', askedCount > 0);
  }

  if (qItems.length > 0) {
    qItems.forEach(function (item) {
      function toggleItem() {
        var wasAsked = item.classList.contains('is-asked');
        item.classList.toggle('is-asked');
        askedCount += wasAsked ? -1 : 1;
        updateStatus();
      }

      item.addEventListener('click', toggleItem);
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleItem();
        }
      });
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      qItems.forEach(function (item) {
        item.classList.remove('is-asked');
      });
      askedCount = 0;
      updateStatus();
    });
  }

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
