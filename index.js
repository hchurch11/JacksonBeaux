var txt = "";
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
    txt = xmlhttp.responseText;
  }
};
xmlhttp.open("GET", "abc.txt", true);
xmlhttp.send();
//click
$("button").click(function () {
  $(this).parents(".grid_item").toggleClass("active");
  $(this).parents(".grid_item").siblings(".grid_item").removeClass("active");
});
