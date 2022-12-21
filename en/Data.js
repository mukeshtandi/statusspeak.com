function getQueryParam(e){var a=window.location.search.match(new RegExp("(\\?|&)"+e+"(\\[\\])?=([^&]*)"));return!!a&&a[3]};
const name = decodeURIComponent(getQueryParam("n").replace(/-|@|%40|\+|%20/g, " ")),	
	picwtsp = "../wtsp.png",
	fbpic = "../fb.png",
	messengerpic = "../messenger.png",
	fbID = "413498309346615",
	wpbtnName = "Share on Whatsapp",
	FbLinkBlockExtraText = "";

	blankname = "Your Name",
	timeCounterDays = ["Dec 25, 2022", "days", "hours", "min", "sec before"],
	marquee = ['<img src="../side1.png" style="height:30px; width:30px;" /><br />'],
	mainImgIndex = ["width:50%; height:6%;", "wishing1.gif", "width:85%; height:35%;", "christmas2020d.gif"],
	mainImgShare = ["width:50%; height:6%;", "2020wish1.png", "width:  85%; height:35%;", "ch2022c.png"],
	sharingButtonName = ["Share with friends", "Close"],
	sharewpmobi = "🤗😇 Have you seen this??? %0A*" + name + "* sent you a surprise message %0A💁 *Open this*%0A👇👇🏻👇👇 %0A statusspeak.com/wow/?n=",
	sharefbmobi = "https%3A%2F%2Fstatusspeak.com/wow/?n=",
