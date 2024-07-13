const url = "https://randomuser.me/api/?results=25";

async function fetchUsers() {
    const response = await fetch(url);
    const data = await response.json();
    const users = data.results;

    const cardContainer = document.getElementById("container-cards");

//testando
    for (let i = 0; i < users.length; i++) {
    let user = users[i];
    cardContainer.innerHTML += `
    <div class="col">
        <div class="card h-100">
            <img src="${user.picture.large}" class="card-img-top" alt="cuida">
            <div class="card-body">
                <h5 class="card-title">${user.name.first} ${user.name.last}, ${user.dob.age}</h5>
                <p class="card-text">${user.location.country}</p>
                <p class="card-text">${user.cell}</p>   
                <p class="card-text">${user.email}</p>   
            </div>
        </div>
    </div>
    `
    }
}

fetchUsers()
