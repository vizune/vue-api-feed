<template>
    <div class="CTA">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 px-8">
            <div 
            v-for="item in items"
            v-bind:key="item">
             <Card
             :imageUrl="item.image_url"
             :title="item.name"
             :description="item.description" />
            </div>
        </div>
    </div>
</template>

<script>
import Card from '../Card/Card';

export default {
    name: 'CTA',
    components: {
        Card
    },
    props: {
        items: Array
    }
}
</script>
