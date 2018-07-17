<template>
    <transition name="fade">
        <div class="ay-loading-mask">
            <div class="ay-spinner">
                <svg class="ay-spinner-inner" viewBox="0 0 50 50"
                     v-bind:style="{ width: radius/2 + 'px', height: radius/2 + 'px' }">
                    <circle class="path" cx="25" cy="25" r="20" fill="none" :stroke="strokeColor"
                            :stroke-width="strokeWidth"></circle>
                </svg>
            </div>
        </div>
    </transition>
</template>

<script>
  export default {
    name: 'Spinner',
    props: {
      type: String,
      radius: {
        type: Number,
        default: 100,
      },
      strokeWidth: {
        type: Number,
        default: 5,
      },
      strokeColor: {
        type: String,
        default: '#efefef',
      },
    },
  }
</script>

<style lang="less">
    .ay-loading-mask{
        position: absolute;
        z-index: 2000;
        background-color: hsla(0,0%,100%,.9);
        margin: 0;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: opacity .3s;
    }

    .ay-spinner {
        top: 50%;
        margin-top: -21px;
        width: 100%;
        text-align: center;
        position: absolute;
    }

    .ay-spinner .ay-spinner-inner {
        height: 42px;
        width: 42px;
        animation: loading-rotate 2s linear infinite;
    }

    .ay-spinner-inner .path {
        animation: loading-dash 1.5s ease-in-out infinite;
        stroke-dasharray: 90,150;
        stroke-dashoffset: 0;
        stroke-width: 2px;
        stroke: #409eff;
        stroke-linecap: round;
    }

    @keyframes loading-rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes loading-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -40px;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -120px;
        }
    }

</style>
