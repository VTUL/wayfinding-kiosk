import { writable } from "svelte/store";

export const showMap = writable(false);
export const splitFloors = writable(false);
export const transport = writable({name: "the elevators", id: "elevator"});
export const sortFloor = writable(true);
export const destination = writable({
  name: "",
  roomNumber: "",
  floor: 0,
  id: "",
});
export const timeline = writable();
export const globalTimer = writable();
export const tapTimeline = writable();