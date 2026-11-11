import { CardData, Player, Topic } from './types.ts';

// ==========================================
// GAYANE: NIVEL A2 (60 tarjetas originales)
// ==========================================

export const GAYANE_RESTAURANT_CARDS: CardData[] = [
  {
    id: 1,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Mesa para dos',
    titleArm: 'Սեղան երկուսի համար',
    situation: 'Entras al restaurante con un amigo. El camarero se acerca y te saluda. ¿Cómo le pides una mesa para dos?',
    situationArm: 'Ընկերոջդ հետ մտնում ես ռեստորան։ Մատուցողը մոտենում է և ողջունում։ Ինչպե՞ս ես խնդրում սեղան երկուսի համար։',
    options: [
      {
        es: '¡Buenas tardes! ¿Tiene una mesa libre para dos personas, por favor?',
        arm: 'Բարի օր։ Երկու հոգու համար ազատ սեղան ունե՞ք, խնդրում եմ։'
      },
      {
        es: 'Hola, somos dos. ¿Podemos sentarnos cerca de la ventana?',
        arm: 'Բարև ձեզ, մենք երկու հոգի ենք։ Կարո՞ղ ենք նստել պատուհանի մոտ։'
      },
      {
        es: 'Buenas noches. Quisiéramos una mesa en la terraza, por favor.',
        arm: 'Բարի երեկո։ Կցանկանայինք սեղան պատշգամբում (բացօթյա), խնդրում եմ։'
      },
      {
        es: 'Hola, tenemos una reserva a nombre de Gayane.',
        arm: 'Բարև ձեզ, մենք ամրագրում ունենք Գայանեի անունով։'
      }
    ]
  },
  {
    id: 2,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Pedir la carta',
    titleArm: 'Ճաշացանկ խնդրել',
    situation: 'Ya estás sentado en la mesa, pero no tienes la carta. ¿Cómo se la pides al camarero?',
    situationArm: 'Դու արդեն նստած ես սեղանի շուրջ, բայց չունես ճաշացանկը։ Ինչպե՞ս ես խնդրում մատուցողին։',
    options: [
      {
        es: 'Perdone, ¿nos puede traer la carta, por favor?',
        arm: 'Կներեք, կարո՞ղ եք մեզ բերել ճաշացանկը, խնդրում եմ։'
      },
      {
        es: 'Disculpe, ¿tiene la carta de bebidas y postres?',
        arm: 'Ներողություն, ըմպելիքների և աղանդերի ճաշացանկ ունե՞ք։'
      },
      {
        es: 'Hola, ¿podemos ver el menú del día, por favor?',
        arm: 'Բարև ձեզ, կարո՞ղ ենք տեսնել օրվա ճաշացանկը, խնդրում եմ։'
      },
      {
        es: 'Perdón, ¿dónde puedo escanear el código QR para ver el menú?',
        arm: 'Ներեցեք, որտե՞ղ կարող եմ սկանավորել QR կոդը՝ մենյուն տեսնելու համար։'
      }
    ]
  },
  {
    id: 3,
    level: 'A2',
    topic: 'restaurante',
    titleEs: '¿Qué van a tomar?',
    titleArm: 'Ի՞նչ եք խմելու',
    situation: 'El camarero te pregunta: “¿Qué te gustaría beber?”. ¿Qué le respondes?',
    situationArm: 'Մատուցողը հարցնում է քեզ․ «Ի՞նչ կցանկանայիր խմել»։ Ի՞նչ ես պատասխանում նրան։',
    options: [
      {
        es: 'Me gustaría beber agua con gas bien fría, por favor.',
        arm: 'Կցանկանայի խմել շատ սառը գազավորված ջուր, խնդրում եմ։'
      },
      {
        es: 'Para mí, un zumo de naranja natural, por favor.',
        arm: 'Ինձ համար թարմ քամած նարնջի հյութ, խնդրում եմ։'
      },
      {
        es: 'Quiero una limonada casera con poco hielo, gracias.',
        arm: 'Տնական լիմոնադ կուզենայի՝ քիչ սառույցով, շնորհակալություն։'
      },
      {
        es: 'De momento solo agua del tiempo, muchas gracias.',
        arm: 'Առայժմ միայն սենյակային ջերմաստիճանի ջուր, շատ շնորհակալություն։'
      }
    ]
  },
  {
    id: 4,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Pedir la comida',
    titleArm: 'Ուտելիք պատվիրել',
    situation: 'El camarero te dice: “¿Ya sabe qué va a pedir de primero?”. ¿Qué respondes?',
    situationArm: 'Մատուցողն ասում է․ «Արդեն գիտե՞ք, թե ինչ եք պատվիրելու որպես առաջին ուտեստ»։ Ի՞նչ ես պատասխանում։',
    options: [
      {
        es: 'Sí, de primero quiero una sopa de verduras, por favor.',
        arm: 'Այո, որպես առաջին ուտեստ ցանկանում եմ բանջարեղենային ապուր, խնդրում եմ։'
      },
      {
        es: 'Para mí, una ensalada mixta con queso y tomate.',
        arm: 'Ինձ համար խառը աղցան՝ պանրով և լոլիկով։'
      },
      {
        es: 'Quisiera probar las tapas de champiñones al ajillo.',
        arm: 'Կցանկանայի փորձել սխտորով սնկային տապասը։'
      },
      {
        es: 'Todavía no lo tengo claro, ¿nos da dos minutos más?',
        arm: 'Դեռ վերջնական չեմ կողմնորոշվել, երկու րոպե էլ կտա՞ք մեզ։'
      }
    ]
  },
  {
    id: 5,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'El plato principal',
    titleArm: 'Հիմնական ուտեստը',
    situation: 'Es el momento de pedir el plato principal. ¿Qué le dices al camarero?',
    situationArm: 'Ժամանակն է պատվիրելու երկրորդ (հիմնական) ուտեստը։ Ի՞նչ ես ասում մատուցողին։',
    options: [
      {
        es: 'De segundo plato voy a tomar pollo asado con patatas.',
        arm: 'Որպես երկրորդ ուտեստ կվերցնեմ խորոված հավի միս՝ կարտոֆիլով։'
      },
      {
        es: 'Para mí, un filete de salmón a la plancha con verduras.',
        arm: 'Ինձ համար թավայում տապակած սաղմոնի ֆիլե՝ բանջարեղենով։'
      },
      {
        es: 'Quiero la pasta con salsa de tomate y albahaca.',
        arm: 'Լոլիկի սոուսով և ռեհանով մակարոնեղեն եմ ցանկանում։'
      },
      {
        es: 'Me gustaría una paella de mariscos para compartir.',
        arm: 'Կցանկանայի ծովամթերքով պաելյա՝ կիսելու համար։'
      }
    ]
  },
  {
    id: 6,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Sin cebolla, por favor',
    titleArm: 'Առանց սոխի, խնդրում եմ',
    situation: 'No te gusta la cebolla en la ensalada. ¿Cómo se lo explicas amablemente al camarero?',
    situationArm: 'Դու աղցանում սոխ չես սիրում։ Ինչպե՞ս ես քաղաքավարի բացատրում մատուցողին։',
    options: [
      {
        es: '¿Sería posible pedir la ensalada sin cebolla, por favor?',
        arm: 'Հնարավո՞ր է աղցանը պատվիրել առանց սոխի, խնդրում եմ։'
      },
      {
        es: 'Por favor, ¿me puede poner la ensalada sin cebolla? No me gusta.',
        arm: 'Խնդրում եմ, կարո՞ղ եք աղցանն առանց սոխի պատրաստել։ Ես այն չեմ սիրում։'
      },
      {
        es: 'Tengo alergia a la cebolla, ¿pueden prepararlo sin ella?',
        arm: 'Սոխից ալերգիա ունեմ, կարո՞ղ են առանց դրա պատրաստել։'
      },
      {
        es: 'Si lleva cebolla, ¿la pueden cambiar por aguacate?',
        arm: 'Եթե սոխ է պարունակում, կարո՞ղ եք այն փոխարինել ավոկադոյով։'
      }
    ]
  },
  {
    id: 7,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Pedir una recomendación',
    titleArm: 'Խորհուրդ հարցնել մատուցողից',
    situation: 'No sabes qué elegir y quieres un consejo del camarero. ¿Qué le preguntas?',
    situationArm: 'Չգիտես ինչ ընտրել և ուզում ես մատուցողի խորհուրդը։ Ի՞նչ ես հարցնում նրան։',
    options: [
      {
        es: '¿Cuál es la especialidad de la casa?',
        arm: 'Ո՞րն է ռեստորանի (հաստատության) ֆիրմային ուտեստը։'
      },
      {
        es: '¿Qué plato de pescado me recomienda hoy?',
        arm: 'Ձկով ո՞ր ուտեստը խորհուրդ կտաք այսօր։'
      },
      {
        es: '¿Qué es lo más popular que piden los clientes aquí?',
        arm: 'Այստեղ հաճախորդներն ամենից շատ ի՞նչ են պատվիրում։'
      },
      {
        es: 'Tengo muchas ganas de comida típica, ¿qué me sugiere?',
        arm: 'Շատ եմ ցանկանում ավանդական ուտեստ փորձել, ի՞նչ կառաջարկեք։'
      }
    ]
  },
  {
    id: 8,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Ingredientes del plato',
    titleArm: 'Ուտեստի բաղադրիչները',
    situation: 'Ves un plato interesante en la carta pero no conoces sus ingredientes. ¿Qué preguntas?',
    situationArm: 'Ճաշացանկում հետաքրքիր ուտեստ ես տեսնում, բայց չգիտես բաղադրիչները։ Ի՞նչ ես հարցնում։',
    options: [
      {
        es: '¿Qué ingredientes lleva este plato, por favor?',
        arm: 'Ի՞նչ բաղադրիչներ ունի այս ուտեստը, խնդրում եմ։'
      },
      {
        es: '¿Lleva este plato mariscos o frutos secos?',
        arm: 'Այս ուտեստը ծովամթերք կամ ընկուզեղեն պարունակո՞ւմ է։'
      },
      {
        es: '¿Es un plato picante o es suave?',
        arm: 'Այս ուտեստը կծո՞ւ է, թե՞ մեղմ։'
      },
      {
        es: '¿Esta salsa está hecha con nata o con tomate?',
        arm: 'Այս սոուսը սերուցքո՞վ է պատրաստված, թե՞ լոլիկով։'
      }
    ]
  },
  {
    id: 9,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'El punto de la carne',
    titleArm: 'Մսի տապակման աստիճանը',
    situation: 'El camarero te pregunta: “¿Cómo quiere la carne: poco hecha, al punto o muy hecha?”.',
    situationArm: 'Մատուցողը հարցնում է քեզ․ «Ինչպիսի՞ տապակում եք ցանկանում՝ թույլ, միջին, թե՞ լավ տապակված»։',
    options: [
      {
        es: 'Al punto, por favor. Ni muy cruda ni muy pasada.',
        arm: 'Միջին տապակման (al punto), խնդրում եմ։ Ոչ շատ հում, ոչ շատ եփված։'
      },
      {
        es: 'Muy hecha, por favor. Me gusta bien cocinada.',
        arm: 'Լավ տապակված (muy hecha), խնդրում եմ։ Լավ եփված եմ սիրում։'
      },
      {
        es: 'Poco hecha, por favor. Bien jugosa por dentro.',
        arm: 'Թույլ տապակված (poco hecha), խնդրում եմ։ Ներսից շատ հյութալի։'
      },
      {
        es: 'Al punto más bien hecha, por favor.',
        arm: 'Միջինից մի փոքր ավելի տապակված, խնդրում եմ։'
      }
    ]
  },
  {
    id: 10,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Pedir una servilleta o cubiertos',
    titleArm: 'Անձեռոցիկ կամ պարագաներ խնդրել',
    situation: 'Te falta un tenedor y necesitas servilletas. ¿Cómo llamas al camarero para pedirlo?',
    situationArm: 'Քեզ պատառաքաղ է պակասում և անձեռոցիկներ են պետք։ Ինչպե՞ս ես կանչում մատուցողին։',
    options: [
      {
        es: 'Perdone, ¿me puede traer un tenedor limpio, por favor?',
        arm: 'Ներեցեք, կարո՞ղ եք ինձ մաքուր պատառաքաղ բերել, խնդրում եմ։'
      },
      {
        es: 'Disculpe, necesitamos más servilletas de papel en la mesa.',
        arm: 'Կներեք, սեղանին ավելի շատ թղթե անձեռոցիկներ են պետք։'
      },
      {
        es: 'Por favor, ¿nos trae una cuchara para la sopa?',
        arm: 'Խնդրում եմ, ապուրի համար գդալ կբերե՞ք մեզ։'
      },
      {
        es: 'Perdón, se me ha caído el cuchillo al suelo, ¿me da otro?',
        arm: 'Կներեք, դանակս ընկավ հատակին, մեկ ուրիշը կտա՞ք։'
      }
    ]
  },
  {
    id: 11,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Pedir más pan o agua',
    titleArm: 'Էլի հաց կամ ջուր խնդրել',
    situation: 'Se os ha terminado el pan y el agua de la mesa. ¿Qué dices?',
    situationArm: 'Սեղանից վերջացել են հացն ու ջուրը։ Ի՞նչ ես ասում։',
    options: [
      {
        es: '¿Nos puede traer una cesta más de pan, por favor?',
        arm: 'Կարո՞ղ եք մեզ ևս մեկ զամբյուղ հաց բերել, խնդրում եմ։'
      },
      {
        es: 'Otra botella de agua mineral grande, por favor.',
        arm: 'Եվս մեկ մեծ շիշ հանքային ջուր, խնդրում եմ։'
      },
      {
        es: 'Perdón, ¿el pan está incluido en el menú o se cobra aparte?',
        arm: 'Ներեցեք, հացը ներառվա՞ծ է մենյուի մեջ, թե՞ առանձին է հաշվարկվում։'
      },
      {
        es: 'Una jarra de agua del grifo fresca, por favor.',
        arm: 'Մի կուժ թարմ ծորակի ջուր, խնդրում եմ։'
      }
    ]
  },
  {
    id: 12,
    level: 'A2',
    topic: 'restaurante',
    titleEs: '¿Cuánto tardará?',
    titleArm: 'Որքա՞ն ժամանակ կտևի',
    situation: 'Llevas esperando 30 minutos y tienes algo de prisa. ¿Cómo preguntas por tu comida con educación?',
    situationArm: 'Արդեն 30 րոպե սպասում ես և մի քիչ շտապում ես։ Ինչպե՞ս ես քաղաքավարի հարցնում ուտեստիդ մասին։',
    options: [
      {
        es: 'Disculpe, ¿tardará mucho la comida? Tenemos un poco de prisa.',
        arm: 'Կներեք, ուտելիքը դեռ երկա՞ր կուշանա։ Մենք մի քիչ շտապում ենք։'
      },
      {
        es: 'Perdón, ¿podría preguntar en la cocina si nuestros platos están listos?',
        arm: 'Ներեցեք, կարո՞ղ եք խոհանոցում ճշտել՝ արդյոք մեր ուտեստները պատրաստ են։'
      },
      {
        es: 'Hola, pedimos hace media hora, ¿falta mucho?',
        arm: 'Բարև ձեզ, կես ժամ առաջ ենք պատվիրել, դեռ շա՞տ է մնացել։'
      },
      {
        es: 'Disculpe, ¿podría traernos al menos el primer plato?',
        arm: 'Ներողություն, կարո՞ղ եք գոնե առաջին ուտեստը բերել։'
      }
    ]
  },
  {
    id: 13,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Un plato equivocado',
    titleArm: 'Սխալ ուտեստ են բերել',
    situation: 'El camarero te trae carne, pero tú habías pedido pescado. ¿Qué le dices?',
    situationArm: 'Մատուցողը քեզ միս է բերում, բայց դու ձուկ էիր պատվիրել։ Ի՞նչ ես ասում նրան։',
    options: [
      {
        es: 'Disculpe, creo que hay un error: yo he pedido el pescado, no la carne.',
        arm: 'Կներեք, կարծես սխալմունք կա․ ես ձուկ էի պատվիրել, ոչ թե միս։'
      },
      {
        es: 'Perdón, este plato no es para nuestra mesa.',
        arm: 'Ներեցեք, այս ուտեստը մեր սեղանի համար չէ։'
      },
      {
        es: 'Disculpe, pedí la hamburguesa sin queso, pero lleva queso.',
        arm: 'Ներողություն, բուրգերն առանց պանրի էի պատվիրել, բայց պանիր ունի։'
      },
      {
        es: 'Perdone, ¿le puede cambiar este plato por el que pedí?',
        arm: 'Կներեք, կարո՞ղ եք այս ուտեստը փոխել իմ պատվիրածով։'
      }
    ]
  },
  {
    id: 14,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'La sopa está fría',
    titleArm: 'Ապուրը սառն է',
    situation: 'Te han traído la sopa y está completamente fría. ¿Cómo lo comunicas?',
    situationArm: 'Քեզ ապուր են բերել, և այն ամբողջությամբ սառն է։ Ինչպե՞ս ես հայտնում այդ մասին։',
    options: [
      {
        es: 'Perdone, la sopa está bastante fría. ¿Me la podría calentar, por favor?',
        arm: 'Ներեցեք, ապուրը բավականին սառն է։ Կարո՞ղ եք տաքացնել այն, խնդրում եմ։'
      },
      {
        es: 'Disculpe, este plato apenas está templado, ¿puede avisar a la cocina?',
        arm: 'Կներեք, այս ուտեստը հազիվ գոլ է, կարո՞ղ եք զգուշացնել խոհանոցին։'
      },
      {
        es: 'Por favor, ¿me lo puede cambiar por otro plato caliente?',
        arm: 'Խնդրում եմ, կարո՞ղ եք այն փոխարինել մեկ այլ տաք ուտեստով։'
      },
      {
        es: 'Perdón, preferiría tomarla bien caliente si es posible.',
        arm: 'Ներողություն, կնախընտրեի այն լավ տաք վիճակում վայելել, եթե հնարավոր է։'
      }
    ]
  },
  {
    id: 15,
    level: 'A2',
    topic: 'restaurante',
    titleEs: '¿Qué tal la comida?',
    titleArm: 'Ինչպե՞ս է ուտեստը',
    situation: 'El camarero pasa por la mesa y pregunta: “¿Qué tal está todo?”. ¿Qué le respondes?',
    situationArm: 'Մատուցողն անցնում է սեղանի մոտով և հարցնում․ «Ինչպե՞ս է ամեն ինչ»։ Ի՞նչ ես պատասխանում։',
    options: [
      {
        es: '¡Todo está delicioso, muchísimas gracias!',
        arm: 'Ամեն ինչ չափազանց համեղ է, շատ մեծ շնորհակալություն։'
      },
      {
        es: 'Está muy bueno, sobre todo la salsa.',
        arm: 'Շատ լավն է, հատկապես սոուսը։'
      },
      {
        es: 'Todo perfecto, el pescado está muy tierno.',
        arm: 'Ամեն ինչ հիանալի է, ձուկը շատ փափուկ է։'
      },
      {
        es: 'Está bien, aunque la carne tiene un poquito de sal de más.',
        arm: 'Լավ է, թեև մսի վրա մի փոքր ավել աղ կա։'
      }
    ]
  },
  {
    id: 16,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Elegir el postre',
    titleArm: 'Ընտրել աղանդեր',
    situation: 'El camarero pregunta: “¿Desean algún postre?”. ¿Qué le dices?',
    situationArm: 'Մատուցողը հարցնում է․ «Աղանդեր կցանկանա՞ք»։ Ի՞նչ ես ասում նրան։',
    options: [
      {
        es: '¿Qué postres caseros tienen hoy?',
        arm: 'Ի՞նչ տնական աղանդերներ ունեք այսօր։'
      },
      {
        es: 'Para mí, una tarta de queso con frutos rojos, por favor.',
        arm: 'Ինձ համար չիզքեյք հատապտուղներով, խնդրում եմ։'
      },
      {
        es: 'Yo voy a tomar fruta fresca de temporada.',
        arm: 'Ես սեզոնային թարմ միրգ կվերցնեմ։'
      },
      {
        es: 'No, gracias, ya estoy lleno. Solo la cuenta, por favor.',
        arm: 'Ոչ, շնորհակալություն, արդեն կուշտ եմ։ Միայն հաշիվը, խնդրում եմ։'
      }
    ]
  },
  {
    id: 17,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Pedir el café',
    titleArm: 'Սուրճ պատվիրել',
    situation: 'Después de comer, te apetece un buen café. ¿Cómo lo pides en español?',
    situationArm: 'Ճաշելուց հետո լավ սուրճ ես ցանկանում։ Ինչպե՞ս ես պատվիրում իսպաներենով։',
    options: [
      {
        es: 'Un café con leche caliente y sacarina, por favor.',
        arm: 'Մեկ տաք կաթով սուրճ (café con leche) և շաքարի փոխարինիչ, խնդրում եմ։'
      },
      {
        es: 'Para mí, un café solo bien cargado, por favor.',
        arm: 'Ինձ համար թունդ սև սուրճ (café solo), խնդրում եմ։'
      },
      {
        es: 'Quisiera un café cortado con leche desnatada.',
        arm: 'Կցանկանայի կտրած սուրճ (café cortado) յուղազրկված կաթով։'
      },
      {
        es: '¿Tienen café descafeinado de sobre o de máquina?',
        arm: 'Առանց կոֆեինի սուրճ ունե՞ք՝ տուփով, թե՞ ապարատի։'
      }
    ]
  },
  {
    id: 18,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Preguntar por el baño',
    titleArm: 'Հարցնել զուգարանի տեղը',
    situation: 'Necesitas lavarte las manos antes de comer. ¿Qué le preguntas al personal?',
    situationArm: 'Ուտելուց առաջ պետք է ձեռքերդ լվանաս։ Ի՞նչ ես հարցնում աշխատակցին։',
    options: [
      {
        es: 'Disculpe, ¿dónde están los servicios, por favor?',
        arm: 'Կներեք, որտե՞ղ է սանհանգույցը, խնդրում եմ։'
      },
      {
        es: 'Perdón, ¿el baño está al fondo a la derecha?',
        arm: 'Ներողություն, զուգարանը խորքում աջ կողմո՞ւմ է։'
      },
      {
        es: '¿Me puede decir por dónde se va a los baños?',
        arm: 'Կարո՞ղ եք ասել, թե որ կողմով գնամ դեպի սանհանգույց։'
      },
      {
        es: '¿Los servicios están en esta planta o arriba?',
        arm: 'Սանհանգույցն այս հարկո՞ւմ է, թե՞ վերևում։'
      }
    ]
  },
  {
    id: 19,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Pedir la cuenta',
    titleArm: 'Հաշիվը խնդրել',
    situation: 'Habéis terminado de comer y queréis marcharos. ¿Cómo pides la cuenta?',
    situationArm: 'Ավարտել եք ճաշը և ցանկանում եք գնալ։ Ինչպե՞ս ես հաշիվը խնդրում։',
    options: [
      {
        es: 'La cuenta, cuando pueda, por favor.',
        arm: 'Հաշիվը, երբ հարմար լինի, խնդրում եմ։'
      },
      {
        es: 'Perdone, ¿nos trae la cuenta, por favor?',
        arm: 'Ներեցեք, մեզ հաշիվը կբերե՞ք, խնդրում եմ։'
      },
      {
        es: '¿Nos puede cobrar en la mesa o pagamos en la barra?',
        arm: 'Սեղանի մո՞տ եք հաշվարկն անում, թե՞ բարի մոտ ենք վճարում։'
      },
      {
        es: 'Quisiéramos pagar, por favor.',
        arm: 'Կցանկանայինք վճարել, խնդրում եմ։'
      }
    ]
  },
  {
    id: 20,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Pagar con tarjeta',
    titleArm: 'Վճարել բանկային քարտով',
    situation: 'Quieres saber si puedes pagar con el móvil o con tarjeta. ¿Qué dices?',
    situationArm: 'Ուզում ես իմանալ, թե կարող ես վճարել հեռախոսով կամ քարտով։ Ի՞նչ ես ասում։',
    options: [
      {
        es: '¿Se puede pagar con tarjeta de crédito?',
        arm: 'Կարելի՞ է վճարել վարկային քարտով։'
      },
      {
        es: '¿Aceptan pagos con el móvil (contactless)?',
        arm: 'Ընդունո՞ւմ եք վճարում հեռախոսով (անհպում)։'
      },
      {
        es: 'Voy a pagar con tarjeta, ¿me trae el datáfono?',
        arm: 'Քարտով եմ վճարելու, տերմինալը կբերե՞ք։'
      },
      {
        es: '¿Tienen una cantidad mínima para pagar con tarjeta?',
        arm: 'Քարտով վճարելու համար նվազագույն գումարի սահմանաչափ ունե՞ք։'
      }
    ]
  },
  {
    id: 21,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Pagar por separado',
    titleArm: 'Վճարել առանձին-առանձին',
    situation: 'Gayane y Razmik quieren pagar cada uno su parte. ¿Cómo se lo dicen al camarero?',
    situationArm: 'Գայանեն և Ռազմիկը ցանկանում են վճարել ամեն մեկն իր մասը։ Ինչպե՞ս են ասում մատուցողին։',
    options: [
      {
        es: '¿Podemos pagar por separado, por favor?',
        arm: 'Կարո՞ղ ենք առանձին վճարել, խնդրում եմ։'
      },
      {
        es: 'Queremos pagar la mitad cada uno, ¿es posible?',
        arm: 'Ուզում ենք կիսով չափ վճարել ամեն մեկս, հնարավո՞ր է։'
      },
      {
        es: 'Cobradnos por favor en dos cuentas distintas.',
        arm: 'Խնդրում եմ, մեզ երկու տարբեր հաշվով հաշվարկեք։'
      },
      {
        es: 'Yo pago mi ensalada y él paga su carne, ¿vale?',
        arm: 'Ես վճարում եմ իմ աղցանի համար, իսկ նա՝ իր մսի, լա՞վ։'
      }
    ]
  },
  {
    id: 22,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Pedir la comida para llevar',
    titleArm: 'Մնացած ուտելիքը տանելու համար փաթեթավորել',
    situation: 'Ha sobrado mucha comida rica y te gustaría llevártela a casa. ¿Qué preguntas?',
    situationArm: 'Շատ համեղ ուտելիք է մնացել և կուզենայիր տուն տանել։ Ի՞նչ ես հարցնում։',
    options: [
      {
        es: '¿Me puede poner lo que ha sobrado para llevar, por favor?',
        arm: 'Կարո՞ղ եք մնացածը փաթեթավորել տանելու համար, խնդրում եմ։'
      },
      {
        es: '¿Tiene un envase o una caja para llevar la comida?',
        arm: 'Ուտելիքը տանելու համար տարա կամ տուփ ունե՞ք։'
      },
      {
        es: 'No he podido terminar la pizza, ¿me la prepara para llevar?',
        arm: 'Չկարողացա ավարտել պիցցան, կփաթեթավորե՞ք տանելու համար։'
      },
      {
        es: '¿Me da una bolsa para llevar el postre, por favor?',
        arm: 'Աղանդերը տանելու համար տոպրակ կտա՞ք, խնդրում եմ։'
      }
    ]
  },
  {
    id: 23,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Dejar propina',
    titleArm: 'Թեյավճար թողնել',
    situation: 'El servicio ha sido excelente y quieres dejar propina en efectivo. ¿Qué dices?',
    situationArm: 'Սպասարկումը հիանալի էր և ուզում ես կանխիկ թեյավճար թողնել։ Ի՞նչ ես ասում։',
    options: [
      {
        es: 'Quédese con la vuelta, es para usted. ¡Muchas gracias!',
        arm: 'Մանրը պահեք ձեզ, շնորհակալություն։'
      },
      {
        es: 'El cambio es la propina por su excelente atención.',
        arm: 'Մանրը թեյավճարն է ձեր հիանալի սպասարկման համար։'
      },
      {
        es: 'Aquí tiene una propina, el servicio ha sido fantástico.',
        arm: 'Ահա թեյավճարը, սպասարկումը ֆանտաստիկ էր։'
      },
      {
        es: '¿Puedo añadir la propina directamente al pago con tarjeta?',
        arm: 'Կարո՞ղ եմ թեյավճարն ավելացնել անմիջապես քարտով վճարմանը։'
      }
    ]
  },
  {
    id: 24,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Cambiar de mesa',
    titleArm: 'Փոխել սեղանը',
    situation: 'Tu mesa está cerca de la puerta y hace frío por la corriente de aire. ¿Qué solicitas?',
    situationArm: 'Քո սեղանը դռան մոտ է, և միջանցիկ քամուց ցուրտ է։ Ի՞նչ ես խնդրում։',
    options: [
      {
        es: 'Perdone, ¿podríamos cambiarnos a esa mesa del rincón?',
        arm: 'Ներեցեք, կարո՞ղ ենք տեղափոխվել անկյունի այդ սեղանին։'
      },
      {
        es: 'Aquí hace un poco de frío por la puerta, ¿hay otra mesa libre?',
        arm: 'Այստեղ դռնից մի քիչ ցուրտ է, ուրիշ ազատ սեղան կա՞։'
      },
      {
        es: '¿Le importaría si nos sentamos dentro en lugar de la terraza?',
        arm: 'Դեմ չե՞ք լինի, եթե պատշգամբի փոխարեն ներսում նստենք։'
      },
      {
        es: 'Disculpe, ¿puede cerrar la puerta o cambiarnos de sitio?',
        arm: 'Կներեք, կարո՞ղ եք փակել դուռը կամ փոխել մեր տեղը։'
      }
    ]
  },
  {
    id: 25,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Opciones vegetarianas',
    titleArm: 'Բուսակերական տարբերակներ',
    situation: 'Eres vegetariano y quieres saber si hay opciones para ti. ¿Qué preguntas?',
    situationArm: 'Դու բուսակեր ես և ուզում ես իմանալ՝ արդյոք քեզ համար տարբերակներ կան։ Ի՞նչ ես հարցնում։',
    options: [
      {
        es: '¿Tienen opciones vegetarianas o veganas en la carta?',
        arm: 'Ճաշացանկում բուսակերական կամ վեգանական տարբերակներ ունե՞ք։'
      },
      {
        es: 'No como carne ni pescado, ¿qué platos me recomienda?',
        arm: 'Ես միս և ձուկ չեմ ուտում, ո՞ր ուտեստները խորհուրդ կտաք։'
      },
      {
        es: '¿La sopa de verduras lleva caldo de pollo o de verduras?',
        arm: 'Բանջարեղենային ապուրը հավի՞ արգանակով է, թե՞ բանջարեղենի։'
      },
      {
        es: '¿Se puede pedir la hamburguesa con hamburguesa vegetal?',
        arm: 'Հնարավո՞ր է բուրգերը պատվիրել բուսական կոտլետով։'
      }
    ]
  },
  {
    id: 26,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Sal y aceite',
    titleArm: 'Աղ և ձիթայուղ',
    situation: 'Quieres aliñar tu ensalada tú mismo. ¿Cómo pides el aceite y el vinagre?',
    situationArm: 'Ուզում ես ինքդ համեմել քո աղցանը։ Ինչպե՞ս ես խնդրում ձիթայուղն ու քացախը։',
    options: [
      {
        es: '¿Me puede traer aceite de oliva y vinagre, por favor?',
        arm: 'Կարո՞ղ եք ինձ ձիթապտղի յուղ և քացախ բերել, խնդրում եմ։'
      },
      {
        es: 'Perdón, ¿nos trae el salero y la pimienta negra?',
        arm: 'Ներեցեք, աղամանն ու սև պղպեղը կբերե՞ք մեզ։'
      },
      {
        es: 'Disculpe, ¿tiene un poco de mayonesa o mostaza?',
        arm: 'Կներեք, մի քիչ մայոնեզ կամ մանանեխ ունե՞ք։'
      },
      {
        es: '¿Nos puede poner unas rodajas de limón para el pescado?',
        arm: 'Ձկան համար կիտրոնի մի քանի կտոր կդնե՞ք մեզ, խնդրում եմ։'
      }
    ]
  },
  {
    id: 27,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Felicitar al cocinero',
    titleArm: 'Շնորհակալություն հայտնել խոհարարին',
    situation: 'La comida ha estado espectacular y quieres expresarlo con entusiasmo. ¿Qué dices?',
    situationArm: 'Ուտեստը հիասքանչ էր, և ուզում ես ոգևորությամբ արտահայտել դա։ Ի՞նչ ես ասում։',
    options: [
      {
        es: '¡Mis felicitaciones al cocinero, la comida estaba insuperable!',
        arm: 'Շնորհավորանքներս խոհարարին, ուտելիքն անգերազանցելի էր։'
      },
      {
        es: 'Ha sido una de las mejores cenas que he probado, ¡felicidades!',
        arm: 'Սա իմ փորձած լավագույն ընթրիքներից մեկն էր, շնորհավոր։'
      },
      {
        es: 'Todo riquísimo, volveremos muy pronto sin duda.',
        arm: 'Ամեն ինչ չափազանց համեղ էր, անկասկած շատ շուտով նորից կգանք։'
      },
      {
        es: 'Muchas gracias por la atención tan amable y la comida tan buena.',
        arm: 'Շատ շնորհակալ եմ այդքան բարեհամբույր սպասարկման և համեղ ուտեստների համար։'
      }
    ]
  },
  {
    id: 28,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Preguntar por el menú infantil',
    titleArm: 'Հարցնել մանկական մենյուի մասին',
    situation: 'Estáis con un niño pequeño y queréis ver platos adecuados. ¿Qué preguntáis?',
    situationArm: 'Դուք փոքրիկ երեխայի հետ եք և ուզում եք հարմար ուտեստներ տեսնել։ Ի՞նչ եք հարցնում։',
    options: [
      {
        es: '¿Tienen menú infantil o platos pequeños para niños?',
        arm: 'Մանկական մենյու կամ երեխաների համար փոքր չափաբաժիններ ունե՞ք։'
      },
      {
        es: '¿Pueden servir media ración de pasta con tomate?',
        arm: 'Կարո՞ղ եք լոլիկով մակարոնեղենի կես չափաբաժին մատուցել։'
      },
      {
        es: '¿Tienen trona para el niño, por favor?',
        arm: 'Երեխայի համար բարձր աթոռիկ ունե՞ք, խնդրում եմ։'
      },
      {
        es: '¿Podrían calentar este biberón de leche un momento?',
        arm: 'Կարո՞ղ եք այս մանկական կաթի շիշը մի պահ տաքացնել։'
      }
    ]
  },
  {
    id: 29,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Sin gluten',
    titleArm: 'Առանց գլյուտենի (առանց սնձանի)',
    situation: 'Eres celíaco y necesitas asegurarte de que el plato no contenga gluten. ¿Qué dices?',
    situationArm: 'Դու չես կարող գլյուտեն օգտագործել և պետք է համոզվես, որ ուտեստում գլյուտեն չկա։ Ի՞նչ ես ասում։',
    options: [
      {
        es: 'Soy celíaco, ¿tienen platos aptos para personas sin gluten?',
        arm: 'Ես ցելիակիա ունեմ (գլյուտեն չեմ կարող ուտել), առանց գլյուտենի հարմար ուտեստներ ունե՞ք։'
      },
      {
        es: '¿Este pan y esta salsa contienen gluten o harina de trigo?',
        arm: 'Այս հացը և սոուսը գլյուտեն կամ ցորենի ալյուր պարունակո՞ւմ են։'
      },
      {
        es: '¿Tienen una carta de alérgenos que pueda consultar?',
        arm: 'Ալերգենների ցանկ ունե՞ք, որը կարող եմ ուսումնասիրել։'
      },
      {
        es: 'Por favor, asegúrese de que no haya contaminación cruzada en la cocina.',
        arm: 'Խնդրում եմ, համոզվեք, որ խոհանոցում խաչաձև շփում չկա ալյուրի հետ։'
      }
    ]
  },
  {
    id: 30,
    level: 'A2',
    topic: 'restaurante',
    titleEs: 'Despedida cordial',
    titleArm: 'Քաղաքավարի հրաժեշտ',
    situation: 'Habéis pagado y os levantáis para salir. ¿Cómo os despedís amablemente?',
    situationArm: 'Դուք վճարել եք և ոտքի եք կանգնում դուրս գալու համար։ Ինչպե՞ս եք քաղաքավարի հրաժեշտ տալիս։',
    options: [
      {
        es: '¡Muchas gracias por todo! Hasta la próxima.',
        arm: 'Շատ շնորհակալություն ամեն ինչի համար։ Մինչ հաջորդ հանդիպում։'
      },
      {
        es: 'Ha estado todo genial. ¡Que tenga una buena tarde!',
        arm: 'Ամեն ինչ հիանալի էր։ Բարի օր ձեզ։'
      },
      {
        es: 'Adiós, gracias por la atención tan buena. ¡Buen día!',
        arm: 'Ցտեսություն, շնորհակալություն այդքան լավ վերաբերմունքի համար։ Հաջող օր։'
      },
      {
        es: '¡Hasta luego! Seguramente volveremos el fin de semana.',
        arm: 'Մինչ հանդիպում։ Վստահաբար կվերադառնանք հանգստյան օրերին։'
      }
    ]
  }
];

