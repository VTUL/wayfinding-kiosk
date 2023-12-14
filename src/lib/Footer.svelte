<script>
    import config from "../config";
    import { globalTimer } from "../store.js"
    
    $globalTimer = setTimeout(() => location.reload(), config.behavior.globalTimeout)
</script>

<footer style={"background-color: " + config.appearance.backgroundColor + "; color: " + config.appearance.textColor + ";"}>
    {@html config.appearance.logo}
</footer>

<style>
</style>