!function(t){t.fn.countTo=function(e){return e=e||{},t(this).each((function(){var n=t.extend({},t.fn.countTo.defaults,{from:t(this).data("from"),to:t(this).data("to"),speed:t(this).data("speed"),refreshInterval:t(this).data("refresh-interval"),decimals:t(this).data("decimals")},e),o=Math.ceil(n.speed/n.refreshInterval),a=(n.to-n.from)/o,r=this,l=t(this),i=0,c=n.from,f=l.data("countTo")||{};function u(t){var e=n.formatter.call(r,t,n);l.html(e)}l.data("countTo",f),f.interval&&clearInterval(f.interval),f.interval=setInterval((function(){i++,u(c+=a),"function"==typeof n.onUpdate&&n.onUpdate.call(r,c);i>=o&&(l.removeData("countTo"),clearInterval(f.interval),c=n.to,"function"==typeof n.onComplete&&n.onComplete.call(r,c))}),n.refreshInterval),u(c)}))},t.fn.countTo.defaults={from:0,to:0,speed:100,refreshInterval:100,decimals:0,formatter:function(t,e){return t.toFixed(e.decimals)},onUpdate:null,onComplete:null}}(jQuery),jQuery((function(t){t(".count-number").data("countToOptions",{formatter:function(t,e){return t.toFixed(e.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g,",")}}),t(".timer").each((function(e){var n=t(this);e=t.extend({},e||{},n.data("countToOptions")||{}),n.countTo(e)}))}));