import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error("Kawaiily error boundary:", error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-full items-center justify-center bg-gradient-to-b from-rose-50 via-white to-indigo-50 p-6">
          <div className="max-w-md rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
            <div className="text-4xl">💔</div>
            <h1 className="mt-3 text-xl font-semibold text-slate-800">
              Something went wrong
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              This card couldn't be displayed. The link might be broken.
            </p>
            <a
              href="/"
              className="mt-5 inline-block rounded-lg bg-rose-500 px-5 py-2 font-semibold text-white hover:bg-rose-600"
            >
              Create a new card
            </a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
