import React from "react";
import QueryTask from "esri/tasks/QueryTask";
import Query from "esri/tasks/support/Query";

export function query(paras) {
    let data = [];
    const {url, selectedField, value, emitter} = paras;
    let queryTask = new QueryTask({
        url: url
    });
    let query = new Query();
    query.returnGeometry = true;
    query.outFields = ["*"];
    query.where = selectedField + " like '%" + value + "%'";
    queryTask.execute(query).then(function (results) {
        results.features.forEach(graphic => {
            data.push(graphic.attributes);
        });
        emitter.emit('GotResultData', data);
    });
}

export default query;
