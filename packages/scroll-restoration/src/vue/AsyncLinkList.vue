<script setup lang="ts">
import { Component, defineAsyncComponent, h, onMounted } from 'vue';
import { createHistoryRestoration } from '../lib/historyRestoration';
import { service } from '../lib/service';
import ErrorMessage from './ErrorMessage.vue';
import LinkList from './LinkList.vue';
import Loading from './Loading.vue';

const historyRestoration = createHistoryRestoration();

const AsyncLinkListHOC = defineAsyncComponent({
  loadingComponent: Loading,
  loader: async () => {
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
  },
  errorComponent: ErrorMessage,
});
</script>

<template>
  <AsyncLinkListHOC />
</template>
