document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('.pricing-toggle button');
  const tiers = document.querySelectorAll('.pricing-tier');

  toggleButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const tierType = this.getAttribute('data-tier');

      toggleButtons.forEach(function(btn) {
        btn.classList.remove('toggle-active');
      });
      this.classList.add('toggle-active');

      tiers.forEach(function(tier) {
        tier.classList.remove('active');
        if (tier.classList.contains(tierType + '-tier')) {
          tier.classList.add('active');
        }
      });
    });
  });

  const priceCards = document.querySelectorAll('.price-card button');
  priceCards.forEach(function(button) {
    button.addEventListener('click', function() {
      const card = this.closest('.price-card');
      const planName = card.querySelector('h3').textContent;
      const price = card.querySelector('.price-amount strong').textContent;
      const tierType = document.querySelector('.pricing-toggle button.toggle-active').textContent;

      showPaymentModal(planName, price, tierType);
    });
  });

  document.querySelectorAll('.feedback-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const tierName = this.getAttribute('data-tier');
      showFeedbackModal(tierName);
    });
  });

  const iconMap = {
    'check-icon-1': 'check', 'check-icon-2': 'check', 'check-icon-3': 'check',
    'check-icon-4': 'check', 'check-icon-5': 'check', 'check-icon-6': 'check',
    'check-icon-7': 'check', 'check-icon-8': 'check', 'check-icon-9': 'check',
    'check-icon-10': 'check', 'check-icon-11': 'check', 'check-icon-12': 'check',
    'check-icon-13': 'check', 'check-icon-14': 'check', 'check-icon-15': 'check',
    'check-icon-16': 'check', 'check-icon-17': 'check', 'check-icon-18': 'check',
    'check-icon-19': 'check', 'check-icon-20': 'check', 'check-icon-21': 'check',
    'check-icon-22': 'check', 'check-icon-23': 'check', 'check-icon-24': 'check',
    'check-icon-25': 'check', 'check-icon-26': 'check', 'check-icon-27': 'check',
    'check-icon-28': 'check', 'check-icon-29': 'check', 'check-icon-30': 'check',
    'check-icon-31': 'check', 'check-icon-32': 'check', 'check-icon-33': 'check',
    'check-icon-34': 'check', 'check-icon-35': 'check', 'check-icon-36': 'check',
    'check-icon-37': 'check', 'check-icon-38': 'check', 'check-icon-39': 'check',
    'arrow-icon-1': 'arrow', 'arrow-icon-2': 'arrow', 'arrow-icon-3': 'arrow',
    'arrow-icon-4': 'arrow', 'arrow-icon-5': 'arrow', 'arrow-icon-6': 'arrow'
  };

  Object.keys(iconMap).forEach(function(id) {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = icon(iconMap[id], iconMap[id] === 'check' ? 16 : 18);
    }
  });
});

