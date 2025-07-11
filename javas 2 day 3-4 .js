(function(a, b) {
    const sum = a + b;
    console.log(`The sum is: ${sum}`);
})(5, 7); // Output: The sum is: 12


function calculateTax(taxRate) {
    return function(amount) {
        return amount * taxRate;
    };
}
const gst = calculateTax(0.18); 
console.log(gst(1000));

function Storage(theme, language) {
    const userPrefer = {
        theme: theme,
        language: language,
    };
    localStorage.setItem("userPrefer", JSON.stringify(userPrefer));
}

Storage('dark', 'en');

const data = localStorage.getItem("userPrefer");
console.log(data);  // Logs: {"theme":"dark","language":"en"}
