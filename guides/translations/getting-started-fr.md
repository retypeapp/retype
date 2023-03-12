---
order: 100
icon: rocket
tags: [guide]
---
# Pour commencer

Démarrer avec Retype est super rapide et vous pouvez être opérationnel en quelques secondes.

Consultez le [Démarrage rapide](/README.md#quick-start) pour le processus condensé ou continuez ici avec les instructions détaillées.

!!!

Veuillez consulter la [Retype CLI](cli.md) pour obtenir tous les détails sur chaque commande.

!!!

---

## Prérequis

Retype est installé à l'aide de [`npm`](https://www.npmjs.com/get-npm), [`yarn`](https://classic.yarnpkg.com/en/docs/install/) ou la CLI [`dotnet`](https://dotnet.microsoft.com/download/dotnet-core).

Vous n'avez besoin que d'un de ces trois gestionnaires de paquets en tant que prérequis, bien que les trois puissent être installés sur votre ordinateur également. C'est à vous de décider. :raised_hands:

| Gestionnaire de paquets | Plateformes prises en charge |
| --- | --- |
| [`npm`](https://www.npmjs.com/get-npm) | [!badge text="Mac" variant="light"] [!badge text="Win" variant="primary"] [!badge text="Linux" variant="warning"]
| [`yarn`](https://classic.yarnpkg.com/en/docs/install/) | [!badge text="Mac" variant="light"] [!badge text="Win" variant="primary"] [!badge text="Linux" variant="warning"]
| [`dotnet`](https://dotnet.microsoft.com/download/dotnet-core) | [!badge text="Mac" variant="light"] [!badge text="Win" variant="primary"] [!badge text="Linux" variant="warning"]

---

## Installer

Il suffit de quelques secondes pour installer Retype en utilisant l'une des commandes suivantes. Choisissez la commande en fonction d'un gestionnaire de paquets que vous avez installé sur votre ordinateur.

+++ npm
```
npm install retypeapp --global
retype watch
```
+++ yarn
```
yarn global add retypeapp
retype watch
```
+++ dotnet
```
dotnet tool install retypeapp --global
retype watch
```
+++

C'est tout! :tada: Votre nouveau site Web Retype devrait être opérationnel. :tada:

!!!

Si vous avez déjà installé la CLI `dotnet` sur votre machine, l'installation à l'aide de `dotnet tool install retypeapp --global` sera l'option la plus rapide, mais toutes les options devraient s'installer en quelques secondes. Ils produisent tous le même résultat et s'exécutent avec les mêmes performances. La taille du package `dotnet` est la plus petite.

!!!