import Home from './pages/home/Home';
try {
  new Home().render();
} catch (err) {
  console.error(err);
}
