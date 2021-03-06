import js from '../assets/tech/javascript.svg';
import ts from '../assets/tech/typescript.svg';
import py from '../assets/tech/python.svg';
import node from '../assets/tech/nodejs.svg';

import tf from '../assets/tech/tensorflow.svg';
import react from '../assets/tech/react.svg';
import express from '../assets/tech/express.svg';
import plant from '../assets/MainHome/plant-healthy.svg';
import disease from '../assets/MainHome/plant-disease.svg';
import detects from '../assets/microscope-analysis.svg';
import github from '../assets/github.svg';

// plants
import apple from '../assets/plants/apple.jpg';
import cherry from '../assets/plants/cherry.jpg';
import corn from '../assets/plants/corn.jpg';
import grape from '../assets/plants/grape.jpg';
import potato from '../assets/plants/potato.jpg';
import tomato from '../assets/plants/tomato.jpg';

// diseases
import esca from '../assets/diseases/esca.jpg';
import scab from '../assets/diseases/scab.jpg';
import cedarRust from '../assets/diseases/cedar-rust.jpg';
import cercospora from '../assets/diseases/cercospora.jpg';
import commonRust from '../assets/diseases/common-rust.jpg';
import powderyMildew from '../assets/diseases/powdery-mildew.jpg';

// about
import fis from '../assets/fis.png';
import uncp from '../assets/uncp.png';
import jochizan from '../assets/jochizan.png';
import ulLogo from '../assets/ul-logo.png';

