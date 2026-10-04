let currentStep = 1;
const totalSteps = 5;
const signupData = {};

function updateProgress() {
  const progressBars = document.querySelectorAll('.progress span:not(small)');
  const progressText = document.querySelector('.progress small');

  progressBars.forEach(function(bar, index) {
    bar.classList.toggle('active', index < currentStep);
  });

  if (progressText) {
    progressText.textContent = 'Step ' + currentStep + ' of ' + totalSteps;
  }
}

function nextStep() {
  collectStepData(currentStep);

  if (currentStep < totalSteps) {
    currentStep++;
    updateProgress();
    renderStep();
  } else {
    registerUser();
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    updateProgress();
    renderStep();
  }
}

function collectStepData(step) {
  const form = document.getElementById('signup-form');

  if (step === 1) {
    signupData.firstName = form.querySelector('[name="firstname"]')?.value.trim() || '';
    signupData.lastName = form.querySelector('[name="lastname"]')?.value.trim() || '';
    signupData.email = form.querySelector('[name="email"]')?.value.trim().toLowerCase() || '';
    signupData.password = form.querySelector('[name="password"]')?.value || '';
    signupData.grade = form.querySelector('[name="grade"]')?.value || '';
    signupData.country = form.querySelector('[name="country"]')?.value.trim() || '';
  } else if (step === 2) {
    signupData.interests = Array.from(document.querySelectorAll('.interest-btn.selected')).map(btn => btn.textContent);
    signupData.certainty = form.querySelector('select')?.value || '';
  } else if (step === 3) {
    signupData.satisfyingActivity = form.querySelectorAll('select')[0]?.value || '';
    signupData.workStyle = document.querySelector('.scale button.selected')?.textContent || '';
    signupData.careerValues = Array.from(form.querySelectorAll('.checkbox input:checked')).map(cb => cb.nextSibling.textContent.trim());
    signupData.studyLocation = form.querySelectorAll('select')[1]?.value || '';
  } else if (step === 4) {
    const scales = form.querySelectorAll('.scale');
    signupData.speakingConfidence = scales[0]?.querySelector('.selected')?.textContent || '';
    signupData.writingConfidence = scales[1]?.querySelector('.selected')?.textContent || '';
    signupData.planningConfidence = scales[2]?.querySelector('.selected')?.textContent || '';
    signupData.experience = Array.from(form.querySelectorAll('.checkbox input:checked')).map(cb => cb.nextSibling.textContent.trim());
  } else if (step === 5) {
    signupData.academicAverage = form.querySelectorAll('select')[0]?.value || '';
    signupData.weeklyTime = form.querySelectorAll('select')[1]?.value || '';
    signupData.biggestObstacle = form.querySelectorAll('select')[2]?.value || '';
    signupData.skillToBuild = form.querySelectorAll('select')[3]?.value || '';
  }
}

function registerUser() {
  if (!signupData.email || !signupData.password || !signupData.firstName || !signupData.lastName) {
    alert('Please complete all required fields in step 1.');
    currentStep = 1;
    updateProgress();
    renderStep();
    return;
  }

  const result = AUTH.register(signupData.email, signupData.password, signupData.firstName, signupData.lastName);

  if (result.success) {
    AUTH.login(signupData.email, signupData.password);
    AUTH.updateUser({ profileData: signupData });

    window.location.href = 'index.html';
  } else {
    alert(result.error);
    currentStep = 1;
    updateProgress();
    renderStep();
  }
}

function renderStep() {
  const form = document.getElementById('signup-form');
  const stepContent = getStepContent(currentStep);
  form.innerHTML = stepContent;

  document.querySelectorAll('[id^="arrow-icon"]').forEach(function(el) {
    el.innerHTML = icon('arrow', 18);
  });

  document.querySelectorAll('[id^="check-icon"]').forEach(function(el) {
    el.innerHTML = icon('check', 15);
  });

  restoreStepData(currentStep);
}

function restoreStepData(step) {
  const form = document.getElementById('signup-form');

  if (step === 1) {
    if (signupData.firstName) form.querySelector('[name="firstname"]').value = signupData.firstName;
    if (signupData.lastName) form.querySelector('[name="lastname"]').value = signupData.lastName;
    if (signupData.email) form.querySelector('[name="email"]').value = signupData.email;
    if (signupData.grade) form.querySelector('[name="grade"]').value = signupData.grade;
    if (signupData.country) form.querySelector('[name="country"]').value = signupData.country;
  }
}

function getStepContent(step) {
  const steps = {
    1: `
      <p class="eyebrow">First, the essentials</p>
      <h2>Tell us about you.</h2>
      <p class="form-intro">This helps us shape recommendations around your current stage.</p>
      <div class="field-row">
        <label>First name<input required placeholder="Alex" autofocus name="firstname"></label>
        <label>Last name<input required placeholder="Morgan" name="lastname"></label>
      </div>
      <label>Email address<input required type="email" placeholder="alex@email.com" name="email"></label>
      <label>Password<input required type="password" placeholder="Create a password" name="password" minlength="6"></label>
      <div class="field-row">
        <label>Current grade<select required name="grade"><option value="" disabled selected>Select grade</option><option>Grade 9</option><option>Grade 10</option><option>Grade 11</option><option>Grade 12</option></select></label>
        <label>Country<input required placeholder="Your country" name="country"></label>
      </div>
      <button class="primary-button full" type="button" onclick="nextStep()">Continue <span id="arrow-icon-1"></span></button>
      <p class="switch">Already have an account? <a href="login.html">Log in</a></p>
    `,
    2: `
      <p class="eyebrow">Your direction</p>
      <h2>What draws you in?</h2>
      <p class="form-intro">There are no wrong answers. Choose the areas you would genuinely like to explore.</p>
      <label>Fields that interest you</label>
      <div class="choice-grid">
        <button type="button" class="interest-btn"><span id="check-icon-1"></span>Technology & AI</button>
        <button type="button" class="interest-btn"><span id="check-icon-2"></span>Medicine & Health</button>
        <button type="button" class="interest-btn"><span id="check-icon-3"></span>Business</button>
        <button type="button" class="interest-btn"><span id="check-icon-4"></span>Arts & Design</button>
        <button type="button" class="interest-btn"><span id="check-icon-5"></span>Law & Policy</button>
        <button type="button" class="interest-btn"><span id="check-icon-6"></span>Science & Research</button>
        <button type="button" class="interest-btn"><span id="check-icon-7"></span>I'm not sure yet</button>
      </div>
      <label>How certain do you feel about your future subject?<select><option selected>I'm exploring</option><option>I have two or three ideas</option><option>I'm fairly certain</option><option>I know exactly what I want</option></select></label>
      <div class="form-actions">
        <button class="secondary-button" type="button" onclick="prevStep()">Back</button>
        <button class="primary-button" type="button" onclick="nextStep()">Continue <span id="arrow-icon-2"></span></button>
      </div>
    `,
    3: `
      <p class="eyebrow">What energizes you</p>
      <h2>How do you like to learn?</h2>
      <p class="form-intro">If your destination is unclear, your preferred way of working can still point us in the right direction.</p>
      <div class="skill-question">
        <label>Which activity sounds most satisfying?</label>
        <select><option value="" disabled selected>Choose one</option><option>Solving a difficult puzzle</option><option>Helping someone feel better</option><option>Making or designing something</option><option>Leading a team toward a goal</option><option>Researching why something happens</option><option>I'm not sure yet</option></select>
      </div>
      <div class="skill-question">
        <label>Your ideal working day has more...</label>
        <div class="scale">
          <button type="button">People</button>
          <button type="button">Ideas</button>
          <button type="button">Numbers</button>
          <button type="button">Making</button>
        </div>
      </div>
      <div class="skill-question">
        <label>What matters most in a future career?</label>
        <div class="mini-checks">
          <label class="checkbox"><input type="checkbox"> Positive impact</label>
          <label class="checkbox"><input type="checkbox"> Creativity</label>
          <label class="checkbox"><input type="checkbox"> Stability</label>
          <label class="checkbox"><input type="checkbox"> High income</label>
          <label class="checkbox"><input type="checkbox"> Discovery</label>
          <label class="checkbox"><input type="checkbox"> Flexibility</label>
        </div>
      </div>
      <label>Where would you like to study?<select><option selected>Open to exploring</option><option>United States</option><option>United Kingdom</option><option>Europe</option><option>Canada</option><option>Asia-Pacific</option></select></label>
      <div class="form-actions">
        <button class="secondary-button" type="button" onclick="prevStep()">Back</button>
        <button class="primary-button" type="button" onclick="nextStep()">Continue <span id="arrow-icon-3"></span></button>
      </div>
    `,
    4: `
      <p class="eyebrow">Skill gap analysis</p>
      <h2>Where are you today?</h2>
      <p class="form-intro">Rate your current confidence. This is a starting point, not a score — Loopy promises not to judge.</p>
      <div class="skill-question">
        <label>How confident are you speaking to a group?</label>
        <div class="scale">
          <button type="button">Not yet</button>
          <button type="button">A little</button>
          <button type="button">Comfortable</button>
          <button type="button">Very</button>
        </div>
      </div>
      <div class="skill-question">
        <label>How confident are you with research and academic writing?</label>
        <div class="scale">
          <button type="button">Not yet</button>
          <button type="button">A little</button>
          <button type="button">Comfortable</button>
          <button type="button">Very</button>
        </div>
      </div>
      <div class="skill-question">
        <label>How confident are you planning deadlines independently?</label>
        <div class="scale">
          <button type="button">Not yet</button>
          <button type="button">A little</button>
          <button type="button">Comfortable</button>
          <button type="button">Very</button>
        </div>
      </div>
      <div class="skill-question">
        <label>What have you already tried?</label>
        <div class="mini-checks">
          <label class="checkbox"><input type="checkbox"> Volunteering</label>
          <label class="checkbox"><input type="checkbox"> Club leadership</label>
          <label class="checkbox"><input type="checkbox"> Internship</label>
          <label class="checkbox"><input type="checkbox"> Personal project</label>
        </div>
      </div>
      <div class="form-actions">
        <button class="secondary-button" type="button" onclick="prevStep()">Back</button>
        <button class="primary-button" type="button" onclick="nextStep()">Continue <span id="arrow-icon-4"></span></button>
      </div>
    `,
    5: `
      <p class="eyebrow">Your practical picture</p>
      <h2>What should we plan around?</h2>
      <p class="form-intro">These details keep recommendations realistic, useful and truly yours.</p>
      <div class="field-row">
        <label>Current academic average<select><option value="" disabled selected>Select range</option><option>Top 10%</option><option>Above average</option><option>Average</option><option>Still improving</option><option>Prefer not to say</option></select></label>
        <label>Weekly time available<select><option value="" disabled selected>Select time</option><option>1–2 hours</option><option>3–5 hours</option><option>6–10 hours</option><option>10+ hours</option></select></label>
      </div>
      <div class="skill-question">
        <label>What feels like your biggest obstacle right now?</label>
        <select><option value="" disabled selected>Choose one</option><option>I don't know what to study</option><option>I need stronger grades</option><option>I need more experience</option><option>I'm unsure where to apply</option><option>Tests and essays feel overwhelming</option><option>Cost and scholarships</option></select>
      </div>
      <div class="skill-question">
        <label>Which skill would you most like to build first?</label>
        <select><option value="" disabled selected>Choose a priority</option><option>Leadership</option><option>Academic writing</option><option>Teamwork</option><option>Technical experience</option><option>Time management</option><option>Career confidence</option></select>
      </div>
      <div class="analysis-note">
        ${loopy(true)}
        <span><strong>Loopy is connecting the dots</strong>We'll compare your goals, confidence and experience with best-fit pathways — including exploration routes if you're still unsure.</span>
      </div>
      <div class="form-actions">
        <button class="secondary-button" type="button" onclick="prevStep()">Back</button>
        <button class="primary-button" type="button" onclick="nextStep()">Build my path <span id="arrow-icon-5"></span></button>
      </div>
    `
  };

  return steps[step] || steps[1];
}

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('interest-btn') || e.target.closest('.interest-btn')) {
    const btn = e.target.classList.contains('interest-btn') ? e.target : e.target.closest('.interest-btn');
    btn.classList.toggle('selected');
  }

  if (e.target.closest('.scale button')) {
    const btn = e.target.closest('button');
    const scale = btn.closest('.scale');
    scale.querySelectorAll('button').forEach(function(b) {
      b.classList.remove('selected');
    });
    btn.classList.add('selected');
  }
});
