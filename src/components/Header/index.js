'use strict';

import './styles.scss';

import EventManagerMixin from 'mixins/EventManagerMixin';
import NavComponent from 'components/Nav';

export default Vue.extend({

  mixins: [ EventManagerMixin ],

  template: require( './template.html' ),

  emitterEvents: [],

  domEvents: [],

  data() {

    return {
      _hidden: null
    };
  },

  ready() {},

  methods: {
    openmenu() {
    }
  },

  transitions: {},

  components: {
    'pagenav': NavComponent
  }

});
