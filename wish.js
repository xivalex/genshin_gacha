let __JWT_TOKEN__ = "";
let __CHANNEL_ID__ = ""
let __CHANNEL_NAME__ = ""

let volume = 100 // 0 ~ 100 value only
let sr_percentage = 5 // % on winning a 5★
let c_percentage = 60 // % on winning a 3★
let points_name = "Primogems";
let cost = 160
let five_star_prize = 2000;
let four_star_prize = 300;
let three_star_prize = 0;

// ********************************************************************************
// ******************* DO NOT MODIFY ANYTHING BEYOND THIS POINT *******************
// ********************************************************************************

let video;
let videoPools = [];
let SRPool = [];  // 5★
let RPool = [];   // 4★
let CPool = [];   // 3★
let allowed = true;
let displayName;
let userInfo = {};
let randomVid = {};

// TBD: Automate retrieve file name/path/value

const videoPath = "./videos"
SRPool.push(
  {
    path: `${videoPath}/5star_albedo.mp4`,
    value: five_star_prize,
    name: "★★★★★ Albedo"
  },
  {
    path: `${videoPath}/5star_ayato.mp4`,
    value: five_star_prize,
    name: "★★★★★ Ayato"
  },
  {
    path: `${videoPath}/5star_eula.mp4`,
    value: five_star_prize,
    name: "★★★★★ Eula"
  },
  {
    path: `${videoPath}/5star_ganyu.mp4`,
    value: five_star_prize,
    name: "★★★★★ Ganyu"
  },
  {
    path: `${videoPath}/5star_itto.mp4`,
    value: five_star_prize,
    name: "★★★★★ Itto"
  },
  {
    path: `${videoPath}/5star_keqing.mp4`,
    value: five_star_prize,
    name: "★★★★★ Keqing"
  },
  {
    path: `${videoPath}/5star_kokomi.mp4`,
    value: five_star_prize,
    name: "★★★★★ Kokomi"
  },
  {
    path: `${videoPath}/5star_raiden.mp4`,
    value: five_star_prize,
    name: "★★★★★ Raiden"
  },
  {
    path: `${videoPath}/5star_shenhe.mp4`,
    value: five_star_prize,
    name: "★★★★★ Shenhe"
  },
  {
    path: `${videoPath}/5star_venti.mp4`,
    value: five_star_prize,
    name: "★★★★★ Venti"
  },
  {
    path: `${videoPath}/5star_xiao.mp4`,
    value: five_star_prize,
    name: "★★★★★ Xiao"
  },
  {
    path: `${videoPath}/5star_yae.mp4`,
    value: five_star_prize,
    name: "★★★★★ Yae"
  },
  {
    path: `${videoPath}/5star_zhongli.mp4`,
    value: five_star_prize,
    name: "★★★★★ Zhongli"
  },
  {
    path: `${videoPath}/5star_diluc.mp4`,
    value: five_star_prize,
    name: "★★★★★ Diluc"
  },
  {
    path: `${videoPath}/5star_Jean.mp4`,
    value: five_star_prize,
    name: "★★★★★ Jean"
  },
  {
    path: `${videoPath}/5star_Mona.mp4`,
    value: five_star_prize,
    name: "★★★★★ Mona"
  },
  {
    path: `${videoPath}/5star_Qiqi.mp4`,
    value: five_star_prize,
    name: "★★★★★ Qiqi"
  },
)

