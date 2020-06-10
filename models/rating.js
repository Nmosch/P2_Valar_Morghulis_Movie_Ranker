module.exports = (sequelize, Datatypes) =>{
    const Rating = sequelize.define("rating",
    {
        rating: {
            type: Datatypes.INTEGER,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    Rating.associate = (models)=>{
        Rating.belongsTo(models.movie,{
            foreignKey: {
                allowNull:false
            }
        });
        Rating.belongsTo(models.user,{
            foreignKey:{
                allowNull: false
            }
        });
    };
return Rating;
};