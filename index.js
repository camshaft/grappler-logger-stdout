/**
 * Create a stdout logger
 *
 * @param {Object} config
 * @return {Server}
 */

module.exports = function(config) {
  return function(app) {
    app.logger(function(ns, level, str, task) {
      var prefix = ns + ':' + level + ' [' + task.repo + '#' + task.branch + ']';
      str.split("\n").forEach(function(line) {
        process.stdout.write(prefix + line);
      });
    });
  };
};
