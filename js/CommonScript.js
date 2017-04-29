$(".select-datasets-tab a").on('click', function() {
    $("#chartDiv").children().find(".panel").hide();
    $("#chartDiv").children().find(".panel-collapse").removeClass("in");
});
$(".plot_chart").on('click', function(e) {
    e.preventDefault();
    var df;
    var datasetId = $(this).attr("dataset-id");
    if (datasetId == "dataset1") {
        df = df1;
    } else if (datasetId == "dataset2") {
        df = df2;
    } else if (datasetId == "dataset3") {
        df = df3;
    } else if (datasetId == "dataset4") {
        df = df4;
    } else if (datasetId == "dataset5") {
        df = df5;
    }
    var datasetName = $(this).attr("dataset-name");
    var typeOfChart = $("#" + datasetId + " .selectChart").val();
    var divID = getReltedDivID(typeOfChart);
    var getDataFromFilter = getSelectedColumnValues($(this).attr("dataset-id"), typeOfChart, df);
    $(".page-spinner").show();

    $("#chartDiv").find(".chart-div").hide();
    $("#chartDiv").children().find(".panel-collapse").removeClass("in");
    $("#chartDiv #" + divID[0]).parent().parent().show();
    $("#chartDiv #" + divID[0]).parent().show();
    $("#chartDiv").children().find("#" + divID[0]).addClass("in");
    var selectedDatasetName = new SelectDataset1();
    selectedDatasetName.createChart(typeOfChart, datasetName, divID[1], getDataFromFilter);
    setTimeout(function() {
        $(".page-spinner").hide();
    }, 2000);
});

