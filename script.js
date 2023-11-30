const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector('#results');
    if (height < 0 || isNaN(height)) {
        results.innerHTML = `Enter valid height`;
    }
    if (weight < 0 || isNaN(weight)) {
       results.innerHTML = `Enter valid weight`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let type;
        if (bmi < 18.6) {
            type = "UnderWeight"
        }
        else if (bmi > 24.9) {
          type = "overWeight";
        }
        else {
            type = "Normal Range";
        }
        results.innerHTML = `<div>Your BMI = ${bmi} (${type})</div>`;
    }
})