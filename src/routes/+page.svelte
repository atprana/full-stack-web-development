<script>
    import TodoItem from "$lib/todo-item.svelte";
    const title="Todos";
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<h1>SvelteKit {title}</h1>

<form action="">
    <input type="text" name="todo" aria-label="Add a todo" placeholder="+ type to add todo">
</form>

<TodoItem />
<TodoItem />
<TodoItem />