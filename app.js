// Career database with details in Hinglish for 12th grade students
const CAREER_DATABASE = {
  science_pcm: [
    {
      id: "ai_specialist",
      title: "AI & Machine Learning Specialist 🤖",
      icon: "🤖",
      matchCategory: "Tech",
      shortDesc: "ChatGPT, self-driving cars, aur automation systems ke liye smart algorithms aur artificial intelligence models code aur build karna.",
      duration: "4 Years",
      degree: "B.Tech AI & Data Science / B.Tech Computer Science (AI/ML Specialization) / B.Sc AI & Robotics",
      exams: ["JEE Main", "JEE Advanced", "VITEEE", "CUET", "BITSAT"],
      salary: "₹8 - 28 LPA (Industry me highest demand aur top salaries)",
      skills: ["Python Programming", "Calculus & Probability", "Machine Learning (TensorFlow/PyTorch)", "Data Analysis"],
      outlook: "Exponentially High (Pure world me AI models coding aur automation ki sabse badi wave chal rahi hai)",
      roadmap: [
        { phase: "Class 11 & 12", desc: "Mathematics, Physics aur basic Computer Science (Python/C++) par dhyan dein. JEE Main aur general state CET exams crack karein." },
        { phase: "College (Years 1-2)", desc: "B.Tech AI ya CSE join karein. Programming languages, Data Structures aur Linear Algebra master karein." },
        { phase: "Advanced (Years 2-3)", desc: "Machine Learning models (Scikit-Learn) aur Neural Networks basics seekhein. Github par codes aur mini-projects share karein." },
        { phase: "Competitions (Years 3-4)", desc: "Kaggle platforms par algorithmic challenges me part lein. Tech corporate me AI research intern role karein." },
        { phase: "First Job Entry", desc: "Junior AI Engineer ya Prompt Engineer ban kar industry enter karein, then senior researcher/architect/team lead banein." }
      ]
    },
    {
      id: "software_engineer",
      title: "Software Engineer / Web Developer 💻",
      icon: "💻",
      matchCategory: "Tech",
      shortDesc: "Software programs, modern websites, mobile applications aur digital systems design, write, aur maintain karna.",
      duration: "4 Years",
      degree: "B.Tech CSE / B.E. Computer Science / BCA + MCA",
      exams: ["JEE Main", "JEE Advanced", "VITEEE", "MHT-CET", "CUET"],
      salary: "₹6 - 25 LPA (Experience ke sath package tezi se badhta hai)",
      skills: ["Logical Thinking", "Coding (Python/Java/JavaScript)", "Algorithms", "Problem Solving"],
      outlook: "High Growth (Global tech boom ke wajah se software developers ki demand lagatar bani hui hai)",
      roadmap: [
        { phase: "Class 11 & 12", desc: "Mathematics aur Computer Science (optional) lein. JEE Main engineering exam ki preparation karein." },
        { phase: "College (Years 1-2)", desc: "Coding fundamentals (C++, Java or Python) aur core Data Structures clear karein." },
        { phase: "College (Years 3-4)", desc: "Web development, Cloud computing, or Mobile Apps specialisation seekhein. Summer internships apply karein." },
        { phase: "Placement & Entry", desc: "Campus interviews clear karein. Associate Software Developer ya QA Analyst roll join karein." },
        { phase: "Growth Phase", desc: "Senior Developer or Tech Lead ban kar project architectures design karein ya Product Manager banein." }
      ]
    },
    {
      id: "data_scientist",
      title: "Data Scientist / Analyst 📊",
      icon: "📊",
      matchCategory: "Tech",
      shortDesc: "Complex business numbers aur digital reports ko parse aur study karna, taaki businesses smart insights par decision le sakein.",
      duration: "3 - 4 Years",
      degree: "B.Tech Data Science / B.Sc Statistics / BCA / BS in Data Science",
      exams: ["JEE Main", "CUET", "NMIMS NPAT"],
      salary: "₹7 - 20 LPA",
      skills: ["Mathematics", "Statistics", "SQL Databases", "Data Visualization (Tableau/PowerBI)"],
      outlook: "Exponential Growth (Data har company ka crucial asset hai, isiliye expert analyst ki demand bahut high hai)",
      roadmap: [
        { phase: "Class 11 & 12", desc: "Mathematics aur statistics topics par acchi grip banayein. Basic Excel calculations seekhein." },
        { phase: "Undergrad Degree", desc: "B.Tech Data Science or B.Sc Statistics pursue karein. Python analysis libraries (Pandas, Numpy) seekhein." },
        { phase: "Portfolio Creation", desc: "Open datasets ko analyze karke dashboards banayein aur Github or Kaggle profiles update karein." },
        { phase: "Internship & Job", desc: "Junior Data Analyst ya Business Intelligence analyst ke roop me resume apply karein." },
        { phase: "Lead Data Scientist", desc: "Machine learning engineering implement karein aur company operations analyze karke chief executives ko guide karein." }
      ]
    },
    {
      id: "aerospace_engineer",
      title: "Aerospace / Aeronautical Engineer 🚀",
      icon: "🚀",
      matchCategory: "Tech",
      shortDesc: "Rockets, airplanes, satellite equipment, missiles, aur outer space technology design, build, aur test karna.",
      duration: "4 Years",
      degree: "B.Tech Aerospace / Aeronautical Engineering",
      exams: ["JEE Main", "JEE Advanced", "IIEST", "MHT-CET"],
      salary: "₹6 - 18 LPA",
      skills: ["Physics (Mechanics)", "3D CAD Modeling", "Analytical Thinking", "Fluid Dynamics"],
      outlook: "Steady Growth (Private space companies, defense modernization, aur drone delivery systems isko boost de rahe hain)",
      roadmap: [
        { phase: "Class 11 & 12", desc: "Physics aur Mathematics me high scores layein. IIT admissions ke liye JEE Advanced crack karein." },
        { phase: "Engineering College", desc: "Aero-modeling, structural materials, electronics control aur spacecraft propulsion systems study karein." },
        { phase: "Research Lab Intern", desc: "DRDO, ISRO ya private space startups me projects complete karein. 3D modeling tools me master banein." },
        { phase: "Job Recruitment", desc: "Aerospace developers (HAL, Boeing, Airbus) me design or manufacturing engineer join karein." },
        { phase: "Mission Manager", desc: "Satellite launch, airplane design audits, ya complex flight navigation projects direct karein." }
      ]
    },
    {
      id: "architect",
      title: "Architect 🏛️",
      icon: "🏛️",
      matchCategory: "Artistic",
      shortDesc: "Modern, sustainable, aur aesthetically pleasing buildings aur urban spaces ke maps aur layout structures design karna.",
      duration: "5 Years",
      degree: "B.Arch (Bachelor of Architecture)",
      exams: ["NATA (National Aptitude Test in Architecture)", "JEE Main Paper 2"],
      salary: "₹4 - 15 LPA",
      skills: ["Drawing & Sketching", "Spatial Visualization", "Basic Physics", "CAD Software (AutoCAD/Revit)"],
      outlook: "Healthy Growth (Smart-cities aur environment-friendly constructions is scale ko expand kar rahe hain)",
      roadmap: [
        { phase: "Class 11 & 12", desc: "Mathematics background select karein. Sketching practice karein aur NATA exam ki prep karein." },
        { phase: "B.Arch Degree", desc: "COA-approved college me 5-year course join karein. Architectural design history aur building materials study karein." },
        { phase: "Thesis & Internship", desc: "4th/5th year me practical learning ke liye senior registered architect ke under 6-12 mahine internship karein." },
        { phase: "License & Registration", desc: "Council of Architecture (COA) license certificate obtain karein practice registration ke liye." },
        { phase: "Consultancy & Studio", desc: "Firms join karein ya portfolio build karke private construction contracts sign karein." }
      ]
    }
  ],
  science_pcb: [
    {
      id: "medical_doctor",
      title: "Medical Doctor / Surgeon 🩺",
      icon: "🩺",
      matchCategory: "Medical",
      shortDesc: "Patients ki health problems diagnose karna, prescription dena, aur critical surgeries karke unki life save karna.",
      duration: "5.5 Years + Specialization (3 Years)",
      degree: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
      exams: ["NEET UG (National Eligibility cum Entrance Test)"],
      salary: "₹8 - 35 LPA (Specialization ke sath package tezi se badhta hai)",
      skills: ["Empathy", "Biology & Anatomy details", "Patience", "Mental Strength"],
      outlook: "Very High Demand (Healthcare sector me doctors ki shortage always rehti hai, isiliye 100% security hai)",
      roadmap: [
        { phase: "Class 11 & 12", desc: "Biology, Chemistry aur Physics master karein. NEET UG exam ki hard study karein." },
        { phase: "MBBS College", desc: "NEET UG clear karke medical college join karein. 4.5 saal theory learning aur 1 saal compulsory hospital internship karein." },
        { phase: "NEET PG Exam", desc: "Master degree credentials ke liye NEET PG crack karein MD or MS degrees seekhne ke liye." },
        { phase: "Residency Phase", desc: "Senior doctors ke guidance under hospitals me emergency trauma aur clinical testing manage karein." },
        { phase: "Consultant Doctor", desc: "Hospitals head banein, specialized surgeries handle karein ya apna private clinic/nursing home set karein." }
      ]
    },
    {
      id: "biotechnologist",
      title: "Biotechnologist / Research Scientist 🧬",
      icon: "🧬",
      matchCategory: "Medical",
      shortDesc: "Biology aur engineering principles ko link karke vaccines, agricultural crop protection, aur medicines research karna.",
      duration: "3 - 4 Years",
      degree: "B.Tech Biotechnology / B.Sc Biotech / Integrated M.Tech",
      exams: ["NEET", "CUET", "State CETs"],
      salary: "₹4 - 12 LPA",
      skills: ["Scientific Curiosity", "Genetics concepts", "Laboratory discipline", "Research writing"],
      outlook: "High Growth (New pharma drugs, CRISPR genetics aur vaccine research fields expand ho rahi hain)",
      roadmap: [
        { phase: "Class 11 & 12", desc: "Biology aur Chemistry concepts clear rakhein. CUET ya university exam crack karein." },
        { phase: "Undergrad Course", desc: "B.Tech ya B.Sc Biotechnology pursue karein. DNA extraction aur tissue culture technologies seekhein." },
        { phase: "Postgrad (M.Sc/Ph.D)", desc: "Scientific research centers me core roles ke liye higher Master's or Ph.D credentials gain karein." },
        { phase: "R&D Industry", desc: "Top pharmaceutical firms (Biocon, Serum Institute) ya agrotech labs me research analyst join karein." },
        { phase: "Principal Investigator", desc: "Clinical innovations scale karein, research patents file karein, aur lab systems guide karein." }
      ]
    },
    {
      id: "veterinarian",
      title: "Veterinary Doctor 🐾",
      icon: "🐾",
      matchCategory: "Medical",
      shortDesc: "Domestic pets, dairy farm animals, aur wildlife sanctuaries me animals ki bimariyon ka treatment aur surgery karna.",
      duration: "5.5 Years",
      degree: "B.V.Sc & AH (Bachelor of Veterinary Science & Animal Husbandry)",
      exams: ["NEET UG", "State Veterinary Entrance Tests"],
      salary: "₹5 - 15 LPA",
      skills: ["Love for Animals", "Observation", "Biology", "Resilience"],
      outlook: "Steady Growth (Urban areas me pet care aur rural areas me animal farming is field ko promote kar rahe hain)",
      roadmap: [
        { phase: "Class 11 & 12", desc: "PCB science opt karein. NEET UG test clear karein college allotment ke liye." },
        { phase: "Veterinary College", desc: "4.5 saal clinical testing aur animal pathology padhein aur 1 saal animal veterinary hospital me internship karein." },
        { phase: "Private Practice / Govt role", desc: "Govt husbandry centers me veterinary officer banein ya zoo setups/wildlife sanctuaries consult karein." },
        { phase: "Clinic Start", desc: "Apna private animal clinic start karein aur modern pet surgeries, vaccinations aur diagnostic support service set karein." }
      ]
    }
  ],
  commerce: [
    {
      id: "chartered_accountant",
      title: "Chartered Accountant (CA) 📈",
      icon: "📈",
      matchCategory: "Finance",
      shortDesc: "Businesses aur professionals ke tax audits compile karna, accounting balance sheet track karna, aur financial consulting dena.",
      duration: "4.5 - 5 Years",
      degree: "CA Qualification (ICAI Course - Foundation, Intermediate, Final)",
      exams: ["CA Foundation Exam (Conducted by ICAI twice a year)"],
      salary: "₹7 - 25 LPA",
      skills: ["Mathematics", "Auditing standards", "Taxation laws", "Analytical skills"],
      outlook: "Very Strong (Choti-badi sabhi company ko legally balance sheet audit aur tax filing ke liye CA ki jarurat padti hai)",
      roadmap: [
        { phase: "Class 11 & 12", desc: "Accountancy, Economics aur Maths stream complete karein. 12th baad ICAI register karein." },
        { phase: "CA Foundation & Inter", desc: "CA Foundation crack karein, fir 8 papers ka Intermediate clear karein. Side by side B.Com degree carry karein." },
        { phase: "Articleship training", desc: "Intermediate clear hone ke baad kisi practicing senior CA ke under 2 saal articleship job seekhein." },
        { phase: "CA Final Exam", desc: "ICAI ka ultimate CA Final exam clear karein aur official registered member card obtain karein." },
        { phase: "Practice / Big 4", desc: "Top auditing firms (EY, PwC, Deloitte) join karein, finance executives banein ya private consultancy practice karein." }
      ]
    },
    {
      id: "investment_banker",
      title: "Investment Banker 💼",
      icon: "💼",
      matchCategory: "Finance",
      shortDesc: "Corporations aur startups ko finance raising, corporate balance sheet merger, aur big business deals execute karne me advice dena.",
      duration: "3 - 5 Years",
      degree: "B.Com / BBA Finance / MBA (Finance) / CFA",
      exams: ["CUET", "IPMAT", "CAT (for MBA later)"],
      salary: "₹8 - 30 LPA (Very high commissions aur bonuses milte hain)",
      skills: ["Financial Analysis", "Excel Sheet Modeling", "Negotiation skills", "Communication"],
      outlook: "High Growth (Stock markets, capital investments aur business acquisitions India me tezi se grow ho rahe hain)",
      roadmap: [
        { phase: "Class 11 & 12", desc: "Commerce or Mathematics opt karein. SRCC, Shaheed Sukhdev jaise top colleges ke liye CUET qualify karein." },
        { phase: "Undergrad (Finance)", desc: "Corporate finance aur markets explore karein. CFA Level 1 clear karne ka plan karein." },
        { phase: "MBA Finance (Prep)", desc: "IIM ya elite management institutes admissions ke liye CAT test clear karein." },
        { phase: "Investment Analyst", desc: "Global investment banks (Goldman Sachs, Morgan Stanley) join karein junior analyst roles me." },
        { phase: "Managing Partner", desc: "High scale acquisition negotiations lead karein aur global corporate wealth funds manage karein." }
      ]
    },
    {
      id: "business_manager",
      title: "Corporate Manager / Managerial Lead 👔",
      icon: "👔",
      matchCategory: "Finance",
      shortDesc: "Organizational strategies plan karna, campaigns design karna, product sales manage karna aur teams coordinate karna.",
      duration: "3 - 5 Years",
      degree: "BBA / BMS / Integrated BBA+MBA (IPM)",
      exams: ["IPMAT (IIM Indore/Rohtak)", "CUET", "NPAT", "SET"],
      salary: "₹6 - 20 LPA",
      skills: ["Leadership", "Team Coordination", "Strategic Planning", "Presentation skills"],
      outlook: "Very Strong (Startups aur global companies ko efficient administration systems scale karne ke liye leaders chahiye)",
      roadmap: [
        { phase: "Class 11 & 12", desc: "Business studies aur English me active rahein. IIMs ke Integrated Program IPMAT exam ki prep karein." },
        { phase: "BBA/IPM Program", desc: "Marketing, Finance, HR metrics study karein. Case studies solve karein aur events coordinate karein." },
        { phase: "Networking & Intern", desc: "Corporate offices me sales or marketing interns ban kar operational experience gather karein." },
        { phase: "Management Trainee", desc: "Campus interviews clear karke executive level enter karein startup operations control ke liye." },
        { phase: "VP / CEO", desc: "Operations control head banein ya product verticals execute karke startup lead roles scale karein." }
      ]
    }
  ],
  arts_humanities: [
    {
      id: "ui_ux_designer",
      title: "UI/UX & Product Designer 🎨",
      icon: "🎨",
      matchCategory: "Artistic",
      shortDesc: "Mobile applications, games, aur websites ka graphic interface structure aur overall user visual looks design karna.",
      duration: "4 Years",
      degree: "B.Des (Interaction Design / Graphic Design / Product Design)",
      exams: ["UCEED", "NID DAT", "NIFT", "NID Entrance Exam"],
      salary: "₹5 - 18 LPA",
      skills: ["Creativity", "Visual Empathy", "Figma Design tool", "User Research methodologies"],
      outlook: "Massive Growth (Digital space expand hone ke wajah se interfaces user-friendly aur attractive banana extremely critical hai)",
      roadmap: [
        { phase: "Class 11 & 12", desc: "Drawing, visual styles aur design concepts me interest develop karein. UCEED ya NID exam crack karein." },
        { phase: "Design College", desc: "IIT B.Des, NID ya design institutes join karein. Figma, Illustrator aur prototyping tools master karein." },
        { phase: "UX Case Studies", desc: "Real apps/websites analyze karein. 3-4 design layouts case study portfolio develop karein." },
        { phase: "Freelancing & Intern", desc: "Web development teams ke sath collude karein aur client interfaces freelancing design karein." },
        { phase: "Design Director", desc: "Senior UX designer or design team lead transition roles target karein startup products scale me." }
      ]
    },
    {
      id: "corporate_lawyer",
      title: "Corporate / Litigation Lawyer ⚖️",
      icon: "⚖️",
      matchCategory: "Legal",
      shortDesc: "Companies ko contractual agreements guidelines dena, business merges audit aur legal lawsuits defend karna.",
      duration: "5 Years (Integrated)",
      degree: "B.A. LL.B / B.B.A. LL.B (5-Year Integrated Course)",
      exams: ["CLAT (Common Law Admission Test)", "AILET", "LSAT India", "MH-CET Law"],
      salary: "₹6 - 22 LPA",
      skills: ["Critical Reading", "Logic & Reasoning", "Debating & Public Speaking", "Legal Drafting"],
      outlook: "High Growth (Corporate regulatory controls aur startup compliance demands is field ko stable career banati hain)",
      roadmap: [
        { phase: "Class 11 & 12", desc: "General affairs aur english vocabulary update karein. CLAT national test ki dedicated practice karein." },
        { phase: "National Law University", desc: "NLU clear karein. Moot courts competitions participate karein. Law journals me articles write up karein." },
        { phase: "Firm Internships", desc: "Supreme Court, High Court judges, aur top law firm offices check karein interns ban kar yearly basis par." },
        { phase: "Bar License Examination", desc: "All India Bar Examination (AIBE) complete qualify karein practicing license ke liye." },
        { phase: "Associate Lawyer", desc: "Law firms join karein, startups in-house legal advisor banein ya apni independent legal chambers set karein." }
      ]
    },
    {
      id: "psychologist",
      title: "Clinical / Industrial Psychologist 🧠",
      icon: "🧠",
      matchCategory: "Legal",
      shortDesc: "Logo ke mental behaviors explore karna, therapy aur counselling protocols se emotional issues solve karna.",
      duration: "5 - 7 Years",
      degree: "B.A. Psychology -> M.A./M.Sc Psychology -> M.Phil/Ph.D",
      exams: ["CUET (for UG)", "CUET PG"],
      salary: "₹4 - 12 LPA",
      skills: ["Active Listening", "Empathy", "Research Analytics", "Human Behaviour details"],
      outlook: "High Growth (Mental health awareness aur corporate workspace stress care ke wajah se counselors demand boomed)",
      roadmap: [
        { phase: "Class 11 & 12", desc: "Humanities choose karein. Psychology concepts padhein aur CUET UG crack karein." },
        { phase: "Undergrad (B.A./B.Sc)", desc: "Psychology base subjects complete study karein, theories learn karein aur case stats clear karein." },
        { phase: "Postgrad (M.Sc/M.A.)", desc: "Clinical, Corporate HR ya counseling psychology specialisation clear study karein master thesis ke sath." },
        { phase: "RCI Registration", desc: "Clinical setups ke liye Rehabilitation Council of India (RCI) license certificate obtain karein." },
        { phase: "Therapist / HR Advisor", desc: "Private clinic therapy service manage karein ya corporate wellness projects lead karein." }
      ]
    }
  ],
  alternative_vocational: [
    {
      id: "commercial_pilot",
      title: "Commercial Pilot ✈️",
      icon: "✈️",
      matchCategory: "Tech",
      shortDesc: "Airlines ke commercial planes fly karna, passengers aur cargo safety maintain karna.",
      duration: "1.5 - 2 Years",
      degree: "Commercial Pilot License (CPL) Training",
      exams: ["DGCA Class 1 & 2 Medicals", "IGRUA Entrance", "NFTTI Entrance"],
      salary: "₹15 - 40 LPA (Extremely high paying field)",
      skills: ["Situational Awareness", "Quick Decisions", "Physics & Weather conditions", "Physical Fitness"],
      outlook: "High Growth (Indian aviation tezi se boost ho raha hai aur airlines new planes order kar rahi hain)",
      roadmap: [
        { phase: "Class 12 qualifications", desc: "Must verify Physics aur Mathematics concepts (NIOS open board optional agar Commerce/Arts streams thi)." },
        { phase: "DGCA Medicals check", desc: "Class 2 aur class 1 medical validation test guidelines pass karein approved specialists se." },
        { phase: "Flying School Entry", desc: "DGCA-approved flight school complete admissions verify karein Cadet Program opt karke." },
        { phase: "Flight hours complete", desc: "200 flight hours complete karein, DGCA ground theory exams clear aur qualify karein." },
        { phase: "A320 Type Rating", desc: "Jet type rating obtain karein aur top airlines me junior First Officer start check pilot banein." }
      ]
    },
    {
      id: "culinary_artist",
      title: "Culinary Artist / Head Chef 🍳",
      icon: "🍳",
      matchCategory: "Artistic",
      shortDesc: "Five-star hotels aur fine-dining restaurants kitchens me unique menus design karna aur food production system control karna.",
      duration: "3 Years",
      degree: "B.Sc in Hospitality & Hotel Administration / B.A. Culinary Arts",
      exams: ["NCHMCT JEE", "WGSHA Entrance"],
      salary: "₹4 - 15 LPA",
      skills: ["Creativity", "Taste & Visual looks", "Kitchen coordination", "Discipline"],
      outlook: "Steady Growth (Gourmet tourism, premium restaurants aur food vlog markets is scope ko extend kar rahe hain)",
      roadmap: [
        { phase: "Class 11 & 12", desc: "Kisi bhi stream se passout. Different food prep methods, cuisines seekhein aur cookery trends follow karein." },
        { phase: "Hotel Management (IHM)", desc: "NCHMCT JEE clear karke premier IHM programs join karein kitchen management classes me." },
        { phase: "Industrial Training check", desc: "Mandatory 6-month industrial internship standard hotel kitchen sections me complete verify karein." },
        { phase: "Commis Chef", desc: "Junior commis cook roles entry karein. Hot kitchen, pastry sections me basic skills scale karein." },
        { phase: "Executive Chef", desc: "Cuisine specialist section heads banein ya apni startup gourmet restaurants set karein." }
      ]
    },
    {
      id: "cybersecurity_expert",
      title: "Cyber Security Expert / Ethical Hacker 🛡️",
      icon: "🛡️",
      matchCategory: "Tech",
      shortDesc: "Corporate networks, databases aur bank softwares ko security tests se scan karna taaki online security threats aur hackers blocks ho sakein.",
      duration: "3 - 4 Years",
      degree: "B.Tech Cyber Security / BCA / B.Sc Cyber Security / CEH Certification",
      exams: ["JEE Main", "CUET"],
      salary: "₹5 - 18 LPA",
      skills: ["Network protocols", "Linux OS Commandlines", "Coding (Python/Bash)", "Vulnerability scanner"],
      outlook: "High Growth (Global cyber attacks security guidelines update ke chalte security expert demand boomed)",
      roadmap: [
        { phase: "Class 11 & 12", desc: "Computer science parameters seekhein. Linux scripts aur basic internet parameters seekhein." },
        { phase: "Degree Program", desc: "B.Tech Cyber Security or BCA pursue karein. Cryptography systems aur database models padhein." },
        { phase: "CEH Certification", desc: "Certified Ethical Hacker (CEH) ya standard security certificates qualify karein resumes highlight ke liye." },
        { phase: "Security Analyst", desc: "Companies internal Security Operations Center (SOC) network safety control team join karein." },
        { phase: "Chief Security Officer", desc: "Corporate auditing control head banein, security frameworks design karein." }
      ]
    }
  ],
  govt_jobs: [
    {
      id: "army_officer",
      title: "Indian Army Officer (NDA / CDS) 🪖",
      icon: "🪖",
      matchCategory: "Legal",
      shortDesc: "National Defense Academy (NDA) ya CDS exam clear karke Army me Lieutenant rank par shamil hokar desh ki raksha karna.",
      duration: "3 Years Academy + 1 Year IMA Training",
      degree: "NDA graduation B.Sc/B.A. / Direct Degree (CDS)",
      exams: ["NDA Entrance Exam (UPSC)", "CDS Exam (UPSC)", "SSB Interview"],
      salary: "₹56,100 - 1,77,500 PM (Basic Pay + Rank allowances)",
      skills: ["Leadership", "Physical Stamina", "Quick Decisions", "Desh Bhakti"],
      outlook: "Excellent (Desh me highest respect aur stable government officer lifestyle)",
      roadmap: [
        { phase: "Class 11 & 12 Prep", desc: "12th class pass karein (any stream for Army). General studies aur English vocabulary active karein. UPSC NDA exam ki preparation karein." },
        { phase: "NDA Written Exam", desc: "UPSC NDA written exam clear karein. Mathematics (300 Marks) aur General Ability (600 Marks) clear karna hota hai." },
        { phase: "SSB 5-Day Interview", desc: "Written select hone ke baad Services Selection Board (SSB) check-ins, tasks aur physical boards qualify karein." },
        { phase: "NDA Academy (Khadakwasla)", desc: "NDA join karke 3 saal rigorous military training aur academic B.A./B.Sc degree complete karein." },
        { phase: "IMA Dehradun", desc: "Indian Military Academy me 1 saal pre-commissioning complete karke as Lieutenant officer unit join karein." }
      ]
    },
    {
      id: "navy_officer",
      title: "Indian Navy Officer ⚓",
      icon: "⚓",
      matchCategory: "Tech",
      shortDesc: "Naval war systems, submarines, helicopters, or mechanical engines direct karna aur maritime boundaries ki security maintain karna.",
      duration: "4 Years (INA)",
      degree: "B.Tech Mechanical / Electrical / Electronics Engineering",
      exams: ["NDA Entrance Exam", "10+2 B.Tech Cadet Entry", "SSB Interview"],
      salary: "₹56,100 - 1,77,500 PM (Plus allowances)",
      skills: ["Navigation", "Technical skills", "Swimming", "Discipline"],
      outlook: "Excellent (Adventure, technical capability, aur high level status)",
      roadmap: [
        { phase: "Class 12 Qualifications", desc: "12th standard mandatory Physics, Chemistry aur Mathematics ke sath minimum 70% aggregates se pass karein." },
        { phase: "JEE Main Requirement", desc: "10+2 Navy B.Tech cadet entry apply karne ke liye active JEE Main scorecard submit karein." },
        { phase: "SSB Interview Boards", desc: "JEE score screening validation ke baad 5-day SSB interview boards clear karein." },
        { phase: "Indian Naval Academy", desc: "INA (Ezhimala, Kerala) join karein, 4 saal mechanical or electrical B.Tech training poora karein." },
        { phase: "Sub-Lieutenant Commission", desc: "Warship handling onboard sea-training complete karein, as Sub-Lieutenant officer charge handle karein." }
      ]
    },
    {
      id: "air_force_officer",
      title: "Indian Air Force Officer (NDA / AFCAT) ✈️",
      icon: "✈️",
      matchCategory: "Tech",
      shortDesc: "Indian Air Force me Pilot ya Ground Duty Officer ban kar military aircraft fly karna aur national airspace defend karna.",
      duration: "3 Years Academy + 1.5 Years Flight Training",
      degree: "B.Sc/B.Tech (NDA) / Graduation (AFCAT)",
      exams: ["NDA Entrance Exam", "AFCAT Exam", "SSB Interview"],
      salary: "₹56,100 - 1,77,500 PM (Basic Pay + Flying Allowances)",
      skills: ["Situational Awareness", "Physical Fitness", "Quick Decisions", "Desh Bhakti"],
      outlook: "Excellent (Aviation technology aur high status and respect)",
      roadmap: [
        { phase: "Class 11 & 12 Prep", desc: "12th standard mandatory Physics aur Mathematics ke sath clear karein. UPSC NDA exam ki preparation start karein." },
        { phase: "Written Examination", desc: "UPSC NDA written exam clear karein, ya graduation ke baad AFCAT entrance test crack karein." },
        { phase: "AFSB & CPSS Test", desc: "5-Day Air Force Selection Board (AFSB) interview aur Computerised Pilot Selection System (CPSS) test clear karein." },
        { phase: "Air Force Academy", desc: "AFA (Dundigal, Hyderabad) join karein aur rigorous flying ya ground duty training complete karein." },
        { phase: "Flying Officer Commission", desc: "As Flying Officer commission obtain karein, jets, transport planes ya helicopters pilot karein." }
      ]
    },
    {
      id: "police_si",
      title: "UP Police Sub-Inspector (S.I.) 👮",
      icon: "👮",
      matchCategory: "Legal",
      shortDesc: "Uttar Pradesh Police me state level law enforcement, investigation cases aur public area security manage karna.",
      duration: "1 Year Training",
      degree: "Graduation (Any Stream) for SI / 12th for Constable",
      exams: ["UPPRPB SI Written Exam", "Physical PST & PET tests"],
      salary: "₹35,400 - 1,12,400 PM",
      skills: ["Legal knowledge", "Physical endurance", "Investigation", "Social patience"],
      outlook: "Steady (State government active recruitment policy ke chalte stable jobs availability)",
      roadmap: [
        { phase: "Graduation Complete", desc: "12th ke baad B.A., B.Sc, B.Com ya standard graduation complete karein." },
        { phase: "UPPRPB Application", desc: "Annual UP Police Sub-Inspector vacancy update apply karein aur written test clear karein." },
        { phase: "Physical PST/PET tests", desc: "Height check and physical running tests (4.8 km in 28 mins for male) qualify karein." },
        { phase: "Medical verification", desc: "Medical clearance check aur state police character validation complete verify karein." },
        { phase: "Moradabad PTC Academy", desc: "Police Training College me 1 saal field operations, laws aur firing training complete karein." }
      ]
    },
    {
      id: "civil_services_ias",
      title: "IAS / IPS Officer 🏛️",
      icon: "🏛️",
      matchCategory: "Legal",
      shortDesc: "Districts administration heads banna, welfare guidelines manage karna, and state departments direct karna.",
      duration: "2 Years Academy Training",
      degree: "Graduation (Any Stream)",
      exams: ["UPSC Civil Services Prelims", "UPSC Mains (Written)", "UPSC Interview"],
      salary: "₹56,100 - 2,50,000 PM",
      skills: ["Administrative decisions", "GK & Polity", "Ethics", "Crisis Management"],
      outlook: "Outstanding (Desh ki sabse pratishthit aur powerful administrative administrative services)",
      roadmap: [
        { phase: "Graduation complete", desc: "12th ke baad kisi bhi subject or stream se college degree graduation clear karein." },
        { phase: "UPSC Prelims test", desc: "General studies aur CSAT objective test clear karein (qualification round)." },
        { phase: "UPSC Mains writeup", desc: "9 descriptive papers complete write up aur clear karein (major rank builder)." },
        { phase: "UPSC Board Interview", desc: "Dholpur House UPSC headquarter interview panels me general profile personality evaluate test clear karein." },
        { phase: "LBSNAA Mussoorie", desc: "IAS (LBSNAA) or IPS (SVPNPA) training academy join karein and as SDM / ASP charge lein." }
      ]
    },
    {
      id: "ssc_cgl_officer",
      title: "SSC CGL Officer (Income Tax / Excise Inspector) 🏛️",
      icon: "🏛️",
      matchCategory: "Legal",
      shortDesc: "Staff Selection Commission (SSC) CGL exam clear karke Income Tax, Central Excise, CBI or other central departments me inspector or officer banna.",
      duration: "Direct Selection",
      degree: "Graduation (Any Stream)",
      exams: ["SSC CGL Tier 1", "SSC CGL Tier 2"],
      salary: "₹44,900 - 1,42,400 PM",
      skills: ["Quantitative Aptitude", "General Awareness", "Logical Reasoning", "Official Drafting"],
      outlook: "Very Stable (Desk jobs with fixed timings and good authority)",
      roadmap: [
        { phase: "Graduation complete", desc: "12th ke baad kisi bhi subject or stream se college degree graduation clear karein." },
        { phase: "SSC CGL Application", desc: "SSC CGL yearly recruitment notification aane par online form fill and apply karein." },
        { phase: "Tier-1 Computer Exam", desc: "Tier 1 online objective exam (Maths, Reasoning, English, General Awareness) clear karein." },
        { phase: "Tier-2 Advanced Exam", desc: "Tier 2 advanced computer-based tests clear karein aur cut-off ranks secure karein." },
        { phase: "Document Verification", desc: "Verify documents, post preferences lock karein, aur GST/Income Tax Inspector or ASO rank join karein." }
      ]
    }
  ]
};

