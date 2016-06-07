/*

{WIP}
//when the bot receives a message
bot.on("message", function (msg) {
    //if message begins with "?info"
    if (msg.content.indexOf("?info") === 0) {
        //send a message to the channel the message was sent in.
        bot.sendMessage(msg.channel, "DeerBot v0.1.2 by InfinityDeer (@infinitydeer #1401) - Source:  - Official Chat: https://discord.gg/0w6AYrrMIUe8siw6 ");

        //alert the console
        console.log("" + msg.author.username);
    }
});

{bot token}
bot.loginWithToken(AuthDetails.token);

    //when the bot receives a message
bot.on("message", function (msg) {
    //if message begins with ""
    if (msg.content.indexOf("") === 0) {
        //send a message to the channel the message was sent in.
        bot.sendMessage(msg.channel, "");

        //alert the console
        console.log("" + msg.author.username);
    }
});

bot.on('userTypingStarted', function (user, channel) {
    bot.sendMessage(channel, user.mention() + ' is typing...');
});

bot.on('userTypingStopped', function (user, channel) {
    bot.sendMessage(channel, user.mention() + ' stopped typing');
});
*/

var Discord = require('discord.js')

// Get the email and password
var AuthDetails = require("./auth.json");

var bot = new Discord.Client();

//when the bot is ready
bot.on("ready", function () {
	console.log("Ready to begin! Serving in " + bot.channels.length + " channels");
});

//when the bot disconnects
bot.on("disconnected", function () {
	//alert the console
	console.log("Disconnected!");

	//exit node.js with an error
	process.exit(1);
});

//when the bot receives a message
bot.on("message", function (msg) {
	//if message begins with "?help"
    if (msg.content.indexOf("?help") === 0) {
		//send a message to the channel the ping message was sent in.
        bot.sendMessage(msg.channel, " Commands: ?help - ?replies - ?version - ?updates");
	
		//alert the console
		console.log("Helped" + msg.author.username);
	}
});

//when the bot receives a message
bot.on("message", function (msg) {
    //if message begins with "?replies"
    if (msg.content.indexOf("?replies") === 0) {
        //send a message to the channel the ping message was sent in.
        bot.sendMessage(msg.channel, msg.author.mention() + "- heck - ayy - kys -");

        //alert the console
        console.log("Showed Replies to " + msg.author.username);
    }
});

//when the bot receives a message
bot.on("message", function (msg) {
    //if message begins with "heck"
    if (msg.content.indexOf("heck") === 0) {
        //send a message to the channel the message was sent in.
        bot.sendMessage(msg.channel, "Heck.");

        //alert the console
        console.log("replied to " + msg.author.username);
    }
});

//when the bot receives a message
bot.on("message", function (msg) {
    //if message begins with "kys"
    if (msg.content.indexOf("kys") === 0) {
        //send a message to the channel the message was sent in.
        bot.sendMessage(msg.channel, "no u");

        //alert the console
        console.log("replied to " + msg.author.username);
    }
});

//when the bot receives a message
bot.on("message", function (msg) {
    //if message begins with "ayy"
    if (msg.content.indexOf("ayy") === 0) {
        //send a message to the channel the message was sent in.
        bot.sendMessage(msg.channel, "lmao");

        //alert the console
        console.log("replied to " + msg.author.username);
    }
});

//when the bot receives a message
bot.on("message", function (msg) {
    //if message begins with "?Version"
    if (msg.content.indexOf("?version") === 0) {
        //send a message to the channel the message was sent in.
        bot.sendMessage(msg.channel, "V 0.1.7");

        //alert the console
        console.log("updated(1) " + msg.author.username);
    }
});

//when the bot receives a message
bot.on("message", function (msg) {
    //if message begins with "?updates"
    if (msg.content.indexOf("?updates") === 0) {
        //send a message to the channel the message was sent in.
        bot.sendMessage(msg.channel, "-added @user is typing...  -added @user stopped typing");

        //alert the console
        console.log("updated(2) " + msg.author.username);
    }
});

//when the bot receives a message
bot.on("message", function (msg) {
    //if message begins with "/lenny"
    if (msg.content.indexOf("/lenny") === 0) {
        //send a message to the channel the message was sent in.
        bot.sendMessage(msg.channel, " ( ͡° ͜ʖ ͡°)");

        //alert the console
        console.log("lenny faced " + msg.author.username);
    }
});

//when the bot receives a message
bot.on("message", function (msg) {
    //if message begins with "/lenney"
    if (msg.content.indexOf("/lenney") === 0) {
        //send a message to the channel the message was sent in.
        bot.sendMessage(msg.channel, " ```( ͡° ͜ʖ ͡°)```");

        //alert the console
        console.log("lenneyed " + msg.author.username);
    }
});

bot.on('userTypingStarted', function (user, channel) {
    bot.sendMessage(channel, user.mention() + ' is typing...');
});

bot.on('userTypingStopped', function (user, channel) {
    bot.sendMessage(channel, user.mention() + ' stopped typing');
});

//when the bot receives a message
bot.on("message", function (msg) {
    //if message begins with "?"
    if (msg.content.indexOf("") === 0) {
        //send a message to the channel the message was sent in.
        bot.sendMessage(msg.channel, "");

        //alert the console
        console.log("" + msg.author.username);
    }
});

bot.loginWithToken(AuthDetails.token);