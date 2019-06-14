var api = {
    // 1.提示框
    showMsgByObj: function({
        type,
        code,
        msg
    }) {
        // 传入对象提示消息
        this.showMsg(type, code, msg);
    },
    showMsg: function(type, code, msg) {
        // 传入参数显示消息
    },
    showMsgByHtml: function(title, html) {
        // 提示HTML内容
    },
    // 2.弹出窗
    // 3.子页面参数
    getTabParams: function(tabKey) { // 子页面的Key传进来

    },
    setTabParams: function(tabKey, params) { // 子页面的Key和params对象传进来

    },
    // 4.tabs操作
    jumpTabByObj: function({
        id,
        title,
        url,
        icon
    }) {
        jumpTab(id, title, url, icon);
    },
    jumpTab: function(id, title, url, icon) {

    },
    tabCloseOrCallBack: function(tab, chain) {
        if (tab) {
            if (typeof chain === 'undefined') { // 传个空的防止出现 undefined 
                chain = new SalChain([], null);
            }
            var cType = typeof tab.callback;
            if (cType === 'function') {
                tab.callback(tab, chain);
            } else {
                this.closeTab(tab);
                chain.next();
            }
        }
    },
    closeTab: function(tab) {

    },
    // 5.全屏loading遮罩
    openLoading: function(time) { // 打开遮罩,传入自动取消时间

    },
    closeLoading: function() { // 手动关闭遮罩

    },
    // 6.检查是否拥有资源，本质上是从menuArr中查找出来
    cr: function(key) { // Check Resource 的简写

    },
    getCurrTabRes: function(iframWindow) { // 获取当前tab页对应的资源

    }
};

