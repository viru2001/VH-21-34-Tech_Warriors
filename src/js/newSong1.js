
function createTrackItem(index,name,duration){
    var trackItem = document.createElement('div');
    trackItem.setAttribute("class", "playlist-track-ctn");
    trackItem.setAttribute("id", "ptc-"+index);
    trackItem.setAttribute("data-index", index);
    document.querySelector(".playlist-ctn").appendChild(trackItem);

    var playBtnItem = document.createElement('div');
    playBtnItem.setAttribute("class", "playlist-btn-play");
    playBtnItem.setAttribute("id", "pbp-"+index);
    document.querySelector("#ptc-"+index).appendChild(playBtnItem);

    var btnImg = document.createElement('i');
    btnImg.setAttribute("class", "fas fa-play");
    btnImg.setAttribute("height", "40");
    btnImg.setAttribute("width", "40");
    btnImg.setAttribute("id", "p-img-"+index);
    document.querySelector("#pbp-"+index).appendChild(btnImg);

    var trackInfoItem = document.createElement('div');
    trackInfoItem.setAttribute("class", "playlist-info-track");
    trackInfoItem.innerHTML = name
    document.querySelector("#ptc-"+index).appendChild(trackInfoItem);

    var trackDurationItem = document.createElement('div');
    trackDurationItem.setAttribute("class", "playlist-duration");
    trackDurationItem.innerHTML = duration
    document.querySelector("#ptc-"+index).appendChild(trackDurationItem);
  }

//   var listAudio = [
//     {
//       name:"Artist 1 - audio 1",
//       file:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
//       duration:"08:47"
//     },
//     {
//       name:"Artist 2 - audio 2",
//       file:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
//       duration:"05:53"
//     },
//     {
//       name:"Artist 3 - audio 3",
//       file:"https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_1MG.mp3",
//       duration:"00:27"
//     }
//   ]
let listAudioHappy = 
[{"name":"Jingle Bell-Jingle Bell","file":"https://aac.saavncdn.com/920/bc7bb6e427de9c49fcb69e2054460980_320.mp4","duration":"196"},{"name":"Drunk n High-Drunk n High","file":"https://aac.saavncdn.com/047/9a1706b54bab33a1d90eaf3ea46e0233_320.mp4","duration":"208"},{"name":"Aashiqui 2-Bhula Dena","file":"https://aac.saavncdn.com/430/22b12410a6a242bf9b66e8b99d02254b_320.mp4","duration":"240"},{"name":"Murder 2-Aye Khuda","file":"https://aac.saavncdn.com/687/b1555c689ca4aa04c87acaf12ed4cbfb_320.mp4","duration":"412"},{"name":"Amar Prem-Chingari Koi Bhadke","file":"https://aac.saavncdn.com/548/33d40dde9468fa20aac0a9f0ba269b32_320.mp4","duration":"319"},{"name":"Aashiqui 2-Piya Aaye Na","file":"https://aac.saavncdn.com/430/88c3dd26aa85ad213afd4f1c6ffd99c9_320.mp4","duration":"286"},{"name":"Naajayaz-Barsaat Ke Mausam Mein","file":"https://aac.saavncdn.com/769/dbb26460d188ef02ca553868e9ce981d_320.mp4","duration":"524"},{"name":"Phantom-Saware","file":"https://aac.saavncdn.com/951/c1d83d62b27c81212ade038f29657a13_320.mp4","duration":"321"},{"name":"One Bottle Down-One Bottle Down","file":"https://aac.saavncdn.com/834/4d5df4c0ed281380a1bcd358e5d095c1_320.mp4","duration":"197"},{"name":"Sharaabi-Intaha Ho Gai Intezar Ki","file":"https://aac.saavncdn.com/483/d5ca8e666a031bbae15de09eef0400dd_320.mp4","duration":"530"},{"name":"Dilliwaali Zaalim Girlfriend-Birthday Bash","file":"https://aac.saavncdn.com/763/d8ce763a0db6db24e0debdc5aca44d72_320.mp4","duration":"252"},{"name":"Main Sharabi-Main Sharabi","file":"https://aac.saavncdn.com/952/5124f1d8e1cfdab9c2494099ba89f593_320.mp4","duration":"212"},{"name":"Kalyug-Aadat","file":"https://aac.saavncdn.com/381/3092cb6e630da3e4995b1803b632cb30_320.mp4","duration":"335"},{"name":"Muqaddar Ka Sikandar-O Saathi Re - Male","file":"https://aac.saavncdn.com/665/adc191e1c9a510ef8252c458c520a189_320.mp4","duration":"270"},{"name":"Raja Hindustani-Tere Ishq Mein Naachenge","file":"https://aac.saavncdn.com/629/e22ac986bf523d28fb43284798d3ce76_320.mp4","duration":"494"},{"name":"Mere Dad Ki Maruti-Punjabiyaan Di Battery","file":"https://aac.saavncdn.com/573/46eb2f1cff5bbd949691fd9b1f579663_320.mp4","duration":"199"},{"name":"Bajrangi Bhaijaan-Aaj Ki Party","file":"https://aac.saavncdn.com/381/d85cf1d3db7b1ec36894d12d045bdd0a_320.mp4","duration":"280"},{"name":"Amar Prem-Kuchh To Log Kahenge","file":"https://aac.saavncdn.com/548/178755114f43fbd7f8d45a6a9ab72fe2_320.mp4","duration":"259"},{"name":"2 States-Iski Uski","file":"https://aac.saavncdn.com/930/2598dd928d7f7870992f03141772926a_320.mp4","duration":"255"},{"name":"Aandhi-Tere Bina Zindagi Se","file":"https://aac.saavncdn.com/292/eeb3a99433515a3cb53f23770882125e_320.mp4","duration":"354"},{"name":"Aashiqui 2-Milne Hai Mujhse Aayi","file":"https://aac.saavncdn.com/430/8e6279c6f69a10eb5be9473cbaa5f850_320.mp4","duration":"295"},{"name":"Rockstar-Jo Bhi Main","file":"https://aac.saavncdn.com/274/a0c47c2ade58e93115e1774c9199e33b_320.mp4","duration":"275"},{"name":"Karma-De Daru","file":"https://aac.saavncdn.com/804/967fb62b054537573f8257d9e7d3e070_320.mp4","duration":"403"},{"name":"Entertainment-Johnny Johnny","file":"https://aac.saavncdn.com/186/51fe11634bb9b4196859d5edc906e3a8_320.mp4","duration":"185"}]

