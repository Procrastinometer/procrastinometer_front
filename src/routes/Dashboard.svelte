<script>
    let dailyProgressPercent = 50;
    let dailyProgressText = "4h / 8h";

    let projectsData = [
        { name: 'Project A', todayTime: '43m', todayMinutes: 43, sevenDaysTime: '4.0h', color: '#FF6B6B' },
        { name: 'Project B', todayTime: '3h', todayMinutes: 180, sevenDaysTime: '3.0h', color: '#4ECDC4' },
        { name: 'Project C', todayTime: '1h', todayMinutes: 60, sevenDaysTime: '2.5h', color: '#45B7D1' },
    ];

    let maxTodayMinutes = Math.max(...projectsData.map(p => p.todayMinutes), 1);
</script>

<div class="container">
    <header class="header">
        <h2>Dashboard</h2>
        <button class="share-btn">Share</button>
    </header>

    <section class="grid">
        <div class="card">
            <h3>Every Day Tracking</h3>
            <div class="progress-circle-container">
                <div
                        class="progress-circle"
                        style="--progress-percent: {dailyProgressPercent}; --progress-color: var(--accent);"
                >
                    <span class="progress-text">{dailyProgressText}</span>
                </div>
            </div>
            <p class="muted center">Last updated: 10 min ago</p>
        </div>

        <div class="card">
            <h3>Every Week Tracking</h3>
            <p>−6% from last week</p>
            <div class="bar" style="background-color: #FED766; width: 70%;"></div>
            <p class="muted small">Average: 4.8h/day</p>
        </div>

        <div class="card">
            <h3>Project Tracking</h3>
            <div class="project-bars-container">
                {#each projectsData as project}
                    <div class="project-bar-item">
                        <div class="project-info">
                            <span class="project-name">{project.name}</span>
                            <span class="project-time">{project.todayTime}</span>
                        </div>
                        <div class="bar-track">
                            <div
                                    class="bar-fill"
                                    style="width: {(project.todayMinutes / maxTodayMinutes) * 100}%; background-color: {project.color};"
                            ></div>
                        </div>
                    </div>
                {/each}
            </div>
            <p class="muted small" style="margin-top: 15px;">Data for 7 Days:
                {#each projectsData as project, i}
                    {project.name} - {project.sevenDaysTime}{#if i < projectsData.length - 1}, {/if}
                {/each}.
            </p>
        </div>

        <div class="card">
            <h3>IDE Tracking</h3>
            <p>VS Code — 100%</p>
            <div class="bar" style="background-color: #2AB7CA;"></div>
        </div>

        <div class="card">
            <h3>Operating System</h3>
            <p>Windows — 70%</p>
            <p>Linux — 90%</p>
        </div>

        <div class="card">
            <h3>Year Tracking</h3>
            <p>8 min</p>
        </div>
    </section>

    <div class="image-standalone">
        <img src="/pony.png" alt="Pony PNG" class="image-center" />
    </div>

    <hr class="divider" />

    <footer class="footer">
        © 2025 Procrastinometer by Nefarav.NET. All rights reserved.
    </footer>

</div>