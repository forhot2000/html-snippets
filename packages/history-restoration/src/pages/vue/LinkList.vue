<script setup>
import { defineProps } from 'vue';
import LinkListItem from './LinkListItem.vue';

defineProps(['links']);
</script>

<template>
  <ul>
    <LinkListItem v-for="link in links" :link="link" />
  </ul>
</template>
