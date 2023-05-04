import React from "react";

const showcaseData = {
  react: [
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
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/next/packages/web/examples/SearchBox?fontsize=14&hidenavigation=1&theme=dark&view=preview",
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
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/next/packages/web/examples/SearchBoxWithAutosuggestions?fontsize=14&hidenavigation=1&theme=dark&view=preview",
      description: (
        <div>
          <b>Popular Suggestions:</b>
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
    {
      label: "Q&A Simple",
      description: (
        <div>
          <p>
            A simple AI QnA app using{" "}
            <a href="https://docs.reactivesearch.io/docs/reactivesearch/react/search/aianswer/">
              AIAnswer
            </a>{" "}
            component
          </p>
          <p>
            This app uses a IMDB movies dataset and answers your questions
            regarding your favorite movie.
          </p>
          <p>
            You can configure the component using <code>AIConfig</code>.
          </p>
        </div>
      ),
      iframeLink:
        "https://codesandbox.io/embed/github/awesome-reactivesearch/q-n-a-search-ui/tree/main/?fontsize=14&hidenavigation=1&theme=dark&view=preview",
    },
    {
      label: "Q&A with AIAnswer and follow-up",
      description: (
        <div>
          <p>
            A simple AI QnA app using{" "}
            <a href="https://docs.reactivesearch.io/docs/reactivesearch/react/search/aianswer/">
              AIAnswer
            </a>{" "}
            component where you can also ask follow up questions.
          </p>
          <p>
            This app uses a Rick and morty dataset and answers your questions
            regarding your favorite characters.
          </p>
          <p>
            You can configure the component using <code>AIConfig</code>.
          </p>
        </div>
      ),
      iframeLink:
        "https://codesandbox.io/embed/github/awesome-reactivesearch/qna-rick-and-morty/tree/main/?fontsize=14&hidenavigation=1&theme=dark&view=preview",
    },
    {
      label: "SearchBox shows AIAnswer",
      description: (
        <div>
          <p>
            Find your answers for the questions asked using{" "}
            <a href="https://docs.reactivesearch.io/docs/reactivesearch/react/search/aianswer/">
              SearchBox
            </a>{" "}
            component.
          </p>
          <p>
            You can pass <code>enableAI</code> to <code>true</code>. You can use{" "}
            <code>AIConfig</code> for customizing the documents and query
            passed.
          </p>
        </div>
      ),
      iframeLink:
        "https://codesandbox.io/embed/github/awesome-reactivesearch/ask-reactivesearch/tree/main/?fontsize=14&hidenavigation=1&theme=dark&view=preview",
    },
  ],
  vue: [
    {
      label: "Voice Search",
      iframeLink:
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/next/packages/vue/examples/voice-search?fontsize=14&hidenavigation=1&theme=dark&view=preview",
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
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/vue-showcase/packages/vue/examples/search-box?fontsize=14&hidenavigation=1&theme=dark&view=preview",
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
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/vue-showcase/packages/vue/examples/search-box?fontsize=14&hidenavigation=1&theme=dark&view=preview",
      description: (
        <div>
          <b>Popular Suggestions:</b>
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
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/vue-showcase/packages/vue/examples/search-showcase/instant-search?fontsize=14&hidenavigation=1&theme=dark&view=preview",
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
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/vue-showcase/packages/vue/examples/search-showcase/pill-suggestions?fontsize=14&hidenavigation=1&theme=dark&view=preview",
    },
    {
      label: "Focus Shortcut",
      iframeLink:
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/vue-showcase/packages/vue/examples/search-showcase/focus-shortcuts?fontsize=14&hidenavigation=1&theme=dark&view=preview",
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
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/vue-showcase/packages/vue/examples/search-showcase/featured-suggestions?fontsize=14&hidenavigation=1&theme=dark&view=preview",
      description: <div>Show a list of pre-defined suggestions.</div>,
    },
    {
      label: "Q&A Simple",
      description: (
        <div>
          <p>
            A simple AI QnA app using{" "}
            <a href="https://docs.reactivesearch.io/docs/reactivesearch/react/search/aianswer/">
              AIAnswer
            </a>{" "}
            component
          </p>
          <p>
            This app uses a IMDB movies dataset and answers your questions
            regarding your favorite movie.
          </p>
          <p>
            You can configure the component using <code>AIConfig</code>.
          </p>
        </div>
      ),
      iframeLink:
        "https://codesandbox.io/embed/github/awesome-reactivesearch/q-n-a-search-ui/tree/main/?fontsize=14&hidenavigation=1&theme=dark&view=preview",
    },
    {
      label: "Q&A with AIAnswer and follow-up",
      description: (
        <div>
          <p>
            A simple AI QnA app using{" "}
            <a href="https://docs.reactivesearch.io/docs/reactivesearch/react/search/aianswer/">
              AIAnswer
            </a>{" "}
            component where you can also ask follow up questions.
          </p>
          <p>
            This app uses a Rick and morty dataset and answers your questions
            regarding your favorite characters.
          </p>
          <p>
            You can configure the component using <code>AIConfig</code>.
          </p>
        </div>
      ),
      iframeLink:
        "https://codesandbox.io/embed/github/awesome-reactivesearch/qna-rick-and-morty/tree/main/?fontsize=14&hidenavigation=1&theme=dark&view=preview",
    },
    {
      label: "SearchBox shows AIAnswer",
      description: (
        <div>
          <p>
            Find your answers for the questions asked using{" "}
            <a href="https://docs.reactivesearch.io/docs/reactivesearch/react/search/aianswer/">
              SearchBox
            </a>{" "}
            component.
          </p>
          <p>
            You can pass <code>enableAI</code> to <code>true</code>. You can use{" "}
            <code>AIConfig</code> for customizing the documents and query
            passed.
          </p>
        </div>
      ),
      iframeLink:
        "https://codesandbox.io/embed/github/awesome-reactivesearch/ask-reactivesearch/tree/main/?fontsize=14&hidenavigation=1&theme=dark&view=preview",
    },
  ],
};

export default showcaseData;
