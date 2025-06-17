<script>
    const weekData = [
        { day: 'Mon', hours: 4, date: '2024-07-22' },
        { day: 'Tue', hours: 6, date: '2024-07-23' },
        { day: 'Wed', hours: 3, date: '2024-07-24' },
        { day: 'Thu', hours: 5, date: '2024-07-25' },
        { day: 'Fri', hours: 7, date: '2024-07-26' },
        { day: 'Sat', hours: 2, date: '2024-07-27' },
        { day: 'Sun', hours: 1, date: '2024-07-28' }
    ];

    const maxHours = Math.max(...weekData.map(d => d.hours), 1);
    const totalHours = weekData.reduce((sum, d) => sum + d.hours, 0);

    function handleDayClick(dayData) {
        console.log("Clicked on day:", dayData.day, "Date:", dayData.date, "Hours:", dayData.hours);
        // Тут можна додати навігацію, наприклад:
        // import { navigate } from 'svelte-spa-router';
        // navigate(`/day/${dayData.date}`);
    }
</script>

<div class="weekly-view-page">
    <header class="page-header">
        <h2>Weekly View</h2>
    </header>

    <div class="chart-container">
        {#each weekData as dayItem}
            <div
                class="bar-chart-column"
                on:click={() => handleDayClick(dayItem)}
                role="button"
                tabindex="0"
                on:keydown={(e) => e.key === 'Enter' && handleDayClick(dayItem)}
                title="{dayItem.day}, {dayItem.date}: {dayItem.hours}h tracked"
            >
                <div class="bar-track-outer">
                    <div
                        class="bar-fill-inner"
                        style="height: {maxHours > 0 ? (dayItem.hours / maxHours) * 100 : 0}%"
                    >
                        <span class="bar-value-label">{dayItem.hours}h</span>
                    </div>
                </div>
                <span class="day-name-label">{dayItem.day}</span>
            </div>
        {/each}
    </div>

    {#if totalHours > 0}
        <p class="total-hours-summary">Total for the week: <strong>{totalHours}h</strong></p>
    {:else}
        <p class="no-data-message">No activity recorded for this week.</p>
    {/if}
</div>

<style>
    .weekly-view-page {
        max-width: 900px;
        width: 100%;
        margin: 0 auto;
        padding: 0 1rem;
        text-align: center;
    }

    .page-header {
        margin-bottom: 2.5rem;
        padding-bottom: 1rem;
    }
    .page-header h2 {
        font-size: 1.8rem;
        color: var(--color-text-primary);
        margin: 0;
    }

    .chart-container {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        gap: 1rem;
        height: 280px;
        padding: 1rem 0;
        background-color: var(--color-bg-secondary);
        border-radius: var(--radius-main);
        box-shadow: var(--shadow-main);
        margin-bottom: 2rem;
    }

    .bar-chart-column {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-basis: 100px;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: var(--radius-small);
    }
    .bar-chart-column:hover .bar-track-outer,
    .bar-chart-column:focus .bar-track-outer {
        border-color: var(--color-accent-primary);
    }
    .bar-chart-column:hover .bar-fill-inner {
        opacity: 0.85;
    }

    .bar-track-outer {
        background: var(--color-bg-progress-track);
        border-radius: var(--radius-small);
        width: 50px;
        height: 200px;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: flex-end;
        border: 2px solid transparent;
        transition: border-color 0.2s ease-in-out;
    }

    .bar-fill-inner {
        width: 100%;
        background: linear-gradient(to top, var(--color-accent-primary), var(--color-accent-secondary));
        border-radius: var(--radius-small) var(--radius-small) 0 0;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        transition: height 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.2s ease-in-out;
    }

    .bar-value-label {
        font-size: 0.8rem;
        color: var(--color-text-on-accent);
        padding-bottom: 0.3rem;
        font-weight: 600;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }
    .bar-chart-column:hover .bar-value-label,
    .bar-chart-column:focus .bar-value-label,
    .bar-fill-inner[style*="height: calc("]:not([style*="height: 0%"]) .bar-value-label {
        opacity: 1;
    }
    .bar-fill-inner[style*="height: 0%"] .bar-value-label {
        opacity: 0;
    }

    .day-name-label {
        margin-top: 0.75rem;
        font-size: 0.9rem;
        color: var(--color-text-primary);
        font-weight: 500;
    }

    .total-hours-summary {
        margin-top: 1.5rem;
        font-weight: 500;
        color: var(--color-text-primary);
        font-size: 1.1rem;
    }
    .total-hours-summary strong {
        color: var(--color-accent-primary);
    }

    .no-data-message {
        text-align: center;
        padding: 2rem;
        color: var(--color-text-secondary);
        font-style: italic;
    }
</style>
