block('alert').mod('has-icon', true).content()(
    function () {
        var status;

        switch(this.mods.status) {
            case 'error' :
                status = 'info-2';
                break;
            case 'success' :
                status = 'check';
                break;
            default:
                status = 'info';

        }

        return [
            {
                elem : 'aside',
                content : [
                    this.ctx.icon ||
                    {
                        block : 'icon',
                        mods : {
                            font : true,
                            type : status
                        }
                    }
                ]
            },
            applyNext()
        ];
    }
);
