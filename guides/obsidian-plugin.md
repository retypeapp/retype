# Retype for Obsidian Plugin

**Retype for Obsidian** integrates the Retype app directly into Obsidian and your vault. 

Start, stop, and build your Retype documentation site directly from the Obsidian sidebar, without switching to a terminal.

Requirement | Support
--- | ---
Platforms | [!badge text="Mac" variant="light"] [!badge text="Win" variant="primary"] [!badge text="Linux" variant="dark"]
Min version | [Obsidian](https://obsidian.md/) 1.11.4 or later

Install directly from [Obsidian Community](https://community.obsidian.md/plugins/retype) plugins website or continue reading to get set up.

---

## Install from Obsidian

Open **Settings → Community plugins** and click **Browse**.

![](/blog/images/2026-05-25-retype-for-obsidian-community-plugins.png)

![](/blog/images/2026-05-25-retype-for-obsidian-app-browse.png)

Search for **Retype**...

![](/blog/images/2026-05-25-retype-for-obsidian-app-community-plugin-results.png)

Click Install, then Enable, and Retype will be listed in your **Installed plugins**.

![](/blog/images/2026-05-25-retype-for-obsidian-app-installed-plugins.png)

You can also click **Add to Obsidian** directly from the [Community plugin page](https://community.obsidian.md/plugins/retype) in your browser.

![](/blog/images/2026-05-25-retype-for-obsidian-heading.png)

---

## Open the Retype panel

Click the Retype icon in the ribbon, or open the Obsidian command palette and run **Retype: Open Retype panel**.

![](/blog/images/2026-05-25-retype-for-obsidian-app-sidebar-retype-icon.png)

If the [Retype CLI](/guides/cli.md) is not yet installed, the plugin automatically detects and presents an option to install without leaving the Obsidian app.

![](/blog/images/2026-05-25-retype-for-obsidian-app-install-retype.png)

One-click install is available via npm, yarn, or dotnet when any of those are present on your system. See the [Installation guide](/guides/installation.md) for full installation instructions and options.

---

## Start, Stop, and Build

With Retype installed, the panel shows the full set of controls. The plugin will automatically detect if a `retype.yml` file is found within your vault.

If a `retype.yml` project configuration file is not found in your vault, clicking **Start** or **Build** will automatically create one for you.

![](/blog/images/2026-05-25-retype-for-obsidian-app-retype-panel.png)

- **Start** - start the local Retype development server using [`retype start`](/guides/cli.md#retype-start)
- **Stop** - stop the running server using [`retype stop`](/guides/cli.md#retype-stop)
- **Build** - run a one-off build using [`retype build`](/guides/cli.md#retype-build)

Live CLI output streams into the scrollable color-coded console at the bottom of the panel.

---

## Preview your site live

When the Retype server starts, the status updates in real time. The panel shows the server as running, and the local URL becomes a clickable link that opens your preview in the browser.

![](/blog/images/2026-05-25-retype-for-obsidian-app-retype-server-running.png)

Write a page in Obsidian, save it, and Retype rebuilds automatically. Reload the browser to see the updated page.

---

## Configure the workflow

Open **Settings → Retype** to adjust the plugin behavior.

![](/blog/images/2026-05-25-retype-for-obsidian-app-retype-settings.png)

**Retype Key**
: Enter your Retype Pro or Community key to unlock Pro features. The key is stored securely in Obsidian's secret storage.

**Debounce delay**
: Control the delay before Retype rebuilds after you save changes. Buffers Obsidian auto-save to avoid rapid rebuilds.

**Open browser automatically**
: Have Retype open your site preview when the server starts.

**Show status bar item**
: Display a compact Retype status indicator at the bottom of the Obsidian window.

---

## Available Commands

![](/blog/images/2026-05-25-retype-for-obsidian-app-obsidian-commands.png)

| Command | Description |
| --- | --- |
| `Retype: Open Retype panel` | Open the Retype sidebar panel |
| `Retype: Start Retype server` | Start the local development server |
| `Retype: Stop Retype server` | Stop the running server |

---

## Source and feedback

**Retype for Obsidian** is the official Retype plugin, published under the [Apache-2.0 license](https://github.com/retypeapp/retype-for-obsidian/blob/main/LICENSE). The source is on :icon-mark-github: GitHub at [retypeapp/retype-for-obsidian](https://github.com/retypeapp/retype-for-obsidian).