let listAudioSad =
[{"name":"Pachtaoge (From 'Jaani Ve')-Pachtaoge (From 'Jaani Ve')","file":"https://aac.saavncdn.com/200/35c0c9ddb5ad17460ba1442632fbc271_320.mp4","duration":"226"},{"name":"Kabir Singh-Bekhayali (Arijit Singh Version)","file":"https://aac.saavncdn.com/807/f1e8642d89c0719ae566459394935a22_320.mp4","duration":"370"},{"name":"Badrinath Ki Dulhania-Roke Na Ruke Naina","file":"https://aac.saavncdn.com/804/07cc88c746fe9c34de216394603f6ea7_320.mp4","duration":"279"},{"name":"Ae Dil Hai Mushkil-Channa Mereya","file":"https://aac.saavncdn.com/597/6da0627cfcc4b937160f664841e4572d_320.mp4","duration":"289"},{"name":"Hamari Adhuri Kahani (Original Motion Picture Soundtrack)-Hamari Adhuri Kahani","file":"https://aac.saavncdn.com/577/2c5bf729939345ca2e90cd29203b13ea_320.mp4","duration":"398"},{"name":"Badlapur-Judaai","file":"https://aac.saavncdn.com/940/c7863ad397f08db2ddd18327018cafe7_320.mp4","duration":"271"},{"name":"Raaz Reboot-Lo Maan Liya","file":"https://aac.saavncdn.com/311/d60d7e9b00fb632d0518d4145e3f3eb1_320.mp4","duration":"300"},{"name":"Ae Dil Hai Mushkil-Ae Dil Hai Mushkil Title Track","file":"https://aac.saavncdn.com/597/3b003e3fd083bad975ca12ca6f83c94d_320.mp4","duration":"268"},{"name":"Tamasha-Agar Tum Saath Ho","file":"https://aac.saavncdn.com/994/2e6b47719cea3e7c9f971a3f1ddc9b0a_320.mp4","duration":"341"},{"name":"Sonu Ke Titu Ki Sweety-Tera Yaar Hoon Main","file":"https://aac.saavncdn.com/074/1f7370aa302c7fec4d6b2bec451abbae_320.mp4","duration":"264"},{"name":"Aashiqui 2-Milne Hai Mujhse Aayi","file":"https://aac.saavncdn.com/430/8e6279c6f69a10eb5be9473cbaa5f850_320.mp4","duration":"295"},{"name":"Humpty Sharma Ki Dulhania-Samjhawan","file":"https://aac.saavncdn.com/540/f807aad8e5c60a87334231f72267c725_320.mp4","duration":"269"},{"name":"Dangal-Naina","file":"https://aac.saavncdn.com/480/8e331fbcb8dd8b43f5f8918b1def2cca_320.mp4","duration":"225"},{"name":"Dongri Ka Raja-Piya Tu Piya","file":"https://aac.saavncdn.com/338/ca3e8f45700e3e6a6f863cc4279d5ae3_320.mp4","duration":"237"},{"name":"Mr. X-Teri Khushboo (Male)","file":"https://aac.saavncdn.com/931/0390fed32dd44520c9432b596079ebba_320.mp4","duration":"342"}]

