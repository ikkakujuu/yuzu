<template>
  <section class="center">
    <h1 class="header">Ikkakujū 🦄</h1>
	<a class="github-link" href="https://github.com/ikkakujuu">github.com/ikkakujuu</a>

	<div class="projects card-container">
		<project-card 
			v-for="project in projects" 
			:key="project.title" 
			:title="project.title" 
			:icon="project.emoji" 
			:githubLink="project.githubLink" 
		/>
	</div>
	<div class="members card-container">
		<member-card 
			v-for="member in members" 
			:key="member.label" 
			:label="member.label" 
			:githubLink="member.githubLink" 
			:imageLink="member.imageLink" 
		/>
	</div>
  </section>
</template>

<script lang="ts">
import ProjectCard from '../components/cards/ProjectCard.vue';
import MemberCard from '../components/cards/MemberCard.vue';
import { Component, Vue } from 'nuxt-property-decorator';
import { State } from 'vuex-class';
import IProject from '../models/project';
import IMember from '../models/member';

@Component({
	components: {
		ProjectCard,
		MemberCard
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

	public members: IMember[] = [
		{
			label: 'timweiss',
			githubLink: 'https://github.com/timweiss',
			imageLink: 'https://avatars2.githubusercontent.com/u/9868824?s=100&v=4'
		},
		{
			label: 'BrunoScheufler',
			githubLink: 'https://github.com/BrunoScheufler',
			imageLink: 'https://avatars3.githubusercontent.com/u/4772980?s=100&v=4'
		}
	];
}
</script>
<style lang="scss" scoped>
.card-container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
}

.center {
	display: flex;
	align-items: center;
	height: 100vh;
	justify-content: center;
	flex-direction: column;
}
.header {
	font-family: 'Barlow', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 500;
	font-size: 3rem;
	margin-top: 0;
	margin-bottom: 0.5rem;
}
.github-link {
	font-family: 'Barlow', Tahoma, Geneva, Verdana, sans-serif;
	color: #333333;
	text-decoration: none;
}
.projects {
	padding-top: 10px;

	.project-link {
		width: 10rem;
		margin-left: 5px;
		margin-right: 5px;
	}
}
.members {
	margin-top: 10px;

	.member-link {
		margin-right: 5px;
		margin-left: 5px;
	}
}
</style>
