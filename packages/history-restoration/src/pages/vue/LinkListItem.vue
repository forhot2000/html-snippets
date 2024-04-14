<script setup>
import { defineProps } from 'vue';

defineProps(['link']);
</script>

<template>
  <li>
    <a :href="link.href">
      {{ link.label }}
    </a>
  </li>
</template>
