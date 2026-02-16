export type Translations = typeof en;

export const en = {
    hero: {
        status: "Available for new opportunities",
        headline: "Senior Mobile Engineer",
        secondary: "Android \u2022 iOS \u2022 Cross-Platform | 8+ Years of Experience",
        description:
            "I design, build, and scale high-performance mobile applications with a strong focus on clean architecture, performance, and long-term maintainability.",
        viewProjects: "View Projects",
        downloadResume: "Download Resume",
    },
    about: {
        title: "About Me",
        yearsLabel: "Years Experience",
        tldr: "Senior Mobile Engineer with 8+ years of experience building Android, iOS, and cross-platform applications at scale. Specialized in architecture, performance optimization, and leading mobile projects end-to-end.",
        paragraphs: [
            "I am a Senior Mobile Engineer with 8+ years of experience building high-performance applications across Android, iOS, and cross-platform ecosystems. My expertise spans Kotlin, Jetpack Compose, SwiftUI, Flutter and React Native, supported by a deep understanding of modern mobile architecture including Clean Architecture, MVVM, modularization, and scalable UI systems.",
            "Across my career, I have led mobile projects end-to-end from architecture design to publishing(play store) apps used across Africa and Europe. At RightCom, I improved stability and performance across multiple enterprise applications, mentored mobile teams, implemented CI/CD pipelines that shortened release cycles, and systematically improved user engagement and developer experience. My work has also contributed to measurable product improvements, including reduced API latency, increased app stability, better UX, and more efficient cross-platform consistency.",
            "I am passionate about building clean, maintainable codebases, designing intuitive user experiences, and solving complex engineering challenges. Whether developing native apps, rebuilding existing systems, or delivering multi-platform features, I thrive in environments where quality, innovation, and collaboration matter. I continue to explore evolving mobile technologies while helping teams ship reliable, impactful products at scale.",
        ],
        highlights: [
            "8+ years of mobile development experience",
            "Lead Mobile Developer at RightCom",
            "Expert in iOS (Swift, SwiftUI) & Android (Kotlin)",
            "Cross-platform specialist (React Native, Flutter, KMM)",
            "Clean Architecture & MVVM advocate",
            "Backend integration expert (Firebase, Supabase)",
        ],
    },
    nav: {
        subtitle: "Senior Mobile Engineer",
        about: "About",
        projects: "Projects",
        skills: "Skills",
        experience: "Experience",
        contact: "Contact",
        getInTouch: "Get In Touch",
    },
    experience: {
        title: "Professional Experience",
        subtitle: "8+ years of measurable impact across mobile platforms",
        keyImpact: "Key Impact:",
        roles: [
            {
                title: "Lead Mobile Developer",
                type: "Remote",
                location: "Remote",
                achievements: [
                    "Spearheaded the design and development of next-generation mobile applications powering customer experience systems across Africa.",
                    "Led and mentored a team of mobile developers, elevating engineering quality and delivery efficiency.",
                    "Architected end-to-end mobile solutions with seamless integration into cloud-based products.",
                    "Strengthened product reliability through performance optimizations, analytics, automated testing, and CI/CD pipelines.",
                ],
            },
            {
                title: "Mobile Developer Advocate",
                type: "Remote",
                location: "Remote",
                achievements: [
                    "Drove adoption of RightCom\u2019s mobile products, contributing to a **25% increase** in product sales.",
                    "Built and cultivated a developer community, reducing support tickets by **15%** through education and engagement.",
                    "Streamlined developer onboarding and documentation, cutting onboarding time by **30%**.",
                    "Strengthened developer experience across the entire product ecosystem.",
                ],
            },
            {
                title: "Mobile Application Developer",
                type: "Remote",
                location: "Remote",
                achievements: [
                    "Built and optimized Android applications that contributed to a **20% increase** in upselling and cross-selling revenue.",
                    "Implemented real-time notification systems, reducing client wait times by **15%** for enterprise accounts.",
                    "Developed and maintained RightQ Kiosk, improving queue efficiency by **25%** across deployment locations.",
                    "Integrated REST APIs, real-time data streams, and hardware interfaces for enterprise-scale reliability.",
                ],
            },
            {
                title: "Senior iOS Developer",
                type: "Remote",
                location: "Remote",
                achievements: [
                    "Rebuilt the WorkerNav iOS app (v3) from the ground up using SwiftUI and Clean Architecture, improving long-term maintainability.",
                    "Integrated AI-powered reporting modules, enhancing field worker productivity and data accuracy.",
                    "Collaborated with backend and Android teams to deliver a consistent multi-platform experience.",
                    "Optimized navigation flows and offline data handling for improved performance in low-connectivity environments.",
                ],
            },
        ],
    },
    projects: {
        title: "Featured Projects",
        subtitle:
            "A selection of my best work showcasing expertise in mobile development, clean architecture, and user-centric design",
        otherProjects: "Other Projects",
        caseStudyBadge: "Featured Case Study",
        viewOnGithub: "View on GitHub",
        labels: {
            problem: "Problem",
            solution: "Solution",
            myRole: "My Role",
            architecture: "Architecture",
            technologies: "Technologies",
            keyChallenges: "Key Challenges",
            outcome: "Outcome",
            whatILearned: "What I Learned",
            overview: "Overview",
            impact: "Impact",
        },
        caseStudy: {
            subtitle: "Field Workforce Management Platform \u2014 iOS App (v3 Rebuild)",
            role: "Senior iOS Developer",
            overview:
                "WorkerNav is a field workforce management platform used by organizations to coordinate, track, and optimize mobile field teams. I was brought on to rebuild the iOS application from the ground up (v3), replacing an aging codebase with a modern, maintainable architecture designed for long-term scalability.",
            responsibilities: [
                "Sole iOS engineer responsible for the full v3 rebuild \u2014 from architecture design to delivery.",
                "Designed and implemented the app\u2019s modular architecture, separating presentation, domain, and data layers.",
                "Collaborated closely with the backend and Android teams to ensure a consistent multi-platform experience.",
                "Owned technical decisions around state management, navigation, and offline-first data handling.",
            ],
            architecture: [
                "Clean Architecture with MVVM \u2014 strict separation into presentation, domain, and data layers for testability and maintainability.",
                "SwiftUI declarative views with ObservableObject-based state management and Combine for reactive data flows.",
                "Modularized component design \u2014 refactored complex UI components (e.g., FormField) into smaller, focused modules (under 60 lines each) following SOLID principles.",
                "Supabase integration for backend services, with robust session persistence and automatic token refresh.",
            ],
            challenges: [
                {
                    problem: "App launch took ~30 seconds due to heavy initialization on the main thread and redundant setup logic.",
                    solution:
                        "Profiled and restructured the launch pipeline, eliminating blocking calls, deduplicating initializations, and deferring non-critical work. Reduced launch time significantly.",
                },
                {
                    problem: "Field workers operate in low-connectivity environments, causing data sync failures and degraded UX.",
                    solution:
                        "Implemented an offline-first data layer with local persistence and background sync, ensuring seamless operation regardless of network conditions.",
                },
                {
                    problem: "Ongoing task state changes were not reflected in the navigation UI, breaking the user flow.",
                    solution:
                        "Redesigned the reactive state system so task start/join events propagated correctly through the NavigationStack, keeping the UI consistent with real-time task state.",
                },
            ],
            impact: [
                "Delivered a complete iOS v3 rebuild using SwiftUI and Clean Architecture.",
                "Dramatically improved app launch performance.",
                "Integrated AI-powered reporting modules, enhancing field worker productivity and data accuracy.",
                "Achieved a consistent multi-platform experience alongside the Android team.",
                "Established a modular, maintainable codebase that scales with new feature development.",
            ],
        },
        items: [
            {
                description:
                    "A comprehensive recipe discovery app that helps users find, save, and cook delicious meals with detailed nutritional information using the Spoonacular API.",
                problem:
                    "Home cooks struggle to find recipes that match their dietary preferences and available ingredients, leading to repetitive meals and food waste.",
                solution:
                    "Developed an intuitive recipe discovery platform with advanced search filters, ingredient-based search, personalized recommendations, and offline support for saved recipes.",
                role: "Solo Developer - Architecture, Development, UI/UX Implementation",
                architecture:
                    "Implemented Clean Architecture with MVVM pattern, separating presentation, domain, and data layers for maintainability and testability.",
                challenges:
                    "Efficiently managing large recipe datasets and implementing offline functionality for saved recipes while maintaining smooth performance.",
                outcome:
                    "Created a polished app with smooth performance, offline support for favorites, and an intuitive user experience with comprehensive nutrition tracking.",
                learned:
                    "Deepened expertise in Android Architecture Components and API integration patterns.",
            },
            {
                description:
                    "A real-time currency converter app providing accurate exchange rates for multiple currencies using the Open Exchange Rates API with offline support.",
                problem:
                    "Users need quick, reliable currency conversion for travel and financial planning with support for multiple currencies and offline access.",
                solution:
                    "Built a currency converter with real-time exchange rates, search functionality, and local caching for offline use with a clean, intuitive interface.",
                role: "Solo Developer - Full-stack mobile development, API integration, UI/UX design",
                architecture:
                    "Utilized Clean Architecture with MVVM pattern for separation of concerns and comprehensive unit testing coverage.",
                challenges:
                    "Implementing efficient caching strategies for exchange rates and handling offline mode gracefully while maintaining data accuracy.",
                outcome:
                    "Delivered a performant currency converter with reliable offline support, comprehensive unit tests, and seamless user experience.",
                learned:
                    "Enhanced skills in unit testing, API integration patterns, and offline-first mobile architecture.",
            },
            {
                description:
                    "A modern job recruitment platform featuring dual dashboards for job seekers and enterprises, built with Jetpack Compose and modern Android development practices.",
                problem:
                    "Job seekers and enterprises need an efficient platform to connect, with tailored experiences for candidate exploration and enterprise talent management.",
                solution:
                    "Developed a comprehensive recruitment app with separate dashboards for talents and enterprises, featuring real-time chat, application tracking, and employer branding tools.",
                role: "Lead Developer - Architecture, UI/UX with Jetpack Compose, feature development",
                architecture:
                    "Implemented modern Android architecture with Jetpack Compose for declarative UI, following clean architecture principles and state management best practices.",
                challenges:
                    "Managing complex state across dual dashboard experiences and implementing real-time features with smooth animations in Jetpack Compose.",
                outcome:
                    "Created a polished recruitment platform with modern UI, real-time capabilities, and excellent UX for both job seekers and enterprises.",
                learned:
                    "Mastered Jetpack Compose for complex UI implementations and advanced state management patterns for real-time applications.",
            },
            {
                description:
                    "An elegant iOS app showcasing beautiful landmarks with interactive maps, detailed information, and favorite management using SwiftUI and MapKit.",
                problem:
                    "Need for an educational iOS app demonstrating SwiftUI best practices and modern iOS development patterns with elegant UI and smooth interactions.",
                solution:
                    "Developed a showcase app implementing SwiftUI views, navigation, state management, and MapKit integration with smooth animations.",
                role: "iOS Developer - SwiftUI implementation, UI design, feature development",
                architecture:
                    "Followed SwiftUI\u2019s declarative paradigm with ObservableObject for state management and Combine for reactive updates.",
                challenges:
                    "Mastering SwiftUI\u2019s declarative syntax and implementing smooth view transitions and animations while integrating MapKit effectively.",
                outcome:
                    "Created a polished iOS app demonstrating proficiency in modern SwiftUI development and Apple\u2019s design guidelines with excellent performance.",
                learned:
                    "Gained deep understanding of SwiftUI\u2019s view lifecycle, state management, and native iOS patterns for building production-quality apps.",
            },
            {
                description:
                    "An innovative weather forecasting app providing accurate real-time weather updates with beautiful visualizations, offline support, and multiple location tracking.",
                problem:
                    "Users need reliable weather information with intuitive visualization, offline access for travel and planning, and support for tracking multiple locations.",
                solution:
                    "Built a cross-platform weather app with real-time data, location services, multiple city tracking, local caching, and smooth animations.",
                role: "Lead Developer - Full-stack mobile development, API integration, UI/UX design",
                architecture:
                    "Utilized Flutter\u2019s reactive framework with BLoC pattern for state management, ensuring predictable app behavior and easy testing.",
                challenges:
                    "Implementing smooth animations for weather transitions and managing complex state across multiple weather locations with offline support.",
                outcome:
                    "Delivered a performant, visually appealing app with offline support, seamless user experience across iOS and Android, and dynamic weather visualizations.",
                learned:
                    "Mastered Flutter animations and advanced state management patterns for complex data flows in cross-platform applications.",
            },
        ],
    },
    skills: {
        title: "Skills & Expertise",
        subtitle: "Core competencies built over 8+ years of mobile engineering",
        categories: [
            "Core Mobile Expertise",
            "Architecture & Engineering Practices",
            "Cross-Platform & Multiplatform",
            "Tools, CI/CD & Collaboration",
        ],
    },
    certifications: {
        title: "Certifications",
        subtitle: "Professional certifications and specialized training",
    },
    education: {
        title: "Education",
        subtitle: "Academic foundation in software engineering",
        degree: "Master\u2019s in Software Architecture",
    },
    contact: {
        title: "Get In Touch",
        subtitle: "Open to freelance projects and full-time opportunities",
        availableBadge: "Available for New Opportunities",
        description:
            "I\u2019m actively seeking new opportunities to contribute my expertise in iOS and mobile development. Whether you have a project in mind, need technical consultation, or want to discuss potential collaboration, I\u2019d love to hear from you.",
        openTo: "Open to both",
        freelance: "freelance projects",
        and: "and",
        fullTime: "full-time positions",
        sendEmail: "Send Me an Email",
        locationLabel: "Location",
    },
    footer: {
        builtWith: "Built with",
        using: "& React & TypeScript",
    },
};

