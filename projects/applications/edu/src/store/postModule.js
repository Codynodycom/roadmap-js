import axios from "axios";

export const postModule = {
	state: () => ({
		posts: [],
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
	}),
	getters: {
			sortedPosts(state) {
			return [...state.posts].sort((post1, post2)  => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
		},
		sortedAndSearchedPosts(state, getters) {
			return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
		}
	},
	mutations: {
		setPosts(state, posts) {
			state.posts = posts;
		},
		setPostLoading(state, bool) {
			state.isPostLoading = bool;
		},
		setSelectedSort(state, selectedSort) {
			state.selectedSort = selectedSort;
		},
		setSearchQuery(state, query) {
			state.searchQuery = query;
		},
		setPage(state, page) {
			state.page = page;
		},
		setLimit(state, limit) {
			state.limit = limit;
		},
		setTotalPages(state, totalPages) {
			state.totalPages = totalPages;
		},
		setSortOptions(state, options) {
			state.sortOptions = options;
		},
		capitalize(state, posts) {
			for (let i=0; i<state.posts.length; i++) {
				state.posts[i].title = state.posts[i].title[0].toUpperCase() + state.posts[i].title.slice(1)
				state.posts[i].body = state.posts[i].body[0].toUpperCase() + state.posts[i].body.slice(1)
			}
		},
	},
	actions: {
		async fetchPosts({state, commit}) {
			try {
				commit('setPostLoading', true);
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
					params: {
						_page: state.page,
						_limit: state.limit
					}
				});
				commit('setTotalPages', Math.ceil(response.headers['x-total-count']/state.limit))
				commit('setPosts', response.data);
				commit('capitalize', state.posts);
				commit('setPostLoading', false);
			} catch (e) {
				alert('Ошибка запроса к jsonPlaceholder' + e)
			} finally {
				commit('setPostLoading', false);
			}
		},
		async loadMorePosts({state, commit}) {
			try {
				commit('setPage', state.page + 1);
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
					params: {
						_page: state.page,
						_limit: state.limit
					}
				});
				commit('setTotalPages', Math.ceil(response.headers['x-total-count']/state.limit))
				commit('setPosts', [...state.posts, ...response.data]);
				commit('capitalize', state.posts);
			} catch (e) {
				alert('Ошибка запроса к jsonPlaceholder' + e)
			}
		},
	},
	namespaced: true,
}