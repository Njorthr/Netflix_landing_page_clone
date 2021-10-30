const plus_1 = document.querySelectorAll(".plus")[0];
const plus_2= document.querySelectorAll(".plus")[1];
const plus_3= document.querySelectorAll(".plus")[2];
const plus_4= document.querySelectorAll(".plus")[3];
const plus_5= document.querySelectorAll(".plus")[4];
const plus_6= document.querySelectorAll(".plus")[5];
const item_1 = document.querySelectorAll(".faq_list_item")[0];
const item_2 = document.querySelectorAll(".faq_list_item")[1];
const item_3 = document.querySelectorAll(".faq_list_item")[2];
const item_4 = document.querySelectorAll(".faq_list_item")[3];
const item_5 = document.querySelectorAll(".faq_list_item")[4];
const item_6 = document.querySelectorAll(".faq_list_item")[5];
function classToggler_1() {
  item_1.classList.toggle('faq_item_open');
  item_2.classList.remove('faq_item_open');
  item_3.classList.remove('faq_item_open');
  item_4.classList.remove('faq_item_open');
  item_5.classList.remove('faq_item_open');
  item_6.classList.remove('faq_item_open');
  plus_1.classList.toggle('cross');
  plus_2.classList.remove('cross');
  plus_3.classList.remove('cross');
  plus_4.classList.remove('cross');
  plus_5.classList.remove('cross');
  plus_6.classList.remove('cross');
  document.querySelectorAll(".faq_text")[0].classList.toggle('open_text');
  document.querySelectorAll(".faq_text")[3].classList.remove('open_text');
  document.querySelectorAll(".faq_text")[7].classList.remove('open_text');
}
function classToggler_2() {
  item_1.classList.remove('faq_item_open');
  item_2.classList.toggle('faq_item_open');
  item_3.classList.remove('faq_item_open');
  item_4.classList.remove('faq_item_open');
  item_5.classList.remove('faq_item_open');
  item_6.classList.remove('faq_item_open');
  plus_1.classList.remove('cross');
  plus_2.classList.toggle('cross');
  plus_3.classList.remove('cross');
  plus_4.classList.remove('cross');
  plus_5.classList.remove('cross');
  plus_6.classList.remove('cross');
  document.querySelectorAll(".faq_text")[0].classList.remove('open_text');
  document.querySelectorAll(".faq_text")[3].classList.remove('open_text');
  document.querySelectorAll(".faq_text")[7].classList.remove('open_text');
}
function classToggler_3() {
  item_1.classList.remove('faq_item_open');
  item_2.classList.remove('faq_item_open');
  item_3.classList.toggle('faq_item_open');
  item_4.classList.remove('faq_item_open');
  item_5.classList.remove('faq_item_open');
  item_6.classList.remove('faq_item_open');
  plus_1.classList.remove('cross');
  plus_2.classList.remove('cross');
  plus_3.classList.toggle('cross');
  plus_4.classList.remove('cross');
  plus_5.classList.remove('cross');
  plus_6.classList.remove('cross');
  document.querySelectorAll(".faq_text")[0].classList.remove('open_text');
  document.querySelectorAll(".faq_text")[3].classList.toggle('open_text');
  document.querySelectorAll(".faq_text")[7].classList.remove('open_text');
}
function classToggler_4() {
  item_1.classList.remove('faq_item_open');
  item_2.classList.remove('faq_item_open');
  item_3.classList.remove('faq_item_open');
  item_4.classList.toggle('faq_item_open');
  item_5.classList.remove('faq_item_open');
  item_6.classList.remove('faq_item_open');
  plus_1.classList.remove('cross');
  plus_2.classList.remove('cross');
  plus_3.classList.remove('cross');
  plus_4.classList.toggle('cross');
  plus_5.classList.remove('cross');
  plus_6.classList.remove('cross');
  document.querySelectorAll(".faq_text")[0].classList.remove('open_text');
  document.querySelectorAll(".faq_text")[3].classList.remove('open_text');
  document.querySelectorAll(".faq_text")[7].classList.remove('open_text');
}
function classToggler_5() {
  item_1.classList.remove('faq_item_open');
  item_2.classList.remove('faq_item_open');
  item_3.classList.remove('faq_item_open');
  item_4.classList.remove('faq_item_open');
  item_5.classList.toggle('faq_item_open');
  item_6.classList.remove('faq_item_open');
  plus_1.classList.remove('cross');
  plus_2.classList.remove('cross');
  plus_3.classList.remove('cross');
  plus_4.classList.remove('cross');
  plus_5.classList.toggle('cross');
  plus_6.classList.remove('cross');
  document.querySelectorAll(".faq_text")[0].classList.remove('open_text');
  document.querySelectorAll(".faq_text")[3].classList.remove('open_text');
  document.querySelectorAll(".faq_text")[7].classList.remove('open_text');
}
function classToggler_6() {
  item_1.classList.remove('faq_item_open');
  item_2.classList.remove('faq_item_open');
  item_3.classList.remove('faq_item_open');
  item_4.classList.remove('faq_item_open');
  item_5.classList.remove('faq_item_open');
  item_6.classList.toggle('faq_item_open');
  plus_1.classList.remove('cross');
  plus_2.classList.remove('cross');
  plus_3.classList.remove('cross');
  plus_4.classList.remove('cross');
  plus_5.classList.remove('cross');
  plus_6.classList.toggle('cross');
  document.querySelectorAll(".faq_text")[0].classList.remove('open_text');
  document.querySelectorAll(".faq_text")[3].classList.remove('open_text');
  document.querySelectorAll(".faq_text")[7].classList.toggle('open_text');
}