// Quiz Configuration in Hinglish
const QUIZ_QUESTIONS = [
  {
    q: "1. Aap apne free time me sabse zyada kya karna pasand karte hain?",
    options: [
      { text: "Math puzzles solve karna, code likhna, ya new tech gadgets check karna.", cat: "Tech" },
      { text: "Humari body kaise kaam karti hai ye padhna ya scientific research reports dekhna.", cat: "Medical" },
      { text: "Business ideas check karna, share market/finance news padhna ya teams organize karna.", cat: "Finance" },
      { text: "Digital art design karna, sketching, ya new food recipe cook karna.", cat: "Artistic" },
      { text: "Doston ki personal problems solve karna, rules/laws debate karna ya essays likhna.", cat: "Legal" }
    ]
  },
  {
    q: "2. School me aapka sabse favorite (ya sabse aasan lagne wala) subject kaun sa hai?",
    options: [
      { text: "Computer Science ya Mathematics", cat: "Tech" },
      { text: "Biology ya Chemistry", cat: "Medical" },
      { text: "Accountancy, Economics, ya Business Studies", cat: "Finance" },
      { text: "Art, Fine Arts, English Literature, ya Design", cat: "Artistic" },
      { text: "Social Science, Political Science, ya Civics", cat: "Legal" }
    ]
  },
  {
    q: "3. Agar aapko apne school/college me ek club start karna ho, toh kaun sa karenge?",
    options: [
      { text: "Robotics, AI & Coding Club", cat: "Tech" },
      { text: "Medical Help & Bio-Science Awareness Club", cat: "Medical" },
      { text: "Young Entrepreneurs & Stock Market Club", cat: "Finance" },
      { text: "Creative Writing, Painting, & Graphic Design Club", cat: "Artistic" },
      { text: "Debate Society & Social Service Club", cat: "Legal" }
    ]
  },
  {
    q: "4. Jab aapke samne koi mushkil problem aati hai, toh aap use kaise solve karte hain?",
    options: [
      { text: "Pure logic se, step-by-step breakdown karke ya algorithm/code banakar.", cat: "Tech" },
      { text: "Scientific evidence aur books me facts dhoondh kar root cause find karna.", cat: "Medical" },
      { text: "Cost, budget, calculations aur resource management ka balance check karke.", cat: "Finance" },
      { text: "Out-of-the-box creative ideas aur sketch structure build karke.", cat: "Artistic" },
      { text: "Sabhi logon se mil kar baat karna, perspectives samajhna aur fair compromise nikalna.", cat: "Legal" }
    ]
  },
  {
    q: "5. Aapko kis tarah ke workspace me kaam karna sabse acha lagega?",
    options: [
      { text: "High-tech software screens ke samne coding aur testing karte hue.", cat: "Tech" },
      { text: "Kisi scientific lab, clinic or research center me research/diagnosis karte hue.", cat: "Medical" },
      { text: "Ek startup corporate boardroom, stocks trade center or business building me.", cat: "Finance" },
      { text: "Creative design studio, food production kitchen ya advertising office me.", cat: "Artistic" },
      { text: "Courtroom, counselor counseling room ya government administration space me.", cat: "Legal" }
    ]
  },
  {
    q: "6. Aap apne career se kis tarah ka change/impact create karna chahte hain?",
    options: [
      { text: "Modern software apps aur technologies banana jo logon ka daily kaam aasan karein.", cat: "Tech" },
      { text: "Cures dhoondhna, logon ka ilaj karna ya scientific innovations develop karna.", cat: "Medical" },
      { text: "Economy aur businesses ko growth dena aur large wealth manage karna.", cat: "Finance" },
      { text: "Ache visual look, user layouts ya storytelling design create karna jo logon ko inspire karein.", cat: "Artistic" },
      { text: "Social justice implement karna, logon ke depression/stress solve karna ya guidelines design karna.", cat: "Legal" }
    ]
  },
  {
    q: "7. Calculations aur numbers ke sath kaam karna aapko kaisa lagta hai?",
    options: [
      { text: "Mujhe pasand hai - budgets, financial reports aur stock values calculations me.", cat: "Finance" },
      { text: "Acha lagta hai - logical formulas aur software codes/programming data variables me.", cat: "Tech" },
      { text: "Thik lagta hai - scientific chemistry stats or biology parameters check karne me.", cat: "Medical" },
      { text: "Main design patterns or drawings par focus karta hoon, numbers secondary hain.", cat: "Artistic" },
      { text: "Mujhe numerical calculations pasand nahi hain, main social/verbal discussion prefer karta hoon.", cat: "Legal" }
    ]
  },
  {
    q: "8. Agar aapko free time me koi book choose karni ho, toh kis topic par karenge?",
    options: [
      { text: "Sci-Fi novels, Cyber security frameworks ya Artificial Intelligence tools par.", cat: "Tech" },
      { text: "Medicines discovery, genetics updates ya evolutionary biology par.", cat: "Medical" },
      { text: "Business strategies, startup stories ya rich investors ke case-studies par.", cat: "Finance" },
      { text: "Visual arts, interior styling ideas, or culinary recipes books par.", cat: "Artistic" },
      { text: "Human brain psychology, crime suspense novels ya lawyers/diplomats ki books par.", cat: "Legal" }
    ]
  }
];