export const GAYANE_SUPERMARKET_CARDS: CardData[] = [
  {
    id: 31,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Buscar la leche',
    titleArm: 'Գտնել կաթը',
    situation: 'Quieres comprar leche fresca, pero no la encuentras por ninguna parte. ¿Qué le preguntas al dependiente?',
    situationArm: 'Ուզում ես թարմ կաթ գնել, բայց ոչ մի տեղ չես գտնում։ Ի՞նչ ես հարցնում խանութի աշխատակցին։',
    options: [
      {
        es: 'Disculpe, ¿dónde está la sección de lácteos y la leche fresca?',
        arm: 'Կներեք, որտե՞ղ է կաթնամթերքի բաժինը և թարմ կաթը։'
      },
      {
        es: 'Perdón, ¿en qué pasillo puedo encontrar la leche desnatada?',
        arm: 'Ներողություն, ո՞ր միջանցքում կարող եմ գտնել յուղազրկված կաթը։'
      },
      {
        es: 'Hola, ¿les queda leche de avena o de almendras?',
        arm: 'Բարև ձեզ, վարսակի կամ նշի կաթ մնացե՞լ է։'
      },
      {
        es: 'Disculpe, ¿la leche está cerca de las neveras del fondo?',
        arm: 'Կներեք, կաթը հետևի սառնարանների մո՞տ է։'
      }
    ]
  },
  {
    id: 32,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Preguntar por el precio',
    titleArm: 'Հարցնել ապրանքի գինը',
    situation: 'Ves una caja de fresas deliciosas, pero no tiene etiqueta de precio. ¿Cómo lo preguntas?',
    situationArm: 'Տեսնում ես ախորժելի ելակի տուփ, բայց գնապիտակ չկա։ Ինչպե՞ս ես հարցնում։',
    options: [
      {
        es: 'Perdone, ¿cuánto cuesta esta caja de fresas?',
        arm: 'Ներեցեք, ինչքա՞ն արժե ելակի այս տուփը։'
      },
      {
        es: 'Disculpe, ¿qué precio tiene este producto, por favor?',
        arm: 'Կներեք, ի՞նչ գին ունի այս ապրանքը, խնդրում եմ։'
      },
      {
        es: '¿Hay algún lector de códigos de barras cerca para ver el precio?',
        arm: 'Մոտակայքում շտրիխ-կոդ կարդացող սարք կա՞՝ գինը տեսնելու համար։'
      },
      {
        es: '¿El precio es por unidad o por kilo?',
        arm: 'Գինը հատո՞վ է, թե՞ կիլոգրամով։'
      }
    ]
  },
  {
    id: 33,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Pedir queso en la charcutería',
    titleArm: 'Պանիր խնդրել երշիկեղենի/պանրի բաժնում',
    situation: 'Estás en el mostrador y quieres pedir queso manchego en lonchas. ¿Qué le dices al charcutero?',
    situationArm: 'Դու կանգնած ես վաճառասեղանի մոտ և ուզում ես կտրատած մանչեգո պանիր պատվիրել։ Ի՞նչ ես ասում վաճառողին։',
    options: [
      {
        es: 'Póngame trescientos gramos de queso manchego en lonchas finas, por favor.',
        arm: 'Ինձ համար երեք հարյուր գրամ մանչեգո պանիր կտրատեք բարակ շերտերով, խնդրում եմ։'
      },
      {
        es: 'Quisiera medio kilo de queso curado en un solo trozo.',
        arm: 'Կցանկանայի կես կիլոգրամ հնեցված պանիր՝ մեկ ամբողջական կտորով։'
      },
      {
        es: '¿Me puede dar doscientos gramos de jamón serrano cortado finito?',
        arm: 'Կարո՞ղ եք ինձ տալ երկու հարյուր գրամ բարակ կտրատած խամոն (խոզապուխտ)։'
      },
      {
        es: '¿Puedo probar un trocito de este queso antes de comprarlo?',
        arm: 'Կարո՞ղ եմ գնելուց առաջ այս պանրից մի փոքրիկ կտոր փորձել։'
      }
    ]
  },
  {
    id: 34,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'El pan recién hecho',
    titleArm: 'Թարմ թխված հաց',
    situation: 'En la panadería del súper quieres saber si la barra de pan está recién hecha. ¿Qué preguntas?',
    situationArm: 'Սուպերմարկետի հացաբուլկեղենի բաժնում ուզում ես իմանալ՝ արդյոք հացը թարմ է թխված։ Ի՞նչ ես հարցնում։',
    options: [
      {
        es: 'Hola, ¿esta barra de pan está recién horneada y crujiente?',
        arm: 'Բարև ձեզ, այս հացը նո՞ր է թխված և խրթխրթա՞ն է։'
      },
      {
        es: '¿Tiene pan integral sin semillas o pan de centeno?',
        arm: 'Առանց սերմերի ամբողջահատիկ կամ տարեկանի (սև) հաց ունե՞ք։'
      },
      {
        es: '¿Me puede cortar esta barra en rebanadas, por favor?',
        arm: 'Կարո՞ղ եք այս հացը շերտատել, խնդրում եմ։'
      },
      {
        es: '¿A qué hora sale la próxima hornada de pan caliente?',
        arm: 'Ժամը քանիսի՞ն է դուրս գալիս տաք հացի հաջորդ խմբաքանակը։'
      }
    ]
  },
  {
    id: 35,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Pesar las frutas y verduras',
    titleArm: 'Կշռել մրգերն ու բանջարեղենը',
    situation: 'Has cogido tomates pero no sabes cómo funciona la báscula de autoservicio. ¿Qué preguntas a otro comprador?',
    situationArm: 'Լոլիկներ ես վերցրել, բայց չգիտես, թե ինչպես է աշխատում ինքնասպասարկման կշեռքը։ Ի՞նչ ես հարցնում կողքի գնորդին։',
    options: [
      {
        es: 'Disculpe, ¿sabe qué número tienen estos tomates para pesarlos en la báscula?',
        arm: 'Ներեցեք, գիտե՞ք, թե այս լոլիկները ո՞ր համարն ունեն կշեռքի վրա կշռելու համար։'
      },
      {
        es: 'Perdón, ¿se pesan las verduras aquí o se pesan directamente en la caja?',
        arm: 'Կներեք, բանջարեղենն այստե՞ղ են կշռում, թե՞ անմիջապես դրամարկղի մոտ։'
      },
      {
        es: '¿Me puede ayudar a imprimir la etiqueta de los plátanos, por favor?',
        arm: 'Կօգնե՞ք ինձ տպել բանանների պիտակը, խնդրում եմ։'
      },
      {
        es: '¿Dónde puedo encontrar bolsas transparentes para la fruta?',
        arm: 'Որտե՞ղ կարող եմ գտնել թափանցիկ տոպրակներ մրգերի համար։'
      }
    ]
  },
  {
    id: 36,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Preguntar por ofertas',
    titleArm: 'Հարցնել ակցիաների և զեղչերի մասին',
    situation: 'Ves un cartel de promoción que dice “3x2”. ¿Cómo preguntas para confirmar cómo funciona?',
    situationArm: 'Տեսնում ես «3-ը 2-ի գնով» ակցիայի ցուցանակ։ Ինչպե՞ս ես հարցնում, որպեսզի հստակեցնես պայմանները։',
    options: [
      {
        es: '¿Esta oferta de tres por dos se aplica a todos los sabores?',
        arm: '«Երեքը երկուսի գնով» այս առաջարկը վերաբերո՞ւմ է բոլոր համերին։'
      },
      {
        es: '¿La segunda unidad tiene el cincuenta por ciento de descuento?',
        arm: 'Երկրորդ ապրանքն իսկապե՞ս հիսուն տոկոս զեղչով է։'
      },
      {
        es: '¿Hace falta tener la tarjeta del supermercado para esta oferta?',
        arm: 'Այս զեղչի համար պե՞տք է ունենալ սուպերմարկետի կուտակային քարտը։'
      },
      {
        es: '¿Dónde están los productos que tienen descuento esta semana?',
        arm: 'Որտե՞ղ են գտնվում այս շաբաթվա զեղչված ապրանքները։'
      }
    ]
  },
  {
    id: 37,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Buscar productos sin azúcar',
    titleArm: 'Գտնել առանց շաքարի ապրանքներ',
    situation: 'Quieres galletas y yogures pero sin azúcares añadidos. ¿Qué le preguntas al personal?',
    situationArm: 'Ուզում ես թխվածքաբլիթներ և յոգուրտներ, բայց առանց հավելյալ շաքարի։ Ի՞նչ ես հարցնում աշխատակցին։',
    options: [
      {
        es: '¿Dónde puedo encontrar productos dietéticos y sin azúcar añadido?',
        arm: 'Որտե՞ղ կարող եմ գտնել դիետիկ և առանց շաքարի ապրանքները։'
      },
      {
        es: '¿Tienen galletas integrales sin azúcar para el desayuno?',
        arm: 'Նախաճաշի համար առանց շաքարի ամբողջահատիկ թխվածքաբլիթներ ունե՞ք։'
      },
      {
        es: '¿Este yogur es natural o contiene azúcar o edulcorante?',
        arm: 'Այս յոգուրտը բնակա՞ն է, թե՞ պարունակում է շաքար կամ քաղցրացուցիչ։'
      },
      {
        es: 'Busco chocolate negro con más del ochenta por ciento de cacao.',
        arm: 'Փնտրում եմ դառը շոկոլադ՝ ութսուն տոկոսից ավելի կակաոյով։'
      }
    ]
  },
  {
    id: 38,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Elegir entre dos productos',
    titleArm: 'Ընտրել երկու ապրանքի միջև',
    situation: 'Dudas entre dos marcas de aceite de oliva. ¿Cómo le pides consejo al dependiente?',
    situationArm: 'Տատանվում ես ձիթայուղի երկու ապրանքանիշի միջև։ Ինչպե՞ս ես խորհուրդ հարցնում աշխատակցից։',
    options: [
      {
        es: 'Entre estos dos aceites, ¿cuál tiene mejor calidad para ensaladas?',
        arm: 'Այս երկու յուղերից ո՞րն ավելի լավ որակ ունի աղցանների համար։'
      },
      {
        es: '¿Cuál es la diferencia entre el aceite virgen extra y el suave?',
        arm: 'Ո՞րն է տարբերությունը virgen extra-ի և սովորական մեղմ ձիթայուղի միջև։'
      },
      {
        es: '¿Cuál de estos dos arroces me recomienda para hacer paella?',
        arm: 'Այս երկու բրնձերից ո՞րն եք խորհուրդ տալիս պաելյա պատրաստելու համար։'
      },
      {
        es: '¿Sabe si esta marca blanca es igual de buena que la marca conocida?',
        arm: 'Գիտե՞ք՝ արդյոք սուպերմարկետի սեփական ապրանքանիշը նույնքան լավն է, որքան հայտնին։'
      }
    ]
  },
  {
    id: 39,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Preguntar por más unidades en el almacén',
    titleArm: 'Հարցնել պահեստում մնացած ապրանքի մասին',
    situation: 'La estantería del café favorito está vacía. ¿Cómo preguntas si queda más en el almacén?',
    situationArm: 'Քո սիրելի սուրճի դարակը դատարկ է։ Ինչպե՞ս ես հարցնում, թե պահեստում էլի մնացե՞լ է։',
    options: [
      {
        es: 'Disculpe, la estantería está vacía. ¿Les queda más café en el almacén?',
        arm: 'Կներեք, դարակը դատարկ է։ Պահեստում էլի սուրճ մնացե՞լ է։'
      },
      {
        es: 'Perdón, ¿van a reponer este producto hoy o ya hasta mañana?',
        arm: 'Ներողություն, այս ապրանքն այսօր կրկի՞ն կդնեն դարակին, թե՞ միայն վաղը։'
      },
      {
        es: '¿Podría comprobar en el sistema si tienen más cajas disponibles?',
        arm: 'Կարո՞ղ եք համակարգչով ստուգել՝ արդյոք էլի հասանելի տուփեր ունեք։'
      },
      {
        es: 'Si no queda de este tamaño, ¿tienen un paquete más grande o más pequeño?',
        arm: 'Եթե այս չափսից չկա, ավելի մե՞ծ, թե՞ ավելի փոքր փաթեթ ունեք։'
      }
    ]
  },
  {
    id: 40,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'El carro o la cesta',
    titleArm: 'Սայլակ կամ զամբյուղ',
    situation: 'Entras al supermercado y necesitas una cesta pequeña o un carro. ¿Qué preguntas en la entrada?',
    situationArm: 'Մտնում ես սուպերմարկետ և փոքր զամբյուղ կամ սայլակ է պետք։ Ի՞նչ ես հարցնում մուտքի մոտ։',
    options: [
      {
        es: '¿Dónde están las cestas de mano con ruedas, por favor?',
        arm: 'Որտե՞ղ են անիվներով ձեռքի զամբյուղները, խնդրում եմ։'
      },
      {
        es: 'Perdón, ¿hace falta una moneda de un euro para sacar el carro?',
        arm: 'Ներեցեք, սայլակը հանելու համար մեկ եվրոյանոց մետաղադրա՞մ է պետք։'
      },
      {
        es: '¿Tiene cambio de una moneda para poder usar el carrito?',
        arm: 'Մետաղադրամի մանր ունե՞ք, որպեսզի կարողանամ օգտվել սայլակից։'
      },
      {
        es: '¿Puedo entrar con mi propia bolsa de tela para hacer la compra?',
        arm: 'Կարո՞ղ եմ ներս մտնել իմ կտորե պայուսակով գնումներ կատարելու համար։'
      }
    ]
  },
  {
    id: 41,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Llegar a la caja',
    titleArm: 'Մոտենալ դրամարկղին',
    situation: 'El cajero te saluda diciendo: “¡Hola! ¿Ha encontrado todo lo que buscaba?”. ¿Qué respondes?',
    situationArm: 'Գանձապահը ողջունում է քեզ՝ ասելով․ «Բարև ձեզ, գտա՞ք այն ամենը, ինչ փնտրում էիք»։ Ի՞նչ ես պատասխանում։',
    options: [
      {
        es: '¡Hola! Sí, muchas gracias, he encontrado todo perfectamente.',
        arm: 'Բարև ձեզ։ Այո, շատ շնորհակալություն, ամեն ինչ հիանալի գտա։'
      },
      {
        es: 'Buenas tardes. Sí, solo me ha faltado la levadura fresca.',
        arm: 'Բարի օր։ Այո, միայն թարմ խմորիչը չգտա։'
      },
      {
        es: 'Hola. Todo bien, gracias. ¿Puedo poner las cosas en la cinta?',
        arm: 'Բարև ձեզ։ Ամեն ինչ լավ է, շնորհակալություն։ Իրերը դնե՞մ ժապավենի վրա։'
      },
      {
        es: 'Sí, todo estupendo. Ha sido una compra muy rápida.',
        arm: 'Այո, հիանալի է։ Շատ արագ գնումներ ստացվեցին։'
      }
    ]
  },
  {
    id: 42,
    level: 'A2',
    topic: 'supermercado',
    titleEs: '¿Necesita bolsa?',
    titleArm: 'Տոպրակ պե՞տք է',
    situation: 'El cajero te pregunta: “¿Va a querer bolsa?”. ¿Cómo respondes?',
    situationArm: 'Գանձապահը հարցնում է քեզ․ «Տոպրակ կուզենա՞ք»։ Ինչպե՞ս ես պատասխանում։',
    options: [
      {
        es: 'Sí, una bolsa de plástico grande o de papel, por favor.',
        arm: 'Այո, մեկ մեծ պոլիէթիլենային կամ թղթե տոպրակ, խնդրում եմ։'
      },
      {
        es: 'No, gracias, traigo mis propias bolsas de tela.',
        arm: 'Ոչ, շնորհակալություն, իմ սեփական կտորե պայուսակներն ունեմ հետս։'
      },
      {
        es: 'Sí, dos bolsas resistentes, por favor, que llevo bastante peso.',
        arm: 'Այո, երկու ամուր տոպրակ, խնդրում եմ, քանի որ բավականին ծանր իրեր ունեմ։'
      },
      {
        es: 'No hace falta bolsa, lo llevo todo en la mochila, gracias.',
        arm: 'Տոպրակ պետք չէ, ամեն ինչ կտանեմ ուսապարկում, շնորհակալություն։'
      }
    ]
  },
  {
    id: 43,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Tarjeta de fidelidad',
    titleArm: 'Կուտակային կամ ակումբային քարտ',
    situation: 'El cajero pregunta: “¿Tiene tarjeta de cliente o del club?”. ¿Qué le dices?',
    situationArm: 'Գանձապահը հարցնում է․ «Ունե՞ք հաճախորդի կամ ակումբային քարտ»։ Ի՞նչ ես ասում նրան։',
    options: [
      {
        es: 'Sí, la tengo aquí en la aplicación del móvil. ¿Se la paso por el escáner?',
        arm: 'Այո, ունեմ հեռախոսի հավելվածում։ Սկանավորիչի մո՞տ պահեմ։'
      },
      {
        es: 'No, no la tengo. ¿Cómo puedo hacerme la tarjeta del club?',
        arm: 'Ոչ, չունեմ։ Ինչպե՞ս կարող եմ բացել ակումբի քարտ։'
      },
      {
        es: 'No la tengo conmigo, pero ¿le puedo dar mi número de teléfono?',
        arm: 'Մոտս չէ, բայց կարո՞ղ եմ տալ իմ հեռախոսահամարը։'
      },
      {
        es: 'No tengo la tarjeta, gracias, no hace falta.',
        arm: 'Չունեմ քարտը, շնորհակալություն, պետք չէ։'
      }
    ]
  },
  {
    id: 44,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Forma de pago en caja',
    titleArm: 'Վճարման եղանակը դրամարկղում',
    situation: 'El cajero dice: “Son veinticuatro euros con cincuenta céntimos. ¿Cómo va a pagar?”. ¿Qué respondes?',
    situationArm: 'Գանձապահն ասում է․ «Քսանչորս եվրո հիսուն ցենտ է։ Ինչպե՞ս եք վճարելու»։ Ի՞նչ ես պատասխանում։',
    options: [
      {
        es: 'Voy a pagar con tarjeta, por favor. Aquí tengo el reloj.',
        arm: 'Քարտով (անհպում) կվճարեմ, խնդրում եմ։ Ժամացույցով եմ անում։'
      },
      {
        es: 'En efectivo. Aquí tiene un billete de cincuenta euros.',
        arm: 'Կանխիկով։ Ահա հիսուն եվրոյանոց թղթադրամը։'
      },
      {
        es: 'Tengo el importe exacto en monedas, un segundo.',
        arm: 'Մետաղադրամներով ճիշտ գումարն ունեմ, մեկ վայրկյան։'
      },
      {
        es: '¿Puedo pagar diez euros en efectivo y el resto con tarjeta?',
        arm: 'Կարո՞ղ եմ տասը եվրոն կանխիկ վճարել, իսկ մնացածը՝ քարտով։'
      }
    ]
  },
  {
    id: 45,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Pedir el ticket de compra',
    titleArm: 'Խնդրել գնման անդորրագիրը',
    situation: 'Has terminado de pagar y necesitas el recibo de compra. ¿Cómo lo pides?',
    situationArm: 'Ավարտել ես վճարումը և քեզ պետք է գնումների անդորրագիրը (չեկը)։ Ինչպե՞ս ես խնդրում։',
    options: [
      {
        es: '¿Me da el ticket de compra, por favor?',
        arm: 'Կտա՞ք գնման անդորրագիրը (չեկը), խնդրում եմ։'
      },
      {
        es: 'Por favor, ¿me puede imprimir una factura con mis datos?',
        arm: 'Խնդրում եմ, կարո՞ղ եք ինձ հաշիվ-ապրանքագիր տպել իմ տվյալներով։'
      },
      {
        es: 'No hace falta el ticket en papel, me vale el ticket digital por la app.',
        arm: 'Թղթե չեկը պետք չէ, հավելվածի թվային չեկն ինձ բավարար է։'
      },
      {
        es: '¿El ticket sirve como garantía si tengo que cambiar algún producto?',
        arm: 'Արդյոք այս չեկը երաշխիք է ծառայում, եթե ստիպված լինեմ որևէ ապրանք փոխարինել։'
      }
    ]
  },
  {
    id: 46,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Comprar carne fresca en la carnicería',
    titleArm: 'Թարմ միս գնել մսավաճառի մոտ',
    situation: 'Estás en la carnicería y necesitas pechugas de pollo para cocinar hoy. ¿Qué le dices al carnicero?',
    situationArm: 'Դու մսի բաժնում ես և այսօր եփելու համար հավի կրծքամիս է պետք։ Ի՞նչ ես ասում մսավաճառին։',
    options: [
      {
        es: 'Hola, ¿me pone un kilo de pechuga de pollo cortada en filetes, por favor?',
        arm: 'Բարև ձեզ, մեկ կիլոգրամ շերտատած հավի կրծքամիս կտա՞ք, խնդրում եմ։'
      },
      {
        es: 'Quisiera medio kilo de carne picada mixta de ternera y cerdo.',
        arm: 'Կցանկանայի կես կիլոգրամ տավարի և խոզի խառը աղացած միս։'
      },
      {
        es: '¿Tiene carne fresca para preparar un caldo de ternera?',
        arm: 'Թարմ միս ունե՞ք տավարի արգանակ պատրաստելու համար։'
      },
      {
        es: '¿Me puede limpiar bien la grasa de estos filetes?',
        arm: 'Կարո՞ղ եք այս ֆիլեների ճարպը լավ մաքրել։'
      }
    ]
  },
  {
    id: 47,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Pedir pescado limpio en la pescadería',
    titleArm: 'Մաքրած ձուկ խնդրել ձկնավաճառից',
    situation: 'Quieres comprar dos doradas y no te gusta limpiarlas en casa. ¿Qué le pides al pescadero?',
    situationArm: 'Ուզում ես երկու հատ դորադա գնել և չես սիրում տանը մաքրել։ Ի՞նչ ես խնդրում ձկնավաճառին։',
    options: [
      {
        es: 'Buenas tardes, quiero dos doradas. ¿Me las puede limpiar y quitar las escamas?',
        arm: 'Բարի օր, երկու դորադա եմ ցանկանում։ Կարո՞ղ եք մաքրել փորոտիքը և թեփուկները։'
      },
      {
        es: '¿Me puede preparar este salmón en lomos limpios sin espinas?',
        arm: 'Կարո՞ղ եք այս սաղմոնը պատրաստել մաքուր ֆիլեներով՝ առանց փշերի։'
      },
      {
        es: '¿Este pescado es fresco del día o es congelado?',
        arm: 'Այս ձուկն օրվա թարմ ձո՞ւկ է, թե՞ սառեցված։'
      },
      {
        es: 'Póngame medio kilo de gambas frescas, por favor.',
        arm: 'Ինձ համար կես կիլոգրամ թարմ ծովախեցգետին կշռեք, խնդրում եմ։'
      }
    ]
  },
  {
    id: 48,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Buscar agua con o sin gas',
    titleArm: 'Գտնել գազավորված կամ առանց գազի ջուր',
    situation: 'Quieres un pack de agua mineral con gas, pero solo ves botellas de agua natural. ¿Qué dices?',
    situationArm: 'Գազավորված հանքային ջրի փաթեթ ես ուզում, բայց տեսնում ես միայն սովորական ջուր։ Ի՞նչ ես ասում։',
    options: [
      {
        es: 'Disculpe, ¿dónde tienen el agua mineral con gas?',
        arm: 'Կներեք, որտե՞ղ է գազավորված հանքային ջուրը։'
      },
      {
        es: '¿Tienen garrafas de agua de cinco litros?',
        arm: 'Հինգ լիտրանոց ջրի տարաներ ունե՞ք։'
      },
      {
        es: 'Busco botellitas pequeñas de medio litro para llevar en el bolso.',
        arm: 'Փնտրում եմ կես լիտրանոց փոքր շշեր՝ պայուսակում տանելու համար։'
      },
      {
        es: '¿Quedan packs de seis botellas de agua con gas en el fondo?',
        arm: 'Հետևի մասում գազավորված ջրի վեց շշանոց փաթեթներ մնացե՞լ են։'
      }
    ]
  },
  {
    id: 49,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Fecha de caducidad',
    titleArm: 'Պիտանիության ժամկետը',
    situation: 'Miras un cartón de leche y no distingues bien la fecha de caducidad. ¿Qué le preguntas al reponedor?',
    situationArm: 'Նայում ես կաթի տուփին և լավ չես տարբերում պիտանիության ժամկետը։ Ի՞նչ ես հարցնում դարակները լրացնող աշխատակցին։',
    options: [
      {
        es: 'Perdone, ¿me puede ayudar a mirar la fecha de caducidad de este yogur?',
        arm: 'Ներեցեք, կօգնե՞ք ինձ նայել այս յոգուրտի պիտանիության ժամկետը։'
      },
      {
        es: '¿Tiene envases con una fecha más lejana para que duren más días?',
        arm: 'Ավելի երկար ժամկետով տուփեր ունե՞ք, որպեսզի ավելի շատ օրեր դիմանա։'
      },
      {
        es: '¿Este producto se puede congelar en casa?',
        arm: 'Այս ապրանքը կարելի՞ է սառեցնել տանը։'
      },
      {
        es: 'Creo que este paquete caduca hoy, ¿tiene algún descuento especial?',
        arm: 'Կարծես այս տուփի ժամկետն այսօր լրանում է, հատուկ զեղչ ունի՞։'
      }
    ]
  },
  {
    id: 50,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Caja rápida o autoservicio',
    titleArm: 'Արագ կամ ինքնասպասարկման դրամարկղ',
    situation: 'Llevas solo tres artículos y hay mucha cola en las cajas normales. ¿Qué preguntas?',
    situationArm: 'Ընդամենը երեք ապրանք ես վերցրել, իսկ սովորական դրամարկղերի մոտ մեծ հերթ է։ Ի՞նչ ես հարցնում։',
    options: [
      {
        es: '¿Tienen cajas de autopago o caja rápida para menos de diez artículos?',
        arm: 'Ինքնավճարման կամ արագ դրամարկղ ունե՞ք՝ տասից քիչ ապրանքների համար։'
      },
      {
        es: '¿Puedo pagar aquí si solo llevo estas tres cosas?',
        arm: 'Կարո՞ղ եմ այստեղ վճարել, եթե ընդամենն այս երեք իրն ունեմ։'
      },
      {
        es: 'Disculpe, ¿esta cola es para la caja rápida?',
        arm: 'Կներեք, այս հե՞րթն է արագ դրամարկղի համար։'
      },
      {
        es: '¿Las máquinas de autoservicio aceptan pago en efectivo o solo tarjeta?',
        arm: 'Ինքնասպասարկման սարքերը կանխի՞կ էլ են ընդունում, թե՞ միայն քարտ։'
      }
    ]
  },
  {
    id: 51,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Artículos de limpieza',
    titleArm: 'Մաքրող միջոցներ',
    situation: 'Necesitas detergente para la lavadora y suavizante. ¿Cómo preguntas por la sección?',
    situationArm: 'Լվացքի մեքենայի փոշի և փափկեցնող հեղուկ են պետք։ Ինչպե՞ս ես հարցնում այդ բաժնի մասին։',
    options: [
      {
        es: '¿En qué pasillo están los detergentes para la ropa y la limpieza del hogar?',
        arm: 'Ո՞ր միջանցքում են հագուստի լվացքի և տան մաքրման միջոցները։'
      },
      {
        es: '¿Dónde puedo encontrar bolsas de basura de treinta litros?',
        arm: 'Որտե՞ղ կարող եմ գտնել երեսուն լիտրանոց աղբի տոպրակներ։'
      },
      {
        es: 'Busco pastillas para el lavavajillas, ¿dónde están colocadas?',
        arm: 'Սպասք լվացող մեքենայի հաբեր եմ փնտրում, որտե՞ղ են դրված։'
      },
      {
        es: '¿Tienen papel higiénico y servilletas de cocina en este pasillo?',
        arm: 'Այս միջանցքում զուգարանի թուղթ և խոհանոցային անձեռոցիկներ ունե՞ք։'
      }
    ]
  },
  {
    id: 52,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Comida congelada',
    titleArm: 'Սառեցված սնունդ',
    situation: 'Buscas verduras congeladas para preparar una sopa rápida. ¿Qué preguntas?',
    situationArm: 'Սառեցված բանջարեղեն ես փնտրում արագ ապուր պատրաստելու համար։ Ի՞նչ ես հարցնում։',
    options: [
      {
        es: '¿Dónde están los congeladores con las verduras y los guisantes?',
        arm: 'Որտե՞ղ են բանջարեղենով և ոլոռով սառնարանները։'
      },
      {
        es: '¿Tienen pizzas congeladas o empanadas listas para hornear?',
        arm: 'Սառեցված պիցցա կամ թխելու պատրաստ էմպանադաներ ունե՞ք։'
      },
      {
        es: 'Busco helado de vainilla en tarrina grande, ¿dónde está?',
        arm: 'Մեծ տուփով վանիլային պաղպաղակ եմ փնտրում, որտե՞ղ է։'
      },
      {
        es: '¿Tienen bolsas térmicas especiales para productos congelados?',
        arm: 'Սառեցված ապրանքների համար հատուկ ջերմամեկուսիչ տոպրակներ ունե՞ք։'
      }
    ]
  },
  {
    id: 53,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Huevos frescos',
    titleArm: 'Թարմ հավկիթներ',
    situation: 'Quieres una docena de huevos camperos o ecológicos. ¿Qué le preguntas al empleado?',
    situationArm: 'Մեկ տասնյակ գյուղական կամ էկոլոգիական հավկիթ ես ուզում։ Ի՞նչ ես հարցնում աշխատակցին։',
    options: [
      {
        es: '¿Dónde tienen los huevos camperos o ecológicos de tamaño grande?',
        arm: 'Որտե՞ղ են գտնվում խոշոր չափսի գյուղական կամ էկո հավկիթները։'
      },
      {
        es: '¿Me puede decir si esta caja es de seis o de doce huevos?',
        arm: 'Կարո՞ղ եք ասել՝ այս տուփը վեց, թե՞ տասներկու ձվի համար է։'
      },
      {
        es: 'Perdón, se ha roto un huevo en esta caja, ¿puedo coger otra?',
        arm: 'Ներեցեք, այս տուփում մեկ ձու կոտրվել է, կարո՞ղ եմ ուրիշը վերցնել։'
      },
      {
        es: '¿En qué estantería están los huevos, por favor?',
        arm: 'Ո՞ր դարակին են հավկիթները, խնդրում եմ։'
      }
    ]
  },
  {
    id: 54,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Café molido o en grano',
    titleArm: 'Աղացած կամ հատիկավոր սուրճ',
    situation: 'Quieres café para cafetera italiana y no sabes cuál elegir. ¿Qué preguntas?',
    situationArm: 'Իտալական սրճեփի (մոկա) համար սուրճ ես ուզում և չգիտես որն ընտրել։ Ի՞նչ ես հարցնում։',
    options: [
      {
        es: '¿Cuál de estos cafés está molido especialmente para cafetera italiana?',
        arm: 'Այս սուրճերից ո՞րն է աղացած հատուկ իտալական սրճեփի համար։'
      },
      {
        es: '¿Tienen café en grano entero para moler en casa?',
        arm: 'Տանն աղալու համար հատիկավոր ամբողջական սուրճ ունե՞ք։'
      },
      {
        es: '¿Tienen cápsulas de café compatibles con cafeteras Nespresso?',
        arm: 'Nespresso սրճեփի հետ համատեղելի սուրճի պատիճներ (կապսուլներ) ունե՞ք։'
      },
      {
        es: 'Busco un café con sabor suave y cien por cien arábica.',
        arm: 'Փնտրում եմ մեղմ համով և հարյուր տոկոսանոց արաբիկա սուրճ։'
      }
    ]
  },
  {
    id: 55,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Productos locales y regionales',
    titleArm: 'Տեղական և տարածաշրջանային արտադրանք',
    situation: 'Quieres comprar vino o dulces típicos de la región. ¿Qué preguntas?',
    situationArm: 'Ուզում ես գնել տեղական գինի կամ տարածաշրջանի ավանդական քաղցրավենիք։ Ի՞նչ ես հարցնում։',
    options: [
      {
        es: '¿Tienen una sección con vinos y productos típicos de la región?',
        arm: 'Այս տարածաշրջանի գինիների և ավանդական ապրանքների բաժին ունե՞ք։'
      },
      {
        es: '¿Qué vino tinto español me recomienda para una cena especial?',
        arm: 'Իսպանական ո՞ր կարմիր գինին խորհուրդ կտաք հատուկ ընթրիքի համար։'
      },
      {
        es: 'Busco dulces tradicionales como turrón o polvorones, ¿dónde están?',
        arm: 'Ավանդական քաղցրավենիքներ եմ փնտրում (ինչպես տուռոնը), որտե՞ղ են դրանք։'
      },
      {
        es: '¿Este aceite de oliva virgen extra está producido en España?',
        arm: 'Այս ձիթապտղի յուղն Իսպանիայո՞ւմ է արտադրված։'
      }
    ]
  },
  {
    id: 56,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Devolver o cambiar un artículo',
    titleArm: 'Վերադարձնել կամ փոխարինել ապրանքը',
    situation: 'Compraste un producto por error y tienes el ticket de compra. ¿Qué dices en el punto de atención al cliente?',
    situationArm: 'Սխալմամբ ապրանք ես գնել և ունես գնման անդորրագիրը։ Ի՞նչ ես ասում տեղեկատվական սեղանի մոտ։',
    options: [
      {
        es: 'Hola, compré este producto ayer por error y tengo el ticket. ¿Puedo cambiarlo?',
        arm: 'Բարև ձեզ, այս ապրանքը երեկ սխալմամբ եմ գնել և չեկն ունեմ։ Կարո՞ղ եմ փոխարինել։'
      },
      {
        es: 'El envase venía roto por dentro, ¿me lo pueden descambiar por uno nuevo?',
        arm: 'Տուփը ներսից վնասված էր, կարո՞ղ եք փոխարինել նորով։'
      },
      {
        es: '¿Me pueden hacer la devolución del dinero a la tarjeta?',
        arm: 'Կարո՞ղ եք գումարի վերադարձ կատարել իմ բանկային քարտին։'
      },
      {
        es: 'Tengo el ticket aquí mismo, ¿hace falta rellenar algún formulario?',
        arm: 'Չեկն այստեղ է, պե՞տք է որևէ ձևաթուղթ լրացնել։'
      }
    ]
  },
  {
    id: 57,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Horario del supermercado',
    titleArm: 'Սուպերմարկետի աշխատանքային ժամերը',
    situation: 'Quieres saber a qué hora cierran por la noche y si abren los domingos. ¿Qué preguntas?',
    situationArm: 'Ուզում ես իմանալ, թե երեկոյան ժամը քանիսին են փակվում և արդյոք կիրակի օրերին բաց են։ Ի՞նչ ես հարցնում։',
    options: [
      {
        es: 'Disculpe, ¿a qué hora cierran esta noche?',
        arm: 'Կներեք, ժամը քանիսի՞ն եք փակվում այս երեկո։'
      },
      {
        es: '¿El supermercado abre los domingos y días festivos?',
        arm: 'Սուպերմարկետը բա՞ց է կիրակի և տոն օրերին։'
      },
      {
        es: '¿Cuál es el horario continuo de lunes a sábado?',
        arm: 'Երկուշաբթիից շաբաթ ո՞րն է աշխատանքային գրաֆիկը։'
      },
      {
        es: '¿A qué hora avisan por megafonía antes del cierre?',
        arm: 'Փակվելուց քանի՞ րոպե առաջ են հայտարարում բարձրախոսով։'
      }
    ]
  },
  {
    id: 58,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Frutos secos a granel',
    titleArm: 'Ընկուզեղեն՝ ըստ քաշի',
    situation: 'Quieres comprar nueces y almendras a granel. ¿Cómo preguntas si puedes servirte tú mismo?',
    situationArm: 'Ուզում ես ըստ քաշի ընկույզ և նուշ գնել։ Ինչպե՞ս ես հարցնում, թե արդյոք կարող ես ինքդ լցնել։',
    options: [
      {
        es: '¿Los frutos secos se compran a granel o vienen solo en paquetes cerrados?',
        arm: 'Ընկուզեղենը ըստ քաշի՞ է վաճառվում, թե՞ միայն փակ տուփերով։'
      },
      {
        es: '¿Dónde están las bolsitas y las palas para servir los frutos secos?',
        arm: 'Որտե՞ղ են ընկուզեղեն լցնելու փոքր տոպրակներն ու թիակները։'
      },
      {
        es: '¿Tienen nueces crudas sin sal ni tostar?',
        arm: 'Հում, անալի և չբոված ընկույզ ունե՞ք։'
      },
      {
        es: '¿Cuánto cuesta el kilo de almendras tostadas?',
        arm: 'Ինչքա՞ն արժե բոված նշի մեկ կիլոգրամը։'
      }
    ]
  },
  {
    id: 59,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Comida preparada para llevar',
    titleArm: 'Պատրաստի տաք կերակուրներ',
    situation: 'No tienes tiempo de cocinar y buscas platos ya cocinados calientes en el súper. ¿Qué dices?',
    situationArm: 'Եփելու ժամանակ չունես և սուպերմարկետում պատրաստի տաք ուտեստներ ես փնտրում։ Ի՞նչ ես ասում։',
    options: [
      {
        es: '¿Tienen sección de comida preparada caliente lista para llevar?',
        arm: 'Տանելու համար պատրաստի տաք կերակուրների բաժին ունե՞ք։'
      },
      {
        es: 'Póngame una porción de tortilla de patatas y pollo asado, por favor.',
        arm: 'Ինձ համար կարտոֆիլով տորտիլյայի մի կտոր և խորոված հավ կշռեք, խնդրում եմ։'
      },
      {
        es: '¿Me puede calentar esta comida en el microondas del supermercado?',
        arm: 'Կարո՞ղ եք այս ուտեստը տաքացնել սուպերմարկետի միկրոալիքային վառարանում։'
      },
      {
        es: '¿Viene con cubiertos de plástico y servilletas?',
        arm: 'Պարագաներ (պատառաքաղ) և անձեռոցիկներ ներառվա՞ծ են։'
      }
    ]
  },
  {
    id: 60,
    level: 'A2',
    topic: 'supermercado',
    titleEs: 'Pedir ayuda con una bolsa pesada',
    titleArm: 'Օգնություն խնդրել ծանր պայուսակի հարցում',
    situation: 'Tus compras pesan mucho y necesitas ayuda o servicio de entrega a domicilio. ¿Qué preguntas?',
    situationArm: 'Գնումներդ շատ ծանր են և օգնություն կամ տուն առաքման ծառայություն է պետք։ Ի՞նչ ես հարցնում։',
    options: [
      {
        es: '¿Tienen servicio de entrega a domicilio para las compras grandes?',
        arm: 'Մեծ գնումների համար տուն առաքման ծառայություն ունե՞ք։'
      },
      {
        es: '¿Cuánto cuesta el envío de la compra a mi casa?',
        arm: 'Ինչքա՞ն արժե գնումներս տուն առաքելը։'
      },
      {
        es: '¿Puedo dejar el carrito un momento cerca del coche para descargar?',
        arm: 'Կարո՞ղ եմ սայլակը մի պահ մեքենայի մոտ տանել՝ բեռնաթափելու համար։'
      },
      {
        es: '¡Muchas gracias por su ayuda tan amable! ¡Hasta luego!',
        arm: 'Շատ շնորհակալ եմ ձեր բարի օգնության համար։ Մինչ հանդիպում։'
      }
    ]
  }
];

