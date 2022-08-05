# Genshin Impact Wish Simulator
![GitHub](https://img.shields.io/badge/license-MIT-brightgreen)

## DISCLAIMER ##
This is not sponsored in any way by Hoyoverse and I do not gain any profit from this project.

> Integration to Twitch chat was made possible and easy-to-use by integrating [ComfyJS](https://github.com/instafluff/ComfyJS#readme) maintained by [@Instafluff](https://twitch.tv/instafluff).

## INTRODUCTION

The **[Genshin Wish Simulator]** lets the viewers simulate a genshin wish by typing the **!wish** command in chat.

[![Sample Wish](https://img.youtube.com/vi/yIYZ12OUEwk/hqdefault.jpg)](https://youtu.be/yIYZ12OUEwk)

### xivalex ###
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
- Displays the current queue of users who typed `!wish`. Usable only by **Streamer** and **Moderators**

### !wishconfig `(TBD)` ###
- Lets the `Streamer` or `Moderators` to modify the settings on-stream without the need to modify the URL parameters
- Changes done with this command **are not permanent**. Once browser source is refreshed, the URL parameters will take priority

## Credits ##

[@Instafluff](https://twitch.tv/instafluff) for providing and maintaining the `ComfyJS` package

Thank you to all the contributors for the videos displayed

`<TBD>` (*No contributors yet*)