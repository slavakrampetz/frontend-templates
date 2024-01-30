<footer>

  <div class="holder">

    <div class="part">
      <!--something at left-->
    </div>

    <div class="part">
      <div class="block">
        <div class="prefix">
          Technologies:
        </div>
        {#each references as link}
          <a href="{link.url}" target="_blank" rel="noreferrer">
            <img src="{'/i/' + link.img}" class="logo" alt="{link.title}" />
          </a>
        {/each}
      </div>
    </div>

  </div>
</footer>

<style lang="scss">

  @import '../../../shared/theme/init/init.scss';

  footer {
    /*background: var(--color-footer-back);*/
    padding: 12px 0;

    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .holder {
    @include container;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .part {
    display: flex;
    align-items: center;
    flex-shrink: 1;
    flex-grow: 0;
  }

  .block {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: max-content 1fr 1fr;
    align-items: center;
    flex-shrink: 1;
    flex-grow: 0;
  }

  .prefix {
  }

  a {
    height: 32px;
    max-width: 32px;
  }

</style>

<script lang="ts">

  type RefType = {
    img: string
    url: string
    title: string
  };

  const references: RefType[] = [
    { title: 'Svelte JS', img: 'svelte.svg', url: 'https://svelte.dev' },
    { title: 'Vite JS', img: 'vite.svg', url: 'https://vitejs.dev' },
  ];

</script>
