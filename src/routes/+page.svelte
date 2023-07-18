<script>
  import TodoCheckbox from "./TodoCheckbox.svelte";

  export let data;
</script>

{#each data.items as todo}
  <TodoCheckbox {todo} />
{/each}
