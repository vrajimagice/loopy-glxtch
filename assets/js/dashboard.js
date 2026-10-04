document.addEventListener('DOMContentLoaded', function() {
  const currentUser = AUTH.getCurrentUser();

  const userData = currentUser || {
    firstName: 'Student',
    lastName: '',
    email: 'guest@loopy.com',
    useLoopy: false,
    savedItems: []
  };

  updateUserProfile(userData);

  const iconMap = {
    'menu-icon': ['menu', 20],
    'chevron-icon': ['chevron', 20],
    'arrow-icon-1': ['arrow', 18],
    'arrow-icon-2': ['arrow', 18],
    'arrow-icon-3': ['arrow', 18],
    'arrow-icon-4': ['arrow', 17],
    'arrow-icon-5': ['arrow', 18],
    'arrow-icon-6': ['arrow', 18],
    'arrow-icon-7': ['arrow', 18],
    'arrow-icon-8': ['arrow', 17],
    'arrow-icon-9': ['arrow', 17],
    'arrow-icon-10': ['arrow', 18],
    'arrow-icon-11': ['arrow', 18],
    'arrow-icon-12': ['arrow', 18],
    'arrow-icon-13': ['arrow', 18],
    'star-icon-1': ['star', 16],
    'star-icon-2': ['star', 16],
    'star-icon-3': ['star', 16],
    'clock-icon-1': ['clock', 16],
    'clock-icon-2': ['clock', 16],
    'clock-icon-3': ['clock', 16],
    'heart-icon': ['heart', 25],
    'briefcase-icon': ['briefcase', 25],
    'book-icon': ['book', 25],
    'sun-icon': ['sun', 25],
    'calendar-icon-1': ['calendar', 16],
    'calendar-icon-2': ['calendar', 16],
    'calendar-icon-3': ['calendar', 16]
  };

  Object.keys(iconMap).forEach(function(id) {
    const el = document.getElementById(id);
    if (el) {
      const [name, size] = iconMap[id];
      el.innerHTML = icon(name, size);
    }
  });

  const mobileMenuBtn = document.getElementById('mobile-menu');
  const dashLinks = document.getElementById('dash-links');

  if (mobileMenuBtn && dashLinks) {
    mobileMenuBtn.addEventListener('click', function() {
      dashLinks.classList.toggle('open');
      const menuIcon = document.getElementById('menu-icon');
      if (menuIcon) {
        menuIcon.innerHTML = dashLinks.classList.contains('open') ? icon('close', 20) : icon('menu', 20);
      }
    });
  }

  const profileButton = document.querySelector('.profile-button');
  if (profileButton) {
    profileButton.addEventListener('click', showAccountModal);
  }

  const chevronButton = document.querySelector('.profile-score');
  if (chevronButton) {
    chevronButton.addEventListener('click', function() {
      showToast('Profile analysis complete! Focus on adding more experiences to reach 85%.');
    });
  }

  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const slideControls = document.querySelectorAll('.slide-controls button');

  function showSlide(index) {
    slides.forEach(function(slide, i) {
      slide.classList.toggle('active', i === index);
    });
    slideControls.forEach(function(control, i) {
      control.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  slideControls.forEach(function(control) {
    control.addEventListener('click', function() {
      const slideIndex = parseInt(this.getAttribute('data-slide'));
      showSlide(slideIndex);
    });
  });

  setInterval(function() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 6000);

  document.querySelectorAll('.opportunity-grid article button').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const article = this.closest('article');
      const title = article.querySelector('h3').textContent;
      const org = article.querySelector('p').textContent;
      const tag = article.querySelector('small').textContent;
      const meta = article.querySelector('.meta').textContent.trim();

      showOpportunityModal({
        title: title,
        org: org,
        tag: tag,
        meta: meta
      });
    });
  });

  const savedBtn = document.getElementById('saved-btn');
  if (savedBtn) {
    savedBtn.addEventListener('click', showSavedModal);
  }

  document.querySelectorAll('.counselor-card').forEach(function(card) {
    card.addEventListener('click', function() {
      const name = this.querySelector('h3').textContent;
      const role = this.querySelector('.counselor-info p').textContent;
      const imgSrc = this.querySelector('img').src;

      showCounselorModal({ name, role, imgSrc });
    });
  });

  document.querySelectorAll('.slide button').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const slide = this.closest('.slide');
      const title = slide.querySelector('h2').textContent.replace(/\n/g, ' ');

      showOpportunityModal({
        title: title,
        org: 'Loopy Featured Event',
        tag: 'Event',
        meta: 'Online and in person'
      });
    });
  });

  const offerBtn = document.querySelector('.offer button');
  if (offerBtn) {
    offerBtn.addEventListener('click', function() {
      showToast('Free application review requested! A counselor will contact you soon.');
    });
  }

  document.querySelectorAll('.section-heading .link-button').forEach(function(btn) {
    btn.addEventListener('click', function() {
      showToast('More options coming soon! We are expanding our network.');
    });
  });

  document.querySelectorAll('.university-ad button').forEach(function(btn) {
    btn.addEventListener('click', function() {
      showToast('Redirecting to King\'s College London portal...');
      setTimeout(function() {
        window.open('https://www.kcl.ac.uk', '_blank');
      }, 800);
    });
  });

  document.querySelectorAll('.path-track a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const target = this.getAttribute('href');
      if (target && target.startsWith('#')) {
        e.preventDefault();
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
        document.querySelectorAll('.path-track a').forEach(function(a) {
          a.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          if (dashLinks) {
            dashLinks.classList.remove('open');
            const menuIcon = document.getElementById('menu-icon');
            if (menuIcon) {
              menuIcon.innerHTML = icon('menu', 20);
            }
          }
        }
      }
    });
  });
});

