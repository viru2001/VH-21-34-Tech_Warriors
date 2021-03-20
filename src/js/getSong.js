const getSongs = async () => {

    try {
        const setHeader = {
            headers: {
                Accept: 'application/json'
            }
        }

        const response = await fetch('https://music8291.herokuapp.com/playlist/?query=https://www.jiosaavn.com/featured/happy-hours---weekly-jukebox/PCkWsBCcc4cGSw2I1RxdhQ__', setHeader)
        const data = await response.json();

        htmlData = ""
      
        let playlist = document.getElementById('playlist');

        for (i = 0; i < data.songs.length; i++) {

          


            let song = document.createElement('a');
            song.classList.add("play")
            song.setAttribute('href',"#")
            song.setAttribute('data-id', String(i + 1))
            song.setAttribute('data-url', data.songs[i].media_url)
            song.setAttribute('data-album', data.songs[i].album)
            song.setAttribute('data-title', data.songs[i].song);
            song.setAttribute('data-albumart', data.songs[i].image)
            // song.innerText = '<div class="album-thumb pull-left"><img src="http://k007.kiwi6.com/hotlink/aq9oct1t26/Sounds-better-Loud-Partial-mp3-image.jpg"></div><div class="songs-info pull-left"><div class="song-title">Dad\'s Song</div><div class="songs-detail"><span class="song-artist">Stan Williams</span> - <span class="album">Peace Pipe</span></div></div>';
            playlist.appendChild(song);

        }
        // console.log(playlist.innerHTML);
    }
    catch (err) {
        console.log(`error is : ${err}`);
    }


}

getSongs()
