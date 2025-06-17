<script>
    import { link, location } from 'svelte-spa-router';

    const navLinks = [
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/projects', label: 'Projects' },
        { path: '/day', label: 'Daily View' },
        { path: '/week', label: 'Weekly View' },
        { path: '/ide', label: 'IDE Usage' },
        { path: '/os', label: 'OS Usage' },
        { path: '/year', label: 'Year Summary' },
        { path: '/settings', label: 'Settings' }
    ];
</script>

<aside class="sidebar">
    <div class="sidebar-header">
        <img src="/logo.jpg" alt="Procrastinometer Logo" class="sidebar-logo" />
        <h1 class="sidebar-title">Procrastinometer</h1>
    </div>

    <ul class="sidebar-links">
        {#each navLinks as navLink}
            <li>
                <a
                        href={navLink.path}
                        use:link
                        class:active={$location.startsWith(navLink.path)}
                >
                    {navLink.label}
                </a>
            </li>
        {/each}
    </ul>
</aside>
