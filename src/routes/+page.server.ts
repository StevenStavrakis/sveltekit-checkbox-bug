import { getItem, getItems, updateItem } from "$lib/server/db";

export async function load(event) {

    const items = await getItems()

    return {
        items
    }
}

export const actions = {
    changeTodo: async (event) =>{
        const formData = await event.request.formData()
        const id = formData.get("id")
        const status = formData.get("status") === "on" ? "DONE" : "TO_DO";
        await updateItem(Number(id), status);
    }
}