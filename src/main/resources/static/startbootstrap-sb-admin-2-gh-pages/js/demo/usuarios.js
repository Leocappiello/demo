// Call the dataTables jQuery plugin
$(document).ready(function () {
    cargarUsuarios()
    $('#usuarios').DataTable();
});

function cargarUsuarios() {
    let usuario = ''
    const request = fetch('https://jsonplaceholder.typicode.com/users/1/todos', {

        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(elem => elem.json())
        .then(response => {
            response.map(elem => {
                usuario += `
                    <tr>
                        <td>${elem.id}</td>
                        <td>${elem.userId}</td>
                        <td>${elem.title}</td>
                        <td>${elem.completed}</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                    </tr>`
                
            })
            document.querySelector('#usuarios tbody').outerHTML = usuario
        })



}
