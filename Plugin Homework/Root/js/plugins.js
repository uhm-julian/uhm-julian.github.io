$(function () {
	console.log('jQuery Started');

	$(".shuffle-one").shuffleImages({
		trigger: "imageHover", // Choose which type of trigger you want here. Available options are "imageMouseMove", "imageHover", "documentMouseMove", and "documentScroll". "imageMouseMove" will trigger when your mouse over the image and move your cursor. "imageHover" will trigger when you mouse over without moving your cursor. "documentMouseMove" will trigger when cursor is being moved anywhere on the page. "documentScroll" will trigger when you scroll the page. The default value is "imageMouseMove"
		triggerTarget: false, // For "imageMouseMove", and "imageHover" only, you can set which element to trigger the image shuffle when mouse over. For example, if you want a container ".main" to trigger an image shuffle instead of the image itself, put $(".main") for this option. Default value is false.
		mouseMoveTrigger: 200, // For "imageMouseMove" only, you can set how many pixels you have to move in order to trigger one image shuffle. The lower the faster. The default value is 50.
		hoverTrigger: 50, // For "imageHover" only, you can set how long you have to hover the image until it shuffles to other images. The option accepts milliseconds without unit. The default value is 200.
		scrollTrigger: 100, // For "documentScroll" only, you can set how many pixels you have to scroll to see the image shuffle. The default value is 100.
		target: "> img" // In case you have a complete HTML structure, you can set your own custom selector to your images here. The default value is "> img" which means images that are directly under the "shuffle-me" will be used to shuffle.
	});

	$(".shuffle-two").shuffleImages({
		trigger: "imageMouseMove", // Choose which type of trigger you want here. Available options are "imageMouseMove", "imageHover", "documentMouseMove", and "documentScroll". "imageMouseMove" will trigger when your mouse over the image and move your cursor. "imageHover" will trigger when you mouse over without moving your cursor. "documentMouseMove" will trigger when cursor is being moved anywhere on the page. "documentScroll" will trigger when you scroll the page. The default value is "imageMouseMove"
		triggerTarget: false, // For "imageMouseMove", and "imageHover" only, you can set which element to trigger the image shuffle when mouse over. For example, if you want a container ".main" to trigger an image shuffle instead of the image itself, put $(".main") for this option. Default value is false.
		mouseMoveTrigger: 200, // For "imageMouseMove" only, you can set how many pixels you have to move in order to trigger one image shuffle. The lower the faster. The default value is 50.
		hoverTrigger: 50, // For "imageHover" only, you can set how long you have to hover the image until it shuffles to other images. The option accepts milliseconds without unit. The default value is 200.
		scrollTrigger: 100, // For "documentScroll" only, you can set how many pixels you have to scroll to see the image shuffle. The default value is 100.
		target: "> img" // In case you have a complete HTML structure, you can set your own custom selector to your images here. The default value is "> img" which means images that are directly under the "shuffle-me" will be used to shuffle.
	});

	$(".shuffle-three").shuffleImages({
		trigger: "documentScroll", // Choose which type of trigger you want here. Available options are "imageMouseMove", "imageHover", "documentMouseMove", and "documentScroll". "imageMouseMove" will trigger when your mouse over the image and move your cursor. "imageHover" will trigger when you mouse over without moving your cursor. "documentMouseMove" will trigger when cursor is being moved anywhere on the page. "documentScroll" will trigger when you scroll the page. The default value is "imageMouseMove"
		triggerTarget: false, // For "imageMouseMove", and "imageHover" only, you can set which element to trigger the image shuffle when mouse over. For example, if you want a container ".main" to trigger an image shuffle instead of the image itself, put $(".main") for this option. Default value is false.
		mouseMoveTrigger: 200, // For "imageMouseMove" only, you can set how many pixels you have to move in order to trigger one image shuffle. The lower the faster. The default value is 50.
		hoverTrigger: 50, // For "imageHover" only, you can set how long you have to hover the image until it shuffles to other images. The option accepts milliseconds without unit. The default value is 200.
		scrollTrigger: 50, // For "documentScroll" only, you can set how many pixels you have to scroll to see the image shuffle. The default value is 100.
		target: "> img" // In case you have a complete HTML structure, you can set your own custom selector to your images here. The default value is "> img" which means images that are directly under the "shuffle-me" will be used to shuffle.
	});
});