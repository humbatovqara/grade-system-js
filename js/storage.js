class Storage {
    static addStudentToStorage(newStudent) {
        let students = this.getStudentsFromStorage();

        students.push(newStudent);

        localStorage.setItem("students", JSON.stringify(students));
    }

    static getStudentsFromStorage() {
        let students;

        if (localStorage.getItem("students") === null) {
            students = [];
        } else {
            students = JSON.parse(localStorage.getItem("students"));
        }

        return students;
    }
}