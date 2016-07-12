import Application from "./app/Application";
import ServiceClient from "./service/ServiceClient";

function main() {
    const service = new ServiceClient();
    service.getUserPlayLists().then(result => {
        console.log(result);
    });
    const app = new Application();
    app.placeAt(document.body);
    app.run();
}

$(main);
