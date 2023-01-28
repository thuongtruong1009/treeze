<script setup lang="ts">
import { getAvatar } from "../helpers/node";

defineProps<{
  node: {
    name: string;
    avatar: string;
    birthday: string;
    phone?: string | null | undefined;
    spouse?: any;
  };
}>();
</script>

<template>
  <div class="card__container">
    <div class="card__main">
      <img :src="getAvatar(node.avatar)" alt="avatar" />
      <p>{{ node.name }}</p>
    </div>

    <div class="card__spouse" v-if="node.spouse">
      <img :src="getAvatar(node.spouse?.avatar)" alt="avatar" />
      <p>{{ node.spouse?.name }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$border: 1px solid #ccc;
.card__container {
  position: relative;

  .card__main,
  .card__spouse {
    border: $border;
    padding: 0.75em;
    text-decoration: none;
    display: inline-flex;
    border-radius: 1em;
    color: #333;
  }

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }

  .card__spouse {
    position: absolute;
  }
}
</style>