function updateUserProfile(user) {
  const firstName = user.firstName || 'Student';
  const fullName = (user.firstName + ' ' + user.lastName).trim() || 'Student';

  const welcomeH1 = document.querySelector('.welcome h1');
  if (welcomeH1) {
    welcomeH1.textContent = 'Welcome, ' + firstName + '.';
  }

  const profileButton = document.querySelector('.profile-button');
  if (profileButton) {
    const initials = (user.firstName.charAt(0) + (user.lastName.charAt(0) || '')).toUpperCase();

    if (user.useLoopy) {
      profileButton.querySelector('span').outerHTML = loopy(true);
    } else {
      profileButton.querySelector('span').textContent = initials;
    }

    const nameEl = profileButton.querySelector('small');
    if (nameEl) {
      nameEl.innerHTML = fullName + '<br><b>View account</b>';
    }
  }

  const savedCount = document.querySelector('.nav-count');
  if (savedCount) {
    savedCount.textContent = (user.savedItems || []).length;
  }
}

function loadSavedItems() {
  const savedItems = AUTH.getSavedItems();
  const savedCount = document.querySelector('.nav-count');
  if (savedCount) {
    savedCount.textContent = savedItems.length;
  }
}

function showToast(message) {
  const existingToast = document.querySelector('.toast');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = icon('check', 17) + message;
  document.body.appendChild(toast);

  setTimeout(function() {
    toast.remove();
  }, 2600);
}

function showOpportunityModal(data) {
  const modal = createModal(`
    <p class="eyebrow">${data.tag}</p>
    <h2>${data.title}</h2>
    <p class="modal-lede">${data.org} designed this experience for motivated high-school students. You'll receive guided training, practical experience and a verified completion certificate for your applications.</p>
    <div class="detail-meta">${icon('calendar', 16)}${data.meta}</div>
    <div class="modal-actions">
      <button class="secondary-button" onclick="saveOpportunity('${escapeHtml(data.title)}', '${escapeHtml(data.org)}', '${escapeHtml(data.tag)}', '${escapeHtml(data.meta)}')">Save for later</button>
      <a class="primary-button" href="https://www.volunteerhq.org" target="_blank" rel="noreferrer">Visit official page ${icon('arrow', 18)}</a>
    </div>
  `);

  document.body.appendChild(modal);
}

function showCounselorModal(data) {
  const modal = createModal(`
    <div class="message-head">
      <img src="${data.imgSrc}" alt="">
      <div>
        <p class="eyebrow">Your counselor match</p>
        <h2>${data.name}</h2>
        <span><i></i> Available now</span>
      </div>
    </div>
    <div class="messages">
      <div class="theirs">Hello! I've reviewed your current goals and profile. I can help you compare university options, strengthen your application plan and identify the most important next steps. What would you like to focus on today?</div>
    </div>
    <form class="message-form" onsubmit="return sendMessage(event)">
      <input placeholder="Message ${data.name.split(' ')[0]}..." id="message-input">
      <button class="primary-button">Send ${icon('arrow', 17)}</button>
    </form>
  `, false);

  document.body.appendChild(modal);
}