let listAudioSurprised =
[{"name":"Nadiyon Paar (Let the Music Play Again) (From 'Roohi')-Nadiyon Paar (Let the Music Play Again) (From 'Roohi')","file":"https://aac.saavncdn.com/505/07702ecf5773a718b835a2cca381429e_320.mp4","duration":"164"},{"name":"Top Tucker-Top Tucker","file":"https://aac.saavncdn.com/970/fb82ce3cab8089dda8a4a0fd52da5338_320.mp4","duration":"205"},{"name":"Panghat (From 'Roohi')-Panghat (From 'Roohi')","file":"https://aac.saavncdn.com/399/7544077cce8940c56249e9329a838ba6_320.mp4","duration":"179"},{"name":"War-Jai Jai Shivshankar","file":"https://aac.saavncdn.com/881/374283a91cd721f65f59e3a49e6f5623_320.mp4","duration":"230"},{"name":"Laxmii-BurjKhalifa","file":"https://aac.saavncdn.com/682/c7108b6293cc1e4a5d317f5a5e7317e1_320.mp4","duration":"187"},{"name":"Shaitan Ka Saala (From 'Housefull 4')-Shaitan Ka Saala (From 'Housefull 4')","file":"https://aac.saavncdn.com/447/6e214a384b434a699cc7ea80908ab8f1_320.mp4","duration":"147"},{"name":"Genda Phool-Genda Phool","file":"https://aac.saavncdn.com/991/8efb3ed04260fdd52e5b42b06593ffe4_320.mp4","duration":"168"},{"name":"Sona Lagda-Sona Lagda","file":"https://aac.saavncdn.com/714/e920c776be76fa1073d6333ba06bf73b_320.mp4","duration":"195"},{"name":"Muqabla (From 'Street Dancer 3D')-Muqabla","file":"https://aac.saavncdn.com/597/71881e129db31cd41beeeb5fe3090f64_320.mp4","duration":"176"},{"name":"Naach Meri Rani-Naach Meri Rani","file":"https://aac.saavncdn.com/248/e60a214fe3385eac95ef3d8fb09bb140_320.mp4","duration":"212"},{"name":"Haan Main Galat (From 'Love Aaj Kal')-Haan Main Galat (From 'Love Aaj Kal')","file":"https://aac.saavncdn.com/205/32d8728d6dc9f6ee7e00a3d28c46d4a3_320.mp4","duration":"218"},{"name":"Good Newwz-Chandigarh Mein","file":"https://aac.saavncdn.com/753/d168b0d580054e712ecf00fc86b3a151_320.mp4","duration":"205"},{"name":"Jawaani Jaaneman-Gallan Kardi","file":"https://aac.saavncdn.com/423/9350d142b11210217ff344c478af692e_320.mp4","duration":"194"},{"name":"Nachunga Aise-Nachunga Aise","file":"https://aac.saavncdn.com/589/484e2b04fcc4eb08ab41ce3d7eab5267_320.mp4","duration":"178"},{"name":"Paagal-Paagal","file":"https://aac.saavncdn.com/831/dbf5d116d73b1f90cb65f1619bcc045d_320.mp4","duration":"171"},{"name":"Songs of Trance-Raavan","file":"https://aac.saavncdn.com/534/aca18ec8ff2a8442b6a7c29e75d8999c_320.mp4","duration":"240"},{"name":"Student of the Year 2-The Jawaani Song","file":"https://aac.saavncdn.com/865/fd8fa67800338a28842d755f26374c23_320.mp4","duration":"253"},{"name":"Judgementall Hai Kya-The Wakhra Song","file":"https://aac.saavncdn.com/202/6777fa0bd7d4b8662cea5e487aee2801_320.mp4","duration":"196"},{"name":"Bharat-Slow Motion","file":"https://aac.saavncdn.com/784/d2195df2c29961c815c1a1c557855d9b_320.mp4","duration":"247"},{"name":"Don't Be Shy Again (From 'Bala')-Don't Be Shy Again (From 'Bala')","file":"https://aac.saavncdn.com/150/0168942622cd009fd085676cdfaa8bdb_320.mp4","duration":"163"},{"name":"Kalank-First Class","file":"https://aac.saavncdn.com/784/aa7c6c1adeb4fafd4bf8b704feb8d0ea_320.mp4","duration":"276"},{"name":"I Am A Disco Dancer 2.0 - Tiger Shroff-I Am A Disco Dancer 2.0","file":"https://aac.saavncdn.com/295/3f59a3dce734b1c5116f065d9fa4dd4e_320.mp4","duration":"186"},{"name":"Stree-Milegi Milegi","file":"https://aac.saavncdn.com/388/21c637357b5d90bf7639740d129ce224_320.mp4","duration":"153"},{"name":"Luka Chuppi-Coca Cola","file":"https://aac.saavncdn.com/685/1fa4872220d75e81094742c2f17dbe99_320.mp4","duration":"179"},{"name":"Thumka (From 'Pagalpanti')-Thumka (From 'Pagalpanti')","file":"https://aac.saavncdn.com/244/1d85f7b2e7c1c990054164a4d5de5fa4_320.mp4","duration":"170"},{"name":"Dhadak-Zingaat","file":"https://aac.saavncdn.com/070/3e92c4dca618fd80f83da3a892ed91e6_320.mp4","duration":"226"},{"name":"Titli Trippin-Titli Trippin","file":"https://aac.saavncdn.com/849/b68c9b89c9ac0daa3b184f6597409542_320.mp4","duration":"138"},{"name":"Happy Hardy And Heer-Ashiqui Mein Teri 2.0 Remix By Kiran Kamath","file":"https://aac.saavncdn.com/181/57b27f00fd61fa22a794473909545d7c_320.mp4","duration":"316"},{"name":"BIBA-BIBA","file":"https://aac.saavncdn.com/987/03f9cd50555cbf24f251b195afaceb92_320.mp4","duration":"175"},{"name":"Koka (From 'Khandaani Shafakhana')-Koka (From 'Khandaani Shafakhana')","file":"https://aac.saavncdn.com/380/fed660d8af2dc63f703a1ccf3f591097_320.mp4","duration":"171"},{"name":"Namaste England (Original Motion Picture Soundtrack)-Proper Patola","file":"https://aac.saavncdn.com/036/00bed7becbc2de116954b89739585196_320.mp4","duration":"176"},{"name":"Nawabzaade-High Rated Gabru","file":"https://aac.saavncdn.com/326/279b9d0d8d5706150f01e12a50034789_320.mp4","duration":"179"},{"name":"De De Pyaar De-Hauli Hauli","file":"https://aac.saavncdn.com/777/0953024a8e4edaf5a1d591eb1c8f6b9b_320.mp4","duration":"209"},{"name":"Sonu Ke Titu Ki Sweety-Chhote Chhote Peg","file":"https://aac.saavncdn.com/074/8e3e88b1985835db0c57869622e0efe0_320.mp4","duration":"204"},{"name":"Tiger Zinda Hai-Swag Se Swagat","file":"https://aac.saavncdn.com/351/34d43b13709618c3f25975e5b4dafc1a_320.mp4","duration":"235"},{"name":"Jagga Jasoos-Galti Se Mistake","file":"https://aac.saavncdn.com/511/b9e5475c13306dad8c3f26ce9045e250_320.mp4","duration":"203"},{"name":"Loveyatri - A Journey Of Love-Chogada","file":"https://aac.saavncdn.com/401/6dee5bf724016e494f2b08bc868824ad_320.mp4","duration":"249"},{"name":"Bom Diggy-Bom Diggy","file":"https://aac.saavncdn.com/240/2aadba62ec424782c9a3434a21b70639_320.mp4","duration":"207"},{"name":"Hindi Medium-Oh Ho Ho Ho (Remix)","file":"https://aac.saavncdn.com/989/5013cab8e392df20dd26372d6324d5db_320.mp4","duration":"245"},{"name":"Race 3-Heeriye","file":"https://aac.saavncdn.com/628/abc23719e37d5659c741b6d20a0b0fb4_320.mp4","duration":"305"},{"name":"Satyameva Jayate-Dilbar","file":"https://aac.saavncdn.com/333/35b50861b2ab58628f3dea16d87cd546_320.mp4","duration":"184"},{"name":"Mercy-Mercy","file":"https://aac.saavncdn.com/559/5d6f79408917c1570b3041536bb76551_320.mp4","duration":"162"},{"name":"Golmaal Again !!!-Golmaal Title Track","file":"https://aac.saavncdn.com/887/bf6b049d6c4a49497ad2b873407aa97e_320.mp4","duration":"264"},{"name":"Badrinath Ki Dulhania-Tamma Tamma Again","file":"https://aac.saavncdn.com/804/57e867f0350a6dd1d118160d36b4290d_320.mp4","duration":"199"},{"name":"F.A.L.T.U-Char Baj Gaye (Party Abhi Baaki Hai)","file":"https://aac.saavncdn.com/507/2e278b75ff6607c412c2778e8d118f92_320.mp4","duration":"213"},{"name":"Raees-Laila Main Laila","file":"https://aac.saavncdn.com/334/5eaf2f51c8fa8268316438d0bd66daf5_320.mp4","duration":"306"},{"name":"OK Jaanu (Original Motion Picture Soundtrack)-The Humma Song","file":"https://aac.saavncdn.com/835/c1dd33f01ec7b2d9423b20463f297f67_320.mp4","duration":"180"},{"name":"Tubelight-Radio","file":"https://aac.saavncdn.com/196/7646970f7fc63cb0c3a9a26487e46035_320.mp4","duration":"279"},{"name":"A Flying Jatt-Beat Pe Booty","file":"https://aac.saavncdn.com/339/659f13034d78aff97c4452ca63c7f9f2_320.mp4","duration":"197"},{"name":"Bareilly Ki Barfi-Sweety Tera Drama","file":"https://aac.saavncdn.com/620/af072104e928643b6876e4d0fb6b449d_320.mp4","duration":"147"}]