function getReltedDivID(typeOfChart) {
    var divID = [];
    if (typeOfChart == 'Line') {
        divID.push('dataset1LineDiv');
        divID.push('dataset1LineChart');
    } else if (typeOfChart == 'Bar') {
        divID.push('dataset1BarDiv');
        divID.push('dataset1BarChart');
    } else if (typeOfChart == 'Stack') {
        divID.push('dataset1StackDiv');
        divID.push('dataset1StackChart');
    } else if (typeOfChart == 'Pie') {
        divID.push('dataset1PieDiv');
        divID.push('dataset1PieChart');
    } else if (typeOfChart == 'Doughnut') {
        divID.push('dataset1DoughnutDiv');
        divID.push('dataset1DoughnutChart');
    }
    return divID;
}
//function to get the data from selected filter column
function getSelectedColumnValues(datasetId, typeOfChart, df) {
    var datasetID = datasetId;
    var master = [];
    var labelCount = [];
    var labelArray = [];
    var countArray = [];
    var filterNameArray = [];
    var flag = $("#" + datasetID + " .numerical_filter_check").prop("checked");
    var getCondition;
    var getInputVal = $("#" + datasetID + " .numerical_value").val();
    $("#" + datasetID + " .numerical_filter input[type='radio']").each(function() {
        if ($(this).prop("checked") == true) {
            getCondition = $(this).attr("value");
        }
    });

    if (typeOfChart == 'Stack') {
        var maxLength = 0;
        $("#" + datasetID + " .select-options .first_dataset").each(function() {
            var getFilterNam = $(this).attr("filter-name");
            var label = $(this).val();
            var innerArray = [];
            var count = [];

            if (label.length > maxLength) {
                maxLength = label.length;
            }
            filterNameArray.push(getFilterNam);
            for (var i = 0; i < label.length; i++) {
                var dec = new DecoratorFilter(df, getFilterNam, label[i]);
                if (flag) {
                    var dec = new Range(dec, getInputVal, getCondition, getFilterNam);
                }
                var value = dec.getFiltered().count();
                count.push(value);
            }
            for (var i = 0; i < label.length; i++) {
                innerArray.push([]);
                innerArray[i].push(label[i]);
                innerArray[i].push(count[i]);
            }
            master.push(innerArray);
        });
        return [master, filterNameArray, maxLength];
    } else {
        $("#" + datasetID + " .select-options .first_dataset").each(function() {

            var getFilterNam = $(this).attr("filter-name");
            filterNameArray.push(getFilterNam);
            var label = $(this).val();
            countArray.push(label.length);
            labelArray = labelArray.concat(label);
            for (var i = 0; i < label.length; i++) {
                var dec = new DecoratorFilter(df, getFilterNam, label[i]);
                if (flag) {
                    var dec = new Range(dec, getInputVal, getCondition, getFilterNam);
                }
                var value = dec.getFiltered().count();
                labelCount.push(value);
            }
        });

        return [labelArray, labelCount];
    }




}
$('.datasetFilters ').on('click', 'input[type="checkbox"]', function() {
    var getDatasetVar = $(this).attr("datasetNAme");
    if ($(this).prop("checked") == true) {
        if (getDatasetVar == "dataset1Filters") {
            dataset1Filters.push($(this).parent().text());
        } else if (getDatasetVar == "dataset2Filters") {
            dataset2Filters.push($(this).parent().text());
        } else if (getDatasetVar == "dataset3Filters") {
            dataset3Filters.push($(this).parent().text());
        } else if (getDatasetVar == "dataset4Filters") {
            dataset4Filters.push($(this).parent().text());
        } else if (getDatasetVar == "dataset5Filters") {
            dataset5Filters.push($(this).parent().text());
        }
        //for other GlobalVariables
    } else {
        if (getDatasetVar == "dataset1Filters") {
            dataset1Filters.splice(dataset1Filters.indexOf($(this).parent().text()), 1);
        } else if (getDatasetVar == "dataset2Filters") {
            dataset2Filters.splice(dataset2Filters.indexOf($(this).parent().text()), 1);
        } else if (getDatasetVar == "dataset3Filters") {
            dataset3Filters.splice(dataset3Filters.indexOf($(this).parent().text()), 1);
        } else if (getDatasetVar == "dataset4Filters") {
            dataset4Filters.splice(dataset4Filters.indexOf($(this).parent().text()), 1);
        } else if (getDatasetVar == "dataset5Filters") {
            dataset5Filters.splice(dataset5Filters.indexOf($(this).parent().text()), 1);
        }
    }

});
$(".add_filter").on('click', function(e) {
    e.preventDefault();
    var getDatasetDivId = $(this).attr("dataset-id");
    $(this).parents(".form-group").siblings(".select-options").children().remove();
    //$('.datasetFilters ')
    var filterArray = $(this).attr("filter-array");
    if (filterArray == "dataset1Filters") {
        var length = dataset1Filters.length;
        var ft = new Filter();
        for (var i = 0; i < length; i++) {
            var selectDropdown = '<label for="select" class="col-lg-2 control-label">' + dataset1Filters[i] + '</label>' +
                '<div class="col-lg-10 mrB-20">' +
                '<select multiple class="form-control first_dataset selectDatasetFilter' + i + '" id="" filter-name="' + dataset1Filters[i] + '">' +
                '</select>' +
                '</div>';
            $(this).parents(".form-group").siblings(".select-options").append(selectDropdown);
            var option = ft.generateColumnFilter(dataset1Filters[i], df1);
            $("#" + getDatasetDivId).find(".selectDatasetFilter" + i).append(option);
        }
    } else if (filterArray == "dataset2Filters") {
        var length = dataset2Filters.length;
        var ft = new Filter();
        for (var i = 0; i < length; i++) {
            var selectDropdown = '<label for="select" class="col-lg-2 control-label">' + dataset2Filters[i] + '</label>' +
                '<div class="col-lg-10 mrB-20">' +
                '<select multiple class="form-control first_dataset selectDatasetFilter' + i + '" id="" filter-name="' + dataset2Filters[i] + '">' +
                '</select>' +
                '</div>';
            $(this).parents(".form-group").siblings(".select-options").append(selectDropdown);
            var option = ft.generateColumnFilter(dataset2Filters[i], df2);
            $("#" + getDatasetDivId).find(".selectDatasetFilter" + i).append(option);
        }
    } else if (filterArray == "dataset3Filters") {
        var length = dataset3Filters.length;
        var ft = new Filter();
        for (var i = 0; i < length; i++) {
            var selectDropdown = '<label for="select" class="col-lg-2 control-label">' + dataset3Filters[i] + '</label>' +
                '<div class="col-lg-10 mrB-20">' +
                '<select multiple class="form-control first_dataset selectDatasetFilter' + i + '" id="" filter-name="' + dataset3Filters[i] + '">' +
                '</select>' +
                '</div>';
            $(this).parents(".form-group").siblings(".select-options").append(selectDropdown);
            var option = ft.generateColumnFilter(dataset3Filters[i], df3);
            $("#" + getDatasetDivId).find(".selectDatasetFilter" + i).append(option);
        }
    } else if (filterArray == "dataset4Filters") {
        var length = dataset4Filters.length;
        var ft = new Filter();
        for (var i = 0; i < length; i++) {
            var selectDropdown = '<label for="select" class="col-lg-2 control-label">' + dataset4Filters[i] + '</label>' +
                '<div class="col-lg-10 mrB-20">' +
                '<select multiple class="form-control first_dataset selectDatasetFilter' + i + '" id="" filter-name="' + dataset4Filters[i] + '">' +
                '</select>' +
                '</div>';
            $(this).parents(".form-group").siblings(".select-options").append(selectDropdown);
            var option = ft.generateColumnFilter(dataset4Filters[i], df4);
            $("#" + getDatasetDivId).find(".selectDatasetFilter" + i).append(option);
        }
    } else if (filterArray == "dataset5Filters") {
        var length = dataset5Filters.length;
        var ft = new Filter();
        for (var i = 0; i < length; i++) {
            var selectDropdown = '<label for="select" class="col-lg-2 control-label">' + dataset5Filters[i] + '</label>' +
                '<div class="col-lg-10 mrB-20">' +
                '<select multiple class="form-control first_dataset selectDatasetFilter' + i + '" id="" filter-name="' + dataset5Filters[i] + '">' +
                '</select>' +
                '</div>';
            $(this).parents(".form-group").siblings(".select-options").append(selectDropdown);
            var option = ft.generateColumnFilter(dataset5Filters[i], df5);
            $("#" + getDatasetDivId).find(".selectDatasetFilter" + i).append(option);
        }
    }


});

$(".numerical_filter_check").on('click', function() {
    if ($(this).prop("checked") == true) {
        $(this).closest(".form-group").siblings(".numerical_filter").toggleClass("filter_disabled");
        $(this).closest(".form-group").siblings(".numerical_filter").find(".radio").toggleClass("disabled");
        $(this).closest(".form-group").siblings(".numerical_filter").find("input[type='radio']").attr("disabled", false);
        $(this).closest(".form-group").siblings(".numerical_filter").find(".numerical_value").attr("disabled", false);
    } else {
        $(this).closest(".form-group").siblings(".numerical_filter").toggleClass("filter_disabled");
        $(this).closest(".form-group").siblings(".numerical_filter").find(".radio").toggleClass("disabled");
        $(this).closest(".form-group").siblings(".numerical_filter").find("input[type='radio']").attr("disabled", true);
        $(this).closest(".form-group").siblings(".numerical_filter").find(".numerical_value").attr("disabled", true);
    }
});
