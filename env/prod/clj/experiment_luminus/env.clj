(ns experiment-luminus.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[experiment-luminus started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[experiment-luminus has shut down successfully]=-"))
   :middleware identity})
