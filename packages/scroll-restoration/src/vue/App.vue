<script setup lang="ts">
import AsyncLinkList from './AsyncLinkList.vue';
import LargeBlock from './LargeBlock.vue';
import PoweredByVue from './PoweredByVue.vue';
</script>

<template>
  <main>
    <h2>Vue page</h2>
    <AsyncLinkList />
    <LargeBlock />
    <LargeBlock />
    <LargeBlock />
    <AsyncLinkList />
    <LargeBlock />
    <LargeBlock />
    <AsyncLinkList />
  </main>
  <footer>
    <PoweredByVue />
  </footer>
</template>
