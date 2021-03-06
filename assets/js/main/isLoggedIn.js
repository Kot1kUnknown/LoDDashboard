/**
 * @file isLoggedIn.js
 * @author Sanjay Sunil 
 * @license GPL-3.0
 */

let token;
const status = $("#status");

status.html("Соединение с ботом ...");

token = localStorage.getItem("token");

const client = new Discord.Client({
	messageCacheMaxSize: 5,
	fetchAllMembers: false,
});

client
	.login(token)
	.then(() => {
		status.html("Готово!");
		setTimeout(function () {
			$(".preloader").fadeOut(300, function () {});
		}, 1500);
	})
	.catch((err) => {
		status.html("Ошибка! Неправильный токен!");
		location.replace("login.html");
	});
