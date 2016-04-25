block('confirm')(
	def()(function () {
        this.ctx.style = this.mods.style || 'error';
        return applyNext();
	}),
	js()(true)
);
