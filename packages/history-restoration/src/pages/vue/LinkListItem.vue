<script setup>
defineProps(['link']);
</script>

<template>
  <li>
    <a :href="link.href">
      {{ link.label }}
    </a>
  </li>
</template>
