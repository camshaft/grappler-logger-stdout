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
        var out = prefix + line;
        if (ns === 'progress') return process.stdout.write(out);
        console.log(out);
      });
    });
  };
};
