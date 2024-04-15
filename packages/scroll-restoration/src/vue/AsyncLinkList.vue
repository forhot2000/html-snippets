<script setup lang="ts">
import { h } from 'vue';
import { service } from '../lib/service';
import LinkList from './LinkList.vue';
import { useAsyncComponent } from './useAsyncComponent';

const AsyncLinkListHOC = useAsyncComponent(async () => {
  const links = await service.getLinks();
  return h(LinkList, { links });
});
</script>

<template>
  <AsyncLinkListHOC />
</template>
