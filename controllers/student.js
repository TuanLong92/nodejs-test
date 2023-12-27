async function getAllStudents(req,res){
    res.status(500).send({
        message: "Can not GET All Students",        
    })
    /*
    res.status(200).json ({
        message: "GET All Students successfully",
        data : [
            {
                id: 1,
                name: "Nguyen Van A",
                email: "nguyenvana@gmail.com",
                age: 18
            },
            {
                id: 2,
                name: "Nguyen Van B",
                email: "nguyenvanb@gmail.com",
                age: 19
            },
            {
                id: 3,
                name: "Nguyen Van C",
                email: "nguyenvanc@gmail.com",
                age: 20
            }
        ]
    })
    */
}
async function getStudentById(req,res){
   
};
async function updateStudent(req,res){

};
async function insertStudent(req,res){

};
export default {
    getAllStudents,
    getStudentById,
    updateStudent,
    insertStudent
}