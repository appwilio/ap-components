block('confirm')(

	def()(function () {
	return applyNext({ style : this.mode.style || 'error' });
	}),

	js()(true)
);
