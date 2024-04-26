const eyeColor = "green";
const colors = ["blue","green","red"];
colors.forEach (function (color){
    alert(color);
    if (color === eyeColor){
        alert(color + "your color")
    }
});
