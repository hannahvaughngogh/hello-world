function myFunction() {
  var element = document.getElementById('button-paragraph');
  var content = element.textContent;
  if (content == "Hello") {
    element.textContent = "Goodbye";
  } else {
    element.textContent = "Hello";
  }
}

function pictureAppear() {
  var image = document.getElementById('katie');
  var button = document.getElementById('disappear');
  if (image.style.display == 'none') {
    button.innerText = 'Disappear';
    image.style.display = 'block';
  } else {
    button.innerText = 'Appear';
    image.style.display = 'none';
  }
}
