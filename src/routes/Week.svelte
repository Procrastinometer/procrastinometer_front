<script>
    const weekData = [
        { day: 'Mon', hours: 4 },
        { day: 'Tue', hours: 6 },
        { day: 'Wed', hours: 3 },
        { day: 'Thu', hours: 5 },
        { day: 'Fri', hours: 7 },
        { day: 'Sat', hours: 2 },
        { day: 'Sun', hours: 1 }
    ];

    const maxHours = Math.max(...weekData.map(d => d.hours));
    const total = weekData.reduce((sum, d) => sum + d.hours, 0);
</script>

<div class="weekly-wrapper">
    <h2>Weekly View</h2>

    <div class="chart-wrapper">
        {#each weekData as day}
            <div class="bar-column">
                <div class="bar-outer">
                    <div
                            class="bar-inner"
                            style="height: {(day.hours / maxHours) * 100}%"
                            title="{day.hours}h"
                    >
                        <span class="bar-label">{day.hours}h</span>
                    </div>
                </div>
                <span class="day-label">{day.day}</span>
            </div>
        {/each}
    </div>

    <p class="total-label">Total: {total}h</p>
</div>

<style>
    .weekly-wrapper {
        max-width: 900px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
    }

    h2 {
        font-size: 1.8rem;
        margin-bottom: 2.5rem;
    }

    .chart-wrapper {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 2rem;
        height: 260px;
    }

    .bar-column {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
    }

    .bar-outer {
        background: #e5e7eb;
        border-radius: 12px;
        width: 40px;
        height: 200px;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: flex-end;
    }

    .bar-inner {
        width: 100%;
        background: linear-gradient(to top, #3b82f6, #60a5fa);
        border-radius: 12px 12px 0 0;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        transition: height 0.3s ease;
    }

    .bar-label {
        font-size: 0.75rem;
        color: white;
        padding-bottom: 6px;
        font-weight: 600;
    }

    .day-label {
        margin-top: 0.75rem;
        font-size: 0.9rem;
        color: #333;
    }

    .total-label {
        margin-top: 2.5rem;
        font-weight: 600;
        color: #1f2937;
        font-size: 1rem;
    }
</style>
