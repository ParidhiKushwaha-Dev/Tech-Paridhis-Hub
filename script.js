document.addEventListener('DOMContentLoaded', () => {
    const btnIT = document.getElementById('btn-it');
    const btnDM = document.getElementById('btn-dm');
    const itGrid = document.getElementById('it-jobs');
    const dmGrid = document.getElementById('digital-marketing');

    // Tab Switching Logic
    function switchTab(showId, hideId, activeBtn, inactiveBtn) {
        document.getElementById(showId).style.display = 'grid';
        document.getElementById(hideId).style.display = 'none';
        activeBtn.classList.add('active');
        inactiveBtn.classList.remove('active');
    }

    if(btnIT && btnDM) {
        btnIT.addEventListener('click', () => switchTab('it-jobs', 'digital-marketing', btnIT, btnDM));
        btnDM.addEventListener('click', () => switchTab('digital-marketing', 'it-jobs', btnDM, btnIT));
    }
// 1. Roadmap page ke buttons ko connect karne ke liye

    // --- ROADMAP LOGIC START ---
    const container = document.getElementById('roadmapContent');
    const titleElement = document.getElementById('jobTitle');
    
    // Agar hum path-details page par nahi hain, toh aage ka code mat chalao
    if (!container || !titleElement) return; 

    const selectedJob = localStorage.getItem('selectedJob');
    const allRoadmaps = {
        "AI/ML Engineer": [
            { title: "Mathematics", desc: "Linear Algebra, Calculus & Statistics.", tags: ["Maths", "Python"] },
            { title: "Data Prep", desc: "Handling datasets with Pandas.", tags: ["NumPy", "Pandas"] },
            { title: "ML Models", desc: "Supervised & Unsupervised Learning.", tags: ["Scikit-Learn"] },
            { title: "Deep Learning", desc: "Neural Networks and AI.", tags: ["TensorFlow", "Keras"] }
        ],
        "DevOps Engineer": [
            { title: "OS & Scripting", desc: "Linux internals and Bash scripting.", tags: ["Linux", "Bash"] },
            { title: "CI/CD", desc: "Continuous Integration & Deployment.", tags: ["Git", "Jenkins"] },
            { title: "Containers", desc: "Docker and Orchestration.", tags: ["Docker", "Kubernetes"] },
            { title: "Cloud", desc: "Managing infra on Cloud.", tags: ["AWS", "Terraform"] }
        ],
        "Cloud Architect Engineer": [
            { title: "Fundamentals", desc: "Networking, Storage and Compute.", tags: ["Networking", "DNS"] },
            { title: "Cloud Provider", desc: "AWS, Azure or Google Cloud.", tags: ["EC2", "S3", "VPC"] },
            { title: "Architecture", desc: "Designing scalable systems.", tags: ["Load Balancers"] },
            { title: "Security", desc: "IAM and Compliance.", tags: ["IAM", "KMS"] }
        ],
        "Cybersecurity Engineer": [
            { title: "Networking", desc: "TCP/IP and Network Security.", tags: ["Wireshark", "Nmap"] },
            { title: "Hacking", desc: "Ethical Hacking and VAPT.", tags: ["Kali Linux", "Metasploit"] },
            { title: "Defense", desc: "Firewalls and Incident Response.", tags: ["SIEM", "Splunk"] },
            { title: "Identity", desc: "Encryption and Auth.", tags: ["SSL", "OAuth"] }
        ],
        "Full-Stack Developer": [
            { title: "Frontend", desc: "Responsive Design and UI.", tags: ["HTML", "CSS", "React"] },
            { title: "Backend", desc: "Server side logic.", tags: ["Node.js", "Express"] },
            { title: "Database", desc: "Storing and fetching data.", tags: ["MongoDB", "SQL"] },
            { title: "DevOps", desc: "Deployment and Hosting.", tags: ["Vercel", "Docker"] }
        ],
        "Data Scientist": [
            { title: "Data Analysis", desc: "Exploring data with Python.", tags: ["Matplotlib", "Seaborn"] },
            { title: "Statistics", desc: "Hypothesis testing.", tags: ["R", "SciPy"] },
            { title: "Machine Learning", desc: "Predictive modeling.", tags: ["XGBoost", "LightGBM"] },
            { title: "Visualization", desc: "Reporting results.", tags: ["Tableau", "PowerBI"] }
        ],
        "Performance Marketing Specialist": [
            { title: "Basics", desc: "Ad copy and Creative design.", tags: ["Canva", "Copywriting"] },
            { title: "Meta Ads", desc: "Facebook and Instagram ads.", tags: ["FB Pixel", "CAPI"] },
            { title: "Google Ads", desc: "SEM and Search Ads.", tags: ["GTM", "Keywords"] },
            { title: "Analytics", desc: "Tracking ROI.", tags: ["GA4", "ROAS"] }
        ],
        "Growth Hacker": [
            { title: "Funnels", desc: "Building conversion funnels.", tags: ["Landing Pages"] },
            { title: "Virality", desc: "Referral systems.", tags: ["Loops", "AARRR"] },
            { title: "Automation", desc: "Scaling with AI.", tags: ["Zapier", "Python"] },
            { title: "Testing", desc: "A/B Testing.", tags: ["Optimizely"] }
        ],
        "AI Marketing Analyst": [
            { title: "Prompt Eng", desc: "Mastering ChatGPT for marketing.", tags: ["LLMs", "Prompts"] },
            { title: "Automation", desc: "AI Workflows.", tags: ["Make.com", "AI CRM"] },
            { title: "Prediction", desc: "Customer behavior prediction.", tags: ["Python", "AI"] },
            { title: "Content", desc: "AI Image & Video gen.", tags: ["Midjourney"] }
        ],
        "SEO Manager": [
            { title: "On-Page", desc: "Optimizing content for search.", tags: ["Keywords", "Tags"] },
            { title: "Technical", desc: "Sitemaps and Indexing.", tags: ["Search Console"] },
            { title: "Off-Page", desc: "Link building.", tags: ["Backlinks", "PR"] },
            { title: "Strategy", desc: "Content marketing.", tags: ["Semrush", "Ahrefs"] }
        ],
        "Marketing Analytics Manager": [
            { title: "Tracking", desc: "Events and conversion setup.", tags: ["GTM", "GA4"] },
            { title: "Visualization", desc: "Dashboarding.", tags: ["Looker Studio"] },
            { title: "Data Science", desc: "Marketing Mix Modeling.", tags: ["R", "Python"] },
            { title: "Reporting", desc: "Stakeholder management.", tags: ["Powerpoint"] }
        ],
        "Marketing Automation Specialist": [
            { title: "Lead Gen", desc: "Capturing leads.", tags: ["Forms", "Zapier"] },
            { title: "Workflows", desc: "Building email sequences.", tags: ["HubSpot", "Mailchimp"] },
            { title: "CRM", desc: "Salesforce management.", tags: ["Salesforce"] },
            { title: "Optimization", desc: "Scaling performance.", tags: ["Webhooks"] }
        ]
    };

   
   if (selectedJob && allRoadmaps[selectedJob]) {
    titleElement.innerText = selectedJob;
    
    // Clear the container first so old roadmaps don't stick around
    container.innerHTML = ""; 

    // Ab naya content add karein
    const roadmapHTML = allRoadmaps[selectedJob].map((step, index) => `
        <div class="step-container">
            <div class="step-number">${index + 1}</div>
            <div class="step-content">
                <h3>${step.title}</h3>
                <p>${step.desc}</p>
                <div class="tags">
                    ${step.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = roadmapHTML;
}
else {
        titleElement.innerText = "Roadmap Not Found";
        container.innerHTML = "<p>Coming Soon!</p>";
    }
});