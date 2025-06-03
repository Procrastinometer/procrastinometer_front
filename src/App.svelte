<script>
  let activeTab = 'Every Day Tracking';
  let tabs = [
    'Every Day Tracking',
    'Every Week Tracking',
    'Every Minute Tracking',
    'Project Tracking',
    'IDE Tracking',
    'Operating System Tracking',
    'Year Tracking'
  ];
</script>

<div class="layout">
  <aside class="sidebar">
    <h1>Procrastinometer</h1>
    <ul>
      {#each tabs as tab}
        <li>
          <button class:active={activeTab === tab} on:click={() => activeTab = tab}>
            {tab}
          </button>
        </li>
      {/each}
    </ul>
  </aside>

  <main class="main">
    <div class="container">
      <header class="header">
        <h2>Dashboard</h2>
        <button class="share-btn">Share</button>
      </header>

      <section class="grid">
        <div class="card">
          <h3>Every Day Tracking</h3>
          <div class="circle">4h / 8h</div>
          <p class="muted center">Last updated: 10 min ago</p>
        </div>

        <div class="card">
          <h3>Every Week Tracking</h3>
          <p>−6% from last week</p>
          <div class="bar"></div>
          <p class="muted small">Average: 4.8h/day</p>
        </div>

        <div class="card">
          <h3>Project Tracking</h3>
          <table>
            <thead>
            <tr>
              <th>Today</th>
              <th>Time</th>
              <th>7 Days</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Project A</td>
              <td>43m</td>
              <td>4.0h</td>
            </tr>
            <tr>
              <td>Project B</td>
              <td>3h</td>
              <td>3.0h</td>
            </tr>
            <tr>
              <td>Project C</td>
              <td>1h</td>
              <td>2.5h</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class="card">
          <h3>IDE Tracking</h3>
          <p>VS Code — 100%</p>
          <div class="bar"></div>
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

      <hr class="divider" />

      <footer class="footer">
        © 2025 Procrastinometer by You. All rights reserved.
      </footer>

    </div>
  </main>
</div>