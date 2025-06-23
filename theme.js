document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('theme-toggle');
    const label = document.getElementById('theme-label');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    function setTheme(isDark) {
        document.body.classList.toggle('dark-mode', isDark);
        label.textContent = isDark ? 'Night' : 'Day';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // Initial state
    if (savedTheme === 'dark' || (savedTheme === null && prefersDark)) {
        toggle.checked = true;
        setTheme(true);
    } else {
        toggle.checked = false;
        setTheme(false);
    }

    toggle.addEventListener('change', function() {
        setTheme(toggle.checked);
    });
});