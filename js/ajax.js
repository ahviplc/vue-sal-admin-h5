var ajax = {
    // Ajax发送get请求
    get: function(url, params, callback, dataType) {
        jQuery.get(url, this.serialize(params), callback, dataType || 'json');
    },

    // Ajax发送post请求
    post: function(url, params, callback, dataType) {
        jQuery.post(url, this.serialize(params), callback, dataType || 'json');
    },

    // Ajax发送put请求
    put: function(url, params, callback, dataType) {
        var paramStr = this.serialize(params);
        if (paramStr.length > 0) {
            paramStr += '&_method=put';
        } else {
            paramStr = '_method=put';
        }
        jQuery.post(url, paramStr, callback, dataType || 'json');
    },
    // Ajax发送delete请求
    del: function(url, params, callback, dataType) {
        var paramStr = this.serialize(params);
        if (paramStr.length > 0) {
            paramStr += '&_method=delete';
        } else {
            paramStr = '_method=delete';
        }
        jQuery.post(url, paramStr, callback, dataType || 'json');
    },
    // 序列化对象 主调用方法，不支持序列化 [{one: 'one'},{two: 'two'}] 这种数组对象格式
    serialize: function(obj) {
        if (obj === undefined || obj === null)
            return '';
        var type = typeof obj;
        if (type === "function")
            return '';
        if (type === "string" || type === "number" || type === "boolean")
            return obj;
        if (type === "object") {
            var keys = Object.keys(obj);
            var resultArr = [];
            for (var i = 0; i < keys.length; i++) {
                this.toKeyValString(keys[i], obj[keys[i]], resultArr);
            }
        }
        return resultArr.join('&');
    },
    // 序列化对象 - 子方法
    toKeyValString: function(key, val, resultArr) {
        if (val === undefined || val === null)
            return;
        var type = typeof val;
        if (type === "string" || type === "number" || type === "boolean") {
            resultArr.push(key + '=' + val);
            return;
        }
        if (type === "object") {
            if (Array.isArray(val)) {
                resultArr.push(key + '=' + val.join(','));
            } else {
                var keys = Object.keys(val);
                for (var i = 0; i < keys.length; i++) {
                    this.toKeyValString(key + '.' + keys[i], val[keys[i]], resultArr);
                }
            }
        }
    }
};
