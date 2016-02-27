var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;botRegexYub = /^\/yubnub/
      botRegexAd=/^\/advance/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/;
      botRegexTeam = /^\/teams/;botRegexSt = /^\/standings/;botRegexFm = /^\/forum/;botRegexStt = /^\/stats team/;botRegexStp = /^\/stats player/;botRegexStr = /^\/stats rookies/;
      botRegexRule = /^\/rules/;botRegexSch = /^\/schedule/;
      botRegexByee = /^\@byeweek/;botRegexByye = /^\@bye/;botRegexBye = /^\@bye week/;botRegexGoat = /^\/goat/;botYee = /(.*yeezus)/i;
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/som/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexYub.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.quickmeme.com/img/9f/9f3720469d1ce6c2d20130ed0750935a394df80ffcddec6d16e091d95efea854.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/som/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/som/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.reddit.com/r/maddenall32");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1kJqQWCq3RKiTrd4f71FFNKr-Y0ppJzjk0fSF0rP6Bto/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  
  
  }
  else if(request.text && botRegexTeam.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/som/coaches");
    this.res.end();
  } 
  else if(request.text && botRegexSt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/som/standings/conference");
    this.res.end();
  }
  else if(request.text && botRegexFm.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/som/forum");
    this.res.end();
  } 
  else if(request.text && botRegexStt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/som/stats/team");
    this.res.end();
  } 
  else if(request.text && botRegexStp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/som/stats/player");
    this.res.end();
  } 
  else if(request.text && botRegexStr.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/som/stats/rookie");
    this.res.end();
  } 
  else if(request.text && botRegexRule.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/som/rules");
    this.res.end();
  } 
  else if(request.text && botRegexSch.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/som/schedules");
    this.res.end();
  }
    else if(request.text && botRegexBye.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/w0CPP48tkM6Ag/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexByee.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/8ObL3pmo0BkIM/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexByye.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/JEJYvwfHmBlgQ/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexGoat.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/OqNBIjnudq2D6/giphy.gif");
    this.res.end();
  }
  else if(request.text && botYee.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/fpXxIjftmkk9y/giphy.gif");
    this.res.end();
  }

  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
