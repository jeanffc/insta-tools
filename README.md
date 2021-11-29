# Tools for Instagram
Scripts for Instagram </br></br>

![View changes](https://github.com/jeanffc/insta-tools)

## How to use it

### Git way:
    1. Download the repo and install dependencies using this terminal commands:
```
    git clone https://github.com/jeanffc/insta-tools.git
    cd insta-tools
    npm install
```
    2. Rename .env_example to .env and edit the configuration.
    3. Execute 'node example.js' to test the scripts.

## Bot skills:
- [ ] Login Flow
- [ ] SMS/Email verification modes
- [ ] Save Cookies in files
- [ ] Remove Cookies
- [ ] Session Regeneration
- [ ] Get User Information
- [ ] Get User Recent Posts
- [ ] Get recent post Likers / By Username
- [ ] Get Followers of account (save into a json file)
- [ ] Get Followings of account (save into a json file)
- [ ] Get my Last followers / Detect new Followers
- [ ] Read Following/Followers files generated and return Array.
- [ ] Like Content by URL
- [ ] Like Content by MediaId 
- [ ] Like Content by Post
- [ ] Follow by Username
- [ ] Follow by Id
- [ ] Follow User by Post
- [ ] Unfollow by Id
- [ ] Unfollow by Username
- [ ] View stories by User Id
- [ ] View stories by Username
- [ ] Get polls from stories
- [ ] Vote poll from story
- [ ] Get recent posts list of a hashtag
- [ ] Get top posts list of a hashtag
- [ ] Get recent post list by location
- [ ] Get top post list by location
- [ ] Save post list into scrape list
- [ ] Implement lowdb Database
- [ ] Save Likes information
- [ ] Save Follows information
- [ ] Save Unfollows information
- [ ] Get Like activity
- [ ] Get Follow activity
- [ ] Get Unfollow activity
- [ ] Current Time In Range Validator [ex: from 8:00 to 23:00]
- [ ] Proxies
- [ ] Multi-login
- [ ] Multi-proxy per login
- [ ] Like Recent Hashtags By Intervals
- [ ] Follow Recent Hashtags By Intervals
- [ ] Simple Bots Folder
- [ ] NPM package support
- [ ] View Stories from User  Id/Ids
- [ ] View Stories from User Followers
- [ ] View Stories from User Following
- [ ] Live Streaming
- [ ] Comment Media by Id
- [ ] Get Comments On Post by Id
- [ ] Get Media information by Id
- [ ] Upload Pictures 
- [ ] Get Media Type (photo, video, album...)
- [ ] Get Photo/Video Url
- [ ] Get Ibox/Pending Messages
- [ ] Approve/Decline Pending Messages
- [ ] Reply Messages / Send Stories
- [ ] Detect Faces / Gender / Age Avg.
- [ ] Anti Ban Mode (Better with mobile proxies)
- [ ] Cookie validator/regenerator on Login
- [ ] "It was Me message" validator checker
- [ ] Low consumption proxies examples
- [ ] Create Workers/Bosses threads
- [ ] Cross Framework Support
- [ ] Cross Framework Instabot example
- [ ] Online Simulation
- [ ] CLI Alpha under construction
- [ ] Postprocessing of scrape list (detect faces, language, business accounts)

## Wiki

## Telegram group

## Follow the project

## Follow the development status

Follow the development status to see what's the next upcoming idea<br>

# Api
### Basic example
#### Using npm package
```javascript
require("insta-tools");

(async () => {

    let ig = await login();

    // .. Implement your code here
    let info = await getUserInfo(ig, "Instagram");
    console.log("User information, username: " + info.username);
    
    // ..
})();
```