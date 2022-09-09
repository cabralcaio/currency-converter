const btn = document.querySelector("#send");
const btnInvert = document.querySelector("#invert");

btn.addEventListener("click", function(e) {
    e.preventDefault();
    
    let valor = parseInt(document.querySelector("#valor").value);
    const estate1 = document.querySelector("#estate1").value;
    const estate2 = document.querySelector("#estate2").value;
    const BASE_URL = `https://free.currconv.com/api/v7/convert?q=${estate1}_${estate2}&compact=ultra&apiKey=2df8c70666762f6b85c2`
    
    if (valor > 0) {
        
        document.getElementById("p1").innerHTML = "Loading...";

        const thenConverter = () => {
            fetch(BASE_URL)
                .then(response =>  response.json())
                .then(resultado => {
                    const resultado1 = resultado[`${estate1}_${estate2}`] * valor
                    document.getElementById("p1").innerHTML = `${valor} ${estate1} = ${resultado1} ${estate2}`
                })
        }
        thenConverter();
    } else {
        document.getElementById("p1").innerHTML = `Set a correct value in the field "amount"`;
    }
});

btnInvert.addEventListener("click", function(e) {
    e.preventDefault();
    auxEstate1 = document.getElementById("estate1").value;
    auxEstate2 = document.getElementById("estate2").value;
    document.getElementById("estate1").value = auxEstate2;
    document.getElementById("estate2").value = auxEstate1;
})

// https://free.currconv.com/api/v7/convert?q=${currency}_${currency2}&compact=ultra&apiKey=2df8c70666762f6b85c2