<template>
  <v-avatar class="icon" size="80">
    <img src="~/assets/icon.jpg" alt="takoba">
  </v-avatar>
</template>

<style>
.icon {
  animation: turn 3.5s ease-out forwards 1s;
  transform: rotateY(540deg);
}
@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
