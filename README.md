
![](https://socialify.git.ci/ariffdev/Ashlegister/image?description=1&descriptionEditable=Athletics%20Management%20System&language=1&name=1&owner=1&theme=Light)



<p align="center">
<img src="https://img.shields.io/badge/Author-ariffdev-blue" />
<img src="https://img.shields.io/badge/Athletics Management System-maroon" />
<img src="https://img.shields.io/badge/React-blue" />
<img src="https://img.shields.io/badge/FastAPI-green" />
</p>

![Ashlegister Home Page](https://github.com/ariffdev/Ashlegister/assets/58955721/101f379e-19f3-46e2-bf8a-99c24dfb4ba5)


## 🗒️ Notes on Testing Live Site

Ashlegister's backend is hosted on a free tier hosting site so when you first try to access the site, it may a minute for the server to spin up. The loading screen will show and when it's ready you will view the full power of the platform. Sorry for the inconvenience!

## 💥 Introduction

Ashlegister is a web app for organizing and managing track/athletics events in a paperless manner. It is built using React for frontend, FastAPI for the backend, and Firebase Realtime DB  for the database.


## 💡 Why did I build this?

Last summer, I participated in a couple of track meets in Kumasi, Ghana, West Africa. I noticed that the lineups and results of the races were all documented on paper by hand. As a result of this, it was extremely difficult to get the results since there was no centralized place where they were posted. After asking one person to the next, I realized that we could make use of a web app that would allow the complete organization and centralization of competitions. So I decided to build one. This specific project will be used for Ashesi University but long term the plan is to scale to the national level.

## 🧱 Tech Stack
- Frontend: React
- Backend: FastAPI
- Database: Firebase Realtime DB
- Helper Libraries: **React Router**, **Axios**, **React Date & Time Picker**
  

## 🛠️ Local development

To ensure that you are able to install everything properly, I would recommend you to have <b>Git</b>, <b>NPM</b>, <b>Node.js</b> and <b>Python</b> installed.


Start with setting up the Local Project Environment:

```sh
git clone https://github.com/ariffdev/Ashlegister.git
cd Ashlegister
```


Now we will add the environment variables in the client/ and server/

 - Create a .env file in the api folder according to .example.env given

 - Create a <a href="">Firebase Project</a>

 - Setup the firebase credentials according to the .example.env

Once you run the Commands and get environment variables and everything fine, we are all set to run the app ✔️

<ins> Frontend </ins>

On the root level run the following commands:

```sh
cd client
npm install
npm run dev
```



<ins> Backend </ins>

Open another terminal and on the root level run the following commands:

```sh
cd api
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app:app --reload
```

## 🥁 Features
Ashlegister provides competition organizers with the ability to:

-  Create competitions
- Add races
- Add athletes
- Add race results
- Host the results so they can be viewed by everyone

## 🕒 Future Work
Backend documentation can be found <a href="https://ashlegister.onrender.com"> here </a>
- Make the UI responsive for mobile
- Add more features on the user end



## 📃 Documentation
- Backend documentation can be found <a href="https://ashlegister.onrender"> here </a>
Note that the backend server is running on a free service so it may take about a minute to spin on first try but will be fast afterwards
