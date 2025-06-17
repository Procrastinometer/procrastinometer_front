<script>
    let osStats = [
        { name: 'Windows', minutes: 720, color: '#2196F3' },
        { name: 'Linux', minutes: 480, color: '#4CAF50' },
        { name: 'macOS', minutes: 60, color: '#9E9E9E' }
    ];

    let totalMinutes = osStats.reduce((sum, os) => sum + os.minutes, 0);
</script>

<div class="os-page">
    <h2>Operating System Usage</h2>

    <ul class="os-list">
        {#each osStats as os}
            <li class="os-item">
                <div class="os-header">
                    <span class="os-name">{os.name}</span>
                    <span class="os-time">
            {Math.floor(os.minutes / 60)}h {os.minutes % 60}m
            ({Math.round((os.minutes / totalMinutes) * 100)}%)
          </span>
                </div>
                <div class="bar-track">
                    <div
                            class="bar-fill"
                            style="width: {(os.minutes / totalMinutes) * 100}%; background-color: {os.color};"
                    ></div>
                </div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .os-page {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        padding: 2rem;
    }

    h2 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    .os-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .os-item {
        background: white;
        border-radius: 10px;
        padding: 1rem;
        margin-bottom: 1rem;
        box-shadow: 0 1px 4px rgba(0,0,0,0.05);
    }

    .os-header {
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
</style>
