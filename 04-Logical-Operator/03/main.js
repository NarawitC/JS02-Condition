let user = prompt('Enter user');

if (user === '' || user === null) {
  user = 'guest';
} else if (user === 'codecamp') {
  if (prompt('Enter password') === '123456') {
    user = 'codecamp';
  } else {
    user = 'guest';
    alert('Wrong password');
  }
} else {
  user = 'guest';
}
alert(user);