// App State Management
let appState = {
  isLoggedIn: false,
  user: {
    name: "",
    stream: "",
    contact: "",
    interests: [],
    quizCompleted: false,
    quizAnswers: [],
    quizResults: null,
    savedCareers: []
  },
  currentView: "landing"
};

// Initial Setup & Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  loadStateFromStorage();
  renderApp();
  setupNavEventListeners();
  setupSignpostEventListeners();
  setupCarousel();
  setupAuthEventListeners();
  setupQuizEventListeners();
  setupChatEventListeners();
  setupAchievementsEventListeners();
  setupFeedbackEventListeners();
});

// Load State from Local Storage
function loadStateFromStorage() {
  let usersList = [];
  const storedUsers = localStorage.getItem("yourguider_users");
  
  if (storedUsers) {
    try {
      usersList = JSON.parse(storedUsers);
    } catch (e) {
      console.error(e);
    }
  }

  // Ensure admin user exists in database
  const adminContact = "admin@yourguider.com";
  const hasAdmin = usersList.some(u => contactsMatch(u.contact, adminContact));
  if (!hasAdmin) {
    usersList.push({
      name: "Website Owner (Admin) 👑",
      stream: "undecided",
      contact: adminContact,
      interests: [],
      quizCompleted: false,
      quizResults: null,
      savedCareers: [],
      isAdmin: true
    });
  }

  // Ensure default user Rahul exists in database
  const rahulContact = "9876543210";
  const hasRahul = usersList.some(u => contactsMatch(u.contact, rahulContact));
  if (!hasRahul) {
    usersList.push({
      name: "Rahul Kumar",
      stream: "science_pcm",
      contact: rahulContact,
      interests: ["tech", "aviation"],
      quizCompleted: false,
      quizResults: null,
      savedCareers: []
    });
  }

  localStorage.setItem("yourguider_users", JSON.stringify(usersList));

  const saved = localStorage.getItem("yourguider_state");
  if (saved) {
    try {
      appState = JSON.parse(saved);
      if (appState.isLoggedIn) {
        document.body.classList.add("logged-in");
      } else {
        document.body.classList.remove("logged-in");
      }
    } catch (e) {
      console.error("Error loading localStorage state:", e);
    }
  }
}

// Save State to Local Storage & Keep Users Database in Sync
function saveStateToStorage() {
  localStorage.setItem("yourguider_state", JSON.stringify(appState));
  
  if (appState.isLoggedIn && appState.user && appState.user.contact) {
    let usersList = [];
    const storedUsers = localStorage.getItem("yourguider_users");
    if (storedUsers) {
      try {
        usersList = JSON.parse(storedUsers);
      } catch (err) {
        console.error(err);
      }
    }
    const idx = usersList.findIndex(u => contactsMatch(u.contact, appState.user.contact));
    if (idx > -1) {
      usersList[idx] = appState.user;
    } else {
      usersList.push(appState.user);
    }
    localStorage.setItem("yourguider_users", JSON.stringify(usersList));
  }
}

// Router for SPA navigation
function navigateTo(viewId) {
  if (!appState.isLoggedIn && viewId !== "landing" && viewId !== "signup" && viewId !== "login") {
    navigateTo("landing");
    return;
  }

  // Route protection for Feedbacks Board (Only Owner/Admin)
  if (viewId === "feedbacks" && (!appState.user || !appState.user.isAdmin)) {
    navigateTo("dashboard");
    return;
  }

  appState.currentView = viewId;
  saveStateToStorage();
  renderApp();
  window.scrollTo(0, 0);
}

// Render dynamic elements depending on current view
function renderApp() {
  const screens = document.querySelectorAll(".screen-view");
  screens.forEach(screen => screen.classList.remove("active"));

  const activeScreen = document.getElementById(`view-${appState.currentView}`);
  if (activeScreen) {
    activeScreen.classList.add("active");
  }

  // Handle Header/Nav visibility and states
  const navContainer = document.getElementById("main-navigation");
  const authNav = document.getElementById("auth-navigation");
  
  if (appState.isLoggedIn) {
    navContainer.style.display = "flex";
    
    // Hinglish Navigation Titles
    document.getElementById("nav-link-dashboard").textContent = "Mera Dashboard";
    document.getElementById("nav-link-explorer").textContent = "Career Explorer";
    document.getElementById("nav-link-bookmarks").textContent = "Shortlist Careers";
    document.getElementById("nav-link-gov-jobs").textContent = "Sarkari Jobs";
    document.getElementById("nav-link-resources").textContent = "Exams & Scholarships";
    
    // Show Feedback Messages option in nav only if Owner/Admin
    const feedbackLink = document.getElementById("nav-link-feedbacks");
    if (feedbackLink) {
      feedbackLink.textContent = "Feedback Board";
      if (appState.user && appState.user.isAdmin) {
        feedbackLink.parentElement.style.display = "inline-block";
      } else {
        feedbackLink.parentElement.style.display = "none";
      }
    }

    // Conditionally show Feedback Board inside user dropdown menu
    const showFeedbackBoardOption = (appState.user && appState.user.isAdmin)
      ? `<a href="#" id="menu-opt-feedbacks">💬 Feedback Board</a>`
      : ``;

    authNav.innerHTML = `
      <div class="user-menu-container">
        <button id="user-menu-btn" class="user-avatar-btn">
          👋 Hi, ${appState.user.name.split(" ")[0]} <span class="profile-avatar-icon">👤</span>
        </button>
        <div id="user-dropdown-menu" class="user-dropdown-content" style="display: none;">
          <a href="#" id="menu-opt-profile">👤 Mera Profile</a>
          ${showFeedbackBoardOption}
          <a href="#" id="menu-opt-achievements">🏆 Mera Progress</a>
          <hr class="divider-fine" style="margin: 0.35rem 0;">
          <a href="#" id="menu-opt-logout" style="color: var(--rose);">🚪 Logout</a>
        </div>
      </div>
    `;
    
    // Bind Dropdown Toggle
    const menuBtn = document.getElementById("user-menu-btn");
    const dropdownMenu = document.getElementById("user-dropdown-menu");
    if (menuBtn && dropdownMenu) {
      menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isHidden = dropdownMenu.style.display === "none";
        dropdownMenu.style.display = isHidden ? "flex" : "none";
      });
    }

    // Bind Options
    document.getElementById("menu-opt-profile").addEventListener("click", (e) => {
      e.preventDefault();
      dropdownMenu.style.display = "none";
      navigateTo("profile");
    });

    const optFeedbacks = document.getElementById("menu-opt-feedbacks");
    if (optFeedbacks) {
      optFeedbacks.addEventListener("click", (e) => {
        e.preventDefault();
        dropdownMenu.style.display = "none";
        navigateTo("feedbacks");
      });
    }

    document.getElementById("menu-opt-achievements").addEventListener("click", (e) => {
      e.preventDefault();
      dropdownMenu.style.display = "none";
      showAchievements();
    });

    document.getElementById("menu-opt-logout").addEventListener("click", (e) => {
      e.preventDefault();
      dropdownMenu.style.display = "none";
      handleLogout();
    });
  } else {
    navContainer.style.display = "none";
    authNav.innerHTML = `
      <div class="flex-row btn-gap">
        <button onclick="navigateTo('login')" class="btn btn-secondary btn-sm">Login</button>
        <button onclick="navigateTo('signup')" class="btn btn-primary btn-sm">Register</button>
      </div>
    `;
  }

  // Render view-specific dynamic contents
  if (appState.currentView === "dashboard") {
    renderDashboard();
  } else if (appState.currentView === "explorer") {
    renderExplorer();
  } else if (appState.currentView === "quiz") {
    renderQuiz();
  } else if (appState.currentView === "bookmarks") {
    renderBookmarks();
  } else if (appState.currentView === "gov-jobs") {
    renderGovJobs();
  } else if (appState.currentView === "profile") {
    renderProfile();
  } else if (appState.currentView === "feedbacks") {
    renderFeedbacksBoard();
  } else if (appState.currentView === "resources") {
    renderResources();
  }

  // Set active link state dynamically in navigation
  const navLinks = document.querySelectorAll("[data-nav-target]");
  navLinks.forEach(link => {
    if (link.getAttribute("data-nav-target") === appState.currentView) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
}

// Setup generic navigation triggers
function setupNavEventListeners() {
  const navLinks = document.querySelectorAll("[data-nav-target]");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-nav-target");
      navigateTo(target);

      document.querySelectorAll("[data-nav-target]").forEach(l => l.classList.remove("active-link"));
      link.classList.add("active-link");
    });
  });

  document.getElementById("nav-logo").addEventListener("click", () => {
    if (appState.isLoggedIn) {
      navigateTo("dashboard");
    } else {
      navigateTo("landing");
    }
  });
}

