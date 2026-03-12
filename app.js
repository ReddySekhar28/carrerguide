// State variables
let currentUser = null;

// DOM Elements
const views = {
    auth: document.getElementById('view-auth'),
    dashboard: document.getElementById('view-dashboard'),
    match: document.getElementById('view-match'),
    resources: document.getElementById('view-resources'),
    prospects: document.getElementById('view-prospects')
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    
    // Check if user is theoretically logged in (Mock for now)
    const storedUser = localStorage.getItem('skillsync_user');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        navigateTo('dashboard');
    }
});

function initParticles() {
    if (window.particlesJS) {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.2, "random": false },
                "size": { "value": 2, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.1, "width": 1 },
                "move": { "enable": true, "speed": 1, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.3 } }, "push": { "particles_nb": 4 } }
            },
            "retina_detect": true
        });
    }
}

// --- Utility Functions ---
function switchAuthTab(tabId) {
    // Update tabs
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(`tab-${tabId}`).classList.add('active');

    // Update forms
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    document.getElementById(`form-${tabId}`).classList.add('active');
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    
    // Reset classes
    toast.className = 'toast';
    toast.classList.add(type, 'show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function navigateTo(viewName) {
    // Progress tracker visibility
    const progress = document.getElementById('global-progress');
    if (viewName === 'auth') {
        progress.classList.add('hidden');
    } else {
        progress.classList.remove('hidden');
        updateProgressTracker(viewName);
    }

    // Hide all views
    Object.values(views).forEach(view => {
        if(view) {
            view.classList.remove('active');
            view.classList.add('hidden');
        }
    });

    // Show target view
    if (views[viewName]) {
        views[viewName].classList.remove('hidden');
        views[viewName].classList.add('active');
        
        // Trigger specific view initializations
        if (viewName === 'dashboard') {
            initDashboard();
        }
    }
}

function updateProgressTracker(viewName) {
    const steps = document.querySelectorAll('.progress-step');
    let foundActive = false;
    
    steps.forEach(step => {
        const stepView = step.getAttribute('data-step');
        step.classList.remove('active', 'completed');
        
        if (stepView === viewName) {
            step.classList.add('active');
            foundActive = true;
        } else if (!foundActive) {
            step.classList.add('completed');
        }
    });
}

// --- Authentication Operations (MOCK) ---
function handleAuth(event, type) {
    event.preventDefault();
    
    // Standard email/pass login
    if (type === 'login') {
        const email = document.getElementById('login-email').value;
        const pass = document.getElementById('login-password').value;
        
        if (email && pass) {
            proceedWithLogin({ email, name: email.split('@')[0], type: 'email' });
        } else {
            showToast('Please enter credentials', 'error');
        }
    } else {
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const pass = document.getElementById('signup-password').value;

        if (name && email && pass) {
            proceedWithLogin({ email, name, type: 'email' });
        } else {
            showToast('Please fill all fields', 'error');
        }
    }
}

function handleGoogleSignIn() {
    // Mocking Google Sign In
    showToast('Redirecting to Google...', 'info');
    setTimeout(() => {
        proceedWithLogin({ 
            email: 'user@gmail.com', 
            name: 'Demo User',
            type: 'google'
        });
    }, 1000);
}

function proceedWithLogin(userProfile) {
    currentUser = {
        ...userProfile,
        learnedSkills: {}, // Stores skillId -> proficiency ("Beginner" | "Moderate" | "Advanced")
        selectedJobId: null
    };
    
    localStorage.setItem('skillsync_user', JSON.stringify(currentUser));
    showToast(`Welcome back, ${currentUser.name}!`, 'success');
    navigateTo('dashboard');
}

function logout() {
    currentUser = null;
    localStorage.removeItem('skillsync_user');
    navigateTo('auth');
    showToast('Logged out successfully', 'info');
}

// Dashboard State
let pendingSkillId = null;

function initDashboard() {
    // Set user info
    document.getElementById('nav-user-name').textContent = currentUser.name;
    
    renderSkillsGrid();
    renderLearnedSkills();
    populateJobRoles();
    checkStartButtonState();
}

function renderSkillsGrid() {
    const grid = document.getElementById('skills-grid');
    grid.innerHTML = '';

    APP_DATA.skills.forEach(skill => {
        const level = currentUser.learnedSkills[skill.id]; // Might be undefined
        
        const btn = document.createElement('button');
        let className = 'skill-btn';
        if (level) {
            className += ` selected badge-${level.toLowerCase()}`;
        }
        btn.className = className;
        
        btn.innerHTML = `
            ${skill.name}
            ${level ? '<i class="fa-solid fa-check"></i>' : '<i class="fa-solid fa-plus"></i>'}
        `;
        
        btn.onclick = () => openProficiencyModal(skill.id);
        grid.appendChild(btn);
    });
}

function renderLearnedSkills() {
    const list = document.getElementById('learned-skills-list');
    const learnedIds = Object.keys(currentUser.learnedSkills);
    
    if (learnedIds.length === 0) {
        list.innerHTML = '<p class="empty-state w-100">No skills added yet.</p>';
        return;
    }

    list.innerHTML = '';
    learnedIds.forEach(id => {
        const skill = APP_DATA.skills.find(s => s.id === id);
        const level = currentUser.learnedSkills[id]; // Beginner, Moderate, Advanced
        
        const badgeClass = `badge-${level.toLowerCase()}`;
        
        const btn = document.createElement('button');
        // We reuse skill-btn for shape/sizing, and badgeClass for colors
        btn.className = `skill-btn learned-skill-btn ${badgeClass}`;
        // Title helps the user see it's editable
        btn.title = "Click to edit proficiency";
        btn.innerHTML = `
            ${skill.name} <span style="font-size: 0.7rem; opacity: 0.8; margin-left: 4px;">(${level})</span> 
            <i class="fa-solid fa-pencil" style="font-size: 0.8rem; margin-left: 4px;"></i>
        `;
        
        btn.onclick = () => openProficiencyModal(skill.id);
        
        list.appendChild(btn);
    });
}

function populateJobRoles() {
    const select = document.getElementById('job-role');
    select.innerHTML = '<option value="" disabled selected>-- Choose a Role --</option>';

    APP_DATA.jobRoles.forEach(role => {
        const option = document.createElement('option');
        option.value = role.id;
        option.textContent = role.title;
        if (currentUser.selectedJobId === role.id) {
            option.selected = true;
        }
        select.appendChild(option);
    });
    
    // Initial check in case it's loaded with a pre-selection
    handleJobRoleChange(false);
}

function handleJobRoleChange(save = true) {
    const select = document.getElementById('job-role');
    if (!select.value) return;
    
    currentUser.selectedJobId = select.value;
    if (save) saveUser();
    
    checkStartButtonState();
    renderJobPreview();
}

// (Job preview rendering removed to match UI requirement)
function renderJobPreview() {
    // No-op as requested by user to remove job preview below dropdown
}

function checkStartButtonState() {
    const btn = document.getElementById('start-career-btn');
    if (currentUser.selectedJobId) {
        btn.classList.remove('disabled');
    } else {
        btn.classList.add('disabled');
    }
}

// --- Modal Operations ---
function openProficiencyModal(skillId) {
    pendingSkillId = skillId;
    const skill = APP_DATA.skills.find(s => s.id === skillId);
    document.getElementById('modal-skill-name').textContent = skill.name;
    
    const modal = document.getElementById('proficiency-modal');
    modal.classList.remove('hidden'); // Ensure it's not display:none
    setTimeout(() => modal.classList.add('active'), 10); // Fade in
}

function closeModal() {
    const modal = document.getElementById('proficiency-modal');
    modal.classList.remove('active');
    setTimeout(() => modal.classList.add('hidden'), 300); // Wait for transition then display:none
    pendingSkillId = null;
}

function selectProficiency(level) {
    if (pendingSkillId) {
        // Update user state
        currentUser.learnedSkills[pendingSkillId] = level;
        saveUser();
        
        // Update UI
        renderSkillsGrid();
        renderLearnedSkills();
        showToast(`Skill updated!`, 'success');
    }
    closeModal();
}

function saveUser() {
    localStorage.setItem('skillsync_user', JSON.stringify(currentUser));
}

// --- Career Analysis & Results ---
const LEVEL_VALUES = { 'Beginner': 1, 'Moderate': 2, 'Advanced': 3 };

// --- Multi-Page Nav & Logic ---
let currentMissingSkills = [];
let simulatedExtraScore = 0;

function goToMatch() {
    if (!currentUser.selectedJobId) return;
    showToast('Analyzing career match...', 'info');
    calculateAndRenderMatch();
    setTimeout(() => {
        navigateTo('match');
        setTimeout(animateScore, 100);
    }, 600);
}

function calculateAndRenderMatch() {
    const role = APP_DATA.jobRoles.find(r => r.id === currentUser.selectedJobId);
    if (!role) return;

    document.getElementById('match-role-title').innerHTML = `Role: <strong>${role.title}</strong>`;

    let totalRequiredScore = 0;
    let userEarnedScore = 0;
    currentMissingSkills = []; // Reset global

    for (const [skillId, requiredLevel] of Object.entries(role.requiredSkills)) {
        const targetVal = LEVEL_VALUES[requiredLevel];
        totalRequiredScore += targetVal;

        const userLevel = currentUser.learnedSkills[skillId];
        const userVal = userLevel ? LEVEL_VALUES[userLevel] : 0;

        userEarnedScore += Math.min(userVal, targetVal);

        if (userVal < targetVal) {
            currentMissingSkills.push({
                skillId: skillId,
                current: userLevel || 'None',
                target: requiredLevel,
                gapValue: targetVal - userVal // How much score they miss out on
            });
        }
    }

    // Calculate Base Percentage
    currentUser.baseMatchScore = Math.round((userEarnedScore / totalRequiredScore) * 100);
    currentUser.totalRequiredScore = totalRequiredScore;
    
    renderMatchMissingSkills();
}

function renderMatchMissingSkills() {
    const list = document.getElementById('match-missing-skills');
    list.innerHTML = '';

    if (currentMissingSkills.length === 0) {
        list.innerHTML = `
            <div class="empty-state text-success" style="padding: 2rem;">
                <i class="fa-solid fa-award fa-3x mb-1"></i><br>
                You are 100% job-ready for this role based on your skills!
            </div>`;
        return;
    }

    currentMissingSkills.forEach(gap => {
        const skillDef = APP_DATA.skills.find(s => s.id === gap.skillId);
        const gapCard = document.createElement('div');
        gapCard.className = 'gap-card clickable-card';
        gapCard.title = "Click to view learning resources for this skill";
        gapCard.onclick = () => goToResources(gap.skillId);
        
        const matchIncrease = Math.round((gap.gapValue / currentUser.totalRequiredScore) * 100);
        
        gapCard.innerHTML = `
            <div class="gap-header" style="margin-bottom: 0;">
                <div>
                   <h4 style="margin: 0; display: inline-block;">${skillDef.name}</h4>
                   <span class="text-accent text-sm" style="margin-left: 8px;">(+${matchIncrease}% Match)</span>
                </div>
                <div class="gap-levels">
                    <span class="bad">Current: ${gap.current}</span>
                    <i class="fa-solid fa-arrow-right text-secondary"></i>
                    <span class="good">Target: ${gap.target}</span>
                </div>
            </div>
        `;
        list.appendChild(gapCard);
    });
}

function animateScore() {
    const score = currentUser.baseMatchScore || 0;
    const path = document.getElementById('score-path');
    const text = document.getElementById('match-score-text');
    
    path.setAttribute('stroke-dasharray', `${score}, 100`);
    
    let current = 0;
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / (score || 1)), 10);
    
    if (score === 0) {
        text.textContent = '0%';
        path.style.stroke = "var(--error)";
        return;
    }

    const timer = setInterval(() => {
        if (current >= score) {
            clearInterval(timer);
            current = score;
            if(score >= 80) path.style.stroke = "var(--success)";
            else if(score >= 50) path.style.stroke = "var(--warning)";
            else path.style.stroke = "var(--error)";
        }
        text.textContent = `${current}%`;
        current++;
    }, stepTime);
}

