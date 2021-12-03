// *** Select Elements ***
const studentForm = document.getElementById("studentForm");
const studentName = document.getElementById("studentName");
const modalAddBtn = document.getElementById("modalAddBtn");

// *** Event Listeners - Call Functions ***
eventListeners();

// *** Functions ***
function eventListeners() {
    studentForm.addEventListener("submit", addStudent);
    modalAddBtn.addEventListener("click", addScore);

    document.addEventListener("DOMContentLoaded", function () {
        let students = Storage.getStudentsFromStorage();
        UI.loadAllStudents(students);
        // UI.loadScoreTable();
    });
}

function addStudent(e) {
    const fullName = studentName.value;
    let mathScore = 0,
        physicsScore = 0,
        chemistryScore = 0;

    if (fullName === "") {
        alert("Zəhmət olmasa ad və soyadınızı daxil edin");
    } else {
        const newStudent = new Student(fullName, mathScore, physicsScore, chemistryScore);
        
        console.log(newStudent);

        // İlk üsul
        // UI.addStudentToUI(newStudent);

        Storage.addStudentToStorage(newStudent);
        let students = Storage.getStudentsFromStorage();
        UI.loadAllStudents(students);
    }

    e.preventDefault();
}

function addScore() {
    let mathScore, physicsScore, chemistryScore;
    const selectLesson = document.querySelector(".form-select");
    const modalInput = document.querySelector(".modalInput");

    if (selectLesson.value == "riyaziyyat") {
        mathScore = modalInput.value;
    }
    if (selectLesson.value == "fizika") {
        physicsScore = modalInput.value;
    }
    if (selectLesson.value == "kimya") {
        chemistryScore = modalInput.value;
    }
}

function showExam(index) {
    let data = "";
    let scoreTable = document.querySelector(".scoreTable");
    let dataFromStorage = Storage.getStudentsFromStorage();

    console.log(dataFromStorage[index]);

    for (const [key, value] of Object.entries(dataFromStorage[index])) {
        data += `
        <tr>
            <td>${key}</td>
            <td>${value}</td>
        </tr>
        `
    }
    scoreTable.innerHTML = data;
    data = "";
}