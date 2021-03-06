import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    this.store.findAll('todo').then((data)=> {
      if (data.get('length') == 0) {
        this.store.createRecord('todo',{title: 'get milk',isComplete: false, isEdit: false}).save();
        this.store.createRecord('todo',{title: 'pick up clothes',isComplete: false, isEdit: false}).save();
        this.store.createRecord('todo',{title: 'be amazing',isComplete: false, isEdit: false}).save();
      }
    })
  },
  model(){
    return this.store.findAll('todo');
  }
});
