let type1 = ""
let type2 = ""
pokemon1Image = ""
pokemon2Image = ""

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault()
    if (event.target.pokemon1.value === "" || event.target.pokemon2.value === "") {
        alert("Please choose two Pokemon")
    } else {
        document.getElementById("firstPokemon").remove()
        document.getElementById("secondPokemon").remove()
        const firstPokemon = document.createElement("aside")
        firstPokemon.setAttribute("id", "firstPokemon")
        const secondPokemon = document.createElement("aside")
        secondPokemon.setAttribute("id", "secondPokemon")
        document.querySelector("main").append(firstPokemon, secondPokemon)

        fetch(`https://pokeapi.co/api/v2/pokemon/${event.target.pokemon1.value}`)
            .then(response => {
                return response.json()
            }).then(pokemon1 => {
                console.log(pokemon1)
                const firstPokemon = document.getElementById("firstPokemon")
                displayMon(pokemon1, firstPokemon)
                type1 = pokemon1.types[0].type.name
                pokemon1Image = pokemon1.sprites.front_default
                console.log(pokemon1.types[0].type.name)
            })
        fetch(`https://pokeapi.co/api/v2/pokemon/${event.target.pokemon2.value}`)
            .then(response => {
                return response.json()
            }).then(pokemon2 => {
                console.log(pokemon2)
                const secondPokemon = document.getElementById("secondPokemon")
                displayMon(pokemon2, secondPokemon)
                type2 = pokemon2.types[0].type.name
                pokemon2Image = pokemon2.sprites.front_default
                console.log(pokemon2.types[0].type.name)
            })
        event.target.pokemon1.value = ""
        event.target.pokemon2.value = ""
        document.getElementById("result").remove()
        let newPokemon = document.createElement("aside")
        document.getElementById("firstPokemon").after(newPokemon)
        newPokemon.setAttribute("id", "result")
        vsButton.style.display = "block"
    }
});
let vsButton = document.createElement("button")
document.querySelector("main").append(vsButton)
vsButton.innerText = "pokemonBattle"
vsButton.setAttribute("id", "versus")
vsButton.addEventListener("click", () => {
    battle(type1, type2)
    vsButton.style.display = "none"

})

function displayMon(pokemon, location) {
    let pokemonName = document.createElement("h3")
    pokemonName.innerText = pokemon.name
    let pokemonImg = document.createElement("img")
    pokemonImg.setAttribute("src", pokemon.sprites.front_default)
    let pokemonType = document.createElement("p")
    pokemonType.innerText = pokemon.types[0].type.name
    let pokemonStat = document.createElement("ul")
    pokemon.stats.forEach((element) => {
        let li = document.createElement("li")
        li.innerText = `${element.stat.name}\t-${element.base_stat}`
        pokemonStat.append(li)
    })

    location.append(pokemonName, pokemonImg, pokemonType, pokemonStat)
}

