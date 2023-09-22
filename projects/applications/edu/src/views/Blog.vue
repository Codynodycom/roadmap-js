<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input
        v-model="searchQuery"
        placeholder="Поиск..."
    ></my-input>
    <div class="app_btns">
      <my-button
          @click="showDialog"
      >Создать пост</my-button>
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      >
      </my-select>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>
    <br>
    <post-list
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <div v-intersection="loadMorePosts" class="observer">
      <div class="lds-ellipsis">
        <div></div><div></div><div></div><div></div>
      </div>
    </div>
    <!--    <div class="page__wrapper">-->
    <!--      <div-->
    <!--          v-for="pageNumber in totalPages"-->
    <!--          :key="pageNumber"-->
    <!--          class="page"-->
    <!--          :class="{-->
    <!--            'current-page': page === pageNumber-->
    <!--          }"-->
    <!--          @click="changePage(pageNumber)"-->
    <!--      >-->
    <!--        {{ pageNumber }}-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
import PostForm from "../components/PostForm.vue";
import PostList from "../components/PostList.vue";
import MyDialog from "../components/UI/MyDialog.vue";
import MyButton from "../components/UI/MyButton.vue";
import MySelect from "../components/UI/MySelect.vue";
import MyInput from "../components/UI/MyInput.vue";
import axios from 'axios';


export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    MyDialog,
    PostForm,
    PostList
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: true,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'},
      ],
    }
  },
  mounted() {
    this.fetchPosts();
    // console.log(this.$refs.observer);
    // let observer;
    //
    // let options = {
    //   rootMargin: "0px",
    //   threshold: 1.0,
    // };
    // const callback = (entries, observer) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts();
    //   }
    // };
    //
    // observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2)  => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  // watch: {
  //   page() {
  //     this.fetchPosts();
  //   }
  // },
  methods: {
    capitalize() {
      for (let i=0; i<this.posts.length; i++) {
        this.posts[i].title = this.posts[i].title[0].toUpperCase() + this.posts[i].title.slice(1)
        this.posts[i].body = this.posts[i].body[0].toUpperCase() + this.posts[i].body.slice(1)
      }
    },
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    // },
    async fetchPosts() {
      try {
        setTimeout(async () => {
          this.isPostLoading = true;
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          });
          this.totalPages = Math.ceil(response.headers['x-total-count']/this.limit)
          this.posts = response.data;
          this.capitalize();
          this.isPostLoading = false;
        }, 1000);
      } catch (e) {
        alert('Ошибка запроса к jsonPlaceholder')
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        setTimeout(async () => {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          });
          this.totalPages = Math.ceil(response.headers['x-total-count']/this.limit)
          this.posts = [...this.posts, ...response.data];
          this.capitalize();
        }, 500);
      } catch (e) {
        alert('Ошибка запроса к jsonPlaceholder')
      }
    }
  }
}
</script>

<style>
.app_btns {
  display: flex;
  justify-content: space-between;
}

.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: teal;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

/*.page__wrapper {*/
/*  display: flex;*/
/*  margin-top: 15px;*/
/*}*/
/*.page {*/
/*  border: 1px solid black;*/
/*  padding: 10px;*/
/*}*/
/*.current-page {*/
/*  border: 2px solid teal;*/
/*}*/
.observer {
  height: 10px;
}
</style>
