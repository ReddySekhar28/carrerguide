const APP_DATA = {
    // Master list of all available B.Tech CSE skills
    skills: [
        { id: 'html', name: 'HTML', category: 'Frontend' },
        { id: 'css', name: 'CSS', category: 'Frontend' },
        { id: 'js', name: 'JavaScript', category: 'Frontend' },
        { id: 'react', name: 'React/Angular', category: 'Frontend' },
        { id: 'nodejs', name: 'Node.js', category: 'Backend' },
        { id: 'python', name: 'Python', category: 'Backend' },
        { id: 'java', name: 'Java', category: 'Backend' },
        { id: 'cpp', name: 'C++', category: 'Core' },
        { id: 'sql', name: 'SQL', category: 'Database' },
        { id: 'dsa', name: 'Data Structures & Algorithms', category: 'Core' },
        { id: 'oop', name: 'OOP', category: 'Core' },
        { id: 'git', name: 'Git', category: 'Tools' },
        { id: 'ml', name: 'Machine Learning Algorithms', category: 'AI' },
        { id: 'stats', name: 'Statistics', category: 'Data' },
        { id: 'pandas', name: 'Pandas', category: 'Data' },
        { id: 'tf_pytorch', name: 'TensorFlow/PyTorch', category: 'AI' },
        { id: 'data_processing', name: 'Data Processing', category: 'Data' },
        { id: 'excel', name: 'Excel', category: 'Data' },
        { id: 'bi_tools', name: 'Power BI/Tableau', category: 'Data' },
        { id: 'deep_learning', name: 'Deep Learning', category: 'AI' },
        { id: 'nlp', name: 'NLP', category: 'AI' },
        { id: 'networking', name: 'Networking', category: 'Security' },
        { id: 'linux', name: 'Linux', category: 'DevOps' },
        { id: 'ethical_hacking', name: 'Ethical Hacking', category: 'Security' },
        { id: 'crypto', name: 'Cryptography', category: 'Security' },
        { id: 'cloud', name: 'AWS/Azure/GCP', category: 'Cloud' },
        { id: 'docker', name: 'Docker', category: 'DevOps' },
        { id: 'kubernetes', name: 'Kubernetes', category: 'DevOps' },
        { id: 'jenkins', name: 'Jenkins', category: 'DevOps' },
        { id: 'cicd', name: 'CI/CD', category: 'DevOps' },
        { id: 'mobile', name: 'Java/Kotlin', category: 'Mobile' },
        { id: 'flutter', name: 'Flutter/React Native', category: 'Mobile' },
        { id: 'apis', name: 'APIs', category: 'Backend' },
        { id: 'db_design', name: 'Database Design', category: 'Database' },
        { id: 'db_admin', name: 'MySQL/Oracle', category: 'Database' },
        { id: 'perf_tuning', name: 'Performance Tuning', category: 'Database' },
        { id: 'unity_unreal', name: 'Unity/Unreal Engine', category: 'Game Dev' },
        { id: 'game_physics', name: 'Game Physics', category: 'Game Dev' }
    ],

    // Target CSE roles and their required skills + future projections
    jobRoles: [
        {
            id: 'software_engineer',
            title: 'Software Engineer',
            requiredSkills: { 'dsa': 'Advanced', 'java': 'Advanced', 'python': 'Moderate', 'oop': 'Advanced', 'git': 'Moderate' },
            marketInsights: { futureScope: 'Evergreen Demand. Foundation of all software products.', timeToJob: '3-6 Months', fresherSalary: '₹4,00,000 - ₹8,00,000 / year', maxSalary: '₹40,00,000+ / year', topCompanies: ['Google', 'Microsoft', 'Amazon', 'Meta'] }
        },
        {
            id: 'web_developer',
            title: 'Web Developer',
            requiredSkills: { 'html': 'Advanced', 'css': 'Advanced', 'js': 'Advanced', 'react': 'Moderate', 'nodejs': 'Moderate' },
            marketInsights: { futureScope: 'High Demand for Full-stack and Frontend.', timeToJob: '2-4 Months', fresherSalary: '₹3,50,000 - ₹6,50,000 / year', maxSalary: '₹30,00,000+ / year', topCompanies: ['Amazon', 'Netflix', 'Adobe', 'Flipkart'] }
        },
        {
            id: 'data_scientist',
            title: 'Data Scientist',
            requiredSkills: { 'python': 'Advanced', 'ml': 'Advanced', 'stats': 'Moderate', 'pandas': 'Advanced', 'sql': 'Moderate' },
            marketInsights: { futureScope: 'Very High Demand. AI boom is driving massive requirement.', timeToJob: '4-6 Months', fresherSalary: '₹6,00,000 - ₹10,00,000 / year', maxSalary: '₹50,00,000+ / year', topCompanies: ['Google', 'Meta', 'IBM', 'Mu Sigma'] }
        },
        {
            id: 'ml_engineer',
            title: 'Machine Learning Engineer',
            requiredSkills: { 'python': 'Advanced', 'ml': 'Advanced', 'tf_pytorch': 'Moderate', 'data_processing': 'Moderate' },
            marketInsights: { futureScope: 'Explosive Growth. Core to AI development.', timeToJob: '6-8 Months', fresherSalary: '₹7,00,000 - ₹12,00,000 / year', maxSalary: '₹60,00,000+ / year', topCompanies: ['OpenAI', 'Google DeepMind', 'Tesla', 'Nvidia'] }
        },
        {
            id: 'data_analyst',
            title: 'Data Analyst',
            requiredSkills: { 'excel': 'Advanced', 'sql': 'Advanced', 'python': 'Moderate', 'bi_tools': 'Moderate', 'stats': 'Beginner' },
            marketInsights: { futureScope: 'Stable Demand across all non-tech and tech sectors.', timeToJob: '2-3 Months', fresherSalary: '₹3,50,000 - ₹6,00,000 / year', maxSalary: '₹25,00,000+ / year', topCompanies: ['Deloitte', 'KPMG', 'Amazon', 'Fractal Analytics'] }
        },
        {
            id: 'ai_engineer',
            title: 'AI Engineer',
            requiredSkills: { 'python': 'Advanced', 'deep_learning': 'Advanced', 'nlp': 'Moderate', 'tf_pytorch': 'Advanced' },
            marketInsights: { futureScope: 'Transformative field with massive future potential.', timeToJob: '6-12 Months', fresherSalary: '₹8,00,000 - ₹15,00,000 / year', maxSalary: '₹80,00,000+ / year', topCompanies: ['OpenAI', 'Anthropic', 'Google', 'Microsoft'] }
        },
        {
            id: 'cyber_security',
            title: 'Cyber Security Analyst',
            requiredSkills: { 'networking': 'Advanced', 'linux': 'Advanced', 'ethical_hacking': 'Moderate', 'crypto': 'Beginner' },
            marketInsights: { futureScope: 'Critical necessity for all modern enterprises to prevent data loss.', timeToJob: '4-6 Months', fresherSalary: '₹4,50,000 - ₹7,00,000 / year', maxSalary: '₹35,00,000+ / year', topCompanies: ['Palo Alto Networks', 'Cisco', 'CrowdStrike', 'IBM Security'] }
        },
        {
            id: 'cloud_engineer',
            title: 'Cloud Engineer',
            requiredSkills: { 'cloud': 'Advanced', 'docker': 'Moderate', 'kubernetes': 'Beginner', 'linux': 'Moderate' },
            marketInsights: { futureScope: 'Cloud migration is ongoing; severe lack of skilled talent.', timeToJob: '3-5 Months', fresherSalary: '₹5,00,000 - ₹8,00,000 / year', maxSalary: '₹45,00,000+ / year', topCompanies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'TCS'] }
        },
        {
            id: 'devops_engineer',
            title: 'DevOps Engineer',
            requiredSkills: { 'git': 'Advanced', 'jenkins': 'Moderate', 'docker': 'Advanced', 'kubernetes': 'Moderate', 'cicd': 'Advanced' },
            marketInsights: { futureScope: 'High Demand. Bridges the gap between dev and deployment.', timeToJob: '4-6 Months', fresherSalary: '₹6,00,000 - ₹10,00,000 / year', maxSalary: '₹50,00,000+ / year', topCompanies: ['Atlassian', 'Netflix', 'Amazon', 'Microsoft'] }
        },
        {
            id: 'mobile_dev',
            title: 'Mobile App Developer',
            requiredSkills: { 'mobile': 'Moderate', 'flutter': 'Advanced', 'apis': 'Moderate' },
            marketInsights: { futureScope: 'Steady demand as mobile consumption dominates globally.', timeToJob: '3-4 Months', fresherSalary: '₹3,50,000 - ₹7,00,000 / year', maxSalary: '₹35,00,000+ / year', topCompanies: ['Google', 'Apple', 'Uber', 'Zomato'] }
        },
        {
            id: 'dba',
            title: 'Database Administrator',
            requiredSkills: { 'sql': 'Advanced', 'db_design': 'Advanced', 'db_admin': 'Moderate', 'perf_tuning': 'Moderate' },
            marketInsights: { futureScope: 'Crucial for maintaining data integrity and scale at enterprise level.', timeToJob: '4-6 Months', fresherSalary: '₹4,00,000 - ₹7,00,000 / year', maxSalary: '₹30,00,000+ / year', topCompanies: ['Oracle', 'IBM', 'SAP', 'Microsoft'] }
        },
        {
            id: 'game_dev',
            title: 'Game Developer',
            requiredSkills: { 'cpp': 'Advanced', 'unity_unreal': 'Advanced', 'game_physics': 'Moderate' },
            marketInsights: { futureScope: 'Niche but highly lucrative and growing VR/AR sectors.', timeToJob: '6-8 Months', fresherSalary: '₹4,00,000 - ₹8,00,000 / year', maxSalary: '₹40,00,000+ / year', topCompanies: ['EA Sports', 'Ubisoft', 'Rockstar Games', 'Epic Games'] }
        }
    ],

    learningResources: {} // Populated dynamically below
};

// Auto-fill robust learning resources for the massive UI list
APP_DATA.skills.forEach(skill => {
    // Generate helpful links based on the skill name
    const query = encodeURIComponent(skill.name);
    
    APP_DATA.learningResources[skill.id] = [
        { name: `${skill.name} on W3Schools / GeeksforGeeks`, url: `https://www.google.com/search?q=${query}+tutorial+w3schools+OR+geeksforgeeks`, type: 'Text' },
        { name: `${skill.name} Simplilearn Course`, url: `https://www.youtube.com/results?search_query=${query}+simplilearn+course`, type: 'Video' },
        { name: `${skill.name} Crash Course (YouTube)`, url: `https://www.youtube.com/results?search_query=${query}+crash+course+for+beginners`, type: 'Video' }
    ];
});
