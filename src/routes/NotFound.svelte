<script>
    import { link } from 'svelte-spa-router';
</script>

<div class="not-found">
    <h1 class="code">404</h1>
    <p class="message">Oops! The page you're looking for doesn't exist.</p>
    <a href="/dashboard" use:link class="back-home">← Go back to Dashboard</a>
</div>

<style>
    .not-found {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80vh;
        text-align: center;
        color: #333;
    }

    .code {
        font-size: 6rem;
        font-weight: bold;
        color: black;
        margin: 0;
    }

    .message {
        font-size: 1.3rem;
        margin-top: 0.5rem;
        color: #666;
    }

    .back-home {
        margin-top: 2rem;
        font-size: 1rem;
        color: #1d4ed8;
        text-decoration: none;
        padding: 0.6rem 1.2rem;
        background-color: #e0eefe;
        border-radius: 8px;
        transition: all 0.2s ease;
    }

    .back-home:hover {
        background-color: #dbeafe;
        color: #0f3cd8;
    }
</style>