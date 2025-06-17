<script>
    let searchQuery = '';
    let projects = [
        'procrastinometer_front',
        'DevOpsLab6',
        'lab3',
        'hiveemulator',
        'PZVPKSLab3',
        'realSoccer',
        'haxballdev',
        'lab10_2',
        '10_3',
        'lab11',
        'lab10_1',
        'lab7',
        'Lab6',
    ];

    $: filteredProjects = projects.filter(p =>
        p.toLowerCase().includes(searchQuery.toLowerCase())
    );

    function handleActionClick(projectName) {
        console.log("Action for project:", projectName);
    }
</script>

<div class="projects-list-page">
    <header class="page-header">
        <h2 class="page-title">Projects</h2>
    </header>

    <input
        type="text"
        bind:value={searchQuery}
        placeholder="Search projects..."
        class="search-field"
    />

    {#if filteredProjects.length > 0}
        <ul class="projects-collection">
            {#each filteredProjects as project}
                <li class="project-entry">
                    <span class="project-name-text">{project}</span>
                    <button class="project-action-button" on:click={() => handleActionClick(project)} title="More actions">
                        ⋮
                    </button>
                </li>
            {/each}
        </ul>
    {:else}
        <p class="no-results-message">
            {#if projects.length === 0}
                No projects available.
            {:else}
                No projects found for "{searchQuery}".
            {/if}
        </p>
    {/if}
</div>

<style>
    .projects-list-page {
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    .page-header {
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--color-border-primary);
    }
    .page-title {
        font-size: 1.8rem;
        color: var(--color-text-primary);
        margin: 0;
    }

    .search-field {
        width: 100%;
        padding: 0.75rem 1rem;
        font-size: 1rem;
        border: 1px solid var(--color-border-input);
        border-radius: var(--radius-small);
        margin-bottom: 2rem;
        outline: none;
        background-color: var(--color-bg-secondary);
        color: var(--color-text-primary);
        box-shadow: var(--shadow-main);
    }
    .search-field:focus {
        border-color: var(--color-border-input-focus);
        box-shadow: 0 0 0 3px var(--shadow-input-focus), var(--shadow-hover);
    }
    .search-field::placeholder {
        color: var(--color-text-secondary);
    }

    .projects-collection {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .project-entry {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.85rem 1.25rem;
        border-bottom: 1px solid var(--color-border-primary);
        background: var(--color-bg-secondary);
        border-radius: var(--radius-small);
        margin-bottom: 0.5rem;
        box-shadow: var(--shadow-main);
    }
    .project-entry:last-child {
        border-bottom: none;
    }
    .project-entry:hover {
        background-color: var(--color-bg-hover);
    }

    .project-name-text {
        color: var(--color-text-primary);
        font-weight: 500;
    }

    .project-action-button {
        background: none;
        border: none;
        font-size: 1.4rem;
        line-height: 1;
        cursor: pointer;
        color: var(--color-text-secondary);
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius-small);
    }
    .project-action-button:hover {
        color: var(--color-text-primary);
        background-color: var(--color-bg-tertiary);
    }

    .no-results-message {
        text-align: center;
        padding: 2rem;
        color: var(--color-text-secondary);
        font-style: italic;
    }
</style>