export const data = {
  login: {
    title: 'INICIAR SESIÓN',
    form: ['Correo electrónico', 'Contraseña'],
    sign: 'no tienes una cuenta ',
    signBold: 'regístrate'
  },
  register: {
    continue: 'CONTINUAR',
    title: 'REGÍSTRATE',
    form: ['Nombres', 'Apellidos', 'Correo electrónico', 'Contraseña'],
    sign: 'ya tienes una cuenta ',
    signBold: 'inicia sesión'
  },
  headerHome: {
    title: 'PHG Plants',
    start: 'Comenzar',
    learn: 'Leer',
    contact: '¿Por qué?',
    aboutUs: 'Nosotros'
  },
  footer: {
    credits: 'sitio diseñado por @jochizan'
  },
  home: {
    descMain:
      'Aplicación web para la detección de enfermedades en plantas más comunes de paises agrícolas de América.',
    buttonsHome: [
      { title: 'COMENZAR', css: 'one fs-5 letters-s-1', to: '/options' },
      { title: 'Qué es PlantDS?', css: 'two', href: '#what' },
      {
        css: 'three letters-s-5',
        href: 'https://github.com/Uncle-Liquor/plant-ds',
        title: `GitHub <img class='m-1 w-25' src='${github}' alt='Logo de Github' />`
      }
    ],
    cardsMain: [
      {
        title: '¿Que plantas?',
        img: plant,
        href: '#plants',
        description:
          'Detecta mejor en hojas de las plantas papa, maíz, tomate, cereza, uva, soja, entre otros más.'
      },
      {
        title: '¿Que patologías?',
        img: disease,
        href: '#diseases',
        description:
          'Todas son extraidas de un dataset de Kaggle para el desarrollo de redes neuronales con python.'
      },
      {
        title: '¿Cómo detecta?',
        img: detects,
        href: '#detect',
        description:
          'Las redes neuronales creadas detectarán a través de una muestra de la hoja de su planta.'
      }
    ],
    cardsPlants: [
      {
        title: 'Tomate',
        img: tomato,
        description:
          'El tomate es el fruto de la planta conocida como tomatera, una especie herbácea que pertenece a la familia de las solanáceas y es nativa del continente americano. Los tomates son bayas de color rojizo que se caracterizan por su pulpa con múltiples semillas y por su jugo. '
      },
      {
        title: 'Maíz',
        img: corn,
        description:
          'El maíz es uno de los cereales más populares del mundo. Es la semilla de una planta de la familia de las gramíneas, nativa de América Central pero cultivada en innumerables variedades en todo el mundo. El maíz integral es tan saludable como cualquier cereal, ya que es rico en fibra y muchas vitaminas, minerales y antioxidantes.'
      },
      {
        title: 'Patata',
        img: potato,
        description:
          'La patata, también conocida como papa, es un tubérculo que tiene su origen en Sudamérica pero que, en la actualidad, se cultiva en diversas regiones del planeta. El Solanum tuberosum (denominación de la patata a nivel científico) es uno de los alimentos más importantes para la humanidad.'
      },
      {
        title: 'Manzana',
        img: apple,
        description:
          'La manzana es el fruto comestible de la especie Malus doméstica, el manzano común. Es una fruta pomácea de forma redonda y sabor muy dulce, dependiendo de la variedad.\n' +
          'La manzana es una fruta originaria de Asia Central y desde la antigüedad ha sido valorada como un alimento muy saludable. Tiene un sabor dulce y presenta distintas variedades (la golden, la fuji y la red delicious son las más conocidas). \n'
      },
      {
        title: 'Uvas',
        img: grape,
        description:
          'Las uvas son ricas en antioxidantes, su índice glucémico no es alto, sino medio; son ricas en fibra en hidratos de carbono (17%) de rápida asimilación; contienen vitamina C y entre sus minerales destacan el potasio, el cobre y el hierro, aunque también calcio, fósforo, magnesio, manganeso, azufre y selenio.'
      },
      {
        title: 'Cereza',
        img: cherry,
        description:
          'Carnosas, dulces y refrescantes, las cerezas son una fruta de verano con un gran poder antioxidante y con una composición nutricional que aporta muchos beneficios a nuestra salud. El origen de esta fruta se sitúa en el Mar Negro y en el Mar Caspio, llegando después a Europa y Asia, por medio de las aves y las migraciones humanas.'
      }
    ],
    cardsDisease: [
      {
        title: 'Costra por hongo',
        img: scab,
        description:
          'La costra de plantas es una enfermedad producida por el hongo Venturia inaequalis. El hongo se propaga con esporas en el aire y puede sobrevivir al invierno con hojas caídas. En esta enfermedad, se pueden ver marcas prominentes de costra en las hojas de las plantas. '
      },
      {
        title: 'Roña del cedro',
        img: cedarRust,
        description:
          'La roña del cedro es una infección fúngica causada por la especie Gymnosporangium juniper-virginianae. A menudo se confunde con otras infecciones por herrumbre, pero es completamente diferente. Lo que hace que el óxido de cedro y manzana sea realmente único es su ciclo de vida. El hongo requiere dos plantas hospederas completamente diferentes para completar un ciclo.'
      },
      {
        title: 'Esca',
        img: esca,
        description:
          'Esca, también llamado sarampión de la vid, sarampión negro o sarampión español, ha plagado durante mucho tiempo a los viticultores con su expresión críptica de síntomas y, durante mucho tiempo, con la falta de un organismo causal identificable.'
      },
      {
        title: 'Moho polvoriento',
        img: powderyMildew,
        description:
          'Una enfermedad fúngica generalizada no perdona la cereza de laurel. Después de que las esporas hibernan en la planta o se esconden entre las malas hierbas, acechan desde el comienzo del verano en un clima cálido y seco. Por lo tanto, el oidio también se conoce como "hongo del clima regular". Si las temperaturas superan los 20 grados, el viento y los insectos propagan el patógeno por toda el área. Una infestación se manifiesta en la primera etapa en forma de una pátina gris-blanca en la parte superior de las hojas para trabajar en la parte inferior.'
      },
      {
        title: 'Cercospora',
        img: cercospora,
        description:
          'La enfermedad de la mancha gris es causada por el hongo Cercospora zeae-maydis. Sobrevive en los residuos vegetales del suelo durante largos períodos de tiempo. Durante la primavera, las esporas llegan a las hojas inferiores a través de las salpicaduras de lluvia y el viento.'
      },
      {
        title: 'Roya común',
        img: commonRust,
        description:
          'La roya común produce pústulas alargadas de color óxido a marrón oscuro en ambas superficies de las hojas. Las pústulas contienen esporas de óxido (urediniosporas) que son de color marrón canela. Las pústulas se oscurecen a medida que envejecen. Tanto las hojas como las vainas pueden infectarse.'
      }
    ],
    cardsAbout: [
      {
        title: 'Jochizan',
        img: jochizan,
        href: 'https://developers.google.com/profile/u/100596963017130784226?utm_source=developers.google.com'
      },
      {
        title: 'UL Org.',
        img: ulLogo,
        href: 'https://github.com/uncle-liquor'
      },
      {
        title: 'UNCP',
        img: uncp,
        href: 'https://uncp.edu.pe'
      },
      {
        title: 'FIS',
        img: fis,
        href: 'https://www.sistemasuncp.edu.pe'
      }
    ],
    tfs: {
      cards: [
        {
          title: 'Tecnologías & frameworks',
          tech: [
            {
              href: 'https://www.tensorflow.org',
              img: tf,
              title: 'Tensorflow'
            },
            {
              href: 'https://es.reactjs.org',
              img: react,
              title: 'React.js'
            },
            {
              href: 'https://expressjs.com',
              img: express,
              title: 'Express.js'
            }
          ]
        },
        {
          title: 'Lenguajes de Programación',
          tech: [
            {
              href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript',
              img: js,
              title: 'JavaScript'
            },
            {
              href: 'https://www.typescriptlang.org',
              title: 'TypeScript',
              img: ts
            },
            {
              href: 'https://www.python.org',
              title: 'Python',
              img: py
            },
            {
              href: 'https://nodejs.org',
              title: 'Node.js',
              img: node
            }
          ]
        }
      ]
    }
  }
};

