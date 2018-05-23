<template>
  <section class="center">
    <h1 class="header">Ikkakujū 🦄</h1>
	<a href="https://github.com/ikkakujuu">github.com/ikkakujuu</a>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'nuxt-property-decorator';
import { State } from 'vuex-class';

@Component({})
export default class extends Vue {
  
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
	margin-bottom: 0.5rem;
}
a {
	font-family: "Barlow", Tahoma, Geneva, Verdana, sans-serif;
	color: #333333;
	text-decoration: none;
}
</style>
