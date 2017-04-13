define(["require", "exports"], function (require, exports) {
    var Models = {};
    (function () {
        Models.UserModel=function() {
            function UserModel(id, firstName, lastName) {
                this.Id = ko.observable(id);
                this.FirstName = ko.observable(firstName);
                this.LastName = ko.observable(lastName);
            }
            return UserModel;
        }();
        Models.UserModel = Models.UserModel;
    })(Models = exports.Models || (exports.Models = {}));
});
