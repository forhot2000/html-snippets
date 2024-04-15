<script setup lang="ts">
import { Component, defineAsyncComponent, h, onMounted } from 'vue';
import { createHistoryRestoration } from '../lib/historyRestoration';
import { service } from '../lib/service';
import LinkList from './LinkList.vue';

const historyRestoration = createHistoryRestoration();

const AsyncLinkListHOC = defineAsyncComponent(async () => {
  const links = await service.getLinks();
  const AsyncLinkList: Component = {
    setup() {
      onMounted(() => {
        // scroll to saved scroll position after link list rendered
        historyRestoration.onLoad();
      });
      return () => h(LinkList, { links });
    },
  };
  return AsyncLinkList;
});
</script>

<template>
  <AsyncLinkListHOC />
</template>
