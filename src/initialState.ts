import {

    AppState,

    VideoSearchBar,
    VideoDetailModel

} from './modules/domain';

export const appState: AppState = {
    interfaceConfiguration: {
        commonConfiguration: {
            videoComplete: {
                byId: {
                    "1": {
                        id: "1",
                        videoId: "1",
                        videoDetailId: "1"
                    },
                    "2": {
                        id: "2",
                        videoId: "2",
                        videoDetailId: "2"
                    },
                    "3": {
                        id: "3",
                        videoId: "3",
                        videoDetailId: "3"
                    },
                    "4": {
                        id: "4",
                        videoId: "4",
                        videoDetailId: "4"
                    },
                    "5": {
                        id: "5",
                        videoId: "5",
                        videoDetailId: "5"
                    }
                },
                allIds: ["1","2","3","4","5"]
            },
            videoDetailMap: {
                byId: {
                    "1": {
                        id: "1",
                        title: "La Familia es para Siempre - Parkour Manizales - Gravedad Zero",
				        description: "La nueva entrega, esperamos lo disfruten tanto como nosotros grabando, han sido muchas aventuras, sonrisas, viajes, tiempo compartido en familia.",
                        url: "b9iV7Ks_XYQ"
                    },
                    "2": {
                        id: "2",
                        title: "Gravedad Zero Parkour Manizales - Pitman",
				        description: "Después de una fractura que duró al rededor de 5 meses, un integrante de Gravedad Zero vuelve a los entrenamientos, con toda la dedicación, entrega y amor ...",
                        url: "auRGCCzISNY"
                    },
                    "3": {
                        id: "3",
                        title: "¡ Especial de Navidad ! Gravedad Zero - Parkour Manizales !",
				        description: "Song: Carol Of The Bells (Dubstep) Traceurs: Cale - https:www.facebook.comCamiloGarcia.3Run?fref=ts Nitram ...",
                        url: "3q4es97LrvI"
                    },
                    "4": {
                        id: "4",
                        title: "¡ Nunca Caigas ! ¡ Parkour Manizales Gravedad Zero ! ¡Traceur Nitram !",
				        description: "Gran Traceur, gran amigo, gran hermano.. Hermano, espero que se recupere pronto!! Lo amo mucho!! Empezamos juntos, acabamos juntos!!",
                        url: "gaGkmSVnm_A"
                    },
                    "5": {
                        id: "5",
                        title: "Medesplazo 2016 || Gravedad Zero Parkour Manizales",
				        description: "Esta fue una experiencia excelente, esperamos tener muchos mas viajes para poder compartir mas momentos juntos. compartan :D.",
                        url: "0FYi7gK8894"
                    },
                },
                allIds: ["1","2","3","4","5"]
            },
            videosMap: {
                byId: {
                    "1": {
                        id:"1",
                        title:"La Familia es para Siempre - Parkour Manizales - Gravedad Zero",
                        videoImgUrl:"https://i.ytimg.com/vi/b9iV7Ks_XYQ/mqdefault.jpg",
                        videoDetailId:"1"
                    },
                    "2": {
                        id:"2",
                        title: "Gravedad Zero Parkour Manizales - Pitman",
                        videoImgUrl: "https://i.ytimg.com/vi/auRGCCzISNY/mqdefault.jpg",
                        videoDetailId: "2"
                    },
                    "3": {
                        id:"3",
                        title: "¡ Especial de Navidad ! Gravedad Zero - Parkour Manizales !",
                        videoImgUrl: "https://i.ytimg.com/vi/3q4es97LrvI/mqdefault.jpg",
                        videoDetailId: "3"
                    },
                    "4": {
                        id:"4",
                        title: "¡ Nunca Caigas ! ¡ Parkour Manizales Gravedad Zero ! ¡Traceur Nitram !",
                        videoImgUrl: "https://i.ytimg.com/vi/gaGkmSVnm_A/mqdefault.jpg",
                        videoDetailId: "4"
                    },
                    "5": {
                        id:"5",
                        title: "Medesplazo 2016 || Gravedad Zero Parkour Manizales",
                        videoImgUrl: "https://i.ytimg.com/vi/0FYi7gK8894/mqdefault.jpg",
                        videoDetailId: "5"
                    },
                },
                allIds: ["1","2","3","4","5"]
            }
        }
    },
    ui: {
        videoSearchBarModule: {
            videoSearchViewModel: new VideoSearchBar.VideoSearchViewModel()
        },
        videoDetailModule: {
            videoDetailViewModel: {
                videoSelected: {
                    id: "1",
                    description: "La nueva entrega, esperamos lo disfruten tanto como nosotros grabando, han sido muchas aventuras, sonrisas, viajes, tiempo compartido en familia.",
                    title: "La Familia es para Siempre - Parkour Manizales - Gravedad Zero",
                    url: "b9iV7Ks_XYQ"
                }
            }
        },
        videoPlayerModule: {
            videoPlayerViewModel: {
                videoSelected: {
                    id: "1",
                    description: "La nueva entrega, esperamos lo disfruten tanto como nosotros grabando, han sido muchas aventuras, sonrisas, viajes, tiempo compartido en familia.",
                    title: "La Familia es para Siempre - Parkour Manizales - Gravedad Zero",
                    url: "b9iV7Ks_XYQ"
                }
            }
        }
    }
};