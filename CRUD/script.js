function handleDelete(id) {
  fetch(`/api/v1/notes/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        window.location.reload();
      }
    });
}
function handleUpdate(id) {
  fetch(`/api/v1/notes/${id}`, {
    method: 'PUT',
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        window.location.reload();
      }
    });
}
function handleCreate() {
    fetch('/api/v1/notes', {
        method: 'POST',
    })
        .then((response) => response.json())
        .then((data) => {
        if (data.success) {
            window.location.reload();
        }
        });
    }
    window.onload = () => {
        const createButton = document.getElementById('create');
        createButton.onclick = handleCreate;
        const deleteButtons = document.getElementsByClassName('delete');
        for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].onclick = () => handleDelete(deleteButtons[i].id);
        }
        const updateButtons = document.getElementsByClassName('update');
        for (let i = 0; i < updateButtons.length; i++) {
        updateButtons[i].onclick = () => handleUpdate(updateButtons[i].id);
        }
    }
;
