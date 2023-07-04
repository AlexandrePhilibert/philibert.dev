<script lang="ts">
	import ConditionalWrapper from '$lib/components/ConditionalWrapper.svelte';

    import experiences from '$lib/data/experiences.json';
    import schools from '$lib/data/schools.json';
    import projects from '$lib/data/projects.json';
</script>

<svelte:head>
    <title>Alexandre Philibert</title>
</svelte:head>

<div class="flex justify-center">
	<main class="flex flex-col w-full max-w-3xl items-center space-y-10 my-6 mx-4">
		<div class="grid grid-cols-6 w-full gap-1 md:gap-8">
			<div class="col-span-full md:col-start-2 md:col-span-5 mb-4 md:mb-0">
				<h2 class="text-2xl mb-2 font-medium uppercase">Expériences Professionnelles</h2>
				<hr class="border-scooter-200 border-b" />
			</div>
			<ol class="contents">
				{#each experiences as experience}
					<li class="contents">
						<div class="col-span-6 md:col-span-1 md:text-right">
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
				{#each schools as school}
					<li class="contents">
						<div class="col-span-full md:col-span-1 pt-2.5">
							<span class="text-slate-400 text-sm">
								<span>{school.startYear}</span> - <span>{school.endYear}</span>
							</span>
						</div>
						<a
							href={school.url}
							class="col-span-full md:col-span-5 px-3 py-2 -mx-3 -my-2 cursor-pointer hover:bg-cerulean-blue-900 bg-opacity-50 rounded-md border border-transparent hover:border-scooter-900 group mb-8 md:mb-0"
						>
							<span class="flex justify-between">
								<h2 class="font-medium text-lg mb-2">{school.name}</h2>
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
							<div class="font-medium">{school.school.name}</div>
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
