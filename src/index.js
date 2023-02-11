import './style.css';
import { meals } from './modules/api.js';
import { likeItem } from './modules/like.js';
import { display, addLike } from './modules/home.js';

meals().then((data) => {
  const meal = [...data.meals];
  meal.map((value, index) => {
    display(value);
    const total = document.querySelector('.total');
    const size = meal.length;
    total.innerText = size;
    const heart = document.querySelectorAll('#heart');
    const card = document.querySelectorAll('.list');
    likeItem(card);
    addLike(heart, index, value.id);
    return value;
  });
});

