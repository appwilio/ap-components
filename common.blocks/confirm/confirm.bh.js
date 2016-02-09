module.exports = function(bh){
	bh.match('confirm', function(ctx){
        ctx.tParam('style', ctx.mod('style') || 'error');
		ctx.js(true);
	});
}
