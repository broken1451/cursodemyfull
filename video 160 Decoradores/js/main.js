"use strict";

var clases_1 = ("./clases");
var Main = /** @class */ (function () {
    function Main() {
        console.log("App corriendo");
    }
    Main.prototype.getClaseClases = function () {
        return new clases_1.Clases("rojo", "Manga corta", "cocodrilo", "xl", 45);
    };
    return Main;
}());
var main = new Main();
