var express = require("express");
var router = express.Router();
const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');

process.env['GOOGLE_APPLICATION_CREDENTIALS'] = 'private.json'

router.post("/", function(req, res, next) {
    user_msg = req.body.message;
    if(user_msg) {
        runSample(user_msg).then(msg => {
            console.log(msg);
            res.send(msg);
        });
    }
    else res.send("Empty message");
});


/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runSample(query) {
    // A unique identifier for the given session
    const sessionId = uuid.v4();
    var projectId = process.env['DIALOGFLOW_PROJECT_ID']
    var lang = process.env['DIALOGFLOW_LANGUAGE_CODE']
    // Create a new session
    const sessionClient = new dialogflow.SessionsClient();
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);
  
    // The text query request.
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          // The query to send to the dialogflow agent
          text: query,
          // The language used by the client (en-US)
          languageCode: lang,
        },
      },
    };
        // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
        console.log(`  Intent: ${result.intent.displayName}`);
        return result.fulfillmentText;
    } else {
        console.log(`  No intent matched.`);
    }
}

module.exports = router;