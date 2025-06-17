<script>
    let preferences = {
        darkMode: false,
        emailNotifications: true,
        dailySummary: false
    };

    function toggle(setting) {
        preferences[setting] = !preferences[setting];
    }
</script>

<div class="settings-page">
    <h2>Settings</h2>

    <div class="section">
        <h3>Appearance</h3>
        <div class="setting-row">
            <span>Dark Mode</span>
            <label class="toggle">
                <input type="checkbox" bind:checked={preferences.darkMode} on:change={() => toggle('darkMode')} />
                <span class="slider"></span>
            </label>
        </div>
    </div>

    <div class="section">
        <h3>Notifications</h3>
        <div class="setting-row">
            <span>Email Alerts</span>
            <label class="toggle">
                <input type="checkbox" bind:checked={preferences.emailNotifications} on:change={() => toggle('emailNotifications')} />
                <span class="slider"></span>
            </label>
        </div>
        <div class="setting-row">
            <span>Daily Summary</span>
            <label class="toggle">
                <input type="checkbox" bind:checked={preferences.dailySummary} on:change={() => toggle('dailySummary')} />
                <span class="slider"></span>
            </label>
        </div>
    </div>

    <p class="muted">Settings are not saved yet. (Mock only)</p>
</div>

<style>
    .settings-page {
        max-width: 500px;
        margin: 0 auto;
        padding: 2rem;
    }

    h2 {
        text-align: center;
        margin-bottom: 2rem;
    }

    .section {
        margin-bottom: 2rem;
    }

    h3 {
        font-size: 1.1rem;
        margin-bottom: 1rem;
        color: #333;
    }

    .setting-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        font-size: 1rem;
        color: #444;
    }

    .toggle {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 22px;
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
        background-color: #ccc;
        border-radius: 34px;
        transition: 0.4s;
    }

    .slider::before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        border-radius: 50%;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: #2563eb;
    }

    input:checked + .slider::before {
        transform: translateX(18px);
    }

    .muted {
        text-align: center;
        font-size: 0.85rem;
        color: #888;
    }
</style>