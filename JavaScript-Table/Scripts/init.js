define(["require", "knockout", "User/Components/Table/app", "User/Components/Add/app", "User/Components/Pagination/app"], function (require, ko, Table, Users,Page) {

    // register the component
    ko.components.register("Add-User", {
        viewModel: Users.Component.UserTableAdd,
        template: { require: "text!user/components/add/template/template.html" }
    });

    // table the component
    ko.components.register("Table-Users", {
        
        viewModel: Component.Table,
        template: { require: "text!User/Components/Table/Template/template.html" }
    });
 
 
   
    
        // Pagination the component
        ko.components.register("Pagination", {
            viewModel: Page.Component.Pagination,
            template: { require: "text!user/components/Pagination/template/template.html" }
        });
        ko.applyBindings();
    });

