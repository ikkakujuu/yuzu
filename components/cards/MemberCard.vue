<template>
	<a class="member-link" :href="githubLink">
		<div class="member-card">
			<div class="profile-image">
				<img :src="imageLink" :alt="label">
			</div>
			<div class="meta">
				<span class="label">{{ label }}</span>
			</div>
		</div>
	</a>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
	props: {
		label: {
			required: true,
			type: String
		},
		githubLink: {
			required: true,
			type: String
		},
		imageLink: {
			required: true,
			type: String
		}
	}
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.member-link {
	text-decoration: none;
	color: #333;
}

.member-card {
	background-color: #f1f1f1;

	padding: 10px;
	border-radius: 4px;
	margin-top: 10px;

	display: flex;
	align-items: center;
	flex-direction: row;

	cursor: pointer;

	transition: 300ms;

	&:hover {
		background-color: #e2e2e2;
	}

	.profile-image {
		margin-right: 1rem;
		display: flex;

		img {
			width: 2.5rem;
			border-radius: 3px;
			height: 100%;
		}
	}

	.meta {
	}
}
</style>
