module.exports = (robot) => {
  robot.hear(/Meow!/, (res) => {
    res.send("Meow is here!!!");
  });

  robot.hear(/Meow can only say meow\?/, (res) => {
    res.send("Nope meow~");
    setTimeout(() => {
      res.send("Scare you!!Meow!!");
    }, 5000);
  });

  robot.hear(/Meow say (.*)/i, (res) => {
    if (/(leaferx|leafer|叶者)/i.test(res.match[1])) {
      res.reply("qwqqq");
      return;
    }
    if (Math.random() < 0.1) {
      res.reply("自己的话自己说！Meow生气了哼！");
      return;
    }
    res.reply(res.match[1] + "!");
  });

  robot.hear(/w(!|！)/i, (res) => {
    res.send("w!");
  });

  robot.hear(/233+/, (res) => {
    res.send("哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈！");
  });

  robot.hear(/ojbk/i, (res) => {
    res.send("O什么K？");
  });

  robot.hear(/i love meow/i, (res) => {
    res.reply("Meow love u too!!!!");
  });

  var dissdavyInterval = null;

  robot.hear(/meow what do you think of davy\?/i, (res) => {
    res.send("Davy sucks!!!");
    if (dissdavyInterval) {
      res.send("Davy sucks!!!");
      return;
    }
    dissdavyInterval = setInterval(() => {
      res.send("Davy sucks!!!");
    }, 1000);
  });

  robot.hear(/meow stop dissdavy/i, (res) => {
    if (dissdavyInterval) {
      clearInterval(dissdavyInterval);
      res.send("Davy sucks!!!");
      res.send("Davy sucks!!!");
      res.send("Davy sucks!!!");
      res.send("Davy sucks!!!");
      dissdavyInterval = null;
    } else {
      res.send("Allright. Davy sucks.");
    }
  });
}
