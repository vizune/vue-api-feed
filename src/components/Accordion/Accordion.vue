<template>
  <div class="Accordion" 
    v-if="items">
        <div class="Accordion-wrapper" v-for="item in items" v-bind:key="item.name">
            <details class="Accordion-item" v-bind:open="item.OpenByDefault">
                <summary class="Accordion-header" v-if="item.name">{{item.name}}</summary>
                <div class="Accordion-content" v-html="item.content" vif="item.content"></div>
            </details>
            <span class="Accordion-icon"></span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    items: Array
  }
}
</script>

<style lang="scss" scoped>
.Accordion {
    @keyframes sweep {
        0% {
            opacity: 0; 
            transform: translateY(-10px);
        }
        100%  {
            opacity: 1; 
            transform: translateY(0);
        }
    }

    &-wrapper {
        position: relative;
        background-color: #fff;
        border-radius: 10px;

        & + & {
            margin-top: 1rem;
        }
    }

    &-header {
        font-weight: 500;
        padding: 2.875rem 2.5rem;
        position: relative;
        list-style: none; // firefox

        @media screen and (min-width: 1024px) {
            font-size: 1.125rem;
        }

        &::-webkit-details-marker {
            display: none; // chrome
        }

        &:focus {
            outline: none;
        }
    }

    &-content {
        padding: 3.125rem 2.5rem;
        
        @media screen and (min-width: 1024px) {
            font-size: 1.25rem;
        }

        .Accordion-item[open] & {
            animation: sweep .3s ease-in-out;
        }
    }

    &-icon {
        display: block;
        width: 2rem;
        height: 2rem;
        border: 2px solid #333;
        border-radius: 100%;
        position: absolute;
        top: 44px;
        right: 35px;

        &:before, &:after {
            content: '';
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 14px;
            height: 2px;
            border-radius: 2px;
            background-color: #393939;
        }

        &:after {
            transform: translate(-50%, -50%) rotate(90deg);
            transition: transform .25s ease;
            will-change: transform;
        }

        .Accordion-item[open] + & {
            &:after {
                transform: translate(-50%, -50%) rotate(0deg);
            }
        }
    }
}
</style>