import React from "react";

const showcaseData = {
  react: [
    {
      label: "Voice Search",
      iframeLink:
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/react-showcase-examples/packages/web/examples/SearchBoxWithVoiceSearch?fontsize=14&hidenavigation=1&theme=dark&view=preview",
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
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/react-showcase-examples/packages/web/examples/SearchBoxWithAutosuggestions?fontsize=14&hidenavigation=1&theme=dark&view=preview",
      description: (
        <div>
          When{" "}
          <a href="https://docs.reactivesearch.io/docs/reactivesearch/react/search/searchbox/#autosuggest">
            <code>autosuggest</code>
          </a>{" "}
          prop is set to <code>true</code>, the SearchBox will query the index
          for suggestions based on the user's input
        </div>
      ),
    },
    {
      label: "With Popular and Recent Suggestions",
      iframeLink:
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/react-showcase-examples/packages/web/examples/SearchBoxWithPopularRecentSuggestions?fontsize=14&hidenavigation=1&theme=dark&view=preview",
      description: (
        <div>
          <b>
            <a href="https://docs.reactivesearch.io/docs/reactivesearch/react/search/searchbox/#enablepopularsuggestions">
              Popular Suggestions:
            </a>
          </b>
          <p>
            You can also enable popular suggestions, which show frequently
            searched terms. To do this, set the{" "}
            <code>enablePopularSuggestions</code> prop to true. You can
            customize the behavior of popular suggestions using the{" "}
            <code>popularSuggestionsConfig</code> prop.
          </p>
          <b>
            {" "}
            <a href="https://docs.reactivesearch.io/docs/reactivesearch/react/search/searchbox/#enablerecentsuggestions">
              Recent Suggestions:
            </a>{" "}
          </b>
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
      description: (
        <div>
          Suggestions displayed as pills instead of a list. Use the{" "}
          <a href="https://docs-fnqb1pxko-reactivesearch.vercel.app/docs/reactivesearch/react/search/searchbox/#render">
            <code>render</code>
          </a>{" "}
          prop to change the display of suggestions.
        </div>
      ),
      iframeLink:
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/react-showcase-examples/packages/web/examples/SearchBoxWithPillSuggestions?fontsize=14&hidenavigation=1&theme=dark&view=preview",
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
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/react-showcase-examples/packages/web/examples/SearchBoxWithFeaturedSuggestions?fontsize=14&hidenavigation=1&theme=dark&view=preview",
      description: (
        <div>
          When,{" "}
          <a href="https://docs.reactivesearch.io/docs/reactivesearch/react/search/searchbox/#enablefeaturedsuggestions">
            <code>enable-featured-suggestions</code>
          </a>{" "}
          is set, shows a list of pre-defined suggestions. You need to pass{" "}
          <a href="https://docs-fnqb1pxko-reactivesearch.vercel.app/docs/reactivesearch/react/search/searchbox/#searchboxid">
            <code>searchbox-id</code>
          </a>{" "}
          which contains the pre-defined suggestions to be shown.
        </div>
      ),
    },
    {
      label: "Q&A Simple",
      iframeLink:
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/react-showcase-examples/packages/web/examples/AIAnswer?fontsize=14&hidenavigation=1&theme=dark&view=preview",
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
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/just-for-csb-001/packages/vue/examples/search-showcase/voice-search?embed=1&file=src%2FApp.vue&hideExplorer=1&view=preview",
      description: (
        <div>
          Set <code>show-voice-search</code> prop to true to enable voice
          search. This adds a microphone icon to the search box, allowing users
          to search using their voice instead of typing. This can be especially
          useful for users on mobile devices or for those with accessibility
          needs. Read more about this prop and see the whole{" "}
          <code>search-box</code>
          component reference over{" "}
          <a href="https://docs.reactivesearch.io/docs/reactivesearch/vue/search/SearchBox/#showvoicesearch">
            here
          </a>
          .
        </div>
      ),
    },
    {
      label: "With Autosuggestion",
      iframeLink:
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/just-for-csb-001/packages/vue/examples/search-showcase/auto-suggestions?embed=1&file=src%2FApp.vue&hideExplorer=1&view=preview",
      description: (
        <div>
          When{" "}
          <a href="https://docs.reactivesearch.io/docs/reactivesearch/vue/search/SearchBox/#autosuggest">
            <code>autosuggest</code>
          </a>{" "}
          prop is set to <code>true</code>, the <code>search-box</code> will
          query the index for suggestions based on the user's input
        </div>
      ),
    },
    {
      label: "With Popular and Recent Suggestions",
      iframeLink:
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/just-for-csb-001/packages/vue/examples/search-showcase/simple-search?embed=1&file=src%2FApp.vue&hideExplorer=1&view=preview",
      description: (
        <div>
          <b>
            <a href="https://docs.reactivesearch.io/docs/reactivesearch/vue/search/SearchBox/#enablepopularsuggestions">
              Popular Suggestions:
            </a>
          </b>
          <p>
            You can also enable popular suggestions, which show frequently
            searched terms. To do this, set the{" "}
            <code>enable-popular-suggestions</code> prop to true. You can
            customize the behavior of popular suggestions using the{" "}
            <code>popular-suggestions-config</code> prop.
          </p>
          <b>
            {" "}
            <a href="https://docs.reactivesearch.io/docs/reactivesearch/vue/search/SearchBox/#enablerecentsuggestions">
              Recent Suggestions:
            </a>{" "}
          </b>
          <p>
            You can also enable recent suggestions, which show the user's most
            recent searches. To do this, set the{" "}
            <code>enable-recent-suggestions</code> prop to true. You can
            customize the behavior of recent suggestions using the{" "}
            <code>recent-suggestions-config</code> prop.
          </p>
        </div>
      ),
    },
    {
      label: "With InstantSearch",
      iframeLink:
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/just-for-csb-001/packages/vue/examples/search-showcase/instant-search?embed=1&file=src%2FApp.vue&hideExplorer=1&view=preview",
      description: (
        <div>
          <p>
            This can be enabled by setting the{" "}
            <a href="https://docs.reactivesearch.io/docs/reactivesearch/vue/search/SearchBox/#autosuggest">
              <code>autosuggest</code>
            </a>{" "}
            prop to <code>false</code>.
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
      description: (
        <div>
          Suggestions displayed as pills instead of a list. Use the{" "}
          <a href="https://docs-fnqb1pxko-reactivesearch.vercel.app/docs/reactivesearch/vue/search/SearchBox/#render">
            <code>#render</code>
          </a>{" "}
          slot to change the display of suggestions.
        </div>
      ),
      iframeLink:
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/just-for-csb-001/packages/vue/examples/search-showcase/pill-suggestions?embed=1&file=src%2FApp.vue&hideExplorer=1&view=preview",
    },
    {
      label: "Focus Shortcut",
      iframeLink:
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/just-for-csb-001/packages/vue/examples/search-showcase/focus-shortcuts?embed=1&file=src%2FApp.vue&hideExplorer=1&view=preview",
      description: (
        <div>
          <p>
            The{" "}
            <a href="https://docs.reactivesearch.io/docs/reactivesearch/vue/search/SearchBox/#focusshortcuts">
              <code>focus-shortcuts</code>
            </a>{" "}
            prop allows you to define a list of keyboard shortcuts that will
            focus the search box when pressed.
          </p>
          <p>
            For example, if you want to focus the search box when the user
            presses the <code>/</code> key, you can set{" "}
            <code>focus-shortcuts</code> to <code>['/']</code>. You can also
            define more complex keyboard shortcuts, such as <code>SHIFT+A</code>
            , by separating the key names with a <code>+</code>.
          </p>
        </div>
      ),
    },
    {
      label: "Featured Suggestions",
      iframeLink:
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/just-for-csb-000/packages/vue/examples/search-showcase/featured-suggestions?embed=1&file=src%2FApp.vue&hideExplorer=1&view=preview",
      description: (
        <div>
          When,{" "}
          <a href="https://docs.reactivesearch.io/docs/reactivesearch/vue/search/SearchBox/#enablefeaturedsuggestions">
            <code>enable-featured-suggestions</code>
          </a>{" "}
          is set, shows a list of pre-defined suggestions. You need to pass{" "}
          <a href="https://docs-fnqb1pxko-reactivesearch.vercel.app/docs/reactivesearch/vue/search/SearchBox/#searchboxid">
            <code>searchbox-id</code>
          </a>{" "}
          which contains the pre-defined suggestions to be shown.
        </div>
      ),
    },
    {
      label: "Q&A Simple",
      iframeLink:
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/just-for-csb-001/packages/vue/examples/search-showcase/ai-answer-simple?embed=1&file=src%2FApp.vue&hideExplorer=1&view=preview",
      description: (
        <div>
          <p>
            A simple AI QnA app using{" "}
            <a href="https://docs.reactivesearch.io/docs/reactivesearch/vue/search/aianswer/">
              ai-answer
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
    },
    {
      label: "Q&A with AIAnswer and follow-up",
      iframeLink:
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/just-for-csb-001/packages/vue/examples/search-showcase/movie-search-ai-demo?embed=1&file=src%2FApp.vue&hideExplorer=1&view=preview",
      description: (
        <div>
          <p>
            A simple AI QnA app using{" "}
            <a href="https://docs.reactivesearch.io/docs/reactivesearch/vue/search/aianswer/">
              ai-answer
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
    },
    {
      label: "SearchBox shows AIAnswer",
      iframeLink:
        "https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/feat/just-for-csb-001/packages/vue/examples/search-showcase/searchbox-inline-ai-response?embed=1&file=src%2FApp.vue&hideExplorer=1&view=preview",
      description: (
        <div>
          <p>
            Find your answers for the questions asked using{" "}
            <a href="https://docs.reactivesearch.io/docs/reactivesearch/vue/search/SearchBox/#enableai">
              search-box
            </a>{" "}
            component.
          </p>
          <p>
            You can pass <code>enable-ai</code> to <code>true</code>. You can
            use <code>AIConfig</code> for customizing the documents and query
            passed.
          </p>
        </div>
      ),
    },
  ],
};

export default showcaseData;
