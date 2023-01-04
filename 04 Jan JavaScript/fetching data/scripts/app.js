const tbody = document.querySelector('#target');

fetch('https://reqres.in/api/users')
.then(response => response.json()) // .json() internally convert string format response into json format
.then(result => {
    const users = result.data;
    users.forEach(user => {
        const row = `
        <tr>
            <td>${user.id}</td>
            <td>
                <img src="${user.avatar}" height="50">        
            </td>
            <td>${user.first_name} ${user.last_name}</td>
            <td>${user.email}</td>
        </tr>
        `;
    tbody.innerHTML += row;
    });
});