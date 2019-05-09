/**
 *  链式执行函数对象
 *      items 需要处理的对象的数组
 *      call  需要执行的函数，接收三个参数。call = function(item, index, chain) {}
 *      这个对象用于处理链式执行函数的场景，当call执行完毕时，调用chain.next()函数，则以下一个参数值执行call
 *      使用方式与javaweb 的 filterChain相类似
 */
function SalChain(items, call) {
    this.index = -1;
    this.items = items;
    this.call = call;
}

SalChain.prototype.next = function() {
    if (++this.index < this.items.length) {
        this.call(this.items[this.index], this.index, this);
    }
}

/*  使用实例 */
/*

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <script src="js/sal-chain.js"></script>
    </head>
    <body>
        <script>
            var items = [{
                    key: 'yewudingdan',
                    title: '业务订单',
                    show: true,
                    url: 'yewudingdan.html',
                    callback: function() {}
                },
                {
                    key: 'shangwudingdan',
                    title: '商务订单',
                    show: true,
                    url: 'shangwudingdan.html',
                    callback: [function() {}, function() {}]
                },
                {
                    key: 'gongchengchuli',
                    title: '工程处理',
                    show: true,
                    url: 'gongchengchuli.html'
                }
            ];

            var chain = new SalChain(items, function(item, index, chain) {
                document.write(item.key + '-->' + item.title + '<br/>');
                chain.next();
            });
            chain.next();
        </script>
    </body>
</html>

*/
