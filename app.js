console.log('funcionou')
const url = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
const listaPokemon = document.getElementById("card")
function convertPokemonToli(pkm){
    return `
    <div class="pokemon ${pkm.types[0].type.name}">
    <p class="nome">${pkm.name}</p>
            <img src="${pkm.sprites.other.dream_world.front_default}" alt="imagem">
        </div>
    `;
}
function getPokemonDetails(pkm){
    return fetch(pkm.url)
        .then((response) => response.json())
}

fetch(url)
    .then((response) => response.json())
    .then((jsonresponse) => jsonresponse.results)
    .then((list) => list.map(getPokemonDetails))
    .then((details) => Promise.all(details))
    .then((newlist) =>  listaPokemon.innerHTML = newlist.map(convertPokemonToli).join(" "))
    .catch((erro) => console.log("Error: ", erro))