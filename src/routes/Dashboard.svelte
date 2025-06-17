<script>
    let dailyProgressPercent = 50;
    let dailyProgressText = "4h / 8h";

    let projectsData = [
        { name: 'Project A', todayTime: '43m', todayMinutes: 43, sevenDaysTime: '4.0h', color: '#FF6B6B' },
        { name: 'Project B', todayTime: '3h', todayMinutes: 180, sevenDaysTime: '3.0h', color: '#4ECDC4' },
        { name: 'Project C', todayTime: '1h', todayMinutes: 60, sevenDaysTime: '2.5h', color: '#45B7D1' },
    ];

    let maxTodayMinutes = Math.max(...projectsData.map(p => p.todayMinutes), 1);

    const weekTrackingColor = '#FED766';
    const ideTrackingColor = '#2AB7CA';
</script>

<div class="dashboard-container">
    <header class="dashboard-header">
        <h2>Dashboard</h2>
        <button class="share-button">Share</button>
    </header>

    <section class="dashboard-grid">
        <div class="info-card">
            <h3>Every Day Tracking</h3>
            <div class="progress-circle-wrapper">
                <div
                    class="progress-ring"
                    style="--progress-percent: {dailyProgressPercent}; --progress-color: var(--color-accent-primary);"
                >
                    <span class="progress-ring-text">{dailyProgressText}</span>
                </div>
            </div>
            <p class="card-muted-text center-text">Last updated: 10 min ago</p>
        </div>

        <div class="info-card">
            <h3>Every Week Tracking</h3>
            <p class="card-main-text">−6% from last week</p>
            <div class="simple-bar" style="background-color: {weekTrackingColor}; width: 70%;"></div>
            <p class="card-muted-text small-text">Average: 4.8h/day</p>
        </div>

        <div class="info-card">
            <h3>Project Tracking</h3>
            <div class="project-bars-list">
                {#each projectsData as project}
                    <div class="project-bar-entry">
                        <div class="project-bar-info">
                            <span class="project-bar-name">{project.name}</span>
                            <span class="project-bar-time">{project.todayTime}</span>
                        </div>
                        <div class="bar-background-track">
                            <div
                                class="bar-foreground-fill"
                                style="width: {(project.todayMinutes / maxTodayMinutes) * 100}%; background-color: {project.color};"
                            ></div>
                        </div>
                    </div>
                {/each}
            </div>
            <p class="card-muted-text small-text project-summary">Data for 7 Days:
                {#each projectsData as project, i}
                    {project.name} - {project.sevenDaysTime}{#if i < projectsData.length - 1}, {/if}
                {/each}.
            </p>
        </div>

        <div class="info-card">
            <h3>IDE Tracking</h3>
            <p class="card-main-text">VS Code — 100%</p>
            <div class="simple-bar" style="background-color: {ideTrackingColor};"></div>
        </div>

        <div class="info-card">
            <h3>Operating System</h3>
            <p class="card-main-text">Windows — 70%</p>
            <p class="card-main-text">Linux — 90%</p>
        </div>

        <div class="info-card">
            <h3>Year Tracking</h3>
            <p class="card-main-text">8 min</p>
        </div>
    </section>

    <div class="image-section">
        <img src="/pony.png" alt="Pony Illustration" class="centered-image" />
    </div>

    <hr class="section-divider" />

    <footer class="page-footer">
        © 2025 Procrastinometer by Nefarav.NET. All rights reserved.
    </footer>
</div>

<style>
    .dashboard-container {
        padding: 0 1rem;
    }

    .dashboard-header {
        margin-bottom: 1.5rem;
    }
    .dashboard-header h2 {
        color: var(--color-text-primary);
    }

    .share-button {
        background-color: var(--color-accent-primary);
        color: var(--color-text-on-accent);
        border: none;
        padding: 0.5rem 1.25rem;
        border-radius: var(--radius-main);
        font-weight: 600;
        cursor: pointer;
    }
    .share-button:hover {
        opacity: 0.9;
    }

    .dashboard-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
    }

    .info-card {
        background-color: var(--color-bg-secondary);
        border-radius: var(--radius-main);
        padding: 1.25rem;
        box-shadow: var(--shadow-main);
    }
    .info-card:hover {
        box-shadow: var(--shadow-hover);
    }
    .info-card h3 {
        font-size: 1.1rem;
        margin-top: 0;
        margin-bottom: 1rem;
        color: var(--color-text-primary);
    }

    .progress-circle-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1.25rem 0;
    }

    .progress-ring {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background: conic-gradient(
            var(--progress-color, var(--color-accent-primary)) calc(var(--progress-percent, 0) * 1%),
            var(--color-bg-progress-track) calc(var(--progress-percent, 0) * 1%)
        );
    }
    .progress-ring::before {
        content: "";
        position: absolute;
        width: 75%;
        height: 75%;
        background: var(--color-bg-secondary);
        border-radius: 50%;
    }
    .progress-ring-text {
        position: relative;
        z-index: 1;
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--color-text-primary);
    }

    .card-main-text {
        font-size: 1rem;
        color: var(--color-text-primary);
        margin-bottom: 0.5rem;
    }
    .card-muted-text {
        color: var(--color-text-secondary);
    }
    .center-text {
        text-align: center;
    }
    .small-text {
        font-size: 0.85rem;
    }

    .simple-bar {
        height: 10px;
        border-radius: var(--radius-progress);
        margin-top: 0.75rem;
        margin-bottom: 0.5rem;
        width: 100%;
    }

    .project-bars-list {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .project-bar-entry {
        display: flex;
        flex-direction: column;
        gap: 0.375rem;
    }
    .project-bar-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.9rem;
        color: var(--color-text-primary);
    }
    .project-bar-name {
        font-weight: 500;
    }
    .project-bar-time {
        color: var(--color-text-secondary);
        font-size: 0.85rem;
    }

    .bar-background-track {
        width: 100%;
        height: 10px;
        background-color: var(--color-bg-progress-track);
        border-radius: var(--radius-progress);
        overflow: hidden;
    }
    .bar-foreground-fill {
        height: 100%;
        border-radius: var(--radius-progress);
    }
    .project-summary {
        margin-top: 1rem;
    }

    .image-section {
        display: flex;
        justify-content: center;
        margin: 1.25rem 0;
    }
    .centered-image {
        width: 260px;
        height: 215px;
        object-fit: contain;
    }

    .section-divider {
        border: none;
        border-top: 1px solid var(--color-border-primary);
        margin: 2rem 0;
        height: 0;
    }

    .page-footer {
        text-align: center;
        padding: 1.25rem 1rem;
        margin-top: auto;
        font-size: 0.875rem;
        color: var(--color-text-secondary);
        border-top: 1px solid var(--color-border-secondary);
        width: 100%;
    }
</style>
