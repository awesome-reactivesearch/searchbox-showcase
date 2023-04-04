import React from "react";

const showcaseData = {
  demos: [
    {
      label: "Voice Search",
      iframeLink:
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/next/packages/web/examples/SearchBoxWithVoiceSearch?fontsize=14&hidenavigation=1&theme=dark&view=preview",
      description: (
        <div>
          Set <code>showVoiceSearch</code> prop to true to enable voice search.
          This adds a microphone icon to the search box, allowing users to
          search using their voice instead of typing. This can be especially
          useful for users on mobile devices or for those with accessibility
          needs. Read more about this prop and see the whole SearchBox component
          reference over{" "}
          <a href="https://docs.reactivesearch.io/docs/reactivesearch/react/search/searchbox/#showvoicesearch">
            here
          </a>
          .
        </div>
      ),
    },
    {
      label: "With Autosuggestion",
      iframeLink:
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/next/packages/web/examples/SearchBoxWithAutosuggestions?fontsize=14&hidenavigation=1&theme=dark&view=preview",
      description: (
        <div>
          When <code>autosuggest</code> prop is set to <code>true</code>, the
          SearchBox will query the index for suggestions based on the user's
          input
        </div>
      ),
    },
    {
      label: "With Popular and Recent Suggestions",
      iframeLink:
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/next/packages/web/examples/SearchBox?fontsize=14&hidenavigation=1&theme=dark&view=preview",
      description: (
        <div>
          <b>Index Suggestions:</b>
          <p>
            You can also enable popular suggestions, which show frequently
            searched terms. To do this, set the{" "}
            <code>enablePopularSuggestions</code> prop to true. You can
            customize the behavior of popular suggestions using the{" "}
            <code>popularSuggestionsConfig</code> prop.
          </p>
          <b>Recent Suggestions:</b>
          <p>
            You can also enable recent suggestions, which show the user's most
            recent searches. To do this, set the{" "}
            <code>enableRecentSuggestions</code> prop to true. You can customize
            the behavior of recent suggestions using the{" "}
            <code>recentSuggestionsConfig</code> prop.
          </p>
        </div>
      ),
    },
    {
      label: "With InstantSearch",
      iframeLink:
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/next/packages/web/examples/SearchBoxWithInstantSearch?fontsize=14&hidenavigation=1&theme=dark&view=preview",
      description: (
        <div>
          <p>
            This can be enabled by setting the <code>autosuggest</code> prop to{" "}
            <code>false</code>.
          </p>
          <p>
            With instant search, users can quickly see which search terms are
            yielding the most relevant results, and adjust their query as
            needed.
          </p>
        </div>
      ),
    },
    {
      label: "Suggestion as Pills",
      description: <div>Suggestions displayed as pills instead of a list.</div>,
      iframeLink:
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/next/packages/web/examples/SearchBoxWithPillSuggestions?fontsize=14&hidenavigation=1&theme=dark&view=preview",
    },
    {
      label: "Focus Shortcut",
      iframeLink:
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/next/packages/web/examples/SearchBoxWithKeyboardShortcuts?fontsize=14&hidenavigation=1&theme=dark&view=preview",
      description: (
        <div>
          <p>
            The <code>focusShortcuts</code> prop allows you to define a list of
            keyboard shortcuts that will focus the search box when pressed.
          </p>
          <p>
            For example, if you want to focus the search box when the user
            presses the <code>/</code> key, you can set{" "}
            <code>focusShortcuts</code> to <code>['/']</code>. You can also
            define more complex keyboard shortcuts, such as <code>SHIFT+A</code>
            , by separating the key names with a <code>+</code>.
          </p>
        </div>
      ),
    },
    {
      label: "Featured Suggestions",
      iframeLink:
        "https://codesandbox.io/embed/github/awesome-reactivesearch/q-n-a-search-ui/tree/plain-search-app/?fontsize=14&hidenavigation=1&theme=dark&view=preview",
      description: <div>Show a list of pre-defined suggestions.</div>,
    },
  ],
};

export default showcaseData;
