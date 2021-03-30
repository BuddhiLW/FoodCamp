(ns experiment-luminus.env
  (:require
    [selmer.parser :as parser]
    [clojure.tools.logging :as log]
    [experiment-luminus.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[experiment-luminus started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[experiment-luminus has shut down successfully]=-"))
   :middleware wrap-dev})
