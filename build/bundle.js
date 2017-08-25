/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 5);
console.log(total);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
image.src = _small2.default;
document.body.appendChild(image);

var bigImage = document.createElement('img');
bigImage.src = _big2.default;
document.body.appendChild(bigImage);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ea00de0ae8261d17b08dfdc87beb420c.jpg");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gNzAK/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8AAEQgAyADIAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A5pZc08Se9UlkqQSV6rOu5ZL0wuemai8yk3UrCuSM1MJppakzVJBcDSqvBI7UmakVzwCAR6Yq0h3HxqRj3q/bnBqkpzjjpwKtwnFNxLTNa3kxitCKfpzWNC+KtpJWUoFGr5vvUTSmq6ydKPM5604RsSW45zSvPgVUEgHWkZwRXdFGiY97nAOaqSvvzSyZIqHBFbIq5BIKpyrgmrzCq8qZraLIcjOkWoJQjAjZgdsVoPFxVaSKtkzGTM2Rc8DO3sDUE0fFaLw1Xmjx2rVMwZlOmKKsyR80VRBZV6kV6qq1SK1fM2NywHpd1Q5pwanygSbs0uajFPDDGCKtRFccKetMHWpUq0guSpViM4qBRUyVVjRMtxtVlH96pK2KnRqTiWmXVenFqrK/vTw/FCiJyJd1Lk45zUWeadn0reKFzEgAprDuKaCcYzTlGasHMjK54IpphB9RVxYzil8rJxT5jNyM1oOOKrvbe1bRt+OlRtbZHSrVQzcjEe19BVKaDBPFdI9pweKzp7frkVrGoZ8xz8sB9KK0JoMZ4oroUgMBWqVWqEY7VIO1eDym1yUGng0yMbmxnH1pRVqIrkgNPBqIVItUoiuSpUy9ahWpVq1Em5MtSqKjSpVFOwc49eKmVjUQFSKKdi1MmU1KpqJBU6qaLEyqDlqQLSKhzUyoaaM1UGBakRDmpEiPpUyQ85ouPmERe2KlEfNSJFntU6Q1DYmyuIc9qcIParqw57VOlr7VPMS5GRLb4U8VnTWvXiunltfl6VRmtRzxVwmTc5O5tuDxRWzcWmSeKK6Y1NBXPMFNSq1RrGwxnvUioR2rkUWa86JA2TkipVNQqCO1SCrSDmJQoqQJUanmpVNWkHMPVSKlQGmoamSqsJsclWEFMRQe1WY0pNGUmIqVIqVKkWRUywGpuZ+1sRxpmrKR0scWO1WY4qlsyqVRix5qdI/anpFViOL2qGx0p3GJF7VYSHjpUscVTpFxUtnUpESQ1OkPtU8cOauwW47ispVEhORWiticcVfis89qsw2wB6VejhA7VxVK5F29jGuLT2rNnt9vaupmgB7VnXNrkE4qqVfuF2nZnLXEGc8UVo3MGDRXoRnoO54buwetAc+tQluaQNW/MZxRbWT6U/zPQVUD81Kr807mqLa5UgNjkA8YNSgpVPf0p6tVIFcvLt45FToAe/8AKqKNUyNVBc0Y1PGP5VYjODgkVnI5q3ErFDICuB/tDP5UmjOUjShY9DirkZB6isqOVieWJ+tXldlArNo5ajRoRqpq1HEp7is6GUkitDY0UIkc/ePHvWbR5VbFtWhbUtJb1OluRVSK46VchnrN3Pboq0UTpbn0qzHbE9qbDc+wNaUEyHGVFc9SckaNkMVqfSrsNvgjIqeIxntVtFTGVFcM6rHGLl1GRRY5IqbGKKK5m7nRGKigIB61WmiB4xxVgEE4yMigjIoTsEoqSMS5tBnOBRWhPH1orshVdjm1Wh8tMQDz0IyMU4qViWQ9yRUcJh+UyyHbkZUdfr/OpJL15fl2gBhgZ6fhXqKRpytNArE5wM4qSMlj1qKPzBIYUPLHZx0NSzReTKUJ6KCCvfIq0zRLQlXJXd2xmplVtoODzUQMYgBLjcTjb1I/zmpCyRySIpLY4U578f8A161TJZMjcZ7VKhzUQWQNiRTtXjgVKjB2EcYyScKfUVqjNlqIFiTnA9anBKOVJ6VTiPzbWIVuBg1OPlIAIJ6ZB4NHUylqX4nq8H5xms0DZtO4NuA4FSNIynaVIxU8tzlnQc9DUjuQnTrVn7VJKAHdmA6AngVjRMTk56DNXInP4VLghQwlODulqa0L1eiesiKXGM1chmzWUonUrm1A3vV+CTBrGhlq7FLXPONy7G7byitGFx0rBt5uRUGq+NtB8PHy9Rv1SbGfJQF3/IdPxrz6tN30CN1LQofFLxpceFtMgttPcJe3pbD4yY0HUj3yRj8a8r074h67ZMWa+mmZupkcsT+dQ/ELxXB4s8R/bbTzRbRRLFGJBg8ZJOM+pNcvkEcZz3rtw3JTjytX7noKOh0F54x1e41RdRivpobhTkMjkf8A669y8BeL/wDhLPDouZQqXkDeXcKvAz2YexH65r5sOa9Q+CguFuNWlG4QbI1PoWyf5DP50sW41Y7WaMar5IOR69cSFVz2NFZ1xccYznFFc0KWhxxu1dnzRJFumAhBIKA8Hrxz/WnRyZmExXbGOi4zj2qtC2xvmZlDDgjsP85qVZVQsgk3KM/w9fSuiM9LnaTQt5U25zgrzwce/FSfasgkoGJUryOg9veqLSeY27p0HTtVmIiOMTKCWTHXoevv7Vqp3HrbQtq8U4WJgEZVwvHv3P0olYwTeVvVgh6r0NVZbhJpmkGAG6jpimq4cuXOOM8Ct4yViFF7s1oLowzLcSSBmU52kdRUkTeaEIbadxxk/dFZMQLCMZ4dtoP+frVgygTPEJCE34PuB7VtFilTNk70MTFDucbi/XcPb6YNSfbRMyzRwriPkqw+XJJP5Vl3EsiqWDFok+SM7uBz2/I/nSQS/u9xcqwBY7h19MVokmRydzftXDiO18wrKzgkdQOmP5mnSXcikJgYO5BxyeevNYENwwdpi21gCw96tR37ztEUQBwqoo7DHer5dQ5bI6S3CI8lvMCrIBkjG1QTgk+/Ip9usckEqDe0iYdGXlSvT/CsK01CZlkmdVnZlKu0hyQOOR3yKmtNR8qOcxytHLIAnHde/wDSp5GHKjoLYr5jRXBKFMjpkitP7OYPKJzh1VifqM1zVtqUiRhYZPMRsOyleSQOffufwroxdNfuYQ8aFlR0UDCjjkA/jWFRNMnlVi7GMsxQ5CjNTwy1mR30QV2jlB2ERvs7+9SQ3kcrsRlVUDOays+ombsM2O9Z+s+E9D8SP5t/bEXGMefE218fyP4g09LoK2cjDLgflVuOTAJDA9uDWEoC1WqPDPFejQ6B4iudOt7jz4oyCrH7wBGcH35rIHTNeq/Erw/BdaUdWhjiiuYGzKwABlU4HJHUg4x+NeWGPYgJOc9vT6+9ZxTUjthLmjcGxXsfwvubGLwl5FvMrXPms9yndSThfwwBXjJI3cdK2vCmuJoWvRXkzyrBtZZVQZ3Ag4GPrg1U5Rk9SakOaNj3SefPeisW01qx1SHzbK6jmXAyFPK/UdRRW0YqxzbHg6kvgE9BxSDrS7HTIYFWHBBpE25+Yke9efytWudNyQ7/AClyflycCnuSmFDZyoz/ADqHzG4BOQOgNBbJJAwKtTQ02TOUwoAIYD5s+tKG35Zj061EMueOtPDL5e0ZDE9fauiLe47kxdRteJiCvX1z60+K42yMZBv3jnJ7+tVBlc07dweea2hPuBY818csSuemeKuWdsuoRyhZMTxruCk8MPas+NVcYZ9hz949AO9TW10LOdJoWyyN1PRh9PcVUpN7OxUXFPVE4kk2rGRgBSBn+LvTorgQuQQGUgjr+tF9JBPKXtB98b2B/h4qnG4VgZFLKDkjOMiuiFVOJMoJNo1Ub7LIpl+aJhnjv9KJZ1iuNoLMmflbpkdjVWyuI5IfslwcJjKP/cP+FQSSbzgOGCfLnPWtadW6s9xTprdbG6ZAJA0b5iTpIPf19+1WnvyZIZFdlkjAJ4wAw9PyFYME01rE68jfzj1FOlnLFChIyucZzg1stdzFx1N2zu5m8x4pQm0ZYBsHHv61rpqDidmRijLyVHIKn+lcWtw0RLqcHHHvmprPU7qCTfFMyP8A3lNEqdzJxZ3R1hZp1RUcxJ0OeRV+PU7VhLFFcHemCD0DAda4mDUR9pRvoWCMOPXipkv3tb3yH4klG5Y2U4YHpiuedOEdG7GbjJ3aVzU8ca/NBo1uLS8eGWSbJVHw20A56dskV5pJK8rl5GLMTkk1c1rUW1LUGlxtRflRQeABWfXiV6ic3y7HfSTjBJjs0UmaKxUrmhNb3M9rMs1vM8Ui9GRsGioc0VrGo49SbJjUYHhicY7DPNKQCoKjkcHnqaSExLLiTDKcjOSB9en9KapHOSBWEal0lIzF56YqeFP3gVgB9c4/SlhWCZSpcxyDJBY/K3Gce3p+NNLW5kjI3hcDfzz74reDS1uMavp3pSCBU5tfmykgZM8NjqKU2bkffGK3U4cm+poqNR7IrKe5NANb2h+E21oyJHqEUUqc7GQkkeoqC60EWFy9vdTTpJH1HkAjHrnd0rFVVew/Y1Oxmof4QuXJG3v+GPeogSvzA8g1fnsrdFXyrmVnLAAGED9d1OjsIJJcS3LwqfvOYs4/8erWf7x2jqCpzW6HifzIlOTgjpjioJCuDx+lW20i0QnytU8xAOMwspz+BNUpYUEgQSsBzhgv3vTqfwqtVDXft1OiU5W1RFuJ4oJLHrntVhLSMj5p3HX/AJZjPf3+n501raEciWUjt+6H/wAVXTGeiOXkm+gnnOFRGJIXpzToJ2jmV+Tg5xmla2Xy1dnmIJKqRGDnH/AvcUgitVQ+ZPMr5AVRCDu9ed1bqst3sS4SXQUI7j5WVjjO0NzUlrdPBKrJIyHuQcfnV3StAm1UhrGG8uFVuSkIA+m7dgHmtYeDljmcXttqNmONmU8wv+QreFTmvZjVGUjFeVYrkyIV8tmJUqePpWlqMMml2i6pvQM6eXHHvBYZBG7Gc4x7VnS6ZFHM0G66yrcoYgCPwzn9KzL+a6Saa3d5ViZ93lsTg4zjj2yfzrz8yU1yto3w8nh4SVtWVM0U3NGa8a+pkOozSZpM072EOzRTc0U7gdJN4QjtV33N9FGm0Etk8E9ulV/7E03IT+0lX/baJx/TFTDxRrkaC3uILe8HQeZEGJ/75PNNk8Q3rZP9jW6sepETf40QjFp3Rq3DsPPhMlFkimhljI4ZHPze/es+fSlhZyVkZVbH7vnH14qf+3dWuAyJJDaKi84AXA9Bnn8qghvUVY1ld2CvlyD8zDPPJ/r60QcXo0D5Hsj0PSvDnhSXR7OeUTj7Q4TmfGxuhGcdAf0rqrT4a+Grchmt5ZvZ5jj9K4LQZxHFe6aYZIvPhaWyE7hj5m3nBAAweOPpWtpc3ibTrAeT4hsRMrkC2llEiFcevOO/QiuiNHfXb5/kbqpZKx2zeGvDujQtfQaTEJIuVK7iSTxjv61Tms/D2uyR/btJhcgYBMmdoP0rm5/HniWG3khvNHsbhWUjzLe7UfjjJrzeKdrW+jZ7UnZIDsyBnBzjNdeHwcaiblKzW2jM51klZo9wk+HHhZipXTimw5AWZ8Z+ma5fxV8OBDp80+jokhjG/YxIkwOoBJwfpgfWkb4t38igQaFCrY6zXqgf0qpL4q1nX5fst/r2naPbkZkW3YPuU9twJJPXI46jrWdPD1oS5rNfeHtYtWMHQrdpibPVNLkjizze7djRDHA9GB6Yxnpg1H4j8NXWh3sZWIT28hK+YqkcccEdjXfXGu+ErSwtorfUYJprfo3QMezHA5x2H09Kg1LxP4O1Pa17fuzoCo2LJtIPqMYPsavlqznz+zf3BzRUeXmPM7iG5tk8spiF/uyGPlefpzVZZ5JCwCIxHBCp09wfX2rU8QtpiBZNK1gzKrf6tomQqO2CRzWFFcRICCw+brhe9VKXLLlldeuhi5JPRmrZeZLIYTFJN5gDIVjPOB1I+lWkSxvIsyL5Plk4ZR8pI6/Kc/p+Vc+LiKIIAS5Q98jNAuIdzli5DNuAHakq6S5br7xcxsWnjDUdJ0u40uxKLDLL5izLkOh46HPHQVfsviP4qt2WFplvMDGyaIMT+XNczbSRC7SRVJRTllKggj0wetaGoajpTKHi0jbKzsSWncgZ6YAPH45rjVOag59O/QOa/U0/EHic+JBCNT06W0kgUqHhTcSOww2CBn3rB1i9t7y4iNsZtkcQQ+cqg55z93tTU1u9gTbbXd3D/u3DAflVa5vLm8YNcTySsO7sSa55VG1a4OVyLNFJmjNZpkXFzRSZoobC4uaKSiquFxfNbOSSfxpN7HvSbjRuNLn8yRd3tSZPrRuNIOvNTKXMMes0iDCuwB5IzwaX7RKf4qjNHNXCvVpq0JNegmk9x/nyf3qPOk/vmmYPpS7TV+3xL+0/vYrId5sn98/nSea/98/nSbTRtNJzr9ZP7x2Qb2/vH86NxPegKPUUbR6ipftHu/xDQQ570ZpePrQcelZteYxM0UUGkwDNFFFK4BS8d6SihMBTjtRSUU7gFLSUUXAWikoqriCiiisxhRRRQAZPrRk+tFFO7AMn1oyfWiii7AKKKKQBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUU0AUUUUgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKpAf/Z"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);