export const fr: Translations = {
    hero: {
        status: "Disponible pour de nouvelles opportunit\u00e9s",
        headline: "Ing\u00e9nieur Mobile Senior",
        secondary: "Android \u2022 iOS \u2022 Cross-Platform | 8+ ans d\u2019exp\u00e9rience",
        description:
            "Je con\u00e7ois, d\u00e9veloppe et fais \u00e9voluer des applications mobiles haute performance, avec un accent particulier sur l\u2019architecture propre, la performance et la maintenabilit\u00e9 \u00e0 long terme.",
        viewProjects: "Voir les projets",
        downloadResume: "T\u00e9l\u00e9charger le CV",
    },
    about: {
        title: "\u00c0 propos",
        yearsLabel: "Ans d\u2019exp\u00e9rience",
        tldr: "Ing\u00e9nieur Mobile Senior avec plus de 8 ans d\u2019exp\u00e9rience dans la conception d\u2019applications Android, iOS et cross-platform \u00e0 grande \u00e9chelle. Sp\u00e9cialis\u00e9 en architecture, optimisation des performances et pilotage de projets mobiles de bout en bout.",
        paragraphs: [
            "Je suis un Ing\u00e9nieur Mobile Senior avec plus de 8 ans d\u2019exp\u00e9rience dans le d\u00e9veloppement d\u2019applications hautes performances sur Android, iOS et les \u00e9cosyst\u00e8mes cross-platform. Mon expertise couvre Kotlin, Jetpack Compose, SwiftUI, Flutter et React Native, appuy\u00e9e par une compr\u00e9hension approfondie des architectures mobiles modernes\u00a0: Clean Architecture, MVVM, modularisation et syst\u00e8mes UI \u00e9volutifs.",
            "Au fil de ma carri\u00e8re, j\u2019ai pilot\u00e9 des projets mobiles de bout en bout, de la conception architecturale \u00e0 la publication sur le Play Store, pour des applications utilis\u00e9es en Afrique et en Europe. Chez RightCom, j\u2019ai am\u00e9lior\u00e9 la stabilit\u00e9 et les performances de plusieurs applications d\u2019entreprise, encadr\u00e9 des \u00e9quipes mobiles, mis en place des pipelines CI/CD acc\u00e9l\u00e9rant les cycles de livraison, et syst\u00e9matiquement am\u00e9lior\u00e9 l\u2019engagement utilisateur ainsi que l\u2019exp\u00e9rience d\u00e9veloppeur.",
            "Je suis passionn\u00e9 par la cr\u00e9ation de bases de code propres et maintenables, la conception d\u2019exp\u00e9riences utilisateur intuitives et la r\u00e9solution de d\u00e9fis techniques complexes. Que ce soit pour d\u00e9velopper des applications natives, reconstruire des syst\u00e8mes existants ou livrer des fonctionnalit\u00e9s multi-plateformes, je m\u2019\u00e9panouis dans des environnements o\u00f9 qualit\u00e9, innovation et collaboration sont au c\u0153ur des priorit\u00e9s.",
        ],
        highlights: [
            "8+ ans d\u2019exp\u00e9rience en d\u00e9veloppement mobile",
            "Lead Mobile Developer chez RightCom",
            "Expert iOS (Swift, SwiftUI) et Android (Kotlin)",
            "Sp\u00e9cialiste cross-platform (React Native, Flutter, KMM)",
            "Adepte de la Clean Architecture et du MVVM",
            "Expert int\u00e9gration backend (Firebase, Supabase)",
        ],
    },
    nav: {
        subtitle: "Ingénieur Mobile Senior",
        about: "À propos",
        projects: "Projets",
        skills: "Compétences",
        experience: "Expérience",
        contact: "Contact",
        getInTouch: "Me contacter",
    },
    experience: {
        title: "Exp\u00e9rience professionnelle",
        subtitle: "8+ ans d\u2019impact mesurable sur les plateformes mobiles",
        keyImpact: "Impact cl\u00e9\u00a0:",
        roles: [
            {
                title: "Lead Mobile Developer",
                type: "\u00c0 distance",
                location: "\u00c0 distance",
                achievements: [
                    "Dirig\u00e9 la conception et le d\u00e9veloppement d\u2019applications mobiles de nouvelle g\u00e9n\u00e9ration alimentant les syst\u00e8mes d\u2019exp\u00e9rience client \u00e0 travers l\u2019Afrique.",
                    "Encadr\u00e9 et mentor\u00e9 une \u00e9quipe de d\u00e9veloppeurs mobiles, am\u00e9liorant la qualit\u00e9 d\u2019ing\u00e9nierie et l\u2019efficacit\u00e9 de livraison.",
                    "Architectur\u00e9 des solutions mobiles compl\u00e8tes avec une int\u00e9gration fluide dans les produits cloud.",
                    "Renforc\u00e9 la fiabilit\u00e9 des produits gr\u00e2ce aux optimisations de performance, l\u2019analytique, les tests automatis\u00e9s et les pipelines CI/CD.",
                ],
            },
            {
                title: "Mobile Developer Advocate",
                type: "\u00c0 distance",
                location: "\u00c0 distance",
                achievements: [
                    "Stimul\u00e9 l\u2019adoption des produits mobiles de RightCom, contribuant \u00e0 une **augmentation de 25\u00a0%** des ventes.",
                    "Cr\u00e9\u00e9 et anim\u00e9 une communaut\u00e9 de d\u00e9veloppeurs, r\u00e9duisant les tickets de support de **15\u00a0%** gr\u00e2ce \u00e0 la formation et l\u2019engagement.",
                    "Rationalis\u00e9 l\u2019int\u00e9gration et la documentation des d\u00e9veloppeurs, r\u00e9duisant le temps d\u2019onboarding de **30\u00a0%**.",
                    "Am\u00e9lior\u00e9 l\u2019exp\u00e9rience d\u00e9veloppeur sur l\u2019ensemble de l\u2019\u00e9cosyst\u00e8me produit.",
                ],
            },
            {
                title: "Mobile Application Developer",
                type: "\u00c0 distance",
                location: "\u00c0 distance",
                achievements: [
                    "D\u00e9velopp\u00e9 et optimis\u00e9 des applications Android ayant contribu\u00e9 \u00e0 une **augmentation de 20\u00a0%** du chiffre d\u2019affaires en ventes crois\u00e9es.",
                    "Impl\u00e9ment\u00e9 des syst\u00e8mes de notification en temps r\u00e9el, r\u00e9duisant les temps d\u2019attente client de **15\u00a0%** pour les comptes entreprise.",
                    "D\u00e9velopp\u00e9 et maintenu RightQ Kiosk, am\u00e9liorant l\u2019efficacit\u00e9 des files d\u2019attente de **25\u00a0%** sur l\u2019ensemble des sites de d\u00e9ploiement.",
                    "Int\u00e9gr\u00e9 des API REST, des flux de donn\u00e9es en temps r\u00e9el et des interfaces mat\u00e9rielles pour une fiabilit\u00e9 \u00e0 l\u2019\u00e9chelle enterprise.",
                ],
            },
            {
                title: "Senior iOS Developer",
                type: "\u00c0 distance",
                location: "\u00c0 distance",
                achievements: [
                    "Reconstruit l\u2019application iOS WorkerNav (v3) de z\u00e9ro avec SwiftUI et Clean Architecture, am\u00e9liorant la maintenabilit\u00e9 \u00e0 long terme.",
                    "Int\u00e9gr\u00e9 des modules de reporting pilot\u00e9s par l\u2019IA, am\u00e9liorant la productivit\u00e9 des agents de terrain et la pr\u00e9cision des donn\u00e9es.",
                    "Collabor\u00e9 avec les \u00e9quipes backend et Android pour offrir une exp\u00e9rience multi-plateforme coh\u00e9rente.",
                    "Optimis\u00e9 les flux de navigation et la gestion des donn\u00e9es hors ligne pour de meilleures performances en environnement \u00e0 faible connectivit\u00e9.",
                ],
            },
        ],
    },
    projects: {
        title: "Projets phares",
        subtitle:
            "Une s\u00e9lection de mes meilleurs travaux illustrant mon expertise en d\u00e9veloppement mobile, architecture propre et conception centr\u00e9e utilisateur",
        otherProjects: "Autres projets",
        caseStudyBadge: "\u00c9tude de cas",
        viewOnGithub: "Voir sur GitHub",
        labels: {
            problem: "Probl\u00e8me",
            solution: "Solution",
            myRole: "Mon r\u00f4le",
            architecture: "Architecture",
            technologies: "Technologies",
            keyChallenges: "D\u00e9fis cl\u00e9s",
            outcome: "R\u00e9sultat",
            whatILearned: "Ce que j\u2019ai appris",
            overview: "Aper\u00e7u",
            impact: "Impact",
        },
        caseStudy: {
            subtitle: "Plateforme de gestion des \u00e9quipes terrain \u2014 Application iOS (refonte v3)",
            role: "D\u00e9veloppeur iOS Senior",
            overview:
                "WorkerNav est une plateforme de gestion des \u00e9quipes de terrain utilis\u00e9e par les organisations pour coordonner, suivre et optimiser les \u00e9quipes mobiles sur le terrain. J\u2019ai \u00e9t\u00e9 recrut\u00e9 pour reconstruire l\u2019application iOS de z\u00e9ro (v3), rempla\u00e7ant une base de code vieillissante par une architecture moderne et maintenable, con\u00e7ue pour une \u00e9volutivit\u00e9 \u00e0 long terme.",
            responsibilities: [
                "Seul ing\u00e9nieur iOS responsable de la refonte compl\u00e8te v3 \u2014 de la conception architecturale \u00e0 la livraison.",
                "Con\u00e7u et impl\u00e9ment\u00e9 l\u2019architecture modulaire de l\u2019application, s\u00e9parant les couches pr\u00e9sentation, domaine et donn\u00e9es.",
                "Collabor\u00e9 \u00e9troitement avec les \u00e9quipes backend et Android pour assurer une exp\u00e9rience multi-plateforme coh\u00e9rente.",
                "Responsable des d\u00e9cisions techniques autour de la gestion d\u2019\u00e9tat, la navigation et la gestion des donn\u00e9es hors ligne.",
            ],
            architecture: [
                "Clean Architecture avec MVVM \u2014 s\u00e9paration stricte en couches pr\u00e9sentation, domaine et donn\u00e9es pour la testabilit\u00e9 et la maintenabilit\u00e9.",
                "Vues d\u00e9claratives SwiftUI avec gestion d\u2019\u00e9tat bas\u00e9e sur ObservableObject et Combine pour les flux de donn\u00e9es r\u00e9actifs.",
                "Conception de composants modularis\u00e9s \u2014 refactorisation de composants UI complexes (ex.\u00a0: FormField) en modules cibl\u00e9s et r\u00e9duits (moins de 60 lignes chacun) selon les principes SOLID.",
                "Int\u00e9gration Supabase pour les services backend, avec persistance de session robuste et rafra\u00eechissement automatique des tokens.",
            ],
            challenges: [
                {
                    problem: "Le lancement de l\u2019application prenait environ 30 secondes en raison d\u2019initialisations lourdes sur le thread principal et d\u2019une logique de configuration redondante.",
                    solution:
                        "Profil\u00e9 et restructur\u00e9 le pipeline de lancement, \u00e9liminant les appels bloquants, d\u00e9dupliquant les initialisations et diff\u00e9rant les t\u00e2ches non critiques. R\u00e9duction significative du temps de lancement.",
                },
                {
                    problem: "Les agents de terrain op\u00e8rent dans des environnements \u00e0 faible connectivit\u00e9, provoquant des \u00e9checs de synchronisation et une exp\u00e9rience utilisateur d\u00e9grad\u00e9e.",
                    solution:
                        "Impl\u00e9ment\u00e9 une couche de donn\u00e9es offline-first avec persistance locale et synchronisation en arri\u00e8re-plan, assurant un fonctionnement fluide ind\u00e9pendamment des conditions r\u00e9seau.",
                },
                {
                    problem: "Les changements d\u2019\u00e9tat des t\u00e2ches en cours n\u2019\u00e9taient pas refl\u00e9t\u00e9s dans l\u2019interface de navigation, cassant le flux utilisateur.",
                    solution:
                        "Red\u00e9fini le syst\u00e8me d\u2019\u00e9tat r\u00e9actif pour que les \u00e9v\u00e9nements de d\u00e9marrage/rejoignement de t\u00e2che se propagent correctement dans le NavigationStack, maintenant l\u2019interface coh\u00e9rente avec l\u2019\u00e9tat des t\u00e2ches en temps r\u00e9el.",
                },
            ],
            impact: [
                "Livr\u00e9 une refonte compl\u00e8te de l\u2019iOS v3 utilisant SwiftUI et Clean Architecture.",
                "Am\u00e9lioration spectaculaire des performances de lancement de l\u2019application.",
                "Int\u00e9gr\u00e9 des modules de reporting pilot\u00e9s par l\u2019IA, am\u00e9liorant la productivit\u00e9 des agents de terrain et la pr\u00e9cision des donn\u00e9es.",
                "Obtenu une exp\u00e9rience multi-plateforme coh\u00e9rente avec l\u2019\u00e9quipe Android.",
                "\u00c9tabli une base de code modulaire et maintenable qui \u00e9volue avec le d\u00e9veloppement de nouvelles fonctionnalit\u00e9s.",
            ],
        },
        items: [
            {
                description:
                    "Une application compl\u00e8te de d\u00e9couverte de recettes qui aide les utilisateurs \u00e0 trouver, sauvegarder et cuisiner de d\u00e9licieux repas avec des informations nutritionnelles d\u00e9taill\u00e9es via l\u2019API Spoonacular.",
                problem:
                    "Les cuisiniers amateurs peinent \u00e0 trouver des recettes correspondant \u00e0 leurs pr\u00e9f\u00e9rences alimentaires et ingr\u00e9dients disponibles, menant \u00e0 des repas r\u00e9p\u00e9titifs et au gaspillage alimentaire.",
                solution:
                    "D\u00e9velopp\u00e9 une plateforme intuitive de d\u00e9couverte de recettes avec filtres de recherche avanc\u00e9s, recherche par ingr\u00e9dients, recommandations personnalis\u00e9es et support hors ligne pour les recettes sauvegard\u00e9es.",
                role: "D\u00e9veloppeur solo \u2013 Architecture, D\u00e9veloppement, Impl\u00e9mentation UI/UX",
                architecture:
                    "Impl\u00e9mentation de la Clean Architecture avec le pattern MVVM, s\u00e9parant les couches pr\u00e9sentation, domaine et donn\u00e9es pour la maintenabilit\u00e9 et la testabilit\u00e9.",
                challenges:
                    "Gestion efficace de grands ensembles de donn\u00e9es de recettes et impl\u00e9mentation de la fonctionnalit\u00e9 hors ligne pour les recettes sauvegard\u00e9es tout en maintenant des performances fluides.",
                outcome:
                    "Cr\u00e9\u00e9 une application soign\u00e9e avec des performances fluides, un support hors ligne pour les favoris et une exp\u00e9rience utilisateur intuitive avec un suivi nutritionnel complet.",
                learned:
                    "Approfondissement de l\u2019expertise en Android Architecture Components et patterns d\u2019int\u00e9gration d\u2019API.",
            },
            {
                description:
                    "Une application de conversion de devises en temps r\u00e9el fournissant des taux de change pr\u00e9cis pour plusieurs devises via l\u2019API Open Exchange Rates avec support hors ligne.",
                problem:
                    "Les utilisateurs ont besoin d\u2019une conversion de devises rapide et fiable pour les voyages et la planification financi\u00e8re, avec support de multiples devises et acc\u00e8s hors ligne.",
                solution:
                    "D\u00e9velopp\u00e9 un convertisseur de devises avec taux de change en temps r\u00e9el, fonctionnalit\u00e9 de recherche et mise en cache locale pour une utilisation hors ligne avec une interface claire et intuitive.",
                role: "D\u00e9veloppeur solo \u2013 D\u00e9veloppement mobile full-stack, int\u00e9gration API, design UI/UX",
                architecture:
                    "Utilisation de la Clean Architecture avec le pattern MVVM pour la s\u00e9paration des responsabilit\u00e9s et une couverture compl\u00e8te de tests unitaires.",
                challenges:
                    "Impl\u00e9mentation de strat\u00e9gies de mise en cache efficaces pour les taux de change et gestion gracieuse du mode hors ligne tout en maintenant la pr\u00e9cision des donn\u00e9es.",
                outcome:
                    "Livr\u00e9 un convertisseur de devises performant avec support hors ligne fiable, tests unitaires complets et exp\u00e9rience utilisateur fluide.",
                learned:
                    "Renforcement des comp\u00e9tences en tests unitaires, patterns d\u2019int\u00e9gration API et architecture mobile offline-first.",
            },
            {
                description:
                    "Une plateforme de recrutement moderne avec des tableaux de bord distincts pour les chercheurs d\u2019emploi et les entreprises, construite avec Jetpack Compose et les pratiques modernes de d\u00e9veloppement Android.",
                problem:
                    "Les chercheurs d\u2019emploi et les entreprises ont besoin d\u2019une plateforme efficace pour se connecter, avec des exp\u00e9riences adapt\u00e9es \u00e0 l\u2019exploration de candidats et la gestion des talents.",
                solution:
                    "D\u00e9velopp\u00e9 une application de recrutement compl\u00e8te avec des tableaux de bord s\u00e9par\u00e9s pour les talents et les entreprises, incluant chat en temps r\u00e9el, suivi des candidatures et outils de marque employeur.",
                role: "D\u00e9veloppeur principal \u2013 Architecture, UI/UX avec Jetpack Compose, d\u00e9veloppement de fonctionnalit\u00e9s",
                architecture:
                    "Impl\u00e9mentation d\u2019une architecture Android moderne avec Jetpack Compose pour une interface d\u00e9clarative, suivant les principes de clean architecture et les bonnes pratiques de gestion d\u2019\u00e9tat.",
                challenges:
                    "Gestion d\u2019\u00e9tats complexes entre les deux tableaux de bord et impl\u00e9mentation de fonctionnalit\u00e9s temps r\u00e9el avec des animations fluides dans Jetpack Compose.",
                outcome:
                    "Cr\u00e9\u00e9 une plateforme de recrutement soign\u00e9e avec une interface moderne, des capacit\u00e9s temps r\u00e9el et une excellente UX pour les chercheurs d\u2019emploi et les entreprises.",
                learned:
                    "Ma\u00eetrise de Jetpack Compose pour des impl\u00e9mentations UI complexes et patterns avanc\u00e9s de gestion d\u2019\u00e9tat pour les applications temps r\u00e9el.",
            },
            {
                description:
                    "Une \u00e9l\u00e9gante application iOS pr\u00e9sentant de magnifiques sites touristiques avec des cartes interactives, des informations d\u00e9taill\u00e9es et la gestion des favoris via SwiftUI et MapKit.",
                problem:
                    "Besoin d\u2019une application iOS p\u00e9dagogique d\u00e9montrant les bonnes pratiques SwiftUI et les patterns de d\u00e9veloppement iOS moderne avec une interface \u00e9l\u00e9gante et des interactions fluides.",
                solution:
                    "D\u00e9velopp\u00e9 une application vitrine impl\u00e9mentant les vues SwiftUI, la navigation, la gestion d\u2019\u00e9tat et l\u2019int\u00e9gration MapKit avec des animations fluides.",
                role: "D\u00e9veloppeur iOS \u2013 Impl\u00e9mentation SwiftUI, design UI, d\u00e9veloppement de fonctionnalit\u00e9s",
                architecture:
                    "Suivi du paradigme d\u00e9claratif SwiftUI avec ObservableObject pour la gestion d\u2019\u00e9tat et Combine pour les mises \u00e0 jour r\u00e9actives.",
                challenges:
                    "Ma\u00eetrise de la syntaxe d\u00e9clarative SwiftUI et impl\u00e9mentation de transitions et animations de vues fluides tout en int\u00e9grant efficacement MapKit.",
                outcome:
                    "Cr\u00e9\u00e9 une application iOS soign\u00e9e d\u00e9montrant la ma\u00eetrise du d\u00e9veloppement SwiftUI moderne et des directives de design Apple avec d\u2019excellentes performances.",
                learned:
                    "Compr\u00e9hension approfondie du cycle de vie des vues SwiftUI, de la gestion d\u2019\u00e9tat et des patterns iOS natifs pour construire des applications de qualit\u00e9 production.",
            },
            {
                description:
                    "Une application de pr\u00e9visions m\u00e9t\u00e9o innovante fournissant des mises \u00e0 jour m\u00e9t\u00e9o en temps r\u00e9el avec de belles visualisations, un support hors ligne et le suivi de plusieurs localisations.",
                problem:
                    "Les utilisateurs ont besoin d\u2019informations m\u00e9t\u00e9o fiables avec une visualisation intuitive, un acc\u00e8s hors ligne pour les voyages et la planification, et le suivi de plusieurs localisations.",
                solution:
                    "D\u00e9velopp\u00e9 une application m\u00e9t\u00e9o cross-platform avec donn\u00e9es en temps r\u00e9el, services de localisation, suivi de plusieurs villes, mise en cache locale et animations fluides.",
                role: "D\u00e9veloppeur principal \u2013 D\u00e9veloppement mobile full-stack, int\u00e9gration API, design UI/UX",
                architecture:
                    "Utilisation du framework r\u00e9actif Flutter avec le pattern BLoC pour la gestion d\u2019\u00e9tat, assurant un comportement pr\u00e9dictible de l\u2019application et une facilit\u00e9 de test.",
                challenges:
                    "Impl\u00e9mentation d\u2019animations fluides pour les transitions m\u00e9t\u00e9o et gestion d\u2019\u00e9tats complexes \u00e0 travers plusieurs localisations m\u00e9t\u00e9o avec support hors ligne.",
                outcome:
                    "Livr\u00e9 une application performante et visuellement attrayante avec support hors ligne, exp\u00e9rience utilisateur fluide sur iOS et Android, et visualisations m\u00e9t\u00e9o dynamiques.",
                learned:
                    "Ma\u00eetrise des animations Flutter et des patterns avanc\u00e9s de gestion d\u2019\u00e9tat pour des flux de donn\u00e9es complexes dans les applications cross-platform.",
            },
        ],
    },
    skills: {
        title: "Comp\u00e9tences et expertise",
        subtitle: "Comp\u00e9tences cl\u00e9s forg\u00e9es au cours de 8+ ans d\u2019ing\u00e9nierie mobile",
        categories: [
            "Expertise Mobile Principale",
            "Architecture et Pratiques d\u2019Ing\u00e9nierie",
            "Cross-Platform et Multiplateforme",
            "Outils, CI/CD et Collaboration",
        ],
    },
    certifications: {
        title: "Certifications",
        subtitle: "Certifications professionnelles et formations sp\u00e9cialis\u00e9es",
    },
    education: {
        title: "Formation",
        subtitle: "Fondation acad\u00e9mique en ing\u00e9nierie logicielle",
        degree: "Master en Architecture Logicielle",
    },
    contact: {
        title: "Me contacter",
        subtitle: "Ouvert aux projets freelance et aux opportunit\u00e9s \u00e0 temps plein",
        availableBadge: "Disponible pour de Nouvelles Opportunit\u00e9s",
        description:
            "Je recherche activement de nouvelles opportunit\u00e9s pour apporter mon expertise en d\u00e9veloppement iOS et mobile. Que vous ayez un projet en t\u00eate, besoin d\u2019une consultation technique ou envie de discuter d\u2019une collaboration potentielle, n\u2019h\u00e9sitez pas \u00e0 me contacter.",
        openTo: "Ouvert aux",
        freelance: "projets freelance",
        and: "et aux",
        fullTime: "postes \u00e0 temps plein",
        sendEmail: "M\u2019envoyer un email",
        locationLabel: "Localisation",
    },
    footer: {
        builtWith: "Conçu avec",
        using: "& React & TypeScript",
    },
};
