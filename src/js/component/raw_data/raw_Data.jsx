// Trying to create a single file with all the data grouped to see how to do it this way
const bigProjectImage = "https://github.com/4GeeksAcademy/ACEDPOL_Landing-Page-con-React/blob/main/src/img/big-project-image.png?raw=true"; // "/big-project-image.png";
const rndCardText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta lectus quis augue scelerisque, at cursus sem fringilla.";

export const Data = [
    {
        buttonsData: [
            {
                id: 0,
                titleSection:"Home"
            },
            {
                id: 1,
                titleSection:"About"
            },
            {
                id: 2,
                titleSection:"Services"
            },
            {
                id: 3,
                titleSection:"Contact"
            }
        ]
    },
    {
        cardsData: [
            {
                id: 0,
                image: bigProjectImage,
                title: "Project Name 01",
                cardText: rndCardText
            },
            {
                id: 1,
                image: bigProjectImage,
                title: "Project Name 02",
                cardText: rndCardText
            },    
            {
                id: 2,
                image: bigProjectImage,
                title: "Project Name 03",
                cardText: rndCardText
            }
        ]
    }
]