import { Chef } from 'src/app/models/chef';
import { Cookbook } from 'src/app/models/cookbook';
import { Profile } from 'src/app/models/profile';
import { Recipe } from 'src/app/models/recipe';

export const MockChefs: Pick<Profile, 'id' | 'name' | 'profilePictureUrl'>[] = [
  {
    id: 1,
    name: 'Gaston Acurio',
    profilePictureUrl:
      'https://www.yakumanka.com/wp-content/uploads/2018/12/gaston-acurio-cover1.jpg',
  },
  {
    id: 2,
    name: 'Gordon Ramsay',
    profilePictureUrl:
      'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwOTcxNDk2NDQzNzQ5NzM2/gettyimages-1148433914.jpg',
  },
  {
    id: 3,
    name: 'Massimo Bottura',
    profilePictureUrl:
      'https://i.guim.co.uk/img/media/7059bdd652b06407204be285c9a94d0a39c28e9a/0_0_2560_1536/master/2560.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1fddc777627b82690df87b837680adcf',
  },
];

export const MockCookBooks: Cookbook[] = [
  {id: 1, name: 'CookbookFake1', profileId: 1},
  {id: 2, name: 'CookbookFake2', profileId: 1},
  {id: 3, name: 'CookbookFake3', profileId: 1},
]

export const MockReceipts: Recipe[] = [
  {
    address: 0,
    cookBookId: 1,
    exclusive: false,
    ingredients: [],
    multimedia :  [{id: 1, url: ""}],
    profileId: 1,
    recommendation: '',
    score: 0,
    tags: null,
    views: 0,
    id: 1000,
    name: 'Arroz con Pollo',
    preparation:
      'El arroz con pollo es un plato típico de América Latina y España 1​ con variaciones regionales según el país. Consiste en arroz cocinado con pollo, en presas o desmechado, verduras (ají pimentón, zanahoria en cubos, apio, habichuelas, cebolla, maíz desgranado, aceitunas, arvejas, alcaparras), y sazonado con especias (laurel, tomillo, cilantro, ajo)',
  },
  {
    address: 0,
    cookBookId: 1,
    exclusive: false,
    ingredients: [],
    multimedia :  [{id: 2, url: ""}],
    profileId: 1,
    recommendation: '',
    score: 0,
    tags: null,
    views: 0,
    id: 1001,
    name: 'Ceviche',
    preparation:
      'El cebiche, ceviche, sebiche o seviche (todas válidas y todas incluidas en el Diccionario de la lengua española; cada una se usa en una zona geográfica diferente)1​ es un plato consistente en carne marinada ―pescado, mariscos o ambos― en aliños cítricos. Diferentes versiones del cebiche forman parte de la cultura culinaria de diversos países hispanoamericanos litorales del océano Pacífico2​ de donde cada una es nativa: Chile, Colombia, Costa Rica, Ecuador, El Salvador, Guatemala, Honduras, México, Nicaragua, Panamá y Perú. En este último se lo considera como patrimonio cultural.3​',
  },
  {
    address: 0,
    cookBookId: 1,
    exclusive: false,
    ingredients: [],
    multimedia :  [{id: 3, url: ""}],
    profileId: 1,
    recommendation: '',
    score: 0,
    tags: null,
    views: 0,
    id: 1002,
    name: 'Carapulcra',
    preparation:
      'Uno de los platos más emblemáticos de Perú es la carapulcra. Este delicioso plato está hecho a base de papa deshidratada con un típico aderezo de ají panca y cebolla roja. La carapulcra limeña es uno de los platos más antiguos, fue creado en el siglo XVII, y en esta época era considerado un guiso para personas con bajos recursos. Posteriormente, en el siglo XIX era consumido por todas las clases sociales limeñas. Señalamos también que en la región de Ica se acostumbra servirlo con sopa seca o mancha pecho. Con el pasar de los años la receta se modificó según la región.',
  },
];
