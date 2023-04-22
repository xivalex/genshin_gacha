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

## Changelogs ##

### `v1.0` ###
> Initial implementation and base database

### `v1.1` ###
> Added characters and weapons to be obtained
> Type | Rarity | Name | Remarks
> :---: | :---: | --- | ---
> Character | 5★ | Nilou |
> Weapon | 4★ | Eye of Perception |
> Weapon | 4★ | Wandering Evenstar |
> Weapon | 4★ | Xiphos' Moonlight |
> Weapon | 5★ | Skyward Blade |
> Weapon | 5★ | Key of Khaj-Nisut |

### `v1.2` ###
> Added characters and weapons to be obtained
> Type | Rarity | Name | Remarks
> :---: | :---: | --- | ---
> Character | 4★ | Faruzan |
> Character | 4★ | Yaoyao |
> Character | 4★ | Layla |
> Character | 4★ | Shikanoin Heizou |
> Character | 5★ | Nahida |
> Character | 5★ | Wanderer |
> Character | 5★ | Alhaitham |
> Weapon | 5★ | Tulaytullah's Remembrance |
> Weapon | 5★ | Skyward Spine |

### `v1.3` ###
> Added/Updated characters and weapons to be obtained
> Type | Rarity | Name | Remarks
> :---: | :---: | --- | ---
> Character | 4★ | Mika |
> Character | 4★ | Layla | Updated video contributor
> Character | 4★ | Sucrose | Updated video contributor
> Character | 4★ | Faruzan | Updated video contributor
> Character | 4★ | Razor | Updated video contributor
> Character | 4★ | Yaoyao | Updated video contributor
> Character | 5★ | Shenhe | Updated video contributor
> Weapon | 4★ | The Widsith |
> Weapon | 4★ | Favonius Greatsword |
> Weapon | 4★ | Favonius Lance |
> Weapon | 4★ | Wine and Song |
> Weapon | 5★ | Mistsplitter Reforged |
> Weapon | 5★ | Calamity Queller |

### `v1.4` ###
> Changed command delay from 5-seconds to 1-second \
> Changed emotes used for some responses \
> Updated README.md

### `v1.5` ###
> Updated randomizer for gacha \
> Added aliases

### `v1.6` ###
> Added characters and weapons to be obtained
> Type | Rarity | Name | Remarks
> :---: | :---: | --- | ---
> Character | 4★ | Kirara |
>
> Added text color for drops to be more visible when it is ongoing \
> Updated messages during drops \
> Trimmed messages if its too long for 1 chat message \
> Updated handling for stalled videos to retry loading the video until it does not stall

### `v1.61` ###
> Added `Speed` parameter to adjust the playback speed of the videos \
> Changed timing of `Genshin Wish Ongoing` message

### `v1.62` ###
> Updated error handling for videos

## PRE-REQUISITE ##

