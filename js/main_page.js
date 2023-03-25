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


        // mobile menu load
        for (let i = 0; i < response["links"].length; i++) {
            if (response["links"][i]["dropdown"].length) {
                $(".mobile_menu_group").append(
                    `<div class="mobile_menu_item"><div class="mobile_dropdown">${response["links"][i]["title"]}<i class="fa-solid fa-chevron-down"></i></div><div class="mobile_dropdown_items"></div></div>`
                );

                for (let dropI = 0; dropI < response["links"][i]["dropdown"].length; dropI++) {
                    $(".mobile_dropdown_items").last().append(
                        `<a href="${response["links"][i]["dropdown"][dropI]["link"]}"><div class="mobile_menu_item">${response["links"][i]["dropdown"][dropI]["title"]}</div></a>`
                    );
                }


            } else {
                $(".mobile_menu_group").append(
                    `<div class="mobile_menu_item"><a class="mobile_menu_link" href="${response["links"][i]["link"]}"><div>${response["links"][i]["title"]}</div></a></div>`);
            }
        };


        $('.mobile_dropdown').click(function (e) {
            e.preventDefault();
            console.log("click");
            if ($(this).siblings('.mobile_dropdown_items').css('display') === 'none') {
                $(this).siblings('.mobile_dropdown_items').show();
            } else {
                $(this).siblings('.mobile_dropdown_items').hide();
            };
        });
    }
});
