function calculateAgeAverage(){
    const quantityPeople = parseInt(document.getElementById('input-num').value)
    console.log(quantityPeople)
    const peopleAgeList = [];

    for (let index = 0; index < quantityPeople; index++) {
        const age = parseInt(prompt(`Escriba la ${index+1}º edad`))
       
        const correctAge = age >= 0 && age <= 120
        if(correctAge){
            peopleAgeList.push(age)
        }else{
            alert('Edad fuera de rango')
        }
    }
    console.log(peopleAgeList)

    let sum = 0
    let average = 0
    peopleAgeList.forEach(function(element, index){
        sum += element     
        average = sum/(index+1)
    })
    console.log(sum, average)
    
    document.getElementById('resultMed').innerHTML = parseInt(average)
    
    return average
}
