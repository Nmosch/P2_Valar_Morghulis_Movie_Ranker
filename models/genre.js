module.exports = (sequelize, Datatypes) =>{
    const Genre = sequelize.define("genre",
    {
        genre: {
            type: Datatypes.STRING,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    Genre.associate = (models)=>{
        Genre.hasMany(models.movie,{
            onDelete: "cascade"
        });
    };
return Genre;
};