var Component = Component || {};
define(["require", "jquery", "knockout", 'User/Models/UserModels'], function (require, $, ko, UserModel) {

    if (Component.Table) {
        console.log('Такой класс Component.Table уже существует');
        return;
    }

    Component.Table = function (params) {
        params = params || {};
        var self = this;
        self.UrlGetUser = params.UrlGetUser || '/home/GetUsers';
        self.Items2 = ko.observableArray();
        self.Items2.push({ Id: 1, FirstName: 'Ntcn', LastName:'test'})
        self.getCollection();
        return this;
    }

    Component.Table.prototype.constructor = Component.Table;

    Component.Table.prototype.getCollection = function () {
        
        this.Items2.push({ Id: 2, FirstName: 'Ntcn', LastName: 'test' });
        $.ajax({
            url: this.UrlGetUser,
            success: this.callback.bind(this),
        });
    };

    Component.Table.prototype.callback = function (data) {
        this.Items2.push({ Id: 3, FirstName: 'Ntcn', LastName: 'test' });
        console.log(" Items после добавления:", this.Items2())
    }

   
   

});
