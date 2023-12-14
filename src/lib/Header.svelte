<script>
    import config from "../config";
</script>

<header style={"background-color: " + config.appearance.backgroundColor + "; color: " + config.appearance.textColor + ";"}>
    <h1>{config.appearance.headerText}</h1>
    {#if config.appearance.subHeaderText}<h2>{config.appearance.subHeaderText}</h2>{/if}
</header>

<style>
</style>