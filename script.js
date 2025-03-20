
// LOCAL STORAGE

if ("localStorage" in window) {

    let voorlettersInput = document.querySelector('input[name="voorletters"]')
    // console.log(voorlettersInput)

    voorlettersInput.addEventListener('input', function() {
        // Sla dat wat ik nu heb ingetypt op in local storage
        localStorage['voorletters'] = voorlettersInput.value
    })

    // Zet de value van het voorletters input ding op wat nu in localstorage zit..
    voorlettersInput.value = localStorage['voorletters']
}

// de if (localStorage in window) zorgt ervoor dat de code niks anders eronder blokkeerd als de browser
// het niet ondersteund. het is dus hetzelfde als @support in css maar dan voor javascript.

if ("localStorage" in window) {

    let achternaamInput = document.querySelector('input[name="achternaam"]')
    // console.log(achternaamInput)

    achternaamInput.addEventListener('input', function() {
        // Sla dat wat ik nu heb ingetypt op in local storage
        localStorage['achternaam'] = achternaamInput.value
    })

    // Zet de value van het voorletters input ding op wat nu in localstorage zit..
    achternaamInput.value = localStorage['achternaam']
}

// nog een keer geprobeerd voor de bsn input


if ("localStorage" in window) {

  let bsnInput = document.querySelector('input[name="bsn"]')
  // console.log(bsnInput)

  bsnInput.addEventListener('input', function() {
      localStorage['bsn'] = bsnInput.value
  })

  bsnInput.value = localStorage['bsn']
}

// proberen met radiobuttons

// if ("localStorage" in window) {

//   let radioPartnerInput = document.querySelectorAll('input[name=partner]')
//   // console.log(radioPartnerInput)

//   radioPartnerInput.addEventListener('input', function(){
//     localStorage['partners'] = radioPartnerInput.value
//   })

//   radioPartnerInput.value = localStorage['partners']


// }

// ik probeerde alle radiobuttons aan te spreken door querySelectorAll te gebruiken anders selecteerde hij alleen de eerste en radio
// buttons werken samen, ik moest alleen allemaal dingen gebruiken die ik niet helemaal begreep om ze allebij te laten opslaan dus daar wil
// ik in de toekomst nog naar kijken.




// functie van krijn voor bsn dingetje, ik snap het een beetje.
// ik heb de value aan gepast naar value.length met 9 cijfers zodat je elk bsn van 9 cijfers kan intypen.

let i = document.querySelector('input[data-custom-bsn]')

let validate = function() {
  if (i.value.length == 9) {
    i.setCustomValidity('')
  } else {
    i.setCustomValidity('Wel een bsn invullen')
  }
}
  
i.addEventListener('input', function() {
  validate()
})


validate()

// zelfde code maar dan voor protocol nummer van 4 cijfers
// ik wou het nog een keer doen zodat ik het meer begreep.

let j = document.querySelector('input[data-protocolnmr]')

let validates = function() {
  if (j.value.length == 4) {
    j.setCustomValidity('')
  } else {
    j.setCustomValidity('Wel een protocolnummer invullen')
  }
}
  
j.addEventListener('input', function() {
  validates()
})


validates()