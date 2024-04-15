<script setup lang="ts">
import { Link } from '../lib/service';

defineProps<{
  link: Link;
}>();
</script>

<template>
  <li>
    <a :href="link.href">
      {{ link.label }}
    </a>
  </li>
</template>
