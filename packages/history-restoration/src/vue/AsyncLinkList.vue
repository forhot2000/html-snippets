<script setup>
import { defineAsyncComponent, h, onMounted } from 'vue';
import { createHistoryRestoration } from '../lib/historyRestorationtion';
import { service } from '../lib/servicevice';
import LinkList from './LinkList.vue';

const historyRestoration = createHistoryRestoration();

const AsyncLinkList = defineAsyncComponent(async () => {
  const links = await service.getLinks();
  return {
    setup() {
      onMounted(() => {
        // scroll to saved scroll position after link list rendered
        historyRestoration.onLoad();
      });
      return () => h(LinkList, { links });
    },
  };
});
</script>

<template>
  <AsyncLinkList />
</template>
