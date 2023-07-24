<script>
    import TodoItem from "$lib/todo-item.svelte";
    const title="Todos";
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="todos">
    <h1>{title}</h1>
    
    <form action="" class="new">
        <input type="text" name="new-todo" aria-label="Add a todo" placeholder="+ type to add todo" >
    </form>
    
    <TodoItem />
    <TodoItem />
    <TodoItem />
</div>

<style>
.todos :global(input) {
    border: 1px solid transparent;
   
}

.todos :global(input:focus-visible) {
    outline: none;
    box-shadow: inset 1px 1px 6px rgba(0,0,0,0.1);
    border: 1px solid #ff3e00
}

.todos {
    width: 100%;
    max-width: 42rem;
    margin: 4rem auto 0 auto;
}

.new {
    margin: 0 0 0.5rem 0;
    
}

.new input {
    width: 100%;
    font-size: 28px;
    padding: 0.5em 1em 0.3em 1em;
    box-sizing: border-box;
    background: rgba(255,255,255,0.05);
    border-radius: 8px;
    text-align: center;

}
</style>