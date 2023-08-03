var rand = Math.floor(Math.random() * 100);
var limit = parseInt(1);
console.log(rand);
document.getElementById("btn").addEventListener("click", func);
function func() {
    var data = document.getElementById("in").value; if (data == "") {
        alert("Enter some number");
    }
    else {
        if (limit <= 10) {
            if (rand == data) {
                document.getElementById("life").innerHTML = "";
                document.getElementById("res").innerHTML = "You won";
                limit = 12;
            } else {
                if (rand > parseInt(data)) {
                    document.getElementById("life").innerHTML = "oops! your guess low! you have " + (11 - limit) + " life remaining ";
                    limit++;
                }
                else {
                    document.getElementById("life").innerHTML = "oops! your guess high! you have " + (11 - limit) + " life remaining ";
                    limit++;
                }
            }
        }

        else {
            limit = parseInt(0);
            window.location.href = "next.html";
        }


    }
}