var homeTab = {
    key: 'HOME',
    name: 'HOME',
    title: '',
    show: true,
    url: 'home.html',
    icon: 'layui_icon font-size16 layui_icon_home',
    notClosable: true
};
new Vue({
    el: '#app',
    data: function() {
        return {
            isCollapse: false,
            gobalParams: gobal.params,
            loadding: {},

            menuDefaultActive: 'useDocTemplate',
            menuArr: [{
                    key: 'usedoc',
                    title: '使用文档',
                    show: true,
                    url: 'usedoc.html',
                    icon: 'el-icon-document',
                    children: [{
                            key: 'useDocBasic',
                            title: '基础说明',
                            show: true,
                            url: 'useDocBasic.html',
                            icon: 'el-icon-tickets'
                        }, {
                            key: 'useDocLeftNav',
                            title: '左侧导航',
                            show: true,
                            url: 'useDocLeftNav.html',
                            icon: 'layui_icon layui_icon_app'
                        },
                        {
                            key: 'useDocShowMsg',
                            title: '提示框',
                            show: true,
                            url: 'useDocShowMsg.html',
                            icon: 'el-icon-news'
                        },
                        {
                            key: 'useDocShade',
                            title: '全屏遮罩',
                            show: true,
                            url: 'useDocShade.html',
                            icon: 'layui_icon layui_icon_menu_fill'
                        },
                        {
                            key: 'useDocTabs',
                            title: 'tabs交互',
                            show: true,
                            url: 'useDocTabs.html',
                            icon: 'layui_icon layui_icon_tabs'
                        },
                        {
                            key: 'useDocAjax',
                            title: 'Ajax',
                            show: true,
                            url: 'useDocAjax.html',
                            icon: 'el-icon-share'
                        },
                        {
                            key: 'useDocAccess',
                            title: '按钮权限控制',
                            show: true,
                            url: 'useDocAccess.html',
                            icon: 'layui_icon layui_icon_auz',
                            children: [{
                                    key: 'tianjia',
                                    title: '添加',
                                    url: 'tianjia.html',
                                    icon: 'el-icon-circle-plus-outline'
                                },
                                {
                                    key: 'xiugai',
                                    title: '修改',
                                    url: 'xiugai.html',
                                    icon: 'el-icon-edit'
                                },
                                {
                                    key: 'shanchu',
                                    title: '删除',
                                    url: 'shanchu.html',
                                    icon: 'el-icon-circle-close-outline'
                                }
                            ]
                        },
                        {
                            key: 'useDocLayout',
                            title: '常规布局',
                            show: true,
                            url: 'useDocLayout.html',
                            icon: 'layui_icon layui_icon_layouts'
                        },
                        {
                            key: 'useDocDataTable',
                            title: '数据表格',
                            show: true,
                            url: 'useDocDataTable.html',
                            icon: 'layui_icon layui_icon_table'
                        }, {
                            key: 'useDocDialog',
                            title: '表单弹窗',
                            show: true,
                            url: 'useDocDialog.html',
                            icon: 'layui_icon layui_icon_layer'
                        },
                        {
                            key: 'useDocTemplate',
                            title: '样板示例',
                            show: true,
                            url: 'useDocTemplate.html',
                            icon: 'layui_icon layui_icon_template'
                        },
                        {
                            key: 'useDocTemplate2',
                            title: '样板示例2',
                            show: true,
                            url: 'useDocTemplate2.html',
                            icon: 'layui_icon layui_icon_template'
                        },
                        {
                            key: 'useDocTemplate3',
                            title: '样板示例3',
                            show: true,
                            url: 'useDocTemplate3.html',
                            icon: 'layui_icon layui_icon_template'
                        }
                    ]
                }, {
                    key: 'gongzuoliucheng',
                    title: '工作流程',
                    show: true,
                    url: 'gongzuoliucheng.html',
                    icon: 'el-icon-date',
                    children: [{
                            key: 'yewudingdan',
                            title: '业务订单',
                            show: true,
                            url: 'yewudingdan.html'
                        },
                        {
                            key: 'shangwudingdan',
                            title: '商务订单',
                            show: true,
                            url: 'shangwudingdan.html'
                        },
                        {
                            key: 'gongchengchuli',
                            title: '工程处理',
                            show: true,
                            url: 'gongchengchuli.html'
                        },
                        {
                            key: 'caigoudingdan',
                            title: '采购订单',
                            show: true,
                            url: 'caigoudingdan.html'
                        },
                        {
                            key: 'ziyuanbaojia',
                            title: '资源报价',
                            show: true,
                            url: 'ziyuanbaojia.html'
                        },
                        {
                            key: 'caigoubaojia',
                            title: '采购报价',
                            show: true,
                            url: 'caigoubaojia.html'
                        },
                        {
                            key: 'gongchengeq',
                            title: '工程EQ',
                            show: true,
                            url: 'gongchengeq.html'
                        },
                        {
                            key: 'jinqijiaofu',
                            title: '近期交付',
                            show: true,
                            url: 'jinqijiaofu.html'
                        },
                        {
                            key: 'shengchanjihua',
                            title: '生产计划',
                            show: true,
                            url: 'shengchanjihua.html'
                        },
                        {
                            key: 'smtliebiao',
                            title: 'smt列表',
                            show: true,
                            url: 'smtliebiao.html'
                        },
                        {
                            key: 'disanjiziyuan',
                            title: '第三级资源',
                            show: true,
                            url: 'disanjiziyuan.html',
                            children: [{
                                    key: 'disanjiziyuan_1',
                                    title: '第三级资源_1',
                                    show: true,
                                    url: 'disanjiziyuan_1.html'
                                },
                                {
                                    key: 'disanjiziyuan_2',
                                    title: '第三级资源_2',
                                    show: true,
                                    url: 'disanjiziyuan_3.html'
                                }
                            ]
                        }
                    ]
                },
                {
                    key: 'pinzhishouhou',
                    title: '品质售后',
                    show: true,
                    url: 'pinzhishouhou.html',
                    icon: 'el-icon-service',
                    children: [{
                            key: 'pinzhiliebiao',
                            title: '品质列表',
                            show: true,
                            url: 'pinzhiliebiao.html'
                        },
                        {
                            key: 'chengrenshuji',
                            title: '承认书集',
                            show: true,
                            url: 'chengrenshuji.html'
                        },
                        {
                            key: 'baofeikoukuan',
                            title: '报废扣款',
                            show: true,
                            url: 'baofeikoukuan.html'
                        },
                        {
                            key: 'baofeixiangqing',
                            title: '报废详情',
                            show: true,
                            url: 'baofeixiangqing.html'
                        }
                    ]
                },
                {
                    key: 'shujuzhongxin',
                    title: '数据中心',
                    show: true,
                    url: 'shujuzhongxin.html',
                    icon: 'el-icon-tickets'
                },
                {
                    key: 'shujufenxi',
                    title: '数据分析',
                    show: true,
                    url: 'shujufenxi.html',
                    icon: 'layui_icon layui_icon_chart_screen'
                },
                {
                    key: 'gerenzhongxin',
                    title: '个人中心',
                    show: true,
                    url: 'gerenzhongxin.html',
                    icon: 'layui_icon layui_icon_friends'
                }
            ],

            tabItems: [homeTab],
            tabActive: homeTab.key,

            tabsPopper: {
                id: homeTab.key,
                isShow: false,
                top: '0px',
                left: '0px'
            },
            tabParams: {}
        }
    },
    created: function() {
        var _this = this;
        // 重写api
        // 1.提示框
        api.showMsg = function(type, code, msg) {
            _this.$notify({
                title: (type === 'success' ? '成功' : type === 'warning' ? '警告' :
                    type === 'info' ? '消息' : '错误') + ':' + code,
                message: msg,
                type: type,
                position: 'bottom-right'
            });
        };
        api.showMsgByHtml = function(title, html) {
            _this.$notify({
                title: title,
                dangerouslyUseHTMLString: true,
                message: html
            });
        };
        // 2.弹出窗----需要固定自定义的,先不做统一接口
        // 3.子页面参数
        api.getTabParams = function(tabKey) { // 子页面的Key传进来
            return _this.tabParams[tabKey];
        };
        api.setTabParams = function(tabKey, params) { // 子页面的Key和params对象传进来
            _this.tabParams[tabKey] = params;
        };
        // 4.tabs操作
        api.jumpTab = function(key, title, url, icon) {
            var activeName = _this.tabActive;
            if (key !== activeName) {
                var tabs = _this.tabItems.filter(function(tab) {
                    return tab.name === key;
                });

                if (tabs.length > 0) {
                    activeName = key;
                } else {
                    _this.tabItems.push({
                        title: title,
                        name: key,
                        url: url,
                        icon: icon
                    });
                    activeName = key;
                }
                _this.tabActive = activeName;

            }
        };
        api.closeTab = function(tab) {
            if (tab) {
                var cType = typeof tab;
                var targetName;
                if (cType === 'string') {
                    targetName = tab;
                } else if (tab.name) {
                    targetName = tab.name;
                } else {
                    return;
                }
                var tabs = _this.tabItems;
                var activeName = _this.tabActive;
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            var nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                    });
                }

                _this.tabActive = activeName;
                _this.tabItems = tabs.filter(tab => tab.name !== targetName);
            }
        };
        // 5.全屏loading遮罩
        api.openLoading = function(time) {
            _this.loading = _this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            if (time)
                setTimeout(function() {
                    _this.loading.close();
                }, time);
        };
        api.closeLoading = function() {
            _this.loading.close();
        };
        // 6.检查是否拥有资源，本质上是从menuArr中查找出来
        api.cr = function(key) { // Check Resource 的简写
            return _this.findMenuObj(key, _this.menuArr);
        };
        api.getCurrTabRes = function(iframWindow) { // 获取当前tab页对应的资源
            var name = iframWindow.name;
            if (name) {
                // iframe_name_xxxx
                var key = name.substring(12);
                return _this.findTab(key, _this.tabItems);
            }
            return false;
        };
        // console.log('-->' + this.gobalParams.windowIsXs);
        // console.log('-->' + this.gobalParams.windowFullWidth);
        // console.log('---->' + this.gobalParams.windowFullHeight);
    },
    watch: {},
    updated: function() {
        var _this = this;
        _this.$nextTick(function() {
            _this.bindTabTilesOncontextmenu();



        });
    },
    methods: {
        hasShowItem: function(arr) {
            if (arr && arr.length > 0) {
                return arr.filter(function(e) {
                    return e.show;
                });
            }
            return [];
        },
        findMenuObj: function(key, arr) {
            if (arr && arr.length > 0) {
                for (var i = 0; i < arr.length; i++) {
                    if (key === arr[i].key) {
                        return arr[i];
                    } else {
                        var result = this.findMenuObj(key, arr[i].children);
                        if (result !== false) {
                            return result;
                        }
                    }
                }
            }
            return false;
        },
        findTab: function(name, arr) {
            if (arr && arr.length > 0) {
                for (var i = 0; i < arr.length; i++) {
                    if (name === arr[i].name) {
                        return arr[i];
                    }
                }
            }
            return false;
        },
        findMenuParent: function(key, arr) {
            if (arr && arr.length > 0) {
                for (var i = 0; i < arr.length; i++) {
                    if (key === arr[i].key) {
                        return true;
                    } else {
                        var result = this.findMenuParent(key, arr[i].children);
                        if (result === true) {
                            return arr[i];
                        } else if (result !== false) {
                            return result;
                        }
                    }
                }
            }
            return false;
        },
        handleSelect: function(key) {
            var curr = this.findMenuObj(key, this.menuArr);
            // console.log(curr);
            if (curr !== false) {
                api.jumpTab(curr.key, curr.title, curr.url, curr.icon);
            }

        },

        bindTabTilesOncontextmenu: function() {
            // 绑定tabs右键菜单
            var _this = this;
            var tabTiles = gobal.utils.getDoms(/^tab-.*/);
            document.onmousedown = function(e) {
                if (e.button === 2 || e.button === 0 || e.button === 1) {
                    _this.tabsPopper.isShow = false;
                }
            };
            for (var i = 0; i < tabTiles.length; i++) {
                var obj = tabTiles[i];
                obj.oncontextmenu = function(e) {
                    _this.tabsPopper.isShow = true;
                    _this.tabsPopper.id = this.getAttribute('id').replace("tab-", "");
                    _this.tabsPopper.top = (e.y - 6) + 'px';
                    _this.tabsPopper.left = ((_this.gobalParams.windowFullWidth - e.x) <
                        110 ? _this.gobalParams.windowFullWidth - 110 :
                        e.x - 6) + 'px';
                    // console.log(_this.tabsPopper);
                    e.preventDefault();
                };
                obj.onblur = function() {
                    _this.tabsPopper.isShow = false;
                }
            }
        },
        tabRefresh: function() {
            this.tabActive = this.tabsPopper.id;
            document.getElementById('iframe_' + this.tabsPopper.id)
                .contentWindow.location.reload(true);
        },
        tabClose: function(targetName) {
            api.tabCloseOrCallBack(this.findTab(targetName, this.tabItems));
            // api.closeTab(targetName);
            //             let tabs = this.tabItems;
            //             let activeName = this.tabActive;
            //             if (activeName === targetName) {
            //                 tabs.forEach((tab, index) => {
            //                     if (tab.name === targetName) {
            //                         let nextTab = tabs[index + 1] || tabs[index - 1];
            //                         if (nextTab) {
            //                             activeName = nextTab.name;
            //                         }
            //                     }
            //                 });
            //             }
            // 
            //             this.tabActive = activeName;
            //             this.tabItems = tabs.filter(tab => tab.name !== targetName);
        },
        tabCloseRight: function() {
            if (this.tabsPopper.id === homeTab.key) {
                this.tabCloseAll();
            } else {
                //this.tabActive = this.tabsPopper.id;
                var tabs = this.tabItems,
                    items = [],
                    size = tabs.length;
                while (--size >= 0) { // 倒叙
                    if (tabs[size].name === this.tabsPopper.id) {
                        break;
                    }
                    items.push(tabs[size]);
                }
                var chain = new SalChain(items, function(tab, index, chain) {
                    api.tabCloseOrCallBack(tab, chain);
                    // chain.next();
                });
                chain.next();
                //this.tabItems = newTabs;
            }
        },
        tabCloseAll: function() {
            var tabs = this.tabItems,
                items = [],
                size = tabs.length;
            while (--size > 0) { // 倒叙
                items.push(tabs[size]);
            }
            var chain = new SalChain(items, function(tab, index, chain) {
                api.tabCloseOrCallBack(tab, chain);
                // chain.next();
            });
            chain.next();
            // this.tabItems = [homeTab];
            // this.tabActive = homeTab.key;
        },
        tabPosition: function() {
            if (this.menuDefaultActive === this.tabsPopper.id) {
                var curr = this.findMenuParent(this.tabsPopper.id, this.menuArr);
                if (curr !== false) {
                    this.$refs.menu.open(curr.key);
                }
            } else {
                this.menuDefaultActive = this.tabsPopper.id;
            }
        }
    },mounted: function () {
        
        this.$nextTick(function () {
            // Code that will run only after the
            // entire view has been rendered
            api.jumpTab('useDocTemplate','样板示例','useDocTemplate.html','layui_icon layui_icon_template');
        })
    }
});
