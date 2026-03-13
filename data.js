const APP_DATA = {
    // Master list of all available B.Tech CSE skills categorized precisely
    skills: [
        // Core Subjects
        { id: 'dsa', name: 'Data Structures & Algorithms', category: 'Core Subjects' },
        { id: 'oop', name: 'OOP', category: 'Core Subjects' },
        { id: 'db_design', name: 'Database Design', category: 'Core Subjects' },
        { id: 'db_admin', name: 'MySQL/Oracle', category: 'Core Subjects' },
        { id: 'networking', name: 'Networking', category: 'Core Subjects' },
        { id: 'stats', name: 'Statistics', category: 'Core Subjects' },
        { id: 'crypto', name: 'Cryptography', category: 'Core Subjects' },
        { id: 'game_physics', name: 'Game Physics', category: 'Core Subjects' },

        // Programming
        { id: 'html', name: 'HTML', category: 'Programming' },
        { id: 'css', name: 'CSS', category: 'Programming' },
        { id: 'js', name: 'JavaScript', category: 'Programming' },
        { id: 'python', name: 'Python', category: 'Programming' },
        { id: 'java', name: 'Java', category: 'Programming' },
        { id: 'cpp', name: 'C++', category: 'Programming' },
        { id: 'mobile', name: 'Java/Kotlin', category: 'Programming' },

        // Frameworks
        { id: 'react', name: 'React/Angular', category: 'Frameworks' },
        { id: 'nodejs', name: 'Node.js', category: 'Frameworks' },
        { id: 'flutter', name: 'Flutter/React Native', category: 'Frameworks' },
        { id: 'ml', name: 'Machine Learning Algorithms', category: 'Frameworks' },
        { id: 'pandas', name: 'Pandas', category: 'Frameworks' },
        { id: 'tf_pytorch', name: 'TensorFlow/PyTorch', category: 'Frameworks' },
        { id: 'deep_learning', name: 'Deep Learning', category: 'Frameworks' },
        { id: 'nlp', name: 'NLP', category: 'Frameworks' },
        { id: 'unity_unreal', name: 'Unity/Unreal Engine', category: 'Frameworks' },
        { id: 'apis', name: 'APIs', category: 'Frameworks' },

        // Cloud
        { id: 'cloud', name: 'AWS/Azure/GCP', category: 'Cloud' },

        // Deployment
        { id: 'git', name: 'Git', category: 'Deployment' },
        { id: 'linux', name: 'Linux', category: 'Deployment' },
        { id: 'docker', name: 'Docker', category: 'Deployment' },
        { id: 'kubernetes', name: 'Kubernetes', category: 'Deployment' },
        { id: 'jenkins', name: 'Jenkins', category: 'Deployment' },
        { id: 'cicd', name: 'CI/CD', category: 'Deployment' },

        // Cyber Programs
        { id: 'ethical_hacking', name: 'Ethical Hacking', category: 'Cyber Programs' },
        { id: 'network_sec', name: 'Network Security', category: 'Cyber Programs' },
        { id: 'app_sec', name: 'Application Security', category: 'Cyber Programs' },
        { id: 'cloud_sec', name: 'Cloud Security', category: 'Cyber Programs' },
        { id: 'siem', name: 'SIEM Tools', category: 'Cyber Programs' },
        { id: 'incident_resp', name: 'Incident Response', category: 'Cyber Programs' },
        { id: 'pentesting', name: 'Penetration Testing', category: 'Cyber Programs' }
    ],

    // Projects list as requested
    projects: [
        { id: 'p_ecom', name: 'E-commerce Website', description: 'Full-stack platform with cart and authentication.' },
        { id: 'p_port', name: 'Professional Portfolio', description: 'Showcasing projects and experience with animations.' },
        { id: 'p_chat', name: 'Real-time Chat App', description: 'Messenger clone using WebSockets/Socket.io' },
        { id: 'p_ml_pred', name: 'House Price Predictor', description: 'ML model implementation and deployment.' },
        { id: 'p_sec_tool', name: 'Network Scanner', description: 'Security tool to audit local network ports.' },
        { id: 'p_game', name: '2D Platformer Game', description: 'Built with Unity or Unreal Engine.' }
    ],

    // Target CSE roles and their required skills + future projections
    jobRoles: [
        {
            id: 'software_engineer',
            title: 'Software Engineer',
            requiredSkills: { 'dsa': 'Advanced', 'java': 'Advanced', 'python': 'Intermediate', 'oop': 'Advanced', 'git': 'Intermediate' },
            requiredProjects: ['p_port', 'p_chat'],
            marketInsights: { futureScope: 'Evergreen Demand. Foundation of all software products.', timeToJob: '3-6 Months', fresherSalary: '₹4,00,000 - ₹8,00,000 / year', maxSalary: '₹40,00,000+ / year', topCompanies: ['Google', 'Microsoft', 'Amazon', 'Meta'] }
        },
        {
            id: 'web_developer',
            title: 'Web Developer',
            requiredSkills: { 'html': 'Advanced', 'css': 'Advanced', 'js': 'Advanced', 'react': 'Intermediate', 'nodejs': 'Intermediate' },
            requiredProjects: ['p_port', 'p_ecom'],
            marketInsights: { futureScope: 'High Demand for Full-stack and Frontend.', timeToJob: '2-4 Months', fresherSalary: '₹3,50,000 - ₹6,50,000 / year', maxSalary: '₹30,00,000+ / year', topCompanies: ['Amazon', 'Netflix', 'Adobe', 'Flipkart'] }
        },
        {
            id: 'data_scientist',
            title: 'Data Scientist',
            requiredSkills: { 'python': 'Advanced', 'ml': 'Advanced', 'stats': 'Intermediate', 'pandas': 'Advanced', 'sql': 'Intermediate' },
            requiredProjects: ['p_ml_pred'],
            marketInsights: { futureScope: 'Very High Demand. AI boom is driving massive requirement.', timeToJob: '4-6 Months', fresherSalary: '₹6,00,000 - ₹10,00,000 / year', maxSalary: '₹50,00,000+ / year', topCompanies: ['Google', 'Meta', 'IBM', 'Mu Sigma'] }
        },
        {
            id: 'ml_engineer',
            title: 'Machine Learning Engineer',
            requiredSkills: { 'python': 'Advanced', 'ml': 'Advanced', 'tf_pytorch': 'Intermediate', 'data_processing': 'Intermediate' },
            requiredProjects: ['p_ml_pred'],
            marketInsights: { futureScope: 'Explosive Growth. Core to AI development.', timeToJob: '6-8 Months', fresherSalary: '₹7,00,000 - ₹12,00,000 / year', maxSalary: '₹60,00,000+ / year', topCompanies: ['OpenAI', 'Google DeepMind', 'Tesla', 'Nvidia'] }
        },
        {
            id: 'data_analyst',
            title: 'Data Analyst',
            requiredSkills: { 'excel': 'Advanced', 'sql': 'Advanced', 'python': 'Intermediate', 'bi_tools': 'Intermediate', 'stats': 'Beginner' },
            requiredProjects: ['p_ml_pred'],
            marketInsights: { futureScope: 'Stable Demand across all non-tech and tech sectors.', timeToJob: '2-3 Months', fresherSalary: '₹3,50,000 - ₹6,00,000 / year', maxSalary: '₹25,00,000+ / year', topCompanies: ['Deloitte', 'KPMG', 'Amazon', 'Fractal Analytics'] }
        },
        {
            id: 'ai_engineer',
            title: 'AI Engineer',
            requiredSkills: { 'python': 'Advanced', 'deep_learning': 'Advanced', 'nlp': 'Intermediate', 'tf_pytorch': 'Advanced' },
            requiredProjects: ['p_ml_pred', 'p_chat'],
            marketInsights: { futureScope: 'Transformative field with massive future potential.', timeToJob: '6-12 Months', fresherSalary: '₹8,00,000 - ₹15,00,000 / year', maxSalary: '₹80,00,000+ / year', topCompanies: ['OpenAI', 'Anthropic', 'Google', 'Microsoft'] }
        },
        {
            id: 'cyber_security',
            title: 'Cyber Security Analyst',
            requiredSkills: { 'networking': 'Advanced', 'linux': 'Advanced', 'ethical_hacking': 'Intermediate', 'network_sec': 'Advanced', 'incident_resp': 'Intermediate' },
            requiredProjects: ['p_sec_tool'],
            marketInsights: { futureScope: 'Critical necessity for all modern enterprises to prevent data loss.', timeToJob: '4-6 Months', fresherSalary: '₹4,50,000 - ₹7,00,000 / year', maxSalary: '₹35,00,000+ / year', topCompanies: ['Palo Alto Networks', 'Cisco', 'CrowdStrike', 'IBM Security'] }
        },
        {
            id: 'cloud_engineer',
            title: 'Cloud Engineer',
            requiredSkills: { 'cloud': 'Advanced', 'docker': 'Intermediate', 'kubernetes': 'Beginner', 'linux': 'Intermediate' },
            requiredProjects: ['p_ecom'],
            marketInsights: { futureScope: 'Cloud migration is ongoing; severe lack of skilled talent.', timeToJob: '3-5 Months', fresherSalary: '₹5,00,000 - ₹8,00,000 / year', maxSalary: '₹45,00,000+ / year', topCompanies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'TCS'] }
        },
        {
            id: 'devops_engineer',
            title: 'DevOps Engineer',
            requiredSkills: { 'git': 'Advanced', 'jenkins': 'Intermediate', 'docker': 'Advanced', 'kubernetes': 'Intermediate', 'cicd': 'Advanced' },
            requiredProjects: ['p_ecom', 'p_chat'],
            marketInsights: { futureScope: 'High Demand. Bridges the gap between dev and deployment.', timeToJob: '4-6 Months', fresherSalary: '₹6,00,000 - ₹10,00,000 / year', maxSalary: '₹50,00,000+ / year', topCompanies: ['Atlassian', 'Netflix', 'Amazon', 'Microsoft'] }
        },
        {
            id: 'mobile_dev',
            title: 'Mobile App Developer',
            requiredSkills: { 'mobile': 'Intermediate', 'flutter': 'Advanced', 'apis': 'Intermediate' },
            requiredProjects: ['p_port', 'p_chat'],
            marketInsights: { futureScope: 'Steady demand as mobile consumption dominates globally.', timeToJob: '3-4 Months', fresherSalary: '₹3,50,000 - ₹7,00,000 / year', maxSalary: '₹35,00,000+ / year', topCompanies: ['Google', 'Apple', 'Uber', 'Zomato'] }
        },
        {
            id: 'dba',
            title: 'Database Administrator',
            requiredSkills: { 'sql': 'Advanced', 'db_design': 'Advanced', 'db_admin': 'Intermediate', 'perf_tuning': 'Intermediate' },
            requiredProjects: ['p_ecom'],
            marketInsights: { futureScope: 'Crucial for maintaining data integrity and scale at enterprise level.', timeToJob: '4-6 Months', fresherSalary: '₹4,00,000 - ₹7,00,000 / year', maxSalary: '₹30,00,000+ / year', topCompanies: ['Oracle', 'IBM', 'SAP', 'Microsoft'] }
        },
        {
            id: 'game_dev',
            title: 'Game Developer',
            requiredSkills: { 'cpp': 'Advanced', 'unity_unreal': 'Advanced', 'game_physics': 'Intermediate' },
            requiredProjects: ['p_game'],
            marketInsights: { futureScope: 'Niche but highly lucrative and growing VR/AR sectors.', timeToJob: '6-8 Months', fresherSalary: '₹4,00,000 - ₹8,00,000 / year', maxSalary: '₹40,00,000+ / year', topCompanies: ['EA Sports', 'Ubisoft', 'Rockstar Games', 'Epic Games'] }
        }
    ],

    learningResources: {} // Populated dynamically below
};

// Auto-fill robust learning resources
APP_DATA.skills.forEach(skill => {
    const query = encodeURIComponent(skill.name);
    APP_DATA.learningResources[skill.id] = [
        { name: `${skill.name} on W3Schools / GeeksforGeeks`, url: `https://www.google.com/search?q=${query}+tutorial+w3schools+OR+geeksforgeeks`, type: 'Text' },
        { name: `${skill.name} Simplilearn Course`, url: `https://www.youtube.com/results?search_query=${query}+simplilearn+course`, type: 'Video' },
        { name: `${skill.name} Crash Course (YouTube)`, url: `https://www.youtube.com/results?search_query=${query}+crash+course+for+beginners`, type: 'Video' }
    ];
});
