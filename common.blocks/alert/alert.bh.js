module.exports = function (bh) {
     bh.match("alert", function (ctx){
         ctx
            .js(true)
            .attr('role', 'alert');
     });
};
