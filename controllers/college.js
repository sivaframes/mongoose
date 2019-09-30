export const list = (req,res) =>{

    console.log("get college list");
    let collegelist = ['KIET','KIET 2', 'KIETW'];
    res.status(200)
        .send({
            success:true,
            collegelist
        });

}
export const slist = (req,res) =>{

    console.log("get student list");
    // let studentlist = ['SIVA','SAI', 'KUMAR'];
    let studentlist = [{name:"siva"},{name:"sai"}]
    res.status(201)
        .send({
            success:true,
            studentlist
        });

}
export const createcollege = () => {};
export const editcollege = () => {};
export const deletecollege = () => {};
