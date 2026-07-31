$(function () {
  let currentLength = 0;
  let currentText = "";

  $("#thougts").on("input", function () {
    currentLength = $(this).val().length;
    currentText = $(this).val();

    currentLength > 140
      ? $("#total-char").addClass("invalid")
      : $("#total-char").removeClass("invalid").addClass("valid");

    $("#total-char").text(currentLength);
  });

  $("#enterButton").on("click", function () {
    if (currentLength > 140 || currentLength === 0) {
      $("#errorMessage").show();
    } else {
      $("#okMessage").show();
      $("#okMessage p:last").after("<p>" + currentText + "</p>");
      $("#okMessage p").next().addClass("text-color font-cursive");
    }
  });

  $(document).on("click", function (event) {
    //not close to button
    if (!$(event.target).closest("#enterButton").length) {
      clear();
    }
  });

  function clear() {
    if ($("#errorMessage").show().length > 0) {
      $("#errorMessage").hide();
    }

    if ($("#okMessage").show().length > 0) {
      $("#okMessage").hide();
      $("#okMessage p").nextAll().remove(); //remove all siblings of 'Here is what you told me'
    }
  }
});
