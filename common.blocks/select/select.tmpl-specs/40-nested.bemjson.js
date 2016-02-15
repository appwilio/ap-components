({
	block : 'select',
	mods : {
		nested : true,
		size : 'm',
		mode : 'radio',
		theme : 'vr'
	},
	name : 'custom-name',
	options : [
		{
			val : 1,
			text : 'simple option'
		},
		{
			option : {
				val : 2,
				text : 'option with group',
			},
			group : [
				{
					val : 3,
					text : 'nested option 1'
				},
			]
		},
		{
			val : 1,
			text : 'simple option'
		},
	]
})
