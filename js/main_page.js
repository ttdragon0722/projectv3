$.ajax({
    type: "GET",
    url: "./jsons/link.json",
    data: {},
    dataType: "json",
    success: function (response) {

        // main page menu load
        for (let i = 0; i < response["links"].length; i++) {
            if (response["links"][i]["dropdown"].length) {
                $(".main_wrap_group").append(
                    `<div class="main_wrap">
                        <div class="main_wrap_btn">${response["links"][i]["title"]}<i class="fa-solid fa-caret-down"></i></div>
                        <div class="wrap_dropdown"></div></div>`
                );

                for (let dropI = 0; dropI < response["links"][i]["dropdown"].length; dropI++) {
                    $(".wrap_dropdown").last().append(
                        `<a href="${response["links"][i]["dropdown"][dropI]["link"]}"><div>${response["links"][i]["dropdown"][dropI]["title"]}</div></a>`
                    );
                }


            } else {
                $(".main_wrap_group").append(
                    `<div class="main_wrap"><a href="${response["links"][i]["link"]}"><div class="main_wrap_btn">${response["links"][i]["title"]}</div></a></div>`);
            }
        };
    }
});
