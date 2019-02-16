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
  var image1 = document.getElementById('katie');
  var image2 = document.getElementById('evan');
  var button = document.getElementById('disappear');
  if (image1.style.display == 'none') {
    button.innerText = 'Disappear';
    image1.style.display = 'block';
    image2.style.display = 'none';
  } else {
    button.innerText = 'Appear';
    image1.style.display = 'none';
    image2.style.display = 'block';
  }
}
function navBarFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
