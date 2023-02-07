function updateTodo(id) {
    return $.ajax({
        method: "PUT",
        url: `/api/todos/${id}`,
        contentType: "application/json",
        cache: false,
        error: (error) => {
            console.error(error);
        },
    });
}

function deleteTodo(id) {
    return $.ajax({
        method: "DELETE",
        url: `/api/todos/${id}`,
        contentType: "application/json",
        cache: false,
        success: () => {
            console.log(`Todo #${id} has been deleted!`);
            window.location.href = '/';
        },
        error: (error) => {
            console.error(error);
        },
    });
}