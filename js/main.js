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
        prompt("Enter your location")
        alert("Your order will be delivered to your location.");
    });
});
$(document).ready(function () {
    $("#make-order").click(function (e) {
        var flavor = $("#flavor Option:selected").val();
        var crust = $("#crust Option:selected").val();
        var size = $("#size Option:selected").val();
        var toppy = $("#toppy Option:selected").val();
    });
})
