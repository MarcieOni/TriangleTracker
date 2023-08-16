function calculation(event) {
    event.preventDefault();
    const form = document.querySelector("form");
    const num1 = parseInt(document.querySelector("side1").value);
    const num2 = parseInt(document.querySelector("side2").value);
    const num3 = parseInt(document.querySelector("side3").value);

    form.addEventListener("submit", function() {
        
    });

    let result;
    if (num1 === num2 && num1 === num3) {
        result; 
    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
        result;
    } else if (num1 != num2 && num1 != num3 && num2 != num3) {
        result;
    } else {

    }
}
