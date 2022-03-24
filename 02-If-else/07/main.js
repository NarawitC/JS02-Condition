let username = prompt('Enter username');
if (username === '') {
  alert('username is required');
} else {
  let password = prompt('Enter password');
  if (password === '') {
    alert('password is required');
  } else {
    if ((username === 'admin' && password === '1234') || (username === 'john' && password === 'qwerty')) {
      alert(`Hello ${username}`);
    } else {
      alert('invalid username or password');
    }
  }
}
