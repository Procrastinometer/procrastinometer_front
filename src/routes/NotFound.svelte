<script>
    import { link } from 'svelte-spa-router';
</script>

<div class="not-found-container">
    <h1 class="error-code">404</h1>
    <p class="error-message">Oops! The page you're looking for doesn't exist.</p>
    <a href="/dashboard" use:link class="back-home-link">
        <span class="arrow">←</span> Go back to Dashboard
    </a>
</div>

<style>
    .not-found-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: calc(100vh - 4rem);
        text-align: center;
        padding: 2rem;
        color: var(--color-text-primary);
        background-color: var(--color-bg-primary);
    }

    .error-code {
        font-size: clamp(4rem, 15vw, 8rem);
        font-weight: bold;
        color: var(--color-text-primary);
        margin: 0 0 0.5rem 0;
        line-height: 1;
    }

    .error-message {
        font-size: clamp(1.1rem, 3vw, 1.5rem);
        margin-top: 0;
        margin-bottom: 2.5rem;
        color: var(--color-text-secondary);
        max-width: 500px;
    }

    .back-home-link {
        margin-top: 1rem;
        font-size: 1rem;
        color: var(--color-text-on-accent);
        text-decoration: none;
        padding: 0.75rem 1.5rem;
        background-color: var(--color-accent-primary);
        border-radius: var(--radius-main);
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }

    .back-home-link:hover {
        background-color: var(--color-accent-secondary);
        opacity: 0.9;
    }

    .arrow {
        font-size: 1.2em;
    }
</style>
