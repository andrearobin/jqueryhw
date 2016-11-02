// wait for the html to be fully loaded before running any code
$(document).ready(function() {

  // change the background color to red

        $(document).on("click", "#change-red", function() {
          $("#red-div").css("background-color", "red");
        });

  // change the background color to green

        $(document).on("click", "#change-green", function() {
            $("#green-div").css("background-color", "green");
        });

  // change the background color to blue

        $(document).on("click", "#change-blue", function() {
            $("#blue-div").css("background-color", "blue");
        });

    // make box bigger

        $(document).on("click", "#make-big", function() {
            $("#big-div").addClass("big-div");
        });

    // make box smaller

        $(document).on("click", "#make-small", function() {
            $("#small-div").addClass("small-div");
        });

    // create animation

        $(document).on("click", "#animate-div", function() {
            $("#animated-div").addClass("animate");
        });

    // show overlay

        $(document).on("click", "#create-overlay", function() {
            $(".overlay").show();
        });

    // hide overlay
        $(document).on("click", ".overlay", function() {
            $(".overlay").hide();
        });

    });
