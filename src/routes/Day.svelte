<script>
    let selectedDate = new Date().toISOString().slice(0, 10);

    let timeBlocks = [
        { start: '09:00', end: '10:15', activity: 'VS Code', color: '#4CAF50' },
        { start: '10:15', end: '10:45', activity: 'Idle', color: 'var(--color-text-secondary)' },
        { start: '10:45', end: '12:00', activity: 'WebStorm', color: '#2196F3' },
        { start: '12:00', end: '13:30', activity: 'Procrastination 😅', color: '#FF6B6B' }
    ];
</script>

<div class="daily-view-page">
    <header class="page-header">
        <h2>Daily View</h2>
        <input type="date" bind:value={selectedDate} class="date-input-picker" />
    </header>

    <ul class="time-blocks-list">
        {#if timeBlocks.length > 0}
            {#each timeBlocks as block}
                <li class="time-block-item">
                    <div class="time-range">{block.start} – {block.end}</div>
                    <div class="activity-details">
                        <span class="activity-dot" style="background-color: {block.color}"></span>
                        {block.activity}
                    </div>
                </li>
            {/each}
        {:else}
            <p class="no-data-message">No activity recorded for this day.</p>
        {/if}
    </ul>
</div>

<style>
    .daily-view-page {
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    .page-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--color-border-primary);
    }
    .page-header h2 {
        color: var(--color-text-primary);
        font-size: 1.8rem;
        margin: 0;
    }

    .date-input-picker {
        padding: 0.5rem 0.8rem;
        border-radius: var(--radius-small);
        border: 1px solid var(--color-border-input);
        background-color: var(--color-bg-secondary);
        color: var(--color-text-primary);
        font-size: 1rem;
        outline: none;
    }
    .date-input-picker:focus {
        border-color: var(--color-border-input-focus);
        box-shadow: 0 0 0 2px var(--shadow-input-focus);
    }
    .date-input-picker::-webkit-calendar-picker-indicator {
        filter: invert(var(--is-dark, 0));
    }
    :global(.dark-theme) .date-input-picker::-webkit-calendar-picker-indicator {
        --is-dark: 1;
    }

    .time-blocks-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .time-block-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.25rem;
        margin-bottom: 0.75rem;
        background-color: var(--color-bg-secondary);
        border-radius: var(--radius-main);
        box-shadow: var(--shadow-main);
        transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }
    .time-block-item:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-hover);
    }

    .time-range {
        font-weight: 600;
        color: var(--color-text-primary);
        width: 140px;
        flex-shrink: 0;
    }

    .activity-details {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 1rem;
        color: var(--color-text-primary);
        flex-grow: 1;
        word-break: break-word;
    }

    .activity-dot {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        flex-shrink: 0;
    }

    .no-data-message {
        text-align: center;
        padding: 2rem;
        color: var(--color-text-secondary);
        font-style: italic;
    }
</style>
