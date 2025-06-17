<script>
    let osStats = [
        { name: 'Windows', minutes: 720, color: '#2196F3' },
        { name: 'Linux', minutes: 480, color: '#4CAF50' },
        { name: 'macOS', minutes: 60, color: '#9E9E9E' }
    ];

    let totalMinutes = osStats.reduce((sum, os) => sum + os.minutes, 0);
    totalMinutes = totalMinutes > 0 ? totalMinutes : 1;
</script>

<div class="os-usage-page">
    <header class="page-header">
        <h2>Operating System Usage</h2>
    </header>

    <ul class="os-stats-list">
        {#if osStats.length > 0}
            {#each osStats as os}
                <li class="os-item-card">
                    <div class="os-item-header">
                        <span class="os-name-text">{os.name}</span>
                        <span class="os-time-details">
                            {Math.floor(os.minutes / 60)}h {os.minutes % 60}m
                            ({totalMinutes > 0 ? Math.round((os.minutes / totalMinutes) * 100) : 0}%)
                        </span>
                    </div>
                    <div class="progress-bar-track">
                        <div
                            class="progress-bar-fill"
                            style="width: {totalMinutes > 0 ? (os.minutes / totalMinutes) * 100 : 0}%; background-color: {os.color};"
                        ></div>
                    </div>
                </li>
            {/each}
        {:else}
            <p class="no-data-message">No Operating System usage data available.</p>
        {/if}
    </ul>
</div>

<style>
    .os-usage-page {
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

    .os-stats-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .os-item-card {
        background: var(--color-bg-secondary);
        border-radius: var(--radius-main);
        padding: 1.25rem;
        margin-bottom: 1rem;
        box-shadow: var(--shadow-main);
    }
    .os-item-card:hover {
        box-shadow: var(--shadow-hover);
    }

    .os-item-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.75rem;
        font-weight: 600;
    }

    .os-name-text {
        font-size: 1.1rem;
        color: var(--color-text-primary);
    }
    .os-time-details {
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

    .no-data-message {
        text-align: center;
        padding: 2rem;
        color: var(--color-text-secondary);
        font-style: italic;
    }
</style>
