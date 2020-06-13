module.exports = (sequelize, Datatypes) =>{
    const Movie = sequelize.define("movie",
    {
        title: {
            type: Datatypes.STRING,
            allowNull: false
        },
        moviePoster: {
            type: Datatypes.STRING,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
    );
    Movie.associate = (models)=>{
        Movie.hasMany(models.rating,{
            foreignKey: {
                allowNull:false
            }
        });
    };
    Movie.associate = (models)=>{
        Movie.belongsTo(models.genre,{
            foreignKey: {
                allowNull:false
            }
        });
    };
return Movie;
};