// Bind landing page interactive signpost arrows
function setupSignpostEventListeners() {
  const signpostButtons = document.querySelectorAll(".signpost-arrow");
  signpostButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const category = btn.getAttribute("data-category");
      if (category) {
        if (category === "more") {
          if (!appState.isLoggedIn) {
            alert("Apna dashboard aur careers explore karne ke liye, kripya pehle Register/Login karein! 😊");
            navigateTo("signup");
          } else {
            navigateTo("explorer");
          }
          return;
        }

        if (!appState.isLoggedIn) {
          alert("Apna dashboard aur careers explore karne ke liye, kripya pehle Register/Login karein! 😊");
          navigateTo("signup");
          return;
        }

        // Navigate to explorer view
        appState.currentView = "explorer";
        saveStateToStorage();
        renderApp();
        
        // After rendering explorer view, find the corresponding filter button and click it
        const filterBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
        if (filterBtn) {
          filterBtn.click();
        }
      }
    });
  });
}

// Carousel Slider setup and autoplay logic
function setupCarousel() {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(document.querySelectorAll(".carousel-slide"));
  const nextBtn = document.querySelector(".carousel-nav.next-btn");
  const prevBtn = document.querySelector(".carousel-nav.prev-btn");
  const dots = Array.from(document.querySelectorAll(".nav-dot"));

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  let autoplayTimer = null;

  const updateSlidePosition = (index) => {
    track.style.transform = `translateX(-${index * 100}%)`;
    
    // Update active dot indicators
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });
    
    currentIndex = index;
  };

  const nextSlide = () => {
    let targetIndex = currentIndex + 1;
    if (targetIndex >= slides.length) {
      targetIndex = 0;
    }
    updateSlidePosition(targetIndex);
  };

  const prevSlide = () => {
    let targetIndex = currentIndex - 1;
    if (targetIndex < 0) {
      targetIndex = slides.length - 1;
    }
    updateSlidePosition(targetIndex);
  };

  // Autoplay control loop
  const startAutoplay = () => {
    if (autoplayTimer) clearInterval(autoplayTimer);
    autoplayTimer = setInterval(nextSlide, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayTimer) clearInterval(autoplayTimer);
  };

  // Chevron Arrow clicks
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      startAutoplay(); // Reset interval timer
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      startAutoplay(); // Reset interval timer
    });
  }

  // Dots Page navigation clicks
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const targetIndex = parseInt(dot.getAttribute("data-slide"));
      updateSlidePosition(targetIndex);
      startAutoplay(); // Reset interval timer
    });
  });

  // Pause autoplay on hover
  const sliderWrapper = document.querySelector(".slider-wrapper");
  if (sliderWrapper) {
    sliderWrapper.addEventListener("mouseenter", stopAutoplay);
    sliderWrapper.addEventListener("mouseleave", startAutoplay);
  }

  // Start autoplay immediately
  startAutoplay();
}

// Mobile Number and Email Format Validation Helper
function isValidContact(contact) {
  // Check email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(contact)) return true;

  // Check Indian mobile number regex (optional +91, 91, or 0, followed by 10 digits starting with 6-9)
  const mobileRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
  if (mobileRegex.test(contact.replace(/\s+/g, ""))) return true;

  return false;
}

// Robust contact comparison helper
function contactsMatch(contact1, contact2) {
  if (!contact1 || !contact2) return false;
  const c1 = contact1.trim().toLowerCase();
  const c2 = contact2.trim().toLowerCase();
  if (c1 === c2) return true;

  // Strip all non-digits and compare the last 10 digits if both could be mobile numbers
  const digits1 = c1.replace(/\D/g, "");
  const digits2 = c2.replace(/\D/g, "");
  if (digits1.length >= 10 && digits2.length >= 10) {
    if (digits1.slice(-10) === digits2.slice(-10)) {
      return true;
    }
  }
  return false;
}

// Registration & Login Handlers with Simulated OTP Verification
function setupAuthEventListeners() {
  const registerForm = document.getElementById("register-form");
  const btnSendOtp = document.getElementById("btn-send-otp");

  if (btnSendOtp) {
    btnSendOtp.addEventListener("click", () => {
      const nameInput = document.getElementById("reg-name").value.trim();
      const streamSelect = document.getElementById("reg-stream").value;
      const contactInput = document.getElementById("reg-contact").value.trim();

      if (!nameInput || !streamSelect || !contactInput) {
        alert("Please enter your Name, Stream, aur Contact details first!");
        return;
      }

      if (!isValidContact(contactInput)) {
        alert("Kripya ek sahi 10-digit Mobile Number (jaise 9876543210) ya valid Email (jaise student@domain.com) enter karein!");
        return;
      }

      document.getElementById("reg-otp-entry-container").style.display = "block";
      document.getElementById("auth-register-submit").style.display = "block";
      document.getElementById("reg-otp-trigger-container").style.display = "none";

      alert("Your Guider: OTP code '1234' sent to registered contact! Verification ke liye use karein.");

      // Timer Countdown logic
      let countdown = 30;
      const countdownSpan = document.getElementById("otp-countdown");
      const timerMsg = document.getElementById("otp-timer-message");
      
      if (countdownSpan) countdownSpan.textContent = countdown;
      const interval = setInterval(() => {
        countdown--;
        if (countdownSpan) countdownSpan.textContent = countdown;
        if (countdown <= 0) {
          clearInterval(interval);
          if (timerMsg) {
            timerMsg.innerHTML = `OTP nahi mila? <a href="#" id="resend-otp-link" style="color: var(--accent); text-decoration: underline; font-weight:700;">Resend OTP</a>`;
            document.getElementById("resend-otp-link").addEventListener("click", (e) => {
              e.preventDefault();
              alert("Your Guider: OTP successfully resent! Test code is '1234'.");
            });
          }
        }
      }, 1000);
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const otpContainer = document.getElementById("reg-otp-entry-container");
      if (!otpContainer || otpContainer.style.display === "none") {
        // Automatically trigger OTP send instead of alerting!
        if (btnSendOtp) {
          btnSendOtp.click();
        }
        return;
      }

      const nameInput = document.getElementById("reg-name").value.trim();
      const streamSelect = document.getElementById("reg-stream").value;
      const contactInput = document.getElementById("reg-contact").value.trim();
      const otpInput = document.getElementById("reg-otp").value.trim();
      
      const interestCheckboxes = document.querySelectorAll(".interest-cb:checked");
      const interests = Array.from(interestCheckboxes).map(cb => cb.value);

      if (!isValidContact(contactInput)) {
        alert("Kripya ek sahi 10-digit Mobile Number ya valid Email enter karein!");
        return;
      }

      if (otpInput !== "1234") {
        alert("Galat OTP! Verification ke liye code '1234' ka use karein.");
        return;
      }

      // Load or initialize registered users array from localStorage
      let usersList = [];
      const storedUsers = localStorage.getItem("yourguider_users");
      if (storedUsers) {
        try {
          usersList = JSON.parse(storedUsers);
        } catch (err) {
          console.error("Error parsing stored users list", err);
        }
      }

      const existingUserIdx = usersList.findIndex(u => contactsMatch(u.contact, contactInput));
      const newProfile = {
        name: nameInput,
        stream: streamSelect,
        contact: contactInput,
        interests: interests,
        quizCompleted: false,
        quizResults: null,
        savedCareers: []
      };

      if (existingUserIdx > -1) {
        usersList[existingUserIdx] = newProfile;
      } else {
        usersList.push(newProfile);
      }
      localStorage.setItem("yourguider_users", JSON.stringify(usersList));

      // Setup session state
      appState.isLoggedIn = true;
      appState.user = newProfile;

      saveStateToStorage();
      document.body.classList.add("logged-in");
      navigateTo("dashboard");
    });
  }

  // OTP Login Option
  const btnLoginSendOtp = document.getElementById("btn-login-send-otp");
  let loginTimerInterval = null;
  if (btnLoginSendOtp) {
    btnLoginSendOtp.addEventListener("click", () => {
      const contactInput = document.getElementById("login-contact").value.trim();
      if (!contactInput) {
        alert("Please enter registered Mobile or Email address.");
        return;
      }

      if (!isValidContact(contactInput)) {
        alert("Entered Mobile Number ya Email sahi nahi hai! Kripya check karke phir se enter karein.");
        return;
      }
      
      // Look up if user is registered in localStorage before sending OTP
      let usersList = [];
      const storedUsers = localStorage.getItem("yourguider_users");
      if (storedUsers) {
        try {
          usersList = JSON.parse(storedUsers);
        } catch (err) {
          console.error(err);
        }
      }

      const foundUser = usersList.find(u => contactsMatch(u.contact, contactInput));
      if (!foundUser) {
        alert("Aapka entered Mobile ya Email registered nahi hai! Kripya pehle Register/Signup karein.");
        return;
      }

      const otpContainer = document.getElementById("login-otp-container");
      otpContainer.style.display = "block";
      alert("Your Guider: Login OTP sent! Verification code is '1234'.");

      // Login OTP Countdown Timer logic
      if (loginTimerInterval) clearInterval(loginTimerInterval);
      
      let countdown = 30;
      const countdownSpan = document.getElementById("login-otp-countdown");
      const timerMsg = document.getElementById("login-otp-timer-message");
      
      if (timerMsg) {
        timerMsg.style.display = "block";
        timerMsg.innerHTML = `OTP sent! Resend available in <span id="login-otp-countdown">30</span>s`;
      }
      
      const newCountdownSpan = document.getElementById("login-otp-countdown");
      if (newCountdownSpan) newCountdownSpan.textContent = countdown;
      
      loginTimerInterval = setInterval(() => {
        countdown--;
        const span = document.getElementById("login-otp-countdown");
        if (span) span.textContent = countdown;
        if (countdown <= 0) {
          clearInterval(loginTimerInterval);
          if (timerMsg) {
            timerMsg.innerHTML = `OTP nahi mila? <a href="#" id="resend-login-otp-link" style="color: var(--accent); text-decoration: underline; font-weight:700;">Resend OTP</a>`;
            document.getElementById("resend-login-otp-link").addEventListener("click", (e) => {
              e.preventDefault();
              alert("Your Guider: OTP successfully resent! Test code is '1234'.");
              btnLoginSendOtp.click();
            });
          }
        }
      }, 1000);
    });
  }

  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const otpContainer = document.getElementById("login-otp-container");
      if (!otpContainer || otpContainer.style.display === "none") {
        // Automatically trigger OTP send instead of alerting!
        if (btnLoginSendOtp) {
          btnLoginSendOtp.click();
        }
        return;
      }

      const contactInput = document.getElementById("login-contact").value.trim();
      const otpInput = document.getElementById("login-otp").value.trim();

      if (!isValidContact(contactInput)) {
        alert("Kripya ek sahi Mobile Number ya Email enter karein!");
        return;
      }

      if (otpInput !== "1234") {
        alert("Galat OTP! Test code '1234' enter karein.");
        return;
      }

      // Lookup user in localStorage
      let usersList = [];
      const storedUsers = localStorage.getItem("yourguider_users");
      if (storedUsers) {
        try {
          usersList = JSON.parse(storedUsers);
        } catch (err) {
          console.error(err);
        }
      }

      const foundUser = usersList.find(u => contactsMatch(u.contact, contactInput));
      if (!foundUser) {
        alert("Aapka entered Mobile ya Email registered nahi hai! Kripya pehle Register/Signup karein.");
        return;
      }

      // Clear the login timer if logged in
      if (loginTimerInterval) clearInterval(loginTimerInterval);

      // Setup active session state
      appState.isLoggedIn = true;
      appState.user = foundUser;

      saveStateToStorage();
      document.body.classList.add("logged-in");
      navigateTo("dashboard");
    });
  }
}

// Log Out Trigger
function handleLogout() {
  appState.isLoggedIn = false;
  appState.currentView = "landing";
  document.body.classList.remove("logged-in");
  saveStateToStorage();
  renderApp();
}

