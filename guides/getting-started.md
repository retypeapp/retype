---
order: 100
icon: rocket
tags: [guide]
---
# Getting Started

Getting started with Retype is super quick and you can be up and running within seconds.

Check out the [Quick start](/README.md#quick-start) for the condensed process or continue here with the detailed instructions.

!!!
Please see the [Retype CLI](cli.md) for full details on each command.
!!!

---

## Prerequisites

Retype is installed using either [`npm`](https://www.npmjs.com/get-npm), [`yarn`](https://classic.yarnpkg.com/en/docs/install/), or the [`dotnet`](https://dotnet.microsoft.com/download/dotnet-core) CLI.

You only need one of those three package managers as a prerequisite, although all three could be installed on your computer too. It's up to you. :raised_hands:

| Package Manager | Supported Platforms |
| --- | --- |
| [`npm`](https://www.npmjs.com/get-npm) | [!badge text="Mac" variant="light"] [!badge text="Win" variant="primary"] [!badge text="Linux" variant="dark"]
| [`yarn`](https://classic.yarnpkg.com/en/docs/install/) | [!badge text="Mac" variant="light"] [!badge text="Win" variant="primary"] [!badge text="Linux" variant="dark"]
| [`dotnet`](https://dotnet.microsoft.com/download/dotnet-core) | [!badge text="Mac" variant="light"] [!badge text="Win" variant="primary"] [!badge text="Linux" variant="dark"]

---

## Install

It takes just a few seconds to install Retype using any of the following commands. Choose the command based on a package manager you have installed on your computer.

+++ npm
```
npm install retypeapp --global
retype start
```
+++ yarn
```
yarn global add retypeapp
retype start
```
+++ dotnet
```
dotnet tool install retypeapp --global
retype start
```
+++

That's it! :tada: Your new Retype website should be up and running. :tada:

!!!
If you already have the `dotnet` CLI installed on your machine, installing using `dotnet tool install retypeapp --global` will be the fastest option, but any of the options should install within seconds. They all produce the same result and run with the same performance. The `dotnet` package size is the smallest.
!!!

---

## Update

Update to the latest release of Retype using one of the following commands for the package manager that you initially installed Retype with. For instance, if you used `npm` to install Retype, run the `npm` update command to update Retype locally.

+++ npm
```
npm update retypeapp --global
```
+++ yarn
```
yarn global upgrade retypeapp
```
+++ dotnet
```
dotnet tool update retypeapp --global
```
+++

---

## Uninstall

Done with Retype? It's okay, we understand. :cry:

Uninstalling Retype is just as simple as installing. Use the same package manager to uninstall as you did to install. For instance, if you used `npm` to install Retype, run the `npm` uninstall command to remove.

+++ npm
```
npm uninstall retypeapp --global
```
+++ yarn
```
yarn global remove retypeapp
```
+++ dotnet
```
dotnet tool uninstall retypeapp --global
```
+++

All Retype related files and folders within your project can be deleted, such as the **retype.yml** file and the generated `.retype` folder.

---

## Platform specific

The default `retypapp` **NPM** package is a bundle of several platform specific packages. The installer will automatically detect and choose the correct platform package from the bundle during installation.

The bundle provides convenience although at the cost of an increased download size.

The **dotnet** package installer will automatically download the platform specific package.

For **NPM** and **Yarn**, it is possible to install smaller platform specific packages without the bundling. Currently, four separate platforms are supported and can be installed independently from the primary `retypeapp` package.

### :icon-package: macOS

+++ npm
```
npm install retypeapp-darwin-x64 --global
```
+++ yarn
```
yarn global add retypeapp-darwin-x64
```
+++ dotnet
```
dotnet tool install retypeapp --global
```
+++

{.compact}
OS                                    | Version                 | Architectures     |
--------------------------------------|-------------------------|-------------------|
[macOS][macOS]                        | 10.15+                  | x64, Arm64        |

[macOS]: https://support.apple.com/macos

### :icon-package: Windows

+++ npm
```
npm install retypeapp-win-x64 --global
# or
npm install retypeapp-win-x86 --global
```
+++ yarn
```
yarn global add retypeapp-win-x64
# or
yarn global add retypeapp-win-x86
```
+++ dotnet
```
dotnet tool install retypeapp --global
```
+++

{.compact}
OS                                    | Version                 | Architectures     |
--------------------------------------|-------------------------|-------------------|
[Windows 10 Client][Windows-client]   | Version 1607+           | x64, x86, Arm64   |
[Windows 11][Windows-client]          | Version 22000+          | x64, x86, Arm64   |
[Windows Server][Windows-Server]      | 2012+                   | x64, x86          |
[Windows Server Core][Windows-Server] | 2012+                   | x64, x86          |
[Nano Server][Nano-Server]            | Version 1809+           | x64               |

[Windows-client]: https://www.microsoft.com/windows/
[Windows-lifecycle]: https://support.microsoft.com/help/13853/windows-lifecycle-fact-sheet
[win-client-docker]: https://hub.docker.com/_/microsoft-windows
[Windows-Server-lifecycle]: https://learn.microsoft.com/windows-server/get-started/windows-server-release-info
[Nano-Server]: https://learn.microsoft.com/windows-server/get-started/getting-started-with-nano-server
[Windows-Server]: https://learn.microsoft.com/windows-server/

### :icon-package: Linux

+++ npm
```
npm install retypeapp-linux-x64 --global
```
+++ yarn
```
yarn global add retypeapp-darwin-x64
```
+++ dotnet
```
dotnet tool install retypeapp --global
```
+++

{.compact}
OS                                    | Version               | Architectures     |
--------------------------------------|-----------------------|-------------------|
[Alpine Linux][Alpine]                | 3.15+                 | x64, Arm64, Arm32 |
[CentOS Linux][CentOS]                | 7                     | x64               |
[CentOS Stream Linux][CentOS]         | 8                     | x64               |
[Debian][Debian]                      | 10+                   | x64, Arm64, Arm32 |
[Fedora][Fedora]                      | 36+                   | x64               |
[openSUSE][OpenSUSE]                  | 15+                   | x64               |
[Oracle Linux][Oracle-Linux]          | 7+                    | x64               |
[Red Hat Enterprise Linux][RHEL]      | 7+                    | x64, Arm64        |
[SUSE Enterprise Linux (SLES)][SLES]  | 12 SP2+               | x64               |
[Ubuntu][Ubuntu]                      | 18.04+                | x64, Arm64, Arm32 |

[Alpine]: https://alpinelinux.org/
[Alpine-lifecycle]: https://alpinelinux.org/releases/
[CentOS]: https://www.centos.org/
[CentOS-lifecycle]:https://wiki.centos.org/FAQ/General
[CentOS-docker]: https://hub.docker.com/_/centos
[CentOS-pm]: https://learn.microsoft.com/dotnet/core/install/linux-package-manager-centos8
[Debian]: https://www.debian.org/
[Debian-lifecycle]: https://wiki.debian.org/DebianReleases
[Debian-pm]: https://learn.microsoft.com/dotnet/core/install/linux-package-manager-debian10
[Fedora]: https://getfedora.org/
[Fedora-lifecycle]: https://fedoraproject.org/wiki/End_of_life
[Fedora-docker]: https://hub.docker.com/_/fedora
[Fedora-msft-pm]: https://learn.microsoft.com/dotnet/core/install/linux-package-manager-fedora32
[Fedora-pm]: https://fedoraproject.org/wiki/DotNet
[OpenSUSE]: https://opensuse.org/
[OpenSUSE-lifecycle]: https://en.opensuse.org/Lifetime
[OpenSUSE-docker]: https://hub.docker.com/r/opensuse/leap
[OpenSUSE-pm]: https://learn.microsoft.com/dotnet/core/install/linux-package-manager-opensuse15
[Oracle-Linux]: https://www.oracle.com/linux/
[Oracle-Lifecycle]: https://www.oracle.com/a/ocom/docs/elsp-lifetime-069338.pdf
[RHEL]: https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux
[RHEL-lifecycle]: https://access.redhat.com/support/policy/updates/errata/
[RHEL-msft-pm]: https://learn.microsoft.com/dotnet/core/install/linux-package-manager-rhel8
[RHEL-pm]: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/developing_.net_applications_in_rhel_8/using-net-core-on-rhel_gsg#installing-net-core_gsg
[SLES]: https://www.suse.com/products/server/
[SLES-lifecycle]: https://www.suse.com/lifecycle/
[SLES-pm]: https://learn.microsoft.com/dotnet/core/install/linux-package-manager-sles15
[Ubuntu]: https://ubuntu.com/
[Ubuntu-lifecycle]: https://wiki.ubuntu.com/Releases
[Ubuntu-pm]: https://learn.microsoft.com/dotnet/core/install/linux-package-manager-ubuntu-2004
[glibc]: https://www.gnu.org/software/libc/
[musl]: https://musl.libc.org/