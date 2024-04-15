<script setup lang="ts">
import { Link } from '../lib/service';
import LinkListItem from './LinkListItem.vue';

defineProps<{
  links: Link[];
}>();
</script>

<template>
  <ul>
    <LinkListItem v-for="link in links" :link="link" />
  </ul>
</template>
