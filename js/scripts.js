//Back-end logic
function List(task) {
  this.task = task
};
List.prototype.addTask = function() {
  return this.task;
};
// List.prototype.removeTask = function() {
//   this.task.click(function() {
//     $(this.task).hide();
//   });
// };
var listArray = [];

//Front-end logic
$(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var inputtedTask = $("#task-list").val();

    var newList = new List(inputtedTask);

    $("ul#lists").append("<li><span class='list'>" + newList.addTask() + "</span></li>")
    listArray.push(newList.addTask());

  });
  $("#formTwo").submit(function() {
    event.preventDefault();
    for (i = 0; i < listArray.length; i++) {

      $("#formThree").append("<li class=muhFace><input type=checkbox name=something value=somethingElse>" + listArray[i] + "</li>");
    }

    $("#formThree").submit(function() {
      event.preventDefault();
      $("input:checkbox[name=something]:checked").each(function() {

        $('.muhFace').has('input:checked').remove();
      });
    }

  );
});
});
