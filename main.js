const maleFirstNames = ["Delorin","Weston","Grul","Oregar","Loremar","Garrick","Braeden","Krahl","Raygar","Barret","Aremore","Fyn","Lothek","Vosh","Agramar","Daveth","Tyrael"]

const femaleFirstNames = ["Teralyn","Krella","Xenith","Raelia","Korina","Ellen","Vella", "Lidia","Varesa","Eliza","Marcelin","Jesia","Tessa","Aralyn","Jayna",]

const lastNames = ["Vangrave","Moonshadow","Arrin","Farplain","Theolus","Grenn","Rainsong","Hathbrok","Graves","Doregan","Fen","Embermoore"]

const firstNameElement = document.getElementById("character-first-name")
const lastNameElement = document.getElementById("character-last-name")

function getRandomArrayItem(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// for male first name
function SetMaleValue()
{
  const name = getRandomArrayItem(maleFirstNames)
  firstNameElement.innerText = name
}

//for female first name
function SetFemaleValue()
{
    const name = getRandomArrayItem(femaleFirstNames)
    firstNameElement.innerText = name
}

// for last name//
function SetLastValue()
{
    const name = getRandomArrayItem(lastNames)
    lastNameElement.innerText = name
}