let listAudioNeutral = 
[{"name":"Kapoor & Sons (Since 1921)-Kar Gayi Chull","file":"https://aac.saavncdn.com/331/390d373616f71701f3b44548c0aa1be4_320.mp4","duration":"187"},{"name":"Baar Baar Dekho-Kala Chashma","file":"https://aac.saavncdn.com/279/ac760f157a9cf82a96ac1440b01bdf18_320.mp4","duration":"187"},{"name":"Airlift-Soch Na Sake","file":"https://aac.saavncdn.com/026/335ea6a63ec7a32bd0403ae809a1ab36_320.mp4","duration":"287"},{"name":"Ae Dil Hai Mushkil-Ae Dil Hai Mushkil Title Track","file":"https://aac.saavncdn.com/597/3b003e3fd083bad975ca12ca6f83c94d_320.mp4","duration":"268"},{"name":"Rustom-Tere Sang Yaara","file":"https://aac.saavncdn.com/298/74e78bbd04353f2fb7059c4b41ec15b1_320.mp4","duration":"290"},{"name":"Sultan-Jag Ghoomeya","file":"https://aac.saavncdn.com/778/20e6120f607ce81a66f7e0500c73a15c_320.mp4","duration":"281"},{"name":"Sanam Re-Sanam Re","file":"https://aac.saavncdn.com/829/60f214aa16aadb4de15be6db3e962232_320.mp4","duration":"308"},{"name":"Kapoor & Sons (Since 1921)-Bolna","file":"https://aac.saavncdn.com/331/ca4c0939a440341fafe6356633fc5f25_320.mp4","duration":"213"},{"name":"Baaghi-Sab Tera","file":"https://aac.saavncdn.com/454/d7f52331560c7b79dae9f0e6b8b0bdd8_320.mp4","duration":"228"},{"name":"Azhar-Bol Do Na Zara","file":"https://aac.saavncdn.com/633/2fddfdf78b3c810d561b594d15a9456b_320.mp4","duration":"293"},{"name":"Sultan-Baby Ko Bass Pasand Hai","file":"https://aac.saavncdn.com/778/4a001ecfab8a32df030ff23847d0635a_320.mp4","duration":"253"},{"name":"Ae Dil Hai Mushkil-Bulleya","file":"https://aac.saavncdn.com/597/a9f560292b8c8dab12b4e9a153029f4e_320.mp4","duration":"348"},{"name":"Airlift-Dil Cheez Tujhe Dedi","file":"https://aac.saavncdn.com/026/fb57bc28fbefbcbcfed5403d875eec93_320.mp4","duration":"271"},{"name":"Ae Dil Hai Mushkil-Channa Mereya","file":"https://aac.saavncdn.com/597/6da0627cfcc4b937160f664841e4572d_320.mp4","duration":"289"},{"name":"Befikre-Nashe Si Chadh Gayi","file":"https://aac.saavncdn.com/256/6786cb875bc75dd60a541261ef04a919_320.mp4","duration":"237"},{"name":"Ki & Ka-High Heels Te Nachche","file":"https://aac.saavncdn.com/973/055092f943676fad575f41d6eea800e5_320.mp4","duration":"212"},{"name":"Dishoom-Sau Tarah Ke","file":"https://aac.saavncdn.com/231/3369b08221e00b634a13f8ad001d7c54_320.mp4","duration":"238"},{"name":"Jabra Fan (From 'Fan')-Jabra Fan (From 'Fan')","file":"https://aac.saavncdn.com/461/93544a496b83111549e3a579b1c042c4_320.mp4","duration":"225"},{"name":"Udta Punjab-Chitta Ve","file":"https://aac.saavncdn.com/901/bc39d74eafaa462da563d5419edf2201_320.mp4","duration":"287"},{"name":"M.S. Dhoni - The Untold Story-Kaun Tujhe","file":"https://aac.saavncdn.com/569/6a016eb165b341281a97bc570f70c1d4_320.mp4","duration":"242"},{"name":"A Flying Jatt-Beat Pe Booty","file":"https://aac.saavncdn.com/339/659f13034d78aff97c4452ca63c7f9f2_320.mp4","duration":"197"},{"name":"Raaz Reboot-Lo Maan Liya","file":"https://aac.saavncdn.com/311/d60d7e9b00fb632d0518d4145e3f3eb1_320.mp4","duration":"300"},{"name":"Sarbjit-Salamat","file":"https://aac.saavncdn.com/655/60e72d402d6fb007c51829fc9ca3c1a9_320.mp4","duration":"269"},{"name":"Baar Baar Dekho-Sau Aasmaan","file":"https://aac.saavncdn.com/279/295984541bc830d75580f2a8f1d80376_320.mp4","duration":"234"},{"name":"Sanam Re-Hua Hain Aaj Pehli Baar","file":"https://aac.saavncdn.com/829/2b61f8b4be3166b8d7b9a135a6d29f87_320.mp4","duration":"309"},{"name":"Baar Baar Dekho-Nachde Ne Saare","file":"https://aac.saavncdn.com/279/71bf51365678794579b80adc986a61fe_320.mp4","duration":"194"},{"name":"One Night Stand-Ijazat","file":"https://aac.saavncdn.com/239/8013d2c6da9f7075a978f4b48e0ab0bd_320.mp4","duration":"289"},{"name":"Shivaay-Darkhaast","file":"https://aac.saavncdn.com/550/667292c2024814298696b68c971b171e_320.mp4","duration":"375"},{"name":"Mohenjo Daro-Tu Hai","file":"https://aac.saavncdn.com/335/7872d37777605977b162411e3aa02320_320.mp4","duration":"239"},{"name":"Do Lafzon Ki Kahani-Kuch To Hai","file":"https://aac.saavncdn.com/677/ef3b308afa19a01b4eb49e52affa175a_320.mp4","duration":"248"},{"name":"Loveshhuda-Mar Jaayen (Radio Edit)","file":"https://aac.saavncdn.com/012/77fe7d5bf0bf06b7b7133471a4c3ab39_320.mp4","duration":"225"},{"name":"A Flying Jatt-Toota Jo Kabhi Tara","file":"https://aac.saavncdn.com/339/213696cde605f1d38ee39f6059bb6397_320.mp4","duration":"305"},{"name":"Sanam Teri Kasam-Kheech Meri Photo","file":"https://aac.saavncdn.com/321/bcf18a2499bf1615d0f9987fd4ea327e_320.mp4","duration":"266"},{"name":"Housefull 3-Taang Uthake","file":"https://aac.saavncdn.com/349/6a4e7338a6daaefb1f9d1773ec1275d9_320.mp4","duration":"250"}];

