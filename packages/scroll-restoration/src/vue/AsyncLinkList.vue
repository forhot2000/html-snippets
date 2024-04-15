<script setup lang="ts">
import { Component, defineAsyncComponent, h } from 'vue';
import { service } from '../lib/service';
import ErrorMessage from './ErrorMessage.vue';
import LinkList from './LinkList.vue';
import Loading from './Loading.vue';
import ScrollRestorationDone from './ScrollRestorationDone.vue';

const AsyncLinkListHOC = defineAsyncComponent({
  loadingComponent: Loading,
  loader: async () => {
    const links = await service.getLinks();
    const AwaitedLinkList: Component = {
      setup() {
        return () => [
          // children
          h(LinkList, { links }),
          h(ScrollRestorationDone),
        ];
      },
    };
    return AwaitedLinkList;
  },
  errorComponent: ErrorMessage,
});
</script>

<template>
  <AsyncLinkListHOC />
</template>
