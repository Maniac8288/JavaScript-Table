define(["require", "exports", "User/Models/UserModels", "User/Components/Table/app"], function (require, exports, UserModels,Table) {
 
    var Component = Component || {};
    (function () {
        
        var UserTableAdd = (function () {
            var self = this;
        
            function UserTableAdd() {
                this.User = new UserModels.Models.UserModel();
                
            }
            UserTableAdd.prototype.addUser = function () {
                var data = { FirstName: this.User.FirstName(), LastName: this.User.LastName() };
                console.log("Current add user ", data, this.User.FirstName(), this.User.LastName());
                $.ajax({
                    url: ConstAddUser,
                    type: 'post',
                    data: data,
                    success: function (data) {
                        console.log(data);
                        
                    },
                    error: function () {
                        console.log(data);
                    }
                });
                this.User.FirstName("");
                this.User.LastName("");
            };
           
            return UserTableAdd;
        }());
        Component.UserTableAdd = UserTableAdd;
    })(Component = exports.Component || (exports.Component = {}));
    var ConstAddUser = "/home/AddUsers";
});
