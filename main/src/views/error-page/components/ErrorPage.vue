<script setup lang="ts">

</script>

<template>
  <div class="xy-ErrorPage">
    <section class="xy-ErrorPage__container">
      <slot></slot>
      <p class="xy-ErrorPage__container--message">/* Nothing to see here */</p>
        <div class="xy-ErrorPage__container--buttonContainer">
          <router-link to="/" class="xy-ErrorPage__container--buttonContainer--button">
            <span class="xy-ErrorPage__container--buttonContainer--button--glitch" data-glitch="retour">retour</span>
          </router-link>
        </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import '../components/styles/animate/hoveEffect';
$font-f: Inconsolata, monospace;

@include b(ErrorPage) {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #1a122a;
  color: #fff;
  @include e(container) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    transition: opacity .4s ease-out, transform .5s ease-in-out;
    ///* Nothing to see here */
    @include m(message) {
      font-family: $font-f;
      font-size: 1.3em;
      margin-top: .2em;
      margin-bottom: 2em
    }

    @include m(buttonContainer) {
      display: inline-block;
      border-radius: 50px;
      position: relative;
      font-family: $font-f;
      &::after,
      &::before{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: 50px;
        opacity: 0;
        z-index: -1
      }
      &::before {
        border: 1px solid #6e38ce
      }
      &::after {
        border: 1px solid #33f7dd
      }
      &:hover {
        animation: glitch .2s cubic-bezier(.25, .46, .45, .94) both infinite;
        border: 1px solid rgba(255, 64, 125, .9)
      }
      &:hover::before{
        opacity:1;
        animation: glitch2 .15s cubic-bezier(.25,.46,45,.94) both infinite;
      }
      &:hover::after{
        opacity: .5;
        animation:glitch3 .15s cubic-bezier(.25,.46,.45,.94) reverse both infinite;
      }
      &:hover .xy-ErrorPage__container--buttonContainer--button--glitch::after{
        animation: glitch .3s cubic-bezier(.25, .46, .45, .94) reverse both infinite;
        opacity: .8;
        color: #f0f;
        z-index: -1
      }
      &:hover .xy-ErrorPage__container--buttonContainer--button--glitch::before{
        color: #33f7dd;
        z-index: -2;
        animation: glitch .3s cubic-bezier(.25, .46, .45, .94) both infinite;
        opacity: .8
      }
      @include m(button) {
        padding: 20px 60px;
        line-height: 1.7em;
        color: #ff407d;
        transition: color .2s ease-out;
        position: relative;
        display: block;
        border-radius: 50px;
        background-color: transparent;
        border: 1px solid rgba(255, 64, 125, .5);
        &::before{
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          border-radius: 50px;
          opacity: 0;
          z-index: -1
        };

        @include m(glitch) {
          text-decoration: none;
          position: relative;
          height: 100%;
          width: 100%;
          transform: translate(-50%, -50%);
          margin: 0;
          white-space: nowrap;
          &::after,
          &::before{
            display: block;
            content: attr(data-glitch);
            position: absolute;
            top: -5px;
            left: 0;
            height: 100%;
            width: 100%;
            opacity: 0
          }

        }
      }
    }
  }
}
</style>