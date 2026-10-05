const universitiesData = [
  {
    name: "King's College London",
    country: "United Kingdom",
    banner: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 96,
    programs: ["Medicine", "Law", "Engineering"],
    international: 42,
    acceptance: 13
  },
  {
    name: "UCLA",
    country: "United States",
    banner: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 94,
    programs: ["Computer Science", "Business", "Arts"],
    international: 16,
    acceptance: 11
  },
  {
    name: "ETH Zürich",
    country: "Switzerland",
    banner: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 91,
    programs: ["Engineering", "Science", "Technology"],
    international: 39,
    acceptance: 8
  },
  {
    name: "Sorbonne University",
    country: "France",
    banner: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 89,
    programs: ["Humanities", "Medicine", "Science"],
    international: 20,
    acceptance: 15
  },
  {
    name: "New York University",
    country: "United States",
    banner: "https://images.unsplash.com/photo-1546436836-07a91091f160?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 87,
    programs: ["Business", "Arts", "Social Sciences"],
    international: 27,
    acceptance: 12
  },
  {
    name: "University College London",
    country: "United Kingdom",
    banner: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 86,
    programs: ["Architecture", "Medicine", "Law"],
    international: 48,
    acceptance: 10
  },
  {
    name: "University of Oxford",
    country: "United Kingdom",
    banner: "https://images.unsplash.com/photo-1520214572569-0d593dc3f1f2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 98,
    programs: ["Philosophy", "Law", "Medicine"],
    international: 44,
    acceptance: 7
  },
  {
    name: "Harvard University",
    country: "United States",
    banner: "https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 93,
    programs: ["Business", "Law", "Medicine"],
    international: 25,
    acceptance: 5
  },
  {
    name: "University of Toronto",
    country: "Canada",
    banner: "https://images.unsplash.com/photo-1517935706615-2717063c2225?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 88,
    programs: ["Computer Science", "Engineering", "Medicine"],
    international: 27,
    acceptance: 43
  },
  {
    name: "Technical University of Munich",
    country: "Germany",
    banner: "https://images.unsplash.com/photo-1595666944516-bbb485958fb5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 85,
    programs: ["Engineering", "Computer Science", "Physics"],
    international: 38,
    acceptance: 20
  },
  {
    name: "University of Melbourne",
    country: "Australia",
    banner: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 84,
    programs: ["Medicine", "Engineering", "Arts"],
    international: 47,
    acceptance: 28
  },
  {
    name: "National University of Singapore",
    country: "Singapore",
    banner: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 90,
    programs: ["Computer Science", "Business", "Engineering"],
    international: 30,
    acceptance: 5
  },
  {
    name: "Imperial College London",
    country: "United Kingdom",
    banner: "https://images.unsplash.com/photo-1590396338557-9547024b8c50?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 92,
    programs: ["Engineering", "Medicine", "Science"],
    international: 55,
    acceptance: 14
  },
  {
    name: "Stanford University",
    country: "United States",
    banner: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 95,
    programs: ["Computer Science", "Engineering", "Business"],
    international: 23,
    acceptance: 4
  },
  {
    name: "McGill University",
    country: "Canada",
    banner: "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 83,
    programs: ["Medicine", "Law", "Arts"],
    international: 31,
    acceptance: 46
  },
  {
    name: "University of Amsterdam",
    country: "Netherlands",
    banner: "https://images.unsplash.com/photo-1534313314376-a5c6cd6b3c5f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 82,
    programs: ["Social Sciences", "Arts", "Science"],
    international: 36,
    acceptance: 32
  },
  {
    name: "University of Cambridge",
    country: "United Kingdom",
    banner: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 97,
    programs: ["Engineering", "Mathematics", "Natural Sciences"],
    international: 39,
    acceptance: 7
  },
  {
    name: "MIT",
    country: "United States",
    banner: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 96,
    programs: ["Engineering", "Computer Science", "Physics"],
    international: 33,
    acceptance: 4
  },
  {
    name: "University of Edinburgh",
    country: "United Kingdom",
    banner: "https://images.unsplash.com/photo-1555078644-37225537e0d2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 85,
    programs: ["Medicine", "Engineering", "Arts"],
    international: 45,
    acceptance: 17
  },
  {
    name: "University of British Columbia",
    country: "Canada",
    banner: "https://images.unsplash.com/photo-1503891617560-5b8c2e28cbf6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 84,
    programs: ["Environmental Science", "Business", "Engineering"],
    international: 30,
    acceptance: 52
  },
  {
    name: "Sciences Po",
    country: "France",
    banner: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 81,
    programs: ["Political Science", "International Relations", "Law"],
    international: 47,
    acceptance: 19
  },
  {
    name: "University of Hong Kong",
    country: "Hong Kong",
    banner: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 88,
    programs: ["Business", "Medicine", "Law"],
    international: 43,
    acceptance: 10
  },
  {
    name: "Tsinghua University",
    country: "China",
    banner: "https://images.unsplash.com/photo-1574169207511-e21a21c8075a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 89,
    programs: ["Engineering", "Computer Science", "Business"],
    international: 10,
    acceptance: 5
  },
  {
    name: "KU Leuven",
    country: "Belgium",
    banner: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 80,
    programs: ["Engineering", "Medicine", "Science"],
    international: 19,
    acceptance: 25
  },
  {
    name: "University of Sydney",
    country: "Australia",
    banner: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 83,
    programs: ["Medicine", "Engineering", "Business"],
    international: 42,
    acceptance: 30
  },
  {
    name: "Copenhagen Business School",
    country: "Denmark",
    banner: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 79,
    programs: ["Business", "Economics", "International Relations"],
    international: 33,
    acceptance: 35
  },
  {
    name: "Bocconi University",
    country: "Italy",
    banner: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 81,
    programs: ["Business", "Economics", "Finance"],
    international: 20,
    acceptance: 22
  },
  {
    name: "ESADE Business School",
    country: "Spain",
    banner: "https://images.unsplash.com/photo-1583422409516-2895a77efded?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 86,
    programs: ["Business", "Management", "Finance"],
    international: 38,
    acceptance: 24
  },
  {
    name: "University of Zurich",
    country: "Switzerland",
    banner: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 84,
    programs: ["Medicine", "Biology", "Economics"],
    international: 29,
    acceptance: 19
  },
  {
    name: "Duke University",
    country: "United States",
    banner: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 91,
    programs: ["Engineering", "Medicine", "Business"],
    international: 17,
    acceptance: 6
  },
  {
    name: "London School of Economics",
    country: "United Kingdom",
    banner: "https://images.unsplash.com/photo-1543015205-f56db322bb93?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 88,
    programs: ["Economics", "Political Science", "Law"],
    international: 71,
    acceptance: 9
  },
  {
    name: "Australian National University",
    country: "Australia",
    banner: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 82,
    programs: ["Political Science", "Engineering", "Science"],
    international: 36,
    acceptance: 35
  },
  {
    name: "Delft University of Technology",
    country: "Netherlands",
    banner: "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 83,
    programs: ["Engineering", "Architecture", "Technology"],
    international: 27,
    acceptance: 28
  },
  {
    name: "Seoul National University",
    country: "South Korea",
    banner: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 87,
    programs: ["Engineering", "Business", "Medicine"],
    international: 8,
    acceptance: 12
  },
  {
    name: "Trinity College Dublin",
    country: "Ireland",
    banner: "https://images.unsplash.com/photo-1590579491624-f98f36d14048?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 80,
    programs: ["Computer Science", "Medicine", "Law"],
    international: 23,
    acceptance: 31
  },
  {
    name: "Karolinska Institute",
    country: "Sweden",
    banner: "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 85,
    programs: ["Medicine", "Biomedicine", "Health Sciences"],
    international: 22,
    acceptance: 8
  },
  {
    name: "Peking University",
    country: "China",
    banner: "https://images.unsplash.com/photo-1574268602706-8abb9c4de6c7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 88,
    programs: ["Economics", "Law", "International Relations"],
    international: 15,
    acceptance: 6
  },
  {
    name: "University of Texas at Austin",
    country: "United States",
    banner: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 84,
    programs: ["Computer Science", "Engineering", "Business"],
    international: 11,
    acceptance: 29
  },
  {
    name: "University of Manchester",
    country: "United Kingdom",
    banner: "https://images.unsplash.com/photo-1535850117342-896d49f3e7f8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 81,
    programs: ["Engineering", "Computer Science", "Medicine"],
    international: 41,
    acceptance: 26
  },
  {
    name: "Monash University",
    country: "Australia",
    banner: "https://images.unsplash.com/photo-1488085061387-422e29b40080?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 79,
    programs: ["Medicine", "Engineering", "Business"],
    international: 44,
    acceptance: 40
  },
  {
    name: "Leiden University",
    country: "Netherlands",
    banner: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 78,
    programs: ["Law", "Medicine", "Humanities"],
    international: 18,
    acceptance: 33
  },
  {
    name: "Fudan University",
    country: "China",
    banner: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 86,
    programs: ["Economics", "Business", "International Relations"],
    international: 12,
    acceptance: 7
  },
  {
    name: "Warwick University",
    country: "United Kingdom",
    banner: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 82,
    programs: ["Business", "Economics", "Engineering"],
    international: 34,
    acceptance: 18
  },
  {
    name: "Technical University of Denmark",
    country: "Denmark",
    banner: "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 80,
    programs: ["Engineering", "Technology", "Science"],
    international: 21,
    acceptance: 27
  },
  {
    name: "IE University",
    country: "Spain",
    banner: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 83,
    programs: ["Business", "Law", "International Relations"],
    international: 73,
    acceptance: 31
  },
  {
    name: "Yonsei University",
    country: "South Korea",
    banner: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 84,
    programs: ["Business", "Engineering", "Medicine"],
    international: 13,
    acceptance: 15
  },
  {
    name: "University of Queensland",
    country: "Australia",
    banner: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 81,
    programs: ["Biotechnology", "Engineering", "Medicine"],
    international: 40,
    acceptance: 37
  },
  {
    name: "Humboldt University",
    country: "Germany",
    banner: "https://images.unsplash.com/photo-1533910534207-90f31029a78e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 79,
    programs: ["Philosophy", "Law", "Social Sciences"],
    international: 19,
    acceptance: 30
  },
  {
    name: "Nanyang Technological University",
    country: "Singapore",
    banner: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=800&h=300",
    match: 87,
    programs: ["Engineering", "Computer Science", "Business"],
    international: 32,
    acceptance: 11
  }
];

