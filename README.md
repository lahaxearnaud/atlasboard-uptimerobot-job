atlasboard-uptimerobot-job
==========================

Job for atlasboard uptimerobot widget


== Config

{
  "layout": {
      "title": false,
      "customJS" : [],
      "widgets" : [
        {"row" : 1, "col" : 3, "width" : 2, "height" : 3
        , "widget" : "uptimerobot", "job" : "uptimerobot", "config" : "uptimerobot"}
      ]
  },

  "config": {
      "uptimerobot" : {
          "apiKey" : "YOUR-API-KEY",
          "apiUrl" : "http://api.uptimerobot.com/",
          "actionName" : "getMonitors",
          "parameters" : "format=json&noJsonCallback=1&responseTimesAverage=1"
      }
  }
}
