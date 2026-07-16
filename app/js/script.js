/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   Simple accordion pattern example
 */

Array.prototype.slice
  .call(document.querySelectorAll('.accordion'))
  .forEach((accordion) => {
    // Allow for multiple accordion sections to be expanded at the same time
    const allowMultiple = accordion.hasAttribute('data-allow-multiple');
    // Allow for each toggle to both open and close individually
    const allowToggle = allowMultiple
      ? allowMultiple
      : accordion.hasAttribute('data-allow-toggle');

    // Create the array of toggle elements for the accordion group
    const triggers = Array.prototype.slice.call(
      accordion.querySelectorAll('.accordion-trigger'),
    );
    const panels = Array.prototype.slice.call(
      accordion.querySelectorAll('.accordion-panel'),
    );

    accordion.addEventListener('click', (event) => {
      const target = event.target;

      if (target.classList.contains('accordion-trigger')) {
        // Check if the current toggle is expanded.
        const isExpanded = target.getAttribute('aria-expanded') === 'true';
        const active = accordion.querySelector('[aria-expanded="true"]');

        // without allowMultiple, close the open accordion
        if (!allowMultiple && active && active !== target) {
          // Set the expanded state on the triggering element
          active.setAttribute('aria-expanded', 'false');
          // Hide the accordion sections, using aria-controls to specify the desired section
          document
            .getElementById(active.getAttribute('aria-controls'))
            .setAttribute('hidden', '');

          // When toggling is not allowed, clean up disabled state
          if (!allowToggle) {
            active.removeAttribute('aria-disabled');
          }
        }

        if (!isExpanded) {
          // Set the expanded state on the triggering element
          target.setAttribute('aria-expanded', 'true');
          // Hide the accordion sections, using aria-controls to specify the desired section
          document
            .getElementById(target.getAttribute('aria-controls'))
            .removeAttribute('hidden');

          // If toggling is not allowed, set disabled state on trigger
          if (!allowToggle) {
            target.setAttribute('aria-disabled', 'true');
          }
        } else if (allowToggle && isExpanded) {
          // Set the expanded state on the triggering element
          target.setAttribute('aria-expanded', 'false');
          // Hide the accordion sections, using aria-controls to specify the desired section
          document
            .getElementById(target.getAttribute('aria-controls'))
            .setAttribute('hidden', '');
        }

        event.preventDefault();
      }
    });

    // Bind keyboard behaviors on the main accordion container
    accordion.addEventListener('keydown', (event) => {
      const { target } = event;
      const key = event.which.toString();

      const isExpanded = target.getAttribute('aria-expanded') === 'true';
      let allowToggle = allowMultiple
        ? allowMultiple
        : accordion.hasAttribute('data-allow-toggle');

      // 33 = Page Up, 34 = Page Down
      const ctrlModifier = event.ctrlKey && key.match(/33|34/);

      // Is this coming from an accordion header?
      if (target.classList.contains('accordion-trigger')) {
        // Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
        // 38 = Up, 40 = Down
        if (key.match(/38|40/) || ctrlModifier) {
          const index = triggers.indexOf(target);
          const direction = key.match(/34|40/) ? 1 : -1;
          const { length } = triggers;
          const newIndex = (index + length + direction) % length;

          triggers[newIndex].focus(0);

          event.preventDefault();
        } else if (key.match(/35|36/)) {
          // 35 = End, 36 = Home keyboard operations
          switch (key) {
            // Go to first accordion
            case '36':
              triggers[0].focus();
              break;
            // Go to last accordion
            case '35':
              triggers[triggers.length - 1].focus();
              break;
            default:
              break;
          }
          event.preventDefault();
        }
      }
    });

    // These are used to style the accordion when one of the buttons has focus
    accordion.querySelectorAll('.accordion-trigger').forEach((trigger) => {
      trigger.addEventListener('focus', () => {
        accordion.classList.add('focus');
      });

      trigger.addEventListener('blur', () => {
        accordion.classList.remove('focus');
      });
    });

    // Minor setup: will set disabled state, via aria-disabled, to an
    // expanded/ active accordion which is not allowed to be toggled close
    if (!allowToggle) {
      // Get the first expanded/ active accordion
      const expanded = accordion.querySelector('[aria-expanded="true"]');

      // If an expanded/ active accordion is found, disable
      if (expanded) {
        expanded.setAttribute('aria-disabled', 'true');
      }
    }
  });

