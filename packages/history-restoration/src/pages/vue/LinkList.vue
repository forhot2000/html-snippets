<script setup>
import LinkListItem from './LinkListItem.vue';

defineProps(['links']);
</script>

<template>
  <ul>
    <LinkListItem v-for="link in links" :link="link" />
  </ul>
</template>
