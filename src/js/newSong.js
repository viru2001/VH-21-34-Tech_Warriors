let listAudio = []
const getSongs = async () => {

    try {
        const setHeader = {
            headers: {
                Accept: 'application/json'
            }
        }

        const response = await fetch('https://music8291.herokuapp.com/playlist/?query=https://www.jiosaavn.com/featured/dance-sweat-repeat/srMKhabpQhA_', setHeader)
        const data = await response.json();



        // let playlist = document.getElementById('playlist');
        
        for (i = 0; i < data.songs.length; i++) {
            myData = {}
            myData.name = data.songs[i].album + "-" + data.songs[i].song
            myData.file = data.songs[i].media_url
            myData.duration = data.songs[i].duration
            listAudio.push(myData)
         

        }
        // console.log(playlist.innerHTML);
        console.log(listAudio)
        let final_data = document.getElementById('myFinalData');
        final_data.innerHTML = JSON. stringify(listAudio) 
    }
    catch (err) {
        console.log(`error is : ${err}`);
    }


}

getSongs()