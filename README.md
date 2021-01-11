# The Joy Bot
Repository for shehacks project: a chatbot that can help diagnose mental health issues made using React and Dialogflow

## Purpose

This webapp allows you to interact with Joy, a chatbot designed to help you go through moments of depression and anxiety. 
You can converse with Joy through text messages and let out how you feel; Joy will listen and recommend what you can do in the moment to feel better. 
You can also access calming exercises, diagnostic tests, and other helpful resources easily through our website. 
We also have a music player that recommends songs based on the mood of the conversation. 
Users are fully anonymous. None of their data is collected, so everyone can feel safe while using Joy.

Devpost: https://devpost.com/software/the-joy-bot

## Screenshot

<p align="center"><img src="https://lh3.googleusercontent.com/HeeSUsI54DDfJRTuPTEL9rMU994LfQ15bbX75wZNY0OSdvPBFz8Bs5K7YfOKEf4f8ZgSdOihX5EvCNS3Bq1w6MTDOznBKz_xnQqB9LHz5-1zfeb5bEx-wPhOTqk8FiP9jajLvD2tGEloT6TZlFNnQJsbRXcYVhgXgAsVNh1SrCZ7EIyuyP9ArrLuG6oo55wHew9KhC1d6pYh_mOpbzLSQNEHkfLGtyS6wFIEascEOrJveVvj5RymJwhglQfmkK8nqQ1ICNlKRs1Kx5uV6TPzp_UQXABruMe6SqT-AqiE6AHkfzTZS7ZCSNXp0R4bITqns61cBukLUcuSHAkOvd0sLxS3CdNPHNv_GLcoQRak6MFLwMXoKjemEsWZCO7rBiDbtKAtKOrMtymH1HlOXZZXIE6Jh31CD6Zcq6PMvMUblALzKJk2DNh195lraBAQ-kuHgjxjwYOvSClS8G14VYLb4pvgf9FHphauk7v5RMg2qELogB4iGRJV5DnpILhD7QjSPtXl2TAWsTR3RzW6ewuXkc2ChR7HwV8Z-kc9w3ctZ0cWLPB1BH8RvMPeKFmK0xHu9gUFBbLJ1DGwFAttx0yEjpovveR1Xi7rHi5mM6khTTIi3mLAl9pYbm9QRVSKMX-M-gF1ggTQW1QDe-rynm6q_MqLBH9c7SQDn4IPP2BZOVb9eQ-ZZHaR_G6dwrt1Gg=w2214-h1190-no?authuser=0" alt="Icon"
	title="Website" width="640" height="343" /></p> 


## How It Works

1. We used agents on `Dialogflow` - Google's NLP platform
2. We collected data from Reddit (r/depression, r/depressed, r/anxiety, r/adhd) and Quora to train subagents for Joy so the bot could detect sentiments
accurately. To see how the bot should respond, we used highest voted responses on Reddit and read some research papers.
3. We connected an endpoint in our `Express` backend to the Dialogflow API so the frontend didn't need our API credentials
4. The frontend `React` application has components for the chatbot, music player, accordians and navbar. It makes requests to the Express backend when a user
sends a message to get a response. The backend forwards this request to the Dialogflow API

## Setup
1. Clone the repository

2. Add an `.env` file to the root directory with values for `DIALOGFLOW_PROJECT_ID` and `DIALOGFLOW_LANGUAGE_CODE`. It will look something like this:
```
DIALOGFLOW_PROJECT_ID = 'project-id-xxxx'
DIALOGFLOW_LANGUAGE_CODE = 'en'
```

3. Add the JSON file with service account credentials to the `api` directory (`cd api` from the root directory). Name this file `private.json` 
Note: I accidentally pushed this file to our repo, but you shouldn't. I have regenerated our credentials now :)

4. `npm install` and `npm start` in the root directory **and** in the `api` directory. The directory structure is a little messed up right now - the `root` directory
is the frontend directory, but the `api` (backend) directory is inside it. I will fix this (soon)

### Known Issues:
1. React Scripts: if you get an issue due to this, use `yarn add react-scripts`. This seems to fix this issue on macOS.

