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
- `sr` : Adjust the percentage on winning a 5★ against a 4★ (*Default: 1% to get a 5★*)
- `c` : Adjust the percentage on winning a 3★ against a 4★ (*Default: 90% to get a 3★*)
- `three` : Adjust the prize when user wins a 3★ (*Default: 0*)
- `four` : Adjust the prize when user wins a 4★ (*Default: 300*)
- `five` : Adjust the prize when user wins a 5★ (*Default: 2000*)
- `cost` : Adjust the cost to use the command (*Default: 160*)
- `points` : Adjust the points name used in your channel (*Default: Primogems*)
- `check` : Output the current setting of the program in your chat
- `pity` : Adjust the pity before a guaranteed 5★ (*Default: 30 pity to get a guaranteed 5★*)

```
Sample Browser Source URL

*********************************************************************
https://xivalex.github.io/genshin_gacha?jwt=<JWT Token>&id=<Account ID>&channel=xivalex&volume=50&sr=50&c=90&three=100&four=200&five=300&cost=10&points=test&check=true&pity=50
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
  - The Pity for a guaranteed 5★ is 50
```

3. Test the program by typing `!wish` or `!wish <1~10>` in your chat. Video should load and the following is displayed in chat. If video does not load, try refreshing the browser source or re-check the parameters in the URL.

