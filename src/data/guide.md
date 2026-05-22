## Getting started

After installing Marmot from the Mac App Store, open the app and choose **File → New Manuscript…** (or press <kbd>⌘N</kbd>). Pick a folder on your Mac and give the manuscript a name. Marmot creates the folder, drops in a starter `chapter-01.md` file, and opens it in the editor.

Your manuscript is now a folder you can find in Finder. You can open the same files in any other Markdown editor, sync the folder via iCloud or Dropbox, or track it with Git. Marmot does not lock you in.

## Writing

The editor is the surface you'll spend almost all your time on. A few things to know:

- **Markdown is optional but supported.** Use `*italics*` or `**bold**` where you want them; otherwise just type prose. Marmot renders the formatting inline as you type.
- **Smart typography.** Marmot converts straight quotes to curly quotes, double hyphens to em-dashes, and three periods to an ellipsis as you write.
- **Focus mode.** Press <kbd>⌃⌘F</kbd> (or **View → Focus Mode**) to dim everything but the sentence under your cursor. Press it again to return to normal.

### Navigating between chapters

The sidebar on the left lists every file in your manuscript folder. Drag to reorder; the order is saved in `marmot.json` alongside your files. Click any chapter to open it.

To add a new chapter, click the **+** at the bottom of the sidebar or use **File → New Chapter** (<kbd>⌘⇧N</kbd>).

## Reader mode

Press <kbd>⌘R</kbd> (or **View → Reader Mode**) to switch from editing to a typeset preview of your manuscript. Reader mode renders your prose in a serif typeface at book-like measure, with proper paragraph indentation and chapter breaks.

This is the fastest way to spot pacing problems. A dense block of dialogue that looks fine in the editor will reveal itself as a wall of text in reader mode.

Press <kbd>⌘R</kbd> again to return to the editor.

## Compiling for submission

When you're ready to send your manuscript to an agent or publisher, use **File → Compile…** (<kbd>⌘⇧E</kbd>). Marmot produces a PDF in the **industry-standard manuscript format** used for novel submissions.

The Compile dialog offers a small number of choices:

- **Font.** Courier or Times New Roman. Both are accepted; Courier is traditional.
- **Scope.** The whole manuscript or a single chapter (useful for partial submissions).
- **Author info.** Name, address, email, agent — the contact block that appears in the upper-left of the title page.

Click **Compile** and choose where to save the PDF. That's it. The output is submission-ready: title page, headers with running word count, proper page numbering, and a hash mark between scenes.

## Tips

- **Keep chapters in separate files.** Marmot treats one `.md` file as one chapter. Don't put your whole book in a single file.
- **Use Git.** Run `git init` in your manuscript folder and commit after every writing session. You get an unlimited, free, granular history of every change you've made.
- **Set a daily goal.** **Marmot → Settings → Writing** lets you set a daily word target. The progress bar in the corner gives you a quiet nudge without nagging.
- **Back up off-machine.** Marmot is local-first by design; that means *you* are responsible for backups. Time Machine handles this for free. So does putting your manuscript folder inside iCloud Drive or Dropbox.

## Keyboard shortcuts

| Action               | Shortcut          |
| -------------------- | ----------------- |
| New manuscript       | <kbd>⌘N</kbd>     |
| New chapter          | <kbd>⌘⇧N</kbd>    |
| Toggle reader mode   | <kbd>⌘R</kbd>     |
| Toggle focus mode    | <kbd>⌃⌘F</kbd>    |
| Compile to PDF       | <kbd>⌘⇧E</kbd>    |
| Open settings        | <kbd>⌘,</kbd>     |

## Getting help

If something isn't working, or you have an idea for how Marmot could be better, send an email to [hello@marmotmanuscript.com](mailto:hello@marmotmanuscript.com). Replies usually come within a day or two.
