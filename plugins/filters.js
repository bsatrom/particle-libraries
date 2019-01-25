import Vue from 'vue';
import numberFormatter from 'number-formatter';

Vue.filter('formatNumber', number => {
  return numberFormatter('#,###,###.##', number);
});