let filteredUniversities = [...universitiesData];

function renderUniversities() {
  const grid = document.querySelector('.university-grid');
  if (!grid) return;

  grid.innerHTML = '';

  filteredUniversities.forEach(function(uni, index) {
    const article = document.createElement('article');
    article.className = 'university-card';
    article.innerHTML = `
      <div class="university-banner" style="background-image: url('${uni.banner}')">
        <span class="match-badge">${uni.match}% match</span>
      </div>
      <div class="university-content">
        <div class="university-header">
          <h3>${uni.name}</h3>
          <p>${uni.country}</p>
        </div>
        <div class="university-info">
          <div class="info-row">
            <span>Strong programs</span>
            <strong>${uni.programs.join(', ')}</strong>
          </div>
          <div class="info-row">
            <span>International students</span>
            <strong>${uni.international}%</strong>
          </div>
          <div class="info-row">
            <span>Acceptance rate</span>
            <strong>${uni.acceptance}%</strong>
          </div>
        </div>
        <button class="university-action" onclick="showUniversityQuiz('${uni.name}')">Explore university <span id="uni-arrow-${index}"></span></button>
      </div>
    `;
    grid.appendChild(article);

    const arrowIcon = document.getElementById('uni-arrow-' + index);
    if (arrowIcon) {
      arrowIcon.innerHTML = icon('arrow', 18);
    }
  });
}

