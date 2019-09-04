import Home from './pages/home/Home';
try {
  new Home().render();
} catch (err) {
  console.error(err);
}
import ComingSoon from './pages/coming-soon/ComingSoon';
try {
  new ComingSoon().render();
} catch (err) {
  console.error(err);
}
import ComingSoonImage from './molecules/coming-soon-image/ComingSoonImage';
try {
  new ComingSoonImage().render();
} catch (err) {
  console.error(err);
}
