<script setup lang="ts">
import { onMounted } from 'vue';
import { useScrollRestoration } from './useScrollRestoration';

const scrollRestoration = useScrollRestoration();

onMounted(() => {
  // scroll to saved scroll position after link list rendered
  scrollRestoration!.onLoad();
});
</script>

<template></template>
