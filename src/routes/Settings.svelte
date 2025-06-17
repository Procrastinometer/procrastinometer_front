<script>
    import { theme } from '../stores/settingsStore.js';

    function toggleTheme() {
        theme.update(currentValue => (currentValue === 'light' ? 'dark' : 'light'));
    }

    let emailNotifications = true;
    let dailySummary = false;
</script>

<div class="settings-page">
    <h2>Settings</h2>

    <div class="section">
        <h3>Appearance</h3>
        <div class="setting-row">
            <span>Dark Mode</span>
            <label class="toggle">
                <input
                    type="checkbox"
                    checked={$theme === 'dark'}
                    on:change={toggleTheme}
                />
                <span class="slider"></span>
            </label>
        </div>
    </div>

    <div class="section">
        <h3>Notifications (Mock)</h3>
        <div class="setting-row">
            <span>Email Alerts</span>
            <label class="toggle">
                <input type="checkbox" bind:checked={emailNotifications} />
                <span class="slider"></span>
            </label>
        </div>
        <div class="setting-row">
            <span>Daily Summary</span>
            <label class="toggle">
                <input type="checkbox" bind:checked={dailySummary} />
                <span class="slider"></span>
            </label>
        </div>
    </div>

    <p class="status-message">Theme settings are saved automatically. Other settings are for demonstration.</p>
</div>

<style>
    .settings-page {
        max-width: 550px;
        margin: 2rem auto;
        padding: 2rem;
        background-color: var(--color-bg-secondary);
        border-radius: var(--radius-main);
        box-shadow: var(--shadow-main);
    }

    h2 {
        text-align: center;
        margin-bottom: 2.5rem;
        color: var(--color-text-primary);
        font-size: 1.8rem;
    }

    .section {
        margin-bottom: 2.5rem;
    }

    .section:last-of-type {
        margin-bottom: 1.5rem;
    }

    h3 {
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
        color: var(--color-text-primary);
        border-bottom: 1px solid var(--color-border-primary);
        padding-bottom: 0.75rem;
    }

    .setting-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.25rem;
        font-size: 1rem;
        color: var(--color-text-primary);
    }

    .setting-row:last-child {
        margin-bottom: 0;
    }

    .toggle {
        position: relative;
        display: inline-block;
        width: 44px;
        height: 24px;
    }

    .toggle input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--color-bg-tertiary);
        border-radius: 34px;
        transition: 0.4s;
    }

    .slider::before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 3px;
        bottom: 3px;
        background-color: var(--color-bg-secondary);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: var(--color-accent-secondary);
    }

    input:checked + .slider::before {
        transform: translateX(20px);
    }

    .status-message {
        text-align: center;
        font-size: 0.9rem;
        color: var(--color-text-secondary);
        margin-top: 2rem;
    }
</style>
