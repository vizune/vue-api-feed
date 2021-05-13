<template>
    <div class="Card u-p-4">
        <img 
        :src="imageUrl" 
        :alt="title" 
        class="w-full" />
        <h3 class="u-font-bold u-text-lg u-mt-0" v-if="title" v-html="title" />
        <p v-if="description" v-html="description" />
    </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  props: {
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
      type: String,
      required: true
    }
  },
};
</script>

<style lang="scss" scoped>
.Card {
    $card-border-radius: 6px;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #d9d9d9;
    border-radius: $card-border-radius;
    overflow: hidden;
    color: #393939;
}
</style>