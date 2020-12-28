import * as Project from 'component/Project'

import imageDelSol from 'page/portfolio/image/mobile/image-del-sol.jpg'
import imageHypers from 'page/portfolio/image/mobile/image-hypers.jpg'
import imageTrinity from 'page/portfolio/image/mobile/image-trinity.jpg'



const projects
  = [ { id          : 'delSol'
      , title       : 'Project Del Sol'
      , featured    : true
      , specs       : Project.Spec.create
                        ( { address    : 'New York, New York'
                          , role       : 'Preservation Architect'
                          , architects : [ 'Phillip Goldstein'
                                         , 'Kirby Blake'
                                         ]
                          , started    : new Date('1995-12-17')
                          , completed  : new Date('1996-06-01')
                          , status     : 'Complete'
                          }
                        )
      , description : ( 'The Seraph Station project challenged us '
                      + 'to design a unique station that would '
                      + 'transport people through time. The result '
                      + 'is a fresh and futuristic model inspired '
                      + 'by space stations.'
                      )
      , pictures    : [ { thumbnail : imageDelSol
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageHypers
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageTrinity
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      ].map( Project.Picture.create )
      }
    , { id          : '228b'
      , title       : '228B Tower'
      , featured    : true
      , specs       : Project.Spec.create
                        ( { address    : 'New York, New York'
                          , role       : 'Preservation Architect'
                          , architects : [ 'Phillip Goldstein'
                                         , 'Kirby Blake'
                                         ]
                          , started    : new Date('1995-12-17')
                          , completed  : new Date('1996-06-01')
                          , status     : 'Complete'
                          }
                        )
      , description : ( 'The Seraph Station project challenged us '
                      + 'to design a unique station that would '
                      + 'transport people through time. The result '
                      + 'is a fresh and futuristic model inspired '
                      + 'by space stations.'
                      )
      , pictures    : [ { thumbnail : imageDelSol
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageHypers
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageTrinity
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      ].map( Project.Picture.create )
      }
    , { id          : 'lePrototype'
      , title       : 'Le Prototype'
      , featured    : true
      , specs       : Project.Spec.create
                        ( { address    : 'New York, New York'
                          , role       : 'Preservation Architect'
                          , architects : [ 'Phillip Goldstein'
                                         , 'Kirby Blake'
                                         ]
                          , started    : new Date('1995-12-17')
                          , completed  : new Date('1996-06-01')
                          , status     : 'Complete'
                          }
                        )
      , description : ( 'The Seraph Station project challenged us '
                      + 'to design a unique station that would '
                      + 'transport people through time. The result '
                      + 'is a fresh and futuristic model inspired '
                      + 'by space stations.'
                      )
      , pictures    : [ { thumbnail : imageDelSol
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageHypers
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageTrinity
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      ].map( Project.Picture.create )
      }
    , { id          : 'seraphStation'
      , title       : 'Seraph Station'
      , featured    : true
      , specs       : Project.Spec.create
                        ( { address    : 'New York, New York'
                          , role       : 'Preservation Architect'
                          , architects : [ 'Phillip Goldstein'
                                         , 'Kirby Blake'
                                         ]
                          , started    : new Date('1995-12-17')
                          , completed  : new Date('1996-06-01')
                          , status     : 'Complete'
                          }
                        )
      , description : ( 'The Seraph Station project challenged us '
                      + 'to design a unique station that would '
                      + 'transport people through time. The result '
                      + 'is a fresh and futuristic model inspired '
                      + 'by space stations.'
                      )
      , pictures    : [ { thumbnail : imageDelSol
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageHypers
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageTrinity
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      ].map( Project.Picture.create )
      }
    , { id          : 'eebox'
      , title       : 'Eebox Building'
      , featured    : true
      , specs       : Project.Spec.create
                        ( { address    : 'New York, New York'
                          , role       : 'Preservation Architect'
                          , architects : [ 'Phillip Goldstein'
                                         , 'Kirby Blake'
                                         ]
                          , started    : new Date('1995-12-17')
                          , completed  : new Date('1996-06-01')
                          , status     : 'Complete'
                          }
                        )
      , description : ( 'The Seraph Station project challenged us '
                      + 'to design a unique station that would '
                      + 'transport people through time. The result '
                      + 'is a fresh and futuristic model inspired '
                      + 'by space stations.'
                      )
      , pictures    : [ { thumbnail : imageDelSol
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageHypers
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageTrinity
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      ].map( Project.Picture.create )
      }
    , { id          : 'federal'
      , title       : 'Federal Tower'
      , featured    : true
      , specs       : Project.Spec.create
                        ( { address    : 'New York, New York'
                          , role       : 'Preservation Architect'
                          , architects : [ 'Phillip Goldstein'
                                         , 'Kirby Blake'
                                         ]
                          , started    : new Date('1995-12-17')
                          , completed  : new Date('1996-06-01')
                          , status     : 'Complete'
                          }
                        )
      , description : ( 'The Seraph Station project challenged us '
                      + 'to design a unique station that would '
                      + 'transport people through time. The result '
                      + 'is a fresh and futuristic model inspired '
                      + 'by space stations.'
                      )
      , pictures    : [ { thumbnail : imageDelSol
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageHypers
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageTrinity
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      ].map( Project.Picture.create )
      }
    , { id          : 'grandEdelweiss'
      , title       : 'Grand Edelweiss Hotel'
      , featured    : true
      , specs       : Project.Spec.create
                        ( { address    : 'New York, New York'
                          , role       : 'Preservation Architect'
                          , architects : [ 'Phillip Goldstein'
                                         , 'Kirby Blake'
                                         ]
                          , started    : new Date('1995-12-17')
                          , completed  : new Date('1996-06-01')
                          , status     : 'Complete'
                          }
                        )
      , description : ( 'The Seraph Station project challenged us '
                      + 'to design a unique station that would '
                      + 'transport people through time. The result '
                      + 'is a fresh and futuristic model inspired '
                      + 'by space stations.'
                      )
      , pictures    : [ { thumbnail : imageDelSol
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageHypers
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageTrinity
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      ].map( Project.Picture.create )
      }
    , { id          : 'netcry'
      , title       : 'Netcry Tower'
      , featured    : true
      , specs       : Project.Spec.create
                        ( { address    : 'New York, New York'
                          , role       : 'Preservation Architect'
                          , architects : [ 'Phillip Goldstein'
                                         , 'Kirby Blake'
                                         ]
                          , started    : new Date('1995-12-17')
                          , completed  : new Date('1996-06-01')
                          , status     : 'Complete'
                          }
                        )
      , description : ( 'The Seraph Station project challenged us '
                      + 'to design a unique station that would '
                      + 'transport people through time. The result '
                      + 'is a fresh and futuristic model inspired '
                      + 'by space stations.'
                      )
      , pictures    : [ { thumbnail : imageDelSol
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageHypers
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageTrinity
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      ].map( Project.Picture.create )
      }
    , { id          : 'hypers'
      , title       : 'Hypers'
      , featured    : true
      , specs       : Project.Spec.create
                        ( { address    : 'New York, New York'
                          , role       : 'Preservation Architect'
                          , architects : [ 'Phillip Goldstein'
                                         , 'Kirby Blake'
                                         ]
                          , started    : new Date('1995-12-17')
                          , completed  : new Date('1996-06-01')
                          , status     : 'Complete'
                          }
                        )
      , description : ( 'The Seraph Station project challenged us '
                      + 'to design a unique station that would '
                      + 'transport people through time. The result '
                      + 'is a fresh and futuristic model inspired '
                      + 'by space stations.'
                      )
      , pictures    : [ { thumbnail : imageDelSol
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageHypers
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageTrinity
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      ].map( Project.Picture.create )
      }
    , { id          : 'sxiv'
      , title       : 'SXIV Tower'
      , featured    : true
      , specs       : Project.Spec.create
                        ( { address    : 'New York, New York'
                          , role       : 'Preservation Architect'
                          , architects : [ 'Phillip Goldstein'
                                         , 'Kirby Blake'
                                         ]
                          , started    : new Date('1995-12-17')
                          , completed  : new Date('1996-06-01')
                          , status     : 'Complete'
                          }
                        )
      , description : ( 'The Seraph Station project challenged us '
                      + 'to design a unique station that would '
                      + 'transport people through time. The result '
                      + 'is a fresh and futuristic model inspired '
                      + 'by space stations.'
                      )
      , pictures    : [ { thumbnail : imageDelSol
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageHypers
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageTrinity
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      ].map( Project.Picture.create )
      }
    , { id          : 'trinity'
      , title       : 'Trinity Bank Tower'
      , featured    : true
      , specs       : Project.Spec.create
                        ( { address    : 'New York, New York'
                          , role       : 'Preservation Architect'
                          , architects : [ 'Phillip Goldstein'
                                         , 'Kirby Blake'
                                         ]
                          , started    : new Date('1995-12-17')
                          , completed  : new Date('1996-06-01')
                          , status     : 'Complete'
                          }
                        )
      , description : ( 'The Seraph Station project challenged us '
                      + 'to design a unique station that would '
                      + 'transport people through time. The result '
                      + 'is a fresh and futuristic model inspired '
                      + 'by space stations.'
                      )
      , pictures    : [ { thumbnail : imageDelSol
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageHypers
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageTrinity
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      ].map( Project.Picture.create )
      }
    , { id          : 'paramour'
      , title       : 'Project Paramour'
      , featured    : true
      , specs       : Project.Spec.create
                        ( { address    : 'New York, New York'
                          , role       : 'Preservation Architect'
                          , architects : [ 'Phillip Goldstein'
                                         , 'Kirby Blake'
                                         ]
                          , started    : new Date('1995-12-17')
                          , completed  : new Date('1996-06-01')
                          , status     : 'Complete'
                          }
                        )
      , description : ( 'The Seraph Station project challenged us '
                      + 'to design a unique station that would '
                      + 'transport people through time. The result '
                      + 'is a fresh and futuristic model inspired '
                      + 'by space stations.'
                      )
      , pictures    : [ { thumbnail : imageDelSol
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageHypers
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      , { thumbnail : imageTrinity
                        , xs        : ''
                        , sm        : ''
                        , md        : ''
                        , lg        : ''
                        }
                      ].map( Project.Picture.create )
      }
    ].map( Project.create )


export default projects
