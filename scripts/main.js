module.exports = (robot) => {
    robot.hear(/Meow!/, (res) => {
        res.send("Meow is here!!!");
    });

    robot.hear(/Meow can only say meow\?/, (res) => {
        res.send("Nope meow~");
        setTimeout(() => { res.send("Scare you!!Meow!!"); }, 5000);
    });
}