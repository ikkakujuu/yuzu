<template>
  <section class="center">
    <h1 class="header">Ikkakujū 🦄</h1>
	<a class="github-link" href="https://github.com/ikkakujuu">github.com/ikkakujuu</a>

	<div class="projects">
		<project-card v-for="project in projects" :key="project.title" :title="project.title" :icon="project.emoji" :githubLink="project.githubLink" />
	</div>
  </section>
</template>

<script lang="ts">
import ProjectCard from '../components/cards/ProjectCard.vue';
import {
  Component,
  Vue
} from 'nuxt-property-decorator';
import { State } from 'vuex-class';
import IProject from '../models/project';

@Component({
	components: {
		ProjectCard
	}
})
export default class extends Vue {
	public projects: IProject[] = [
		{
			title: 'gatewei',
			emoji: '👋',
			githubLink: 'https://github.com/ikkakujuu/gatewei'
		},
		{
			title: 'suika',
			emoji: '🍉',
			githubLink: 'https://github.com/ikkakujuu/suika'
		},
		{
			title: 'yuzu',
			emoji: '🍋',
			githubLink: 'https://github.com/ikkakujuu/yuzu'
		}
	];
}
</script>
<style scoped>
.center {
	display: flex;
	align-items: center;
	height: 100vh;
	justify-content: center;
	flex-direction: column;
}
.header {
	font-family: "Barlow", Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 500;
	font-size: 3rem;
	margin-top: 0;
	margin-bottom: 0.5rem;
}
.github-link {
	font-family: "Barlow", Tahoma, Geneva, Verdana, sans-serif;
	color: #333333;
	text-decoration: none;
}
.projects {
	width: 10rem;
	padding-top: 10px;
}
</style>
