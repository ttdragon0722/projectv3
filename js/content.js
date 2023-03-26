$.ajax({
    type: "GET",
    url: "./jsons/link.json",
    data: {},
    dataType: "json",
    success: function (response) {

        // sidebar load 
        for (let i = 0; i < response["links"].length; i++) {
            if (response["links"][i]["dropdown"].length) {
                $(".sidebar_list").append(`<div class="sidebar_item">
                    <button class="sidebar_item_title">
                        ${response["links"][i]["title"]}
                        <i class="fa-solid fa-chevron-down"></i></button>
                    <div class="sidebar_item_dropdown"></div></div>`);

                for (let dropI = 0; dropI < response["links"][i]["dropdown"].length; dropI++) {
                    $(".sidebar_item_dropdown").last().append(`<a href="${response["links"][i]["dropdown"][dropI]["link"]}"><div>${response["links"][i]["dropdown"][dropI]["title"]}</div></a>`);
                }


            } else {
                $(".sidebar_list").append(`<div class="sidebar_item"><a href="${response["links"][i]["link"]}"><div class="sidebar_item_title">${response["links"][i]["title"]}</div></a></div>`);
            }
        };
        $('.sidebar_item_title').click(function (e) {
            if ($(this).siblings('.sidebar_item_dropdown').css('display') === 'none') {
                $(this).siblings('.sidebar_item_dropdown').show();
            } else {
                $(this).siblings('.sidebar_item_dropdown').hide();
            };
        });

    }
});