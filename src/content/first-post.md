---
title: Making a captivating personal homepage, the good, the bad & the ugly (mostly ugly)
description: My first post and pain points with setting up this project.
date: '2024-10-16'
categories:
	- javascript
  - webdev
  - opensource
  - sveltekit
  - svelte
published: true
---

As many of you may know, as web developers, we're sort of expected to have a good presence on the web with custom domains, custom and well build webpages, blogs, portfolios, etc. Having said that, and imagining that a lot of you may be in the same boat as I am, we need time & effort to get into that whole thing. And obviously, the notion was also there that "the shoemaker's children go barefoot" and so, for years now, my personal homepage looked a lot like this: 

![OLd homepage](/first-post/old-homepage.png)

It was quite neat, since I copied the design from somewhere across the internet, but it worked well as a single place that I can place all my contact URLs, and obviously with places like DEV.to, the need for a blog fell out of fashion. So there I was, stuck with this ~~monstrosity~~ beauty as my personal website, until I saw this image one day on daily.dev:

![Interesting profile website idea](/first-post/new-idea.jpeg)

Thus an idea was born. What if I emulate this lovely design that some designer has made for the launch of "Adding more personal data on someone else's platform somewhere on the internet" as the basis for my website, and not only create the same setup, but make it better with an animated face of me, that will actually interact with the user? I'M A GENIUS!

So I started with getting a video of myself through the iPhone's MeMoji feature and slapping two lines of text bellow to greet my fellow 2 people per year that would visit this website. 

> _Side note:_ Video playback on the web, especially cross-browser in the same way as an image would be displayed ended up being quite the challenge, as Safari (specifically), would not be happy to play anything in any capacity, unless you give it special attributes (that apparently only it uses 😒). Those being `playsinline`, `muted` and `autoplay`, but `playsinline` specifically is needed, as otherwise your video would start playing in full-screen in Safari's native video player. Read more [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video).

After a bit of back-and-forth with the video, I was finally ready to get my fancy hovering buttons across my cartoonish face, but how do I do it? I could try to add them in a 360 degree circle setup (maybe), or they could just float there in predefined places (not ideal) or maybe there was a library that could do that (there wasn't). After thinking long and hard, I started trying out different solutions, and what then became apparent is that the design I ~~stole~~ found out and inspired me, was never meant to be made as a webpage, let alone a <u>mobile</u> webpage. Because you see, on mobile, the above design doesn't have any space for those elements on the left & right side, so you essentially need to figure out how to dynamically move them to top & bottom positions. So all of my trials and errors gave the following outcome:

![Unsuccessful try to emulate a design without knowing how hard it might be](/first-post/failed-approach.png)

And so I left it for a day (or three) and to my surprise that was actually a good thing. You see, in the meantime I watched a few YouTube videos and by a random draw of the **_algorithm_**, I was served a video showcasing **[Magic UI](https://animation-svelte.vercel.app/magic)**, which seemed like an interesting idea and led me to pivot. What if I kept the animated video idea, but threw out the difficult to handle and manage placed buttons for more of a [dock-style](https://animation-svelte.vercel.app/magic/dock) set of buttons. And that worked flawlessly... on the ~~4th~~ 1st try 🤫

>_Another side note:_ I'm using Svelte for this project, as I've used it extensively for a few years now and can deal with any potential issue that I might encounter. the aforementioned Magic UI is an extension of [Shadcn UI](https://shadcn-svelte.com/) for Svelte and this was actually my first experience with a Shadcn-like tool, which ended up fun and interesting. It'd definitely use it in the future.

After that was done, I was on a roll, let's add more fancy effects, there's [meteors](https://animation-svelte.vercel.app/magic/meteors), why not add them, and a fancy [shine border](https://animation-svelte.vercel.app/magic/shine-border) and would you look at this [Retro grid](https://animation-svelte.vercel.app/magic/retro-grid)... and boom, nothing works anymore, half the things are broken and nothing aligns how it should. And so a valuable lesson was learned, less is more and moderation is key. So I left just one [particle effect](https://animation-svelte.vercel.app/magic/particles), so the background's darkness doesn't swallow our visitors into the void.

> _I'll try to stop with the side notes:_ The background had to be black (like #000 black), due to the fact that the video is not transparent as a .png could via an alpha layer and I didn't find a better solution for an .mp4 formatted file, although I am open to ideas in the comments.

![My new homepage, boian.dev](/first-post/new-homepage.png)

And so, my brand new homepage was born! You can visit it at [boian.dev](https://boian.dev) I was quite happy with how it turned out and am now working into adding a blog to it (this is actually its first article), and I'm open to adding some more stuff to it, so if you have any ideas feel free to share them.


To end on a high note, I want everyone to keep in mind that even though things might not turn out the way you expected initially, they can end up becoming much better than anticipated. So don't be scared to try out new things, because the end result might surprise you 😉


You can find the repo to this whole project [here on GitHub](.
