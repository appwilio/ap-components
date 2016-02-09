module.exports =  function (bh) {
     bh.match('attach-preview_editable', function (ctx){
         ctx.content({ elem: 'tools'});
     });

     bh.match('attach-preview_editable__tools', function (ctx){
         ctx.applyBase();
         ctx.content([
             ctx.content(),
            {
                mix: {
                    block: 'attach-preview',
                    elem: 'del'
                },
                block: 'button',
                icon: {
                    block: 'icon',
                    mods: {
                        type: 'delete',
                        size: 's',
                        font: true
                    }
                }
            },
            {
                'mix' : {
                    'block' : 'attach-preview',
                    'elem' : 'edit'
                },
                'block' : 'button',
                'icon' : {
                    'block' : 'icon',
                    'mods' : {
                        'type' : 'edit',
                        'size' : 's',
                        'font' : true
                    }
                }
            }
         ], true);
     });
};
