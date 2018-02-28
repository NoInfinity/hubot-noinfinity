module.exports = (robot) => {
    robot.hear(/Meow!/, (res) => {
        res.send("Meow is here!!!");
    });

    robot.hear(/Meow can only say meow\?/, (res) => {
        res.send("Nope meow~");
        setTimeout(() => { res.send("Scare you!!Meow!!"); }, 5000);
    });

    robot.reply(/Meow say (.*)/i, (res) => {
        res.send(res.match[1] + "!");
    });

    robot.hear(/w(!|！)/i, (res) => {
        res.send("w!");
    });

    /*robot.hear(/233+/, (res) => {
        res.send("哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈！");
    });*/

    robot.hear(/ojbk/i, (res) => {
        res.send("O什么K？");
    });
}