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
</script>

<div class="projects-page">
    <h2 class="title">Projects</h2>

    <input
            type="text"
            bind:value={searchQuery}
            placeholder="Search projects..."
            class="search-input"
    />

    <ul class="project-list">
        {#each filteredProjects as project}
            <li class="project-item">
                <span>{project}</span>
                <button class="action-btn">⋮</button>
            </li>
        {/each}
    </ul>
</div>

<style>
    .projects-page {
        width: 100%;
        padding-right: 2rem;
    }

    .title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .search-input {
        width: 100%;
        padding: 0.6rem 1rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 6px;
        margin-bottom: 1.5rem;
        outline: none;
        box-shadow: 0 1px 2px rgba(0,0,0,0.03);
    }

    .search-input:focus {
        border-color: #007bff;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
    }

    .project-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .project-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 1rem;
        border-bottom: 1px solid #eee;
        background: white;
        transition: background 0.2s ease;
        border-radius: 6px;
        margin-bottom: 0.3rem;
    }

    .project-item:hover {
        background-color: #f9f9f9;
    }

    .action-btn {
        background: none;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        color: #888;
    }

    .action-btn:hover {
        color: #000;
    }
</style>