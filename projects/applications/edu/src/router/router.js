import Main from "../views/Main.vue"
import Blog from "../views/Blog.vue"
import About from "../views/About.vue"
import PostIdPage from "../views/PostIdPage.vue";
import {createRouter, createWebHistory} from "vue-router"
import BlogPageStore from "../views/BlogPageStore.vue";


const routes = [
	{
		path: '/',
		component: Main
	},
	{
		path: '/blog',
		component: Blog
	},
	{
		path: '/about',
		component: About
	},
	{
		path: '/posts/:id',
		component: PostIdPage
	},
	{
		path: '/store',
		component: BlogPageStore
	},
	
]

const router = createRouter({
	routes,
	history: createWebHistory()
})

export default router;
