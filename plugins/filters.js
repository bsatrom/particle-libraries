import Vue from 'vue';
import numberFormatter from 'number-formatter';
import approx from 'approximate-number';

Vue.filter('formatNumber', number => {
  return numberFormatter('#,###,###.##', number);
});

Vue.filter('approximate', number => {
  return approx(number);
});