let listAudioAngry = 
[{"name":"Bhaag Milkha Bhaag-Bhaag Milkha Bhaag (Rock Version)","file":"https://aac.saavncdn.com/575/e6f240e5eaefcde37551e25310ed0447_320.mp4","duration":"280"},{"name":"Mary Kom-Ziddi Dil","file":"https://aac.saavncdn.com/988/84805c20e35fadb6910485c97f6f0538_320.mp4","duration":"286"},{"name":"Dangal-Dangal","file":"https://aac.saavncdn.com/480/dec8a44e725e68c682962df67e7909dc_320.mp4","duration":"299"},{"name":"Sultan-Sultan","file":"https://aac.saavncdn.com/778/d974ed77e7afa4f1acb018e4e26c9946_320.mp4","duration":"280"},{"name":"Sanju-Kar Har Maidaan Fateh","file":"https://aac.saavncdn.com/319/d3527e7086440a3948677ae0fd591c04_320.mp4","duration":"311"},{"name":"Baaghi 2-Get Ready To Fight Again","file":"https://aac.saavncdn.com/203/9f164619eebb7403a98d906aaaf6e179_320.mp4","duration":"196"},{"name":"Tanhaji - The Unsung Warrior-Ghamand Kar","file":"https://aac.saavncdn.com/555/98ac8e007e42e671ed8342273f2de0d2_320.mp4","duration":"282"},{"name":"Gully Boy-Sher Aaya Sher","file":"https://aac.saavncdn.com/512/392bf8a2ca162bb61f6ba08fa8bd932a_320.mp4","duration":"134"},{"name":"Uri - The Surgical Strike-Jagga Jiteya","file":"https://aac.saavncdn.com/486/cbbad27bb5f3f23547f5d8c4fe6379aa_320.mp4","duration":"191"},{"name":"Mukkabaaz-Paintra (Extended Version)","file":"https://aac.saavncdn.com/322/4c50007f362ed72ffeca2dd8d3529ab8_320.mp4","duration":"232"},{"name":"Brothers-Brothers Anthem","file":"https://aac.saavncdn.com/805/521a5f14965a17d4284114f450cd597e_320.mp4","duration":"353"},{"name":"Goal-Hey Dude","file":"https://aac.saavncdn.com/145/7fa022b601acaac2eb1bf77fc789aab1_320.mp4","duration":"299"},{"name":"Dum-Dum (Version, 1)","file":"https://aac.saavncdn.com/799/c25d9081482349017a94fd074cdca7b8_320.mp4","duration":"298"},{"name":"Saala Khadoos-Jagaa Khunnas","file":"https://aac.saavncdn.com/503/a08efa6830c9c86a4d8d4ca3d9977314_320.mp4","duration":"260"},{"name":"Baahubali 2 - The Conclusion-Jiyo Re Bahubali","file":"https://aac.saavncdn.com/221/6c03554bd7ced7352ba0ad4c6d15b7ec_320.mp4","duration":"209"}]

