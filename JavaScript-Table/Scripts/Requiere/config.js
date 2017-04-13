require.config({
    baseUrl: "/Scripts/",
    paths: {
        jquery: "jquery-3.1.1",
        bootstrap: "bootstrap.min",
        knockout: "knockout-3.4.2"
    },
    shim: {
        "bootstrap": ["jquery"]
    }
});