<script>
    import {afterUpdate} from 'svelte';
    import config from '../config.js';
    export let selectDestination;
    let allLocations = config.specialEvents ? config.locations.concat(config.specialEvents) : config.locations
    let columns = 2;
    
    function getColumns() {
      let column = document.getElementsByClassName("alpha-container");
      let columnWidth = column[0].clientWidth
      let parentWidth = column[0].parentElement.clientWidth
      columns = Math.floor(parentWidth/columnWidth)
    }
  
    afterUpdate(() => {
      getColumns()
    })    
  </script>
  
  <svelte:window on:resize={getColumns} />
  <h2 class="alpha-heading">Locations</h2>
  <div class="alpha-table-head">
      {#each {length: columns} as _}
      <div class="table-row table-heading">
          <div class="table-cell">
              Name
          </div>
          <div class="table-cell">
              Floor
          </div> 
          <div class="table-cell">
              Room
          </div>           
        </div>
      {/each}
  </div>
  <div class="alpha-container"> 
    {#each allLocations.sort((a, b) => {return a.name > b.name ? 1 : 0}) as floorLocation}
      <div class="table-row" on:click={() => selectDestination(floorLocation)}>
          <div class="table-cell">
              {floorLocation.name}
          </div>
          <div class="table-cell">
              {floorLocation.floor}
          </div> 
          <div class="table-cell">
              {floorLocation.roomNumber}
          </div>           
      </div>     
    {/each}
  </div>
    
  <style>
  </style>