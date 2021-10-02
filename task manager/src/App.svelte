<script lang="ts">
import { text } from "svelte/internal";

  let nome: string = "";
</script>

<input type="text" value={nome} />
<p>Seja bem vindo, {nome}!</p>

