function calculation(event) {
    event.preventDefault();
    const form = document.querySelector("form");
    const num1 = parseInt(document.getElementById("side1").value);
    const num2 = parseInt(document.getElementById("side2").value);
    const num3 = parseInt(document.getElementById("side3").value);

    form.addEventListener("submit", function() {
        window.alert(result);
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
 