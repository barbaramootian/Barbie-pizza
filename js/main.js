//Constructor
function Makeorder(flavor, crust, toppy, size, total) {
    this.flavor = flavor,
        this.crust = crust,
        this.toppy = toppy,
        this.size = size,
        this.total = 0;
}
$(document).ready(function () {
    $("#home").click(function () {
        var location = prompt("Enter your location")
        if (!location) {
            alert("Please enter your location")
        } else {
            alert("Your order will be delivered to your location.");
        }
    });
});
$(document).ready(function () {
    $("#check").click(function () {
        alert("Thanks for  making order")
    });
});
$(document).ready(function () {
    $("#form").submit(function (e) {
        e.preventDefault()
        var flavour = $("#flavor").val();
        $("#flavour").text(flavour)
        var crusty = $("#crust").val();
        $("#crusty").text(crusty)
        var topping = $("#toppy").val();
        $("#topping").text(topping)
        var sizing = $("#size").val();
        $("#sizing").text(sizing)
        if (sizing == "small") {
            var price = 500;
        } else if (sizing == "medium"){
            var prize = 1000;
        }else {
            var prizing = 1500;
        }
        var crustPrize = 300 

        var toppyPrice = 80 


    });
})

