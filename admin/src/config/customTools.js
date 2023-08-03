import PluginId from "../pluginId";

import Embed from "@editorjs/embed";
// import Table from '@editorjs/table'
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
// import Code from '@editorjs/code'
import LinkTool from "@editorjs/link";
// import Raw from '@editorjs/raw'
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import AttachesTool from "@editorjs/attaches";
import ComponentSelectorTool from "editorjs-component-selector";

const customTools = {
  header: {
    class: Header,
    inlineToolbar: true,
    config: {
      inlineToolbar: ["bold", "italic", "hyperlink", "marker", "inlineCode"],
      levels: [2, 3, 4],
      defaultLevel: 2,
    },
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  checklist: {
    class: CheckList,
    inlineToolbar: true,
  },
  embed: Embed,
  component: {
    class: ComponentSelectorTool,
    config: {
      components: [
        {
          name: "order_form",
          alias: "Форма заявки",
          props: {},
          preview: "/uploads/editrjs_form_cc432c18c8.png",
        },
        {
          name: "leaderboard",
          alias: "Leaderboard",
          props: {},
          preview: "/uploads/editorjs_leaderboard_3f669967c6.jpg",
        },
        {
          name: "consensus_tournament",
          alias: "Кейс-турнир",
          props: {},
          preview: "/uploads/editorjs_consensus_tournament_9d04f8af57.png",
        },
      ],
    },
  },
  // table: {
  //   class: Table,
  //   inlineToolbar: true,
  // },
  warning: {
    class: Warning,
    inlineToolbar: true,
    config: {
      titlePlaceholder: "Title",
      messagePlaceholder: "Message",
    },
  },
  // code: Code,
  link_tool: {
    class: LinkTool,
    config: {
      endpoint: `/api/${PluginId}/link`,
    },
  },
  // raw: {
  //   class: Raw,
  //   inlineToolbar: true,
  // },
  quote: {
    class: Quote,
    inlineToolbar: true,
    config: {
      quotePlaceholder: "Quote",
      captionPlaceholder: "Quote`s author",
    },
  },
  marker: {
    class: Marker,
    inlineToolbar: true,
  },
  delimiter: Delimiter,
  inlineCode: InlineCode,
  attaches: {
    class: AttachesTool,
    config: {
      endpoint: `/api/${PluginId}/link`,
    },
  },
};

export default customTools;
