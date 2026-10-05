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
    'pricing-icon': ['star', 20],
    'help-pricing-icon': ['star', 18],
    'help-contact-icon': ['user', 18],
    'help-tour-icon': ['book', 18],
    'news-arrow-1': ['arrow', 16],
    'news-arrow-2': ['arrow', 16],
    'news-arrow-3': ['arrow', 16],
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

  const helpButton = document.getElementById('help-button');
  const helpMenu = document.getElementById('help-menu');

  if (helpButton && helpMenu) {
    helpButton.addEventListener('click', function(e) {
      e.stopPropagation();
      helpMenu.classList.toggle('open');
    });

    document.addEventListener('click', function(e) {
      if (!helpMenu.contains(e.target) && !helpButton.contains(e.target)) {
        helpMenu.classList.remove('open');
      }
    });
  }

  document.querySelectorAll('.news-card .news-link').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const card = this.closest('.news-card');
      const title = card.querySelector('h3').textContent;
      const content = card.querySelector('p').textContent;
      showNewsModal(title, content);
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
    <button class="secondary-button" style="width: 100%; margin-top: 20px;" onclick="retakeQuiz()">Retake profile quiz</button>
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

function showPathModal(category) {
  const pathData = {
    volunteering: {
      title: 'Volunteering programs',
      eyebrow: '120+ opportunities',
      description: 'Build real-world experience while making an impact. Our verified volunteering programs help you develop leadership, teamwork, and problem-solving skills universities look for.',
      items: [
        {
          name: 'OceanKind Europe',
          program: 'Coastal Changemakers',
          location: 'Lisbon, Portugal',
          duration: '2 weeks',
          timing: 'July 2026',
          category: 'Environment',
          description: 'Join marine conservation efforts, conduct beach cleanups, and learn about ocean ecosystems from local researchers.'
        },
        {
          name: 'Bright Futures',
          program: 'Read Together',
          location: 'Remote',
          duration: '4 hrs/week',
          timing: 'Ongoing',
          category: 'Education',
          description: 'Mentor elementary students in reading comprehension through weekly virtual sessions.'
        },
        {
          name: 'Neighbourhood Lab',
          program: 'City Food Network',
          location: 'Local',
          duration: 'Saturdays',
          timing: 'Monthly',
          category: 'Community',
          description: 'Help distribute fresh produce to underserved communities and learn about food justice.'
        },
        {
          name: 'Code for Good',
          program: 'Digital Literacy Workshops',
          location: 'Hybrid',
          duration: '6 weeks',
          timing: 'Starting June',
          category: 'Technology',
          description: 'Teach basic computer skills and digital safety to seniors and new immigrants.'
        }
      ]
    },
    internships: {
      title: 'Student internships',
      eyebrow: '84 open roles',
      description: 'Gain professional experience in your field of interest. These internships offer mentorship, real projects, and valuable additions to your university applications.',
      items: [
        {
          name: 'Tech Solutions Inc.',
          program: 'Software Development Intern',
          location: 'Remote',
          duration: '8 weeks',
          timing: 'Summer 2026',
          category: 'Technology',
          description: 'Work with senior developers on web applications using React and Node.js. Build features, fix bugs, and participate in code reviews.'
        },
        {
          name: 'Green Future Foundation',
          program: 'Sustainability Research Assistant',
          location: 'London, UK',
          duration: '10 weeks',
          timing: 'June - August',
          category: 'Environment',
          description: 'Support climate research projects, analyze environmental data, and contribute to sustainability reports.'
        },
        {
          name: 'Global Health Alliance',
          program: 'Public Health Intern',
          location: 'Geneva, Switzerland',
          duration: '12 weeks',
          timing: 'July - September',
          category: 'Healthcare',
          description: 'Assist with health policy research and participate in international health initiatives.'
        },
        {
          name: 'Creative Studios',
          program: 'Graphic Design Intern',
          location: 'New York, USA',
          duration: '6 weeks',
          timing: 'Summer 2026',
          category: 'Arts',
          description: 'Create visual content for marketing campaigns, work with design software, and build your portfolio.'
        }
      ]
    },
    exams: {
      title: 'Exam preparation',
      eyebrow: 'SAT, IELTS & more',
      description: 'Prepare for standardized tests with expert tutors and proven study materials. Our programs have helped students achieve top scores for competitive university admissions.',
      items: [
        {
          name: 'SAT Preparation',
          program: 'Complete SAT Bootcamp',
          location: 'Online',
          duration: '8 weeks',
          timing: 'Next session: May 15',
          category: 'Standardized Tests',
          description: 'Comprehensive SAT prep covering Math, Reading, and Writing. Includes 6 full-length practice tests, personalized feedback, and score improvement guarantee.'
        },
        {
          name: 'IELTS Mastery',
          program: 'Academic IELTS Course',
          location: 'Hybrid',
          duration: '6 weeks',
          timing: 'Rolling admissions',
          category: 'Language Tests',
          description: 'Achieve your target IELTS score with expert instructors. Practice all four modules: Listening, Reading, Writing, and Speaking.'
        },
        {
          name: 'ACT Excellence',
          program: 'ACT Intensive Program',
          location: 'Online',
          duration: '10 weeks',
          timing: 'Starting June 1',
          category: 'Standardized Tests',
          description: 'Master all ACT sections including the optional Writing test. Weekly live sessions and unlimited practice questions.'
        },
        {
          name: 'AP Study Groups',
          program: 'AP Exam Prep Series',
          location: 'Online',
          duration: '12 weeks',
          timing: 'January - April',
          category: 'Advanced Placement',
          description: 'Small group prep for popular AP exams: Calculus, Biology, Chemistry, US History, and English Literature.'
        },
        {
          name: 'TOEFL Success',
          program: 'TOEFL iBT Preparation',
          location: 'Online',
          duration: '5 weeks',
          timing: 'Multiple sessions',
          category: 'Language Tests',
          description: 'Intensive TOEFL preparation with native speakers. Develop test-taking strategies and academic English skills.'
        }
      ]
    },
    summer: {
      title: 'Summer camps',
      eyebrow: 'Across 22 countries',
      description: 'Explore your passions, meet like-minded peers, and build skills during immersive summer experiences. These programs combine learning with adventure.',
      items: [
        {
          name: 'Global Futures Forum',
          program: 'International Leadership Summit',
          location: 'Oxford, UK',
          duration: '2 weeks',
          timing: 'July 10-24',
          category: 'Leadership',
          description: 'Meet students and university leaders from 18 countries in a week of workshops, campus tours and big ideas. Applications close May 24.'
        },
        {
          name: 'MIT LaunchX',
          program: 'Entrepreneurship Program',
          location: 'Boston, USA',
          duration: '4 weeks',
          timing: 'June 20 - July 18',
          category: 'Business',
          description: 'Learn to build and launch a startup. Pitch to real investors, receive mentorship from MIT alumni, and develop business skills.'
        },
        {
          name: 'CERN Summer School',
          program: 'Particle Physics Experience',
          location: 'Geneva, Switzerland',
          duration: '3 weeks',
          timing: 'July 5-26',
          category: 'Science',
          description: 'Work alongside physicists at CERN, visit the Large Hadron Collider, and participate in hands-on experiments.'
        },
        {
          name: 'Royal Academy of Arts',
          program: 'Young Artists Programme',
          location: 'London, UK',
          duration: '2 weeks',
          timing: 'August 1-14',
          category: 'Arts',
          description: 'Intensive studio workshops in painting, sculpture, and digital art. Exhibition of student work at program end.'
        },
        {
          name: 'Stanford AI Camp',
          program: 'Machine Learning Bootcamp',
          location: 'Palo Alto, USA',
          duration: '3 weeks',
          timing: 'June 27 - July 15',
          category: 'Technology',
          description: 'Build AI projects using Python and TensorFlow. Learn from Stanford professors and industry experts.'
        },
        {
          name: 'Marine Biology Academy',
          program: 'Ocean Research Expedition',
          location: 'Great Barrier Reef, Australia',
          duration: '2 weeks',
          timing: 'July 8-22',
          category: 'Science',
          description: 'Dive into marine conservation, collect field data, and study coral reef ecosystems with marine biologists.'
        }
      ]
    }
  };

  const data = pathData[category];

  let itemsHTML = data.items.map(function(item) {
    return `
      <div style="padding: 20px; background: var(--silver-light); border-radius: 3px; margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <div>
            <small style="color: var(--muted); font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px;">${item.category}</small>
            <h3 style="margin: 4px 0 2px; font-size: 16px;">${item.program}</h3>
            <p style="margin: 0; color: var(--muted); font-size: 13px;">${item.name}</p>
          </div>
        </div>
        <p style="margin: 12px 0; font-size: 13px; line-height: 1.5;">${item.description}</p>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; font-size: 12px; color: var(--muted);">
          <span>${icon('calendar', 14)} ${item.timing}</span>
          <span>${icon('clock', 14)} ${item.duration}</span>
          <span>${icon('globe', 14)} ${item.location}</span>
        </div>
        <button class="primary-button" style="margin-top: 16px; width: 100%;" onclick="showToast('Application saved! We\\'ll send you details via email.')">Apply now ${icon('arrow', 16)}</button>
      </div>
    `;
  }).join('');

  const modal = createModal(`
    <p class="eyebrow">${data.eyebrow}</p>
    <h2>${data.title}</h2>
    <p class="modal-lede">${data.description}</p>
    <div style="margin-top: 30px; max-height: 60vh; overflow-y: auto;">
      ${itemsHTML}
    </div>
    <div class="modal-actions" style="margin-top: 24px;">
      <button type="button" class="secondary-button" onclick="closeModal(this)">Close</button>
      <a href="opportunities.html" class="primary-button">View all opportunities ${icon('arrow', 18)}</a>
    </div>
  `, true);

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

function retakeQuiz() {
  if (confirm('This will take you to the profile quiz. Your current profile data will be updated with your new answers. Continue?')) {
    const user = AUTH.getCurrentUser();
    if (user) {
      localStorage.setItem('loopy_retaking_quiz', 'true');
    }
    window.location.href = 'signup.html';
  }
}

function showContactModal() {
  const modal = createModal(`
    <p class="eyebrow">Get in touch</p>
    <h2>Contact support</h2>
    <p class="modal-lede">Our team is here to help with any questions about your account, matching, or guidance sessions.</p>
    <form id="contact-form" style="margin-top: 30px;">
      <label style="display: grid; gap: 8px; margin-bottom: 18px; color: var(--ink); font-size: 11px; font-weight: 700;">
        Subject
        <input required placeholder="What can we help with?" id="contact-subject" style="width: 100%; height: 48px; padding: 0 14px; border: 1px solid var(--line); border-radius: 2px; background: white; color: var(--ink); font-size: 13px;">
      </label>
      <label style="display: grid; gap: 8px; margin-bottom: 18px; color: var(--ink); font-size: 11px; font-weight: 700;">
        Message
        <textarea required placeholder="Tell us more..." id="contact-message" rows="6" style="width: 100%; padding: 14px; border: 1px solid var(--line); border-radius: 2px; background: white; color: var(--ink); font-size: 13px; resize: vertical;"></textarea>
      </label>
      <div class="modal-actions">
        <button type="button" class="secondary-button" onclick="closeModal(this)">Cancel</button>
        <button type="submit" class="primary-button">Send message ${icon('arrow', 18)}</button>
      </div>
    </form>
  `);

  document.body.appendChild(modal);

  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    closeModal(e.target);
    showToast('Message sent! We\'ll get back to you within 24 hours.');
  });
}

