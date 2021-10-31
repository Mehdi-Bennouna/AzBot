import { ICommand } from "wokcommands";

export default {
  category: "Announcement",
  description: "Annonce séance en ligne",
  permissions: ["ADMINISTRATOR"],
  slash: true,
  testOnly: true,
  options: [
    {
      name: "module",
      description: "Module",
      type: 3,
      required: true,
      choices: [
        {
          name: "compilation",
          value: "Compilation",
        },
        {
          name: "extraction d'information",
          value: "Extraction d'information",
        },
        {
          name: "génie Logiciel",
          value: "Génie Logiciel",
        },
        {
          name: "réseaux",
          value: "Réseaux",
        },
        {
          name: "théorie des graphes",
          value: "Théorie des graphes",
        },
        {
          name: "système d'exploitation",
          value: "Système d'exploitation",
        },
      ],
    },
    {
      name: "type",
      description: "Type de la séance",
      type: 3,
      required: true,
    },
    {
      name: "date",
      description: "Date de la séance",
      type: 3,
      required: true,
    },
    {
      name: "heure",
      description: "Horaire de la séance",
      type: 3,
      required: true,
    },
    {
      name: "lien",
      description: "Lien de la séance",
      type: 3,
      required: true,
    },
  ],
  callback: ({ interaction, channel }) => {
    channel.send({
      content:
        "||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@everyone>",
      embeds: [
        {
          color: 11403008,
          title: "Annonce Séance en ligne",
          fields: [
            {
              name: "__Module__:",
              value: interaction.options.getString("module")!,
            },
            {
              name: "__Type__",
              value: interaction.options.getString("type")!,
            },
            {
              name: "__Date__:",
              value: interaction.options.getString("date")!,
            },
            {
              name: "__Heure__",
              value: interaction.options.getString("heure")!,
            },
            {
              name: "__Lien__",
              value: interaction.options.getString("lien")!,
            },
          ],
        },
      ],
    });
    interaction.reply({ ephemeral: true, content: "Success" });
  },
} as ICommand;
