var appRouter = function(app){
    app.get("/status", function (req, res) {
        console.log("someone hit ye ole status");
        if(req.query.text){
            roll = new roll();
            var newChar = newCharRoller();
            //console.log(rpsbot);
            //var sendbacktext = "You chose " + req.query.text + ", RPS Bot chose " + rpsbot;
            var sendbacktext = newChar;
            return res.send({"text": sendbacktext});
        }
    });
    app.get("/", function(req, res){
        //console.log("someone hit ye ole default");
        roll = new roll();
            var newChar = newCharRoller();
            //console.log(rpsbot);
            //var sendbacktext = "You chose " + req.query.text + ", RPS Bot chose " + rpsbot;
            var sendbacktext = newChar;
            return res.send({"text": sendbacktext});
        return res.send("Hello Meow!");
    });

}

var rps = [
    'rock',
    'paper',
	'scissors'
];

function newCharRoller () {
    
    var newCharRolls = [];
    var output = roll.roll('4d6b3');

    for(i=0; i<6; i++){
        var rollNum = i+1
        var CharRoll = roll.roll('4d6b3')
        newCharRolls.push("Roll #" + rollNum + ": " + CharRoll.calculations[0] + " (Rolled " + CharRoll.rolled + ").");
    }
    
    return(newCharRolls);
    
}

module.exports = appRouter;