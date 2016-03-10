$(document).ready(function(){
    
    var output = "";

    /* Calculator buttons */
    
    // only buttons are calculator buttons
    $("button").click(function(){
        // gets button text label
        var input = $(this).text();
        // if, else if chain for calculator functions
        if(input !== "AC" && input !== "CE" && input !== "Ans" && input !== "=")
            {
                output += input;
            }
        else if(input === "=")
            {
                output = eval(output);
            }
        else if(input === "CE")
            {
                output = output.slice(0,-1);
            }
        else if(input === "AC")
            {
                output = "";
            }
        else if(input === "Ans")
            {
                output = output;
            }
        $(".display").text(output);
    });  

});


