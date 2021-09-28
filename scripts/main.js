Hooks.once('diceSoNiceInit', (dice3d) => {
    dice3d.addTexture("Beans1", {
        name: "Beans1",
        composite: "source-over",
        source: "modules/bean-dice/images/beans1.jpg",
        bump:""
    });

    dice3d.addTexture("Beans2", {
        name: "Beans2",
        composite: "source-over",
        source: "modules/bean-dice/images/beans2.png",
        bump:""
    });

    dice3d.addTexture("Dank1", {
        name: "Dank1",
        composite: "source-over",
        source: "modules/bean-dice/images/dank1.png",
        bump:""
    });
});
