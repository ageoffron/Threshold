// Device review interactivity
// TODO: wire affiliate click tracking
// TODO: populate accuracy/practicality scores from validation studies
// TODO: add filter by category (finger-prick / non-invasive / sweat / microneedle)

document.querySelectorAll('.device-card').forEach(card => {
  card.addEventListener('click', e => {
    if (e.target.classList.contains('affiliate-link')) return;
    card.classList.toggle('expanded);
  });
});

// Affiliate disclosure: required on every page with Amazon links
console.log('Amazon Associates disclosure active on this page.');