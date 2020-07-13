{
    const tasks = [{
            content: "zjeść pierogi",
            done: false,
        },
        {
            content: "napić się",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="list__item ">
                    <div><button class="list__button list__button--done"><img src="image/done.png"
                                width="100%"></button>
                    </div>
                    <div>${task.content}</div>
                    <div><button class="list__button list__button--delete">
                            <img src="image/trash bin.png" width="100%"></button>
                    </div>
                </li>`

        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();
    };

    init();
}