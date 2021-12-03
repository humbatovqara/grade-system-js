class UI {
    static addStudentToUI(newStudent) {
        let fullTable = document.querySelector(".fullTable");

        fullTable.innerHTML += `
        <tr>
            <td scope="row"></td>
            <td>${newStudent.fullName}</td>
            <td><a href="#" class="link-primary linkExam" data-bs-toggle="modal"
                    data-bs-target="#examModal">İmtahan</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        `
    }

    static loadAllStudents(students) {
        let data = "";
        let fullTable = document.querySelector(".fullTable");

        students.forEach(function (student, index) {
            data += `
            <tr>
                <td scope="row">${index + 1}</td>
                <td>${student.fullName}</td>
                <td><a href="#" onclick="showExam(${index})" class="link-primary linkExam" data-bs-toggle="modal"
                        data-bs-target="#examModal">İmtahan</a>
                </td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            `;
        });

        fullTable.innerHTML = data;
    }

    /*
    static loadScoreTable() {
        let data = "";
        let scoreTable = document.querySelector(".scoreTable");
        let linkExams = document.querySelectorAll(".linkExam");

        linkExams.forEach(linkExam => {
            linkExam.addEventListener("click", function () {
                let studentNameTd = linkExam.parentElement.previousElementSibling.innerHTML;
                // let dataFromStorage = JSON.parse(localStorage.getItem("students")).forEach(data => console.log(data));
                let dataFromStorage = JSON.parse(localStorage.getItem("students"));

                let obj = dataFromStorage.find(data => data.fullName === studentNameTd);

                console.log(obj);

                for (const [key, value] of Object.entries(obj)) {
                    data += `
                    <tr>
                        <td>${key}</td>
                        <td>${value}</td>
                    </tr>
                    `
                }
                scoreTable.innerHTML = data;
                data = "";
            })
        })
    }
    */
}