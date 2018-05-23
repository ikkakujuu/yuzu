<template>
	<a class="project-link" :href="githubLink">
		<div class="project-link-card">
			<div class="icon">
				<span class="emoji">{{ icon }}</span>
			</div>
			<div class="meta">
				<span class="title">{{ title }}</span>
			</div>
		</div>
	</a>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'nuxt-property-decorator';

@Component({
	props: {
		icon: {
			required: true,
			type: String
		},
		title: {
			required: true,
			type: String
		},
		githubLink: {
			required: true,
			type: String
		}
	}
})
export default class extends Vue {
	
}
</script>

<style lang="scss">
	.project-link {
		text-decoration: none;
		color: #333;
	}

	.project-link-card {
		background-color: #f1f1f1;

		padding: 10px;
		border-radius: 4px;
		margin-top: 10px;

		display: flex;
		align-items: center;
		flex-direction: column;

		cursor: pointer;

		transition: 300ms;

		&:hover {
			background-color: #e2e2e2;
		}
		
		.icon {
			padding: 2px;
			
			.emoji {
      			font-size: 28px;
			}
		}

		.meta {
			.title {
				font-size: 18px;
    			margin-bottom: 2px;
			}
		}
	}
</style>
