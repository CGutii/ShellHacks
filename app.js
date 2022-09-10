d3.csv("table.csv").then(function (data) {
    console.log(data);
    var table = data;
    var button = d3.select("#button");
    var form = d3.select("#form");

    button.on("click", runEnter);
    form.on("submit", runEnter);

    function runEnter() {
        d3.select("tbody").html("")
        d3.selectAll("p").classed('noresults', true).html("")
        d3.event.preventDefault();
        var inputElement = d3.select("#user-input");
        var inputValue = inputElement.property("value").toLowerCase();
        console.log(table);
        var filteredData = table.filter(table => table.Team.toLowerCase().includes(inputValue));
        output = _.sortBy(filteredData, 'Team').reverse()
        d3.select("tbody").insert("tr").html("<td>" + (output[0]['Position']) + "</td>"); }
    }

});