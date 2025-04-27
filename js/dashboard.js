
const users = {
  einstein: 'Albert Einstein',
  cleopatra: 'Cleopatra',
  leo: 'Leonardo DiCaprio',
  curie: 'Marie Curie',
  musk: 'Elon Musk',
  shakespeare: 'William Shakespeare',
  genghis: 'Genghis Khan',
  aristotle: 'Aristotle',
  da_vinci: 'Leonardo da Vinci',
  taylor_swift: 'Taylor Swift'
};

const user = localStorage.getItem('fakeUser');
if (user && users[user]) {
  document.getElementById('userName').innerText = users[user];
} else {
  window.location.href = 'login.html';
}

const fakeNews = [
  'Einstein starts dance academy in New York!',
  'Cleopatra invests heavily in Bitcoin!',
  'Leonardo DiCaprio to star in Cleopatra Biopic!',
  'Marie Curie wins Nobel Prize in Podcasting!',
  'Elon Musk buys entire country to build giant Tesla factory!',
  'Shakespeare drops surprise rap album!',
  'Genghis Khan opens chain of fast food restaurants!',
  'Aristotle launches Philosophy Podcast!',
  'Da Vinci designs futuristic sports car!',
  'Taylor Swift releases album inspired by Ancient Rome!'
];

const newsDiv = document.getElementById('news');
fakeNews.forEach(item => {
  const p = document.createElement('p');
  p.textContent = item;
  newsDiv.appendChild(p);
});
