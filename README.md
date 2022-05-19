# Flight Tracker
[![Npm package version](https://badgen.net/badge/Angular%20CLI/v13.3.5/red)](https://www.npmjs.com/package/@angular/cli)
[![Npm package version](https://badgen.net/badge/@fortawesome%2Freact-fontawesome/v0.1.18/cyan)](https://www.npmjs.com/package/@fortawesome/react-fontawesome)

## Repülőjáratok lekérdezését szolgáló webalkalmazás

Az alkalmazás segítésével lekérdezhető valós idejű repülőjáratok. Erre egy API weboldal szolgáltató gondoskodik, ami a [https://aviationstack.com/](https://aviationstack.com/)

## Kezelőfelület

A főoldal egyből a repülőjáratok listázására irányít át, ahol látható egy pár repülőjárat.

<img src="https://user-images.githubusercontent.com/24989500/169370240-a530613c-fb42-43f8-b75d-3e79acbae28f.png" width="800">

Lehetőségünk van a CRUD alapműveleteire a repülőjáratokkal. 
Az `airline names` jegyzettömbben található előre kigyűjtött légitársaságok nevei. A létrehozás egy kereső mezővel kezdődik. Az API-on keresztül lekérdezi a beírt paraméternek megfelelő légitársaságot. Majd több azonos légitársaság repülőjáratai közül választhatunk, hogy melyik szeretnénk elmenteni.

Egy replőjárat részletesebb megjelenítésért rá kattintással előjön egy felugró ablak ahol a kiválasztott repülőjárat valós adatai jelennek meg.

<img src="https://user-images.githubusercontent.com/24989500/169369743-304b97ba-18e4-42d9-8617-9c6ce14a6b50.png" width="300">


### Routes
| METHOD | DESCRIPTIONS | URL
| --- | --- | --- |
| LIST | Összes repülőjárat listázása | `/aircrafts`
| CREATE | Új repülőjárat hozzadása | `/aircraft/new`
| READ | ID alapján repülőjárat megjelenítése | `/aircraft/:id`
| UPDATE | ID alapján repülőjárat szerkesztése | `/aircraft/edit/:id`

## Használata

Szükséges egy ingyenes fiók létrehozása az API kulcs miatt [https://aviationstack.com/](https://aviationstack.com/) ezen az oldalon.
Az API kulcsot pedig illesszük be a `plane.component`-nek az `apikey=''` attribútumához.


[Node.js](https://nodejs.org/) telepítés után a projekt könyvtárában egy terminál ablakban az alábbi parancsok kiadásával indítható program.
Első futtatáskor a node modulok telepítése szükséges.
```
npm install
```
Projekt indítása.
```
ng serve
```
Az alkalmazás a [https://localhost:4200](http://localhost:4200/) porton fut.