// Dashboard Page Renderer in Hinglish
function renderDashboard() {
  const welcomeText = document.getElementById("welcome-user-heading");
  if (welcomeText) {
    welcomeText.textContent = `Welcome, ${appState.user.name}`;
  }

  const streamBadge = document.getElementById("user-stream-badge");
  if (streamBadge) {
    const streamNames = {
      science_pcm: "Science (PCM)",
      science_pcb: "Science (PCB)",
      commerce: "Commerce",
      arts_humanities: "Arts & Humanities",
      undecided: "Undecided / Other"
    };
    streamBadge.textContent = streamNames[appState.user.stream] || "Undecided";
  }

  const bookmarkCount = document.getElementById("dashboard-bookmark-count");
  if (bookmarkCount) {
    bookmarkCount.textContent = `${appState.user.savedCareers.length} Saved Careers`;
  }

  // Recommended Careers Grid
  const suggestionsGrid = document.getElementById("dashboard-suggestions-grid");
  if (suggestionsGrid) {
    suggestionsGrid.innerHTML = "";
    
    let careersToShow = [];

    if (appState.user.quizCompleted && appState.user.quizResults) {
      const highestCategory = appState.user.quizResults.highestCategory;
      Object.keys(CAREER_DATABASE).forEach(stream => {
        CAREER_DATABASE[stream].forEach(c => {
          if (c.matchCategory.toLowerCase() === highestCategory.toLowerCase()) {
            careersToShow.push({ ...c, matchScore: 95 });
          }
        });
      });
    }

    const userStream = appState.user.stream;
    if (CAREER_DATABASE[userStream]) {
      CAREER_DATABASE[userStream].forEach(c => {
        if (!careersToShow.find(item => item.id === c.id)) {
          careersToShow.push({ ...c, matchScore: 85 });
        }
      });
    }

    if (careersToShow.length === 0) {
      careersToShow = [
        CAREER_DATABASE.science_pcm[0], // AI Specialist
        CAREER_DATABASE.commerce[0],    // CA
        CAREER_DATABASE.arts_humanities[0] // Designer
      ];
    }

    careersToShow.slice(0, 3).forEach(career => {
      const card = createCareerCard(career, true);
      suggestionsGrid.appendChild(card);
    });
  }

  // Handle Assessment Widget in Hinglish
  const assessmentCardContent = document.getElementById("assessment-card-dynamic");
  if (assessmentCardContent) {
    if (appState.user.quizCompleted && appState.user.quizResults) {
      const res = appState.user.quizResults;
      
      const categoryNames = {
        Tech: "Technical / Engineering",
        Medical: "Healthcare / Life Sciences",
        Finance: "Business / Commercial Finance",
        Artistic: "Creative Art & Design",
        Legal: "Social Legal & Counselling"
      };

      assessmentCardContent.innerHTML = `
        <div class="result-highlight-box">
          <h4>Aapka Main Area: <span class="text-glow">${categoryNames[res.highestCategory] || res.highestCategory}</span></h4>
          <p class="text-muted mt-2" style="font-size:0.9rem;">Test ke reports batate hain ki aap <strong>${res.highestCategory.toLowerCase()}</strong> methods aur problem-solving skills me best performance kar sakte hain.</p>
          <div class="match-bars-container mt-3">
            ${Object.keys(res.scores).map(cat => {
              const pct = Math.round((res.scores[cat] / 16) * 100);
              return `
                <div class="match-bar-item">
                  <div class="match-bar-info">
                    <span>${categoryNames[cat] || cat}</span>
                    <span>${pct}%</span>
                  </div>
                  <div class="match-bar-track">
                    <div class="match-bar-fill" style="width: ${pct}%"></div>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
          <div class="flex-actions mt-3" style="display:flex;">
            <button onclick="navigateTo('quiz')" class="btn btn-secondary btn-sm" style="flex:1;">Retake Test</button>
            <button onclick="navigateTo('explorer')" class="btn btn-primary btn-sm" style="flex:1; background:var(--accent);">Explore All</button>
          </div>
        </div>
      `;
    } else {
      assessmentCardContent.innerHTML = `
        <div class="take-quiz-prompt text-center">
          <p class="mb-3" style="font-size: 0.9rem; color:var(--text-muted);">Confused hain ki aapki real profile capabilities kya hain? Humara scientific personality quiz lein aur 3 minute me report paayein.</p>
          <button onclick="navigateTo('quiz')" class="btn btn-primary" style="background:var(--accent); border-color:var(--accent); box-shadow:0 4px 12px var(--accent-glow);">Start Aptitude Test ⚡</button>
        </div>
      `;
    }
  }
}

// Create Career Card in Hinglish
function createCareerCard(career, showMatchScore = false) {
  const isBookmarked = appState.user.savedCareers.includes(career.id);
  const card = document.createElement("div");
  card.className = "career-card";
  card.innerHTML = `
    <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" data-id="${career.id}">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="${isBookmarked ? '#e11d48' : 'none'}" stroke="${isBookmarked ? '#e11d48' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
    </button>
    <div class="career-card-header">
      <span class="career-card-icon">${career.icon}</span>
      <div>
        <h3 class="career-title">${career.title}</h3>
        <span class="badge badge-accent">${career.degree.split(" / ")[0]}</span>
      </div>
    </div>
    <p class="career-desc">${career.shortDesc}</p>
    <div class="career-meta-grid">
      <div class="meta-item">
        <span class="meta-label">Duration (Avdhi):</span>
        <span class="meta-value">${career.duration}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Entrance Exam:</span>
        <span class="meta-value text-glow-cyan" style="color:var(--accent); font-weight:700;">${career.exams[0] || "Direct Entry"}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Avg Salary:</span>
        <span class="meta-value font-bold" style="color:var(--primary);">${career.salary.split(" (")[0]}</span>
      </div>
    </div>
    <div class="career-card-actions">
      <button class="btn btn-secondary btn-full view-roadmap-btn" data-career-id="${career.id}">Roadmap Dekhein ➔</button>
    </div>
  `;

  card.querySelector(".bookmark-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleBookmark(career.id);
  });

  card.querySelector(".view-roadmap-btn").addEventListener("click", () => {
    viewCareerRoadmap(career);
  });

  return card;
}

function toggleBookmark(careerId) {
  const index = appState.user.savedCareers.indexOf(careerId);
  if (index > -1) {
    appState.user.savedCareers.splice(index, 1);
  } else {
    appState.user.savedCareers.push(careerId);
  }
  saveStateToStorage();
  renderApp();
}

function renderExplorer() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  let activeFilter = "all";

  filterButtons[0].textContent = "🌟 Sabhi Careers";
  filterButtons[1].textContent = "💻 Science (PCM)";
  filterButtons[2].textContent = "🧬 Science (PCB)";
  filterButtons[3].textContent = "📈 Commerce & Finance";
  filterButtons[4].textContent = "🎨 Arts & Design";
  filterButtons[5].textContent = "Alternative Fields";

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter");
      applyFilter(activeFilter);
    });
  });

  applyFilter("all");
}

function applyFilter(category) {
  const explorerGrid = document.getElementById("explorer-careers-grid");
  if (!explorerGrid) return;
  explorerGrid.innerHTML = "";

  let careersToRender = [];

  if (category === "all") {
    Object.keys(CAREER_DATABASE).forEach(stream => {
      if (stream !== "govt_jobs") { // Exclude government jobs from explorer categories
        careersToRender = careersToRender.concat(CAREER_DATABASE[stream]);
      }
    });
  } else if (CAREER_DATABASE[category]) {
    careersToRender = CAREER_DATABASE[category];
  }

  careersToRender.forEach(career => {
    const card = createCareerCard(career);
    explorerGrid.appendChild(card);
  });

  if (careersToRender.length === 0) {
    explorerGrid.innerHTML = `<p class="text-center w-full col-span-3 text-muted">Is filter me koi career option nahi mila.</p>`;
  }
}

function renderBookmarks() {
  const grid = document.getElementById("bookmarks-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const savedIds = appState.user.savedCareers;
  
  if (savedIds.length === 0) {
    grid.innerHTML = `
      <div class="empty-bookmarks text-center py-5 col-span-3">
        <div class="empty-icon mb-3">❤️</div>
        <h3>Koi career shortlist nahi kiya hai</h3>
        <p class="text-muted mb-4">Mera Dashboard or Career Explorer me jaakar dil (heart) shape icon par tap karein taaki option yahan save ho sake.</p>
        <button onclick="navigateTo('explorer')" class="btn btn-primary" style="background:var(--primary);">Browse Careers</button>
      </div>
    `;
    return;
  }

  savedIds.forEach(id => {
    let career = null;
    Object.keys(CAREER_DATABASE).forEach(stream => {
      const found = CAREER_DATABASE[stream].find(c => c.id === id);
      if (found) career = found;
    });

    if (career) {
      const card = createCareerCard(career);
      grid.appendChild(card);
    }
  });
}

// Render Government Jobs Screen
function renderGovJobs() {
  const grid = document.getElementById("gov-jobs-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const jobs = CAREER_DATABASE.govt_jobs;
  if (!jobs) return;

  jobs.forEach(job => {
    const card = createCareerCard(job);
    grid.appendChild(card);
  });
}

// Render Profile Screen with Concise Details
function renderProfile() {
  const nameVal = document.getElementById("profile-name-val");
  const contactVal = document.getElementById("profile-contact-val");
  const streamVal = document.getElementById("profile-stream-val");
  const resultVal = document.getElementById("profile-result-val");

  if (nameVal) nameVal.textContent = appState.user.name || "N/A";
  if (contactVal) contactVal.textContent = appState.user.contact || "N/A";

  if (streamVal) {
    const streamNames = {
      science_pcm: "Science (PCM)",
      science_pcb: "Science (PCB)",
      commerce: "Commerce",
      arts_humanities: "Arts & Humanities",
      undecided: "Undecided / Other"
    };
    streamVal.textContent = streamNames[appState.user.stream] || "Undecided";
  }

  if (resultVal) {
    let testResult = "Test Pending (Aptitude test abhi tak nahi diya)";
    if (appState.user.quizCompleted && appState.user.quizResults) {
      const categoryNames = {
        Tech: "Technical / Engineering 💻",
        Medical: "Healthcare / Life Sciences 🩺",
        Finance: "Business / Commercial Finance 📈",
        Artistic: "Creative Art & Design 🎨",
        Legal: "Social Legal & Counselling ⚖️"
      };
      const highest = appState.user.quizResults.highestCategory;
      testResult = categoryNames[highest] || highest;
    }
    resultVal.textContent = testResult;
  }

  // Show/hide submitted feedbacks log container based on Admin status
  const logsSection = document.getElementById("profile-feedback-logs-section");
  if (logsSection) {
    if (appState.user && appState.user.isAdmin) {
      logsSection.style.display = "block";
      renderFeedbackList();
    } else {
      logsSection.style.display = "none";
    }
  }
}

// Quiz View logic
let currentQuestionIndex = 0;
let quizScores = {
  Tech: 0,
  Medical: 0,
  Finance: 0,
  Artistic: 0,
  Legal: 0
};

function renderQuiz() {
  currentQuestionIndex = 0;
  quizScores = { Tech: 0, Medical: 0, Finance: 0, Artistic: 0, Legal: 0 };
  
  const quizWindow = document.getElementById("quiz-inner-container");
  if (!quizWindow) return;

  displayQuestion();
}

function displayQuestion() {
  const quizWindow = document.getElementById("quiz-inner-container");
  if (!quizWindow) return;

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQ = QUIZ_QUESTIONS.length;
  const progressPct = Math.round(((currentQuestionIndex) / totalQ) * 100);

  quizWindow.innerHTML = `
    <div class="quiz-progress-bar-container">
      <div class="quiz-progress-info">
        <span>Prashna ${currentQuestionIndex + 1} of ${totalQ}</span>
        <span>${progressPct}% Completed</span>
      </div>
      <div class="quiz-progress-track">
        <div class="quiz-progress-fill" style="width: ${progressPct}%; background:var(--accent);"></div>
      </div>
    </div>
    
    <div class="quiz-card mt-4">
      <h3 class="quiz-question">${currentQ.q}</h3>
      <div class="quiz-options-list mt-4">
        ${currentQ.options.map((opt, idx) => `
          <button class="quiz-option-btn" data-category="${opt.cat}">
            <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
            <span class="option-text">${opt.text}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `;

  const optionButtons = quizWindow.querySelectorAll(".quiz-option-btn");
  optionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedCat = btn.getAttribute("data-category");
      btn.classList.add("selected");
      setTimeout(() => {
        handleQuizAnswer(selectedCat);
      }, 300);
    });
  });
}

function handleQuizAnswer(category) {
  if (quizScores[category] !== undefined) {
    quizScores[category] += 2;
  }
  currentQuestionIndex++;

  if (currentQuestionIndex < QUIZ_QUESTIONS.length) {
    displayQuestion();
  } else {
    completeQuiz();
  }
}

function completeQuiz() {
  let highest = "Tech";
  let maxVal = -1;

  Object.keys(quizScores).forEach(cat => {
    if (quizScores[cat] > maxVal) {
      maxVal = quizScores[cat];
      highest = cat;
    }
  });

  appState.user.quizCompleted = true;
  appState.user.quizResults = {
    scores: quizScores,
    highestCategory: highest
  };
  
  saveStateToStorage();

  const quizWindow = document.getElementById("quiz-inner-container");
  if (quizWindow) {
    quizWindow.innerHTML = `
      <div class="quiz-success-card text-center py-5">
        <div class="success-icon mb-4" style="font-size:3.5rem;">🏆</div>
        <h2>Aptitude Test Complete!</h2>
        <p class="text-muted mt-2">Humne aapke details analyze kiye hain. Aapki suitability yahan highest hai:</p>
        <h1 class="matching-sector-heading text-glow mt-2" style="color:var(--accent); text-shadow:0 0 10px var(--accent-glow);">${highest} Sector</h1>
        
        <div class="explanation-box mt-4 p-4 rounded" style="background:#f8fafc; border:1px solid #e2e8f0;">
          <p style="font-size:0.95rem;">Aapke choices batate hain ki logical, data analysis aur planning algorithms me aapka dimag best kaam karta hai. Dashboard check karein, humne recommendations update kar di hain.</p>
        </div>

        <div class="quiz-actions mt-5">
          <button onclick="navigateTo('dashboard')" class="btn btn-primary" style="background:var(--accent); border-color:var(--accent);">Dashboard Par Chalein</button>
        </div>
      </div>
    `;
  }
}

function setupQuizEventListeners() {}

// Roadmap Detail Modal in Hinglish
function viewCareerRoadmap(career) {
  const roadmapScreen = document.getElementById("view-roadmap");
  if (!roadmapScreen) return;

  const titleHeader = document.getElementById("roadmap-career-title");
  const detailHeader = document.getElementById("roadmap-career-details");
  const timelineContainer = document.getElementById("roadmap-timeline-steps");

  titleHeader.innerHTML = `${career.icon} Roadmap: ${career.title}`;
  
  detailHeader.innerHTML = `
    <div class="info-pill-grid">
      <div class="info-pill"><strong>🎓 Degree Options:</strong> ${career.degree}</div>
      <div class="info-pill"><strong>⏱️ Time:</strong> ${career.duration}</div>
      <div class="info-pill"><strong>⚡ Entrance Exams:</strong> ${career.exams.join(", ")}</div>
      <div class="info-pill"><strong>💰 Salary Package:</strong> ${career.salary}</div>
    </div>
    <div class="detail-description mt-3 p-3 bg-dark-translucent rounded" style="background:#f1f5f9; border:1px solid #e2e8f0;">
      <strong>Career Scope:</strong> ${career.outlook}<br>
      <strong>Essential Skills:</strong> ${career.skills.map(s => `<code>${s}</code>`).join(", ")}
    </div>
  `;

  timelineContainer.innerHTML = "";
  career.roadmap.forEach((step, idx) => {
    const stepEl = document.createElement("div");
    stepEl.className = "roadmap-step-card";
    stepEl.innerHTML = `
      <div class="step-num" style="background:#ffffff; border-color:var(--primary); color:var(--primary);">${idx + 1}</div>
      <div class="step-content">
        <h4 style="color:var(--secondary);">${step.phase}</h4>
        <p style="font-size:0.95rem; color:var(--text-primary);">${step.desc}</p>
      </div>
    `;
    timelineContainer.appendChild(stepEl);
  });

  navigateTo("roadmap");
}

// Resources Hub Data Renderer
function renderResources() {
  const resourceContainer = document.getElementById("resources-accordion-container");
  if (!resourceContainer) return;

  const exams = [
    { name: "JEE (Main & Advanced)", stream: "Engineering (PCM / AI)", details: "IITs, NITs aur key government technical universities me B.Tech/AI degrees admission ke liye exam. Registration general November me start hoti hai.", link: "https://jeemain.nta.nic.in" },
    { name: "NEET UG", stream: "Medical (PCB)", details: "MBBS, veterinary science aur allopathic medical colleges admission ka ekmatra common test. Har saal May me conduct hota hai.", link: "https://neet.nta.nic.in" },
    { name: "CUET (Common University Entrance)", stream: "All Streams", details: "Delhi University (DU), BHU, JNU aur other central universities me BA, B.Sc, B.Com admissions ka common test.", link: "https://cuet.samarth.ac.in" },
    { name: "CLAT (Common Law Admission)", stream: "Arts / Commerce / Science", details: "NLU (National Law Universities) me BA LLB corporate law 5-year study options ke liye standard test.", link: "https://consortiumofnlus.ac.in" },
    { name: "IPMAT", stream: "Commerce / All Streams", details: "IIM Indore and Rohtak me 12th ke baad 5-year Integrated Management program (IPM BBA+MBA) entry test.", link: "https://www.iimidr.ac.in" },
    { name: "UCEED / NID DAT", stream: "Design / Creative Fields", details: "IITs aur National Institute of Design (NID) me premium product designing, UI/UX interaction selection test.", link: "https://www.uceed.iitb.ac.in" }
  ];

  resourceContainer.innerHTML = `
    <h3 class="section-title">Major Entrance Exams Guidelines</h3>
    <div class="exams-list-grid mt-3">
      ${exams.map(ex => `
        <div class="exam-info-card" style="background:#ffffff; border:1px solid #e2e8f0; box-shadow:var(--card-shadow);">
          <div class="exam-header">
            <h4 style="color:var(--primary);">${ex.name}</h4>
            <span class="badge badge-accent" style="background:rgba(13,148,136,0.1); color:var(--secondary); border:none;">${ex.stream}</span>
          </div>
          <p style="font-size:0.9rem; color:var(--text-muted); margin-top:0.5rem;">${ex.details}</p>
          <a href="${ex.link}" target="_blank" class="exam-link-btn" style="color:var(--accent); font-weight:700; margin-top:1rem; display:block;">Official Website 🔗</a>
        </div>
      `).join("")}
    </div>

    <h3 class="section-title mt-5">Scholarships Details</h3>
    <div class="scholarship-section mt-3 p-4 rounded border-fine" style="background:#ffffff; border:1px solid #e2e8f0; box-shadow:var(--card-shadow);">
      <div class="flex-column gap-3">
        <div class="scholarship-item">
          <strong style="color:var(--primary);">National Scholarship Portal (NSP)</strong>
          <p class="text-muted mt-1" style="font-size:0.9rem;">Government website portal jahan central scholarship programs, minority schemes aur merit-cum-means assistance di jati hai.</p>
        </div>
        <hr class="divider-fine">
        <div class="scholarship-item">
          <strong style="color:var(--primary);">Aditya Birla Capital Scholarship</strong>
          <p class="text-muted mt-1" style="font-size:0.9rem;">College support programs ke liye financial aid. Eligible classes ke admission fees cover and pay up to 60,000 INR.</p>
        </div>
        <hr class="divider-fine">
        <div class="scholarship-item">
          <strong style="color:var(--primary);">L'Oréal India For Young Women in Science</strong>
          <p class="text-muted mt-1" style="font-size:0.9rem;">12th pass science stream female students ko advanced research college degree continue karne ke liye 2.5 Lakh INR help.</p>
        </div>
      </div>
    </div>
  `;
}

// Chatbot Event Listeners & floating widget logic
function setupChatEventListeners() {
  const toggleBtn = document.getElementById("btn-toggle-floating-chat");
  const closeBtn = document.getElementById("btn-close-floating-chat");
  const chatWindow = document.getElementById("floating-chat-window");

  const sendBtn = document.getElementById("f-chat-send-btn");
  const chatInput = document.getElementById("f-chat-input");

  if (toggleBtn && chatWindow) {
    toggleBtn.addEventListener("click", () => {
      if (chatWindow.style.display === "none") {
        chatWindow.style.display = "flex";
        if (!chatWindow.classList.contains("welcome-typed")) {
          chatWindow.classList.add("welcome-typed");
          triggerWelcomeMessage();
        }
      } else {
        chatWindow.style.display = "none";
      }
    });
  }

  if (closeBtn && chatWindow) {
    closeBtn.addEventListener("click", () => {
      chatWindow.style.display = "none";
    });
  }

  if (sendBtn && chatInput) {
    sendBtn.addEventListener("click", handleUserMessage);
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handleUserMessage();
      }
    });
  }

  // Bind suggestion chips inside floating chatbot
  const parentsChip = document.getElementById("f-chip-parents");
  if (parentsChip) {
    parentsChip.addEventListener("click", () => sendMessageToBot("Mummy-Papa ko kaise manayein?"));
  }

  const aiChip = document.getElementById("f-chip-ai");
  if (aiChip) {
    aiChip.addEventListener("click", () => sendMessageToBot("AI and ML career ka scope kya hai?"));
  }

  const armyChip = document.getElementById("f-chip-army");
  if (armyChip) {
    armyChip.addEventListener("click", () => sendMessageToBot("NDA Army/Navy Officer entry kaise hoti hai?"));
  }

  const policeChip = document.getElementById("f-chip-police");
  if (policeChip) {
    policeChip.addEventListener("click", () => sendMessageToBot("UP Police S.I. kaise banein?"));
  }

  const sscAfChip = document.getElementById("f-chip-ssc-af");
  if (sscAfChip) {
    sscAfChip.addEventListener("click", () => sendMessageToBot("Indian Air Force aur SSC CGL job ka scope kya hai?"));
  }
}

function triggerWelcomeMessage() {
  const chatHistory = document.getElementById("floating-chat-history");
  if (!chatHistory) return;

  chatHistory.innerHTML = "";

  const typingIndicator = document.createElement("div");
  typingIndicator.className = "chat-message bot typing-indicator-msg";
  typingIndicator.innerHTML = `
    <div class="chat-bubble" style="display:flex; align-items:center; gap:6px; padding: 0.75rem 1.25rem;">
      <span class="typing-dot" style="width:8px; height:8px; background:#475569; border-radius:50%; animation: typingPulse 1.4s infinite both;"></span>
      <span class="typing-dot" style="width:8px; height:8px; background:#475569; border-radius:50%; animation: typingPulse 1.4s infinite both; animation-delay: 0.2s;"></span>
      <span class="typing-dot" style="width:8px; height:8px; background:#475569; border-radius:50%; animation: typingPulse 1.4s infinite both; animation-delay: 0.4s;"></span>
    </div>
  `;
  chatHistory.appendChild(typingIndicator);
  chatHistory.scrollTop = chatHistory.scrollHeight;

  setTimeout(() => {
    typingIndicator.remove();

    const welcomeMsg = "Hello! Main aapka AI Career Mentor hoon. Aap mujhse **AI careers**, **Sarkari Jobs (NDA, Police)**, **Mummy-Papa ko kaise manayein**, ya **highest salary packages** ke baare me bejhijhak puch sakte hain!";
    const formattedMsg = welcomeMsg.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    const botBubble = document.createElement("div");
    botBubble.className = "chat-message bot";
    botBubble.innerHTML = `<div class="chat-bubble"></div>`;
    chatHistory.appendChild(botBubble);

    const bubbleInner = botBubble.querySelector(".chat-bubble");
    let currentText = "";
    let charIdx = 0;

    const typingTimer = setInterval(() => {
      if (charIdx < formattedMsg.length) {
        if (formattedMsg[charIdx] === '<') {
          const closingIndex = formattedMsg.indexOf('>', charIdx);
          if (closingIndex !== -1) {
            currentText += formattedMsg.slice(charIdx, closingIndex + 1);
            charIdx = closingIndex + 1;
          } else {
            currentText += formattedMsg[charIdx];
            charIdx++;
          }
        } else {
          currentText += formattedMsg[charIdx];
          charIdx++;
        }
        bubbleInner.innerHTML = currentText;
        chatHistory.scrollTop = chatHistory.scrollHeight;
      } else {
        clearInterval(typingTimer);
      }
    }, 10);
  }, 650);
}

function handleUserMessage() {
  const chatInput = document.getElementById("f-chat-input");
  if (!chatInput) return;

  const msgText = chatInput.value.trim();
  if (!msgText) return;

  sendMessageToBot(msgText);
  chatInput.value = "";
}

function sendMessageToBot(text) {
  const chatHistory = document.getElementById("floating-chat-history");
  if (!chatHistory) return;

   // Render typing indicator
  const typingIndicator = document.createElement("div");
  typingIndicator.className = "chat-message bot typing-indicator-msg";
  typingIndicator.innerHTML = `
    <div class="chat-bubble" style="display:flex; align-items:center; gap:6px; padding: 0.75rem 1.25rem;">
      <span class="typing-dot" style="width:8px; height:8px; background:#475569; border-radius:50%; animation: typingPulse 1.4s infinite both;"></span>
      <span class="typing-dot" style="width:8px; height:8px; background:#475569; border-radius:50%; animation: typingPulse 1.4s infinite both; animation-delay: 0.2s;"></span>
      <span class="typing-dot" style="width:8px; height:8px; background:#475569; border-radius:50%; animation: typingPulse 1.4s infinite both; animation-delay: 0.4s;"></span>
    </div>
  `;
  chatHistory.appendChild(typingIndicator);
  chatHistory.scrollTop = chatHistory.scrollHeight;

  setTimeout(() => {
    typingIndicator.remove();

    const reply = generateBotResponse(text);
    const botBubble = document.createElement("div");
    botBubble.className = "chat-message bot";
    botBubble.innerHTML = `<div class="chat-bubble"></div>`;
    chatHistory.appendChild(botBubble);
    
    // Smooth character typing effect
    const bubbleInner = botBubble.querySelector(".chat-bubble");
    let currentText = "";
    let charIdx = 0;
    
    const typingTimer = setInterval(() => {
      if (charIdx < reply.length) {
        if (reply[charIdx] === '<') {
          const closingIndex = reply.indexOf('>', charIdx);
          if (closingIndex !== -1) {
            currentText += reply.slice(charIdx, closingIndex + 1);
            charIdx = closingIndex + 1;
          } else {
            currentText += reply[charIdx];
            charIdx++;
          }
        } else {
          currentText += reply[charIdx];
          charIdx++;
        }
        bubbleInner.innerHTML = currentText;
        chatHistory.scrollTop = chatHistory.scrollHeight;
      } else {
        clearInterval(typingTimer);
      }
    }, 10);
  }, 900);
}

// Hinglish Chatbot Core Logic
const BOT_RESPONSES = [
  {
    keywords: ["parents", "manayein", "force", "pressure", "family", "mummy", "papa", "raazi"],
    reply: "Mummy-Papa ko explain karna difficult lag sakta hai, but is tarah koshish karein:<br>1. **Data ke sath baat karein**: Apne career ke top colleges, potential starting packages aur packages growth ki research dikhayein.<br>2. **Expert voice layein**: Apne school counselor or professional guides se parents ki call/meet schedule karwayein.<br>3. **Interest prove karein**: Pura din games ya time waste karne ke bajaye, use field ke basic tools (like Figma design, Python basics) par small certificates complete karke dikhayein.<br>Yaad rakhein, unhe bas aapke financial status aur job safety ki chinta hai, use dur karein."
  },
  {
    keywords: ["salary", "paisa", "packages", "income", "highest", "rich", "crore"],
    reply: "12th ke baad sabse high scale salary packages dene wali career streams:<br>1. **Commercial Pilot**: Start package ₹15 - 35 LPA, experience badhne par ₹50+ LPA tak ja sakta hai.<br>2. **AI & Machine Learning Specialist**: Direct start package ₹8 - 25 LPA high-tier technology centers me.<br>3. **Investment Banker / Corporate Auditor**: CA ya CFA degrees ke sath ₹8 - 30 LPA starting pack.<br>4. **MBBS Doctor (Postgrad Specialists)**: MS/MD clear surgeons ka startup package ₹10 - 35 LPA ranges.<br>Remember, startup salary scale pure capability aur college brand standard (IIT/IIM/NLU/IHM) status par target hoti hai."
  },
  {
    keywords: ["undecided", "confused", "mushkil", "samajh", "help", "kya karu"],
    reply: "Confused hona bilkul okay hai! Aap bas ye quick formula apply karein:<br>1. Dashboard me jakar hamara **Aptitude Quiz** lijiye. Wo batayega aapki mental compatibility kis side hai.<br>2. YouTube par 'A Day in the Life of a Software Engineer' ya 'Life of a Graphic Designer' jaise videos search karein.<br>3. Coursera or Udemy par clean 1-week free beginners courses complete karein (jaise designing, python data analysis) taaki practical feel clear ho."
  },
  {
    keywords: ["pcm", "b.tech", "maths", "physics", "engineering"],
    reply: "PCM stream me options Engineering (B.Tech) ke aage bhi hain:<br>- **AI & Machine Learning Specialist**: ChatGPT/automation models developer.<br>- **Aerospace & Satellite Technology**: ISRO or corporate rocket projects design.<br>- **Commercial Pilot training**: DGCA flight hours complete karke airplane flying.<br>- **Ethical Hacker / Cybersecurity expert**: Systems online penetration tests protect.<br>- **B.Arch Design**: Structural layout architect design programs."
  },
  {
    keywords: ["pcb", "mbbs", "biology", "medical"],
    reply: "Agar MBBS me selection nahi ho pata hai toh tension bilkul na lein, PCB me aur bhi best choices hain:<br>- **Biotechnology Research**: CRISPR gene alterations or vaccine R&D centers.<br>- **Veterinary Medicine (B.V.Sc)**: Animal hospital diagnostics or pet clinics setup.<br>- **Clinical Psychology**: Mental counseling, therapy center consultations.<br>- **Bio-informatics & Genomes analysts**: Complex bio data calculations."
  },
  {
    keywords: ["commerce", "finance", "business", "ca", "bba"],
    reply: "Commerce stream me corporate opportunities top standard par milti hain:<br>- **Chartered Accountant (CA)**: Business audit control and corporate taxation expert.<br>- **Investment Banking Analyst**: Finance raising and merger acquisition strategies advice.<br>- **Integrated MBA (IPMAT)**: BBA+MBA direct integration studies IIM institutes standard me."
  },
  {
    keywords: ["arts", "humanities", "design", "creative"],
    reply: "Arts or Humanities stream aaj-kal corporate me top salaries derive karti hain:<br>- **UI/UX Interaction Designer**: Figma layouts design for dynamic apps (Very high scale packages).<br>- **Corporate Lawyer (CLAT)**: Legal drafts, corporate acquisitions legal consultant.<br>- **Clinical Psychologist**: Workspace mental stress relief and counselors advice centers."
  },
  {
    keywords: ["ai", "robotics", "machine learning", "ml", "chatgpt"],
    reply: "AI and Machine Learning is time pure world me sabse tezi se grow hone wala career hai! Agar aapko isme future banana hai:<br>1. **12th requirements**: Physics aur Maths compulsory rakhein (PCM stream best hai).<br>2. **College Options**: B.Tech AI & Data Science ya CSE me AI/ML specialization select karein.<br>3. **Skill checklist**: College years me Python programming, Neural Networks, aur frameworks (TensorFlow) master karein.<br>Iska roadmap explorer page me 'AI & Machine Learning Specialist' tab par click karke details me check kar sakte hain!"
  },
  {
    keywords: ["army", "navy", "air force", "iaf", "defense", "nda", "military", "afcat"],
    reply: "NDA, Navy, aur Air Force Officer entries 12th class ya graduation ke baad direct officers commission dene wale routes hain:<br>1. **NDA Entrance**: saal me do baar UPSC conduct karta hai. 12th pass (Science PCM Flying Branch ke liye) apply kar sakte hain.<br>2. **Navy B.Tech Cadet Entry**: 12th PCM me min 70% aggregates aur JEE Main scorecard ke basis par cut-offs clear hoti hain.<br>3. **Air Force (AFCAT)**: Graduation ke baad pilots, logistics, ya systems technical branch select karne ka common route.<br>Sarkari Jobs tab select karke aap inka step-by-step detailed roadmap compare kar sakte hain!"
  },
  {
    keywords: ["police", "constable", "sub-inspector", "si", "upp"],
    reply: "UP Police Sub-Inspector (SI) banne ke liye qualifications:<br>1. **Eligibility**: Graduation mandatory hai (B.A., B.Sc, B.Com, B.Tech). Constable ke liye 12th clear required.<br>2. **Selection steps**: UPPRPB written tests, Physical height check PST, running PET (4.8 km in 28 mins), and PTC Academy training.<br>Iska structured roadmap check karne ke liye upper navigation me **Sarkari Jobs** tab select karein!"
  },
  {
    keywords: ["ssc", "cgl", "inspector", "excise", "tax", "income tax", "govt job", "sarkari job"],
    reply: "SSC CGL Central Government departments (jaise Income Tax, GST/Excise, CBI, aur other Ministries) me Group B & C posts recruitment ka sabse bada option hai:<br>1. **Eligibility**: Graduation complete honi chahiye (any stream like B.A, B.Sc, B.Com).<br>2. **Exam Pattern**: Tier 1 (Computer Based Test) aur Tier 2 (Descriptive & Skill check).<br>3. **Ranks**: Sub-Inspector (CBI), Income Tax Inspector, aur Assistant Section Officer (ASO) jaise posts.<br>Details and phase-by-phase timeline check karne ke liye **Sarkari Jobs** tab par click karein!"
  }
];

