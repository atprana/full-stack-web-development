/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const data = await request.formData();
    const todo = data.get('new-todo');
    console.log(todo);

    return new Response(JSON.stringify({ success: true }), {
        headers: {
            "content-type": "application/json"
        }
    })

}