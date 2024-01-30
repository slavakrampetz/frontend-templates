<header class="container">
	<h1 class="part">
		<slot name="title"/>
	</h1>

	<div class="part">
		<slot name="actions"/>
	</div>
</header>

<style>

  header {
	  padding-top: 12px;
	  padding-bottom: 12px;
	  display: flex;
	  justify-content: space-between;
  }

  h1 {
	  font-size: 1.2rem;
	  font-weight: normal;
  }

</style>

<script lang="ts">

	// function fire(name: string) {
	// 	console.log('Fire event:', name);
	// }
	//
	// function reload() {
	// 	fire('reload');
	// }

</script>
