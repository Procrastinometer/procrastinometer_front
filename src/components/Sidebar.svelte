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

    function isActive(path) {
        if (path === '/') {
            return $location === '/';
        }
        if (path === '/dashboard' && ($location === '/' || $location === '/dashboard')) {
            return true;
        }
        return $location.startsWith(path) && path !== '/';
    }
</script>

<aside class="sidebar-container">
    <div class="sidebar-header-content">
        <img src="/logo.jpg" alt="Procrastinometer Logo" class="logo" />
        <h1 class="title">Procrastinometer</h1>
    </div>

    <nav class="navigation-links">
        <ul>
            {#each navLinks as navLink}
                <li>
                    <a
                        href={navLink.path}
                        use:link
                        class:active={isActive(navLink.path)}
                    >
                        {navLink.label}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</aside>

<style>
    .sidebar-container {
        height: 100vh;
        position: sticky;
        top: 0;
        background: var(--color-bg-secondary);
        width: 240px;
        padding: 32px 24px;
        border-right: 1px solid var(--color-border-primary);
        display: flex;
        flex-direction: column;
    }

    .sidebar-header-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 24px;
    }

    .logo {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 15px;
        border: 3px solid var(--color-bg-primary);
    }

    .title {
        font-size: 1.3rem;
        margin-bottom: 0;
        font-weight: 700;
        color: var(--color-text-primary);
    }

    .navigation-links ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .navigation-links li {
        margin: 0.5rem 0;
    }

    .navigation-links a {
        display: block;
        padding: 0.5rem 1rem;
        text-decoration: none;
        background-color: var(--color-bg-tertiary);
        border-radius: var(--radius-small);
        color: var(--color-text-sidebar-link);
        font-size: 0.95rem;
    }

    .navigation-links a:hover {
        background-color: var(--color-bg-hover);
        color: var(--color-text-accent);
    }

    .navigation-links a.active {
        background-color: var(--color-bg-active);
        font-weight: 600;
        color: var(--color-text-sidebar-link-active);
    }
</style>
