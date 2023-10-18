<script>
    import { theme } from '$lib/stores'
</script>

<select bind:value="{$theme}">
    <option value="system">Auto</option>
    <option value="light">Clair</option>
    <option value="dark">Sombre</option>
</select>