function generateBotResponse(userMsg) {
  const msgLower = userMsg.toLowerCase().trim();
  const name = (appState.isLoggedIn && appState.user.name) ? appState.user.name.split(" ")[0] : "Dost";

  // 1. Greetings (hi, hello, etc.)
  const greetings = ["hi", "hello", "hey", "hlo", "hii", "namaste", "pranam", "hola", "greetings"];
  if (greetings.some(g => msgLower === g || msgLower.startsWith(g + " ") || msgLower.endsWith(" " + g))) {
    return `Hello **${name}**! 👋 Kaise hain aap? Main aapka **Your Guider AI Career Mentor** hoon. Aap mujhse kisi bhi stream ke best careers, **Sarkari Jobs (NDA, Navy, Air Force, UP Police, IAS/IPS)**, ya **Mummy-Papa ko career choice ke liye kaise manayein** ke baare me kuch bhi puch sakte hain. Aaj aap kis career ke baare me jaan-na chahte hain?`;
  }

  // 2. How are you
  const statusQueries = ["kaise ho", "how are you", "kya chal raha", "kaise hain", "sab thik"];
  if (statusQueries.some(q => msgLower.includes(q))) {
    return `Main bilkul badhiya hoon, **${name}**! 😊 Aapki career planning me help karne ke liye hamesha ready. Aap batayein, aapki class 12th complete ho gayi hai? Kya aapne koi stream select ki hai ya abhi planning kar rahe hain?`;
  }

  // 3. Thanks
  const thanks = ["thank", "shukriya", "dhanyawad", "tq", "thanks"];
  if (thanks.some(t => msgLower.includes(t))) {
    return `You're very welcome, **${name}**! 😊 Mujhe behad khushi hui ki main aapko guide kar paya. Agar koi aur sawaal ho college entry, exams ya roadmaps ke baare me, toh zaroor puchiye!`;
  }

  // 4. Ok
  const ok = ["ok", "okay", "thik", "achha", "yes", "haan"];
  if (ok.some(o => msgLower === o || msgLower === o + " " || msgLower === "ok.ok")) {
    return `Acha lag raha hai aapse baat karke, **${name}**! 👍 Agar aapko kisi special career (jaise Software Engineering, AI, Air Force, or UP Police) ke step-by-step roadmap ko dekhna hai, toh aap explore tab me ja sakte hain ya mujhse pooch sakte hain.`;
  }

  for (let response of BOT_RESPONSES) {
    for (let key of response.keywords) {
      if (msgLower.includes(key)) {
        return response.reply;
      }
    }
  }

  return `Main aapko guide karne ke liye taiyar hoon, **${name}**! Aap mujhse **'AI and ML'**, **'parents ko manayein'**, **'Sarkari Jobs (NDA/Navy)'**, **'UP Police'**, ya **'highest salary package'** ke baare me bejhijhak puch sakte hain.`;
}

// Show Achievements Modal with Quiz & Bookmarks Summaries
function showAchievements() {
  const body = document.getElementById("achievements-modal-body");
  if (!body) return;

  const quizCompleted = appState.user.quizCompleted;
  const savedCount = appState.user.savedCareers.length;

  let quizText = "";
  if (quizCompleted && appState.user.quizResults) {
    const categoryNames = {
      Tech: "Technical / Engineering 💻",
      Medical: "Healthcare / Life Sciences 🩺",
      Finance: "Business / Commercial Finance 📈",
      Artistic: "Creative Art & Design 🎨",
      Legal: "Social Legal & Counselling ⚖️"
    };
    const highest = appState.user.quizResults.highestCategory;
    const matchName = categoryNames[highest] || highest;
    quizText = `✅ **Career Aptitude Quiz Complete!**<br>Aapka recommended area hai: **${matchName}**`;
  } else {
    quizText = `❌ **Aptitude Test Pending**<br>Apni capabilities janne ke liye dashboard se test zaroor complete karein.`;
  }

  let savedCareersList = "Koi career shortlist nahi kiya hai.";
  if (savedCount > 0) {
    const careerNames = [];
    appState.user.savedCareers.forEach(id => {
      // Look up in database
      Object.keys(CAREER_DATABASE).forEach(stream => {
        const found = CAREER_DATABASE[stream].find(c => c.id === id);
        if (found && !careerNames.includes(found.title)) {
          careerNames.push(found.title);
        }
      });
    });
    savedCareersList = careerNames.map(name => `• ${name}`).join("<br>");
  }

  body.innerHTML = `
    <div style="background: rgba(13,148,136,0.05); padding: 1.25rem; border-radius: 10px; border: 1px solid rgba(13,148,136,0.15);">
      <strong style="color: var(--secondary); font-size: 1.05rem; display: block; margin-bottom: 0.5rem;">🎯 Career Aptitude Test:</strong>
      <p style="font-size: 0.95rem; color: var(--text-primary); line-height: 1.6;">${quizText}</p>
    </div>
    
    <div style="background: rgba(234,88,12,0.05); padding: 1.25rem; border-radius: 10px; border: 1px solid rgba(234,88,12,0.15);">
      <strong style="color: var(--accent); font-size: 1.05rem; display: block; margin-bottom: 0.5rem;">❤️ Shortlisted Career Options (${savedCount}):</strong>
      <p style="font-size: 0.95rem; color: var(--text-primary); line-height: 1.6;">${savedCareersList}</p>
    </div>
  `;

  const modal = document.getElementById("achievements-modal");
  if (modal) {
    modal.style.display = "block";
  }
}

// Setup Achievements Modal Close Actions
function setupAchievementsEventListeners() {
  const modal = document.getElementById("achievements-modal");
  const closeBtn = document.getElementById("btn-close-achievements");
  const okBtn = document.getElementById("btn-close-achievements-ok");

  if (modal && closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
  if (modal && okBtn) {
    okBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
}

// Close User Dropdown Menu if clicking outside
document.addEventListener("click", () => {
  const dropdownMenu = document.getElementById("user-dropdown-menu");
  if (dropdownMenu) {
    dropdownMenu.style.display = "none";
  }
});

// Bind Feedback Form submit triggers
// Bind Feedback Form submit triggers & toggle list view
function setupFeedbackEventListeners() {
  const feedbackForm = document.getElementById("feedback-form");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fType = document.getElementById("feedback-type").value;
      const fMsg = document.getElementById("feedback-msg").value.trim();

      if (!fMsg) return;

      // Save feedback in localStorage (simulated backend submission)
      let feedbackList = [];
      const storedFeedback = localStorage.getItem("yourguider_feedback");
      if (storedFeedback) {
        try {
          feedbackList = JSON.parse(storedFeedback);
        } catch (err) {
          console.error(err);
        }
      }

      feedbackList.push({
        user: appState.user.contact || "Anonymous",
        userName: appState.user.name || "Anonymous",
        type: fType,
        message: fMsg,
        timestamp: new Date().toISOString()
      });

      localStorage.setItem("yourguider_feedback", JSON.stringify(feedbackList));

      alert("Thank you! Aapka feedback/suggestion humare team ke paas secure save ho gaya hai. Hum jaldi ispe work karenge! 😊");
      
      // Clear message field
      document.getElementById("feedback-msg").value = "";

      // Refresh feedback list view immediately
      renderFeedbackList();
    });
  }

  // Toggle list view handler
  const toggleBtn = document.getElementById("btn-toggle-feedback-view");
  const container = document.getElementById("feedback-items-container");
  if (toggleBtn && container) {
    toggleBtn.addEventListener("click", () => {
      const isHidden = container.style.display === "none";
      if (isHidden) {
        container.style.display = "flex";
        toggleBtn.textContent = "Hide Feedbacks";
        renderFeedbackList();
      } else {
        container.style.display = "none";
        toggleBtn.textContent = "Show Feedbacks";
      }
    });
  }

  // --- Feedback Board Screen Event Listeners ---
  
  // Submit new feedback form inside Board
  const boardFeedbackForm = document.getElementById("board-feedback-form");
  if (boardFeedbackForm) {
    boardFeedbackForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fType = document.getElementById("board-feedback-type").value;
      const fMsg = document.getElementById("board-feedback-msg").value.trim();

      if (!fMsg) return;

      let feedbackList = [];
      const storedFeedback = localStorage.getItem("yourguider_feedback");
      if (storedFeedback) {
        try {
          feedbackList = JSON.parse(storedFeedback);
        } catch (err) {
          console.error(err);
        }
      }

      feedbackList.push({
        user: appState.user.contact || "Anonymous",
        userName: appState.user.name || "Anonymous",
        type: fType,
        message: fMsg,
        timestamp: new Date().toISOString()
      });

      localStorage.setItem("yourguider_feedback", JSON.stringify(feedbackList));

      alert("Thank you! Aapka feedback board par live update ho gaya hai. 😊");
      document.getElementById("board-feedback-msg").value = "";
      
      // Refresh board immediately
      renderFeedbacksBoard();
      // Sync profile screen too
      renderFeedbackList();
    });
  }

  // Filter Buttons for Feedbacks list
  const filterBtns = document.querySelectorAll(".feedback-board-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFeedbackFilter = btn.getAttribute("data-f-filter");
      renderFeedbacksBoard();
    });
  });

  // Search Input for Feedbacks
  const searchInput = document.getElementById("feedback-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      feedbackSearchQuery = e.target.value;
      renderFeedbacksBoard();
    });
  }

  // Search Input for Students
  const studentSearchInput = document.getElementById("student-search-input");
  if (studentSearchInput) {
    studentSearchInput.addEventListener("input", (e) => {
      adminStudentSearchQuery = e.target.value;
      renderFeedbacksBoard();
    });
  }

  // Clear All Logs
  const clearBtn = document.getElementById("btn-clear-feedbacks");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (confirm("Kya aap sach me saare feedback logs clear karna chahte hain? Ye reversible nahi hai.")) {
        localStorage.removeItem("yourguider_feedback");
        alert("Saare feedback logs clear ho gaye hain!");
        renderFeedbacksBoard();
        renderFeedbackList(); // Sync profile preview list as well
      }
    });
  }

  // --- Admin Dashboard Tab Switching ---
  const tabFeedbacksBtn = document.getElementById("btn-tab-feedbacks");
  const tabStudentsBtn = document.getElementById("btn-tab-students");
  
  if (tabFeedbacksBtn && tabStudentsBtn) {
    tabFeedbacksBtn.addEventListener("click", () => {
      tabFeedbacksBtn.classList.add("active");
      tabStudentsBtn.classList.remove("active");
      adminActiveTab = "feedbacks";
      renderFeedbacksBoard();
    });

    tabStudentsBtn.addEventListener("click", () => {
      tabStudentsBtn.classList.add("active");
      tabFeedbacksBtn.classList.remove("active");
      adminActiveTab = "students";
      renderFeedbacksBoard();
    });
  }
}

