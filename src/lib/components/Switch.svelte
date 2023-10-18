<script>
    import { onMount } from "svelte";

    let theme;
    
    onMount(() => {
        theme = document.documentElement.getAttribute("data-theme");
        if (theme) {
            set_theme(theme);
        }
    });
    
    function set_theme(theme) {
        const one_year = 60 * 60 * 24 * 365;
        document.cookie = `theme=${theme}; max-age=${one_year}; path=/`;
        document.documentElement.setAttribute("data-theme", theme);
    }
</script>

<select class="select" value={theme} aria-label="toggle theme" on:change="{(e) => set_theme(e.target.value)}">
    <option value="">Auto</option>
    <option value="light">Clair</option>
    <option value="dark">Sombre</option>
</select>