function applyFilters() {
  const search = document.getElementById('uni-search').value.toLowerCase();
  const location = document.getElementById('filter-location').value;
  const subject = document.getElementById('filter-subject').value;
  const acceptance = document.getElementById('filter-acceptance').value;

  filteredUniversities = universitiesData.filter(function(uni) {
    const matchesSearch = uni.name.toLowerCase().includes(search) ||
                         uni.country.toLowerCase().includes(search) ||
                         uni.programs.some(function(p) { return p.toLowerCase().includes(search); });

    const matchesLocation = !location || uni.country === location;

    const matchesSubject = !subject || uni.programs.some(function(p) {
      return p.toLowerCase().includes(subject.toLowerCase());
    });

    let matchesAcceptance = true;
    if (acceptance === 'low') matchesAcceptance = uni.acceptance < 10;
    else if (acceptance === 'medium') matchesAcceptance = uni.acceptance >= 10 && uni.acceptance <= 20;
    else if (acceptance === 'high') matchesAcceptance = uni.acceptance > 20;

    return matchesSearch && matchesLocation && matchesSubject && matchesAcceptance;
  });

  renderUniversities();

  if (filteredUniversities.length === 0) {
    const grid = document.querySelector('.university-grid');
    if (grid) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
          <h3 style="margin: 0 0 8px; font-size: 18px;">No universities found</h3>
          <p style="margin: 0; color: var(--muted); font-size: 13px;">Try adjusting your filters or search term.</p>
        </div>
      `;
    }
  }
}

function resetFilters() {
  document.getElementById('uni-search').value = '';
  document.getElementById('filter-location').value = '';
  document.getElementById('filter-subject').value = '';
  document.getElementById('filter-acceptance').value = '';
  filteredUniversities = [...universitiesData];
  renderUniversities();
}

function searchUniversitiesOverview() {
  const searchTerm = document.getElementById('uni-search-overview').value;
  if (searchTerm) {
    localStorage.setItem('university_search', searchTerm);
    window.location.href = 'universities.html';
  }
}

function showUniversityQuiz(universityName) {
  const modal = createModal(`
    <p class="eyebrow">Match assessment</p>
    <h2>${universityName}</h2>
    <p class="modal-lede">Answer a few questions to see your fit score, skill gaps, and what you need to strengthen your application.</p>
    <form id="uni-quiz-form" style="margin-top: 30px;">
      <div class="skill-question">
        <label>What attracts you most to ${universityName}?</label>
        <select required>
          <option value="" disabled selected>Choose one</option>
          <option>Academic reputation and rankings</option>
          <option>Specific programs and faculty</option>
          <option>Research facilities and opportunities</option>
          <option>Career services and alumni network</option>
          <option>Campus culture and location</option>
          <option>International environment</option>
        </select>
      </div>
      <div class="skill-question">
        <label>Your current academic standing</label>
        <div class="scale" data-group="academic">
          <button type="button" data-value="top5">Top 5%</button>
          <button type="button" data-value="top10">Top 10%</button>
          <button type="button" data-value="top25">Top 25%</button>
          <button type="button" data-value="average">Average</button>
        </div>
      </div>
      <div class="skill-question">
        <label>Have you taken standardized tests? (SAT, ACT, GRE, etc.)</label>
        <div class="scale" data-group="tests">
          <button type="button" data-value="yes-high">Yes, scored well</button>
          <button type="button" data-value="yes-avg">Yes, average score</button>
          <button type="button" data-value="scheduled">Scheduled</button>
          <button type="button" data-value="not-yet">Not yet</button>
        </div>
      </div>
      <div class="skill-question">
        <label>Extracurricular experience</label>
        <div class="mini-checks">
          <label class="checkbox"><input type="checkbox"> Leadership roles</label>
          <label class="checkbox"><input type="checkbox"> Volunteering</label>
          <label class="checkbox"><input type="checkbox"> Internships</label>
          <label class="checkbox"><input type="checkbox"> Research projects</label>
          <label class="checkbox"><input type="checkbox"> Competitions/awards</label>
          <label class="checkbox"><input type="checkbox"> Creative portfolio</label>
        </div>
      </div>
      <div class="skill-question">
        <label>Personal statement and essays</label>
        <div class="scale" data-group="essays">
          <button type="button" data-value="ready">Ready to submit</button>
          <button type="button" data-value="draft">Have drafts</button>
          <button type="button" data-value="started">Just started</button>
          <button type="button" data-value="notyet">Haven't started</button>
        </div>
      </div>
      <div class="skill-question">
        <label>Letters of recommendation status</label>
        <div class="scale" data-group="letters">
          <button type="button" data-value="secured">All secured</button>
          <button type="button" data-value="some">Some confirmed</button>
          <button type="button" data-value="planning">Planning who to ask</button>
          <button type="button" data-value="unsure">Unsure</button>
        </div>
      </div>
      <div class="skill-question">
        <label>English proficiency (if applicable)</label>
        <div class="scale" data-group="english">
          <button type="button" data-value="native">Native speaker</button>
          <button type="button" data-value="certified">Certified (TOEFL/IELTS)</button>
          <button type="button" data-value="fluent">Fluent, not certified</button>
          <button type="button" data-value="learning">Still learning</button>
        </div>
      </div>
      <div class="skill-question">
        <label>Financial planning for studies</label>
        <div class="scale" data-group="financial">
          <button type="button" data-value="ready">Fully prepared</button>
          <button type="button" data-value="applying">Applying for aid/scholarships</button>
          <button type="button" data-value="researching">Researching options</button>
          <button type="button" data-value="unsure">Need guidance</button>
        </div>
      </div>
      <div class="skill-question">
        <label>Application timeline awareness</label>
        <div class="scale" data-group="timeline">
          <button type="button" data-value="clear">Clear on all deadlines</button>
          <button type="button" data-value="some">Know main deadlines</button>
          <button type="button" data-value="general">General idea</button>
          <button type="button" data-value="confused">Need clarification</button>
        </div>
      </div>
      <div class="modal-actions">
        <button type="button" class="secondary-button" onclick="closeModal(this)">Cancel</button>
        <button type="submit" class="primary-button">Get my results ${icon('arrow', 18)}</button>
      </div>
    </form>
  `, true);

  document.body.appendChild(modal);

  const form = document.getElementById('uni-quiz-form');

  form.querySelectorAll('.scale button').forEach(function(button) {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const scale = this.closest('.scale');
      const group = scale.getAttribute('data-group');

      scale.querySelectorAll('button').forEach(function(btn) {
        btn.classList.remove('selected');
      });

      this.classList.add('selected');
    });
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    closeModal(e.target);
    showUniversityResults(universityName);
  });
}

function showUniversityResults(universityName) {
  const fitScore = Math.floor(Math.random() * 15) + 80;

  const modal = createModal(`
    <p class="eyebrow">Your match results</p>
    <h2>${universityName}</h2>
    <div style="display: flex; align-items: center; gap: 20px; padding: 24px; background: var(--silver-light); border-radius: 3px; margin: 20px 0;">
      <div class="score-ring" style="width: 70px; height: 70px; border-width: 5px;">
        <strong style="font-size: 20px;">${fitScore}</strong>
        <span style="font-size: 10px;">%</span>
      </div>
      <div>
        <strong style="display: block; font-size: 16px; margin-bottom: 4px;">Strong match</strong>
        <p style="margin: 0; color: var(--muted); font-size: 12px;">Your profile aligns well with this university's requirements and culture.</p>
      </div>
    </div>
    <div style="margin-top: 30px;">
      <h3 style="margin: 0 0 16px; font-size: 16px;">Your strengths</h3>
      <div style="display: grid; gap: 10px;">
        <div style="display: flex; gap: 10px; align-items: flex-start;">
          ${icon('check', 18)}
          <span style="font-size: 13px; line-height: 1.6;">Academic performance is competitive for this program</span>
        </div>
        <div style="display: flex; gap: 10px; align-items: flex-start;">
          ${icon('check', 18)}
          <span style="font-size: 13px; line-height: 1.6;">Strong extracurricular profile shows leadership potential</span>
        </div>
      </div>
    </div>
    <div style="margin-top: 24px;">
      <h3 style="margin: 0 0 16px; font-size: 16px;">Areas to strengthen</h3>
      <div style="display: grid; gap: 10px;">
        <div style="display: flex; gap: 10px; align-items: flex-start;">
          <span style="color: var(--blue); flex-shrink: 0;">${icon('arrow', 18)}</span>
          <span style="font-size: 13px; line-height: 1.6;">Add one more research or internship experience</span>
        </div>
        <div style="display: flex; gap: 10px; align-items: flex-start;">
          <span style="color: var(--blue); flex-shrink: 0;">${icon('arrow', 18)}</span>
          <span style="font-size: 13px; line-height: 1.6;">Consider standardized test preparation if required</span>
        </div>
      </div>
    </div>
    <div class="analysis-note" style="margin-top: 24px;">
      ${loopy(true)}
      <span><strong>Recommended next steps</strong>Book a session with a counselor who studied at ${universityName} to get insider advice on the application process.</span>
    </div>
    <div class="modal-actions">
      <button class="secondary-button" onclick="closeModal(this)">Close</button>
      <a href="pricing.html" class="primary-button">Book counselor session ${icon('arrow', 18)}</a>
    </div>
  `, true);

  document.body.appendChild(modal);
}

document.addEventListener('DOMContentLoaded', function() {
  renderUniversities();
  renderOverviewUniversities();
  renderSponsoredSections();

  const savedSearch = localStorage.getItem('university_search');
  if (savedSearch) {
    const searchInput = document.getElementById('uni-search');
    if (searchInput) {
      searchInput.value = savedSearch;
      localStorage.removeItem('university_search');
      applyFilters();
    }
  }

  const searchIcon = document.getElementById('search-icon');
  if (searchIcon) {
    searchIcon.innerHTML = icon('search', 20);
  }

  const searchIconOverview = document.getElementById('search-icon-overview');
  if (searchIconOverview) {
    searchIconOverview.innerHTML = icon('search', 20);
  }

  const uniSearchInput = document.getElementById('uni-search');
  if (uniSearchInput) {
    uniSearchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        applyFilters();
      }
    });
  }

  const uniSearchOverview = document.getElementById('uni-search-overview');
  if (uniSearchOverview) {
    uniSearchOverview.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        searchUniversitiesOverview();
      }
    });
  }
});

function renderOverviewUniversities() {
  const grid = document.getElementById('university-preview-grid');
  if (!grid) return;

  const topThree = universitiesData.slice(0, 3);

  topThree.forEach(function(uni, index) {
    const article = document.createElement('article');
    article.className = 'university-card';
    article.innerHTML = `
      <div class="university-banner" style="background-image: url('${uni.banner}')">
        <span class="match-badge">${uni.match}% match</span>
      </div>
      <div class="university-content">
        <div class="university-header">
          <h3>${uni.name}</h3>
          <p>${uni.country}</p>
        </div>
        <div class="university-info">
          <div class="info-row">
            <span>Strong programs</span>
            <strong>${uni.programs.slice(0, 2).join(', ')}</strong>
          </div>
          <div class="info-row">
            <span>Acceptance rate</span>
            <strong>${uni.acceptance}%</strong>
          </div>
        </div>
        <button class="university-action" onclick="showUniversityQuiz('${uni.name}')">Explore university <span id="uni-arrow-overview-${index}"></span></button>
      </div>
    `;
    grid.appendChild(article);

    const arrowIcon = document.getElementById('uni-arrow-overview-' + index);
    if (arrowIcon) {
      arrowIcon.innerHTML = icon('arrow', 18);
    }
  });
}

function renderSponsoredSections() {
  renderSponsoredPopular();
  renderSponsoredBusiness();
  renderSponsoredMedicine();

  const businessArrow = document.getElementById('arrow-icon-business');
  if (businessArrow) {
    businessArrow.innerHTML = icon('arrow', 18);
  }

  const medicineArrow = document.getElementById('arrow-icon-medicine');
  if (medicineArrow) {
    medicineArrow.innerHTML = icon('arrow', 18);
  }
}

function renderSponsoredPopular() {
  const grid = document.getElementById('sponsored-popular-grid');
  if (!grid) return;

  const popular = [
    universitiesData.find(u => u.name === 'Harvard University'),
    universitiesData.find(u => u.name === 'Stanford University'),
    universitiesData.find(u => u.name === 'University of Oxford')
  ];

  popular.forEach(function(uni, index) {
    if (!uni) return;
    const article = document.createElement('article');
    article.className = 'university-card';
    article.innerHTML = `
      <div class="university-banner" style="background-image: url('${uni.banner}')">
        <span class="match-badge" style="background: var(--blue);">Sponsored</span>
      </div>
      <div class="university-content">
        <div class="university-header">
          <h3>${uni.name}</h3>
          <p>${uni.country}</p>
        </div>
        <div class="university-info">
          <div class="info-row">
            <span>Strong programs</span>
            <strong>${uni.programs.slice(0, 2).join(', ')}</strong>
          </div>
          <div class="info-row">
            <span>Acceptance rate</span>
            <strong>${uni.acceptance}%</strong>
          </div>
        </div>
        <button class="university-action" onclick="showUniversityQuiz('${uni.name}')">Explore university <span id="uni-arrow-popular-${index}"></span></button>
      </div>
    `;
    grid.appendChild(article);

    const arrowIcon = document.getElementById('uni-arrow-popular-' + index);
    if (arrowIcon) {
      arrowIcon.innerHTML = icon('arrow', 18);
    }
  });
}

function renderSponsoredBusiness() {
  const grid = document.getElementById('sponsored-business-grid');
  if (!grid) return;

  const business = universitiesData.filter(u =>
    u.programs.some(p => p.toLowerCase().includes('business') || p.toLowerCase().includes('economics'))
  ).slice(0, 3);

  business.forEach(function(uni, index) {
    const article = document.createElement('article');
    article.className = 'university-card';
    article.innerHTML = `
      <div class="university-banner" style="background-image: url('${uni.banner}')">
        <span class="match-badge" style="background: var(--blue);">Sponsored</span>
      </div>
      <div class="university-content">
        <div class="university-header">
          <h3>${uni.name}</h3>
          <p>${uni.country}</p>
        </div>
        <div class="university-info">
          <div class="info-row">
            <span>Strong programs</span>
            <strong>${uni.programs.slice(0, 2).join(', ')}</strong>
          </div>
          <div class="info-row">
            <span>Acceptance rate</span>
            <strong>${uni.acceptance}%</strong>
          </div>
        </div>
        <button class="university-action" onclick="showUniversityQuiz('${uni.name}')">Explore university <span id="uni-arrow-business-${index}"></span></button>
      </div>
    `;
    grid.appendChild(article);

    const arrowIcon = document.getElementById('uni-arrow-business-' + index);
    if (arrowIcon) {
      arrowIcon.innerHTML = icon('arrow', 18);
    }
  });
}

function renderSponsoredMedicine() {
  const grid = document.getElementById('sponsored-medicine-grid');
  if (!grid) return;

  const medicine = universitiesData.filter(u =>
    u.programs.some(p => p.toLowerCase().includes('medicine') || p.toLowerCase().includes('health'))
  ).slice(0, 3);

  medicine.forEach(function(uni, index) {
    const article = document.createElement('article');
    article.className = 'university-card';
    article.innerHTML = `
      <div class="university-banner" style="background-image: url('${uni.banner}')">
        <span class="match-badge" style="background: var(--blue);">Sponsored</span>
      </div>
      <div class="university-content">
        <div class="university-header">
          <h3>${uni.name}</h3>
          <p>${uni.country}</p>
        </div>
        <div class="university-info">
          <div class="info-row">
            <span>Strong programs</span>
            <strong>${uni.programs.slice(0, 2).join(', ')}</strong>
          </div>
          <div class="info-row">
            <span>Acceptance rate</span>
            <strong>${uni.acceptance}%</strong>
          </div>
        </div>
        <button class="university-action" onclick="showUniversityQuiz('${uni.name}')">Explore university <span id="uni-arrow-medicine-${index}"></span></button>
      </div>
    `;
    grid.appendChild(article);

    const arrowIcon = document.getElementById('uni-arrow-medicine-' + index);
    if (arrowIcon) {
      arrowIcon.innerHTML = icon('arrow', 18);
    }
  });
}
