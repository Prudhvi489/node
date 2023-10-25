module.exports=(sequelize,Datatypes)=>{
    const userlogin=sequelize.define(
        "userlogin",
        {
            id:{
                type:Datatypes.UUID,
                allowNull:false,
                primaryKey:true,
                defaultvalue:Datatypes.UUIDV1
            },
            email: {
                type: Datatypes.STRING,
                allowNull: false,
                validate: {
                  isEmail: true,
                },
              },
              password: {
                type: Datatypes.STRING,
                allowNull: false,
              }
        }
    )
}