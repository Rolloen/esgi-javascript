"use strict";

function type_check_v1(value, type) {

    if (value === null) {
        return type === "null";
    }

    if (Array.isArray(value)) {
        return type === "array";
    }

    return typeof value === type;
}

function type_check_v2(value, object) {
    // object =  {type: "string", value: "foo"};
    var res = true;

    for (var element in object) {
        if (element === "type") {
            res = res && (typeof value === object[element]);
        } else if (element === "value") {
            res = res && (JSON.stringify(value) === JSON.stringify(object[element]));
        } else if (element === "enum") {
            var x = object[element].findIndex(function (enumValue) {
                if (JSON.stringify(enumValue) === JSON.stringify(value)) {
                    return true;
                } else {
                    return false;
                }
            });
            res = res && (x != -1);
        }
    }
    return res;
}