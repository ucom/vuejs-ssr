<template>
<div>
	<div class="home">Homepage</div>

    <div class="controls">
      <input @value="title" @input="onChangeTitle" />
      <button @click="addItem">Add item</button>
      <button @click="addAsyncItem">Add item after one second</button>
    </div>

    <div v-for="item in items" v-bind:key="item.id" class="item">
      <span>{{ item.title }}</span>
      <span>
        <button @click="onRemoveItem" :data-id="item.id">Remove</button>
      </span>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
import {
  MAIN__ITEM_ADD,
  MAIN__ITEM_ADD_ASYNC,
  MAIN__ITEM_DELELE,
} from '../store/const/main';

export default {
  metaInfo: {
    title: 'Main',
	  titleTemplate: '%s - Yay!',
	  htmlAttrs: {
	    lang: 'en',
	    amp: false
	  }
  },
  data() {
    return {
      title: 'Default title',
    };
  },
  computed: {
    ...mapState({
      items: state => state.main.items,
    }),
  },

  mounted: () => {
    console.log('Mounted');
  },

  serverPrefetch() {
    console.log('Run only on server');
  },

  methods: {
    addAsyncItem() {
      const item = {
        id: Math.floor(Math.random() * 100),
        title: this.$data.title,
      };

      this.$store.dispatch(MAIN__ITEM_ADD_ASYNC, { item });
    },
    addItem() {
      const item = {
        id: Math.floor(Math.random() * 100),
        title: this.$data.title,
      };

      return this.$store.commit(MAIN__ITEM_ADD, { item });
    },
    onChangeTitle(e) {
      this.$data.title = e.target.value;
    },
    onRemoveItem(e) {
      const id = +e.target.getAttribute('data-id');
      return this.$store.commit(MAIN__ITEM_DELELE, { id });
    },
  },
};
</script>

<style>
.home {
	border:1px dotted red;
	padding:10px;
}
</style>