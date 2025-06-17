<script>
    const totalMinutes = 84200;
    const avgMonthly = Math.floor(totalMinutes / 12);
    const topIDE = 'VS Code';
    const topProject = 'procrastinometer_front';
    const topOS = 'Linux';

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const daysPerWeek = 7;
    const totalWeeks = 52;
    const max = 5;

    let grid = [];
    for (let w = 0; w < totalWeeks; w++) {
        let week = [];
        for (let d = 0; d < daysPerWeek; d++) {
            week.push({
                value: Math.floor(Math.random() * 6),
                label: `Week ${w + 1}, Day ${d + 1}`
            });
        }
        grid.push(week);
    }
</script>

<div class="year-page">
    <h2>Year Summary</h2>

    <div class="stats">
        <div><strong>Total time:</strong> {Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m</div>
        <div><strong>Avg per month:</strong> {Math.floor(avgMonthly / 60)}h {avgMonthly % 60}m</div>
        <div><strong>Top IDE:</strong> {topIDE}</div>
        <div><strong>Top Project:</strong> {topProject}</div>
        <div><strong>Top OS:</strong> {topOS}</div>
    </div>

    <h3 style="margin-top: 2rem; text-align: center;">Yearly Activity Heatmap</h3>

    <div class="heatmap-wrapper">
        <div class="month-labels">
            {#each Array(52) as _, i}
                <div class="month-label">
                    {#if i % 4 === 0}
                        {months[Math.floor(i / 4)]}
                    {/if}
                </div>
            {/each}
        </div>

        <div class="heatmap-grid">
            {#each grid as week}
                <div class="week-column">
                    {#each week as day}
                        <div
                                class="day-cell"
                                style="--level: {day.value / max}"
                                title="{day.label}: {day.value}h"
                        ></div>
                    {/each}
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .year-page {
        max-width: 1250px;
        width: 100%;
        margin: 0 auto;
        padding: 2rem;
    }

    h2 {
        font-size: 1.8rem;
        margin-bottom: 2rem;
        text-align: center;
    }

    .stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1rem;
        margin-bottom: 2rem;
        font-size: 1rem;
        color: #444;
    }

    .heatmap-wrapper {
        overflow-x: auto;
        padding-bottom: 1rem;
        margin-top: 1rem;
    }

    .month-labels {
        display: grid;
        grid-template-columns: repeat(52, 18px);
        font-size: 0.7rem;
        color: #666;
        margin-bottom: 0.4rem;
        padding-left: 10rem;
    }

    .month-label {
        text-align: center;
    }

    .heatmap-grid {
        display: flex;
        gap: 4px;
        flex-wrap: nowrap;
    }

    .week-column {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .day-cell {
        width: 18px;
        height: 18px;
        background-color: hsl(210, 80%, calc(92% - var(--level) * 50%));
        border-radius: 2px;
        transition: background 0.2s ease;
    }

    .day-cell:hover {
        background-color: hsl(210, 80%, 35%);
        cursor: pointer;
    }
</style>