RPool.push(
  {
    path: `${videoPath}/4star_bennett.mp4`,
    value: four_star_prize,
    name: "★★★★ Bennett"
  },
  {
    path: `${videoPath}/4star_dbane.mp4`,
    value: four_star_prize,
    name: "★★★★ Dragon's Bane"
  },
  {
    path: `${videoPath}/4star_diona.mp4`,
    value: four_star_prize,
    name: "★★★★ Diona"
  },
  {
    path: `${videoPath}/4star_fav_warbow.mp4`,
    value: four_star_prize,
    name: "★★★★ Favonius Warbow"
  },
  {
    path: `${videoPath}/4star_flute.mp4`,
    value: four_star_prize,
    name: "★★★★ The Flute"
  },
  {
    path: `${videoPath}/4star_lions_roar.mp4`,
    value: four_star_prize,
    name: "★★★★ Lion's Roar"
  },
  {
    path: `${videoPath}/4star_ning.mp4`,
    value: four_star_prize,
    name: "★★★★ Ningguang"
  },
  {
    path: `${videoPath}/4star_noelle.mp4`,
    value: four_star_prize,
    name: "★★★★ Noelle"
  },
  {
    path: `${videoPath}/4star_rainslasher.mp4`,
    value: four_star_prize,
    name: "★★★★ Rainslasher"
  },
  {
    path: `${videoPath}/4star_rosaria.mp4`,
    value: four_star_prize,
    name: "★★★★ Rosaria"
  },
  {
    path: `${videoPath}/4star_yunjin.mp4`,
    value: four_star_prize,
    name: "★★★★ Yunjin"
  },
  {
    path: `${videoPath}/4star_rust.mp4`,
    value: four_star_prize,
    name: "★★★★ Rust"
  },
  {
    path: `${videoPath}/4star_sac_greatsword.mp4`,
    value: four_star_prize,
    name: "★★★★ Sacrificial Greatsword"
  },
  {
    path: `${videoPath}/4star_sacrificial_sword.mp4`,
    value: four_star_prize,
    name: "★★★★ Sacrificial Sword"
  },
  {
    path: `${videoPath}/4star_stringless.mp4`,
    value: four_star_prize,
    name: "★★★★ Stringless"
  },
  {
    path: `${videoPath}/4star_the_bell.mp4`,
    value: four_star_prize,
    name: "★★★★ The Bell"
  },
  {
    path: `${videoPath}/4star_thoma.mp4`,
    value: four_star_prize,
    name: "★★★★ Thoma"
  },
  {
    path: `${videoPath}/4star_xingqiu.mp4`,
    value: four_star_prize,
    name: "★★★★ Xingqiu"
  },
  {
    path: `${videoPath}/4star_xinyan.mp4`,
    value: four_star_prize,
    name: "★★★★ Xinyan"
  },
  {
    path: `${videoPath}/4star_yanfei.mp4`,
    value: four_star_prize,
    name: "★★★★ Yanfei"
  },
)

CPool.push(
  {
    path: `${videoPath}/3star_black_tassel.mp4`,
    value: three_star_prize,
    name: "★★★ Black Tassel"
  },
  {
    path: `${videoPath}/3star_bloodstained.mp4`,
    value: three_star_prize,
    name: "★★★ Bloodtainted Greatsword"
  },
  {
    path: `${videoPath}/3star_cool_steel.mp4`,
    value: three_star_prize,
    name: "★★★ Cool Steel"
  },
  {
    path: `${videoPath}/3star_debate_club.mp4`,
    value: three_star_prize,
    name: "★★★ Debate Club"
  },
  {
    path: `${videoPath}/3star_emerald_orb.mp4`,
    value: three_star_prize,
    name: "★★★ Emerald Orb"
  },
  {
    path: `${videoPath}/3star_ferrous_shadow.mp4`,
    value: three_star_prize,
    name: "★★★ Ferrous Shadow"
  },
  {
    path: `${videoPath}/3star_hod.mp4`,
    value: three_star_prize,
    name: "★★★ Harbinger of Dawn"
  },
  {
    path: `${videoPath}/3star_magic_guide.mp4`,
    value: three_star_prize,
    name: "★★★ Magic Guide"
  },
  {
    path: `${videoPath}/3star_raven_bow.mp4`,
    value: three_star_prize,
    name: "★★★ Raven Bow"
  },
  {
    path: `${videoPath}/3star_sharpshooter.mp4`,
    value: three_star_prize,
    name: "★★★ Sharpshooter's Oath"
  },
  {
    path: `${videoPath}/3star_skyrider.mp4`,
    value: three_star_prize,
    name: "★★★ Skyrider Sword"
  },
  {
    path: `${videoPath}/3star_slingshot_temp.mp4`,
    value: three_star_prize,
    name: "★★★ Slingshot"
  },
  {
    path: `${videoPath}/3star_ttds.mp4`,
    value: three_star_prize,
    name: "★★★ Thrilling Tales of Dragon Slayers"
  },
)

function initializeVideoElement() {
  video = document.getElementById("video");

  video.onloadstart = function () {
    console.log("Video is now loaded");
  };

  video.oncanplaythrough = function () {
    console.log("Video can now play");
    video.play();
  }

  video.onended = function () {
    console.log("Video Ended")
    video.setAttribute("hidden", "hidden");

    if (randomVid.value != 0) {
      addPoints(displayName, randomVid.value)
      .then(response => response.json())
      .then(_data => {
          sendChatMessage(`Congratulations! ${displayName} just wished for [${randomVid.name}] and ${randomVid.value} ${points_name} has been added | ${points_name}: ${_data.newAmount}`);
          allowed = true;
      });
    } else {
        getUser(displayName)
        .then(response => response.json())
        .then(_data => {
            sendChatMessage(`${displayName} just wished for [${randomVid.name}] | ${points_name}: ${_data.points}`);
            allowed = true;
        });
    }
  }

}

function randomItemFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function sendChatMessage(msg) {
  fetch(`https://api.streamelements.com/kappa/v2/bot/${__CHANNEL_ID__}/say`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Bearer ${__JWT_TOKEN__}`
    },
    body: JSON.stringify({message: msg})
  });
}

function getUser(user) {
  return fetch(`https://api.streamelements.com/kappa/v2/points/${__CHANNEL_ID__}/${user}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Bearer ${__JWT_TOKEN__}`
    }
  });
}

