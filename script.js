const formulario = document.getElementsByClassName('Form');

addEventListener('submit', function (e){
    e.preventDefault();
    const inputWeight = e.target.getElementsByClassName('Weight')[0];
        const inputHeight = e.target.getElementsByClassName('Height')[0];
    
    const Weight = Number(inputWeight.value);
        const Height = Number(inputHeight.value);

    if(!Weight){
        setResult('Invalid Weight', false);
        return;
    }

    if(!Height){
        setResult('Invalid Height', false);
        return;
    }

    const bmi = getBmi(Weight,Height);
    const bmiLevel = getBMILevel(bmi);

    const msg = `Your BMI is equivalent to ${bmi} (${bmiLevel}).`;

    setResult(msg, true);

    console.log(bmi, bmiLevel);
})

function getBMILevel(bmi){
    const level = ['UnderWeight', 'Normal Weight', 'OverWeight',
     'Obesity Grade 1', 'Obesity Grade 2', 'Obesity Grade 3'];

        if(bmi >=39.9){
            return level[5];
        }
        if(bmi >=34.9){
            return level[4];
        }
        if(bmi >=29.9){
            return level[3];
        }
        if(bmi >=24.9){
            return level[2];
        }
        if(bmi >=18.5){
            return level[1];
        }
        if(bmi < 18.5){
            return level[0];
        }
}
function getBmi (Weight, Height){
    const bmi = Weight / Height**2;
    return bmi.toFixed(2);
}

function createP(){
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid){
    const result = document.getElementsByClassName('Final-Result')[0];
        result.innerText = '';
       
            const p = createP();

            if(isValid){
            p.classList.add('p-result');
            }else{
            p.classList.add('Incorrect');
            }
            
            p.innerHTML = msg;
                result.appendChild(p);
}




