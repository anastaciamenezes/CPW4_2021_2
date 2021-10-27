<script lang="ts">
  import Header from "./lib/Header.svelte";

  let n1 = 0;
  let n2 = 0;
  let resultado = 0;

  function somar() {
    resultado = n1 + n2; 
  }
</script>

<Header />

<input type="number" on:keyup={somar} bind:value={n1} />
<span>+</span>
<input type="number" on:keyup={somar} bind:value={n2} />
<span> = {resultado}</span>

