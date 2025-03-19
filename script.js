
if ("localStorage" in window) {

    let voorlettersInput = document.querySelector('input[name="voorletters"]')
    console.log(voorlettersInput)

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
    console.log(achternaamInput)

    achternaamInput.addEventListener('input', function() {
        // Sla dat wat ik nu heb ingetypt op in local storage
        localStorage['achternaam'] = achternaamInput.value
    })

    // Zet de value van het voorletters input ding op wat nu in localstorage zit..
    achternaamInput.value = localStorage['achternaam']
}


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
