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
				'Développement de nouvelles fonctionnalités sur la plateforme IntrepidKnowledge'
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
			description: ["Migration de l'API PHP d'IntrepidKnowledge vers Node.js"],
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
			description: ['Migration du frontend de la plateforme IntrepidKnowledge vers React'],
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
				'Implémentation de nouvelles fonctionnalités sur la plateforme IntrepidKnowledge'
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
			description: ['Analyse de spécification et implémentation de processus de commandes interne'],
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
			technologies: ['Laravel', 'React', 'MUI', 'NGINX']
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

<main class="flex flex-col w-full items-center space-y-8 my-6">
	<div class="max-w-2xl w-full">
		<h2 class="text-2xl mb-6 font-bold">Expériences Professionnelles</h2>
		<ol class="space-y-8">
			{#each professionalExperiences as experience}
				<li class="grid grid-cols-6">
					<div class="col-span-1">
						<span class="text-slate-400 text-sm">
							<span>{experience.startYear}</span> - <span>{experience.endYear ?? 'Actuel.'}</span>
						</span>
					</div>
					<div class="col-span-5">
						<h2 class="font-medium text-lg mb-1">{experience.title}</h2>
                        <ul class="flex flex-wrap mb-1 -ml-1">
                            {#each experience.technologies as technology}
                                <li
                                    class="m-1 py-0.5 px-2 font-medium rounded-lg text-cerulean-blue-800 bg-gradient-to-tr from-scooter-400 to-scooter-200 select-none"
                                    >
                                    {technology}
                                </li>
                            {/each}
                        </ul>
						<p class="text-justify text-base/8 text-oslo-gray-300">{experience.description}</p>
						<div class="font-medium">{experience.company.name}</div>
					</div>
				</li>
			{/each}
		</ol>
	</div>

	<div class="max-w-2xl w-full">
		<h2 class="text-2xl mb-6 font-bold">Formations</h2>
		<ol class="space-y-8">
			{#each educations as education}
				<li class="grid grid-cols-6 group">
					<div class="col-span-1 pt-2.5">
						<span class="text-slate-400 text-sm">
							<span>{education.startYear}</span> - <span>{education.endYear}</span>
						</span>
					</div>
					<a
						href={education.url}
						class="col-span-5 px-3 py-2 cursor-pointer hover:bg-cerulean-blue-900 bg-opacity-50 rounded-md border border-transparent hover:border-scooter-900"
					>
						<span class="flex justify-between">
							<h2 class="font-medium text-lg mb-2">{education.name}</h2>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="text-oslo-gray-200 group-hover:inline-block hidden"
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

	<div class="max-w-2xl w-full">
		<h2 class="text-2xl mb-6 font-bold">Projets</h2>
		<ol class="space-y-8">
			{#each projects as project}
				<li>
					<ConditionalWrapper
						tag="a"
						wrap={!!project.url}
						href={project.url}
						class="inline-block cursor-pointer hover:bg-cerulean-blue-900 bg-opacity-50 rounded-md border border-transparent hover:border-scooter-900 group"
					>
						<div class="grid grid-cols-8 grid-rows-1 space-x-6 p-3">
							<div
								class="rounded-lg col-span-3 border border-scooter-900 row-span-1 h-full overflow-hidden"
							>
								<img src={project.image} alt={project.name} class="object-cover w-full h-full" />
							</div>
							<div class="col-span-5">
								<span class="flex justify-between">
									<h2 class="font-medium text-xl mb-1">{project.name}</h2>
									{#if !!project.url}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
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
								<p class="text-oslo-gray-300 text-justify">{project.description}</p>
							</div>
						</div>
					</ConditionalWrapper>
				</li>
			{/each}
		</ol>
	</div>
</main>
