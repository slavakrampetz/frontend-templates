<div class="app">

	<Header>
		<svelte:fragment slot="title">
			Your title here
		</svelte:fragment>
	</Header>

	<!-- Workarea -->
	<div class="container">
		<Main />
	</div>

	<Footer />
</div>


<script lang="ts">

	import './style/app.scss';

	import Header from '../widget/layout/header/header.svelte'
	import Footer from '../widget/layout/footer/footer.svelte'
	import Main from './main.svelte'

</script>

<style>
</style>
