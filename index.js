if ("serviceWorker" in navigator) {
  console.log("Navigator support ServiceWorker");

  navigator.serviceWorker
    .register("/sw.js")
    .then(function(registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function(error) {
      console.log("Service worker registration failed, error:", error);
    });
}
