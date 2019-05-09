Vue.component('sal-base', {
    data: function() {
        return {
            winIsXs: gobal.params.windowIsXs,
            winHeight: gobal.params.windowFullHeight,
            toolsLayerShow: !gobal.params.windowIsXs,
            layerFixedBtn: false,
            openBtnsBar: true,
            scrollboxHeight: 100,
            btnsMaxHeight: 0,
            collapsecollapseVm: false,
            filterScrollbarVm: {}

        }
    },
    computed: {
        layerFixed: function() {
            return !this.winIsXs && this.layerFixedBtn;
        }
    },
    mounted: function() {
        const _this = this;
        gobal.events.onresize.push(function(width, height) {
            _this.winIsXs = gobal.params.windowIsXs;
            _this.winHeight = gobal.params.windowFullHeight;
            if (_this.toolsLayerShow) {
                _this.refreshScrollBar();
            }
        });

        _this.$nextTick(function() {
            if (_this.collapsecollapseVm)
                _this.btnsMaxHeight = _this.collapsecollapseVm.$el.offsetHeight;
            _this.refreshScrollBar();
        });
    },
    methods: {
        toolsPanelLayerOnblur: function() {
            if (this.layerFixed === false)
                this.toolsLayerShow = false;
        },
        cumputeLayerFormItemBoxHeight: function(vals) {
            this.openBtnsBar = vals.length > 0;
            // console.log(this.openBtnsBar);
            this.refreshScrollBar();
        },
        refreshScrollBar: function() {
            var _this = this;
            if (_this.collapsecollapseVm && _this.collapsecollapseVm.$el.offsetHeight > _this.btnsMaxHeight) {
                _this.btnsMaxHeight = _this.collapsecollapseVm.$el.offsetHeight;
            }
            _this.scrollboxHeight = _this.winHeight - 150 - (_this.openBtnsBar ? _this.btnsMaxHeight :
                50);
            // console.log(_this.winHeight);
            const wrap = _this.filterScrollbarVm.wrap,
                viewer = _this.filterScrollbarVm.$refs.resize;

            if (!wrap) return;
            var height = _this.scrollboxHeight + parseInt(wrap.style.marginRight.substring(0,
                wrap.style.marginRight.length - 2));
            var heightPercentage;
            heightPercentage = ((height * 100) / viewer.clientHeight);
            // console.log('-->' + _this.filterScrollbarVm.sizeHeight);
            setTimeout(function() {
                _this.filterScrollbarVm.sizeHeight = (heightPercentage < 100) ? (
                    heightPercentage + '%') : '';
                // console.log('==>' + _this.filterScrollbarVm.sizeHeight);
            }, 30);
        },
    },
    template: '<div class="sal-base"><slot></slot><transition name="opa"><div class="bg-shade" v-show="!layerFixed && toolsLayerShow && winIsXs" @click="toolsLayerShow=!toolsLayerShow"></div></transition><div>'
});
Vue.component('sal-tools-top', {
    data: function() {
        return {

        }
    },
    computed: {
        widthSub: function() {
            return this.$parent.toolsLayerShow && this.$parent.layerFixed;
        },
        toolsLayerShow: function() {
            return this.$parent.toolsLayerShow;
        }
    },
    methods: {
        layerEvent: function() {
            var _this = this;
            _this.$parent.toolsLayerShow = !_this.$parent.toolsLayerShow;
            _this.$nextTick(function() {
                if (_this.$parent.toolsLayerShow) {
                    _this.$parent.refreshScrollBar();
                }
            });
        }
    },
    template: '<div class="sal-tools-top" :class="{width_sub:widthSub}" @click="$parent.toolsPanelLayerOnblur"><el-row :gutter="2"><slot></slot><el-col :xs="12" :sm="12" :md="16" :lg="20" :xl="22"></el-col><el-col :xs="6" :sm="6" :md="4" :lg="2" :xl="1" style="text-align: center;"><transition name="opa"><el-button size="mini" v-show="!toolsLayerShow " type="primary" @click.stop="layerEvent"><i class="layui_icon layui_icon_shrink_right"></i>更多</el-button></transition></el-col></el-row></div>'
});
Vue.component('sal-tools-top-left', {
    template: '<el-col :xs="6" :sm="6" :md="4" :lg="2" :xl="1" style="text-align: center;"><slot></slot></el-col>'
});
Vue.component('sal-tools-top-center', {
    template: '<el-col :xs="12" :sm="12" :md="16" :lg="20" :xl="22"><slot></slot></el-col>'
});
Vue.component('sal-tools-top-right', {
    template: '<el-col :xs="6" :sm="6" :md="4" :lg="2" :xl="1" style="text-align: center;"><transition name="opa"><el-button size="mini" v-show="!$parent.toolsLayerShow" type="primary"><i class="layui_icon layui_icon_shrink_right"></i>更多</el-button></transition></el-col>'
});
Vue.component('sal-tools-layer', {
    data: function() {
        return {
            myLayerFixedBtn: this.$parent.layerFixedBtn
        };
    },
    props: ['resetShow', 'submitShow'],
    computed: {
        resetDisplay: function() {
            return this.resetShow === false ? 'none' : 'inline-block';
        },
        submitWidth: function() {
            return this.resetShow === false ? '100%' : '50%';
        },
        submitDisplay: function() {
            return this.submitShow === false ? 'none' : 'inline-block';
        }
    },
    methods: {
        switchFixed: function(flag) {
            this.$parent.layerFixedBtn = flag;
        }
    },
    template: '<transition name="tools-panel-layer"><div class="tools-panel-layer" :class="{not_shadow:$parent.layerFixed}" v-show="$parent.toolsLayerShow"><el-row style="height: 40px;"><el-col :span="12" style="text-align: left;padding-left: 10px;"><el-radio-group v-model="myLayerFixedBtn" @change="switchFixed" size="mini" v-if="!$parent.winIsXs"><el-radio-button :label="true">固定</el-radio-button><el-radio-button :label="false">漂浮</el-radio-button></el-radio-group></el-col><el-col :span="12" style="text-align: right;padding-right: 10px;"><el-button size="mini" type="primary" @click="$parent.toolsLayerShow=!$parent.toolsLayerShow"><i class="layui_icon layui_icon_spread_left"></i>收起</el-button></el-col></el-row><slot></slot><div class="filter-btn"><el-button-group style="width: 100%;"><el-button icon="el-icon-refresh" style="width:50%" :style="{display: resetDisplay}" v-on:click="$emit(\'reset-click\')">重置</el-button><el-button type="primary" icon="el-icon-search" :style="{width:submitWidth,display:submitDisplay}" v-on:click="$emit(\'submit-click\')">搜索</el-button></el-button-group></div></div></transition>'
});
Vue.component('sal-tools-layer-btns', {
    mounted: function() {
        const _this = this;
        _this.$parent.$parent.collapsecollapseVm = _this;
    },
    methods: {
        cumputeLayerFormItemBoxHeight: function(vals) {
            this.$parent.$parent.cumputeLayerFormItemBoxHeight(vals);
            // this.openBtnsBar = vals.length > 0;
            // console.log(this.$parent.$parent.openBtnsBar);
            // this.refreshScrollBar();
        }
    },
    template: '<el-collapse ref="collapsecollapse" style="margin: 5px;" value="tools_layer_btns" @change="cumputeLayerFormItemBoxHeight"><el-collapse-item title="功能按钮" name="tools_layer_btns" style="border-bottom: none;"><el-row :gutter="10" style="padding: 0 10px;" id="btns_box"><slot></slot></el-row></el-collapse-item></el-collapse>'
});
Vue.component('sal-tools-layer-btn', {
    template: '<el-col :span="12" style="margin-bottom:10px"><slot></slot></el-col>'
});
Vue.component('sal-tools-layer-from', {
    mounted: function() {
        const _this = this;
        _this.$parent.$parent.filterScrollbarVm = _this.$refs.filterScrollbar;
    },
    template: '<div class="filter-form"><div class="el-collapse-item__header is-active" style="cursor: default;">筛选表单</div><el-scrollbar ref="filterScrollbar" :wrap-style="\'height: \'+$parent.$parent.scrollboxHeight+\'px;\'"><slot></slot></el-scrollbar></div>'
});
Vue.component('sal-body', {
    computed: {
        widthSub: function() {
            return this.$parent.toolsLayerShow && this.$parent.layerFixed;
        }
    },
    template: '<div class="content-body" :class="{width_sub:widthSub}" @click="$parent.toolsPanelLayerOnblur"><slot></slot></div>'
});
Vue.component('sal-table-auto-expands', {
    data: function() {
        return {
            winIsXs: gobal.params.windowIsXs
        }
    },
    computed: {
        owner: function() {
            for (var e = this.$parent; e && !e.tableId;) e = e.$parent;
            return e
        },
        autoExpands: function() {
            if (this.owner.sal && this.owner.sal.autoExpands) {
                return this.owner.sal.autoExpands;
            } else {
                return [];
            }
        }
    },
    created: function() {
        // console.log(this.autoExpands);
        // console.log('==========================');
    },
    mounted: function() {
        const _this = this;
        gobal.events.onresize.push(function(width, height) {
            if (_this.winIsXs !== gobal.params.windowIsXs) {
                if (_this.owner.store.table.$ready) {
                    // console.log('==========================');
                    _this.owner.store.updateColumns(); // hack for dynamics insert column
                    _this.owner.store.scheduleLayout();
                }
            }
        });
    },
    template: '<el-table-column v-if="winIsXs" type="expand"><template v-slot:default="props"><el-form label-position="left" inline class="demo-table-expand"><sal-table-auto-expands-item :ctxdata="props" :auto-expands="autoExpands"></sal-table-auto-expands-item></el-form></template></el-table-column>'
});
Vue.component('sal-table-auto-expands-item', {
    props: ['ctxdata', 'autoExpands'],
    created: function() {
        // console.log(this.autoExpands);
        // console.log(this.ctxdata);
    },
    render: function(h) {
        var _this = this;
        var vnodes = h('div', {}, this.autoExpands.map(function(m) { //_this.ctxdata.row[m.property]
            return h('div', {
                'class': 'el-form-item'
            }, [h('label', {
                'class': 'el-form-item__label'
            }, m.label), h('div', {
                'class': 'el-form-item__content'
            }, [m.renderAutoExpand(h, _this.ctxdata)])]);
        }));

        return vnodes;
    }
});
Vue.component('sal-dialog', {
    props: ['visible', 'closeResetRef', 'title'],
    computed: {
        salDialogWidth: function() {
            return gobal.params.windowIsXs ? '330px' : '660px';
        }
    },
    methods: {
        salDialogClose: function() {
            this.$emit('close');
            if (this.$refs[this.closeResetRef] && this.$refs[this.closeResetRef].resetFields) {
                this.$refs[this.closeResetRef].resetFields();
            }
            if (this.$root.$refs[this.closeResetRef] && this.$root.$refs[this.closeResetRef].resetFields) {
                this.$root.$refs[this.closeResetRef].resetFields();
            }
        }
    },
    template: '<el-dialog :title="title" :visible.sync="visible" custom-class="sal-custom-class" :modal="false" :width="salDialogWidth" top="10vh" @close="salDialogClose">' +
        '<slot name="default"></slot><slot name="footer"><div slot="footer"><el-button size="mini" @click="salDialogClose">取 消</el-button>' +
        '<el-button size="mini" type="primary" @click="$emit(\'submit\')">确 定</el-button></div></slot></el-dialog>'
});
