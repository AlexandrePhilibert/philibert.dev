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
		};
        url: string;
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
			title: 'Développeur logiciel',
			description: 'Développement de nouvelles fonctionnalités sur la plateforme IntrepidKnowledge',
			technologies: ['React', 'NestJS', 'CSS', 'Terraform', 'Ansible'],
			company: {
				name: 'WorkStreams',
				url: 'https://workstreams.ch'
			},
			startYear: 2023,
			endYear: null
		},
		{
			title: 'Travail de diplôme Technicien ES',
			description: "Migration de l'API PHP d'IntrepidKnowledge vers Node.js",
			technologies: ['Node.js', 'NestJS'],
			company: {
				name: 'WorkStreams',
				url: 'https://workstreams.ch'
			},
			startYear: 2022,
			endYear: 2022
		},
		{
			title: 'Stage à WorkStreams',
			description: 'Migration du frontend de la plateforme IntrepidKnowledge vers React',
			technologies: ['React', 'TypeScrit', 'CSS', 'React-Query'],
			company: {
				name: 'WorkStreams',
				url: 'https://workstreams.ch'
			},
			startYear: 2021,
			endYear: 2022
		},
		{
			title: 'Informaticien CFC à WorkStreams',
			description:
				'Implémentation de nouvelles fonctionnalités sur la plateforme IntrepidKnowledge',
			technologies: ['Javascript', 'PHP', 'CSS'],
			company: {
				name: 'WorkStreams',
				url: 'https://workstreams.ch'
			},
			startYear: 2019,
			endYear: 2020
		},
		{
			title: 'Stage à Nagravision',
			description: 'Analyse de spécification et implémentation de processus de commandes interne',
			technologies: ['Nintex', 'K2'],
			company: {
				name: 'Nagravision',
				url: 'https://www.nagra.com/'
			},
			startYear: 2018,
			endYear: 2018
		}
	];

	const educations: Education[] = [
		{
			name: 'Bachelor HES en Informatique locielle en emploi',
			school: {
				name: 'HEIG-VD'
			},
            url: 'https://heig-vd.ch',
			startYear: 2022,
			endYear: 2026
		},
		{
			name: "Techicien ES en développement d'applications",
			school: {
				name: 'CPNV'
			},
            url: 'https://www.cpnv.ch',
			startYear: 2020,
			endYear: 2022
		},
		{
			name: "CFC d'informaticien généraliste",
			school: {
				name: 'CPNV'
			},
            url: 'https://www.cpnv.ch',
			startYear: 2015,
			endYear: 2019
		}
	];

	const projects: Project[] = [
		{
			name: 'pinceau.ch',
			description: 'E-commerce',
			technologies: ['Next.js', 'PostgreSQL', 'Tailwindcss']
		},
		{
			name: 'drive.bocherens.com',
			description: 'Application de suivi des heures de travail & partage de fichiers',
			technologies: ['Laravel', 'React', 'MUI']
		}
	];
</script>

<header class="flex justify-between items-center sticky top-0 border-b border-b-scooter-800 px-4 py-2 backdrop-blur-md bg-cerulean-blue-900 bg-opacity-10">
	<div />
	<menu class="flex items-center space-x-12">
		<ol class="flex space-x-4 intems-center">
		
		</ol>
		<ol class="flex space-x-4 items-center">
			<li>
				<a
					href="/rss"
					class="inline-block hover:bg-gradient-to-tr hover:text-cerulean-blue-800 from-scooter-400 to-scooter-200 rounded-md p-1"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-rss"
						><path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle
							cx="5"
							cy="19"
							r="1"
						/></svg
					>
				</a>
			</li>
			<li>
				<a
					href="https://github.com/AlexandrePhilibert"
					class="inline-block hover:bg-gradient-to-tr hover:text-cerulean-blue-800 from-scooter-400 to-scooter-200 rounded-md p-1"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-github"
						><path
							d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
						/><path d="M9 18c-4.51 2-5-2-7-2" /></svg
					>
				</a>
			</li>
		</ol>
	</menu>
</header>

<main class="flex flex-col w-full items-center space-y-8 mt-4">
	<div class="max-w-2xl w-full">
		<h2 class="text-2xl mb-4 font-bold">Expériences Professionnelles</h2>
		<ol class="space-y-4">
			{#each professionalExperiences as experience}
				<li class="grid grid-cols-6">
					<div class="col-span-1">
						<span class="text-slate-400 text-sm">
							<span>{experience.startYear}</span> - <span>{experience.endYear ?? "Actuel."}</span>
						</span>
					</div>
					<div class="col-span-5">
						<h2 class="font-medium text-lg mb-1">{experience.title}</h2>
						<p class="text-justify text-base/8 text-slate-300">{experience.description}</p>
						<div class="font-medium">{experience.company.name}</div>
						<ul class="flex my-2 space-x-2">
							{#each experience.technologies as technology}
								<li
									class="py-0.5 px-2 font-medium rounded-lg text-cerulean-blue-800 bg-gradient-to-tr from-scooter-400 to-scooter-200 select-none"
								>
									{technology}
								</li>
							{/each}
						</ul>
					</div>
				</li>
			{/each}
		</ol>
	</div>

	<div class="max-w-2xl w-full">
		<h2 class="text-2xl mb-4 font-bold">Formations</h2>
		<ol class="space-y-4">
			{#each educations as education}
				<li class="grid grid-cols-6">
					<div class="col-span-1">
						<span class="text-slate-400 text-sm">
							<span>{education.startYear}</span> - <span>{education.endYear}</span>
						</span>
					</div>
                    <a href={education.url} class="col-span-5 px-3 py-2 cursor-pointer hover:bg-cerulean-blue-900 bg-opacity-50 rounded-md border border-transparent hover:border-scooter-900">
						<h2 class="font-medium text-lg mb-1">{education.name}</h2>
						<div class="font-medium">{education.school.name}</div>
					</a>
				</li>
			{/each}
		</ol>
	</div>
</main>