let listAudioDisgusted =
[{"name":"Top Tucker-Top Tucker","file":"https://aac.saavncdn.com/970/fb82ce3cab8089dda8a4a0fd52da5338_320.mp4","duration":"205"},{"name":"Jawaani Jaaneman-Ole Ole 2.0","file":"https://aac.saavncdn.com/423/e1c647ce0478750db98d6c717110f2d2_320.mp4","duration":"145"},{"name":"Slow Motion (From 'Bharat')-Slow Motion (From 'Bharat')","file":"https://aac.saavncdn.com/559/c3561c1c8119fe77a12dc2444f3181f8_320.mp4","duration":"247"},{"name":"Aala Re Aala (From 'Simmba')-Aala Re Aala (From 'Simmba')","file":"https://aac.saavncdn.com/808/10e5cab5762585731c48db6599df0073_320.mp4","duration":"200"},{"name":"Shubh Mangal Zyada Saavdhan-Pyaar Tenu Karda Gabru","file":"https://aac.saavncdn.com/632/93413e42ce3f7d1d2895a5d60d3d5154_320.mp4","duration":"165"},{"name":"Inshallah (From Songs of Dance)-Inshallah (From Songs of Dance)","file":"https://aac.saavncdn.com/157/e9354bed980321fe57b9b1bfe5522be2_320.mp4","duration":"200"},{"name":"Naagin-Naagin","file":"https://aac.saavncdn.com/678/2f934a93b6fa0fd10e5992753fb7aea6_320.mp4","duration":"158"},{"name":"Prada-Prada","file":"https://aac.saavncdn.com/663/49fcd4f57dee006778414a0de258f11e_320.mp4","duration":"185"},{"name":"Dhadak-Zingaat","file":"https://aac.saavncdn.com/070/3e92c4dca618fd80f83da3a892ed91e6_320.mp4","duration":"226"},{"name":"Baaghi 2-Mundiyan","file":"https://aac.saavncdn.com/203/2f156aade19737665ceed34c179194c9_320.mp4","duration":"210"},{"name":"Don't Be Shy Again (From 'Bala')-Don't Be Shy Again (From 'Bala')","file":"https://aac.saavncdn.com/150/0168942622cd009fd085676cdfaa8bdb_320.mp4","duration":"163"},{"name":"BIBA-BIBA","file":"https://aac.saavncdn.com/987/03f9cd50555cbf24f251b195afaceb92_320.mp4","duration":"175"},{"name":"Jai Mummy Di-Mummy Nu Pasand (From 'Jai Mummy Di')","file":"https://aac.saavncdn.com/337/2e3a10435425a65ae83d8bf25e274e56_320.mp4","duration":"184"},{"name":"Befikre-Ude Dil Befikre","file":"https://aac.saavncdn.com/256/7c8c7bd8aaa722cd0aad9cd75fe9ce78_320.mp4","duration":"231"},{"name":"Sultan-Baby Ko Bass Pasand Hai","file":"https://aac.saavncdn.com/778/4a001ecfab8a32df030ff23847d0635a_320.mp4","duration":"253"},{"name":"Aa Jaana-Aa Jaana","file":"https://aac.saavncdn.com/006/d7fa80c1936bcebb67509b4316bec3e6_320.mp4","duration":"205"},{"name":"Dhoom 3-Dhoom Machale Dhoom","file":"https://aac.saavncdn.com/183/136067d8138d4496396a5980495e76ba_320.mp4","duration":"237"},{"name":"Race 2-Lat Lag Gayee","file":"https://aac.saavncdn.com/311/9fe3c9db6a999d3f0c75f95cd74d8e42_320.mp4","duration":"280"}]
// let listAudioScary =

