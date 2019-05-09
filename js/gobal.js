/**
 * 全局对象
 */
var gobal = {
    params: {
        windowFullWidth: document.documentElement.clientWidth, // 窗口可视宽度
        windowFullHeight: document.documentElement.clientHeight, // 窗口可视高度
        windowIsXs: false, // 窗口可视宽度小于 786 ?


    },
    utils: {
        // 使用正则获取dom
        getDoms: function(rege) {
            var domAll = document.all,
                domArr = new Array();
            for (var i = 0; i < domAll.length; i++) {
                if (rege.test(domAll[i].id))
                    domArr.push(domAll[i]);
            }
            return domArr;
        }
    },
    events: {
        onresize: [] // 窗口改变事件
    },
    // 子节点数据空间 children data space
    dataSpace: {
        sortItems: [],// 排序集合
        expandItems: []// 扩展集合
    }


};



(function() {
    // 初始计算参数值
    gobal.params.windowIsXs = gobal.params.windowFullWidth < 768;

    // 获取浏览器的可视高度
    var timer;
    window.onresize = function() {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            window.fullWidth = document.documentElement.clientWidth;
            window.fullHeight = document.documentElement.clientHeight;
            for (var i = 0; i < gobal.events.onresize.length; i++) {
                try {
                    typeof gobal.events.onresize[i](window.fullWidth, window.fullHeight);
                } catch (e) {
                    console.error(e);
                }
            }
        }, 50);
    }

    gobal.events.onresize.push(function(width, height) {
        // console.log('width:' + width + 'height:' + height);
        gobal.params.windowFullWidth = width;
        gobal.params.windowFullHeight = height;
        gobal.params.windowIsXs = gobal.params.windowFullWidth < 768;
    });

})();