![sample_output](https://i.imgur.com/Gp0PD9g.png)

![multi_sample](https://i.imgur.com/PzDR4dq.png)

## Features ##
### Queue ###
- Only **one wish session at a time** is displayed on stream. A queue is implemented so that when multiple viewers type `!wish` in chat, they will be placed in a queue (first-in, first-out) while waiting for the current wish on-stream to finish

![queue_sample](https://i.imgur.com/g3wI4Yl.png)

### Database ###
- Characters and weapons are saved in a database. You can check your current inventory using `!wishcheck <3/4/5/charname/weapname>` command

- Information is saved to the database every minute, if there will be any connection issues during this minute, wishes are not saved. Sorry for any inconvenience

### Pity System ###
- Pity is the number of times the user has wished.
- The default value is 30 and if a user has wished for atleast 30 times without any 5★, the next wish will be a guaranteed 5★

### "No Gamble" system `(TBD)` ###
- If streamer does not want to make use of StreamElements and just show a wish video on-stream

## Other commands ##
*Note: There is a 5-second delay for common commands to avoid spamming the chat*

### !wishqueue ###
- Displays the current queue of users who typed `!wish` in chat
- Usable only by `Streamer` and `Moderators`

![wishqueue](https://i.imgur.com/hqgcIIy.png)

### !wishinfo ###
- Displays the current setting
- Usable only by `Streamer` and `Moderators`

### !wishreset ###
- Reset the gacha to *possibly* fix any issues (if gacha still does not work, try refreshing the source)
- Usable only by `Streamer` and `Moderators`

### !wishlist [3/4/5] ###
- Displays **all** available characters and weapons
- Usable only by `Streamer` and `Moderators`

![wishlist](https://i.imgur.com/mcxfmpG.png)

### !wishcheck [3/4/5/charname/weapname] ###
- Displays list of characters and/or weapons owned by the user and its corresponding constellation
- e.g. !wishcheck Yanfei, !wishcheck 5

![wishcheck](https://i.imgur.com/ZfyRr0P.png)

![wishcheck-2](https://i.imgur.com/qlDyYrJ.png)

### !wishpity ###
- Displays the current pity of the user

![wishpity](https://i.imgur.com/K8uth8E.png)

### !wishcommand ###
- Displays the list of available commands to be used

### !wishconfig `(TBD)` ###
- Lets the `Streamer` or `Moderators` to modify the settings on-stream without the need to modify the URL parameters
- Changes done with this command **are not permanent**. Once browser source is refreshed, the URL parameters will take priority

## Credits ##

[@Instafluff](https://twitch.tv/instafluff) for providing and maintaining the `ComfyJS` package

---

The following are the list Genshin `Weapons` and `Characters` and its availability in the simulator
> If you want to contribute, please do inform me through my  [@Twitch](https://twitch.tv/[xivalex](https://www.twitch.tv/xivalex)) (*sorry I do not have other socials. . .*)

> For items with ***to be updated*** contibutor, you may still contribute a video for it

> If you found your video in below and you do not want it to be used, please do inform me and I will remove it immediately. Sorry for any inconvenience.

 For video contributions, some guidelines for it:
 * You can send a the whole/full wish session, but please provide timestamps so I can easily find the part I need to edit-out
 * Please do avoid having stuffs which blocks the video (e.g. chat and/or notification overlays)
 * Video should be full-screen (maybe no need for a specific resolution since I convert it anyway)

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
 Eye of Perception | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Wine and Song | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Xiphos' Moonlight | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Makhaira Aquamarine | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Wandering Evenstar | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Lisa | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Barbara | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=aJiqaAsvRk8)
 Kaeya | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=pRC4XW1UsOI)
 Razor | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=Ll_Y0hB4xHc)
 Amber | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=TvPp2maPb20)
 Xiangling | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=KC6tqdTYNhI)
 Beidou | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=_EVI-G14fzk)
 Xingqiu | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [st_krusconnected](https://www.twitch.tv/st_krusconnected)
 Ningguang | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Fischl | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=7EK3V_Hyk4Q)
 Bennett | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Noelle | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [st_krusconnected](https://www.twitch.tv/st_krusconnected)
 Chongyun | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=Af6omSnlFvs)
 Diona | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [shawners21](https://www.twitch.tv/shawners21)
 Sucrose | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=nxsEwo45wPc)
 Xinyan | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Rosaria | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [st_krusconnected](https://www.twitch.tv/st_krusconnected)
 Yanfei | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [st_krusconnected](https://www.twitch.tv/st_krusconnected)
 Thoma | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Sayu | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=KNqI-GOuEIc)
 Gorou | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=yuOUjd6P8fw)
 Kujou Sara | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=JHMs-32U29M)
 Shikonoin Heizou | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Yun jin | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Kuki Shinobu | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=BFuZWFPN_fQ)
 Collei | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=rSLkzV7hbMI)
 Dori | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=e37Acs9rq44)
 Candace | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Kekvin](https://www.youtube.com/watch?v=eHe6nCreb_c)
 Layla | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Aquila Favonia | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Skyward Blade | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [xivalex](https://www.twitch.tv/xivalex)
 Freedom-Sword | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Summit Shaper | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Primordial Jade Cutter | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Xeno Archive](https://www.youtube.com/watch?v=-wK-y6RC1SQ)
 Mistsplitter Reforged | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Haran Geppaku Futsu | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Skyward Pride | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Xeno Archive](https://www.youtube.com/watch?v=-wK-y6RC1SQ)
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
 Hunter's Path | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Key of Khaj-Nisut | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [xivalex](https://www.twitch.tv/xivalex)
 Staff of the Scarlet Sands | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 A Thousand Floating Dreams | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Kamisato Ayaka | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=xs5GqPZjieU)
 Jean | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=BAnbfpGsJyQ)
 Diluc | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=cRnrz3DQHDQ)
 Venti | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [FriedRiceGod](https://www.youtube.com/watch?v=zS6IKVkIjeg)
 Xiao | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Xeno Archive](https://www.youtube.com/watch?v=-wK-y6RC1SQ)
 Klee | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Yuan Chu](https://www.youtube.com/watch?v=6KxFoWtuSP0)
 Zhongli | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Green](https://www.youtube.com/watch?v=nnsx080PIoY)
 Tartaglia | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=3V29ro8HgOk)
 Qiqi | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Xeno Archive](https://www.youtube.com/watch?v=-wK-y6RC1SQ)
 Ganyu | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=EdbGHfK9hrk)
 Albedo | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [st_krusconnected](https://www.twitch.tv/st_krusconnected)
 Mona | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=7F0lXP6Nt9o)
 Keqing | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [shawners21](https://www.twitch.tv/shawners21)
 Hu Tao | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Yuan Chu](https://www.youtube.com/watch?v=WmxEMEi1zb4)
 Kaedehara Kazuha | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow)| [Mashumaro](https://www.youtube.com/watch?v=GvLuuHp1pII)
 Yoimiya | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Yuan Chu](https://www.youtube.com/watch?v=janOkk4RMrE)
 Eula | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [xivalex](https://www.twitch.tv/xivalex)
 Raiden Shogun | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=dyGjrF-6pyM)
 Sangonomiya Kokomi | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [xivalex](https://www.twitch.tv/xivalex)
 Arataki Itto | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=VahZlR2voXI)
 Yae Miko | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [xivalex](https://www.twitch.tv/xivalex)
 Yelan | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Yuan Chu](https://www.youtube.com/watch?v=hX2aNzEN04o)
 Shenhe | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [TheGamicissist](https://www.youtube.com/watch?v=4SbsZ7Qu1sg)
 Kamisato Ayato | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=Xl3LD2pJusA)
 Tighnari | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Syan](https://www.youtube.com/watch?v=kyUptk875eA)
 Nilou | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [xivalex](https://www.twitch.tv/xivalex)
 Cyno | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Kekvin](https://www.youtube.com/watch?v=eHe6nCreb_c)
 Nahida | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |