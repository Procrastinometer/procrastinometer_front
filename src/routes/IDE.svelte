<script>
    let ideStats = [
        { name: 'VS Code', today: 180, week: 840, color: '#4CAF50' }, // хвилини
        { name: 'WebStorm', today: 60, week: 320, color: '#2196F3' },
        { name: 'PyCharm', today: 30, week: 120, color: '#FFC107' },
        { name: 'Android Studio', today: 15, week: 80, color: '#9C27B0' }
    ];

    let maxToday = Math.max(...ideStats.map(i => i.today), 1);
</script>

<div class="ide-page">
    <h2>IDE Usage</h2>

    <ul class="ide-list">
        {#each ideStats as ide}
            <li class="ide-item">
                <div class="ide-header">
                    <span class="ide-name">{ide.name}</span>
                    <span class="ide-time">{Math.floor(ide.today / 60)}h {ide.today % 60}m today</span>
                </div>
                <div class="bar-track">
                    <div
                            class="bar-fill"
                            style="width: {(ide.today / maxToday) * 100}%; background-color: {ide.color};"
                    ></div>
                </div>
                <div class="week-info">
                    Weekly: {Math.floor(ide.week / 60)}h {ide.week % 60}m
                </div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .ide-page {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        padding: 2rem;
    }

    h2 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    .ide-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .ide-item {
        background: white;
        border-radius: 10px;
        padding: 1rem;
        margin-bottom: 1rem;
        box-shadow: 0 1px 4px rgba(0,0,0,0.05);
    }

    .ide-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        font-weight: 500;
    }

    .bar-track {
        background-color: #eee;
        height: 10px;
        border-radius: 6px;
        overflow: hidden;
    }

    .bar-fill {
        height: 10px;
        border-radius: 6px;
        transition: width 0.3s ease;
    }

    .week-info {
        margin-top: 0.5rem;
        font-size: 0.85rem;
        color: #666;
    }
</style>
