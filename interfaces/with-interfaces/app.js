/*@flow*/

var users = [
  { name: 'John', designation: 'developer' },
  { name: 'Doe', designation: 'designer' }
];

function getDeveloper() {
  return _.findWhere(users, {designation: 'developer'});
}
