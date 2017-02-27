//Back-end logic
function List(task) {
  this.task = task
};
List.prototype.addTask = function() {
  return this.task;
};
var listArray = [];

//Front-end logic
$(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var inputtedTask = $("#task-list").val();

    var newList = new List(inputtedTask);

    $("ul#lists").append("<li><span class='list'>" + newList.addTask() + "</span></li>")
    listArray.push(newList.addTask());
    //   $(".list").last().click(function() {
    //     $("#show-list ul").append(newList.text);
    // });
  });
  $("#formTwo").submit(function() {
    event.preventDefault();
    for (i = 0; i < listArray.length; i++)
    {
      $("ul#show-list").append("<li class='hideMe'>" + listArray[i] + " " + "</li>");
    }

    $(".hideMe").click(function() {
        $(".hideMe").hide();

      });


  });

});
