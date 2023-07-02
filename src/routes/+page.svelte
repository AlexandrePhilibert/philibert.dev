<script lang="ts">
	import ConditionalWrapper from '$lib/components/ConditionalWrapper.svelte';

	type ProfessionalExperience = {
		title: string;
		description: string[];
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
		url: string | null;
		image: string;
		technologies: string[];
	};

	const professionalExperiences: ProfessionalExperience[] = [
		{
			title: 'Développeur logiciel',
			description: [
				'Développement de nouvelles fonctionnalités sur la plateforme IntrepidKnowledge.'
			],
			technologies: ['React', 'NestJS', 'CSS', 'Terraform', 'Ansible', 'OpenStack'],
			company: {
				name: 'WorkStreams',
				url: 'https://workstreams.ch'
			},
			startYear: 2023,
			endYear: null
		},
		{
			title: 'Travail de diplôme Technicien ES',
			description: [
				"Projet de migration de l'API PHP d'IntrepidKnowledge vers Node.js. Début de la migration de la partie authentification, envoi d'email et permissions."
			],
			technologies: ['Node.js', 'NestJS', 'OAuth2'],
			company: {
				name: 'WorkStreams',
				url: 'https://workstreams.ch'
			},
			startYear: 2022,
			endYear: 2022
		},
		{
			title: 'Stage à WorkStreams',
			description: ['Migration du frontend de la plateforme IntrepidKnowledge vers React.'],
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
			description: [
				'Implémentation de nouvelles fonctionnalités sur la plateforme IntrepidKnowledge.'
			],
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
			description: [
				'Analyse de spécification et implémentation de processus de commandes interne.'
			],
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
			name: 'philibert.dev',
			description: 'Ce site, premier projet en SvelteKit.',
			url: 'https://philibert.dev',
			image: 'imgs/philibert_dev.png',
			technologies: ['SvelteKit', 'Tailwind CSS']
		},
		{
			name: 'Bocherens Drive',
			description:
				"Application de suivi des heures de travail, suivi des chantiers et de partage de fichiers pour les employés de l'entreprise.",
			url: null,
			image: '/imgs/drive_bocherens_com.png',
			technologies: ['Laravel', 'React', 'TypeScript', 'MUI', 'NGINX']
		},
		{
			name: 'pinceau.ch',
			description:
				"Projet consistant à permettre l'accès au catalogue d'articles aux clients professionnels. Les articles sont récupérés depuis l'API de l'ERP utilisé en interne.",
			url: 'https://pinceau.ch',
			image: 'imgs/pinceau_ch.png',
			technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'NGINX']
		},
		{
			name: 'Search on Google',
			description:
				'Prévu à la base pour ajouter un bouton "Search on Google", permet désormais la recherche à l\'aide de macros inspiré de vim.',
			url: 'https://github.com/AlexandrePhilibert/search_on_google',
			image: 'imgs/search_on_google.png',
			technologies: ['JavaScript', 'Manifest V3']
		}
	];
</script>

