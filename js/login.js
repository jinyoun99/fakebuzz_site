
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  localStorage.setItem('fakeUser', username);
  window.location.href = 'dashboard.html';
});
