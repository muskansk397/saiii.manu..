# ❤️ More Than My Best Friend — Personal Website Guide

Hey! 👋 Your website is ready! Here's how to customize everything easily.

---

## 📂 How to open it
Just open **`index.html`** in any browser (Chrome, Edge, Safari, Firefox).
Double-click it, or right-click → Open with → your browser.

---

## 🖼️ Where to add your photos & videos

### Add these files into the **`images/`** folder:

| File name              | Where it appears                                       |
|------------------------|--------------------------------------------------------|
| `memory1.jpg`          | Memories section — Card 1                              |
| `memory2.jpg`          | Memories section — Card 2                              |
| `memory3.jpg`          | Memories section — Card 3                              |
| `memory4.jpg`          | Memories section — Card 4                              |
| `memory5.jpg`          | Memories section — Card 6                              |
| `special.jpg`          | "One of My Favorite Moments ❤️" big highlight section  |

### Add this into the **`videos/`** folder:

| File name              | Where it appears                                       |
|------------------------|--------------------------------------------------------|
| `memory1.mp4`          | Memories section — Card 5 (the video card)             |
| *(optional) special.mp4* | If you want a video instead of special.jpg (edit HTML) |

> 💡 **Tip:** You can use `.png` or even `.webp` too!  
> Just rename the filenames in the HTML if you use different formats.

---

## 🎵 Add background music (optional)
Place an mp3 file named **`music.mp3`** in the same folder as `index.html`.
The button at the top-right will let the person play or pause it.
*(Music never auto-plays — they can choose to listen.)*

---

## 🎯 Edit anything in the letter/message

Open **`index.html`** in **Notepad** or any text editor.

Search for:
```
<!-- ✍️  BIRTHDAY MESSAGE -->
```

Everything between that comment and the next `</div>` is your Telugu + English 
letter. Change any word, sentence, add anything you want — it will look great! ✨

---

## 💯 Change / Edit the UPSC Promise Section
In `index.html`, search for:
```
<!-- 🎯 UPSC PROMISE / BIRTHDAY PLEDGE -->
```

You'll find the promise text:
- "I took a big step for my life."
- "UPSC" and "2027" (the big numbers with gold/red styling)
- "This is my birthday gift to myself."
- "— Sai ❤️" (your signature)
- "Some birthdays are just celebrations. This one is a promise. 🇮🇳"

Edit any of those lines freely! 🇮🇳✨

---

## 📸 Change memory captions / dates

In `index.html`, search for `<!-- Memory 1 -->`, `<!-- Memory 2 -->`, etc.

Inside each memory card, you'll see:
```html
<span class="memory-label">Day 1</span>                    ← Change date/label
<p class="memory-caption">One of our good days ✨</p>      ← Change caption
```

Also change these attributes on the `<div class="memory-card">`:
```html
data-caption="One of our good days ✨"   ← used in the lightbox popup
```

---

## 🥹 Change the "Favorite Moment" caption
In `index.html`, search for:
```
<p class="best-caption">
   Some moments become memories.
   <br>
   Some memories become a part of us.
</p>
```
Change those lines to anything you want.

---

## 🌟 Add / remove highlight cards
Look in the `<section class="highlights-section">` block.
Each highlight card is a `<div class="highlight-card reveal">…</div>`.
Copy / paste / delete them as you like.

---

## 🎨 Colors / fonts
Everything is in **`style.css`** at the top under `:root`:

```css
--color-cream: #fff9f5;
--color-soft-pink: #fde7ef;
--color-pink: #ffc2d6;
--color-deep-pink: #ff7eb9;
--color-deep-red: #e91e63;
--color-dark: #1a1024;
```

Feel free to change these hex codes if you want different shades!

---

## 📱 How it looks on phones
Don't worry — everything is mobile-friendly already.
The opening heart, the message, memory cards, and final section all
auto-adjust on small screens.

---

## 💌 Need to change the name?
In the letter search for `"Manu… Manu… Manu…"` and replace with whatever 
the person's name / nickname is. ❤️

Also change the signature:
```html
<p class="msg-line msg-signature">
   — Always your friend <span class="heart-red">❤️</span>
</p>
```

---

Made with love. ❤️
Happy Birthday to him! 🎂
