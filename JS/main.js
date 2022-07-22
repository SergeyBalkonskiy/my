$(document).ready(function () {
    var currentFloor = 2;
    var floorPath = $(".home-image path");
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");

    floorPath.on("mouseover", function() {
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor);
    });
    floorPath.on("click", function () {
        modal.toggleClass("is-open");
    });
    modalCloseButton.on("click", function () {
        modal.toggleClass("is-open");
    });
    viewFlatsButton.on("click", function () {
        modal.toggleClass("is-open");
    });

counterUp.on("click", function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false});
            $(".counter").text(usCurrentFloor);
        }
    });

counterDown.on("click", function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false});
            $(".counter").text(usCurrentFloor);
        }
    });
});