async function battle(pokemon1, pokemon2) {
    console.log(pokemon1, pokemon2)
    const response1 = await fetch(`https://pokeapi.co/api/v2/type/${pokemon1}`)
    const data1 = await response1.json()
    const response2 = await fetch(`https://pokeapi.co/api/v2/type/${pokemon2}`)
    const data2 = await response2.json()
    console.log(data1, data2)

    let victor = document.createElement("h3")
    victor.innerText = "Advantage"
    let victorImg = document.createElement("img")
    document.getElementById("result").append(victor, victorImg)
    if (pokemon1 === pokemon2 && pokemon1 != "dragon" && pokemon1 != "ghost") {
        victor.innerText = "No Advantage" 
    }
    if (pokemon1 === "unknown"|| pokemon2 === "unknown") {
        victor.innerText = "No Data"
    }
    if (pokemon1 === "shadow"|| pokemon2 === "shadow") {
        victor.innerText = "No Data"
    }
    if (pokemon1 === "normal") {
        if (pokemon2 === "fghting") {
            victorImg.setAttribute("src", pokemon2Image)
        }
    }
    if (pokemon1 === "fire") {
        if (pokemon2 === "water" || pokemon2 === "ground" || pokemon2 === "rock") {
            victorImg.setAttribute("src", pokemon2Image)
        } else victorImg.setAttribute("src", pokemon1Image)
    }
    if (pokemon1 === "water") {
        if (pokemon2 === "electric" || pokemon2 === "grass") {
            victorImg.setAttribute("src", pokemon2Image)
        } else victorImg.setAttribute("src", pokemon1Image)
    }
    if (pokemon1 === "electric") {
        if (pokemon2 === "ground") {
            victorImg.setAttribute("src", pokemon2Image)
        } else victorImg.setAttribute("src", pokemon1Image)
    }
    if (pokemon1 === "grass") {
        if (pokemon2 === "fire" || pokemon2 === "ice" || pokemon2 === "poison" || pokemon2 === "flying" || pokemon2 === "bug") {
            victorImg.setAttribute("src", pokemon2Image)
        } else victorImg.setAttribute("src", pokemon1Image)
    }
    if (pokemon1 === "ice") {
        if (pokemon2 === "fire" || pokemon2 === "fighting" || pokemon2 === "rock" || pokemon2 === "steel") {
            victorImg.setAttribute("src", pokemon2Image)
        } else victorImg.setAttribute("src", pokemon1Image)
    }
    if (pokemon1 === "fighting") {
        if (pokemon2 === "flying" || pokemon2 === "psychic" || pokemon2 === "fairy") {
            victorImg.setAttribute("src", pokemon2Image)
        } else victorImg.setAttribute("src", pokemon1Image)
    }
    if (pokemon1 === "poison") {
        if (pokemon2 === "ground" || pokemon2 === "psychic") {
            victorImg.setAttribute("src", pokemon2Image)
        } else victorImg.setAttribute("src", pokemon1Image)
    }
    if (pokemon1 === "ground") {
        if (pokemon2 === "water" || pokemon2 === "grass" || pokemon2 === "ice") {
            victorImg.setAttribute("src", pokemon2Image)
        } else victorImg.setAttribute("src", pokemon1Image)
    }
    if (pokemon1 === "flying") {
        if (pokemon2 === "electric" || pokemon2 === "ice" || pokemon2 === "rock") {
            victorImg.setAttribute("src", pokemon2Image)
        } else victorImg.setAttribute("src", pokemon1Image)
    }
    if (pokemon1 === "psychic") {
        if (pokemon2 === "bug" || pokemon2 === "ghost" || pokemon2 === "dark") {
            victorImg.setAttribute("src", pokemon2Image)
        } else victorImg.setAttribute("src", pokemon1Image)
    }
    if (pokemon1 === "bug") {
        if (pokemon2 === "fire" || pokemon2 === "flying" || pokemon2 === "rock") {
            victorImg.setAttribute("src", pokemon2Image)
        } else victorImg.setAttribute("src", pokemon1Image)
    }
    if (pokemon1 === "rock") {
        if (pokemon2 === "water" || pokemon2 === "grass" || pokemon2 === "fighting" || pokemon2 === "ground" || pokemon2 === "steel") {
            victorImg.setAttribute("src", pokemon2Image)
        } else victorImg.setAttribute("src", pokemon1Image)
    }
    if (pokemon1 === "ghost") {
        if (pokemon2 === "ghost" || pokemon2 === "dark") {
            victorImg.setAttribute("src", pokemon2Image)
        } else victorImg.setAttribute("src", pokemon1Image)
    }
    if (pokemon1 === "dragon") {
        if (pokemon2 === "dragon" || pokemon2 === "fairy" || pokemon2 === "ice") {
            victorImg.setAttribute("src", pokemon2Image)
        } else victorImg.setAttribute("src", pokemon1Image)
    }
    if (pokemon1 === "dark") {
        if (pokemon2 === "fighting" || pokemon2 === "bug" || pokemon2 === "fairy") {
            victorImg.setAttribute("src", pokemon2Image)
        } else victorImg.setAttribute("src", pokemon1Image)
    }
    if (pokemon1 === "steel") {
        if (pokemon2 === "fire" || pokemon2 === "fighting" || pokemon2 === "ground" || pokemon2 === "poison" || pokemon2 === "bug") {
            victorImg.setAttribute("src", pokemon2Image)
        } else victorImg.setAttribute("src", pokemon1Image)
    }
    if (pokemon1 === "fairy") {
        if (pokemon2 === "poison" || pokemon2 === "steel") {
            victorImg.setAttribute("src", pokemon2Image)
        } else victorImg.setAttribute("src", pokemon1Image)
    }
}
