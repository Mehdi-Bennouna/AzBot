import { ICommand } from "wokcommands";

export default {
  category: "Annoncement",
  description: "Annonce génerale",
  permissions: ["ADMINISTRATOR"],
  slash: true,
  testOnly: true,
  options: [
    {
      name: "contenu",
      description: "Contenu de votre annonce",
      type: 3,
      required: true,
    },
    {
      name: "Lien 1",
      description: "Lien #1",
      type: 3,
      required: false,
    },
    {
      name: "Lien 2",
      description: "Lien #2",
      type: 3,
      required: false,
    },
    {
      name: "Lien 3",
      description: "Lien #3",
      type: 3,
      required: false,
    },
    {
      name: "Lien 4",
      description: "Lien #4",
      type: 3,
      required: false,
    },
    {
      name: "Lien 5",
      description: "Lien #5",
      type: 3,
      required: false,
    },
    {
      name: "Lien 6",
      description: "Lien #6",
      type: 3,
      required: false,
    },
    {
      name: "Lien 7",
      description: "Lien #7",
      type: 3,
      required: false,
    },
    {
      name: "Lien 8",
      description: "Lien #8",
      type: 3,
      required: false,
    },
  ],

  callback: ({ interaction, channel }) => {},
} as ICommand;
