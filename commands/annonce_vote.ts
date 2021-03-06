import { ICommand } from "wokcommands";

export default {
  category: "Announcement",
  description: "Annonce un vote",
  permissions: ["ADMINISTRATOR"],
  slash: true,
  testOnly: true,

  options: [
    {
      name: "contenu",
      description: "contenu de l'annonce",
      type: 3,
      required: true,
    },
  ],

  callback: ({ interaction, channel }) => {
    channel.send({
      content: "@everyone",
      embeds: [
        {
          title: "Annonce Vote",
          description: interaction.options.getString("contenu")!,
          fields: [
            {
              name: "\u200b",
              value:
                "Veuiller faire votre choix dans le channel <#897433309842378762>",
            },
          ],
        },
      ],
    });

    interaction.reply("Success");
  },
} as ICommand;
