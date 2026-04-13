(function () {
  'use strict';

  // Pass condition toggle — tap to mark station as cleared
  var passBoxes = document.querySelectorAll('.pass-condition');
  passBoxes.forEach(function (box) {
    box.setAttribute('role', 'button');
    box.setAttribute('tabindex', '0');

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
