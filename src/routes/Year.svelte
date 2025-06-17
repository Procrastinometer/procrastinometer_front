<script>
    const totalMinutesTracked = 84200;
    const avgMonthlyMinutes = Math.floor(totalMinutesTracked / 12);
    const topIdeUsed = 'VS Code';
    const topProjectWorked = 'procrastinometer_front';
    const topOsUsed = 'Linux';

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const daysInWeek = 7;
    const totalDisplayWeeks = 53;
    const maxActivityLevel = 5;

    let activityGrid = [];
    for (let w = 0; w < totalDisplayWeeks; w++) {
        let week = [];
        for (let d = 0; d < daysInWeek; d++) {
            week.push({
                value: Math.floor(Math.random() * (maxActivityLevel + 1)),
                date: `2024-W${w + 1}-D${d + 1}`,
                label: `Week ${w + 1}, Day ${d + 1}`
            });
        }
        activityGrid.push(week);
    }

    function handleDayCellClick(dayData) {
        console.log("Clicked on day cell:", dayData.label, "Value:", dayData.value, "Date:", dayData.date);
    }
</script>

<div class="year-summary-page">
    <header class="page-header">
        <h2>Year Summary</h2>
    </header>

    <section class="overall-stats-grid">
        <div class="stat-item"><strong>Total time:</strong> {Math.floor(totalMinutesTracked / 60)}h {totalMinutesTracked % 60}m</div>
        <div class="stat-item"><strong>Avg per month:</strong> {Math.floor(avgMonthlyMinutes / 60)}h {avgMonthlyMinutes % 60}m</div>
        <div class="stat-item"><strong>Top IDE:</strong> {topIdeUsed}</div>
        <div class="stat-item"><strong>Top Project:</strong> {topProjectWorked}</div>
        <div class="stat-item"><strong>Top OS:</strong> {topOsUsed}</div>
    </section>

    <h3 class="heatmap-title">Yearly Activity Heatmap</h3>

    <div class="heatmap-container-wrapper">
        <div class="heatmap-content">
            <div class="heatmap-month-labels">
                {#each Array(totalDisplayWeeks) as _, i}
                    <div class="month-label-text">
                        {#if i % 4 === 1 && Math.floor(i / 4) < monthNames.length}
                            {monthNames[Math.floor(i / 4)]}
                        {/if}
                    </div>
                {/each}
            </div>
            <div class="heatmap-days-and-grid">
                <div class="heatmap-day-labels">
                    <div class="day-label-text">Mon</div>
                    <div class="day-label-text"> </div>
                    <div class="day-label-text">Wed</div>
                    <div class="day-label-text"> </div>
                    <div class="day-label-text">Fri</div>
                    <div class="day-label-text"> </div>
                    <div class="day-label-text">Sun</div>
                </div>
                <div class="activity-heatmap-grid">
                    {#each activityGrid as week, weekIndex}
                        <div class="week-activity-column">
                            {#each week as day, dayIndex}
                                <div
                                    class="day-activity-cell"
                                    style="--activity-level: {day.value / maxActivityLevel}"
                                    title="{day.label}: {day.value} units"
                                    on:click={() => handleDayCellClick(day)}
                                    role="button"
                                    tabindex="0"
                                    on:keydown={(e) => e.key === 'Enter' && handleDayCellClick(day)}
                                ></div>
                            {/each}
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .year-summary-page {
        max-width: 1250px;
        width: 100%;
        margin: 0 auto;
        padding: 0 1rem;
    }

    .page-header {
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        text-align: center;
    }
    .page-header h2 {
        font-size: 1.8rem;
        color: var(--color-text-primary);
        margin: 0;
    }

    .overall-stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2.5rem;
        font-size: 1rem;
    }
    .stat-item {
        background-color: var(--color-bg-secondary);
        padding: 1rem;
        border-radius: var(--radius-small);
        box-shadow: var(--shadow-main);
        color: var(--color-text-primary);
    }
    .stat-item strong {
        color: var(--color-accent-primary);
    }

    .heatmap-title {
        margin-top: 2rem;
        margin-bottom: 1.5rem;
        text-align: center;
        font-size: 1.5rem;
        color: var(--color-text-primary);
    }

    .heatmap-container-wrapper {
        overflow-x: auto;
        padding-bottom: 1rem;
        background-color: var(--color-bg-secondary);
        border-radius: var(--radius-main);
        padding: 1rem;
        box-shadow: var(--shadow-main);
    }
    .heatmap-content {
        display: inline-block;
        min-width: max-content;
    }

    .heatmap-month-labels {
        display: grid;
        grid-template-columns: repeat(var(--total-display-weeks, 53), calc(var(--day-cell-size, 16px) + var(--day-cell-gap, 3px)));
        margin-bottom: 0.5rem;
        padding-left: calc(var(--day-label-width, 30px) + var(--day-cell-gap, 3px) * 2);
    }
    .month-label-text {
        font-size: 0.75rem;
        color: var(--color-text-secondary);
        text-align: left;
        white-space: nowrap;
    }

    .heatmap-days-and-grid {
        display: flex;
        gap: calc(var(--day-cell-gap, 3px) * 2);
    }

    .heatmap-day-labels {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: var(--day-label-width, 30px);
        padding-right: var(--day-cell-gap, 3px);
    }
    .day-label-text {
        font-size: 0.7rem;
        color: var(--color-text-secondary);
        height: var(--day-cell-size, 16px);
        display: flex;
        align-items: center;
    }

    .activity-heatmap-grid {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: var(--day-cell-size, 16px);
        gap: var(--day-cell-gap, 3px);
    }

    .week-activity-column {
        display: grid;
        grid-template-rows: repeat(7, var(--day-cell-size, 16px));
        gap: var(--day-cell-gap, 3px);
    }

    .day-activity-cell {
        background-color: hsl(
            var(--heatmap-h, 210),
            var(--heatmap-s, 80%),
            calc(var(--heatmap-l-base, 92%) - var(--activity-level, 0) * var(--heatmap-l-factor, 50%))
        );
        border-radius: 2px;
        transition: background-color 0.2s ease-out;
        cursor: pointer;
    }

    .day-activity-cell:hover, .day-activity-cell:focus {
        background-color: var(--heatmap-hover-bg);
        outline: 1px solid var(--color-accent-primary);
    }

    :root {
        --day-cell-size: 16px;
        --day-cell-gap: 3px;
        --day-label-width: 30px;
        --total-display-weeks: 53;
    }
</style>
