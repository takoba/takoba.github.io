module.exports = {
  target: (dependencyName) => {
    switch (dependencyName) {
      case '@types/node':
        const res = 'minor'
        console.info(`\n⚠️ WORKAROUND: ${dependencyName} is pinned to ${res}\n`)
        return res;
      default:
        return 'latest';
    }
  }
}
