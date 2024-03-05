module.exports = {
    mutipleMongooseToObject: function(mongoose){
        return mongoose.map(mongoose => mongoose.toObject())
    },// chuyển đổi dữ liệu trong mảng có nhiều phẩn tử

    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose
    }// giống như trên mà chỉ 1 phần tử

}//nhận dữ liệu từ backendt thực hiện chức năng bảo mật