/**
 * Job: uptimerobot
 */

module.exports = function(config, dependencies, job_callback) {

    var url = config.apiUrl + config.actionName + "?apiKey=" + config.apiKey + "&" + config.parameters,
        logger = dependencies.logger;

    dependencies.easyRequest.JSON(url, function(err, json){
        if(err !== null) {
            logger.error(err);
            return;
        }

        job_callback(err, { status : json.monitors.monitor });
    });
};