<div class="flex justify-center">
	<main class="flex flex-col w-full max-w-3xl items-center space-y-10 my-6 mx-4">
		<div class="grid grid-cols-6 w-full gap-1 md:gap-8">
			<div class="col-span-full md:col-start-2 md:col-span-5 mb-4 md:mb-0">
				<h2 class="text-2xl mb-2 font-medium uppercase">Expériences Professionnelles</h2>
				<hr class="border-scooter-200 border-b" />
			</div>
			<ol class="contents">
				{#each professionalExperiences as experience}
					<li class="contents">
						<div class="col-span-6 md:col-span-1">
							<span class="text-slate-400 text-sm">
								<span>{experience.startYear}</span> - <span>{experience.endYear ?? 'Actuel.'}</span>
							</span>
						</div>
						<div class="col-span-6 md:col-span-5 mb-8 md:mb-0">
							<h2 class="font-medium text-lg mb-1">{experience.title}</h2>
							<ul class="flex flex-wrap mb-1.5 -ml-1">
								{#each experience.technologies as technology}
									<li
										class="m-1 py-0.5 px-2 font-medium rounded-lg text-cerulean-blue-800 bg-gradient-to-tr from-scooter-400 to-scooter-200 select-none"
									>
										{technology}
									</li>
								{/each}
							</ul>
							<p class="text-justify text-base/6 text-oslo-gray-300 mb-1.5">
								{experience.description}
							</p>
							<a
								href={experience.company.url}
								class="flex items-center font-medium group space-x-2 max-w-min"
							>
								<span>
									{experience.company.name}
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="text-oslo-gray-200 group-hover:visible invisible mb-0.5"
									><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline
										points="15 3 21 3 21 9"
									/><line x1="10" x2="21" y1="14" y2="3" /></svg
								>
							</a>
						</div>
					</li>
				{/each}
			</ol>
		</div>

		<div class="grid grid-cols-6 gap-1 md:gap-8 w-full">
			<div class="col-span-full md:col-start-2 md:col-span-5">
				<h2 class="text-2xl mb-2 font-medium uppercase">Formations</h2>
				<hr class="border-scooter-200 border-b" />
			</div>
			<ol class="contents">
				{#each educations as education}
					<li class="contents">
						<div class="col-span-full md:col-span-1 pt-2.5">
							<span class="text-slate-400 text-sm">
								<span>{education.startYear}</span> - <span>{education.endYear}</span>
							</span>
						</div>
						<a
							href={education.url}
							class="col-span-full md:col-span-5 px-3 py-2 -mx-3 -my-2 cursor-pointer hover:bg-cerulean-blue-900 bg-opacity-50 rounded-md border border-transparent hover:border-scooter-900 group mb-8 md:mb-0"
						>
							<span class="flex justify-between">
								<h2 class="font-medium text-lg mb-2">{education.name}</h2>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="22"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="text-oslo-gray-200 group-hover:visible invisible"
									><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline
										points="15 3 21 3 21 9"
									/><line x1="10" x2="21" y1="14" y2="3" /></svg
								>
							</span>
							<div class="font-medium">{education.school.name}</div>
						</a>
					</li>
				{/each}
			</ol>
		</div>

		<div class="grid grid-cols-6 gap-8 w-full">
			<div class="col-span-full md:col-start-2 md:col-span-5">
				<h2 class="text-2xl mb-2 font-medium uppercase">Projets</h2>
				<hr class="border-scooter-200 border-b" />
			</div>
			<ol class="contents">
				{#each projects as project}
					<li class="col-span-full md:col-start-2 md:col-span-5">
						<ConditionalWrapper
							tag="a"
							wrap={!!project.url}
							href={project.url}
							class="flex cursor-pointer hover:bg-cerulean-blue-900 bg-opacity-50 rounded-md border border-transparent hover:border-scooter-900 group"
						>
							<div class="flex-1 grid grid-cols-8 p-1 md:p-3">
								<div
									class="rounded-lg col-span-3 border border-scooter-900 row-span-1 h-full overflow-hidden hidden md:inline-block md:mr-6"
								>
									<img src={project.image} alt={project.name} class="object-cover w-full h-full" />
								</div>
								<div class="col-span-full md:col-span-5">
									<span class="flex justify-between">
										<h2 class="font-medium text-xl mb-1.5">{project.name}</h2>
										{#if !!project.url}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="22"
												height="22"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="text-oslo-gray-200 group-hover:inline-block hidden"
												><path
													d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
												/><polyline points="15 3 21 3 21 9" /><line
													x1="10"
													x2="21"
													y1="14"
													y2="3"
												/></svg
											>
										{/if}
									</span>
									<ul class="flex flex-wrap mb-1 -ml-1">
										{#each project.technologies as technology}
											<li
												class="m-1 py-0.5 px-2 font-medium rounded-lg text-cerulean-blue-800 bg-gradient-to-tr from-scooter-400 to-scooter-200 select-none"
											>
												{technology}
											</li>
										{/each}
									</ul>
									<p class="text-oslo-gray-300 text-base/6 text-justify">{project.description}</p>
								</div>
							</div>
						</ConditionalWrapper>
					</li>
				{/each}
			</ol>
		</div>
	</main>
</div>
