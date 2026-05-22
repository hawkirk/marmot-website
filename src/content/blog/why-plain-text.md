---
title: Why I wrote a novel app around plain text
description: Notebooks rot. Apps shut down. Markdown won't.
date: 2026-05-13
---

The hardest part of writing a novel is finishing it. The second hardest part, it turns out, is being able to open the file in ten years.

I started my first novel in a popular writing app in 2018. Three years later the app's parent company shut down, and the proprietary `.scriv`-shaped bundle I had been working in stopped opening cleanly. Most of the text survived a tedious export. The chapter order didn't.

I spent the next six months looking for a writing tool I trusted to outlive me, and slowly came to the conclusion that the file format mattered more than any feature. So I started writing Marmot.

## What "plain text" actually buys you

When your manuscript is a folder of `.md` files, three things become true that aren't true for proprietary formats:

1. **Every editor in the world can open it.** TextEdit. VS Code. nano. A `cat` command in a terminal. The next great writing app, twenty years from now.
2. **Git works.** You get free, granular, infinite revision history. You can diff a chapter against last week. You can branch off an alternate ending and merge it back when you decide.
3. **Backup is solved.** Time Machine, iCloud, Dropbox, a USB stick — they all handle small text files perfectly. There is no "export to back up" step.

The cost is small. Markdown is not as fancy as Word, but it can describe a novel: paragraphs, chapter breaks, emphasis, the occasional heading. That's nearly everything you need.

## What Marmot adds on top

Plain text is the floor. The reason Marmot exists, and not just `vim ~/Manuscripts/`, is that long-form fiction has a few real needs that don't fit a pure text editor:

- A **reader mode** that typesets your prose so you can see how it reads on the page, not on a screen.
- A **compile step** that produces a properly-formatted manuscript PDF you can send to an agent without spending an afternoon in InDesign.
- A focused **writing surface** that doesn't tempt you with toolbars while you're trying to find a sentence.

That's the entire pitch. Everything else — sync, collaboration, AI co-authors — Marmot deliberately leaves to other tools, or to nobody at all.

If that sounds like the writing app you've been waiting for, [you can grab Marmot on the Mac App Store](/). And if you have thoughts about it, I'd love to hear them: hello@marmotmanuscript.com.