function addPoints(user, amount) {
  return fetch(`https://api.streamelements.com/kappa/v2/points/${__CHANNEL_ID__}/${user}/${amount}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `Bearer ${__JWT_TOKEN__}`
    }
  });
}

async function showVideo() {

  await getUser(displayName)
    .then(response => response.json())
    .then(_data => { userInfo = _data; });

  if (userInfo.points < cost) {
    sendChatMessage(`${displayName} do not have enough ${points_name} to wish | ${points_name}: ${userInfo.points}`);
    allowed = true;
    return;
  }

  await addPoints(displayName, -cost);

  // Show the element
  video.removeAttribute("hidden");

  // Retrieve the source element
  let source = document.getElementById("source");

  // Randomize if SRPool/RPool/CPool and retrieve a video from the pool
  chosenPool = (Math.random() < ( sr_percentage / 100)) ? SRPool :
               ((Math.random() < ( c_percentage / 100)) ? CPool : RPool);
  randomVid = randomItemFromArray(chosenPool);

  // Set the video as the source of the element and play it
  source.setAttribute("src", randomVid.path);
  video.load();
  video.volume = volume / 100;
}

function checkQueryParameters() {

  // Retrieve the query parameters required for authentication
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  __JWT_TOKEN__ = params.jwt;
  __CHANNEL_ID__ = params.id;
  __CHANNEL_NAME__ = params.channel;

  // Set the volume of the video
  if (params.volume) {
    let vol = Number(params.volume);
    if (isNaN(vol) || !(vol >= 0 && vol <= 100)){
      console.log("value for params.volume is invalid");
    } else {
      volume = vol;
    }
  }

  // Set the percentage of 5★ against 3★ and 4★
  if (params.sr) {
    let sr = Number(params.sr);
    if (isNaN(sr) || !(sr >= 0 && sr <= 100)){
      console.log("value for params.sr is invalid");
    } else {
      sr_percentage = sr;
    }
  }

  // Set the percentage of 3★ against 4★
  if (params.c) {
    let c = Number(params.c);
    if (isNaN(c) || !(c >= 0 && c <= 100)){
      console.log("value for params.c is invalid");
    } else {
      c_percentage = c;
    }
  }

  // Set the prize of 3★
  if (params.three) {
    let three = Number(params.three);
    if (isNaN(three)){
      console.log("value for params.three is invalid");
    } else {
      // Replace the value in the current pool
      CPool.forEach(video => {
        video.value = three;
      });
    }
  }

  // Set the prize of 4★
  if (params.four) {
    let four = Number(params.four);
    if (isNaN(four)){
      console.log("value for params.four is invalid");
    } else {
      // Replace the value in the current pool
      RPool.forEach(video => {
        video.value = four;
      });
    }
  }

  // Set the prize of 5★
  if (params.five) {
    let five = Number(params.five);
    if (isNaN(five)){
      console.log("value for params.five is invalid");
    } else {
      // Replace the value in the current pool
      SRPool.forEach(video => {
        video.value = five;
      });
    }
  }

  // Set the cost of each command
  if (params.cost) {
    let amount = Number(params.cost);
    if (isNaN(amount)){
      console.log("value for params.cost is invalid");
    } else {
      cost = amount;
    }
  }

  // Set the pointsname used in the channel
  if (params.points) {
    points_name = params.points;
  }

  // Check query inputs
  console.log(`Volume is set to ${volume}`);
  console.log(`5★ percentage is set to ${sr_percentage}`);
  console.log(`3★ percentage is set to ${c_percentage}`);
  console.log(`3★ prize is ${params.three}`);
  console.log(`4★ prize is ${params.four}`);
  console.log(`5★ prize is ${params.five}`);
  console.log(`Command Cost is ${cost}`);
  console.log(`Points Name is ${points_name}`);

  // Send a message in chat to verify the settings of the browser
  if (params.check) {
    sendChatMessage(`Volume(${volume}) | 5★(${sr_percentage}) | 3★(${c_percentage}) | 5p★(${SRPool[0].value}) | 4p★(${RPool[0].value}) | 3p★(${CPool[0].value}) | Cost(${cost}) | Name(${points_name})`)
  }
}

// ***********
// ENTRY POINT
// ***********

initializeVideoElement();

// Receives text from !
ComfyJS.onCommand = ( user, command, message, flags, extra ) => {

  if (command !== "wish" || !allowed) {return};

  // Set flag to false to not allow the program to receive more commands
  allowed = false;

  // Retrieve the name of the user who executed the command
  displayName = user;

  // Play the video
  showVideo();
}

checkQueryParameters();

// Connects the script to the channel name to track commands
ComfyJS.Init( __CHANNEL_NAME__ );