function showAccountModal() {
  const user = AUTH.getCurrentUser();
  if (!user) {
    showToast('Create an account to access profile settings.');
    return;
  }

  const fullName = (user.firstName + ' ' + user.lastName).trim();
  const initials = (user.firstName.charAt(0) + (user.lastName.charAt(0) || '')).toUpperCase();

  const modal = createModal(`
    <div class="account-head">
      ${user.useLoopy ? loopy(false) : '<span>' + initials + '</span>'}
      <div>
        <p class="eyebrow">Student account</p>
        <h2>${fullName}</h2>
        <p>Profile strength: 68%</p>
      </div>
    </div>
    <label class="account-label">First name<input value="${user.firstName}" id="account-firstname"></label>
    <label class="account-label">Last name<input value="${user.lastName}" id="account-lastname"></label>
    <label class="account-label">Email address<input value="${user.email}" disabled style="opacity: 0.6; cursor: not-allowed;"></label>
    <div class="avatar-choice">
      <div>
        ${loopy(true)}
        <span><strong>Use Loopy as profile picture</strong><small>Excellent choice. Very professional. Mostly.</small></span>
      </div>
      <button type="button" class="${user.useLoopy ? 'active' : ''}" onclick="toggleLoopyAvatar()">${user.useLoopy ? 'Using Loopy' : 'Choose Loopy'}</button>
    </div>
    <label class="account-label">Change password<input type="password" placeholder="New password (leave blank to keep current)" id="account-password"></label>
    <div class="account-stats">
      <span><strong>${(user.savedItems || []).length}</strong>Saved items</span>
      <span><strong>3</strong>Counselor chats</span>
      <span><strong>5</strong>Skills tracked</span>
    </div>
    <div class="modal-actions">
      <button class="secondary-button" onclick="logout()">Log out</button>
      <button class="primary-button" onclick="saveAccount()">Save account</button>
    </div>
  `);

  document.body.appendChild(modal);
}

function createModal(content, wide = false) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-layer';
  overlay.innerHTML = `
    <button class="modal-backdrop" onclick="closeModal(this)" aria-label="Close"></button>
    <section class="info-modal ${wide ? 'wide' : ''}">
      <button class="icon-button modal-close" onclick="closeModal(this)">${icon('close', 20)}</button>
      ${content}
    </section>
  `;
  return overlay;
}

function closeModal(btn) {
  const modal = btn.closest('.modal-layer');
  if (modal) modal.remove();
}

function saveOpportunity(title, org, tag, meta) {
  const result = AUTH.saveItem({
    title: title,
    org: org,
    tag: tag,
    meta: meta,
    url: 'https://www.volunteerhq.org'
  });

  if (result.success) {
    showToast(title + ' saved.');
    loadSavedItems();
    closeModal(event.target);
  } else {
    showToast(result.error);
  }
}

function toggleLoopyAvatar() {
  const user = AUTH.getCurrentUser();
  AUTH.updateUser({ useLoopy: !user.useLoopy });
  closeModal(event.target);
  updateUserProfile(AUTH.getCurrentUser());
  showToast('Profile picture updated!');
}

function saveAccount() {
  const firstName = document.getElementById('account-firstname').value.trim();
  const lastName = document.getElementById('account-lastname').value.trim();
  const newPassword = document.getElementById('account-password').value;

  const updates = {
    firstName: firstName,
    lastName: lastName
  };

  if (newPassword && newPassword.length >= 6) {
    updates.password = newPassword;
  }

  const result = AUTH.updateUser(updates);

  if (result.success) {
    closeModal(event.target);
    updateUserProfile(result.user);
    showToast('Account updated successfully!');
  }
}

function logout() {
  if (confirm('Are you sure you want to log out?')) {
    AUTH.logout();
    window.location.href = '../landing/index.html';
  }
}

function sendMessage(event) {
  event.preventDefault();
  const input = document.getElementById('message-input');
  const message = input.value.trim();

  if (!message) return false;

  const messagesContainer = document.querySelector('.messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = 'mine';
  messageDiv.textContent = message;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  input.value = '';

  setTimeout(function() {
    const replyDiv = document.createElement('div');
    replyDiv.className = 'theirs';
    replyDiv.textContent = 'That\'s a great question! Based on your profile, I can help you explore that further. Would you like me to suggest some specific programs?';
    messagesContainer.appendChild(replyDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 1000);

  return false;
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

function showSavedModal() {
  const savedItems = AUTH.getSavedItems();

  let content = `
    <p class="eyebrow">Your saved library</p>
    <h2>Everything you want to come back to.</h2>
    <p class="modal-lede">Universities, programs and events you save will stay together here.</p>
  `;

  if (savedItems.length > 0) {
    content += '<div class="saved-grid">';
    savedItems.forEach(function(item) {
      content += `
        <article>
          <span>${escapeHtml(item.tag)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.meta)}</p>
          <div>
            <button onclick="removeSavedItem('${escapeHtml(item.title)}')">Remove</button>
            <a href="${item.url}" target="_blank" rel="noreferrer">Open official page ${icon('arrow', 15)}</a>
          </div>
        </article>
      `;
    });
    content += '</div>';
  } else {
    content += `
      <div class="empty-saved">
        ${loopy(false)}
        <h3>Your saved list is feeling a little lonely.</h3>
        <p>Save a university, event or opportunity and Loopy will keep it safe here.</p>
      </div>
    `;
  }

  const modal = createModal(content, true);
  document.body.appendChild(modal);
}

function removeSavedItem(title) {
  const result = AUTH.removeSavedItem(title);
  if (result.success) {
    showToast('Item removed from saved list.');
    closeModal(event.target);
    loadSavedItems();
    setTimeout(function() {
      showSavedModal();
    }, 100);
  }
}

