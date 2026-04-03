# Google Maps

Retype can automatically embed Google Maps by placing a standalone Maps embed URL or a pasted `<iframe>` snippet on its own line in Markdown.

---

## Standalone URL

Paste a Google Maps embed URL on its own line and Retype converts it into a responsive embed block.

```md
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198778.33914254082!2d103.70358128993288!3d1.3237428276302825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2sca!4v1775257132373!5m2!1sen!2sca
```

https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198778.33914254082!2d103.70358128993288!3d1.3237428276302825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2sca!4v1775257132373!5m2!1sen!2sca

---

## iframe snippet

Google Maps' **Share → Embed a map** option generates an `<iframe>` snippet. You can add that embed block into a `.md` document and Retype normalizes into a map embeded component.

```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5246.411000546988!2d2.2919010129404!3d48.85837360058709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sca!4v1775257113722!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
```

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5246.411000546988!2d2.2919010129404!3d48.85837360058709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sca!4v1775257113722!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

---

## Unsupported URLs

Only `maps/embed` URLs trigger the auto-embed. Regular place pages and short share links are treated as normal hyperlinks by Retype.

| Pattern | Behavior |
|---|---|
| `https://www.google.com/maps/embed?pb=...` | Auto-embeds |
| `https://www.google.ca/maps/place/...` | Normal link |
| `https://maps.app.goo.gl/...` | Normal link |
