<script>
  import { enhance } from "$app/forms";
    export let todo;
    let form;
    $: checked = todo.status === "DONE"
    $: console.log(checked)
</script>

<form method="post" action="?/changeTodo" bind:this={form} use:enhance>
    <input type="hidden" name="id" value="{todo.id}">
    <input type="checkbox" name="status" on:change={() => {
        form.requestSubmit()
    }} checked={checked}>
</form>