function showPaymentModal(planName, price, tierType) {
  const modal = createModal(`
    <p class="eyebrow">Complete your booking</p>
    <h2>${planName}</h2>
    <p class="modal-lede">${tierType} · ${price} lei</p>
    <div class="detail-meta">${icon('calendar', 16)}You'll be matched with an advisor within 24 hours</div>
    <form id="payment-form" style="margin-top: 30px;">
      <label style="display: grid; gap: 8px; margin-bottom: 18px; color: var(--ink); font-size: 11px; font-weight: 700;">
        Cardholder name
        <input required placeholder="Name on card" id="card-name" style="width: 100%; height: 48px; padding: 0 14px; border: 1px solid var(--line); border-radius: 2px; background: white; color: var(--ink); font-size: 13px;">
      </label>
      <label style="display: grid; gap: 8px; margin-bottom: 18px; color: var(--ink); font-size: 11px; font-weight: 700;">
        Card number
        <input required placeholder="1234 5678 9012 3456" id="card-number" maxlength="19" style="width: 100%; height: 48px; padding: 0 14px; border: 1px solid var(--line); border-radius: 2px; background: white; color: var(--ink); font-size: 13px;">
      </label>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 13px;">
        <label style="display: grid; gap: 8px; margin-bottom: 18px; color: var(--ink); font-size: 11px; font-weight: 700;">
          Expiry
          <input required placeholder="MM/YY" id="card-expiry" maxlength="5" style="width: 100%; height: 48px; padding: 0 14px; border: 1px solid var(--line); border-radius: 2px; background: white; color: var(--ink); font-size: 13px;">
        </label>
        <label style="display: grid; gap: 8px; margin-bottom: 18px; color: var(--ink); font-size: 11px; font-weight: 700;">
          CVV
          <input required placeholder="123" id="card-cvv" maxlength="3" style="width: 100%; height: 48px; padding: 0 14px; border: 1px solid var(--line); border-radius: 2px; background: white; color: var(--ink); font-size: 13px;">
        </label>
      </div>
      <div class="modal-actions">
        <button type="button" class="secondary-button" onclick="closeModal(this)">Cancel</button>
        <button type="submit" class="primary-button">Pay ${price} lei ${icon('arrow', 18)}</button>
      </div>
    </form>
  `);

  document.body.appendChild(modal);

  document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    closeModal(e.target);
    showToast('Payment successful! We\'ll match you with an advisor within 24 hours.');
    setTimeout(function() {
      window.location.href = 'index.html';
    }, 2000);
  });

  document.getElementById('card-number').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\s/g, '');
    let formatted = value.match(/.{1,4}/g);
    e.target.value = formatted ? formatted.join(' ') : value;
  });

  document.getElementById('card-expiry').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      e.target.value = value.slice(0, 2) + '/' + value.slice(2, 4);
    } else {
      e.target.value = value;
    }
  });

  document.getElementById('card-cvv').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/\D/g, '');
  });
}

function showFeedbackModal(tierName) {
  const modal = createModal(`
    <p class="eyebrow">Share your experience</p>
    <h2>Feedback: ${tierName}</h2>
    <p class="modal-lede">Help us improve by sharing your thoughts on this session type.</p>
    <form id="feedback-form" style="margin-top: 30px;">
      <label style="display: grid; gap: 8px; margin-bottom: 18px; color: var(--ink); font-size: 11px; font-weight: 700;">
        How would you rate this session type?
        <div class="scale" style="margin-top: 8px;">
          <button type="button" data-value="5">Excellent</button>
          <button type="button" data-value="4">Good</button>
          <button type="button" data-value="3">Fair</button>
          <button type="button" data-value="2">Poor</button>
        </div>
      </label>
      <label style="display: grid; gap: 8px; margin-bottom: 18px; color: var(--ink); font-size: 11px; font-weight: 700;">
        What did you find most valuable?
        <textarea required placeholder="Tell us what worked well..." id="feedback-valuable" rows="4" style="width: 100%; padding: 14px; border: 1px solid var(--line); border-radius: 2px; background: white; color: var(--ink); font-size: 13px; resize: vertical;"></textarea>
      </label>
      <label style="display: grid; gap: 8px; margin-bottom: 18px; color: var(--ink); font-size: 11px; font-weight: 700;">
        What could be improved?
        <textarea placeholder="Optional suggestions..." id="feedback-improve" rows="4" style="width: 100%; padding: 14px; border: 1px solid var(--line); border-radius: 2px; background: white; color: var(--ink); font-size: 13px; resize: vertical;"></textarea>
      </label>
      <div class="modal-actions">
        <button type="button" class="secondary-button" onclick="closeModal(this)">Cancel</button>
        <button type="submit" class="primary-button">Submit feedback ${icon('arrow', 18)}</button>
      </div>
    </form>
  `);

  document.body.appendChild(modal);

  const form = document.getElementById('feedback-form');

  form.querySelectorAll('.scale button').forEach(function(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const scale = this.closest('.scale');
      scale.querySelectorAll('button').forEach(function(btn) {
        btn.classList.remove('selected');
      });
      this.classList.add('selected');
    });
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    closeModal(e.target);
    showToast('Thank you for your feedback! We use it to improve our services.');
  });
}