// Render feedback logs dynamically
function renderFeedbackList() {
  const container = document.getElementById("feedback-items-container");
  if (!container) return;

  container.innerHTML = "";

  let feedbackList = [];
  const storedFeedback = localStorage.getItem("yourguider_feedback");
  if (storedFeedback) {
    try {
      feedbackList = JSON.parse(storedFeedback);
    } catch (err) {
      console.error(err);
    }
  }

  if (feedbackList.length === 0) {
    container.innerHTML = `<p style="text-align:center; font-size:0.85rem; color:var(--text-muted); padding:1rem 0;">Abhi tak koi feedback submit nahi hua hai.</p>`;
    return;
  }

  // Show most recent feedback first
  feedbackList.reverse().forEach(item => {
    const itemEl = document.createElement("div");
    itemEl.style.cssText = "background:#ffffff; border:1px solid var(--glass-border); border-radius:12px; padding:0.85rem; font-size:0.85rem; box-shadow: 0 2px 8px rgba(0,0,0,0.01);";
    
    const date = new Date(item.timestamp).toLocaleString();
    const typeLabel = item.type === "suggestion" ? "💡 Suggestion" : (item.type === "issue" ? "🪲 Bug Issue" : "💬 Feedback");
    const badgeColor = item.type === "suggestion" ? "var(--secondary)" : (item.type === "issue" ? "var(--rose)" : "var(--primary)");

    itemEl.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
        <span style="font-weight:700; color:${badgeColor};">${typeLabel}</span>
        <span style="font-size:0.75rem; color:var(--text-muted);">${date}</span>
      </div>
      <p style="color:var(--text-primary); margin-bottom:0.4rem; word-break:break-word; line-height:1.4;">${item.message}</p>
      <div style="font-size:0.75rem; color:var(--text-muted); text-align:right;">
        By: <strong>${item.userName}</strong> (${item.user})
      </div>
    `;
    container.appendChild(itemEl);
  });
}

// Render dedicated Feedbacks Board logs
let activeFeedbackFilter = "all";
let feedbackSearchQuery = "";

function renderFeedbacksBoard() {
  // Update students count statistic card
  let usersList = [];
  const storedUsers = localStorage.getItem("yourguider_users");
  if (storedUsers) {
    try {
      usersList = JSON.parse(storedUsers);
    } catch (e) {
      console.error(e);
    }
  }
  const statStudents = document.getElementById("admin-stat-students");
  if (statStudents) statStudents.textContent = usersList.length;

  // Render dynamic feedback stats
  let feedbackList = [];
  const storedFeedback = localStorage.getItem("yourguider_feedback");
  if (storedFeedback) {
    try {
      feedbackList = JSON.parse(storedFeedback);
    } catch (err) {
      console.error(err);
    }
  }

  const totalCount = feedbackList.length;
  const suggestionsCount = feedbackList.filter(item => item.type === "suggestion").length;
  const issuesCount = feedbackList.filter(item => item.type === "issue").length;

  const statTotal = document.getElementById("feedback-stat-total");
  const statSuggestions = document.getElementById("feedback-stat-suggestions");
  const statIssues = document.getElementById("feedback-stat-issues");

  if (statTotal) statTotal.textContent = totalCount;
  if (statSuggestions) statSuggestions.textContent = suggestionsCount;
  if (statIssues) statIssues.textContent = issuesCount;

  // Toggle tab layouts
  const feedbacksControls = document.getElementById("admin-feedbacks-controls");
  const studentsControls = document.getElementById("admin-students-controls");
  const feedbacksContainer = document.getElementById("board-feedback-items-container");
  const studentsContainer = document.getElementById("board-students-items-container");
  const clearLogsFooter = document.getElementById("admin-clear-logs-footer");

  if (adminActiveTab === "feedbacks") {
    if (feedbacksControls) feedbacksControls.style.display = "block";
    if (studentsControls) studentsControls.style.display = "none";
    if (feedbacksContainer) feedbacksContainer.style.display = "flex";
    if (studentsContainer) studentsContainer.style.display = "none";
    if (clearLogsFooter) clearLogsFooter.style.display = "flex";
    
    // Render Feedbacks logs
    renderFeedbacksListInBoard(feedbackList);
  } else {
    if (feedbacksControls) feedbacksControls.style.display = "none";
    if (studentsControls) studentsControls.style.display = "block";
    if (feedbacksContainer) feedbacksContainer.style.display = "none";
    if (studentsContainer) studentsContainer.style.display = "flex";
    if (clearLogsFooter) clearLogsFooter.style.display = "none";

    // Render Registered Students
    renderRegisteredStudents(usersList);
  }
}

// Sub-renderer for feedbacks in Board
function renderFeedbacksListInBoard(feedbackList) {
  const container = document.getElementById("board-feedback-items-container");
  if (!container) return;

  container.innerHTML = "";

  // Filter feedbacks
  let filteredList = feedbackList;
  if (activeFeedbackFilter !== "all") {
    filteredList = filteredList.filter(item => item.type === activeFeedbackFilter);
  }

  // Search filter
  if (feedbackSearchQuery) {
    const query = feedbackSearchQuery.toLowerCase().trim();
    filteredList = filteredList.filter(item => 
      (item.message && item.message.toLowerCase().includes(query)) ||
      (item.userName && item.userName.toLowerCase().includes(query)) ||
      (item.user && item.user.toLowerCase().includes(query))
    );
  }

  if (filteredList.length === 0) {
    container.innerHTML = `<p style="text-align:center; font-size:0.95rem; color:var(--text-muted); padding:2rem 0;">No matching feedback messages found.</p>`;
    return;
  }

  // Show most recent first
  const originalList = [...feedbackList]; // keep a copy to track correct index
  
  filteredList.slice().reverse().forEach((item) => {
    // Find correct index in the original list for deletion
    const origIndex = originalList.findIndex(o => o.timestamp === item.timestamp && o.message === item.message);
    
    const itemEl = document.createElement("div");
    itemEl.className = "glass-panel";
    itemEl.style.cssText = "background:#ffffff; border:1.5px solid var(--glass-border); border-radius:16px; padding:1.25rem; font-size:0.9rem; box-shadow: 0 4px 15px rgba(0,0,0,0.02); transition: all 0.2s ease;";
    
    // Hover styling
    itemEl.addEventListener("mouseenter", () => {
      itemEl.style.transform = "translateY(-2px)";
      itemEl.style.borderColor = "var(--primary)";
    });
    itemEl.addEventListener("mouseleave", () => {
      itemEl.style.transform = "translateY(0)";
      itemEl.style.borderColor = "var(--glass-border)";
    });

    const date = new Date(item.timestamp).toLocaleString();
    const typeLabel = item.type === "suggestion" ? "💡 Suggestion" : (item.type === "issue" ? "🪲 Bug Issue" : "💬 Feedback");
    const badgeColor = item.type === "suggestion" ? "var(--secondary)" : (item.type === "issue" ? "var(--rose)" : "var(--primary)");

    itemEl.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
        <span style="font-weight:800; color:${badgeColor}; font-size:0.85rem; background:rgba(255,255,255,0.8); padding:0.35rem 0.75rem; border-radius:50px; border:1px solid ${badgeColor}40;">${typeLabel}</span>
        <span style="font-size:0.8rem; color:var(--text-muted); font-weight:600;">${date}</span>
      </div>
      <p style="color:var(--text-primary); margin-bottom:0.75rem; word-break:break-word; line-height:1.5; font-size:0.95rem;">${item.message}</p>
      <div style="font-size:0.8rem; color:var(--text-muted); display:flex; justify-content:space-between; align-items:center; border-top:1px dashed #cbd5e1; padding-top:0.6rem;">
        <span>By: <strong>${item.userName}</strong> (${item.user})</span>
        <button class="btn-delete-single-feedback" data-index="${origIndex}" style="background:none; border:none; color:var(--rose); cursor:pointer; font-weight:700; font-size:0.8rem; display:flex; align-items:center; gap:3px;">
          🗑️ Delete
        </button>
      </div>
    `;

    // Bind single delete trigger
    itemEl.querySelector(".btn-delete-single-feedback").addEventListener("click", (e) => {
      const idxToDelete = parseInt(e.currentTarget.getAttribute("data-index"));
      deleteFeedbackItem(idxToDelete);
    });

    container.appendChild(itemEl);
  });
}

// Delete individual feedback item
function deleteFeedbackItem(index) {
  let feedbackList = [];
  const storedFeedback = localStorage.getItem("yourguider_feedback");
  if (storedFeedback) {
    try {
      feedbackList = JSON.parse(storedFeedback);
    } catch (err) {
      console.error(err);
    }
  }

  if (index >= 0 && index < feedbackList.length) {
    if (confirm("Are you sure you want to delete this feedback message?")) {
      feedbackList.splice(index, 1);
      localStorage.setItem("yourguider_feedback", JSON.stringify(feedbackList));
      renderFeedbacksBoard();
      renderFeedbackList(); // Sync profile preview list as well
    }
  }
}

// Sub-renderer for registered users directory in Board
let adminActiveTab = "feedbacks";
let adminStudentSearchQuery = "";

function renderRegisteredStudents(usersList) {
  const container = document.getElementById("board-students-items-container");
  if (!container) return;

  container.innerHTML = "";

  // Apply search query filter
  let filteredUsers = usersList;
  if (adminStudentSearchQuery) {
    const query = adminStudentSearchQuery.toLowerCase().trim();
    filteredUsers = filteredUsers.filter(u => 
      (u.name && u.name.toLowerCase().includes(query)) ||
      (u.contact && u.contact.toLowerCase().includes(query)) ||
      (u.stream && u.stream.toLowerCase().includes(query))
    );
  }

  if (filteredUsers.length === 0) {
    container.innerHTML = `<p style="text-align:center; font-size:0.95rem; color:var(--text-muted); padding:2rem 0;">No matching registered students found.</p>`;
    return;
  }

  // Show most recent registered first
  filteredUsers.slice().reverse().forEach((user) => {
    // Determine the index in the original list for deletion
    const origUserIndex = usersList.findIndex(u => u.contact === user.contact);
    
    const itemEl = document.createElement("div");
    itemEl.className = "glass-panel";
    itemEl.style.cssText = "background:#ffffff; border:1.5px solid var(--glass-border); border-radius:16px; padding:1.25rem; font-size:0.9rem; box-shadow: 0 4px 15px rgba(0,0,0,0.02); transition: all 0.2s ease; display:flex; flex-direction:column; gap:0.75rem;";
    
    // Hover styles
    itemEl.addEventListener("mouseenter", () => {
      itemEl.style.transform = "translateY(-2px)";
      itemEl.style.borderColor = "var(--primary)";
    });
    itemEl.addEventListener("mouseleave", () => {
      itemEl.style.transform = "translateY(0)";
      itemEl.style.borderColor = "var(--glass-border)";
    });

    const isUserAdmin = user.isAdmin === true;
    const nameLabel = isUserAdmin ? `👑 ${user.name}` : user.name;
    const adminBadge = isUserAdmin ? `<span style="font-size:0.7rem; font-weight:800; background:rgba(234, 88, 12, 0.1); color:var(--accent); padding:0.25rem 0.5rem; border-radius:4px; margin-left:0.5rem; text-transform:uppercase;">Owner</span>` : ``;

    const streamNames = {
      science_pcm: "Science (PCM) 💻",
      science_pcb: "Science (PCB) 🧬",
      commerce: "Commerce 📈",
      arts_humanities: "Arts & Humanities 🎨",
      undecided: "Undecided / Other ❓"
    };
    const streamLabel = streamNames[user.stream] || user.stream || "N/A";

    // Quiz Result
    let quizBadge = `<span style="font-weight:600; color:var(--text-muted);">⌛ Pending</span>`;
    if (user.quizCompleted && user.quizResults) {
      quizBadge = `<span style="font-weight:800; color:var(--secondary); background:rgba(13,148,136,0.1); padding:0.25rem 0.6rem; border-radius:4px;">✅ Result: ${user.quizResults.highestCategory}</span>`;
    }

    // Shortlisted count
    const shortlistsCount = user.savedCareers ? user.savedCareers.length : 0;
    const shortlistsLabel = shortlistsCount > 0 
      ? `<span style="font-weight:800; color:var(--rose); background:rgba(244, 63, 94, 0.1); padding:0.25rem 0.6rem; border-radius:4px;">❤️ ${shortlistsCount} Saved</span>`
      : `<span style="color:var(--text-muted);">💔 0 Saved</span>`;

    // Interests
    const interestChips = (user.interests && user.interests.length > 0)
      ? user.interests.map(i => {
          const interestIcons = { tech: "💻 Tech", medical: "🩺 Medical", finance: "📊 Biz", artistic: "🎨 Design", legal: "⚖️ Law", aviation: "✈️ Pilot" };
          return `<span style="font-size:0.75rem; background:#f1f5f9; border:1px solid #e2e8f0; color:#475569; padding:0.15rem 0.45rem; border-radius:6px; font-weight:600;">${interestIcons[i] || i}</span>`;
        }).join(" ")
      : `<span style="font-size:0.75rem; color:var(--text-muted); font-style:italic;">No selected interests</span>`;

    // Can delete only if it's not the logged-in user and not the admin@yourguider.com admin
    const isDeletable = !isUserAdmin && user.contact !== appState.user.contact && user.contact !== "admin@yourguider.com";
    const deleteButtonHtml = isDeletable
      ? `<button class="btn-delete-student" data-index="${origUserIndex}" style="background:none; border:none; color:var(--rose); cursor:pointer; font-weight:700; font-size:0.8rem; display:flex; align-items:center; gap:3px; padding:0;">
          🗑️ Remove Student
         </button>`
      : `<span style="font-size:0.75rem; color:var(--text-muted); font-style:italic;">🔒 Protected</span>`;

    // Avatar initials
    const initials = user.name ? user.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase() : "ST";

    itemEl.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.5rem;">
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <div style="width:40px; height:40px; border-radius:50%; background:linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%); color:#ffffff; font-weight:800; font-size:0.9rem; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 10px rgba(37,99,235,0.15);">${initials}</div>
          <div>
            <h4 style="font-size:1rem; font-weight:800; color:var(--primary); display:flex; align-items:center; margin-bottom:0.15rem;">
              ${nameLabel} ${adminBadge}
            </h4>
            <span style="font-size:0.8rem; color:var(--text-muted); font-weight:600;">Contact: ${user.contact}</span>
          </div>
        </div>
        <div style="font-size:0.8rem; text-align:right;">
          ${deleteButtonHtml}
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1.2fr 0.8fr; gap:0.5rem; background:#f8fafc; border-radius:8px; padding:0.75rem; border:1px solid #f1f5f9; margin-top:0.25rem;">
        <div>
          <span style="font-size:0.8rem; color:var(--text-muted);">Academic Stream:</span><br>
          <strong style="font-size:0.85rem; color:var(--secondary);">${streamLabel}</strong>
        </div>
        <div style="text-align:right;">
          <span style="font-size:0.8rem; color:var(--text-muted);">Quiz Status:</span><br>
          <div style="margin-top:0.15rem;">${quizBadge}</div>
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; padding-top:0.4rem;">
        <div style="display:flex; gap:0.35rem; align-items:center; flex-wrap:wrap;">
          <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700; margin-right:0.25rem;">Interests:</span>
          ${interestChips}
        </div>
        <div>
          ${shortlistsLabel}
        </div>
      </div>
    `;

    // Bind delete click event if button exists
    const delBtn = itemEl.querySelector(".btn-delete-student");
    if (delBtn) {
      delBtn.addEventListener("click", (e) => {
        const idxToDelete = parseInt(e.currentTarget.getAttribute("data-index"));
        deleteStudentItem(idxToDelete);
      });
    }

    container.appendChild(itemEl);
  });
}

// Delete student item from local storage users list
function deleteStudentItem(index) {
  let usersList = [];
  const storedUsers = localStorage.getItem("yourguider_users");
  if (storedUsers) {
    try {
      usersList = JSON.parse(storedUsers);
    } catch (e) {
      console.error(e);
    }
  }

  if (index >= 0 && index < usersList.length) {
    const userToDelete = usersList[index];
    if (confirm(`Kya aap sach me student "${userToDelete.name}" ka profile remove karna chahte hain?`)) {
      usersList.splice(index, 1);
      localStorage.setItem("yourguider_users", JSON.stringify(usersList));
      
      // Refresh board stats and lists
      renderFeedbacksBoard();
    }
  }
}


