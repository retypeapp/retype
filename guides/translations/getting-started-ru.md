---
order: 100
icon: rocket
tags: [guide]
---
# Начало работы

Начало работы с Retype занимает всего несколько секунд, и вы можете начать работать в течение секунд.

Ознакомьтесь с [Быстрым стартом](/README.md#quick-start) для сжатого процесса, или продолжайте здесь с подробными инструкциями.

!!!

Пожалуйста, обратитесь к [Retype CLI](cli.md) для получения полной информации по каждой команде.

!!!

---

## Предварительные требования

Retype устанавливается с использованием [`npm`](https://www.npmjs.com/get-npm), [`yarn`](https://classic.yarnpkg.com/en/docs/install/) или CLI [`dotnet`](https://dotnet.microsoft.com/download/dotnet-core).

Вам нужен только один из трех менеджеров пакетов в качестве предварительного требования, хотя все три также могут быть установлены на вашем компьютере. Это на ваше усмотрение. :raised_hands:

| Менеджер пакетов | Поддерживаемые платформы |
| --- | --- |
| [`npm`](https://www.npmjs.com/get-npm) | [!badge text="Mac" variant="light"] [!badge text="Win" variant="primary"] [!badge text="Linux" variant="warning"]
| [`yarn`](https://classic.yarnpkg.com/en/docs/install/) | [!badge text="Mac" variant="light"] [!badge text="Win" variant="primary"] [!badge text="Linux" variant="warning"]
| [`dotnet`](https://dotnet.microsoft.com/download/dotnet-core) | [!badge text="Mac" variant="light"] [!badge text="Win" variant="primary"] [!badge text="Linux" variant="warning"]

---

## Установка

Для установки Retype достаточно выполнить несколько команд. Выберите команду в зависимости от менеджера пакетов, установленного на вашем компьютере.

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

Вот и все! :tada: Ваш новый веб-сайт Retype должен быть запущен. :tada: