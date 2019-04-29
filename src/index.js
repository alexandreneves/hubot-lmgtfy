// Author:
// aneves
//
// Commands:
// hubot lmgtfy <text>

module.exports = function(robot) {
  robot.respond(/lmgtfy [\w\d\s]+/g, function(res) {
    res.send("http://lmgtfy.com/?q=" + encodeURIComponent(res.message.text.split("lmgtfy ")[1]));
  });
};