function showTourModal() {
  const modal = createModal(`
    <p class="eyebrow">Getting started</p>
    <h2>Welcome to Loopy</h2>
    <p class="modal-lede">Here's a quick tour of what you can do with your account.</p>
    <div style="display: grid; gap: 20px; margin-top: 30px;">
      <div style="display: flex; gap: 14px; align-items: flex-start;">
        <span style="display: grid; place-items: center; width: 40px; height: 40px; flex-shrink: 0; border-radius: 50%; background: var(--navy); color: white; font-weight: 700;">1</span>
        <div>
          <strong style="display: block; margin-bottom: 6px; font-size: 14px;">Browse matched counselors</strong>
          <p style="margin: 0; color: var(--muted); font-size: 12px; line-height: 1.6;">Connect with advisors who understand your goals and can guide your journey.</p>
        </div>
      </div>
      <div style="display: flex; gap: 14px; align-items: flex-start;">
        <span style="display: grid; place-items: center; width: 40px; height: 40px; flex-shrink: 0; border-radius: 50%; background: var(--navy); color: white; font-weight: 700;">2</span>
        <div>
          <strong style="display: block; margin-bottom: 6px; font-size: 14px;">Explore opportunities</strong>
          <p style="margin: 0; color: var(--muted); font-size: 12px; line-height: 1.6;">Find volunteering programs and internships that build your skills and strengthen your profile.</p>
        </div>
      </div>
      <div style="display: flex; gap: 14px; align-items: flex-start;">
        <span style="display: grid; place-items: center; width: 40px; height: 40px; flex-shrink: 0; border-radius: 50%; background: var(--navy); color: white; font-weight: 700;">3</span>
        <div>
          <strong style="display: block; margin-bottom: 6px; font-size: 14px;">Discover universities</strong>
          <p style="margin: 0; color: var(--muted); font-size: 12px; line-height: 1.6;">See universities matched to your profile, interests, and preferred study locations.</p>
        </div>
      </div>
      <div style="display: flex; gap: 14px; align-items: flex-start;">
        <span style="display: grid; place-items: center; width: 40px; height: 40px; flex-shrink: 0; border-radius: 50%; background: var(--navy); color: white; font-weight: 700;">4</span>
        <div>
          <strong style="display: block; margin-bottom: 6px; font-size: 14px;">Book guidance sessions</strong>
          <p style="margin: 0; color: var(--muted); font-size: 12px; line-height: 1.6;">Choose from student or expert plans to get personalized advice on your path.</p>
        </div>
      </div>
    </div>
    <div class="modal-actions">
      <button class="primary-button" onclick="closeModal(this)">Got it ${icon('check', 18)}</button>
    </div>
  `, false);

  document.body.appendChild(modal);
}

function showNewsModal(title, content) {
  const modal = createModal(`
    <p class="eyebrow">Latest news</p>
    <h2>${title}</h2>
    <p class="modal-lede">${content}</p>
    <p style="margin-top: 20px; color: var(--muted); font-size: 13px; line-height: 1.7;">This is a demo news item. In a production environment, this would link to a full article with detailed information, application links, and related resources.</p>
    <div class="modal-actions">
      <button class="primary-button" onclick="closeModal(this)">Close</button>
    </div>
  `);

  document.body.appendChild(modal);
}
