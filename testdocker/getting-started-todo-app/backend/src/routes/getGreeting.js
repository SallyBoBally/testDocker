const GREETINGS = [
    "Hello!",
    "Hi!",
    "Hey!",
    "Hola!",
];
module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[ Math.floor( Math.random() * GREETINGS.length )],
    });
};