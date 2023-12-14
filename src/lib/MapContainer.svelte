<script>
    import { onMount, afterUpdate } from "svelte";
    import anime from "animejs";
    import config from "../config.js";
    import Map from "./Map.svelte";
    import { splitFloors, transport, destination, showMap, timeline } from "../store.js";
    let timer;

    onMount(() => {
        hideRoutes();
    });

    afterUpdate(() => {
        buildTimeline();
    });

    function hideRoutes() {
        let routes = document.getElementsByClassName(
            config.behavior.routeClass
        );

        for (let i = 0; i < routes.length; i++) {
            // console.log(routes[i])
            // console.log(routes[i].getTotalLength());
            // @ts-ignore
            routes[i].style.strokeDasharray = routes[i].getTotalLength();
            // @ts-ignore
            routes[i].style.strokeDashoffset = routes[i].getTotalLength();
        }
    }

    function buildTimeline() {
        if(timer) {
            clearTimeout(timer);
            console.log("timer cleared")
        }
        // console.log(start.id + destination.id);
        if ($showMap) {
            $timeline = anime.timeline();

            $timeline
                .add({
                    targets: "#" + config.metadata.kioskId,
                    duration: 10,
                    loop: false,
                    easing: "easeInOutSine",
                    scale: 5,
                    translateY: config.behavior.markerDistance,
                })
                .add({
                    targets: "#" + config.metadata.kioskId,
                    duration: 500,
                    loop: false,
                    easing: "easeInOutSine",
                    opacity: 1,
                    delay: 500,
                })
                .add({
                    targets: "#" + config.metadata.kioskId,
                    duration: config.behavior.markerDropDuration,
                    loop: false,
                    easing: "easeInElastic(1, .6)",
                    scale: 1,
                    translateY: 0,
                })
                .add(buildAnimation(true))
                .add({
                    targets: ".map:nth-child(2)",
                    duration: config.behavior.mapFadeIn,
                    loop: false,
                    easing: "easeInOutSine",
                    opacity: 1,
                    delay: 500,
                })
                .add(buildAnimation(false));

                $timeline.finished.then(() => setReset())

            $timeline.play();
        }
    }

    function setReset() {
        timer = setTimeout(() => location.reload(), config.behavior.resetTime)
    }

    function buildAnimation(first) {
        if (!first && !$splitFloors) return {};

        let animationDetails = {
            delay: config.behavior.routeDrawDelay,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "easeInOutSine",
            direction: "forwards",
            loop: false,
        };

        if (first && !$splitFloors) {
            animationDetails.targets =
                "#" + config.metadata.kioskId + $destination.id;
        } else if (first && $splitFloors) {
            animationDetails.targets =
                "#" + config.metadata.kioskId + $transport.id;
        } else {
            animationDetails.targets = "#" + $transport.id + $destination.id;
        }

        // @ts-ignore
        let length = document.getElementById(animationDetails.targets.substring(1)).getTotalLength();

        console.info("length: ", length);

        animationDetails.duration = config.behavior.routeDrawDuration * length;

        // console.log(animationDetails.duration);

        return animationDetails;
    }

    function changeTransport() {
        $timeline.pause();
        $timeline = {};
        hideRoutes();
        $transport = $transport.id === "elevator" ? {name: "the stairs", id: "stairs"} : {name: "the elevators", id: "elevator"};
        buildTimeline();
    }
</script>

<div class="options-container">
    <div class="take-photo">
        {@html config.appearance.takePhoto}
    </div>
    <div class="take-photo-text">
        <h2>Take a photo of the map before you go</h2>
    </div>
    {#if $splitFloors}
        <div class="change-transport-method">
            <h2>You are currently traveling via {$transport.name}</h2>
            <button id="change-transport-button" on:click={() => changeTransport()}>Change to {$transport.id === "elevator" ? "the stairs" : "the elevators"}
        </div>
    {/if}
    <div class="start-over">
        <h2>Or</h2>
        <button id="start-over-button" on:click={() => {location.reload();}}>Start Over</button>
    </div>
</div>
<div class="map-container">
    <Map map={config.metadata.maps.find((option) => {return option.floor === config.metadata.kioskFloor;}).file} start={{ name: "current location", id: "kiosk" }} destination={$splitFloors ? $transport : $destination} />
    {#if $splitFloors}
        <Map map={config.metadata.maps.find((option) => {return option.floor === $destination.floor;}).file} start={$transport} destination={$destination} />
    {/if}
</div>

<style>
    .map-container {
        height: 88vh;
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
        padding: 0 1rem;
        width: 100%;
    }

    .options-container {
        height: 12vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }

    .take-photo {
        width: 15%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
    }

    .take-photo-text {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 25%;
    }

    .change-transport-method, .start-over {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .change-transport-method {
        width: 35%;
    }
</style>
