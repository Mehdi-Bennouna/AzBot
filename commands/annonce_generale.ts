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
      name: "lien_1",
      description: "Lien #1",
      type: 3,
      required: false,
    },
    {
      name: "lien_2",
      description: "Lien #2",
      type: 3,
      required: false,
    },
    {
      name: "lien_3",
      description: "Lien #3",
      type: 3,
      required: false,
    },
    {
      name: "lien_4",
      description: "Lien #4",
      type: 3,
      required: false,
    },
    {
      name: "lien_5",
      description: "Lien #5",
      type: 3,
      required: false,
    },
    {
      name: "lien_6",
      description: "Lien #6",
      type: 3,
      required: false,
    },
    {
      name: "lien_7",
      description: "Lien #7",
      type: 3,
      required: false,
    },
    {
      name: "lien_8",
      description: "Lien #8",
      type: 3,
      required: false,
    },
  ],

  callback: async ({ interaction, channel }) => {
    let myString = interaction.options.getString("contenu")!;
    for (let i = 1; i < interaction.options.data.length; i++) {
      const element = interaction.options.data[i].value;
      if (element == undefined) {
        break;
      }
      myString += "\n" + element;
    }

    await channel.send({
      embeds: [
        {
          title: "Annonce",
          description: myString,
        },
      ],
      content:
        "||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@everyone>",
    });

    interaction.reply({ ephemeral: true, content: "Success" });
  },
} as ICommand;
