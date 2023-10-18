<script>
    import { onMount } from "svelte";

    let current_theme;
    
    onMount(() => {
        const saved_theme = document.documentElement.getAttribute("data-theme");
        if (saved_theme) {
            current_theme = saved_theme;
            return;
        }
        
        set_theme(theme);
    });
    
    function set_theme(theme) {
        const one_year = 60 * 60 * 24 * 365;
        document.cookie = `theme=${theme}; max-age=${one_year}; path=/`;
        document.documentElement.setAttribute("data-theme", theme);
        current_theme = theme;
    }
</script>

<select aria-label="toggle theme" on:change="{(e) => set_theme(e.target.value)}">
    <option value="">Auto</option>
    <option value="light">Clair</option>
    <option value="dark">Sombre</option>
</select>