export const GAYANE_ALL_CARDS: CardData[] = [...GAYANE_RESTAURANT_CARDS, ...GAYANE_SUPERMARKET_CARDS];


// =========================================================================
// RAZMIK: NIVEL A1 (60 tarjetas con situación corta y clara + pregunta A1)
// 1–2 oraciones sencillas: ser, estar, tener, querer, gustar, comprar, comer, beber
// =========================================================================

export const RAZMIK_RESTAURANT_CARDS: CardData[] = [
  {
    id: 101,
    level: 'A1',
    topic: 'restaurante',
    titleEs: '¿Qué quieres comer?',
    titleArm: 'Ի՞նչ ես ուզում ուտել',
    situation: 'Estás en un restaurante y tienes hambre. ¿Qué quieres comer?',
    situationArm: 'Ռեստորանում ես և սոված ես։ Ի՞նչ ես ուզում ուտել։',
    options: [
      { es: 'Quiero comer pollo con arroz.', arm: 'Ուզում եմ հավի միս ուտել բրնձով։' },
      { es: 'Quiero una pizza de queso.', arm: 'Պանրով պիցցա եմ ուզում։' },
      { es: 'Quiero una ensalada con tomate.', arm: 'Լոլիկով աղցան եմ ուզում։' },
      { es: 'Quiero una sopa de verduras.', arm: 'Բանջարեղենով ապուր եմ ուզում։' }
    ]
  },
  {
    id: 102,
    level: 'A1',
    topic: 'restaurante',
    titleEs: '¿Qué prefieres beber?',
    titleArm: 'Ի՞նչ ես նախընտրում խմել',
    situation: 'Quieres beber algo y hay agua y zumo. ¿Qué prefieres?',
    situationArm: 'Ուզում ես մի բան խմել, և կա ջուր ու հյութ։ Ի՞նչ ես նախընտրում։',
    options: [
      { es: 'Prefiero un vaso de agua.', arm: 'Մեկ բաժակ ջուր եմ նախընտրում։' },
      { es: 'Prefiero zumo de naranja natural.', arm: 'Թարմ նարնջի հյութ եմ նախընտրում։' },
      { es: 'Quiero agua bien fría.', arm: 'Շատ սառը ջուր եմ ուզում։' },
      { es: 'Me gustan los dos.', arm: 'Երկուսն էլ սիրում եմ։' }
    ]
  },
  {
    id: 103,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Pollo o pescado',
    titleArm: 'Հավ, թե՞ ձուկ',
    situation: 'En el menú hay pollo y pescado. ¿Qué quieres comer?',
    situationArm: 'Մենյուի մեջ հավ և ձուկ կա։ Ի՞նչ ես ուզում ուտել։',
    options: [
      { es: 'Quiero comer pollo asado.', arm: 'Խորոված հավ եմ ուզում ուտել։' },
      { es: 'Quiero pescado con patatas.', arm: 'Ձուկ կարտոֆիլով եմ ուզում։' },
      { es: 'Hoy prefiero comer pollo.', arm: 'Այսօր նախընտրում եմ հավ ուտել։' },
      { es: 'No quiero carne hoy.', arm: 'Այսօր միս չեմ ուզում։' }
    ]
  },
  {
    id: 104,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Una pizza rica',
    titleArm: 'Համեղ պիցցա',
    situation: 'Tu amigo pide una pizza grande. ¿Tú también quieres una pizza?',
    situationArm: 'Ընկերդ մեծ պիցցա է պատվիրում։ Դո՞ւ էլ ես պիցցա ուզում։',
    options: [
      { es: 'Sí, yo también quiero pizza.', arm: 'Այո, ես նույնպես պիցցա եմ ուզում։' },
      { es: 'Sí, una pizza de jamón.', arm: 'Այո, խոզապուխտով պիցցա։' },
      { es: 'No, yo prefiero una hamburguesa.', arm: 'Ոչ, ես բուրգեր եմ նախընտրում։' },
      { es: 'Podemos compartir la pizza grande.', arm: 'Կարող ենք կիսել մեծ պիցցան։' }
    ]
  },
  {
    id: 105,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Helado de postre',
    titleArm: 'Պաղպաղակ աղանդերին',
    situation: 'Hay helado de chocolate y de fresa. ¿Cuál quieres?',
    situationArm: 'Շոկոլադե և ելակի պաղպաղակ կա։ Ո՞րն ես ուզում։',
    options: [
      { es: 'Quiero el helado de chocolate.', arm: 'Շոկոլադե պաղպաղակն եմ ուզում։' },
      { es: 'Quiero el helado de fresa.', arm: 'Ելակի պաղպաղակն եմ ուզում։' },
      { es: 'Quiero dos bolas de helado.', arm: 'Երկու գնդիկ պաղպաղակ եմ ուզում։' },
      { es: 'No quiero helado ahora.', arm: 'Հիմա պաղպաղակ չեմ ուզում։' }
    ]
  },
  {
    id: 106,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Saludar al camarero',
    titleArm: 'Ողջունել մատուցողին',
    situation: 'El camarero llega a la mesa. ¿Qué dices para saludar?',
    situationArm: 'Մատուցողը մոտենում է սեղանին։ Ի՞նչ ես ասում ողջունելու համար։',
    options: [
      { es: '¡Hola! Buenas tardes.', arm: 'Բարև ձեզ, բարի օր։' },
      { es: '¡Hola! Una mesa, por favor.', arm: 'Բարև ձեզ, մեկ սեղան, խնդրում եմ։' },
      { es: 'Buenas noches, somos dos personas.', arm: 'Բարի երեկո, մենք երկու հոգի ենք։' },
      { es: '¡Hola! ¿Cómo estás hoy?', arm: 'Բարև ձեզ, ինչպե՞ս եք այսօր։' }
    ]
  },
  {
    id: 107,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'La sopa caliente',
    titleArm: 'Տաք ապուրը',
    situation: 'La sopa está muy caliente en el plato. ¿Qué haces tú?',
    situationArm: 'Ապուրն ափսեի մեջ շատ տաք է։ Ի՞նչ ես անում դու։',
    options: [
      { es: 'Espero dos minutos para comer.', arm: 'Երկու րոպե սպասում եմ ուտելու համար։' },
      { es: 'Como despacio con la cuchara.', arm: 'Դանդաղ եմ ուտում գդալով։' },
      { es: 'Bebo un poco de agua.', arm: 'Մի քիչ ջուր եմ խմում։' },
      { es: 'La sopa está muy rica.', arm: 'Ապուրը շատ համեղ է։' }
    ]
  },
  {
    id: 108,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Ensalada fresca',
    titleArm: 'Թարմ աղցան',
    situation: 'Quieres comer una ensalada fresca. ¿Qué ingredientes quieres?',
    situationArm: 'Ուզում ես թարմ աղցան ուտել։ Ի՞նչ բաղադրիչներ ես ուզում։',
    options: [
      { es: 'Quiero tomate, queso y aceite.', arm: 'Լոլիկ, պանիր և ձիթայուղ եմ ուզում։' },
      { es: 'Quiero ensalada con mucho tomate.', arm: 'Շատ լոլիկով աղցան եմ ուզում։' },
      { es: 'Sin cebolla, por favor.', arm: 'Առանց սոխի, խնդրում եմ։' },
      { es: 'Solo lechuga fresca con sal.', arm: 'Միայն թարմ հազար՝ աղով։' }
    ]
  },
  {
    id: 109,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Mucha sed',
    titleArm: 'Շատ ծարավ',
    situation: 'Tienes mucha sed después de jugar. ¿Qué bebes en el restaurante?',
    situationArm: 'Խաղալուց հետո շատ ծարավ ես։ Ի՞նչ ես խմում ռեստորանում։',
    options: [
      { es: 'Bebo un vaso de agua.', arm: 'Մեկ բաժակ ջուր եմ խմում։' },
      { es: 'Bebo zumo de manzana dulce.', arm: 'Քաղցր խնձորի հյութ եմ խմում։' },
      { es: 'Bebo agua fría con hielo.', arm: 'Սառը ջուր եմ խմում՝ սառույցով։' },
      { es: 'Quiero una limonada fresca.', arm: 'Թարմ լիմոնադ եմ ուզում։' }
    ]
  },
  {
    id: 110,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Elegir mesa',
    titleArm: 'Սեղան ընտրել',
    situation: 'Hay dos mesas libres en el restaurante. ¿Dónde quieres sentarte?',
    situationArm: 'Ռեստորանում երկու ազատ սեղան կա։ Որտե՞ղ ես ուզում նստել։',
    options: [
      { es: 'Quiero la mesa cerca de la ventana.', arm: 'Պատուհանի մոտի սեղանն եմ ուզում։' },
      { es: 'Quiero la mesa afuera en la terraza.', arm: 'Դրսի՝ պատշգամբի սեղանն եմ ուզում։' },
      { es: 'Esta mesa es muy bonita.', arm: 'Այս սեղանը շատ սիրուն է։' },
      { es: 'Nos sentamos aquí al lado.', arm: 'Այստեղ՝ կողքին ենք նստում։' }
    ]
  },
  {
    id: 111,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Pedir pan tierno',
    titleArm: 'Հաց խնդրել',
    situation: 'Estás comiendo y necesitas pan. ¿Cómo lo pides?',
    situationArm: 'Ուտում ես և հաց է պետք։ Ինչպե՞ս ես խնդրում։',
    options: [
      { es: 'Un poco de pan, por favor.', arm: 'Մի քիչ հաց, խնդրում եմ։' },
      { es: '¿Me trae más pan, por favor?', arm: 'Էլի հաց կբերե՞ք, խնդրում եմ։' },
      { es: 'Quiero dos trozos de pan.', arm: 'Երկու կտոր հաց եմ ուզում։' },
      { es: 'Me gusta el pan blanco.', arm: 'Սպիտակ հացն եմ սիրում։' }
    ]
  },
  {
    id: 112,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Pasta con salsa',
    titleArm: 'Մակարոն սոուսով',
    situation: 'Quieres comer pasta con salsa. ¿Qué pasta prefieres?',
    situationArm: 'Ուզում ես մակարոն ուտել սոուսով։ Ո՞ր մակարոնն ես նախընտրում։',
    options: [
      { es: 'Prefiero espaguetis con tomate.', arm: 'Լոլիկով սպագետտի եմ նախընտրում։' },
      { es: 'Prefiero macarrones con queso.', arm: 'Պանրով մակարոն եմ նախընտրում։' },
      { es: 'Quiero pasta con pollo.', arm: 'Հավի մսով մակարոն եմ ուզում։' },
      { es: 'La pasta está muy rica.', arm: 'Մակարոնը շատ համեղ է։' }
    ]
  },
  {
    id: 113,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Falta un tenedor',
    titleArm: 'Պատառաքաղ է պակասում',
    situation: 'No tienes tenedor en la mesa. ¿Qué le dices al camarero?',
    situationArm: 'Սեղանին պատառաքաղ չունես։ Ի՞նչ ես ասում մատուցողին։',
    options: [
      { es: 'Necesito un tenedor, por favor.', arm: 'Ինձ պատառաքաղ է պետք, խնդրում եմ։' },
      { es: '¿Me da un tenedor limpio?', arm: 'Մաքուր պատառաքաղ կտա՞ք։' },
      { es: 'Solo tengo una cuchara aquí.', arm: 'Այստեղ միայն գդալ ունեմ։' },
      { es: 'Por favor, me falta el tenedor.', arm: 'Խնդրում եմ, պատառաքաղս պակասում է։' }
    ]
  },
  {
    id: 114,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'La comida deliciosa',
    titleArm: 'Համեղ ուտեստ',
    situation: 'Te gusta mucho la comida del restaurante. ¿Qué dices?',
    situationArm: 'Քեզ շատ է դուր գալիս ռեստորանի ուտելիքը։ Ի՞նչ ես ասում։',
    options: [
      { es: '¡Todo está muy rico!', arm: 'Ամեն ինչ շատ համեղ է։' },
      { es: 'La pizza está súper deliciosa.', arm: 'Պիցցան չափազանց համեղ է։' },
      { es: 'Me gusta mucho este plato.', arm: 'Ինձ շատ է դուր գալիս այս ուտեստը։' },
      { es: '¡Muchas gracias al cocinero!', arm: 'Շատ շնորհակալություն խոհարարին։' }
    ]
  },
  {
    id: 115,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'El vaso vacío',
    titleArm: 'Դատարկ բաժակը',
    situation: 'Tu vaso de agua está vacío. ¿Qué pides al camarero?',
    situationArm: 'Ջրի բաժակդ դատարկ է։ Ի՞նչ ես խնդրում մատուցողին։',
    options: [
      { es: 'Más agua fría, por favor.', arm: 'Էլի սառը ջուր, խնդրում եմ։' },
      { es: 'Quiero otro vaso de agua.', arm: 'Մեկ ուրիշ բաժակ ջուր եմ ուզում։' },
      { es: 'Una botella pequeña de agua.', arm: 'Մեկ փոքր շիշ ջուր։' },
      { es: 'Ahora quiero un zumo.', arm: 'Հիմա հյութ եմ ուզում։' }
    ]
  },
  {
    id: 116,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Manzana o chocolate',
    titleArm: 'Խնձոր, թե՞ շոկոլադ',
    situation: 'Hay tarta de manzana y tarta de chocolate. ¿Cuál es tu postre?',
    situationArm: 'Խնձորի կարկանդակ և շոկոլադե տորթ կա։ Ո՞րն է քո աղանդերը։',
    options: [
      { es: 'Quiero la tarta de chocolate.', arm: 'Շոկոլադե տորթն եմ ուզում։' },
      { es: 'Prefiero la tarta de manzana.', arm: 'Խնձորի կարկանդակն եմ նախընտրում։' },
      { es: 'Quiero un trozo grande.', arm: 'Մեծ կտոր եմ ուզում։' },
      { es: 'Las dos tartas están ricas.', arm: 'Երկու տորթերն էլ համեղ են։' }
    ]
  },
  {
    id: 117,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Las manos limpias',
    titleArm: 'Մաքուր ձեռքեր',
    situation: 'Tienes las manos sucias después de comer. ¿Qué necesitas?',
    situationArm: 'Ուտելուց հետո ձեռքերդ կեղտոտվել են։ Ի՞նչ է պետք քեզ։',
    options: [
      { es: 'Necesito una servilleta de papel.', arm: 'Թղթե անձեռոցիկ է պետք ինձ։' },
      { es: '¿Dónde está el baño, por favor?', arm: 'Որտե՞ղ է զուգարանը, խնդրում եմ։' },
      { es: 'Voy a lavarme las manos.', arm: 'Գնում եմ ձեռքերս լվանալու։' },
      { es: 'Dame dos servilletas, gracias.', arm: 'Երկու անձեռոցիկ տուր ինձ, շնորհակալություն։' }
    ]
  },
  {
    id: 118,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Desayunar rico',
    titleArm: 'Համեղ նախաճաշ',
    situation: 'En el desayuno hay leche y zumo. ¿Qué bebes por la mañana?',
    situationArm: 'Նախաճաշին կաթ և հյութ կա։ Ի՞նչ ես խմում առավոտյան։',
    options: [
      { es: 'Bebo un vaso de leche.', arm: 'Մեկ բաժակ կաթ եմ խմում։' },
      { es: 'Bebo zumo de naranja dulce.', arm: 'Քաղցր նարնջի հյութ եմ խմում։' },
      { es: 'Bebo leche con chocolate.', arm: 'Շոկոլադով կաթ եմ խմում։' },
      { es: 'Bebo agua fresca siempre.', arm: 'Միշտ թարմ ջուր եմ խմում։' }
    ]
  },
  {
    id: 119,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Pollo con patatas',
    titleArm: 'Հավի միս կարտոֆիլով',
    situation: 'Quieres patatas con tu pollo asado. ¿Cómo pides el plato?',
    situationArm: 'Հավի մսիդ հետ կարտոֆիլ ես ուզում։ Ինչպե՞ս ես պատվիրում ուտեստը։',
    options: [
      { es: 'Quiero pollo con patatas fritas.', arm: 'Հավի միս տապակած կարտոֆիլով եմ ուզում։' },
      { es: 'Pollo con patatas, por favor.', arm: 'Հավի միս կարտոֆիլով, խնդրում եմ։' },
      { es: 'Me gustan mucho las patatas.', arm: 'Շատ եմ սիրում կարտոֆիլ։' },
      { es: '¿Tiene patatas asadas ricas?', arm: 'Համեղ ջեռեփած կարտոֆիլ ունե՞ք։' }
    ]
  },
  {
    id: 120,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Terminar la comida',
    titleArm: 'Ավարտել ուտելը',
    situation: 'Ya has terminado de comer toda tu comida. ¿Qué dices?',
    situationArm: 'Արդեն կերել ավարտել ես ամբողջ ուտելիքդ։ Ի՞նչ ես ասում։',
    options: [
      { es: '¡Ya he terminado, estoy lleno!', arm: 'Արդեն ավարտել եմ, կուշտ եմ։' },
      { es: 'La comida estaba muy buena.', arm: 'Ուտելիքը շատ լավն էր։' },
      { es: 'Ahora quiero comer el postre.', arm: 'Հիմա ուզում եմ աղանդեր ուտել։' },
      { es: '¿Podemos pedir la cuenta?', arm: 'Կարո՞ղ ենք հաշիվը խնդրել։' }
    ]
  },
  {
    id: 121,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Hamburguesa o sándwich',
    titleArm: 'Բուրգեր, թե՞ սենդվիչ',
    situation: 'Ves una hamburguesa y un sándwich caliente. ¿Qué quieres cenar?',
    situationArm: 'Տեսնում ես բուրգեր և տաք սենդվիչ։ Ի՞նչ ես ուզում ընթրել։',
    options: [
      { es: 'Quiero comer una hamburguesa.', arm: 'Բուրգեր եմ ուզում ուտել։' },
      { es: 'Quiero un sándwich de queso.', arm: 'Պանրով սենդվիչ եմ ուզում։' },
      { es: 'Prefiero una hamburguesa pequeña.', arm: 'Փոքր բուրգեր եմ նախընտրում։' },
      { es: 'El sándwich es muy bueno.', arm: 'Սենդվիչը շատ լավն է։' }
    ]
  },
  {
    id: 122,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Fruta fresca',
    titleArm: 'Թարմ մրգեր',
    situation: 'Hay fruta fresca de postre: manzana, plátano y fresas. ¿Cuál te gusta?',
    situationArm: 'Աղանդերին թարմ միրգ կա՝ խնձոր, բանան և ելակ։ Ո՞րն ես սիրում։',
    options: [
      { es: 'Me gustan las fresas rojas.', arm: 'Կարմիր ելակն եմ սիրում։' },
      { es: 'Quiero comer un plátano.', arm: 'Բանան եմ ուզում ուտել։' },
      { es: 'Prefiero una manzana dulce.', arm: 'Քաղցր խնձոր եմ նախընտրում։' },
      { es: 'Me gustan todas las frutas.', arm: 'Բոլոր մրգերն էլ սիրում եմ։' }
    ]
  },
  {
    id: 123,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Un poco de sal',
    titleArm: 'Մի քիչ աղ',
    situation: 'La comida tiene un poco de sal de más. ¿Qué haces tú?',
    situationArm: 'Ուտեստի վրա մի քիչ ավել աղ կա։ Ի՞նչ ես անում դու։',
    options: [
      { es: 'Bebo un vaso de agua.', arm: 'Մեկ բաժակ ջուր եմ խմում։' },
      { es: 'Como con un poco de pan.', arm: 'Մի քիչ հացով եմ ուտում։' },
      { es: 'Como despacio la comida.', arm: 'Դանդաղ եմ ուտում ուտեստը։' },
      { es: 'No pasa nada, está buena.', arm: 'Ոչինչ, լավն է։' }
    ]
  },
  {
    id: 124,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Salsa de tomate',
    titleArm: 'Լոլիկի սոուս',
    situation: 'Quieres salsa de tomate en tu comida. ¿Cómo la pides al camarero?',
    situationArm: 'Ուտելիքիդ վրա լոլիկի սոուս ես ուզում։ Ինչպե՞ս ես խնդրում մատուցողին։',
    options: [
      { es: 'Con salsa de tomate, por favor.', arm: 'Լոլիկի սոուսով, խնդրում եմ։' },
      { es: '¿Tiene kétchup para las patatas?', arm: 'Կարտոֆիլի համար կետչուպ ունե՞ք։' },
      { es: 'Solo un poco de salsa.', arm: 'Միայն մի քիչ սոուս։' },
      { es: 'Me encanta la salsa roja.', arm: 'Շատ եմ սիրում կարմիր սոուսը։' }
    ]
  },
  {
    id: 125,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Se cae la servilleta',
    titleArm: 'Ընկնում է անձեռոցիկը',
    situation: 'Estás en la mesa y se te cae la servilleta. ¿Qué dices?',
    situationArm: 'Սեղանի մոտ ես և անձեռոցիկդ ընկնում է։ Ի՞նչ ես ասում։',
    options: [
      { es: '¿Me da otra servilleta, por favor?', arm: 'Մեկ ուրիշ անձեռոցիկ կտա՞ք, խնդրում եմ։' },
      { es: 'Se me ha caído al suelo.', arm: 'Հատակին ընկավ։' },
      { es: 'Necesito una servilleta limpia.', arm: 'Ինձ մաքուր անձեռոցիկ է պետք։' },
      { es: 'Gracias por ayudarme.', arm: 'Շնորհակալություն օգնելու համար։' }
    ]
  },
  {
    id: 126,
    level: 'A1',
    topic: 'restaurante',
    titleEs: '¿Quieres postre?',
    titleArm: 'Աղանդե՞ր ես ուզում',
    situation: 'El camarero te pregunta si quieres postre hoy. ¿Qué respondes?',
    situationArm: 'Մատուցողը հարցնում է՝ արդյոք այսօր աղանդեր ես ուզում։ Ի՞նչ ես պատասխանում։',
    options: [
      { es: 'Sí, quiero un helado rico.', arm: 'Այո, համեղ պաղպաղակ եմ ուզում։' },
      { es: 'Sí, una tarta de chocolate.', arm: 'Այո, շոկոլադե տորթ։' },
      { es: 'No quiero postre hoy, gracias.', arm: 'Այսօր աղանդեր չեմ ուզում, շնորհակալություն։' },
      { es: 'Solo fruta fresca, por favor.', arm: 'Միայն թարմ միրգ, խնդրում եմ։' }
    ]
  },
  {
    id: 127,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Pagar la comida',
    titleArm: 'Վճարել ուտելիքի համար',
    situation: 'Tienes que pagar la comida. ¿Tienes monedas o tarjeta?',
    situationArm: 'Պետք է վճարես ուտելիքի համար։ Մետաղադրա՞մ ունես, թե՞ քարտ։',
    options: [
      { es: 'Tengo monedas en mi bolsillo.', arm: 'Գրպանումս մետաղադրամներ ունեմ։' },
      { es: 'Pagamos con tarjeta bancaria.', arm: 'Բանկային քարտով ենք վճարում։' },
      { es: 'Tengo un billete de diez.', arm: 'Տասը եվրոյանոց թղթադրամ ունեմ։' },
      { es: '¿Cuánto cuesta todo, por favor?', arm: 'Ինչքա՞ն արժե ամեն ինչ, խնդրում եմ։' }
    ]
  },
  {
    id: 128,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Dar las gracias',
    titleArm: 'Շնորհակալություն հայտնել',
    situation: 'La comida está riquísima y quieres dar las gracias. ¿Qué dices?',
    situationArm: 'Ուտելիքը շատ համեղ էր և ուզում ես շնորհակալություն հայտնել։ Ի՞նչ ես ասում։',
    options: [
      { es: '¡Muchas gracias! Todo muy rico.', arm: 'Շատ շնորհակալություն, ամեն ինչ շատ համով էր։' },
      { es: '¡La comida estaba estupenda!', arm: 'Ուտելիքը հիանալի էր։' },
      { es: '¡Adiós y gracias por todo!', arm: 'Ցտեսություն և շնորհակալություն ամեն ինչի համար։' },
      { es: 'Volvemos otro día pronto.', arm: 'Շուտով մեկ ուրիշ օր էլ կգանք։' }
    ]
  },
  {
    id: 129,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Buscar el baño',
    titleArm: 'Գտնել զուգարանը',
    situation: 'Quieres saber dónde está el baño en el restaurante. ¿Qué preguntas?',
    situationArm: 'Ուզում ես իմանալ, թե որտեղ է ռեստորանի զուգարանը։ Ի՞նչ ես հարցնում։',
    options: [
      { es: '¿Dónde está el baño, por favor?', arm: 'Որտե՞ղ է զուգարանը, խնդրում եմ։' },
      { es: '¿El baño está al fondo?', arm: 'Զուգարանը խորքո՞ւմ է։' },
      { es: 'Voy a lavarme las manos.', arm: 'Գնում եմ ձեռքերս լվանալու։' },
      { es: 'Muchas gracias por indicarme.', arm: 'Շատ շնորհակալ եմ ցույց տալու համար։' }
    ]
  },
  {
    id: 130,
    level: 'A1',
    topic: 'restaurante',
    titleEs: 'Despedirse',
    titleArm: 'Հրաժեշտ տալ',
    situation: 'Es hora de volver a casa. ¿Cómo te despides del camarero?',
    situationArm: 'Տուն գնալու ժամանակն է։ Ինչպե՞ս ես հրաժեշտ տալիս մատուցողին։',
    options: [
      { es: '¡Adiós! Que tenga buen día.', arm: 'Ցտեսություն, բարի օր ձեզ։' },
      { es: '¡Hasta luego y muchas gracias!', arm: 'Մինչ հանդիպում և շատ շնորհակալություն։' },
      { es: '¡Muchas gracias por la comida!', arm: 'Շատ շնորհակալություն ուտելիքի համար։' },
      { es: '¡Hasta pronto!', arm: 'Մինչ շուտափույթ հանդիպում։' }
    ]
  }
];

