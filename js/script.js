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

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const deleteTask = (index) => {
        tasks.splice(index, 1);
        render();
    };

    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li  ${task.done ? "class=\"list__item list__item--done\"" : "class=\"list__item\"" }>
                    <div><button class="list__button list__button--done js-done"><img src="image/done.png"
                                width="100%"></button>
                    </div>
                    <div>${task.content}</div>
                    <div><button class="list__button list__button--delete js-delete">
                            <img src="image/trash bin.png" width="100%"></button>
                    </div>
                </li>`
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;

        const deleteButtons = document.querySelectorAll(".js-delete");
        deleteButtons.forEach((deleteButton, index) => {
            deleteButton.addEventListener("click", () => {
                deleteTask(index);
            });
        });

        const toogleDoneButtons = document.querySelectorAll(".js-done");
        toogleDoneButtons.forEach((doneButton, index) => {
            doneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent);
        document.querySelector(".js-form").reset();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);


    };

    init();
};