# Genshin Impact Wish Simulator
![GitHub](https://img.shields.io/badge/license-MIT-brightgreen)

## DISCLAIMER ##
This is not sponsored in any way by Hoyoverse and I do not gain any profit from this project.

> Integration to Twitch chat was made possible and easy-to-use by integrating [ComfyJS](https://github.com/instafluff/ComfyJS#readme) maintained by [@Instafluff](https://twitch.tv/instafluff).

## INTRODUCTION

The **[Genshin Wish Simulator]** lets the viewers simulate a genshin wish by typing the **!wish** command in chat.

[![Sample Wish](https://img.youtube.com/vi/yIYZ12OUEwk/hqdefault.jpg)](https://youtu.be/yIYZ12OUEwk)

### [xivalex](https://www.twitch.tv/xivalex) ###
> *This is my first-ever project which I have done outside of work and it is bound to have some issues.
> If you do happen to encounter an issue, you can contact me by visiting me on my twitch channel at https://twitch.tv/xivalex.* (For reference, I speak both English and (mostly) Tagalog on-stream)

> *Also, I do accept (and/or request) contributions in terms of the videos that can be used for the gacha. Unfortunately.. I cannot pull for **EVERY SINGLE CHARACTER OR WEAPON** that can be showcased in the simulator..*

## Pre-requisite ##

#### Account information linked in Streamelements
> *Current implementation makes use of StreamElements to manage the chats and/or points. I could consider adding a version or parameter so that JWT Token **will not be required** if there will be a demand for it*
1. Go to [StreamElements Dashboard](https://streamelements.com/dashboard) and click the account icon in the upper-right of the display

![AccountInfo](https://i.imgur.com/BrL7emT.png)

2. In the `CHANNELS` tab, click the `Show secrets` button to display account-specific information
> *Needless to say, information in this section is **PRIVATE** and should not be shared to anyone. The `Account ID` and `JWT Token` will be required by the program to give access to your StreamElements*

![Secrets](https://i.imgur.com/jkVz5kz.png)

## Instruction ##

1. In your preferred broardcasting software (e.g. OBS), add a browser source and use the link: https://xivalex.github.io/genshin_gacha

2. The following are the URL parameters that can be used to customize the behavior of the simulator
- [**Required**] `jwt` : Your JWT Token
- [**Required**] `id` : Your Account ID
- [**Required**] `channel` : Your Twitch channel name
- `volume` : Adjust the volume of the video (*Default: 100*)
- `sr` : Adjust the percentage on winning a 5★ against a 4★ (*Default: 5% to get a 5★*)
- `c` : Adjust the percentage on winning a 3★ against a 4★ (*Default: 60% to get a 3★*)
- `three` : Adjust the prize when user wins a 3★ (*Default: 0*)
- `four` : Adjust the prize when user wins a 4★ (*Default: 300*)
- `five` : Adjust the prize when user wins a 5★ (*Default: 2000*)
- `cost` : Adjust the cost to use the command (*Default: 160*)
- `points` : Adjust the points name used in your channel (*Default: Primogems*)
- `check` : Output the current setting of the program in your chat

```
Sample Browser Source URL

*********************************************************************
https://xivalex.github.io/genshin_gacha?jwt=<JWT Token>&id=<Account ID>&channel=xivalex&volume=50&sr=50&c=90&three=100&four=200&five=300&cost=10&points=test&check=true
*********************************************************************

By using the sample URL, it sets the program to have:
  - Volume is adjusted to 50%
  - Winning a 5★ against a 4★ has a 50% chance
  - Winning a 3★ against a 4★ has a 90% chance
  - The Prize for 3★ is 100
  - The Prize for 4★ is 200
  - The Prize for 5★ is 300
  - The Cost on using the command is only 10
  - Points name is set to "test"
  - The above settings will be displayed in chat once you refresh the browser source
```

3. Test the program by typing `!wish` in your chat. Video should load and the following is displayed in chat. If video does not load, try refreshing the browser source or re-check the parameters in the URL.

![sample_output](https://i.imgur.com/UKouEut.png)

## Features ##
### Queue ###
- Only **one wish at a time** is displayed on stream. A queue is implemented so that when multiple viewers type `!wish` in chat, they will be placed in a queue (first-in, first-out) while waiting for the current wish on-stream to finish

### Multiple Wish `(TBD)` ###
- Let the viewer do multiple wish by spending x10 of the cost amount (e.g. 1600 from the default value)
- As expected, video will display on-stream a lot longer than a single wish

### "No Gamble" system `(TBD)` ###
- If streamer does not want to make use of StreamElements and just show a wish video on-stream

## Other commands ##

### !wishqueue ###
- Displays the current queue of users who typed `!wish`. Usable only by `Streamer` and `Moderators`

### !wishconfig `(TBD)` ###
- Lets the `Streamer` or `Moderators` to modify the settings on-stream without the need to modify the URL parameters
- Changes done with this command **are not permanent**. Once browser source is refreshed, the URL parameters will take priority

## Credits ##

[@Instafluff](https://twitch.tv/instafluff) for providing and maintaining the `ComfyJS` package

---

The following are the list Genshin `Weapons` and `Characters` and its availability in the simulator
> If you want to contribute, please do inform me through my  [@Twitch](https://twitch.tv/[xivalex](https://www.twitch.tv/xivalex)) (*sorry I do not have other socials. . .*)

> For items with ***to be updated*** contibutor, you may still contribute a video for it

Name | Rarity/Availability | Contributor
--- | --- | ---
 Cool Steel | ![3★](https://img.shields.io/badge/3%E2%98%85-YES-blue) | [shawners21](https://www.twitch.tv/shawners21)
 Harbinger of Dawn | ![3★](https://img.shields.io/badge/3%E2%98%85-YES-blue) | [xivalex](https://www.twitch.tv/xivalex)
 Skyrider Sword | ![3★](https://img.shields.io/badge/3%E2%98%85-YES-blue) | [shawners21](https://www.twitch.tv/shawners21)
 Ferrous Shadow | ![3★](https://img.shields.io/badge/3%E2%98%85-YES-blue) | [xivalex](https://www.twitch.tv/xivalex)
 Bloodtainted Greatsword | ![3★](https://img.shields.io/badge/3%E2%98%85-YES-blue) | [xivalex](https://www.twitch.tv/xivalex)
 Debate Club | ![3★](https://img.shields.io/badge/3%E2%98%85-YES-blue) | [xivalex](https://www.twitch.tv/xivalex)
 Black Tassel | ![3★](https://img.shields.io/badge/3%E2%98%85-YES-blue) | [shawners21](https://www.twitch.tv/shawners21)
 Raven Bow | ![3★](https://img.shields.io/badge/3%E2%98%85-YES-blue) | [xivalex](https://www.twitch.tv/xivalex)
 Sharpshooter's Oath | ![3★](https://img.shields.io/badge/3%E2%98%85-YES-blue) | [xivalex](https://www.twitch.tv/xivalex)
 Slingshot | ![3★](https://img.shields.io/badge/3%E2%98%85-YES-blue) | [shawners21](https://www.twitch.tv/shawners21)
 Magic Guide | ![3★](https://img.shields.io/badge/3%E2%98%85-YES-blue) | [xivalex](https://www.twitch.tv/xivalex)
 Thrilling Tales of Dragon Slayers | ![3★](https://img.shields.io/badge/3%E2%98%85-YES-blue) | [xivalex](https://www.twitch.tv/xivalex)
 Emerald Orb | ![3★](https://img.shields.io/badge/3%E2%98%85-YES-blue) | [xivalex](https://www.twitch.tv/xivalex)
 Favonius Sword | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 The Flute | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Sacrificial Sword | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [shawners21](https://www.twitch.tv/shawners21)
 Lion's Roar | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [st_krusconnected](https://www.twitch.tv/st_krusconnected)
 The Alley Flash | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Favonius Greatsword | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 The Bell | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Sacrificial Greatsword | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Rainslasher | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [st_krusconnected](https://www.twitch.tv/st_krusconnected)
 Lithic Blade | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Dragon's Bane | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [st_krusconnected](https://www.twitch.tv/st_krusconnected)
 Lithic Spear | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Favonius Lance | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Wavebreaker's Fin | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Favonius Warbow | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [st_krusconnected](https://www.twitch.tv/st_krusconnected)
 The Stringless | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [st_krusconnected](https://www.twitch.tv/st_krusconnected)
 Sacrificial Bow | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Rust | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Alley Hunter | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Mitternachtz Waltz | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Mouun's Moon | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Favonius Codex | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 The Widsith | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Sacrificial Fragments | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Eye of Perception | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Wine and Song | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Lisa | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Barbara | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Kaeya | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Razor | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Amber | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Xiangling | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Beidou | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Xingqiu | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [st_krusconnected](https://www.twitch.tv/st_krusconnected)
 Ningguang | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Fischl | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Bennett | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Noelle | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [st_krusconnected](https://www.twitch.tv/st_krusconnected)
 Chongyun | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Diona | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [shawners21](https://www.twitch.tv/shawners21)
 Sucrose | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Xinyan | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Rosaria | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [st_krusconnected](https://www.twitch.tv/st_krusconnected)
 Yanfei | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [st_krusconnected](https://www.twitch.tv/st_krusconnected)
 Thoma | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Sayu | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Gorou | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Kujou Sara | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Shikonoin Heizou | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Yun jin | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Kuki Shinobu | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Aquila Favonia | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Skyward Blade | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Freedom-Sword | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Summit Shaper | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Primordial Jade Cutter | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Mistsplitter Reforged | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Haran Geppaku Futsu | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Skyward Pride | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Wolf's Gravestone | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Song of Broken Pines | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 The Unforged | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Redhorn Stonethresher | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Staff of Homa | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Skyward Spine | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Vortex Vanquisher | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Primordial Jade-winged Spear | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Calamity Queller | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Engulfing Lightning | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Skyward Harp | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Amos' Bow | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Elegy for the End | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Polar Star | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Aqua Simulacra | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Thundering Pulse | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Skyward Atlas | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Lost Prayer to the Sacred Winds | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Memory of Dust | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Everlasting Moonglow | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Kagura's Verity | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Kamisato Ayaka | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Jean | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | *no reference, to be updated*
 Diluc | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | *no reference, to be updated*
 Venti | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | *no reference, to be updated*
 Xiao | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | El (*to be updated*)
 Klee | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Zhongli | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | El (*to be updated*)
 Tartaglia | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Qiqi | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | *no reference, to be updated*
 Ganyu | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | El (*to be updated*)
 Albedo | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [st_krusconnected](https://www.twitch.tv/st_krusconnected)
 Mona | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | *no reference, to be updated*
 Keqing | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [shawners21](https://www.twitch.tv/shawners21)
 Hu Tao | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Kaedehara Kazuha | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Yoimiya | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Eula | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [xivalex](https://www.twitch.tv/xivalex)
 Raiden Shogun | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | AzureMaxYT (*to be updated*)
 Sangonomiya Kokomi | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [xivalex](https://www.twitch.tv/xivalex)
 Arataki Itto | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | *no reference, to be updated*
 Yae Miko | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [xivalex](https://www.twitch.tv/xivalex)
 Yelan | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Shenhe | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | El (*to be updated*)
 Kamisato Ayato | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | Chronosphere (*to be updated*)