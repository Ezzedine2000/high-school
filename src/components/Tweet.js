
// import axios from 'axios';
// const CONSUMER_KEY = "cpXZoSD3uJr7OlFaxr8UsT3pb";
// const CONSUMER_SECRET = "4kJXksx03PMvJCcSclFTX1frEPtt1TNHXjBIloBhvyB6jDM58B";
// const ACCESS_TOKEN = "1457437811989258244-pN7Lz6CMSlzGNmD1rmi4DS1Q13Xp73";
// const ACCESS_TOKEN_SECRET = "kl8qPfd2V1041BRrcOL7PRAgRRjdtSuqYCoRFCjnpMP7p";
// // const headers = {
// //     "Authorization": `Bearer ${ACCESS_TOKEN}`,
// // };

// // const request = axios.get("https://api.twitter.com/1.1/statuses/home_timeline.json", {
// //     headers,
// // });

// // request.then((response) => {
// //     console.log(response.data);
// // });


// // const CONSUMER_KEY = "cpXZoSD3uJr7OlFaxr8UsT3pb";
// // const CONSUMER_SECRET = "4kJXksx03PMvJCcSclFTX1frEPtt1TNHXjBIloBhvyB6jDM58B";
// // const ACCESS_TOKEN = "1457437811989258244-pN7Lz6CMSlzGNmD1rmi4DS1Q13Xp73";
// // const ACCESS_TOKEN_SECRET = "kl8qPfd2V1041BRrcOL7PRAgRRjdtSuqYCoRFCjnpMP7p";





// import React, { useEffect, useState } from 'react';
// import { Timeline } from 'react-twitter-widgets';
// import twitterText from 'twitter-text';

// const Tweets = () => {
//   const [imageUrls, setImageUrls] = useState([]);

//   useEffect(() => {
//     // استدعاء دالة لاستخراج الصور عند تحميل التغريدات
//     extractImagesFromTweets();
//   }, []);

//   const extractImagesFromTweets = () => {
//     // قم بتعويض اسم الحساب بالحساب الذي تريد عرض تغريداته
//     const screenName = "smartechdaily";

//     // قم بتعويض معرف التغريدة بتغريدة فعلية من حساب الحساب المراد عرض تغريداته
//     const tweetText = "عندك الفرصة تختار جهاز واحد، أي جهاز ستختار؟";

//     // استخراج روابط الصور من نص التغريدة
//     const extractedMedia = twitterText.extractUrlsWithIndices(tweetText);

//     // تصفية الروابط لتحديد الصور فقط
//     const imageUrls = extractedMedia.filter(urlInfo =>
//       urlInfo.url.match(/\.(jpg|jpeg|png|gif)$/i)
//     ).map(urlInfo => urlInfo.url);

//     setImageUrls(imageUrls);
//   };

//   return (
//     <div className="App">
//       <h1>تغريدات الحساب</h1>
//       <TwitterTimelineEmbed
//         sourceType="profile"
//         screenName="smartechdaily"
//         options={{ height: 400 }}
//       />
//       <h2>الصور المرتبطة بالتغريدة</h2>
//       <div className="image-container">
//         {imageUrls.map((imageUrl, index) => (
//           <img key={index} src={imageUrl} alt={`صورة ${index + 1}`} />
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Tweets;





// import { Timeline } from 'react-twitter-widgets';
// const Tweeters = () => {
//     return (
//         <div>
//             <Timeline
//                 dataSource={{
//                     sourceType: 'profile',
//                     screenName: 'yazn_108',
//                 }}
//                 options={{
//                     width: '50%',
//                     height: 400 
//                 }}
//             />
//         </div>
//     );
// };
// export default Tweeters;







// // const CONSUMER_KEY = "cpXZoSD3uJr7OlFaxr8UsT3pb";
// // const CONSUMER_SECRET = "4kJXksx03PMvJCcSclFTX1frEPtt1TNHXjBIloBhvyB6jDM58B";
// // const ACCESS_TOKEN = "1457437811989258244-pN7Lz6CMSlzGNmD1rmi4DS1Q13Xp73";
// // const ACCESS_TOKEN_SECRET = "kl8qPfd2V1041BRrcOL7PRAgRRjdtSuqYCoRFCjnpMP7p";



const Twit = require('twit');
const notifier = require('node-notifier');
const open = require('open');
const franc = require('franc');

const apikey = 'cpXZoSD3uJr7OlFaxr8UsT3pb';
const apiSecretKey = '4kJXksx03PMvJCcSclFTX1frEPtt1TNHXjBIloBhvyB6jDM58B';
const accessToken = '1457437811989258244-pN7Lz6CMSlzGNmD1rmi4DS1Q13Xp73';
const accessTokenSecret = 'kl8qPfd2V1041BRrcOL7PRAgRRjdtSuqYCoRFCjnpMP7p';

var T = new Twit({
    consumer_key: apikey,
    consumer_secret: apiSecretKey,
    access_token: accessToken,
    access_token_secret: accessTokenSecret,
});

(async () => {

    var sanFrancisco = ['-122.75', '36.8', '-121.75', '37.8'];
    var stream = T.stream('statuses/filter', { locations: sanFrancisco });
    stream.on('tweet', function (tweet) {
        console.log(tweet.text);
        let url = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`;

        notifier.notify({
            title: tweet.user.name,
            message: tweet.text
        });

        notifier.on('click', async function (notifierObject, options, event) {
            console.log('clicked');
            await open(url);
        });
    });
})();