let listAudio;
let image = document.getElementById('image');
if(localStorage.getItem("emotion") == "happy"){
    listAudio = listAudioHappy;
    image.setAttribute("src","images/happy.png")
}
else if(localStorage.getItem("emotion") == "sad"){
     listAudio = listAudioSad;
     image.setAttribute("src","images/sad.png")
}
else if(localStorage.getItem("emotion") == "surprise"){
     listAudio = listAudioSurprised;
     image.setAttribute("src","images/surprise.png")
}

else if(localStorage.getItem("emotion") == "neutral"){
    listAudio = listAudioNeutral;
    image.setAttribute("src","images/neutral.png")
}
else if(localStorage.getItem("emotion") == "angry"){
    listAudio = listAudioAngry;
    image.setAttribute("src","images/angry.png")
}
else if(localStorage.getItem("emotion") == "disgust"){
    listAudio = listAudioDisgusted;
    image.setAttribute("src","images/disgust.jpg")
}

for (var i = 0; i < listAudio.length; i++) {
      createTrackItem(i,listAudio[i].name,listAudio[i].duration);
  }
  var indexAudio = 0;

  function loadNewTrack(index){
    var player = document.querySelector('#source-audio')
    player.src = listAudio[index].file
    document.querySelector('.title').innerHTML = listAudio[index].name
    this.currentAudio = document.getElementById("myAudio");
    this.currentAudio.load()
    this.toggleAudio()
    this.updateStylePlaylist(this.indexAudio,index)
    this.indexAudio = index;
  }

  var playListItems = document.querySelectorAll(".playlist-track-ctn");

  for (let i = 0; i < playListItems.length; i++){
    playListItems[i].addEventListener("click", getClickedElement.bind(this));
  }

  function getClickedElement(event) {
    for (let i = 0; i < playListItems.length; i++){
      if(playListItems[i] == event.target){
        var clickedIndex = event.target.getAttribute("data-index")
        if (clickedIndex == this.indexAudio ) { // alert('Same audio');
            this.toggleAudio()
        }else{
            loadNewTrack(clickedIndex);
        }
      }
    }
  }

  document.querySelector('#source-audio').src = listAudio[indexAudio].file
  document.querySelector('.title').innerHTML = listAudio[indexAudio].name


  var currentAudio = document.getElementById("myAudio");

  currentAudio.load()
  
  currentAudio.onloadedmetadata = function() {
        document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
  }.bind(this);

  var interval1;

  function toggleAudio() {

    if (this.currentAudio.paused) {
      document.querySelector('#icon-play').style.display = 'none';
      document.querySelector('#icon-pause').style.display = 'block';
      document.querySelector('#ptc-'+this.indexAudio).classList.add("active-track");
      this.playToPause(this.indexAudio)
      this.currentAudio.play();
    }else{
      document.querySelector('#icon-play').style.display = 'block';
      document.querySelector('#icon-pause').style.display = 'none';
      this.pauseToPlay(this.indexAudio)
      this.currentAudio.pause();
    }
  }

  function pauseAudio() {
    this.currentAudio.pause();
    clearInterval(interval1);
  }

  var timer = document.getElementsByClassName('timer')[0]

  var barProgress = document.getElementById("myBar");


  var width = 0;

  function onTimeUpdate() {
    var t = this.currentAudio.currentTime
    timer.innerHTML = this.getMinutes(t);
    this.setBarProgress();
    if (this.currentAudio.ended) {
      document.querySelector('#icon-play').style.display = 'block';
      document.querySelector('#icon-pause').style.display = 'none';
      this.pauseToPlay(this.indexAudio)
      if (this.indexAudio < listAudio.length-1) {
          var index = parseInt(this.indexAudio)+1
          this.loadNewTrack(index)
      }
    }
  }


  function setBarProgress(){
    var progress = (this.currentAudio.currentTime/this.currentAudio.duration)*100;
    document.getElementById("myBar").style.width = progress + "%";
  }


  function getMinutes(t){
    var min = parseInt(parseInt(t)/60);
    var sec = parseInt(t%60);
    if (sec < 10) {
      sec = "0"+sec
    }
    if (min < 10) {
      min = "0"+min
    }
    return min+":"+sec
  }

  var progressbar = document.querySelector('#myProgress')
  progressbar.addEventListener("click", seek.bind(this));


  function seek(event) {
    var percent = event.offsetX / progressbar.offsetWidth;
    this.currentAudio.currentTime = percent * this.currentAudio.duration;
    barProgress.style.width = percent*100 + "%";
  }

  function forward(){
    this.currentAudio.currentTime = this.currentAudio.currentTime + 5
    this.setBarProgress();
  }

  function rewind(){
    this.currentAudio.currentTime = this.currentAudio.currentTime - 5
    this.setBarProgress();
  }


  function next(){
    if (this.indexAudio <listAudio.length-1) {
        var oldIndex = this.indexAudio
        this.indexAudio++;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }

  function previous(){
    if (this.indexAudio>0) {
        var oldIndex = this.indexAudio
        this.indexAudio--;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }

  function updateStylePlaylist(oldIndex,newIndex){
    document.querySelector('#ptc-'+oldIndex).classList.remove("active-track");
    this.pauseToPlay(oldIndex);
    document.querySelector('#ptc-'+newIndex).classList.add("active-track");
    this.playToPause(newIndex)
  }

  function playToPause(index){
    var ele = document.querySelector('#p-img-'+index)
    ele.classList.remove("fa-play");
    ele.classList.add("fa-pause");
  }

  function pauseToPlay(index){
    var ele = document.querySelector('#p-img-'+index)
    ele.classList.remove("fa-pause");
    ele.classList.add("fa-play");
  }


  function toggleMute(){
    var btnMute = document.querySelector('#toggleMute');
    var volUp = document.querySelector('#icon-vol-up');
    var volMute = document.querySelector('#icon-vol-mute');
    if (this.currentAudio.muted == false) {
       this.currentAudio.muted = true
       volUp.style.display = "none"
       volMute.style.display = "block"
    }else{
      this.currentAudio.muted = false
      volMute.style.display = "none"
      volUp.style.display = "block"
    }
  }
