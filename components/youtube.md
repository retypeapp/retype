---
icon: video
tags: [component]
---
# YouTube

Retype makes it easy to embed YouTube videos in your documentation. Simply place a YouTube URL on its own line in your markdown file, and Retype will automatically convert it into a responsive embedded video player.

## Basic Usage

To embed a YouTube video, simply paste a YouTube URL on its own line in your markdown document:

```markdown
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

This will be transformed to the following:

https://www.youtube.com/watch?v=dQw4w9WgXcQ

## Supported URL Formats

Retype supports multiple YouTube URL formats:

1. Standard watch URLs: `https://www.youtube.com/watch?v=VIDEO_ID`
2. Short URLs: `https://youtu.be/VIDEO_ID`
3. Embed URLs: `https://www.youtube.com/embed/VIDEO_ID`

All of these formats will be automatically converted to embedded players when placed on their own line.

## Player Parameters

You can customize the embedded YouTube player by adding parameters to the URL. These parameters allow you to control various aspects of the player such as autoplay, loop, controls display, and more.

Here are some of the most commonly used parameters:

### Autoplay

To automatically start playback when the player loads, add the `autoplay=1` parameter:

```markdown
https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1
```

### Loop

To make a video play repeatedly, add the `loop=1` parameter:

```markdown
https://www.youtube.com/watch?v=dQw4w9WgXcQ&loop=1
```

### Controls

You can hide the player controls by setting `controls=0`:

```markdown
https://www.youtube.com/watch?v=dQw4w9WgXcQ&controls=0
```

### Mute

To start the video with audio muted (often used in conjunction with autoplay):

```markdown
https://www.youtube.com/watch?v=dQw4w9WgXcQ&mute=1&autoplay=1
```

### Start and End Times

To specify both start and end times for your video:

```markdown
https://www.youtube.com/watch?v=dQw4w9WgXcQ&start=30&end=60
```

This plays only the segment from 30 seconds to 60 seconds.

For a complete list of all available parameters and their values, refer to the [YouTube Player Parameters](https://developers.google.com/youtube/player_parameters#Parameters) documentation.

## Timestamp Support

You can include a specific start time for your video by adding a timestamp parameter:

```markdown
https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=30s
```

This will start the video at the 30-second mark:

https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=30s

You can also use the shorter `youtu.be` format with timestamps:

```markdown
https://youtu.be/dQw4w9WgXcQ?t=45
```
