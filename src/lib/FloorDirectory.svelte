<script>
  import config from '../config.js';
  export let selectDestination;
</script>

{#if config.specialEvents}
    <div class="floor-container">
        <h2 class="floor-heading">{config.appearance.specialEventText}</h2>
        <div class="table-row table-heading">
            <div class="table-cell">
                Name
            </div> 
            <div class="table-cell">
                Room
            </div>           
        </div>
            {#each config.specialEvents.sort((a, b) => {return a.name > b.name ? 1 : 0}) as floorLocation}
            <div class="table-row" on:click={() => selectDestination(floorLocation)}>
                <div class="table-cell">
                    {floorLocation.name}
                </div>
                <div class="table-cell">
                    {floorLocation.roomNumber}
                </div>           
            </div>   
            {/each}
    </div>
{/if}

{#each config.metadata.maps as map}
  <div class="floor-container">
    <h2 class="floor-heading">{map.name}</h2>
    <div class="table-row table-heading">
        <div class="table-cell">
            Name
        </div> 
        <div class="table-cell">
            Room
        </div>           
    </div> 
        {#each config.locations.filter((entry => {return entry.floor === map.floor})).sort((a, b) => {return a.name > b.name ? 1 : 0}) as floorLocation}
        <div class="table-row" on:click={() => selectDestination(floorLocation)}>
            <div class="table-cell">
                {floorLocation.name}
            </div>
            <div class="table-cell">
                {floorLocation.roomNumber}
            </div>           
        </div>   
        {/each}
  </div>
{/each}

<style>
</style>