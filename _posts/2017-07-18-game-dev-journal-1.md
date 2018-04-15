---
layout: post
title: "Game Dev Journal 1&#58; First demo of Machine Gods"
date: 2017-07-18
excerpt: "Indie game development with GDevelop"
tags: [art, summer, videogames, development]
feature: http://nichwch.github.io/art/promo1.png
comments: true
---

Over the past 4 months, I've been working on developing my own videogame - Machine Gods. Today I have a finished demo. It's incomplete - some of the art assets are uncolored, there are only 3 enemies implemented and only 1 level background, but the core gameplay is there. It's something I've wanted to do since the 2nd grade, and finally having something playable that I made feels really good. I've written a couple of reflections on the process thus far here.

# The inspiration for Machine Gods

I was inspired largely by the gameplay from the indie platformer-roguelike game [Risk of Rain](http://riskofraingame.com/). Platformers were my childhood. I spent every weekend playing games like Super Mario Galaxy and Kirby's Epic Yarn on my Wii console, and quickly realized the diverse creative possibilities that could be realized from the structure of a platformer. The 2D side scrolling structure of a platformer made using hand-drawn art practical, so I quickly decided that was the kind of game I was going to make.

After playing [FTL](https://subsetgames.com/ftl.html) in 7th grade, the idea of roguelike (or roguelite if you want to be a purist) has always stuck with me. The mechanic of permadeath made every in game decision feel important, and the short playthrough sessions framed the gameplay in an interesting way. I've always considered these short playthrough session games to be the videogame equivalent of short films or vignettes - easily enjoyed in one sitting and convenient to consume. So I decided that I was going to make my game a roguelite.

From there, the rest of the game fell together. Since my earliest days playing videogames, I have always been fascinated with videogame art. I have entire notebooks of unused videogame concept art - miscellanious robotic villains and sci-fi weapons just waiting to be used. So I drew up a few assets, and my vision for Machine Gods was clear: I wanted to make a game that combined the creative platformer worlds of my youth, the concise and tense gameplay of a roguelite, and the videogame art I enjoyed making.

# Reflections

I thought coding the game would be the hardest part of developing Machine Gods. Strangely enough, it wasn't. First of all, I found an engine that allowed me to use drag-and-drop scripting to write the game's logic, so the coding itself wasn't the problem. The biggest problems I faced were complete surprises. 

For example, I had finished processing a set of handdrawn images, adding transparency to them. After loading them into the engine, I found that they were a little too large. I fired up Microsoft Paint to resize the images, and went through the tedious process of resizing 20 images - only to find that running the images through MS Paint had erased the transparency from all the images! That forced me to restart the tedious process of image processing again.

Issues with the game engine also stalled my progress from time to time. I used GDevelop as my engine - as I had seen another indie game developer use it to create a [game I found to be pretty cool](http://hyperspacedogfights.com/). While GDevelop is fairly powerful and can create complex, full games like the game I linked, the engine is developed by some college students in France. The community of GDevelop users is small enough, and at that most of them are French. Furthermore, GDevelop is still pretty young, and bugs aren't uncommon. Halfway through development, I found that the game wouldn't compile, for the vague given reason of a "duplicate variable definition." This wasn't of much use to me, as the error was in the mess of C++ code the engine translated into, so I was stuck asking for help on the forums - which were predictably empty. In the end, through sheer brute force examination, I found that problem was a stray modulo operator in some corner of the code I had written. How a stray modulo operator related to a "dupblicate variable definition" is still a mystery to me.

My point isn't that MS Paint and GDevelop are garbage. They're great tools. My point is that a lot of obstacles can't be foreseen. I doubt even the most graphic designers would have known that resizing an image in MS Paint would erase the transparency.

I perceived my coding abilities to be the weak link. It turned out the basic algorithims and principles I had learned from my AP Computer Science class were more than adequate - instead it was image processing that I struggled with. There's no way to know what you'll find challenging about something. The best way to find out is to try it.

# The future

Right now, the demo has only 3 enemies and 1 level background implemented. I want to add more enemies so that the more difficult levels have an diverse array of enemies, not just a greater amount of the easy enemies. I already have a couple of backgrounds drawn up that I want to add to the game eventually. Most of all, I want to add boss fights. I'm hoping I can add some really epic boss fights between the levels, with large animated robots raining rockets on the player, or giant airships with machine guns attached everywhere, or teleporting ninja robots. I'm hoping I can get the game to an early alpha state by the time school starts.

Thanks for reading!
