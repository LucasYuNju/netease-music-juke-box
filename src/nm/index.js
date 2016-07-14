import ApplicationController from "./app/ApplicationController";
import ServiceClient from "./service/ServiceClient";

function main() {
    const app = new ApplicationController();
    app.application.placeAt(document.body);
    app.run();
}

$(main);
