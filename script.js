function validateSyntax() {
    let input = document.getElementById('petInput').value;
    
    let result = ''; 

        if (input.startsWith('pet_') && /^[a-zA-Z0-9_]+$/.test(input)) {
            result = 'Valid Syntax'
        }
        
        else {
            result = 'Invalid Syntax'
        }

            document.getElementById('result').innerText = result;
}


