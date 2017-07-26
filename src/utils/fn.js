let getAncestorIds = function(tree, parentIds = [], ret = {}) {
    let currentPids = [].concat(parentIds)
    tree.map(function (x) {
        ret[x.id] = currentPids
        if (undefined !== x.children && x.children.length > 0) {
            let childrenPids = [x.id].concat(currentPids)
            return getAncestorIds(x.children, childrenPids, ret)
        }
    })
    return ret
}

let getDescendantIds = function(tree) {
    let ret = {}
    let ancestorIds = getAncestorIds(tree)
    for (let i in ancestorIds) {
        ancestorIds[i].map(function (x) {
            ret[x] = undefined === ret[x] ? [] : ret[x]
            ret[x] = ret[x].concat([i])
        })
    }
    return ret
}

// element fix: 如果有子级选中，父级就会选中，用于提交到服务端
let getSubmitIds = function (tree, ids = []) {
    let ancestorIds = getAncestorIds(tree)
    let ret = [].concat(ids)
    ids.map(function (x) {
        if (undefined !== ancestorIds[x]) {
            ancestorIds[x].map(function (y) {
                if (!ret.includes(y)) {
                    ret.push(y)
                }
            })
        }
    })
    return ret
}

// element fix: 如果所有子级选中，父级才会选中，用于渲染到客户端
let getRenderIds = function (tree, ids = []) {
    let descendantIds = getDescendantIds(tree)
    return ids.filter(function (x) {
        if (undefined === descendantIds[x]) {
            return true
        }
        return descendantIds[x].every(function (y) {
            return ids.includes(y)
        })
    })
}

// 交换元素位置
let swapArray = function (arr, from, to) {
    let ret = Array.from(arr)
    if (undefined === ret[from] || undefined === ret[to]) {
        return ret
    }
    ret[to] = ret.splice(from, 1, ret[to])[0];
    return ret;
}

//数组去重
let deleteRepeat = function (arr){
    let res = [];
    let json = {};
    for(let i = 0; i < arr.length; i++){
        if(!json[arr[i]]){
            res.push(arr[i]);
            json[arr[i]] = 1;
        }
    }
    return res;
}

/**
 * 向提交接口附加查询条件
 * @param query
 * @param key
 * @param value
 * @param isSearch：是否附加到search字段中
 * @returns {*}
 */
let addQuery = function(query, key, value, isSearch = true) {
    let ret = Object.assign({}, query)
    if (!isSearch) {
        ret[key] = value
        return ret
    }
    let searchStr = undefined === ret.search ? '' : ret.search
    let searchArr = searchStr ? searchStr.split(";") : []
    searchArr.push('' + key + ':' + value)

    ret['search'] = searchArr.join(';')

    return ret
}

export default {getAncestorIds, getDescendantIds, getSubmitIds, getRenderIds, swapArray, deleteRepeat, addQuery}



