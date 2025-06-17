<script>
    let ideStats = [
        { name: 'VS Code', today: 180, week: 840, color: '#4CAF50' },
        { name: 'WebStorm', today: 60, week: 320, color: '#2196F3' },
        { name: 'PyCharm', today: 30, week: 120, color: '#FFC107' },
        { name: 'Android Studio', today: 15, week: 80, color: '#9C27B0' }
    ];

    let maxToday = Math.max(...ideStats.map(i => i.today), 1);
</script>

<div class="ide-usage-page">
    <header class="page-header">
        <h2>IDE Usage</h2>
    </header>

    <ul class="ide-stats-list">
        {#if ideStats.length > 0}
            {#each ideStats as ide}
                <li class="ide-item-card">
                    <div class="ide-item-header">
                        <span class="ide-name-text">{ide.name}</span>
                        <span class="ide-time-today">{Math.floor(ide.today / 60)}h {ide.today % 60}m today</span>
                    </div>
                    <div class="progress-bar-track">
                        <div
                            class="progress-bar-fill"
                            style="width: {(ide.today / maxToday) * 100}%; background-color: {ide.color};"
                        ></div>
                    </div>
                    <div class="weekly-time-info">
                        Weekly: {Math.floor(ide.week / 60)}h {ide.week % 60}m
                    </div>
                </li>
            {/each}
        {:else}
            <p class="no-data-message">No IDE usage data available.</p>
        {/if}
    </ul>
</div>

<style>
    .ide-usage-page {
        max-width: 800px;
        width: 100%;
        margin: 0 auto;
        padding: 0 1rem;
    }

    .page-header {
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--color-border-primary);
    }
    .page-header h2 {
        font-size: 1.8rem;
        color: var(--color-text-primary);
        margin: 0;
    }

    .ide-stats-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .ide-item-card {
        background: var(--color-bg-secondary);
        border-radius: var(--radius-main);
        padding: 1.25rem;
        margin-bottom: 1rem;
        box-shadow: var(--shadow-main);
    }
    .ide-item-card:hover {
        box-shadow: var(--shadow-hover);
    }

    .ide-item-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.75rem;
        font-weight: 600;
    }

    .ide-name-text {
        font-size: 1.1rem;
        color: var(--color-text-primary);
    }
    .ide-time-today {
        font-size: 0.9rem;
        color: var(--color-text-secondary);
    }

    .progress-bar-track {
        background-color: var(--color-bg-progress-track);
        height: 12px;
        border-radius: var(--radius-progress);
        overflow: hidden;
    }

    .progress-bar-fill {
        height: 100%;
        border-radius: var(--radius-progress);
        transition: width 0.3s ease-in-out;
    }

    .weekly-time-info {
        margin-top: 0.75rem;
        font-size: 0.9rem;
        color: var(--color-text-secondary);
    }

    .no-data-message {
        text-align: center;
        padding: 2rem;
        color: var(--color-text-secondary);
        font-style: italic;
    }
</style>
