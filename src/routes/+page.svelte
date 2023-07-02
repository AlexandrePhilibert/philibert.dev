<script lang="ts">
    type ProfessionalExperience = {
        title: string;
        description: string;
        technologies: string[];
        company: {
            name: string;
            url: string;
        };
        startYear: number;
        endYear: number | null;
    };

    type Education = {
        name: string;
        school: {
            name: string;
        },
        startYear: number;
        endYear: number | null;
    };

    type Project = {
        name: string;
        description: string;
        technologies: string[];
    };

    const professionalExperiences: ProfessionalExperience[] = [
        {
            title: "Développeur logiciel",
            description: "Développement de nouvelles fonctionnalités sur la plateforme IntrepidKnowledge",
            technologies: ["React", "NestJS", "CSS", "Terraform", "Ansible"],
            company: {
                name: "WorkStreams",
                url: "https://workstreams.ch"
            },
            startYear: 2023,
            endYear: null
        },
        {
            title: "Travail de diplôme Technicien ES",
            description: "Migration de l'API PHP d'IntrepidKnowledge vers Node.js",
            technologies: ["Node.js", "NestJS"],
            company: {
                name: "WorkStreams",
                url: "https://workstreams.ch"
            },
            startYear: 2022,
            endYear: 2022,
        },
        {
            title: "Stage à WorkStreams",
            description: "Migration du frontend de la plateforme IntrepidKnowledge vers React",
            technologies: ["React", "TypeScrit", "CSS", "React-Query"],
            company: {
                name: "WorkStreams",
                url: "https://workstreams.ch"
            },
            startYear: 2021,
            endYear: 2022,
        },
        {
            title: "Informaticien CFC à WorkStreams",
            description: "Implémentation de nouvelles fonctionnalités sur la plateforme IntrepidKnowledge",
            technologies: ["Javascript", "PHP", "CSS"],
            company: {
                name: "WorkStreams",
                url: "https://workstreams.ch"
            },
            startYear: 2019,
            endYear: 2020,
        },
        {
            title: "Stage à Nagravision",
            description: "Analyse de spécification et implémentation de processus de commandes interne",
            technologies: ["Nintex", "K2"],
            company: {
                name: "Nagravision",
                url: "https://www.nagra.com/"
            },
            startYear: 2018,
            endYear: 2018,
        },
    ];

    const educations: Education[] = [
        {
            name: "Bachelor HES en Informatique locielle en emploi",
            school: {
                name: "HEIG-VD",
            },
            startYear: 2022,
            endYear: 2026,
        },
        {
            name: "Techicien ES en développement d'applications",
            school: {
                name: "CPNV",
            },
            startYear: 2020,
            endYear: 2022,
        },
        {
            name: "CFC d'informaticien généraliste",
            school: {
                name: "CPNV",
            },
            startYear: 2015,
            endYear: 2019,
        },
    ];

    const projects: Project[] = [
        {
            name: "pinceau.ch",
            description: "E-commerce",
            technologies: ["Next.js", "PostgreSQL", "Tailwindcss"],
        },
        {
            name: "drive.bocherens.com",
            description: "Application de suivi des heures de travail & partage de fichiers",
            technologies: ["Laravel", "React", "MUI"],
        },
    ];
</script>

<header class="flex justify-between items-center border-b border-b-scooter-800 p-4">
    <div></div>
    <menu class="flex items-center space-x-12">
        <ol class="flex space-x-4 intems-center">
            <li>
                <a href="/blog" class="text-xl/5">Blog</a>
            </li>
        </ol>
        <ol class="flex space-x-4 items-center">
            <li>
                <a href="/rss" class="inline-block hover:bg-gradient-to-tr hover:text-cerulean-blue-800 from-scooter-400 to-scooter-200 rounded-md p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rss"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>
                </a>
            </li>
            <li>
                <a href="https://github.com/AlexandrePhilibert" class="inline-block hover:bg-gradient-to-tr hover:text-cerulean-blue-800 from-scooter-400 to-scooter-200 rounded-md p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
            </li>
        </ol>
    </menu>
</header>

<main class="flex w-full justify-center">
    <div class="max-w-2xl w-full mt-4">
        <h2 class="text-2xl mb-4 font-bold">Expériences Professionnelles</h2>
        <ol class="space-y-4">
            {#each professionalExperiences as experience}
                <li>
                    <h2 class="font-medium text-lg mb-1">{experience.title}</h2>
                    <p class="text-justify text-base/8 text-slate-300">{experience.description}</p>
                    <div class="font-medium">{experience.company.name}</div>
                    <ul class="flex my-2 space-x-2">
                        {#each experience.technologies as technology}
                            <li class="py-0.5 px-2 font-medium rounded-lg text-cerulean-blue-800 bg-gradient-to-tr from-scooter-400 to-scooter-200 select-none">{technology}</li>
                        {/each}
                    </ul>
                </li>
            {/each}
        </ol>
    </div>
</main>