// SETUP BACK TO TOP BTN/FUNCTION
const backToTopBtn = document.querySelector('.backtotop');

// Smooth scroll back to top
function scrollToTop(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// Show/Hide Scroll to Top button
window.onscroll = function () {
  if (scrollY >= 200) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
};

/**
 * Check if back to top button exists
 * if so, run scrollToTop function
 */
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', scrollToTop);
}
// END BACK TO TOP BTN/FUNCTION

// Footer copyright info
const d = new Date();
const copyYear = d.getFullYear();
const footerCopyright = document.getElementById('footer-copyright');
footerCopyright.innerHTML = `&copy; Copyright ${copyYear}`;

// const menuToggle = document.querySelector('.nav__toggle');
// const siteNavigation = document.getElementById('primary-navigation');

// if (menuToggle) {
//   menuToggle.addEventListener('click', () => {
//     const isOpened = menuToggle.getAttribute('aria-expanded') === 'true';
//     isOpened ? closeMenu() : openMenu();
//   });
// }

// function openMenu() {
//   menuToggle.setAttribute('aria-expanded', 'true');
//   siteNavigation.setAttribute('data-state', 'opened');
// }

// function closeMenu() {
//   menuToggle.setAttribute('aria-expanded', 'false');
//   siteNavigation.setAttribute('data-state', 'closed');
// }

// // Search bar
// const searchOpen = document.getElementById('search-open');
// const searchClose = document.getElementById('search-close');
// const searchForm = document.getElementById('search-form');

// const searchOverlay = document.getElementById('search-overlay');

// // Account toggle
// const accountToggle = document.getElementById('account-toggle');
// const accountDropdown = document.getElementById('login');

// const toggleAccount = () => {
//   if (accountToggle.getAttribute('aria-expanded') === 'false') {
//     accountToggle.setAttribute('aria-expanded', 'true');
//     accountDropdown.setAttribute('data-state', 'opened');
//   } else {
//     accountToggle.setAttribute('aria-expanded', 'false');
//     accountDropdown.setAttribute('data-state', 'closed');
//   }
// };

// const closeAccount = () => {
//   accountToggle.setAttribute('aria-expanded', 'false');
//   accountDropdown.setAttribute('data-state', 'closed');
// };

// const openSearchOverlay = () => {
//   searchOpen.setAttribute('aria-expanded', 'true');
//   searchOverlay.setAttribute('data-state', 'opened');
// };

// const closeSearchOverlay = () => {
//   searchOpen.setAttribute('aria-expanded', 'false');
//   searchOverlay.setAttribute('data-state', 'closed');
// };

// searchOpen.addEventListener('click', () => {
//   openSearchOverlay();
// });

// searchClose.addEventListener('click', () => {
//   closeSearchOverlay();
// });

// searchOverlay.addEventListener('click', (e) => {
//   if (e.target === searchOverlay) {
//     closeSearchOverlay();
//   }
// });

// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape') {
//     closeSearchOverlay();
//     closeAccount();
//   }
// });

// accountToggle.addEventListener('click', (e) => {
//   e.preventDefault();
//   toggleAccount();
// });

// Listen for clicks anywhere on the page
// window.addEventListener('click', function (e) {
//   // Check if the clicked element is NOT the box and NOT inside the box
//   if (!accountDropdown.contains(e.target) && !e.target.closest(accountToggle)) {
//     closeAccount();
//   }
// });
