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

// function targetListen() {
//   var targetLink = document.getElementById('target-link');
//   targetLink.addEventListener('click', (clickedElement)=> {
//     var x = targetLink.getAttribute("href");
//     console.log(x);
//     var target = document.querySelector(x);
//     var scrollSettings = {
//       behavior: 'smooth',
//       block: 'start',
//     };
//     target.scrollIntoView(scrollSettings);
//     clickedElement.preventDefault();
//   });
// }
// // document.onLoad = targetListen;
// window.onload = targetListen;

function colorButton() {
  var c = document.getElementById('color');
  var color = c.value;
  var textContent = document.getElementById('content');
  // console.log(textContent.innerHTML);
  if (color === "blue") {
    textContent.innerHTML = "Roses are red, water is blue, rain is icky, but you are not.";
  }
  if (color === "red") {
    textContent.innerHTML = "Valentine's Day? Schmalentine's Day...";
  }
  if (color === "yellow") {
    textContent.innerHTML = "Your future is so bright you need shades!";
  }
  if (color === "mocha-tan") {
    textContent.innerHTML = "Not your average pickup line: 'Your skin reminds me of mocha...wanna grab coffee?'";
  }
}

function dateLocation() {
  var l = document.getElementById('dates');
  var locationString = l.value;
  var textContent = document.getElementById('location-content');
  textContent.innerHTML = "My thoughts?";
  var locations = locationString.split(" ");
  var ul = document.createElement('ul');
  for (let i = 0; i < locations.length; i++) {
    var li = document.createElement('li');
    // console.log(locations[i]);
    switch (locations[i]) {
      case 'movies':
        li.innerHTML = "Let's go to the movies!";
        break;
      case 'dinner':
        li.innerHTML = "Let's grab dinner!";
        break;
      case 'coffee':
        li.innerHTML = "Coffee sounds perfect!";
        break;
      case 'bowling':
        li.innerHTML = "I love bowling!";
        break;
      default:
        li.innerHTML = `You can't afford ${locations[i]}. Select another option.`;
        li.style.color = 'red';
        break;
    }
    ul.appendChild(li);
  }
  textContent.appendChild(ul);
}

var myData = {
  head: {
    title: "My Title"
  },
  body: {
    p: "my paragaph"
  }
}