export const RAZMIK_SUPERMARKET_CARDS: CardData[] = [
  {
    id: 131,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Comprar fruta',
    titleArm: 'Միրգ գնել',
    situation: 'Estás en el supermercado y quieres comprar fruta. ¿Qué fruta te gusta?',
    situationArm: 'Սուպերմարկետում ես և ուզում ես միրգ գնել։ Ո՞ր միրգն ես սիրում։',
    options: [
      { es: 'Me gustan las manzanas rojas.', arm: 'Կարմիր խնձորներն եմ սիրում։' },
      { es: 'Quiero plátanos amarillos y dulces.', arm: 'Դեղին ու քաղցր բանաններ եմ ուզում։' },
      { es: 'Me encantan las fresas frescas.', arm: 'Շատ եմ սիրում թարմ ելակ։' },
      { es: 'Compramos naranjas para zumo.', arm: 'Հյութի համար նարինջներ ենք գնում։' }
    ]
  },
  {
    id: 132,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Falta leche en casa',
    titleArm: 'Տանը կաթ չկա',
    situation: 'En casa no hay leche. ¿Quieres comprar una botella?',
    situationArm: 'Տանը կաթ չկա։ Ուզո՞ւմ ես մեկ շիշ գնել։',
    options: [
      { es: 'Sí, compramos dos botellas grandes.', arm: 'Այո, երկու մեծ շիշ գնենք։' },
      { es: 'Sí, quiero leche fresca entera.', arm: 'Այո, թարմ յուղոտ կաթ եմ ուզում։' },
      { es: 'Compramos leche con chocolate hoy.', arm: 'Այսօր շոկոլադով կաթ գնենք։' },
      { es: 'Una botella es suficiente, gracias.', arm: 'Մեկ շիշը բավական է, շնորհակալություն։' }
    ]
  },
  {
    id: 133,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Hacer una ensalada',
    titleArm: 'Աղցան պատրաստել',
    situation: 'Quieres hacer una ensalada. ¿Qué necesitas comprar?',
    situationArm: 'Ուզում ես աղցան պատրաստել։ Ի՞նչ է պետք գնել։',
    options: [
      { es: 'Necesito comprar tomates y lechuga.', arm: 'Լոլիկ և հազար է պետք գնել։' },
      { es: 'Compramos queso y aceite verde.', arm: 'Պանիր և ձիթապտղի յուղ ենք գնում։' },
      { es: 'Necesito pepinos frescos también.', arm: 'Թարմ վարունգներ էլ են պետք։' },
      { es: 'Todo está en la sección de verduras.', arm: 'Ամեն ինչ բանջարեղենի բաժնում է։' }
    ]
  },
  {
    id: 134,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Contar manzanas',
    titleArm: 'Հաշվել խնձորները',
    situation: 'Tienes dos manzanas y quieres una más. ¿Cuántas manzanas necesitas en total?',
    situationArm: 'Երկու խնձոր ունես և ուզում ես ևս մեկը։ Ընդհանուր քանի՞ խնձոր է պետք։',
    options: [
      { es: 'Necesito tres manzanas en total.', arm: 'Ընդհանուր երեք խնձոր է պետք։' },
      { es: 'Compramos cuatro manzanas grandes.', arm: 'Չորս մեծ խնձոր գնենք։' },
      { es: 'Quiero un kilo de manzanas.', arm: 'Մեկ կիլոգրամ խնձոր եմ ուզում։' },
      { es: 'Dos rojas y una verde.', arm: 'Երկու կարմիր և մեկ կանաչ։' }
    ]
  },
  {
    id: 135,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Llevar la compra',
    titleArm: 'Տանել գնումները',
    situation: 'Compras pan, leche y queso. ¿Necesitas una bolsa?',
    situationArm: 'Հաց, կաթ և պանիր ես գնում։ Տոպրա՞կ է պետք քեզ։',
    options: [
      { es: 'Sí, necesito una bolsa grande.', arm: 'Այո, ինձ մեծ տոպրակ է պետք։' },
      { es: 'No, llevo todo en mi mochila.', arm: 'Ոչ, ամեն ինչ տանում եմ ուսապարկումս։' },
      { es: 'Traigo mi propia bolsa de tela.', arm: 'Իմ սեփական կտորե պայուսակն ունեմ։' },
      { es: 'Dos bolsas de papel, por favor.', arm: 'Երկու թղթե տոպրակ, խնդրում եմ։' }
    ]
  },
  {
    id: 136,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Pan recién hecho',
    titleArm: 'Թարմ հաց',
    situation: 'Estás en la panadería y quieres pan. ¿Qué pan prefieres?',
    situationArm: 'Հացի բաժնում ես և հաց ես ուզում։ Ո՞ր հացն ես նախընտրում։',
    options: [
      { es: 'Prefiero una barra de pan blanco.', arm: 'Մեկ բատոն սպիտակ հաց եմ նախընտրում։' },
      { es: 'Quiero pan recién horneado y caliente.', arm: 'Նոր թխված ու տաք հաց եմ ուզում։' },
      { es: 'Compramos cuatro panecillos pequeños.', arm: 'Չորս փոքր բուլկի գնենք։' },
      { es: 'Este pan huele muy bien.', arm: 'Այս հացից շատ լավ հոտ է գալիս։' }
    ]
  },
  {
    id: 137,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Precio de las fresas',
    titleArm: 'Ելակի գինը',
    situation: 'Ves una caja de fresas dulces. ¿Cómo preguntas el precio?',
    situationArm: 'Քաղցր ելակի տուփ ես տեսնում։ Ինչպե՞ս ես հարցնում գինը։',
    options: [
      { es: '¿Cuánto cuesta esta caja de fresas?', arm: 'Ինչքա՞ն արժե ելակի այս տուփը։' },
      { es: '¿Qué precio tiene este producto?', arm: 'Ի՞նչ գին ունի այս ապրանքը։' },
      { es: '¿Cuesta dos euros la caja?', arm: 'Տուփն արժե՞ երկու եվրո։' },
      { es: 'Vamos a mirar la etiqueta blanca.', arm: 'Եկ նայենք սպիտակ պիտակին։' }
    ]
  },
  {
    id: 138,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Buscar los zumos',
    titleArm: 'Գտնել հյութերը',
    situation: 'No encuentras los zumos en el súper. ¿Qué le preguntas al dependiente?',
    situationArm: 'Սուպերմարկետում հյութերը չես գտնում։ Ի՞նչ ես հարցնում աշխատակցին։',
    options: [
      { es: 'Disculpe, ¿dónde están los zumos?', arm: 'Կներեք, որտե՞ղ են հյութերը։' },
      { es: '¿En qué pasillo está el agua?', arm: 'Ո՞ր միջանցքում է ջուրը։' },
      { es: 'Busco zumo de naranja natural.', arm: 'Թարմ նարնջի հյութ եմ փնտրում։' },
      { es: 'Muchas gracias por su ayuda.', arm: 'Շատ շնորհակալություն ձեր օգնության համար։' }
    ]
  },
  {
    id: 139,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Yogur de fresa',
    titleArm: 'Ելակի յոգուրտ',
    situation: 'Quieres comer yogur de postre. ¿Qué sabor compras?',
    situationArm: 'Աղանդերին յոգուրտ ես ուզում ուտել։ Ի՞նչ համով ես գնում։',
    options: [
      { es: 'Compro yogur de fresa dulce.', arm: 'Քաղցր ելակի յոգուրտ եմ գնում։' },
      { es: 'Quiero cuatro yogures de plátano.', arm: 'Չորս հատ բանանի յոգուրտ եմ ուզում։' },
      { es: 'Prefiero yogur de vainilla suave.', arm: 'Մեղմ վանիլի յոգուրտ եմ նախընտրում։' },
      { es: 'Compro yogur natural con azúcar.', arm: 'Շաքարով բնական յոգուրտ եմ գնում։' }
    ]
  },
  {
    id: 140,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'El carrito de la compra',
    titleArm: 'Գնումների սայլակը',
    situation: 'Hay dos carritos en la entrada. ¿Cuál coges tú?',
    situationArm: 'Մուտքի մոտ երկու սայլակ կա։ Ո՞րն ես վերցնում դու։',
    options: [
      { es: 'Cojo el carrito con ruedas.', arm: 'Անիվներով սայլակն եմ վերցնում։' },
      { es: 'Prefiero una cesta pequeña roja.', arm: 'Փոքր կարմիր զամբյուղ եմ նախընտրում։' },
      { es: 'Necesito una moneda de un euro.', arm: 'Մեկ եվրոյանոց մետաղադրամ է պետք։' },
      { es: 'Yo llevo la cesta de mano.', arm: 'Ես ձեռքի զամբյուղը կտանեմ։' }
    ]
  },
  {
    id: 141,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Queso para pizza',
    titleArm: 'Պանիր պիցցայի համար',
    situation: 'Quieres hacer una pizza en casa. ¿Qué queso compras?',
    situationArm: 'Տանը պիցցա ես ուզում պատրաստել։ Ի՞նչ պանիր ես գնում։',
    options: [
      { es: 'Compro queso especial para pizza.', arm: 'Պիցցայի հատուկ պանիր եմ գնում։' },
      { es: 'Compro un paquete de queso rallado.', arm: 'Քերած պանրի մեկ տուփ եմ գնում։' },
      { es: 'Quiero queso blanco y tierno.', arm: 'Սպիտակ և փափուկ պանիր եմ ուզում։' },
      { es: 'Necesito también salsa de tomate.', arm: 'Լոլիկի սոուս էլ է պետք։' }
    ]
  },
  {
    id: 142,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Galletas en la estantería',
    titleArm: 'Թխվածքաբլիթ դարակին',
    situation: 'Las galletas están en la estantería alta. ¿Qué haces tú?',
    situationArm: 'Թխվածքաբլիթները բարձր դարակին են։ Ի՞նչ ես անում դու։',
    options: [
      { es: 'Pido ayuda a un empleado.', arm: 'Օգնություն եմ խնդրում աշխատակցից։' },
      { es: 'Las cojo con cuidado despacio.', arm: 'Դանդաղ ու զգուշությամբ վերցնում եմ դրանք։' },
      { es: 'Quiero el paquete de chocolate.', arm: 'Շոկոլադե տուփն եմ ուզում։' },
      { es: 'Están al lado del café.', arm: 'Սուրճի կողքին են։' }
    ]
  },
  {
    id: 143,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Pesar los plátanos',
    titleArm: 'Կշռել բանանները',
    situation: 'Tienes que pesar los plátanos en la báscula. ¿Cómo lo haces?',
    situationArm: 'Պետք է կշռես բանանները կշեռքի վրա։ Ինչպե՞ս ես անում։',
    options: [
      { es: 'Pongo los plátanos en la báscula.', arm: 'Բանանները դնում եմ կշեռքի վրա։' },
      { es: 'Pulso el número del plátano.', arm: 'Սեղմում եմ բանանի համարը։' },
      { es: 'Pego la etiqueta en la bolsa.', arm: 'Պիտակը փակցնում եմ տոպրակին։' },
      { es: 'Pesa un kilo y medio.', arm: 'Մեկուկես կիլոգրամ է կշռում։' }
    ]
  },
  {
    id: 144,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Comprar huevos frescos',
    titleArm: 'Գնել թարմ հավկիթ',
    situation: 'Quieres comprar huevos frescos para el desayuno. ¿Cuántos compras?',
    situationArm: 'Նախաճաշի համար թարմ հավկիթ ես ուզում գնել։ Քանի՞ հատ ես գնում։',
    options: [
      { es: 'Compro una caja de seis huevos.', arm: 'Վեց ձվանոց մեկ տուփ եմ գնում։' },
      { es: 'Compro doce huevos grandes frescos.', arm: 'Տասներկու հատ թարմ մեծ ձու եմ գնում։' },
      { es: 'Son perfectos para hacer tortilla.', arm: 'Հիանալի են ձվածեղ պատրաստելու համար։' },
      { es: 'Los llevo con mucho cuidado.', arm: 'Շատ զգուշությամբ եմ տանում։' }
    ]
  },
  {
    id: 145,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Chocolate negro o con leche',
    titleArm: 'Սև, թե՞ կաթնային շոկոլադ',
    situation: 'Hay chocolate negro y chocolate con leche. ¿Cuál te gusta más?',
    situationArm: 'Սև շոկոլադ և կաթնային շոկոլադ կա։ Ո՞րն ես ավելի շատ սիրում։',
    options: [
      { es: 'Me gusta más el chocolate con leche.', arm: 'Կաթնային շոկոլադն ավելի շատ եմ սիրում։' },
      { es: 'Prefiero chocolate dulce con almendras.', arm: 'Նուշով քաղցր շոկոլադ եմ նախընտրում։' },
      { es: 'Quiero una tableta para merendar.', arm: 'Մեկ սալիկ եմ ուզում հետճաշիկի համար։' },
      { es: 'El chocolate negro es muy rico.', arm: 'Սև շոկոլադը շատ համեղ է։' }
    ]
  },
  {
    id: 146,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Tomates rojos',
    titleArm: 'Կարմիր լոլիկներ',
    situation: 'Ves tomates rojos muy bonitos. ¿Cuántos compras para la ensalada?',
    situationArm: 'Շատ գեղեցիկ կարմիր լոլիկներ ես տեսնում։ Քանի՞ հատ ես գնում աղցանի համար։',
    options: [
      { es: 'Compro cuatro tomates para ensalada.', arm: 'Չորս լոլիկ եմ գնում աղցանի համար։' },
      { es: 'Quiero medio kilo de tomates.', arm: 'Կես կիլոգրամ լոլիկ եմ ուզում։' },
      { es: 'Son muy frescos y maduros.', arm: 'Շատ թարմ և հասած են։' },
      { es: 'Los pongo en una bolsa limpia.', arm: 'Դրանք դնում եմ մաքուր տոպրակի մեջ։' }
    ]
  },
  {
    id: 147,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Helado en el congelador',
    titleArm: 'Պաղպաղակ սառնարանում',
    situation: 'Tienes calor y quieres un helado. ¿Qué helado compras?',
    situationArm: 'Շոգում ես և պաղպաղակ ես ուզում։ Ի՞նչ պաղպաղակ ես գնում։',
    options: [
      { es: 'Compro un helado de fresa.', arm: 'Ելակի պաղպաղակ եմ գնում։' },
      { es: 'Quiero una tarrina de chocolate.', arm: 'Շոկոլադե մեկ տուփ եմ ուզում։' },
      { es: 'Compro un helado de vainilla.', arm: 'Վանիլի պաղպաղակ եմ գնում։' },
      { es: 'Está en el congelador grande.', arm: 'Մեծ սառնարանում է։' }
    ]
  },
  {
    id: 148,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Pescado fresco',
    titleArm: 'Թարմ ձուկ',
    situation: 'Quieres cenar pescado con arroz. ¿Qué compras en la pescadería?',
    situationArm: 'Ընթրիքին ձուկ ես ուզում ուտել բրնձով։ Ի՞նչ ես գնում ձկան բաժնում։',
    options: [
      { es: 'Compro un filete de salmón fresco.', arm: 'Թարմ սաղմոնի մեկ ֆիլե եմ գնում։' },
      { es: 'Quiero dos doradas limpias, por favor.', arm: 'Երկու հատ մաքրած դորադա եմ ուզում, խնդրում եմ։' },
      { es: 'Compro pescado blanco del día.', arm: 'Օրվա թարմ սպիտակ ձուկ եմ գնում։' },
      { es: 'Pesa medio kilo en total.', arm: 'Ընդհանուր կես կիլոգրամ է կշռում։' }
    ]
  },
  {
    id: 149,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Comprar arroz',
    titleArm: 'Բրինձ գնել',
    situation: 'En casa no hay arroz para la cena. ¿Qué paquete compras?',
    situationArm: 'Տանը ընթրիքի համար բրինձ չկա։ Ի՞նչ տուփ ես գնում։',
    options: [
      { es: 'Compro un paquete de un kilo.', arm: 'Մեկ կիլոգրամանոց տուփ եմ գնում։' },
      { es: 'Quiero arroz blanco para cocinar.', arm: 'Եփելու համար սպիտակ բրինձ եմ ուզում։' },
      { es: 'Es perfecto para hacer pollo.', arm: 'Հավի հետ պատրաստելու համար հիանալի է։' },
      { es: 'Cuesta un euro y poco.', arm: 'Մեկ եվրո և մի քիչ արժե։' }
    ]
  },
  {
    id: 150,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Zumo de naranja o piña',
    titleArm: 'Նարնջի, թե՞ անանասի հյութ',
    situation: 'Ves zumos de naranja y zumos de piña. ¿Cuál prefieres beber?',
    situationArm: 'Նարնջի հյութեր և անանասի հյութեր ես տեսնում։ Ո՞րն ես նախընտրում խմել։',
    options: [
      { es: 'Prefiero beber zumo de naranja.', arm: 'Նախընտրում եմ նարնջի հյութ խմել։' },
      { es: 'Quiero probar el zumo de piña.', arm: 'Ուզում եմ անանասի հյութը փորձել։' },
      { es: 'Compro una botella grande familiar.', arm: 'Մեկ մեծ ընտանեկան շիշ եմ գնում։' },
      { es: 'Está muy frío y dulce.', arm: 'Շատ սառն է և քաղցր։' }
    ]
  },
  {
    id: 151,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'La cesta pesada',
    titleArm: 'Ծանր զամբյուղը',
    situation: 'La cesta de la compra pesa mucho hoy. ¿Qué haces tú?',
    situationArm: 'Գնումների զամբյուղն այսօր շատ ծանր է։ Ի՞նչ ես անում դու։',
    options: [
      { es: 'Llevo la cesta con las dos manos.', arm: 'Զամբյուղը երկու ձեռքով եմ տանում։' },
      { es: 'Pido ayuda a mi amigo.', arm: 'Ընկերոջիցս օգնություն եմ խնդրում։' },
      { es: 'Cojo un carrito con ruedas.', arm: 'Անիվներով սայլակ եմ վերցնում։' },
      { es: 'Vamos a pagar ya a la caja.', arm: 'Եկ արդեն գնանք դրամարկղ վճարելու։' }
    ]
  },
  {
    id: 152,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Galletas para el colegio',
    titleArm: 'Թխվածքաբլիթ դպրոցի համար',
    situation: 'Quieres galletas para merendar en el colegio. ¿Cuáles compras?',
    situationArm: 'Դպրոցում հետճաշիկի համար թխվածքաբլիթներ ես ուզում։ Որո՞նք ես գնում։',
    options: [
      { es: 'Compro galletas redondas con chocolate.', arm: 'Շոկոլադով կլոր թխվածքաբլիթներ եմ գնում։' },
      { es: 'Quiero galletas pequeñas rellenas de crema.', arm: 'Կրեմով լցոնված փոքր թխվածքաբլիթներ եմ ուզում։' },
      { es: 'Compro dos paquetes para compartir.', arm: 'Երկու տուփ եմ գնում կիսելու համար։' },
      { es: 'Son muy crujientes y dulces.', arm: 'Շատ խրթխրթան են և քաղցր։' }
    ]
  },
  {
    id: 153,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Mantequilla para el pan',
    titleArm: 'Կարագ հացի համար',
    situation: 'Necesitas mantequilla para el pan de la mañana. ¿Dónde la buscas?',
    situationArm: 'Առավոտյան հացի համար կարագ է պետք քեզ։ Որտե՞ղ ես փնտրում։',
    options: [
      { es: 'La busco en la nevera de lácteos.', arm: 'Կաթնամթերքի սառնարանում եմ փնտրում։' },
      { es: 'Está al lado de los yogures.', arm: 'Յոգուրտների կողքին է։' },
      { es: 'Compro un paquete de mantequilla dulce.', arm: 'Քաղցր կարագի մեկ տուփ եմ գնում։' },
      { es: 'La pongo en la cesta con cuidado.', arm: 'Զգուշությամբ դնում եմ զամբյուղի մեջ։' }
    ]
  },
  {
    id: 154,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Patatas para freír',
    titleArm: 'Կարտոֆիլ տապակելու համար',
    situation: 'Quieres comprar patatas para freír. ¿Cuántas patatas compras?',
    situationArm: 'Տապակելու համար կարտոֆիլ ես ուզում գնել։ Քանի՞ կարտոֆիլ ես գնում։',
    options: [
      { es: 'Compro una bolsa de dos kilos.', arm: 'Երկու կիլոգրամանոց մեկ տոպրակ եմ գնում։' },
      { es: 'Compro cinco patatas grandes amarillas.', arm: 'Հինգ մեծ դեղին կարտոֆիլ եմ գնում։' },
      { es: 'Son ideales para hacer patatas fritas.', arm: 'Իդեալական են ֆրի պատրաստելու համար։' },
      { es: 'Vamos a pesarlas en la báscula.', arm: 'Եկ կշռենք դրանք կշեռքի վրա։' }
    ]
  },
  {
    id: 155,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Agua mineral',
    titleArm: 'Հանքային ջուր',
    situation: 'Hay botellas de agua con gas y sin gas. ¿Cuál compras tú?',
    situationArm: 'Գազավորված և առանց գազի ջրի շշեր կան։ Ո՞րն ես գնում դու։',
    options: [
      { es: 'Compro agua natural sin gas.', arm: 'Առանց գազի բնական ջուր եմ գնում։' },
      { es: 'Compro un pack de seis botellitas.', arm: 'Վեց փոքր շշանոց փաթեթ եմ գնում։' },
      { es: 'Prefiero una garrafa de cinco litros.', arm: 'Հինգ լիտրանոց տարա եմ նախընտրում։' },
      { es: 'El agua es muy fresca y limpia.', arm: 'Ջուրը շատ թարմ է և մաքուր։' }
    ]
  },
  {
    id: 156,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Ir a la caja',
    titleArm: 'Գնալ դրամարկղ',
    situation: 'Ya tienes todos los productos en la cesta. ¿A dónde vas ahora?',
    situationArm: 'Արդեն բոլոր ապրանքներն ունես զամբյուղում։ Ո՞ւր ես գնում հիմա։',
    options: [
      { es: 'Voy a la caja a pagar.', arm: 'Գնում եմ դրամարկղ՝ վճարելու։' },
      { es: 'Voy a buscar una bolsa grande.', arm: 'Գնում եմ մեծ տոպրակ գտնելու։' },
      { es: 'Miro si falta algo en la lista.', arm: 'Նայում եմ՝ արդյոք որևէ բան պակասում է ցուցակից։' },
      { es: 'Hago la cola tranquilamente.', arm: 'Հանգիստ կանգնում եմ հերթի մեջ։' }
    ]
  },
  {
    id: 157,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Guardar la compra',
    titleArm: 'Դասավորել գնումները',
    situation: 'El cajero pasa los productos. ¿Dónde los pones tú?',
    situationArm: 'Գանձապահն անցկացնում է ապրանքները։ Դու որտե՞ղ ես դնում դրանք։',
    options: [
      { es: 'Los pongo dentro de mi bolsa.', arm: 'Դրանք դնում եմ տոպրակիս մեջ։' },
      { es: 'Los guardo en la mochila grande.', arm: 'Դրանք դասավորում եմ մեծ ուսապարկում։' },
      { es: 'Pongo primero las cosas pesadas.', arm: 'Նախ ծանր իրերն եմ դնում։' },
      { es: 'Ayudo a guardar todo rápido.', arm: 'Օգնում եմ ամեն ինչ արագ դասավորել։' }
    ]
  },
  {
    id: 158,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Pagar en caja',
    titleArm: 'Վճարել դրամարկղում',
    situation: 'El cajero te dice: “Son doce euros”. ¿Cómo pagas tú?',
    situationArm: 'Գանձապահն ասում է քեզ․ «Տասներկու եվրո է»։ Ինչպե՞ս ես վճարում։',
    options: [
      { es: 'Pago con un billete de veinte.', arm: 'Քսան եվրոյանոց թղթադրամով եմ վճարում։' },
      { es: 'Pago con mi tarjeta bancaria.', arm: 'Բանկային քարտովս եմ վճարում։' },
      { es: 'Tengo el dinero exacto en monedas.', arm: 'Մետաղադրամներով ճիշտ գումարն ունեմ։' },
      { es: 'Espero el cambio y el ticket.', arm: 'Սպասում եմ մանրին և չեկին։' }
    ]
  },
  {
    id: 159,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'El ticket de compra',
    titleArm: 'Գնման չեկը',
    situation: 'El cajero te entrega el ticket de compra. ¿Qué dices?',
    situationArm: 'Գանձապահը տալիս է քեզ գնման չեկը։ Ի՞նչ ես ասում։',
    options: [
      { es: '¡Muchas gracias! Que tenga buen día.', arm: 'Շատ շնորհակալություն, բարի օր ձեզ։' },
      { es: 'Guardo el ticket en el bolsillo.', arm: 'Չեկը դնում եմ գրպանս։' },
      { es: '¡Hasta luego y gracias!', arm: 'Մինչ հանդիպում և շնորհակալություն։' },
      { es: 'Todo ha sido muy rápido.', arm: 'Ամեն ինչ շատ արագ ստացվեց։' }
    ]
  },
  {
    id: 160,
    level: 'A1',
    topic: 'supermercado',
    titleEs: 'Volver a casa',
    titleArm: 'Վերադառնալ տուն',
    situation: 'Sales del supermercado con tu compra. ¿Cómo ayudas a llevar las cosas?',
    situationArm: 'Գնումներով դուրս ես գալիս սուպերմարկետից։ Ինչպե՞ս ես օգնում իրերը տանել։',
    options: [
      { es: 'Llevo la bolsa del pan y frutas.', arm: 'Տանում եմ հացի և մրգերի տոպրակը։' },
      { es: 'Llevo mi mochila con la comida.', arm: 'Ուտելիքով իմ ուսապարկն եմ տանում։' },
      { es: 'Ayudo a cargar la compra al coche.', arm: 'Օգնում եմ գնումները մեքենա դնել։' },
      { es: '¡Ya vamos contentos a casa!', arm: 'Արդեն ուրախ-ուրախ գնում ենք տուն։' }
    ]
  }
];

export const RAZMIK_ALL_CARDS: CardData[] = [...RAZMIK_RESTAURANT_CARDS, ...RAZMIK_SUPERMARKET_CARDS];

// Backwards compatibility exports
export const RESTAURANT_CARDS = GAYANE_RESTAURANT_CARDS;
export const SUPERMARKET_CARDS = GAYANE_SUPERMARKET_CARDS;
export const ALL_CARDS = GAYANE_ALL_CARDS;

// Helper to get cards according to player and topic
export function getDeckForPlayer(player: Player, topic: Topic): CardData[] {
  if (player === 'Gayane') {
    if (topic === 'restaurante') return GAYANE_RESTAURANT_CARDS;
    if (topic === 'supermercado') return GAYANE_SUPERMARKET_CARDS;
    return GAYANE_ALL_CARDS;
  } else {
    if (topic === 'restaurante') return RAZMIK_RESTAURANT_CARDS;
    if (topic === 'supermercado') return RAZMIK_SUPERMARKET_CARDS;
    return RAZMIK_ALL_CARDS;
  }
}
