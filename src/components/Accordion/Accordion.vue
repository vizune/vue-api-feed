<template>
  <div class="Accordion px-8" 
    v-if="items">
        <div class="Accordion-wrapper" v-for="item in items" v-bind:key="item.name">
            <details class="Accordion-item" v-bind:open="item.OpenByDefault">
                <summary class="Accordion-header" v-if="item.name">
                    <span>{{item.name}}</span>
                </summary>
                <div class="Accordion-content">
                    <div class="flex">
                        <img class="Accordion-image" 
                        :src="item.image_url" 
                        :alt="item.name" />
                        <p v-html="item.description" />
                    </div>
                </div>
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
        border-radius: 35px;

        & + & {
            margin-top: 1rem;
        }
    }

    &-header {
        font-weight: 500;
        padding: 1.25rem 2.5rem;
        position: relative;
        list-style: none; // firefox
        cursor: pointer;
        border-radius: 35px;
        transition: background-color .25s ease, border-radius .1s ease;

        @media screen and (min-width: 1024px) {
            font-size: 1.125rem;
        }

        &::-webkit-details-marker {
            display: none; // chrome
        }

        &:focus {
            outline: none;
        }

        &:hover {
            background-color: #ffa500;
            border-radius: 35px;
        }

        .Accordion-item[open] & {
            background-color: #ffa500;
            border-radius: 35px 35px 0 0;
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
        top: 16px;
        right: 26px;
        pointer-events: none;

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

    &-image {
        width: 100%;
        height: auto;
        max-width: 300px;
    }
}
</style>