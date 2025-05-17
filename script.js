 const body= document.querySelector('body');
    const h1= document.querySelector('h1');
    const btn= document.querySelector('#theme');
    const become= document.querySelector('#become');
    const cardOdd= document.querySelectorAll('.card-odd');
    const learn= document.querySelector('#learn');
    const accordian= document.querySelector('.question-accordian');
    const instructors= document.querySelector('#instructors');

    class Main{
        constructor(inject){
            this.inject= inject;
        }
        bindEvents() {
            btn.onclick= ()=> this.inject.changeColor();
        }
    }
    
    class Display{
        changeColor(){
            if(body.classList.contains('bg-dark')){
                become.classList.remove('bg-dark');
                btn.textContent= 'Dark Mode';
                body.classList.remove('bg-dark');
                cardOdd.forEach(card=> {
                    card.classList.remove('bg-success');
                    card.classList.add('bg-dark');
                })
                learn.classList.add('bg-secondary');
                learn.classList.remove('bg-dark');
                accordian.classList.remove('text-light');
                instructors.classList.add('bg-secondary');
                instructors.classList.remove('bg-dark');
            }else {
                become.classList.add('bg-dark');
                btn.textContent= 'Light Mode';
                body.classList.add('bg-dark');
                cardOdd.forEach(card=> {
                    card.classList.remove('bg-dark');
                    card.classList.add('bg-success');
                })
                learn.classList.remove('bg-secondary');
                learn.classList.add('bg-dark');
                accordian.classList.add('text-light');
                instructors.classList.remove('bg-secondary');
                instructors.classList.add('bg-dark');
            }
        }
    }

    const darkMode= new Display();
    const main= new Main(darkMode);
    main.bindEvents();

    const map= new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([107.613765, -6.886002]),
            zoom: 18,
        })
    })
    // Tambahkan marker ke lokasi 99ers
    const marker = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat([107.613765, -6.886002]))
    });

    const vectorSource = new ol.source.Vector({
      features: [marker]
    });

    const markerVectorLayer = new ol.layer.Vector({
      source: vectorSource
    });

map.addLayer(markerVectorLayer);