//this is the area to style botton when is use on mobliephones
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//styling the front page image 

var image;

image=['https://scontent.ffab2-1.fna.fbcdn.net/v/t1.6435-9/89694088_2646701128946924_168690411122982912_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=tX7gQRS5DOgAX-O17Vo&tn=wEzs2Wb4xRxm9VxK&_nc_ht=scontent.ffab2-1.fna&oh=00_AT--veMG-hKXr9f-94VSjXdeMJhC21fE-AAIMseueuw14A&oe=631C7B2B', 'https://pr0.nicelocal.co.uk/IPUfnRwBHh4_Vc7zJetS6A/330x440,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2RhaQ4G0KkSZXFujGhXZBj5m2isZLSX6Q1mBkyfv__HsrR9_VnuoYsBe5Qhs__DEgA', 'https://q-xx.bstatic.com/xdata/images/hotel/max1000/228608108.jpg?k=c406df30da629364ff87e2a8c7850f6f88359cfc9b3d49e30a42a2a4dd740128', 'https://media-cdn.tripadvisor.com/media/photo-s/23/50/8a/0e/west-highland-way-hotel.jpg','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/08/0e/9d/ardoch-house-boutique.jpg?w=1200&h=-1&s=1','https://scontent.ffab2-1.fna.fbcdn.net/v/t1.6435-9/91399609_2657952731155097_638559214830092288_n.jpg?stp=dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Gfs_XjWF6yUAX8dK49R&tn=wEzs2Wb4xRxm9VxK&_nc_ht=scontent.ffab2-1.fna&oh=00_AT_IYuGFrO59goxtqtZCP8gNMR9-h3tcigNeplyVVkjCNg&oe=631C6260'];

let element_frontpage = document.getElementById('frontpage');
element_frontpage.setAttribute("src", image[0]);


document.getElementById('previous').addEventListener('click', (event) => {
  image.push(image.shift());
  let element_frontpage2 = document.getElementById('frontpage');
  element_frontpage2.setAttribute("src", image[0]);

});

document.getElementById('next').addEventListener('click', (event) => {
  image.unshift(image.pop());
  let element_frontpage3 = document.getElementById('frontpage');
  element_frontpage3.setAttribute("src", image.slice(-1)[0]);

});


//services

//property services
document.getElementById('btn-pro-ser').addEventListener('click', (event) => {
  let element_list = document.getElementById('list1');
  //adding the first item
  let new_li = document.createElement('li');
  new_li.innerText = 'free parking';

  element_list.appendChild(new_li);
  //adding second item
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'bed and breakfast';

  element_list.appendChild(new_li2);
  //adding third item
  
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'Pets Allowed';

  element_list.appendChild(new_li3);
  
    let new_li4 = document.createElement('li');
  new_li4.innerText = 'Free High Speed Internet(Wi-Fi)';

  element_list.appendChild(new_li4);
  
    let new_li5 = document.createElement('li');
  new_li5.innerText = 'BBQ facilities';

  element_list.appendChild(new_li5);
  
  
});

// room services
document.getElementById('btn-room').addEventListener('click', (event) => {
  let element_list = document.getElementById('list2');
  //adding the first item
  let new_li = document.createElement('li');
  new_li.innerText = 'Bath / Shower';

  element_list.appendChild(new_li);
  //adding second item
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'Extra Long Beds';

  element_list.appendChild(new_li2);
  //adding third item
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'camping Site';

  element_list.appendChild(new_li3);
  
  let new_li4 = document.createElement('li');
  new_li4.innerText = 'Cable/ satellite TV';

  element_list.appendChild(new_li4);
});
//room types

document.getElementById('btn-room-t').addEventListener('click', (event) => {
  let new_img = document.createElement('img');
  new_img.setAttribute("src", 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/1f/b9/2b/ardoch-house-boutique.jpg?w=700&h=-1&s=1');

  event.target.appendChild(new_img);
  let new_img2 = document.createElement('img');
  new_img2.setAttribute("src", 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/1f/bc/74/ardoch-house-boutique.jpg?w=700&h=-1&s=1');

  event.target.appendChild(new_img2);
  
  event.target.appendChild(new_img);
  let new_img3 = document.createElement('img');
  new_img3.setAttribute("src", 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/1f/b7/16/ardoch-house-boutique.jpg?w=700&h=-1&s=1');
  
  event.target.appendChild(new_img3);
    

});