1. Emotes used are 7TV-enabled. To ensure that emotes are displayed in the browser or chat, add the following emotes
> IMAGE | TEXT/LINK
> :---: | :---:
> ![DIANO](https://cdn.7tv.app/emote/61ffb55a5d4f1907669e8140/1x.webp) | [DIANO](https://7tv.app/emotes/61ffb55a5d4f1907669e8140)
> ![HutaoVeryPogFast](https://cdn.7tv.app/emote/6351242993bcf63136320f15/1x.webp) | [HutaoVeryPogFast](https://7tv.app/emotes/6351242993bcf63136320f15)
> ![HutaoPoke](https://cdn.7tv.app/emote/6345494094790c62d1eef7ec/1x.webp) | [HutaoPoke](https://7tv.app/emotes/6345494094790c62d1eef7ec)
> ![raidenCry](https://cdn.7tv.app/emote/615b5a78b5fb83ec4daf0c94/1x.webp) | [raidenCry](https://7tv.app/emotes/615b5a78b5fb83ec4daf0c94)
> ![GanyuNom](https://cdn.7tv.app/emote/61bc6c4a5804e220aa6ad3a6/1x.webp) | [GanyuNom](https://7tv.app/emotes/61bc6c4a5804e220aa6ad3a6)
> ![genshinWish](https://cdn.7tv.app/emote/6244684a8b408746ed597a87/1x.webp) | [genshinWish](https://7tv.app/emotes/6244684a8b408746ed597a87)
> ![SpeedL](https://cdn.7tv.app/emote/60b12ef78149943f87aaaed9/1x.webp) | [SpeedL](https://7tv.app/emotes/60b12ef78149943f87aaaed9)
> ![SpeedR](https://cdn.7tv.app/emote/60b12f078149943f87aada70/1x.webp) | [SpeedR](https://7tv.app/emotes/60b12f078149943f87aada70)
> ![GroupNuma](https://cdn.7tv.app/emote/6309e63f1c2af492f8fdc28e/1x.webp) | [GroupNuma](https://7tv.app/emotes/6309e63f1c2af492f8fdc28e)
> ![wideKokoSigh](https://cdn.7tv.app/emote/641eea1e0ef35e7ab89f1041/1x.webp) | [wideKokoSigh](https://7tv.app/emotes/641eea1e0ef35e7ab89f1041)
> ![wideKokoAngry](https://cdn.7tv.app/emote/637ae7703b8505514ff5599f/1x.webp) | [wideKokoAngry](https://7tv.app/emotes/637ae7703b8505514ff5599f)

## INSTALLATION ##

1. In your preferred broardcasting software (e.g. OBS), add a browser source and use the link: https://xivalex.github.io/genshin_gacha

2. The following are the URL parameters that can be used to customize the behavior of the genshin wish simulator

> REQUIRED | PARAMETER | DESCRIPTION
> :---: | :---: | ---
> YES | channel | Your Twitch channel name
> YES | uid | Unique ID for your database <span style="color:red">**(●1)**</span>
> YES | oauth | Authorization Token for the "chatter" <span style="color:red">**(●2)**</span>
> NO | sr | Adjust the percentage on winning a 5★ against a 4★ (*Default: 1% to get a 5★*)
> NO | c | Adjust the percentage on winning a 3★ against a 4★ (*Default: 90% to get a 3★*)
> NO | three | Adjust the prize when user wins a 3★ (*Default: 0*)
> NO | four | Adjust the prize when user wins a 4★ (*Default: 300*)
> NO | five | Adjust the prize when user wins a 5★ (*Default: 2000*)
> NO | cost | Adjust the cost to use the command (*Default: 160*)
> NO | pity | Adjust the pity before a guaranteed 5★ (*Default: 30 pity to get a guaranteed 5★*)
> NO | drops | Adjust the amount of primogems drops (*Default: 1600 primogems*)
> NO | dropstime | Adjust the time interval of drops (*Default: 15 minutes*) <span style="color:red">**(●3)**</span>
> NO | speed | Adjust the playback speed of the videos (*Default: 1x speed*)

### `NOTES` ###

#### **(●1)** ####
* UID is used to determine your own database. Think of it as an *account* that I use to identify which database belongs to who. You can generate your own UID in **https://www.uuidgenerator.net/**
* Once you generate a UID, please inform/contact me so I could add you as a registered user in the database
* **Unfortunately, this is all manual operation since I do not want to risk any of your personal information if I will add another form of *login* to remove this step (e.g. google account login). Sorry for the inconvenience.**

#### **(●2)** ####
* OAuth is the *authorization token* which refers to the bot/chatter which sends the messages in your chat
* This can be your own Twitch OAuth or if you have your own bot, you can enter the detail here. Make sure that the bot you will use, at the very least, can chat in your channel (or mod the bot if you are unsure of the permissions set)
* If you do not know your own OAuth, you can generate it using twitch provided app in **https://twitchapps.com/tmi/**

#### **(●3)** ####
* Dropstime parameter is in **milliseconds** (e.g. 100000 parameter = 100 seconds)

```
Sample Browser Source URL

*********************************************************************
http://xivalex.github.io/genshin_gacha?&channel=<channel_name>&uid=<UID>&oauth=<OAuth>&sr=50&c=90&three=100&four=200&five=300&cost=10&pity=50&drops=500&dropstime=120000&speed=3
*********************************************************************

By using the sample URL, it sets the program to have:
  - Winning a 5★ against a 4★ has a 50% chance
  - Winning a 3★ against a 4★ has a 90% chance
  - The Prize for 3★ is 100
  - The Prize for 4★ is 200
  - The Prize for 5★ is 300
  - The Cost on using the command is only 10
  - The Pity for a guaranteed 5★ is 50
  - The Drops Amount is 500 Primogems
  - The Drops Interval is 120 Seconds
  - The Playback speed of the videos are changed to 3x speed
```

3. Test the program by typing `!wstats` in your chat. It should initially display as 0 value for both **Primogems** and **Pity**. If command did not respond, check the following possible causes:
* Generated UID is not yet *registered* in the database. Contact me through stream/discord so I can add your UID
* OAuth used is invalid or expired. Try to re-generate the OAuth by visiting **https://twitchapps.com/tmi/**
* Re-check URL parameters, there may be an incorrect format in the link

![check_run](https://i.imgur.com/p2ZL5RL.png)

## Features ##

### Wish Simulator ###
- Simulates `Genshin Impact` Wishes in the stream
- Wish can be trigerred by `!wish` or `!w` and inputting a value of 1 ~ 10 only
- When doing a 10-pull, a 4★ or above item is guaranteed regardless of pity

![single_wish](https://i.imgur.com/VYxjKmx.png)

![multi_wish](https://i.imgur.com/vMhdwez.png)

### Queue ###
- Only **one wish session at a time** is displayed on stream. A queue is implemented so that when multiple viewers type `!wish or !w` in chat, they will be placed in a queue (first-in, first-out) while waiting for the current wish on-stream to finish

![queue_sample](https://i.imgur.com/L365wwu.png)

### Database ###
- User information such as owned characters/weapons, pity, and primogems are saved in a database.
- Information is saved to the database **every minute**, if there will be any connection issues during this minute, wishes are not saved

### Pity System ###
- Pity is the number of times the user has wished
- The default value is 30 and if a user has wished for atleast 30 times without any 5★, the next wish will be a guaranteed 5★

### Primogem Drop ###
- The *currency* used by the gacha is `Primogems`
- `Primogems` can be earned by the viewers through this system or when `!wadd` command is used by streamer or moderators

![primogem_drop](https://i.imgur.com/gtZesVl.png)

## Other commands ##

### `STREAMER / MODERATOR COMMANDS` ###

#### !wqueue ####
- Displays the current queue of users who typed `!wish / !w` in chat

![wqueue](https://i.imgur.com/DQ6JjIl.png)

#### !wconfig ####
- Displays the configuration of the simulator in chat

![wconfig](https://i.imgur.com/JOOfINZ.png)

#### !wlist [3/4/5] ####
- Displays **all** available characters and weapons

![wlist](https://i.imgur.com/LfMGEyt.png)

#### !wreset ####
- Reset the gacha to *possibly* fix any issues (if gacha still does not work, try refreshing the source)

### `COMMON COMMANDS` ###

#### !wclaim ####
- Join the `Primogem Drop` when it is available

![wclaim](https://i.imgur.com/Iq9PKOO.png)

#### !wcheck [3/4/5/charname/weapname] ####
- Displays list of characters and/or weapons owned by the user and its corresponding constellation/refinement

![wcheck-1](https://i.imgur.com/ENrFqdh.png)

![wcheck-2](https://i.imgur.com/IsubLAb.png)

#### !wsell "[3/4/5/charname/weapname]" [amount] ####
- Sell items owned by the user. 3★(10 Primogems) | 4★(160 Primogems) | 5★(480 Primogems)
- The `"` is required and command will not work if format is incorrect

![wsell-1](https://i.imgur.com/neGQc3x.png)

![wsell-2](https://i.imgur.com/rPnssmf.png)

#### !wstats ####
- Displays the statistics of the user

![wstats](https://i.imgur.com/p2ZL5RL.png)

#### !wcredits ####
- Displays my credits

![wcredits](https://i.imgur.com/EluFZY0.png)

#### !wcommands ####
- Displays the list of available commands to be used

![wcommands](https://i.imgur.com/NU4dyzX.png)

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
 Favonius Greatsword | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 The Bell | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Sacrificial Greatsword | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Rainslasher | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [st_krusconnected](https://www.twitch.tv/st_krusconnected)
 Lithic Blade | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Dragon's Bane | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [st_krusconnected](https://www.twitch.tv/st_krusconnected)
 Lithic Spear | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Favonius Lance | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Wavebreaker's Fin | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Favonius Warbow | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [st_krusconnected](https://www.twitch.tv/st_krusconnected)
 The Stringless | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [st_krusconnected](https://www.twitch.tv/st_krusconnected)
 Sacrificial Bow | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Rust | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Alley Hunter | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Mitternachtz Waltz | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Mouun's Moon | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Favonius Codex | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 The Widsith | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Sacrificial Fragments | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Eye of Perception | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Wine and Song | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Xiphos' Moonlight | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Makhaira Aquamarine | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Wandering Evenstar | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Lisa | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Barbara | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=aJiqaAsvRk8)
 Kaeya | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=pRC4XW1UsOI)
 Razor | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
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
 Sucrose | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Xinyan | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Rosaria | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [st_krusconnected](https://www.twitch.tv/st_krusconnected)
 Yanfei | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [st_krusconnected](https://www.twitch.tv/st_krusconnected)
 Thoma | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Sayu | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=KNqI-GOuEIc)
 Gorou | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=yuOUjd6P8fw)
 Kujou Sara | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=JHMs-32U29M)
 Shikanoin Heizou | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Stealthless](https://www.youtube.com/watch?v=gYMdE8bGXu0)
 Yun jin | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Kuki Shinobu | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=BFuZWFPN_fQ)
 Collei | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=rSLkzV7hbMI)
 Dori | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=e37Acs9rq44)
 Candace | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [Kekvin](https://www.youtube.com/watch?v=eHe6nCreb_c)
 Layla | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Faruzan | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Yaoyao | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Mika | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-violet) | [xivalex](https://www.twitch.tv/xivalex)
 Kaveh | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Kirara | ![4★](https://img.shields.io/badge/4%E2%98%85-NO-red) |
 Aquila Favonia | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Skyward Blade | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [xivalex](https://www.twitch.tv/xivalex)
 Freedom-Sword | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Summit Shaper | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Primordial Jade Cutter | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Xeno Archive](https://www.youtube.com/watch?v=-wK-y6RC1SQ)
 Mistsplitter Reforged | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [xivalex](https://www.twitch.tv/xivalex)
 Haran Geppaku Futsu | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Skyward Pride | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Xeno Archive](https://www.youtube.com/watch?v=-wK-y6RC1SQ)
 Wolf's Gravestone | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Song of Broken Pines | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 The Unforged | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Redhorn Stonethresher | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Staff of Homa | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Skyward Spine | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Nongabe](https://www.youtube.com/watch?v=RIoOkmMqArA)
 Vortex Vanquisher | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Primordial Jade-winged Spear | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Calamity Queller | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [xivalex](https://www.twitch.tv/xivalex)
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
 Tulaytullah's Remembrance | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Nongabe](https://www.youtube.com/watch?v=RIoOkmMqArA)
 Light of Foliar Incision | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Beacon of the Reed Sea | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
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
 Shenhe | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [xivalex](https://www.twitch.tv/xivalex)
 Kamisato Ayato | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Genshin Impact Wishes](https://www.youtube.com/watch?v=Xl3LD2pJusA)
 Tighnari | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Syan](https://www.youtube.com/watch?v=kyUptk875eA)
 Nilou | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [xivalex](https://www.twitch.tv/xivalex)
 Cyno | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Kekvin](https://www.youtube.com/watch?v=eHe6nCreb_c)
 Nahida | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Yuan Chu](https://www.youtube.com/watch?v=RuFN5cO8JVE)
 Wanderer | ![5★](https://img.shields.io/badge/5%E2%98%85-YES-yellow) | [Dark Narga](https://www.youtube.com/watch?v=DyVXPY2yia0)
 Alhaitham | ![4★](https://img.shields.io/badge/4%E2%98%85-YES-yellow) | [Rihigh](https://www.youtube.com/watch?v=AT8m5Q6BcvE)
 Dehya | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |
 Baizhu | ![5★](https://img.shields.io/badge/5%E2%98%85-NO-red) |