// --- RESOURCES & SIMULATOR ---
function goToResources(specificSkillId = null) {
    if (typeof specificSkillId === 'string') {
        renderResourcesAndSimulator(specificSkillId);
    } else {
        renderResourcesAndSimulator();
    }
    navigateTo('resources');
}

function renderResourcesAndSimulator(specificSkillId = null) {
    const list = document.getElementById('resources-list');
    list.innerHTML = '';
    simulatedExtraScore = 0; // Reset simulation
    updateSimulatorDisplay();

    if (currentMissingSkills.length === 0) {
        list.innerHTML = '<p class="text-secondary">No additional skills to learn!</p>';
        return;
    }
    
    let skillsToRender = currentMissingSkills;
    if (specificSkillId) {
        skillsToRender = currentMissingSkills.filter(gap => gap.skillId === specificSkillId);
        const focusSkill = APP_DATA.skills.find(s => s.id === specificSkillId);
        document.getElementById('resources-subtitle').innerHTML = `Focusing on resources for <strong class="text-accent">${focusSkill ? focusSkill.name : ''}</strong>`;
    } else {
        document.getElementById('resources-subtitle').textContent = "Select the skills you plan to study to see how your Match Score improves!";
    }

    skillsToRender.forEach(gap => {
        const skillDef = APP_DATA.skills.find(s => s.id === gap.skillId);
        const resources = APP_DATA.learningResources[gap.skillId] || [];
        
        const resourceHtml = resources.map(res => `
            <a href="${res.url}" target="_blank" class="resource-link">
                <i class="fa-solid ${res.type === 'Video' ? 'fa-video' : 'fa-link'}"></i> ${res.name}
            </a>
        `).join('');

        const block = document.createElement('div');
        block.className = 'learning-block';
        block.innerHTML = `
            <div class="learning-header" style="flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
                <div style="flex: 1;">
                   <strong style="font-size: 1.05rem;">Roadmap to ${skillDef.name}</strong><br>
                   <span class="text-accent text-sm" style="font-weight: 500;">Potential Match Increase: +${Math.round((gap.gapValue / currentUser.totalRequiredScore) * 100)}%</span>
                </div>
            </div>
            <div class="resources-list" style="margin-bottom: 1rem;">
                ${resourceHtml || '<span class="text-secondary text-sm">No specific resources. Try searching online.</span>'}
            </div>
            <button class="btn-primary" style="padding: 0.4rem 0.8rem; font-size: 0.75rem; width: fit-content; border-radius: 4px; background: rgba(16, 185, 129, 0.1); border-color: var(--success); color: var(--success); text-transform: uppercase; letter-spacing: 0.5px;" onclick="submitLearnedSkill('${gap.skillId}', '${gap.target}')">
                <i class="fa-solid fa-check"></i> Submit Skill
            </button>
        `;
        list.appendChild(block);
    });
}

function submitLearnedSkill(skillId, level) {
    currentUser.learnedSkills[skillId] = level;
    saveUser();
    showToast(`Great job! ${skillId.toUpperCase()} added to your skills.`, 'success');
    
    // Refresh calculations and UI
    calculateAndRenderMatch();
    renderResourcesAndSimulator();
    updateSimulatorDisplay();
}

function updateSimulatorDisplay() {
    const baseScore = currentUser.baseMatchScore || 0;
    // (Simulator extra score logic removed to favor the new Submit feature)
    document.getElementById('sim-score-text').textContent = `${baseScore}%`;
    document.getElementById('sim-increase-text').textContent = 'Skill added! Match score updated.';
}

function exportRoadmap() {
    const role = APP_DATA.jobRoles.find(r => r.id === currentUser.selectedJobId);
    if (!role) return;

    let content = `================================================\n`;
    content += `   PERSONALIZED CAREER ROADMAP: ${role.title.toUpperCase()}\n`;
    content += `================================================\n\n`;
    
    content += `📊 CURRENT STATUS\n`;
    content += `-----------------\n`;
    content += `Match Score: ${currentUser.baseMatchScore}%\n`;
    content += `Target Group: B.Tech CSE Careers\n\n`;

    content += `💰 MARKET INSIGHTS\n`;
    content += `-----------------\n`;
    content += `Average/Fresher Salary: ${role.marketInsights.fresherSalary}\n`;
    content += `Max Growth Potential: ${role.marketInsights.maxSalary}\n`;
    content += `Future Outlook: ${role.marketInsights.futureScope}\n\n`;

    content += `🏢 FAMOUS HIRING COMPANIES\n`;
    content += `--------------------------\n`;
    if (role.marketInsights.topCompanies) {
        content += role.marketInsights.topCompanies.join(', ') + '\n\n';
    } else {
        content += `Top tech giants and multinational startups.\n\n`;
    }

    content += `🎯 SKILL GAPS TO BRIDGE (YOUR ROADMAP)\n`;
    content += `--------------------------------------\n`;
    if (currentMissingSkills.length === 0) {
        content += `Congratulations! You are 100% job-ready for this role.\n\n`;
    } else {
        currentMissingSkills.forEach((gap, index) => {
            const skillDef = APP_DATA.skills.find(s => s.id === gap.skillId);
            content += `${index + 1}. ${skillDef.name}\n`;
            content += `   - Current Level: ${gap.current}\n`;
            content += `   - Target Level: ${gap.target}\n`;
            content += `   - Priority: High\n\n`;
        });
    }

    content += `🚀 EXPERT GROWTH STRATEGY\n`;
    content += `-------------------------\n`;
    content += `- Focus on real-world projects rather than just watching videos.\n`;
    content += `- Build a portfolio on GitHub showcasing the skills listed above.\n`;
    content += `- Earn certifications from AWS, Microsoft, or Google for advanced credibility.\n`;
    content += `- Join developer communities (StackOverflow, Reddit) to stay updated.\n\n`;
    
    content += `⭐ GENERATED BY SKILL CAREER MENTOR\n`;
    content += `================================================\n`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `detailed_roadmap_${role.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Detailed Roadmap exported!', 'success');
}

// --- PROSPECTS ---
function goToProspects() {
    if (!currentUser.selectedJobId) {
        showToast('Please select a job role first', 'warning');
        navigateTo('dashboard');
        return;
    }
    
    const role = APP_DATA.jobRoles.find(r => r.id === currentUser.selectedJobId);
    if (!role) return;

    document.getElementById('prospects-role-title').textContent = role.role || role.title;
    document.getElementById('prospect-scope').textContent = role.marketInsights.futureScope;
    document.getElementById('prospect-avg').textContent = role.marketInsights.fresherSalary;
    document.getElementById('prospect-max').textContent = role.marketInsights.maxSalary;

    const companiesContainer = document.getElementById('prospect-companies');
    if (companiesContainer) {
        companiesContainer.innerHTML = '';
        if (role.marketInsights.topCompanies) {
            role.marketInsights.topCompanies.forEach(company => {
                companiesContainer.innerHTML += `<div class="company-pill" style="background: rgba(255,255,255,0.05); padding: 5px 15px; border-radius: 20px; border: 1px solid var(--glass-border); font-size: 0.9rem;">${company}</div>`;
            });
        }
    }

    // --- Advanced Features Populate ---
    const trendsContainer = document.getElementById('prospect-trends');
    const tipsContainer = document.getElementById('prospect-tips');
    
    // Static but role-relevant advanced insights
    const trends = [
        "Rising demand for AI-integrated workflows in this role.",
        "Increased focus on Cloud-native architectures.",
        "Shift towards cross-functional collaborative tools."
    ];
    const tips = [
        "Earn specialized certifications (AWS/Azure/GCP) to boost salary.",
        "Focus on building a strong GitHub portfolio with 2+ niche projects.",
        "Network with senior engineers on LinkedIn to get internal referrals."
    ];

    if (trendsContainer) {
        trendsContainer.innerHTML = trends.map(t => `<div style="display: flex; gap: 8px;"><i class="fa-solid fa-caret-right text-warning"></i> <span>${t}</span></div>`).join('');
    }
    if (tipsContainer) {
        tipsContainer.innerHTML = tips.map(t => `<div style="display: flex; gap: 8px;"><i class="fa-solid fa-caret-right text-success"></i> <span>${t}</span></div>`).join('');
    }

    navigateTo('prospects');
}
