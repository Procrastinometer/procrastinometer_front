<script>
    let selectedDate = new Date().toISOString().slice(0, 10);

    let timeBlocks = [
        { start: '09:00', end: '10:15', activity: 'VS Code', color: '#4CAF50' },
        { start: '10:15', end: '10:45', activity: 'Idle', color: '#ccc' },
        { start: '10:45', end: '12:00', activity: 'WebStorm', color: '#2196F3' },
        { start: '12:00', end: '13:30', activity: 'Procrastination 😅', color: '#FF6B6B' }
    ];
</script>

<div class="daily-page">
    <div class="header">
        <h2>Daily View</h2>
        <input type="date" bind:value={selectedDate} class="date-picker" />
    </div>

    <ul class="time-blocks">
        {#each timeBlocks as block}
            <li class="time-block">
                <div class="time">{block.start} – {block.end}</div>
                <div class="activity">
                    <span class="dot" style="background-color: {block.color}"></span>
                    {block.activity}
                </div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .daily-page {

        width: 100%;
        padding-right: 2rem;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
    }

    .date-picker {
        padding: 0.4rem 0.8rem;
        border-radius: 6px;
        border: 1px solid #ccc;
        font-size: 1rem;
    }

    .time-blocks {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .time-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.8rem 1rem;
        margin-bottom: 0.5rem;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }

    .time {
        font-weight: bold;
        color: #333;
        width: 160px;
    }

    .activity {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1rem;
        color: #444;
    }

    .dot {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }
</style>
