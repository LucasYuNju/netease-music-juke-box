import Application from "./app/Application";
import ServiceClient from "./service/ServiceClient";

function main() {
    const app = new Application();
    app.placeAt(document.body);
    app.run();
}

$(main);