export const maped = [
  'Enfermedad de Costras: La costra de la planta es una enfermedad producida por el hongo Venturia inaequalis. El hongo se propaga con esporas en el aire y puede sobrevivir al invierno con hojas caídas. En esta enfermedad, se pueden ver marcas prominentes de costra en las hojas de manzanos.',
  'Podredumbre negra: La podredumbre negra es una de las llamadas "enfermedades de verano". Si bien no existen evaluaciones de su incidencia en los montes del fruto, observaciones preliminares y consultas a técnicos extensionistas indican que en ocasiones puede alcanzar niveles importantes. Se asocia su incidencia a la ocurrencia de veranos lluviosos.',
  'Roña de cedro: La roña del cedro es una infección fúngica causada por la especie Gymnosporangium juniper-virginianae. A menudo se confunde con otras infecciones por herrumbre, pero es completamente diferente. Lo que hace que el óxido de cedro y manzana sea realmente único es su ciclo de vida. El hongo requiere dos plantas hospederas completamente diferentes para completar un ciclo.',
  'Posible imagen de una hoja saludable',
  'Posible imagen de una hoja saludable',
  'Moho polvoriento: Enfermedad fúngica generalizada no perdona la cereza de laurel. Después de que las esporas hibernan en la planta o se esconden entre las malas hierbas, acechan desde el comienzo del verano en un clima cálido y seco. Por lo tanto, el oidio también se conoce como "hongo del clima regular". Si las temperaturas superan los 20 grados, el viento y los insectos propagan el patógeno por toda el área. Una infestación se manifiesta en la primera etapa en forma de una pátina gris-blanca en la parte superior de las hojas para trabajar en la parte inferior',
  'Posible imagen de una hoja saludable',
  'Cercospora Mancha de la hoja gris: La enfermedad de la mancha gris es causada por el hongo Cercospora zeae-maydis. Sobrevive en los residuos vegetales del suelo durante largos períodos de tiempo. Durante la primavera, las esporas llegan a las hojas inferiores a través de las salpicaduras de lluvia y el viento.',
  'Roya común: La roya común produce pústulas alargadas de color óxido a marrón oscuro en ambas superficies de las hojas. Las pústulas contienen esporas de óxido (urediniosporas) que son de color marrón canela. Las pústulas se oscurecen a medida que envejecen. Tanto las hojas como las vainas pueden infectarse.',
  'Tizón de la hoja del norte: El tizón de la hoja del norte es una infección causada por un hongo bastante común en el Medio Oeste, dondequiera que se cultive el maíz y similares. La enfermedad generalmente sólo causa un daño limitado, pero puede llevar a la pérdida de la cosecha bajo ciertas condiciones. Algunas variedades de maíz son más susceptibles, y cuando la infección se establece temprano, las pérdidas son a menudo mayores.',
  'Posible imagen de una hoja saludable',
  'Podredumbre negra: La pudrición por falta, causada por el hongo Guignardia bidwellii, es una enfermedad grave de las uvas cultivadas y silvestres. La enfermedad es más destructiva en las estaciones cálidas y húmedas. Ataca todas las partes verdes de la vid: hojas, brotes, tallos de hojas y frutos, zarcillos y frutos. El efecto más dañino es el de la fruta.',
  'Esca(Sarampión Negro): El sarampión negro, también llamado esca, sarampión negro o sarampión español, ha plagado durante mucho tiempo a los viticultores con su expresión críptica de síntomas y, durante mucho tiempo, con la falta de un organismo causal identificable.',
  'Mancha foliar por Isariopsis: El tizón de la hoja, también llamado mancha foliar por Isariopsis (Pseudocercospora vitis) en la uva (Vitus sp.) Manchas de color marrón púrpura dispersas, algo angulares, en la superficie superior de la hoja. Manchas marrones correspondientes, menos llamativas, en la superficie inferior de la hoja.',
  'Posible imagen de una hoja saludable',
  'Enfermedad del Dragón amarillo Huanglongbing: Es una enfermedad provocada por bacterias (y un vector) y afecta diversas especies de plantas del género Citrus, entre los que están limón, naranja y mandarina. Esta enfermedad se le conoce por el acrónimo HLB y también por el nombre inglés de Greening o Ex-Greening. Los daños que producen son deformaciones en los brotes, coloraciones variadas en los frutos y otros. La enfermedad reduce la producción y en casos avanzados puede llegar a matar a los árboles.',
  'Posible imagen de una hoja saludable',
  'Mancha bacteriana general: La mancha bacteriana es causada por la bacteria Xanthomonas pruni. Se sabe que afecta a las hojas, frutas y ramas. Se sabe que las infecciones crónicas causan caídas graves en la calidad de la fruta y la cosecha. En condiciones favorables, la enfermedad puede propagarse a más de la mitad de los productos.',
  'Sarna (Mancha bacteriana): La enfermedad conocida como sarna bacteriana está causada por la bacteria Xanthomonas vesicatoria, y está considerada en la Unión Europea como enfermedad de cuarentena, siendo su lucha obligatoria cuando se encuentre afectando a cultivos de pimiento o tomate.',
  'Posible imagen de una hoja saludable',
  'Tizón temprano: El Tizón temprano es una enfermedad difundida en todas las zonas productores de la Argentina y paises agricolas de américa. ... Los cultivos son susceptibles a la enfermedad durante todo el ciclo, especialmente desde la floración en adelante. Cuan ésta se presenta en plena tuberización, las pérdidas suelen ser importantes.',
  'Tizón tardío: El Tizón tardío es una enfermedad causada por el pseudohongo Phytophthora infestans, que afecta hojas, tallos y tubérculos. Los tallos afectados se tornan frágiles y quebradizos. Los tubérculos afectados forman lesiones externas de color café púrpuras de forma irregular y hundida.',
  'Posible imagen de una hoja saludable',
  'Posible imagen de una hoja saludable',
  'Posible imagen de una hoja saludable',
  'Moho polvoriento: La razón por la que tenemos un moho polvoriento en nuestras hojas es porque es causada por una enfermedad infecciosa de la hoja que es muy común. El nombre es, de hecho, "oídio" y se le da a un grupo de enfermedades causadas por hongos relacionados',
  'Quemadura de hoja: Uno de las manifestaciones más obvias de deficiencia de calcio es la quemadura de la punta, especialmente de las hojas nuevas y jóvenes. Unas variedades de fresa manifiestan este síntoma más que otras.',
  'Posible imagen de una hoja saludable',
  'Mancha bacteriana: La mancha bacteriana es causada por las bacterias Pseudomonas syringae pv. y afecta a una gran variedad de plantas. En las hojas, tallos y frutos aparecen pequeñas manchas negras. El clima relativamente húmedo favorece el desarrollo.',
  'Tizón temprano: Los hongos del tizón temprano viven en el suelo y persisten entre los escombros de plantas infectadas en descomposición. Las esporas se esparcen principalmente a través del viento y las salpicaduras de agua provocadas por la lluvia o el riego.',
  'Tizón tardío: El tizón tardío es causado por el oomiceto (organismos similares a los hongos) llamado Phytophthora infestans. El daño en los frutos es característico por tornarse color marrón, pero permanece firme a menos que organismos secundarios lo ataquen y este termine pudriéndose.',
  'Moho de la hoja: El moho de la hoja es causado por el patógeno Passalora fulva. Se encuentra en todo el mundo, predominantemente en tomates cultivados donde la humedad relativa es alta, particularmente en invernaderos de plástico.',
  'Hoja con Septoria: El chancro de la hoja de Septoria afecta principalmente a las plantas como el tomate y a los miembros de su familia. Es una enfermedad de la mancha foliar que se manifiesta por primera vez en las hojas más viejas de las plantas.',
  'Acaros de araña con dos manchas: Las arañas rojas de dos manchas son plagas ocasionales que pueden causar graves daños a algunos cultivos de hortalizas durante el clima cálido y seco. Los ácaros pueden dañar tomates, frijoles, melones, sandías, maíz dulce, entre otros. Los períodos prolongados de clima cálido y seco.',
  'Mancha objetivo: También parecida al tizón temprano, la mancha objetivo del tomate es una enfermedad fúngica que ataca a una variedad diversa de plantas, que incluyen papaya, pimientos, judías verdes, papas, melón y calabaza, así como la pasiflora y ciertas plantas ornamentales.',
  'Virus del Mosaico: El virus del mosaico del tomate (ToMV: Tomato mosaic virus) pertenece al género Tobamovirus. Este virus posee distribución mundial y causa daños en varios tipos de cultivo, tanto crecidos bajo protección, como al aire libre.',
  'Virus del rizo de la hoja amarilla: El virus del rizo de la hoja amarilla es una especie del género Begomovirus y de la familia Geminiviridae. La infección por el virus del rizado de la hoja amarilla del tomate (TYLCV) induce síntomas graves en las plantas y provoca graves pérdidas de rendimiento en todo el mundo. TYLCV es transmitido persistentemente por la mosca blanca del camote, Bemisia tabaci ',
  'Posible imagen de una hoja saludable'
];
