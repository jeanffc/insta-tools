import Instagram from './instagram'

(async () => {
  const ig = new Instagram();
  ig.initialize({headless:false})
})()