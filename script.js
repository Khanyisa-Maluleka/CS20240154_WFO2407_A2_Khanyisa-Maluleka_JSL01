function validateSyntax() {
    let input = document.getElementById('petInput').value;
    
    let result = ''; 

        if (input.startsWith('pet_') && /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]+$/.test(input.slice(4))) {
            result = 'Valid Syntax'
        }
        
        else {
            result = 'Invalid Syntax'
        }

            document.getElementById('result').innerText = result;
}


