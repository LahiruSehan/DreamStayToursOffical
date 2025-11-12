// =================================================================================
// DREAMSTAY TOURS - CONFIGURATION FILE
// =================================================================================
// This is the central place to edit all the content for the DreamStay Tours website.
// Simply change the values here, save the file, and your website will be updated.
// No need to touch app.js, styles.css, or index.html for content changes.
// =================================================================================

window.config = {

    // --- GENERAL SETTINGS ---
    WHATSAPP_NUMBER: "817053729297",

    // --- CURRENCY SETTINGS ---
    CURRENCIES: {
        'USD': { rate: 1, symbol: '$' },
        'LKR': { rate: 300, symbol: 'Rs' },
        'JPY': { rate: 157, symbol: '¥' },
        'INR': { rate: 83, symbol: '₹' },
        'THB': { rate: 37, symbol: '฿' },
        'MYR': { rate: 4.7, symbol: 'RM' }
    },

    // --- DASHBOARD DETAILS ---
    DETAILS_STATS: [
        { value: 42, label_en: "Tours Planned", label_si: "සැලසුම් කළ චාරිකා", label_ja: "企画されたツアー" },
        { value: 1200, label_en: "Happy Customers", label_si: "සතුටු පාරිභෝගිකයින්", label_ja: "満足されたお客様" },
        { value: 350, label_en: "Families Hosted", label_si: "සත්කාරක පවුල්", label_ja: "ホストした家族" },
        { value: 5000, label_en: "Nights Booked", label_si: "වෙන් කළ රාත්‍රී", label_ja: "予約された宿泊数" }
    ],

    SPONSORS: [
        { name: "Sponsor 1", logoUrl: "https://logoipsum.com/289.svg", url: "#" },
        { name: "Sponsor 2", logoUrl: "https://logoipsum.com/297.svg", url: "#" },
        { name: "Sponsor 3", logoUrl: "https://logoipsum.com/298.svg", url: "#" },
        { name: "Sponsor 4", logoUrl: "https://logoipsum.com/327.svg", url: "#" },
        { name: "Sponsor 5", logoUrl: "https://logoipsum.com/330.svg", url: "#" }
    ],

    // --- TOUR PACKAGES & LOCATIONS ---
    PACKAGES: [
      // Sri Lanka (Top 10 Locations)
      { id:"sl-loc-001", country:"Sri Lanka", city:"Sigiriya", rating:4.9, title_en:"Sigiriya Rock Fortress", short_desc_en:"Climb the ancient rock fortress for breathtaking views.", desc_en:"An ancient rock fortress and palace built by King Kashyapa. The climb reveals stunning frescoes and panoramic views of the surrounding jungle.", title_si:"සීගිරිය පර්වත බලකොටුව", short_desc_si:"විශ්මයජනක දසුන් සඳහා පුරාණ පර්වත බලකොටුව තරණය කරන්න.", desc_si:"කාශ්‍යප රජු විසින් ඉදිකරන ලද පුරාණ පර්වත බලකොටුවක් සහ මාලිගාවක්. මෙම නැගීමෙන් විශ්මයජනක බිතුසිතුවම් සහ අවට කැලෑවේ පරිදර්ශක දසුන් හෙළිවේ.", title_ja:"シーギリヤロック要塞", short_desc_ja:"息をのむような景色を望む古代の岩の要塞に登ります。", desc_ja:"カシャパ王によって建てられた古代の岩の要塞と宮殿。登ると、見事なフレスコ画と周囲のジャングルのパノラマビューが現れます。" },
      { id:"sl-loc-002", country:"Sri Lanka", city:"Ella", rating:4.8, title_en:"Nine Arch Bridge", short_desc_en:"Iconic colonial-era railway bridge amidst lush greenery.", desc_en:"A marvel of colonial engineering, this picturesque bridge is a must-see, especially when the iconic blue train passes over it.", title_si:"නව ආරුක්කු පාලම", short_desc_si:"සශ්‍රීක හරිත පරිසරය මැද පිහිටි යටත් විජිත සමයේ දුම්රිය පාලම.", desc_si:"යටත් විජිත ඉංජිනේරු ශිල්පයේ ආශ්චර්යයක් වන මෙම මනරම් පාලම, විශේෂයෙන්ම සංකේතාත්මක නිල් දුම්රිය එය හරහා ගමන් කරන විට නැරඹිය යුතුම ස්ථානයකි.", title_ja:"ナインアーチブリッジ", short_desc_ja:"緑豊かな中に象徴的な植民地時代の鉄道橋。", desc_ja:"植民地時代の工学の驚異であるこの絵のように美しい橋は、特に象徴的な青い列車が通過するときは必見です。" },
      { id:"sl-loc-003", country:"Sri Lanka", city:"Kandy", rating:4.7, title_en:"Temple of the Sacred Tooth Relic", short_desc_en:"The most sacred Buddhist temple in Sri Lanka.", desc_en:"Located in the royal palace complex of the former Kingdom of Kandy, it houses the relic of the tooth of the Buddha.", title_si:"ශ්‍රී දළදා මාලිගාව", short_desc_si:"ශ්‍රී ලංකාවේ පූජනීයම බෞද්ධ විහාරය.", desc_si:"හිටපු මහනුවර රාජධානියේ රාජකීය මාලිගා සංකීර්ණයේ පිහිටා ඇති මෙහි බුදුන්ගේ දන්ත ධාතූන් වහන්සේ තැන්පත් කර ඇත.", title_ja:"仏歯寺", short_desc_ja:"スリランカで最も神聖な仏教寺院。", desc_ja:"かつてのキャンディ王国の王宮複合施設内にあり、仏陀の歯の遺物を収容しています。" },
      { id:"sl-loc-004", country:"Sri Lanka", city:"Yala", rating:4.9, title_en:"Yala National Park", short_desc_en:"Go on a safari to spot leopards and elephants.", desc_en:"Famous for having one of the highest densities of leopards in the world, Yala offers an incredible wildlife safari experience.", title_si:"යාල ජාතික වනෝද්‍යානය", short_desc_si:"දිවියන් සහ අලි ඇතුන් නැරඹීමට සෆාරියක් යන්න.", desc_si:"ලෝකයේ ඉහළම දිවි ඝනත්වයකින් එකක් සඳහා ප්‍රසිද්ධ යාල, ඇදහිය නොහැකි වනජීවී සෆාරි අත්දැකීමක් ලබා දෙයි.", title_ja:"ヤラ国立公園", short_desc_ja:"ヒョウやゾウを見つけるためにサファリに行きます。", desc_ja:"世界で最もヒョウの密度が高い場所の一つとして有名で、ヤラは信じられないほどの野生生物サファリ体験を提供します。" },
      { id:"sl-loc-005", country:"Sri Lanka", city:"Galle", rating:4.8, title_en:"Galle Fort", short_desc_en:"Explore the historic UNESCO World Heritage Site.", desc_en:"A beautiful blend of European architecture and South Asian traditions, with charming streets, cafes, and boutiques.", title_si:"ගාලු කොටුව", short_desc_si:"ඓතිහාසික යුනෙස්කෝ ලෝක උරුම අඩවිය ගවේෂණය කරන්න.", desc_si:"ආකර්ශනීය වීදි, කැෆේ සහ බුටික් සහිත යුරෝපීය ගෘහ නිර්මාණ ශිල්පය සහ දකුණු ආසියානු සම්ප්‍රදායන්ගේ සුන්දර මිශ්‍රණයකි.", title_ja:"ゴールフォート", short_desc_ja:"歴史的なユネスコ世界遺産を探検してください。", desc_ja:"ヨーロッパの建築と南アジアの伝統が美しく融合した、魅力的な通り、カフェ、ブティックがあります。" },
      { id:"sl-loc-006", country:"Sri Lanka", city:"Mirissa", rating:4.7, title_en:"Whale Watching Tour", short_desc_en:"See majestic blue whales and playful dolphins.", desc_en:"Mirissa is one of the best places in the world to see Blue Whales, Sperm Whales, and Spinner Dolphins in their natural habitat.", title_si:"තල්මසුන් නැරඹීමේ චාරිකාව", short_desc_si:"අලංකාර නිල් තල්මසුන් සහ සෙල්ලක්කාර ඩොල්ෆින් බලන්න.", desc_si:"නිල් තල්මසුන්, ශුක්‍රාණු තල්මසුන් සහ දඟර ඩොල්ෆින් ඔවුන්ගේ ස්වභාවික වාසභූමියේ දැකීමට ලෝකයේ හොඳම ස්ථානවලින් එකකි මිරිස්ස.", title_ja:"ホエールウォッチングツアー", short_desc_ja:"雄大なシロナガスクジラと遊び心のあるイルカをご覧ください。", desc_ja:"ミリッサは、シロナガスクジラ、マッコウクジラ、スピナードルフィンを自然の生息地で見るのに世界で最高の場所の一つです。" },
      { id:"sl-loc-007", country:"Sri Lanka", city:"Dambulla", rating:4.7, title_en:"Dambulla Cave Temple", short_desc_en:"Ancient cave complex with stunning Buddhist murals.", desc_en:"A UNESCO World Heritage site, this is the largest and best-preserved cave temple complex in Sri Lanka, filled with statues and paintings.", title_si:"දඹුල්ල ලෙන් විහාරය", short_desc_si:"විශ්මයජනක බෞද්ධ බිතුසිතුවම් සහිත පුරාණ ලෙන් සංකීර්ණය.", desc_si:"යුනෙස්කෝ ලෝක උරුම අඩවියක් වන මෙය ශ්‍රී ලංකාවේ විශාලතම සහ හොඳම සංරක්‍ෂිත ලෙන් විහාර සංකීර්ණය වන අතර එය පිළිම හා සිතුවම් වලින් පිරී ඇත.", title_ja:"ダンブッラ石窟寺院", short_desc_ja:"見事な仏教壁画がある古代の洞窟複合施設。", desc_ja:"ユネスコ世界遺産であるこれは、スリランカで最大かつ最も保存状態の良い洞窟寺院複合施設で、彫像や絵画で満たされています。" },
      { id:"sl-loc-008", country:"Sri Lanka", city:"Anuradhapura", rating:4.8, title_en:"Sacred City of Anuradhapura", short_desc_en:"Discover the ancient capital and its sacred stupas.", desc_en:"A cradle of Sri Lankan Buddhism, this ancient city is home to magnificent stupas, monasteries, and the sacred Bodhi tree.", title_si:"අනුරාධපුර පූජා නගරය", short_desc_si:"පුරාණ අගනුවර සහ එහි පූජනීය ස්තූප සොයා ගන්න.", desc_si:"ශ්‍රී ලාංකීය බුදුදහමේ තොටිල්ලක් වන මෙම පුරාණ නගරය අලංකාර ස්තූප, ආරාම සහ පූජනීය බෝධීන් වහන්සේට නිවහන වේ.", title_ja:"聖地アヌラーダプラ", short_desc_ja:"古代の首都とその神聖な仏舎利塔を発見してください。", desc_ja:"スリランカ仏教の発祥地であるこの古代都市は、壮大な仏舎利塔、僧院、そして神聖な菩提樹の本拠地です。" },
      { id:"sl-loc-009", country:"Sri Lanka", city:"Polonnaruwa", rating:4.8, title_en:"Ancient City of Polonnaruwa", short_desc_en:"Explore the well-preserved ruins of a medieval capital.", desc_en:"The second most ancient of Sri Lanka's kingdoms, Polonnaruwa's archaeological park is a treasure trove of history.", title_si:"පොළොන්නරුව පුරාණ නගරය", short_desc_si:"මධ්‍යකාලීන අගනුවරක හොඳින් සංරක්ෂණය කර ඇති නටබුන් ගවේෂණය කරන්න.", desc_si:"ශ්‍රී ලංකාවේ රාජධානිවලින් දෙවැනියට පැරණිතම පොළොන්නරුවේ පුරාවිද්‍යා උද්‍යානය ඉතිහාසයේ නිධානයකි.", title_ja:"ポロンナルワの古代都市", short_desc_ja:"中世の首都の保存状態の良い遺跡を探検してください。", desc_ja:"スリランカの王国で2番目に古いポロンナルワの考古学公園は、歴史の宝庫です。" },
      { id:"sl-loc-010", country:"Sri Lanka", city:"Udawalawe", rating:4.8, title_en:"Udawalawe National Park", short_desc_en:"Guaranteed elephant sightings on a jeep safari.", desc_en:"This park is renowned for its large elephant population, making it one of the best places in the world to see Asian elephants in the wild.", title_si:"උඩවලව ජාතික වනෝද්‍යානය", short_desc_si:"ජීප් සෆාරියකදී අලි ඇතුන් දැකීම සහතිකයි.", desc_si:"මෙම උද්‍යානය විශාල අලි ගහනය සඳහා ප්‍රසිද්ධය, එය වන සතුන් තුළ ආසියානු අලි ඇතුන් දැකීමට ලෝකයේ හොඳම ස්ථානවලින් එකක් බවට පත් කරයි.", title_ja:"ウダワラウェ国立公園", short_desc_ja:"ジープサファリで象の目撃が保証されています。", desc_ja:"この公園は大きな象の個体数で有名で、野生のアジアゾウを見るのに世界で最高の場所の一つとなっています。" },
      { id:"sl-coming-soon", country:"Sri Lanka", comingSoon: true, title_en:"More Locations Coming Soon!", title_si:"තවත් ස්ථාන ટૂંક સમયలో!", title_ja:"近日公開予定のその他の場所" },
      
      // Japan (Top 10 Locations)
      { id:"jp-loc-001", country:"Japan", city:"Kyoto", rating:4.9, title_en:"Fushimi Inari Shrine", short_desc_en:"Walk through thousands of iconic red torii gates.", desc_en:"Famous for its thousands of vibrant red torii gates that wind through the wooded forest of Mount Inari.", title_si:"ෆුෂිමි ඉනාරි සිද්ධස්ථානය", short_desc_si:"සංකේතාත්මක රතු ටෝරි ගේට්ටු දහස් ගණනක් හරහා ඇවිදින්න.", desc_si:"ඉනාරි කන්දේ වනාන්තරය හරහා දිවෙන විචිත්‍රවත් රතු ටෝරි ගේට්ටු දහස් ගණනක් සඳහා ප්‍රසිද්ධය.", title_ja:"伏見稲荷大社", short_desc_ja:"何千もの象徴的な赤い鳥居をくぐり抜けます。", desc_ja:"稲荷山の森を曲がりくねって続く何千もの鮮やかな赤い鳥居で有名です。" },
      { id:"jp-loc-002", country:"Japan", city:"Kyoto", rating:4.8, title_en:"Arashiyama Bamboo Grove", short_desc_en:"A serene and otherworldly walk through towering bamboo.", desc_en:"One of Kyoto's most iconic sights, the towering bamboo stalks create a mesmerizing and peaceful atmosphere.", title_si:"අරෂියාමා උණ වත්ත", short_desc_si:"උස් උණ බම්බු හරහා සන්සුන් හා වෙනත් ලෝකයක ඇවිදීම.", desc_si:"කියෝතෝවේ වඩාත් සංකේතාත්මක දර්ශනවලින් එකක් වන උස් උණ බම්බු කඳන් සිත් ඇදගන්නාසුළු හා සාමකාමී වාතාවරණයක් නිර්මාණය කරයි.", title_ja:"嵐山竹林", short_desc_ja:"そびえ立つ竹林を通り抜ける、穏やかで別世界のような散歩。", desc_ja:"京都で最も象徴的な光景の一つである、そびえ立つ竹林は、魅惑的で平和な雰囲気を醸し出しています。" },
      { id:"jp-loc-003", country:"Japan", city:"Tokyo", rating:4.7, title_en:"Shibuya Crossing", short_desc_en:"Experience the world's busiest and most famous intersection.", desc_en:"A sensory overload in the best way possible, this massive scramble crossing is a symbol of modern Tokyo's energy.", title_si:"ෂිබුයා හරස් මාර්ගය", short_desc_si:"ලෝකයේ වඩාත්ම කාර්යබහුල සහ ප්‍රසිද්ධ මංසන්ධිය අත්විඳින්න.", desc_si:"හැකි හොඳම ආකාරයෙන් සංවේදී අධි බරක් වන මෙම දැවැන්ත පොරබැදීමේ හරස් මාර්ගය නූතන ටෝකියෝවේ ශක්තියේ සංකේතයකි.", title_ja:"渋谷交差点", short_desc_ja:"世界で最も混雑し、最も有名な交差点を体験してください。", desc_ja:"可能な限り最高の方法での感覚的な過負荷、この巨大なスクランブル交差点は現代東京のエネルギーの象徴です。" },
      { id:"jp-loc-004", country:"Japan", city:"Hakone", rating:4.9, title_en:"Mount Fuji Views from Hakone", short_desc_en:"Stunning views of the iconic volcano from Lake Ashi.", desc_en:"Hakone offers some of the most beautiful and accessible views of Mt. Fuji, often reflected in the waters of Lake Ashi.", title_si:"හකෝනේ සිට ෆුජි කන්දේ දසුන්", short_desc_si:"අෂි විලෙන් සංකේතාත්මක ගිනි කන්දේ විශ්මයජනක දසුන්.", desc_si:"හකෝනේ ෆුජි කන්දේ සුන්දරම සහ ප්‍රවේශ විය හැකි දසුන් කිහිපයක් ලබා දෙයි, බොහෝ විට අෂි විලේ ජලයේ පිළිබිඹු වේ.", title_ja:"箱根からの富士山の眺め", short_desc_ja:"芦ノ湖からの象徴的な火山の素晴らしい景色。", desc_ja:"箱根は、芦ノ湖の水面に映る富士山の最も美しくアクセスしやすい景色を提供します。" },
      { id:"jp-loc-005", country:"Japan", city:"Hiroshima", rating:4.9, title_en:"Hiroshima Peace Memorial Park", short_desc_en:"A moving and essential historical site.", desc_en:"A poignant reminder of the past and a symbol of peace, containing the A-Bomb Dome and various memorials.", title_si:"හිරෝෂිමා සාම අනුสรණ උද්‍යානය", short_desc_si:"සංවේදී හා අත්‍යවශ්‍ය ඓතිහාසික ස්ථානයක්.", desc_si:"A-බෝම්බ ගෝලාකාරය සහ විවිධ ස්මාරක අඩංගු, අතීතය පිළිබඳ සංවේදී සිහිගැන්වීමක් සහ සාමයේ සංකේතයකි.", title_ja:"広島平和記念公園", short_desc_ja:"感動的で重要な史跡。", desc_ja:"原爆ドームやさまざまな記念碑があり、過去を痛切に思い起こさせ、平和の象徴となっています。" },
      { id:"jp-loc-006", country:"Japan", city:"Nara", rating:4.7, title_en:"Nara Park", short_desc_en:"Feed and interact with friendly, bowing deer.", desc_en:"Home to hundreds of freely roaming deer considered to be messengers of the gods. They are surprisingly tame and will bow for a cracker.", title_si:"නාරා උද්‍යානය", short_desc_si:"මිත්‍රශීලී, හිස නමන මුවන් සමඟ පෝෂණය කර අන්තර් ක්‍රියා කරන්න.", desc_si:"දෙවියන්ගේ දූතයන් ලෙස සැලකෙන නිදහසේ සැරිසරන මුවන් සිය ගණනකට නිවහන වේ. ඔවුන් පුදුම සහගත ලෙස හීලෑ වන අතර රතිඤ්ඤා සඳහා හිස නමනු ඇත.", title_ja:"奈良公園", short_desc_ja:"フレンドリーでお辞儀をする鹿に餌をやったり、触れ合ったりします。", desc_ja:"神の使いとされる何百もの自由に歩き回る鹿の故郷。驚くほど飼いならされており、クラッカーのためにお辞儀をします。" },
      { id:"jp-loc-007", country:"Japan", city:"Osaka", rating:4.8, title_en:"Dotonbori District", short_desc_en:"The vibrant, neon-lit heart of Osaka's nightlife.", desc_en:"Famous for its extravagant signage, including the Glico Running Man, and an endless array of amazing restaurants and street food stalls.", title_si:"ඩොටොන්බෝරි දිස්ත්‍රික්කය", short_desc_si:"ඔසාකා හි රාත්‍රී ජීවිතයේ විචිත්‍රවත්, නියොන් ආලෝකමත් හදවත.", desc_si:"ග්ලිකෝ රണ്ണിං මෑන් ඇතුළු එහි අධික සංඥා සහ විස්මිත අවන්හල් සහ වීදි ආහාර කුටිවල නිමක් නැති පෙළක් සඳහා ප්‍රසිද්ධය.", title_ja:"道頓堀地区", short_desc_ja:"大阪のナイトライフの中心である、活気に満ちたネオン街。", desc_ja:"グリコのランニングマンを含む豪華な看板や、数え切れないほどの素晴らしいレストランや屋台で有名です。" },
      { id:"jp-loc-008", country:"Japan", city:"Kyoto", rating:4.8, title_en:"Kinkaku-ji (Golden Pavilion)", short_desc_en:"A stunning Zen temple completely covered in gold leaf.", desc_en:"A breathtaking sight, this three-story temple's top two floors are completely covered in gold leaf, beautifully reflected in the surrounding pond.", title_si:"කින්කාකු-ජි (රන් මණ්ඩපය)", short_desc_si:"සම්පූර්ණයෙන්ම රන් පත්‍රවලින් ආවරණය වූ විශ්මයජනක සෙන් විහාරයක්.", desc_si:"හුස්ම හිරවන දසුනක්, මෙම තෙමහල් විහාරස්ථානයේ ඉහළ මාල දෙක සම්පූර්ණයෙන්ම රන් පත්‍රවලින් ආවරණය වී ඇති අතර, එය අවට පොකුණේ අලංකාර ලෙස පිළිබිඹු වේ.", title_ja:"金閣寺", short_desc_ja:"金箔で完全に覆われた見事な禅寺。", desc_ja:"息をのむような光景であるこの3階建ての寺院の上2階は、完全に金箔で覆われており、周囲の池に美しく映り込んでいます。" },
      { id:"jp-loc-009", country:"Japan", city:"Miyajima", rating:4.9, title_en:"Itsukushima Shrine's 'Floating' Torii Gate", short_desc_en:"Iconic gate that appears to float at high tide.", desc_en:"Located on the sacred island of Miyajima, this iconic Shinto shrine and its great torii gate are a must-see, especially at high tide.", title_si:"Itsukushima සිද්ධස්ථානයේ 'පාවෙන' Torii ගේට්ටුව", short_desc_si:"උදම් රළේදී පාවෙන බව පෙනෙන සංකේතාත්මක ගේට්ටුව.", desc_si:"පූජනීය මියාජිමා දූපතේ පිහිටා ඇති මෙම සංකේතාත්මක ෂින්ටෝ සිද්ධස්ථානය සහ එහි මහා ටෝරි ගේට්ටුව, විශේෂයෙන් උදම් රළේදී නැරඹිය යුතුම ස්ථානයකි.", title_ja:"厳島神社の「浮遊」鳥居", short_desc_ja:"満潮時に浮いているように見える象徴的な門。", desc_ja:"神聖な宮島にあるこの象徴的な神社とその大鳥居は、特に満潮時には必見です。" },
      { id:"jp-loc-010", country:"Japan", city:"Nagano", rating:4.8, title_en:"Jigokudani Monkey Park", short_desc_en:"Watch snow monkeys bathe in natural hot springs.", desc_en:"Famous for its large population of wild Snow Monkeys that go to the valley during the winter, forging in the forests while taking a dip in the onsen.", title_si:"ජිගොකුදානි වඳුරු උද්‍යානය", short_desc_si:"හිම වඳුරන් ස්වභාවික උණු දිය උල්පත්වල ස්නානය කරන අයුරු නරඹන්න.", desc_si:"ශීත ඍතුවේදී නිම්නයට යන වල් හිම වඳුරන්ගේ විශාල ගහනය සඳහා ප්‍රසිද්ධ, ඔන්සෙන්හි ගිලී සිටින අතරතුර වනාන්තරවල ආහාර සොයයි.", title_ja:"地獄谷野猿公苑", short_desc_ja:"野生のサルが天然温泉に入るのを見ます。", desc_ja:"冬に谷にやってくる野生のニホンザルの大群で有名で、温泉に浸かりながら森で採餌します。" },
      { id:"jp-coming-soon", country:"Japan", comingSoon: true, title_en:"More Locations Coming Soon!", title_si:"තවත් ස්ථාන ટૂંક સમયలో!", title_ja:"近日公開予定のその他の場所" },

      // Thailand (All 25 Locations)
      {"id":"th-loc-001", "country":"Thailand", "city":"Bangkok", "title_en":"Mahanakhon Sky Walk", "title_si":"මහානකොන් ස්කයි වෝක්", "title_ja":"マハナコーン・スカイウォーク", "short_desc_en":"Thailand's highest observation deck with a thrilling glass tray.", "short_desc_si":"ත්‍රාසජනක වීදුරු තැටියක් සහිත තායිලන්තයේ උසම නිරීක්ෂණ තට්ටුව.", "short_desc_ja":"スリリングなガラスのトレイがあるタイで最も高い展望台。", "rating":4.9, "desc_en":"Experience breathtaking 360-degree panoramic views of Bangkok from the top of the King Power Mahanakhon building. Dare to walk on the glass tray floor 310 meters above the city for a truly unforgettable experience.", "desc_si":"කිං පවර් මහානකොන් ගොඩනැගිල්ලේ මුදුනේ සිට බැංකොක් නගරයේ අංශක 360ක පරිදර්ශක දසුන් අත්විඳින්න. සැබවින්ම අමතක නොවන අත්දැකීමක් සඳහා නගරයට මීටර් 310ක් ඉහළින් ඇති වීදුරු තැටි බිම මත ඇවිදීමට නිර්භීත වන්න.", "desc_ja":"キングパワー・マハナコーンビルの頂上からバンコクの息をのむような360度のパノラマビューを体験してください。街の上空310メートルにあるガラスのトレイの床を歩いて、本当に忘れられない体験をしてください。" },
      {"id":"th-loc-002", "country":"Thailand", "city":"Bangkok", "title_en":"Safari World", "title_si":"සෆාරි වර්ල්ඩ්", "title_ja":"サファリワールド", "short_desc_en":"An open zoo and leisure park with exciting animal shows.", "short_desc_si":"සිත් ඇදගන්නාසුළු සත්ව සංදර්ශන සහිත විවෘත සත්වෝද්‍යානයක් සහ විවේක උද්‍යානයක්.", "short_desc_ja":"エキサイティングな動物ショーがあるオープンズーとレジャーパーク。", "rating":4.7, "desc_en":"Safari World consists of two parks named Marine Park and Safari Park. Drive through the open Safari Park to see African wildlife up close, and enjoy world-class shows like the dolphin show, sea lion show, and the thrilling spy war show at the Marine Park.", "desc_si":"සෆාරි වර්ල්ඩ් සමන්විත වන්නේ මැරීන් පාර්ක් සහ සෆාරි පාර්ක් යන උද්‍යාන දෙකකිනි. අප්‍රිකානු වනජීවීන් සමීපව නැරඹීමට විවෘත සෆාරි උද්‍යානය හරහා ගමන් කරන්න, සහ ඩොල්ෆින් සංදර්ශනය, මුහුදු සිංහ සංදර්ශනය, සහ මැරීන් පාර්ක්හි ත්‍රාසජනක ඔත්තු යුද්ධ සංදර්ශනය වැනි ලෝක මට්ටමේ සංදර්ශන භුක්ති විඳින්න.", "desc_ja":"サファリワールドは、マリンパークとサファリパークという2つの公園で構成されています。オープンサファリパークをドライブしてアフリカの野生生物を間近で観察し、マリンパークではイルカショー、アシカショー、スリリングなスパイ戦争ショーなどのワールドクラスのショーをお楽しみください。" },
      {"id":"th-loc-003", "country":"Thailand", "city":"Pattaya", "title_en":"Sanctuary of Truth Museum", "title_si":"සත්‍යයේ දේවාලය කෞතුකාගාරය", "title_ja":"サンクチュアリ・オブ・トゥルース博物館", "short_desc_en":"A magnificent all-wood temple showcasing Thai craftsmanship.", "short_desc_si":"තායි ශිල්පීයත්වය ප්‍රදර්ශනය කරන දැවැන්ත ලී දේවාලයකි.", "short_desc_ja":"タイの職人技を披露する壮大な木造寺院。", "rating":4.8, "desc_en":"An awe-inspiring architectural marvel, the Sanctuary of Truth is a gigantic wooden construction over 100 meters high. Every surface is intricately carved with figures from Buddhist and Hindu mythology, creating a stunning tribute to traditional Thai art and philosophy.", "desc_si":"විස්මය දනවන ගෘහ නිර්මාණ ශිල්පීය ආශ්චර්යයක් වන සත්‍යයේ දේවාලය මීටර් 100කට වඩා උසැති දැවැන්ත ලී නිර්මාණයකි. සෑම මතුපිටක්ම බෞද්ධ සහ හින්දු පුරාවෘත්තවල රූපවලින් සංකීර්ණ ලෙස කැටයම් කර ඇත.", "desc_ja":"畏敬の念を起こさせる建築の驚異、サンクチュアリ・オブ・トゥルースは、高さ100メートルを超える巨大な木造建築です。すべての表面が仏教とヒンドゥー教の神話の人物で精巧に彫られています。" },
      {"id":"th-loc-004", "country":"Thailand", "city":"Bangkok", "title_en":"Dinner Cruise on Chao Phraya River", "title_si":"චාඕ ෆ්‍රායා ගඟේ රාත්‍රී භෝජන සංචාරය", "title_ja":"チャオプラヤー川でのディナークルーズ", "short_desc_en":"Enjoy a romantic dinner while cruising past illuminated landmarks.", "short_desc_si":"ආලෝකමත් සන්ධිස්ථාන පසුකරමින් යාත්‍රා කරන අතරතුර ආදර රාත්‍රී භෝජන සංග්‍රහයක් භුක්ති විඳින්න.", "short_desc_ja":"ライトアップされたランドマークを通り過ぎながらロマンチックなディナーをお楽しみください。", "rating":4.7, "desc_en":"Experience the magic of Bangkok at night from the Chao Phraya River. Enjoy a delicious buffet dinner with live music and traditional Thai dance performances as you cruise past iconic, beautifully illuminated sights like the Grand Palace and Wat Arun.", "desc_si":"චාඕ ෆ්‍රායා ගඟේ සිට රාත්‍රියේදී බැංකොක් නගරයේ මායාව අත්විඳින්න. මහා මාලිගය සහ වට් අරුන් වැනි සංකේතාත්මක, අලංකාර ලෙස ආලෝකමත් දර්ශන පසුකරමින් යාත්‍රා කරන විට සජීවී සංගීතය සහ සාම්ප්‍රදායික තායි නර්තන සංදර්ශන සමඟ රසවත් බුෆේ රාත්‍රී භෝජන සංග්‍රහයක් භුක්ති විඳින්න.", "desc_ja":"チャオプラヤー川から夜のバンコクの魔法を体験してください。グランドパレスやワット・アルンなどの象徴的で美しくライトアップされた景色をクルーズしながら、ライブ音楽と伝統的なタイ舞踊のパフォーマンスとともに美味しいビュッフェディナーをお楽しみください。" },
      {"id":"th-loc-005", "country":"Thailand", "city":"Pattaya", "title_en":"Ramayana Waterpark", "title_si":"රාමායන ජල උද්‍යානය", "title_ja":"ラマヤナウォーターパーク", "short_desc_en":"Thailand's biggest and best water park with 21 slides.", "short_desc_si":"විනිවිදක 21ක් සහිත තායිලන්තයේ විශාලතම සහ හොඳම ජල උද්‍යානය.", "short_desc_ja":"21のスライドがあるタイで最大かつ最高のウォーターパーク。", "rating":4.8, "desc_en":"Ranked among the top water parks in Asia, Ramayana offers a vast expanse of fun with over 21 thrilling water slides, a lazy river, a massive wave pool, and dedicated zones for children, all set in a beautiful, ancient city-themed landscape.", "desc_si":"ආසියාවේ ඉහළම ජල උද්‍යාන අතරට ශ්‍රේණිගත කර ඇති රාමායනය, 21කට අධික ත්‍රාසජනක ජල විනිවිදක, කම්මැලි ගංගාවක්, දැවැන්ත තරංග තටාකයක් සහ ළමුන් සඳහා වෙන්වූ කලාප සමඟින් විනෝදයේ විශාල වපසරියක් ලබා දෙයි.", "desc_ja":"アジアのトップウォーターパークにランクインしているラマヤナは、21以上のスリリングなウォータースライド、流れるプール、巨大な波のプール、子供向けの専用ゾーンなど、広大な楽しみを提供します。" },
      {"id":"th-loc-006", "country":"Thailand", "city":"Pattaya", "title_en":"Columbia Pictures Aquaverse", "title_si":"කොලොම්බියා පික්චර්ස් ඇක්වාවර්ස්", "title_ja":"コロンビア・ピクチャーズ・アクアバース", "short_desc_en":"The world's first movie-themed water and amusement park.", "short_desc_si":"ලොව ප්‍රථම චිත්‍රපට තේමා කරගත් ජල සහ විනෝද උද්‍යානය.", "short_desc_ja":"世界初の映画をテーマにしたウォーター＆アミューズメントパーク。", "rating":4.6, "desc_en":"Dive into the world of your favorite movies like Jumanji, Ghostbusters, and Hotel Transylvania. This unique theme park combines thrilling water slides with land attractions, live shows, and immersive experiences for the whole family.", "desc_si":"ජුමාන්ජි, ගෝස්ට්බස්ටර්ස්, සහ හොටෙල් ට්‍රැන්සිල්වේනියා වැනි ඔබේ ප්‍රියතම චිත්‍රපට ලෝකයට කිමිදෙන්න. මෙම අද්විතීය තේමා උද්‍යානය ත්‍රාසජනක ජල විනිවිදක, ගොඩබිම් ආකර්ෂණ, සජීවී සංදර්ශන සහ මුළු පවුලටම ගිලී යන අත්දැකීම් සමඟ ඒකාබද්ධ කරයි.", "desc_ja":"ジュマンジ、ゴーストバスターズ、ホテル・トランシルバニアなど、お気に入りの映画の世界に飛び込みましょう。このユニークなテーマパークは、スリリングなウォータースライドと陸のアトラクション、ライブショー、そして家族全員のための没入型体験を組み合わせています。" },
      {"id":"th-loc-007", "country":"Thailand", "city":"Bangkok", "title_en":"Sealife Ocean World & Madame Tussauds", "title_si":"සීලයිෆ් ඕෂන් වර්ල්ඩ් සහ මැඩම් ටුසෝඩ්ස්", "title_ja":"シーライフ・オーシャン・ワールド＆マダム・タッソー", "short_desc_en":"A combo ticket for an amazing aquarium and wax museum.", "short_desc_si":"විස්මිත මින්මැදුරක් සහ ඉටි කෞතුකාගාරයක් සඳහා කොම්බෝ ටිකට් පතක්.", "short_desc_ja":"素晴らしい水族館と蝋人形館のコンボチケット。", "rating":4.6, "desc_en":"Discover a fascinating underwater world at Sealife Ocean World, one of the largest aquariums in Southeast Asia. Then, get up close and personal with lifelike wax figures of celebrities, world leaders, and sports stars at Madame Tussauds Wax Museum.", "desc_si":"අග්නිදිග ආසියාවේ විශාලතම මින්මැදුරක් වන සීලයිෆ් ඕෂන් වර්ල්ඩ් හි සිත් ඇදගන්නාසුළු දිය යට ලෝකයක් සොයා ගන්න. ඉන්පසු, මැඩම් ටුසෝඩ්ස් ඉටි කෞතුකාගාරයේදී ප්‍රසිද්ධ පුද්ගලයින්, ලෝක නායකයින් සහ ක්‍රීඩා තරු වල ජීවමාන ඉටි රූප සමඟ සමීපව හා පුද්ගලිකව සම්බන්ධ වන්න.", "desc_ja":"東南アジア最大級の水族館の一つ、シーライフ・オーシャン・ワールドで魅力的な水中世界を発見してください。その後、マダム・タッソー蝋人形館で、有名人、世界の指導者、スポーツスターの生き写しのような蝋人形に近づきましょう。" },
      {"id":"th-loc-008", "country":"Thailand", "city":"Bangkok", "title_en":"Dream World", "title_si":"ඩ්‍රීම් වර්ල්ඩ්", "title_ja":"ドリームワールド", "short_desc_en":"A classic amusement park with fantasy lands and thrill rides.", "short_desc_si":"ෆැන්ටසි ලෑන්ඩ්ස් සහ ත්‍රාසජනක සවාරි සහිත සම්භාව්‍ය විනෝද උද්‍යානයක්.", "short_desc_ja":"ファンタジーランドとスリル満点の乗り物があるクラシックな遊園地。", "rating":4.5, "desc_en":"Spend a day of fun and excitement at Dream World. Explore themed zones like Dream Garden and Fantasy Land, enjoy a variety of rides from gentle carousels to thrilling roller coasters, and experience sub-zero temperatures in Snow Town.", "desc_si":"ඩ්‍රීම් වර්ල්ඩ් හි විනෝදය සහ උද්යෝගය පිරි දිනයක් ගත කරන්න. ඩ්‍රීම් ගාර්ඩන් සහ ෆැන්ටසි ලෑන්ඩ් වැනි තේමා කලාප ගවේෂණය කරන්න, මෘදු කැරොසල්වල සිට ත්‍රාසජනක රෝලර් කෝස්ටර් දක්වා විවිධ සවාරි භුක්ති විඳින්න, සහ ස්නෝ ටවුන්හි උප-ශුන්‍ය උෂ්ණත්වය අත්විඳින්න.", "desc_ja":"ドリームワールドで楽しさと興奮の一日を過ごしましょう。ドリームガーデンやファンタジーランドなどのテーマゾーンを探索し、穏やかなメリーゴーランドからスリリングなジェットコースターまでさまざまな乗り物を楽しみ、スノータウンで氷点下の気温を体験してください。" },
      {"id":"th-loc-009", "country":"Thailand", "city":"Pattaya", "title_en":"Nongnooch Garden", "title_si":"නොන්ග්නූච් උද්‍යානය", "title_ja":"ノンヌット・ガーデン", "short_desc_en":"A stunning 500-acre botanical garden with cultural shows.", "short_desc_si":"සංස්කෘතික සංදර්ශන සහිත අක්කර 500ක විශ්මයජනක උද්භිද උද්‍යානයක්.", "short_desc_ja":"文化ショーがある見事な500エーカーの植物園。", "rating":4.8, "desc_en":"Explore one of the most beautiful gardens in the world, featuring themed gardens like the French Garden, Stonehenge, and the Cactus Garden. Don't miss the spectacular traditional Thai cultural shows and the entertaining elephant show.", "desc_si":"ප්‍රංශ උද්‍යානය, ස්ටෝන්හෙන්ජ්, සහ පතොක් උද්‍යානය වැනි තේමා උද්‍යාන ඇතුළත් ලෝකයේ සුන්දරම උද්‍යානවලින් එකක් ගවේෂණය කරන්න. දර්ශනීය සාම්ප්‍රදායික තායි සංස්කෘතික සංදර්ශන සහ විනෝදාත්මක අලි සංදර්ශනය අතපසු නොකරන්න.", "desc_ja":"フランス庭園、ストーンヘンジ、サボテン庭園などのテーマガーデンがある世界で最も美しい庭園の一つを探検してください。壮大な伝統的なタイの文化ショーと面白い象のショーをお見逃しなく。" },
      {"id":"th-loc-010", "country":"Thailand", "city":"Near Bangkok", "title_en":"Damnoen Saduak & MaeKlong Railway Market", "title_si":"දම්නෝන් සaduak සහ මීක්ලෝන්ග් දුම්රිය වෙළඳපොළ", "title_ja":"ダムヌンサドゥアック水上マーケットとメークロン市場", "short_desc_en":"Visit the iconic floating market and the unique railway market.", "short_desc_si":"සංකේතාත්මක පාවෙන වෙළඳපොළ සහ අද්විතීය දුම්රිය වෙළඳපොළ වෙත පිවිසෙන්න.", "short_desc_ja":"象徴的な水上マーケットとユニークな鉄道市場を訪れます。", "rating":4.6, "desc_en":"A classic Thai experience. See vendors sell goods from long-tail boats at Damnoen Saduak, the most famous floating market. Then, witness the incredible sight of the Mae Klong Railway Market, where vendors quickly pack up their stalls to let a train pass through.", "desc_si":"සම්භාව්‍ය තායි අත්දැකීමක්. වඩාත් ප්‍රසිද්ධ පාවෙන වෙළඳපොළ වන දම්නෝන් සaduak හි දිගු වලිග බෝට්ටුවලින් වෙළෙන්දන් භාණ්ඩ විකුණන අයුරු බලන්න. ඉන්පසු, දුම්රියක් પસu වීමට ඉඩ දීම සඳහා වෙළෙන්දන් ඉක්මනින් තම කුටි අසුරන මීක්ලෝන්ග් දුම්රිය වෙළඳපොළේ ඇදහිය නොහැකි දසුන 목격 කරන්න.", "desc_ja":"クラシックなタイの体験。最も有名な水上マーケットであるダムヌンサドゥアックで、売り手がロングテールボートから商品を販売する様子をご覧ください。その後、列車が通過するために売り手が急いで屋台を片付けるメークロン鉄道市場の信じられない光景を目撃してください。" },
      {"id":"th-loc-011", "country":"Thailand", "city":"Pattaya", "title_en":"Alcazar Cabaret Show", "title_si":"ඇල්කසාර් කැබරේ සංදර්ශනය", "title_ja":"アルカサル・キャバレーショー", "short_desc_en":"A world-famous, spectacular ladyboy cabaret show.", "short_desc_si":"ලෝක ප්‍රකට, දර්ශනීය ලේඩිබෝයි කැබරේ සංදර්ශනයක්.", "short_desc_ja":"世界的に有名な、壮観なレディーボーイのキャバレーショー。", "rating":4.7, "desc_en":"Be dazzled by one of Pattaya's most famous performances. The Alcazar Cabaret Show features extravagant costumes, stunning performers, and spectacular stage sets in a 70-minute extravaganza that celebrates cultures from around the world.", "desc_si":"පතායා හි වඩාත් ප්‍රසිද්ධ ප්‍රසංගවලින් එකකින් විස්මයට පත් වන්න. ඇල්කසාර් කැබරේ සංදර්ශනය ලොව පුරා සංස්කෘතීන් සමරන විනාඩි 70ක මහා ප්‍රදර්ශනයකදී අතිවිශිෂ්ට ඇඳුම්, විශ්මයජනක රංගන ශිල්පීන් සහ දර්ශනීය වේදිකා කට්ටල ඇතුළත් වේ.", "desc_ja":"パタヤで最も有名なパフォーマンスの一つに魅了されてください。アルカサル・キャバレーショーは、世界中の文化を祝う70分間の豪華絢爛なショーで、豪華な衣装、見事なパフォーマー、そして壮観な舞台装置が特徴です。" },
      {"id":"th-loc-012", "country":"Thailand", "city":"Pattaya", "title_en":"Coral Island Tour", "title_si":"කොරල් දූපත් සංචාරය", "title_ja":"コーラル島ツアー", "short_desc_en":"A speedboat trip to a beautiful island for water sports.", "short_desc_si":"ජල ක්‍රීඩා සඳහා සුන්දර දූපතකට වේග බෝට්ටු චාරිකාවක්.", "short_desc_ja":"ウォータースポーツのための美しい島へのスピードボート旅行。", "rating":4.5, "desc_en":"Escape the city with a short speedboat ride to Coral Island (Koh Larn). Relax on the white sandy beaches, swim in the clear blue waters, and enjoy a variety of water sports like parasailing, sea walking, and banana boat rides.", "desc_si":"කොරල් දූපතට (Koh Larn) කෙටි වේග බෝට්ටු සවාරියකින් නගරයෙන් පැන යන්න. සුදු වැලි සහිත වෙරළ තීරයේ විවේක ගන්න, පැහැදිලි නිල් ජලයේ පිහිනන්න, සහ පැරසේලිං, මුහුදු ඇවිදීම, සහ කෙසෙල් බෝට්ටු සවාරි වැනි විවිධ ජල ක්‍රීඩා භුක්ති විඳින්න.", "desc_ja":"コーラル島（ラン島）への短いスピードボートで街から脱出しましょう。白い砂浜でリラックスし、澄んだ青い海で泳ぎ、パラセーリング、シーウォーキング、バナナボートなどのさまざまなウォータースポーツをお楽しみください。" },
      {"id":"th-loc-013", "country":"Thailand", "city":"Near Bangkok", "title_en":"Ayutthaya Historical Park Tour", "title_si":"අයුත්තායා ඓතිහාසික උද්‍යාන සංචාරය", "title_ja":"アユタヤ歴史公園ツアー", "short_desc_en":"Explore the magnificent ruins of Thailand's former capital.", "short_desc_si":"තායිලන්තයේ පැරණි අගනුවරෙහි අලංකාර නටබුන් ගවේෂණය කරන්න.", "short_desc_ja":"タイのかつての首都の壮大な遺跡を探検してください。", "rating":4.8, "desc_en":"A UNESCO World Heritage site, Ayutthaya was the second capital of the Siamese Kingdom. Explore the vast complex of temple ruins, including the famous Buddha head entwined in tree roots at Wat Mahathat. A must-visit for history enthusiasts.", "desc_si":"UNESCO ලෝක උරුම අඩවියක් වන අයුත්තායා සියම් රාජධානියේ දෙවන අගනුවර විය. වට් මහාතාත්හි ගස් මුල්වල පැටලී ඇති සුප්‍රසිද්ධ බුද්ධ හිස ඇතුළු විහාර නටබුන්වල විශාල සංකීර්ණය ගවේෂණය කරන්න. ඉතිහාස ලෝලීන් සඳහා නැරඹිය යුතුම ස්ථානයකි.", "desc_ja":"ユネスコ世界遺産であるアユタヤは、シャム王国の第二の首都でした。ワット・マハタートの木の根に絡まった有名な仏頭を含む、広大な寺院遺跡群を探検してください。歴史愛好家にとって必見の場所です。" },
      {"id":"th-loc-014", "country":"Thailand", "city":"Bangkok", "title_en":"Bangkok Temple Tour", "title_si":"බැංකොක් විහාර සංචාරය", "title_ja":"バンコク寺院ツアー", "short_desc_en":"Visit the city's most iconic and revered Buddhist temples.", "short_desc_si":"නගරයේ වඩාත්ම සංකේතාත්මක හා ගෞරවනීය බෞද්ධ විහාරස්ථාන වෙත පිවිසෙන්න.", "short_desc_ja":"市内で最も象徴的で尊敬されている仏教寺院を訪れます。", "rating":4.7, "desc_en":"Discover the spiritual heart of Bangkok by visiting its most important temples. This tour typically includes Wat Arun (Temple of Dawn), Wat Pho (Temple of the Reclining Buddha), and the magnificent Grand Palace complex with Wat Phra Kaew (Temple of the Emerald Buddha).", "desc_si":"බැංකොක්හි අධ්‍යාත්මික හදවත එහි වැදගත්ම විහාරස්ථාන නැරඹීමෙන් සොයා ගන්න. මෙම සංචාරයට සාමාන්‍යයෙන් වට් අරුන් (අරුණෝදය විහාරය), වට් ෆෝ (සැතපෙන බුදුන්ගේ විහාරය), සහ වට් ෆ්‍රා කේව් (එමරල්ඩ් බුදුන්ගේ විහාරය) සහිත මහා මාලිගා සංකීර්ණය ඇතුළත් වේ.", "desc_ja":"最も重要な寺院を訪れて、バンコクの精神的な中心を発見してください。このツアーには通常、ワット・アルン（暁の寺）、ワット・ポー（涅槃仏の寺）、そしてワット・プラケオ（エメラルド仏の寺）がある壮大な王宮複合施設が含まれます。" },
      {"id":"th-loc-015", "country":"Thailand", "city":"Pattaya", "title_en":"Floating Market", "title_si":"පාවෙන වෙළඳපොළ", "title_ja":"水上マーケット", "short_desc_en":"Experience traditional Thai market life on the water.", "short_desc_si":"ජලය මත සාම්ප්‍රදායික තායි වෙළඳපොළ ජීවිතය අත්විඳින්න.", "short_desc_ja":"水上での伝統的なタイの市場生活を体験してください。", "rating":4.4, "desc_en":"Explore the Four Regions Floating Market, where you can sample food and buy handicrafts from all over Thailand. You can walk around the market or hire a small boat to navigate the canals for a more authentic experience.", "desc_si":"තායිලන්තයේ සෑම ප්‍රදේශයකින්ම ආහාර සාම්පල ලබා ගැනීමට සහ අත්කම් මිලදී ගැනීමට හැකි කලාප හතරේ පාවෙන වෙළඳපොළ ගවේෂණය කරන්න. ඔබට වෙළඳපොළ වටා ඇවිදීමට හෝ වඩාත් අව්‍යාජ අත්දැකීමක් සඳහා ඇළ මාර්ගවල සැරිසැරීමට කුඩා බෝට්ටුවක් කුලියට ගත හැකිය.", "desc_ja":"タイ全土の食べ物を試食したり、手工芸品を購入したりできる四地域水上マーケットを探検してください。市場を歩き回ったり、より本格的な体験のために運河を航行するために小さなボートを借りることもできます。" },
      {"id":"th-loc-016", "country":"Thailand", "city":"Bangkok", "title_en":"Ancient City & Erawan Museum", "title_si":"පුරාණ නගරය සහ එරවන් කෞතුකාගාරය", "title_ja":"古代都市＆エラワン博物館", "short_desc_en":"Explore Thailand's heritage in a huge outdoor museum.", "short_desc_si":"විශාල එළිමහන් කෞතුකාගාරයක තායිලන්තයේ උරුමය ගවේෂණය කරන්න.", "short_desc_ja":"巨大な屋外博物館でタイの遺産を探検してください。", "rating":4.7, "desc_en":"The Ancient City (Muang Boran) is one of the world's largest outdoor museums, featuring replicas of Thailand's most famous monuments. Combine your visit with the nearby Erawan Museum, famous for its giant three-headed elephant statue and stunning interiors.", "desc_si":"පුරාණ නගරය (Muang Boran) යනු ලොව විශාලතම එළිමහන් කෞතුකාගාරවලින් එකකි, එහි තායිලන්තයේ වඩාත් ප්‍රසිද්ධ ස්මාරකවල අනුරූ ඇතුළත් වේ. ඔබේ සංචාරය අසල ඇති එරවන් කෞතුකාගාරය සමඟ ඒකාබද්ධ කරන්න, එහි යෝධ තුන්-හිස් අලි පිළිමය සහ විශ්මයජනක අභ්‍යන්තරය සඳහා ප්‍රසිද්ධය.", "desc_ja":"古代都市（ムアン・ボーラン）は世界最大級の屋外博物館の一つで、タイで最も有名なモニュメントのレプリカが展示されています。巨大な三頭の象の像と見事な内装で有名な近くのエラワン博物館と組み合わせて訪れてください。" },
      {"id":"th-loc-017", "country":"Thailand", "city":"Pattaya", "title_en":"Tiger Topia", "title_si":"ටයිගර් ටෝපියා", "title_ja":"タイガートピア", "short_desc_en":"Get up close with majestic tigers in a zoo setting.", "short_desc_si":"සත්වෝද්‍යාන පසුබිමක අලංකාර කොටින් සමඟ සමීප වන්න.", "short_desc_ja":"動物園の環境で雄大なトラに近づきます。", "rating":4.3, "desc_en":"Previously known as Tiger Park Pattaya, Tiger Topia offers an opportunity to see magnificent tigers of various ages. You can choose to walk with and take photos of these powerful animals under the supervision of trained staff.", "desc_si":"කලින් Tiger Park Pattaya ලෙස හැඳින්වූ Tiger Topia, විවිධ වයස්වල අලංකාර කොටින් දැකීමට අවස්ථාවක් ලබා දෙයි. පුහුණු කාර්ය මණ්ඩලයේ අධීක්ෂණය යටතේ මෙම බලවත් සතුන් සමඟ ඇවිදීමට සහ ඡායාරූප ගැනීමට ඔබට තෝරා ගත හැකිය.", "desc_ja":"以前はタイガーパークパタヤとして知られていたタイガートピアは、さまざまな年齢の壮大なトラを見る機会を提供します。訓練を受けたスタッフの監督の下で、これらの強力な動物と一緒に歩き、写真を撮ることを選択できます。" },
      {"id":"th-loc-018", "country":"Thailand", "city":"Pattaya", "title_en":"Dolphinarium", "title_si":"ඩොල්ෆිනේරියම්", "title_ja":"イルカショー", "short_desc_en":"An entertaining show featuring intelligent and playful dolphins.", "short_desc_si":"බුද්ධිමත් සහ සෙල්ලක්කාර ඩොල්ෆින් මසුන් ඇතුළත් විනෝදාත්මක සංදර්ශනයක්.", "short_desc_ja":"知的で遊び心のあるイルカが出演する面白いショー。", "rating":4.5, "desc_en":"Enjoy a world-class performance by highly intelligent dolphins and seals at the Pattaya Dolphinarium. Be amazed by their acrobatic feats and charming antics in this modern facility. You can even swim with the dolphins for an extra special memory.", "desc_si":"පතායා ඩොල්ෆිනේරියම්හිදී ඉහළ බුද්ධිමත් ඩොල්ෆින් සහ සීල් මසුන්ගේ ලෝක මට්ටමේ ප්‍රසංගයක් භුක්ති විඳින්න. මෙම නවීන පහසුකමේදී ඔවුන්ගේ ඇක්‍රොබැටික් දස්කම් සහ ආකර්ශනීය විකටකම්වලින් මවිත වන්න. අමතර විශේෂ මතකයක් සඳහා ඔබට ඩොල්ෆින් සමඟ පිහිනීමට පවා හැකිය.", "desc_ja":"パタヤのイルカショーで、非常に知的なイルカとアザラシによるワールドクラスのパフォーマンスをお楽しみください。この近代的な施設で、彼らのアクロバティックな妙技と魅力的な仕草に驚かされてください。特別な思い出にイルカと一緒に泳ぐこともできます。" },
      {"id":"th-loc-019", "country":"Thailand", "city":"Pattaya", "title_en":"Underwater World", "title_si":"දිය යට ලෝකය", "title_ja":"アンダーウォーター・ワールド", "short_desc_en":"Walk through a 100-meter-long tunnel under the sea.", "short_desc_si":"මුහුද යට මීටර් 100ක් දිග උමගක් හරහා ඇවිදින්න.", "short_desc_ja":"海の下の長さ100メートルのトンネルを歩きます。", "rating":4.3, "desc_en":"Discover the rich variety of marine life from the Gulf of Thailand. The highlight is a 100-meter acrylic pedestrian tunnel where you can see sharks, stingrays, and thousands of fish swimming all around you. It also features a touch pool and feeding shows.", "desc_si":"තායිලන්ත බොක්කෙන් පොහොසත් සමුද්‍ර ජීවීන්ගේ විවිධත්වය සොයා ගන්න. විශේෂත්වය වන්නේ මීටර් 100ක ඇක්‍රිලික් පදික උමගක් වන අතර එහිදී ඔබට මෝරුන්, මැඩියන් සහ මාළු දහස් ගණනක් ඔබ වටා පිහිනනු දැකිය හැකිය. එහි ස්පර්ශ තටාකයක් සහ පෝෂණ සංදර්ශන ද ඇත.", "desc_ja":"タイ湾の豊かな海洋生物の多様性を発見してください。ハイライトは100メートルのアクリル製歩行者用トンネルで、サメ、アカエイ、そして何千もの魚があなたの周りを泳いでいるのを見ることができます。タッチプールや餌やりショーも特徴です。" },
      {"id":"th-loc-020", "country":"Thailand", "city":"Pattaya", "title_en":"Sky Diving", "title_si":"ස්කයි ඩයිවිං", "title_ja":"スカイダイビング", "short_desc_en":"The ultimate thrill: a tandem skydive over the Thai coastline.", "short_desc_si":"අවසාන ත්‍රාසය: තායි වෙරළ තීරයට ඉහළින් ටැන්ඩම් ස්කයිඩයිව් එකක්.", "short_desc_ja":"究極のスリル：タイの海岸線上空でのタンデムスカイダイブ。", "rating":4.9, "desc_en":"For the ultimate adrenaline rush, experience a tandem skydive with a professional instructor. Jump from over 13,000 feet and enjoy a breathtaking freefall before parachuting gently down with stunning views of the Pattaya coastline.", "desc_si":"අවසාන ඇඩ්‍රිනලින් වේගය සඳහා, වෘත්තීය උපදේශකයෙකු සමඟ ටැन्ඩම් ස්කයිඩයිව් අත්විඳින්න. අඩි 13,000කට වඩා උසකින් පැන පතායා වෙරළ තීරයේ විශ්මයජනක දසුන් සමඟ මෘදු ලෙස පැරෂුටයකින් බැසීමට පෙර හුස්ම හිරවන නිදහස් වැටීමක් භුක්ති විඳින්න.", "desc_ja":"究極のアドレナリンラッシュのために、プロのインストラクターとのタンデムスカイダイブを体験してください。13,000フィート以上からジャンプし、息をのむようなフリーフォールを楽しんだ後、パタヤの海岸線の素晴らしい景色を眺めながらゆっくりとパラシュートで降下します。" },
      {"id":"th-loc-021", "country":"Thailand", "city":"Bangkok", "title_en":"Baiyoke Sky Breakfast/Dinner", "title_si":"බයියෝක් ස්කයි උදෑසන/රාත්‍රී ආහාරය", "title_ja":"バイヨーク・スカイでの朝食/ディナー", "short_desc_en":"Dine with a view at one of Bangkok's tallest hotels.", "short_desc_si":"බැංකොක්හි උසම හෝටලයක දසුනක් සමඟ ආහාර ගන්න.", "short_desc_ja":"バンコクで最も高いホテルの一つで景色を眺めながらお食事を。", "rating":4.2, "desc_en":"Enjoy a lavish buffet breakfast or dinner on the 76th & 78th floors of the Baiyoke Sky Hotel. The meal includes access to the Observation Deck on the 77th floor and the Revolving View Point on the 84th floor for panoramic city views.", "desc_si":"බයියෝක් ස්කයි හෝටලයේ 76 වන සහ 78 වන මහල්වල සුඛෝපභෝගී බුෆේ උදෑසන ආහාරය හෝ රාත්‍රී ආහාරය භුක්ති විඳින්න. ආහාර වේලට 77 වන මහලේ නිරීක්ෂණ තට්ටුවට සහ 84 වන මහලේ කැරකෙන දර්ශන ස්ථානයට ප්‍රවේශය ඇතුළත් වේ.", "desc_ja":"バイヨーク・スカイホテルの76階と78階で豪華なビュッフェの朝食またはディナーをお楽しみください。食事には77階の展望デッキと84階の回転展望台へのアクセスが含まれ、パノラマの街の景色を楽しめます。" },
      {"id":"th-loc-022", "country":"Thailand", "city":"Bangkok", "title_en":"Calypso Cabaret Show", "title_si":"කැලිප්සෝ කැබරේ සංදර්ශනය", "title_ja":"カリプソ・キャバレーショー", "short_desc_en":"A vibrant and entertaining ladyboy cabaret at Asiatique.", "short_desc_si":"ಏಷියාටීක්හි විචිත්‍රවත් හා විනෝදාත්මක ලේඩිබෝයි කැබරේ.", "short_desc_ja":"アジアティークでの活気あふれる面白いレディーボーイキャバレー。", "rating":4.5, "desc_en":"Located at the lively Asiatique The Riverfront, Calypso Cabaret offers a dazzling performance with beautiful transgender artists. Enjoy a night of music, dance, and comedy with spectacular costumes and choreography.", "desc_si":"සජීවී Asiatique The Riverfront හි පිහිටා ඇති Calypso Cabaret, ලස්සන සංක්‍රාන්ති ලිංගික කලාකරුවන් සමඟ විස්මයජනක ප්‍රසංගයක් ඉදිරිපත් කරයි. දර්ශනීය ඇඳුම් සහ නර්තන විද්‍යාව සමඟ සංගීතය, නැටුම් සහ හාස්‍ය රාත්‍රියක් භුක්ති විඳින්න.", "desc_ja":"活気あるアジアティーク・ザ・リバーフロントにあるカリプソ・キャバレーは、美しいトランスジェンダーのアーティストによるまばゆいパフォーマンスを提供します。壮観な衣装と振り付けで、音楽、ダンス、コメディの夜をお楽しみください。" },
      {"id":"th-loc-023", "country":"Thailand", "city":"Bangkok", "title_en":"Siam Amazing Park", "title_si":"සියම් ඇමේසින් පාර්ක්", "title_ja":"サイアム・アメージング・パーク", "short_desc_en":"A large amusement and water park for a full day of fun.", "short_desc_si":"සම්පූර්ණ දිනක විනෝදය සඳහා විශාල විනෝද සහ ජල උද්‍යානයක්.", "short_desc_ja":"一日中楽しめる大規模な遊園地とウォーターパーク。", "rating":4.4, "desc_en":"Formerly known as Siam Park City, this is one of Bangkok's largest amusement and water parks. It features a massive wave pool, numerous water slides, and a variety of thrill rides, making it a great day out for families and thrill-seekers.", "desc_si":"කලින් සියම් පාර්ක් සිටි ලෙස හැඳින්වූ මෙය බැංකොක්හි විශාලතම විනෝද සහ ජල උද්‍යානවලින් එකකි. එහි දැවැන්ත තරංග තටාකයක්, බොහෝ ජල විනිවිදක සහ විවිධ ත්‍රාසජනක සවාරි ඇතුළත් වන අතර, එය පවුල් සහ ත්‍රාසය සොයන්නන් සඳහා විශිෂ්ට දිනක් බවට පත් කරයි.", "desc_ja":"以前はサイアムパークシティとして知られていた、バンコクで最大級の遊園地とウォーターパークの一つです。巨大な波のプール、数多くのウォータースライド、さまざまなスリル満点の乗り物があり、家族連れやスリルを求める人にとって素晴らしい一日を過ごせます。" },
      {"id":"th-loc-024", "country":"Thailand", "city":"Pattaya", "title_en":"Frost Magical Ice of Siam", "title_si":"ෆ්‍රොස්ට් මැජිකල් අයිස් ඔෆ් සියම්", "title_ja":"フロスト・マジカル・アイス・オブ・サイアム", "short_desc_en":"Escape the heat in a -10°C dome of ice sculptures.", "short_desc_si":"අයිස් මූර්තිවල -10°C ගෝලාකාරයේ තාපයෙන් ගැලවෙන්න.", "short_desc_ja":"氷の彫刻の-10°Cのドームで暑さから逃れます。", "rating":4.1, "desc_en":"Experience a taste of the arctic in tropical Pattaya. Frost Magical Ice of Siam features a huge indoor dome kept at -10°C, filled with intricate ice sculptures depicting Thai literature and landmarks. There's also an outdoor area with white sand sculptures.", "desc_si":"නිවර්තන පතායා හි ආක්ටික් රසයක් අත්විඳින්න. ෆ්‍රොස්ට් මැජිකල් අයිස් ඔෆ් සියම් හි -10°C හි තබා ඇති විශාල ගෘහස්ථ ගෝලාකාරයක් ඇත, එය තායි සාහිත්‍යය සහ සන්ධිස්ථාන නිරූපණය කරන සංකීර්ණ අයිස් මූර්තිවලින් පිරී ඇත. සුදු වැලි මූර්ති සහිත එළිමහන් ප්‍රදේශයක් ද ඇත.", "desc_ja":"熱帯のパタヤで北極の味を体験してください。フロスト・マジカル・アイス・オブ・サイアムは、-10°Cに保たれた巨大な屋内ドームを特徴とし、タイ文学やランドマークを描いた複雑な氷の彫刻で満たされています。白い砂の彫刻がある屋外エリアもあります。" },
      {"id":"th-loc-025", "country":"Thailand", "city":"Pattaya", "title_en":"Million Year Stone Park & Crocodile Farm", "title_si":"මිලියන වසරක ගල් උද්‍යානය සහ කිඹුල් ගොවිපල", "title_ja":"百万年石公園＆クロコダイルファーム", "short_desc_en":"See ancient rock formations and thrilling crocodile shows.", "short_desc_si":"පුරාණ පාෂාණ සැකැස්ම සහ ත්‍රාසජනක කිඹුල් සංදර්ශන බලන්න.", "short_desc_ja":"古代の岩石層とスリリングなワニのショーをご覧ください。", "rating":4.2, "desc_en":"A unique park that combines beautiful gardens with exotic petrified wood formations, some over a million years old. The park is also home to a large crocodile farm where you can watch exciting shows featuring crocodile wrestling and feeding.", "desc_si":"ලක්ෂ සංඛ්‍යාත වසරකට වඩා පැරණි විදේශීය ගල් බවට පත් වූ ලී සැකැස්ම සමඟ සුන්දර උද්‍යාන ඒකාබද්ධ කරන අද්විතීය උද්‍යානයකි. මෙම උද්‍යානය කිඹුල් පොරබැදීම සහ පෝෂණය ඇතුළත් උද්වේගකර සංදර්ශන නැරඹිය හැකි විශාල කිඹුල් ගොවිපලකට ද නිවහන වේ.", "desc_ja":"美しい庭園と、数百万年以上前のものもあるエキゾチックな珪化木の形成物を組み合わせたユニークな公園です。この公園には大規模なワニ園もあり、ワニのレスリングや餌やりなどのエキサイティングなショーを見ることができます。" },

      // Malaysia (New List)
      { id:"my-loc-001", country:"Malaysia", city:"Kuala Lumpur", rating:4.8, title_en:"Petronas Twin Towers", short_desc_en:"Iconic twin skyscrapers with a sky bridge.", desc_en:"The jewel of Kuala Lumpur's skyline, these 88-story twin structures are an architectural marvel. Visit the Skybridge and Observation Deck for stunning city views.", title_si:"පෙට්‍රෝනාස් නිවුන් කුළුණු", short_desc_si:"අහස් පාලමක් සහිත සංකේතාත්මක නිවුන් අහස් ගොඩනැගිලි.", desc_si:"ක්වාලාලම්පූර් අහස් තලයේ මැණික වන මෙම තට්ටු 88 කින් යුත් නිවුන් ව්‍යුහයන් වාස්තු විද්‍යාත්මක ආශ්චර්යයකි. විශ්මයජනක නගර දර්ශන සඳහා Skybridge සහ Observation Deck වෙත පිවිසෙන්න.", title_ja:"ペトロナスツインタワー", short_desc_ja:"スカイブリッジのある象徴的なツインタワー。", desc_ja:"クアラルンプールのスカイラインの宝石であるこれらの88階建てのツイン構造は、建築の驚異です。スカイブリッジと展望台を訪れて、素晴らしい街の景色をお楽しみください。" },
      { id:"my-loc-002", country:"Malaysia", city:"Near KL", rating:4.7, title_en:"Batu Caves", short_desc_en:"A limestone hill with a series of caves and temples.", desc_en:"A sacred Hindu site featuring a giant golden statue of Lord Murugan at the entrance. Climb the 272 colorful steps to explore the main temple cave.", title_si:"බටු ලෙන්", short_desc_si:"ලෙන් සහ කෝවිල් මාලාවක් සහිත හුණුගල් කන්දක්.", desc_si:"ඇතුල්වීමේ දොරටුවේ මුරුගන් දෙවියන්ගේ යෝධ රන් පිළිමයක් සහිත පූජනීය හින්දු සිද්ධස්ථානයකි. ප්‍රධාන පන්සල් ගුහාව ගවේෂණය කිරීමට වර්ණවත් පඩි 272 ක් නගින්න.", title_ja:"バトゥ洞窟", short_desc_ja:"一連の洞窟と寺院がある石灰岩の丘。", desc_ja:"入り口にムルガン卿の巨大な黄金像がある神聖なヒンドゥー教の場所。272段のカラフルな階段を登って、本堂の洞窟を探検してください。" },
      { id:"my-loc-003", country:"Malaysia", city:"Genting Highlands", rating:4.6, title_en:"Genting Highlands & SkyWay Cable Car", short_desc_en:"Cool mountain resort with theme parks and cable car.", desc_en:"Escape the city heat at this integrated hill resort. Enjoy the Awana SkyWay two-way cable car ride over the rainforest and explore the Genting SkyWorlds Theme Park.", title_si:"ගෙන්ටිං හයිලන්ඩ්ස් සහ ස්කයිවේ කේබල් කාර්", short_desc_si:"තේමා උද්‍යාන සහ කේබල් කාර් සහිත සිසිල් කඳු නිකේතනය.", desc_si:"මෙම ඒකාබද්ධ කඳු නිකේතනයේ නගරයේ උණුසුමෙන් මිදෙන්න. වැසි වනාන්තරය හරහා Awana SkyWay ද්වි-මාර්ග කේබල් කාර් සවාරිය භුක්ති විඳින්න සහ Genting SkyWorlds තේමා උද්‍යානය ගවේෂණය කරන්න.", title_ja:"ゲンティンハイランド＆スカイウェイケーブルカー", short_desc_ja:"テーマパークとケーブルカーがある涼しい山岳リゾート。", desc_ja:"この統合された丘のリゾートで都会の暑さから逃れましょう。熱帯雨林の上を走るアワナスカイウェイの双方向ケーブルカーに乗って、ゲンティンスカイワールドテーマパークを探索してください。" },
      { id:"my-loc-004", country:"Malaysia", city:"Subang Jaya", rating:4.7, title_en:"Sunway Lagoon", short_desc_en:"A massive theme park with over 90 attractions.", desc_en:"A one-stop fun destination with 6 different parks: Water Park, Amusement Park, Wildlife Park, Extreme Park, Scream Park, and Nickelodeon Lost Lagoon.", title_si:"සන්වේ කලපුව", short_desc_si:"ආකර්ෂණ 90කට අධික දැවැන්ත තේමා උද්‍යානයක්.", desc_si:"විවිධ උද්‍යාන 6ක් සහිත එක්-නැවතුම් විනෝද ගමනාන්තයක්: ජල උද්‍යානය, විනෝද උද්‍යානය, වනජීවී උද්‍යානය, එක්ස්ට්‍රීම් පාර්ක්, ස්ක්‍රීම් පාර්ක්, සහ නිකලodeon ලොස්ට් කලපුව.", title_ja:"サンウェイラグーン", short_desc_ja:"90以上のアトラクションがある巨大なテーマパーク。", desc_ja:"ウォーターパーク、アミューズメントパーク、ワイルドライフパーク、エクストリームパーク、スクリームパーク、ニコロデオンロストラゴンの6つの異なる公園があるワンストップの楽しい目的地。" },

      // India (New List)
      { id:"in-loc-001", country:"India", city:"Chennai", rating:4.8, title_en:"San Thome Basilica", short_desc_en:"A beautiful church built over the tomb of St. Thomas.", desc_en:"This historic Roman Catholic minor basilica is one of only three in the world built over the tomb of an apostle of Jesus. A site of pilgrimage for Christians.", title_si:"ශාන්ත තෝම් බැසිලිකාව", short_desc_si:"ශාන්ත තෝමස්ගේ සොහොන මත ඉදිකරන ලද අලංකාර දේවස්ථානයක්.", desc_si:"මෙම ඓතිහාසික රෝමානු කතෝලික සුළු බැසිලිකාව යේසුස් වහන්සේගේ අපොස්තුළුවරයෙකුගේ සොහොන මත ඉදිකරන ලද ලොව තුනෙන් එකකි. කිතුනුවන් සඳහා වන්දනා ස්ථානයකි.", title_ja:"サン・トメ聖堂", short_desc_ja:"聖トマスの墓の上に建てられた美しい教会。", desc_ja:"この歴史的なローマカトリックの小聖堂は、イエスの使徒の墓の上に建てられた世界で3つしかないうちの1つです。キリスト教徒の巡礼地です。" },
      { id:"in-loc-002", country:"India", city:"Chennai", rating:4.5, title_en:"Marina Beach", short_desc_en:"One of the longest natural urban beaches in the world.", desc_en:"Stretching for about 13 km, this is a major landmark of Chennai. It's a popular spot for locals and tourists to walk, relax, and enjoy the sea breeze.", title_si:"මරීනා වෙරළ", short_desc_si:"ලෝකයේ දිගම ස්වභාවික නාගරික වෙරළ තීරයන්ගෙන් එකකි.", desc_si:"කිලෝමීටර 13 ක් පමණ විහිදෙන මෙය චෙන්නායි හි ප්‍රධාන සන්ධිස්ථානයකි. එය ප්‍රදේශවාසීන්ට සහ සංචාරකයින්ට ඇවිදීමට, විවේක ගැනීමට සහ මුහුදු සුළඟ භුක්ති විඳීමට ජනප්‍රිය ස්ථානයකි.", title_ja:"マリーナビーチ", short_desc_ja:"世界で最も長い自然の都市ビーチの一つ。", desc_ja:"約13 kmにわたって広がる、チェンナイの主要なランドマークです。地元の人々や観光客が散歩したり、リラックスしたり、潮風を楽しんだりするのに人気の場所です。" },
      { id:"in-loc-003", country:"India", city:"Chennai", rating:4.7, title_en:"St. Thomas Mount National Shrine", short_desc_en:"A hilltop shrine where the apostle St. Thomas was martyred.", desc_en:"A revered pilgrimage site offering panoramic views of Chennai city. The church at the summit houses relics associated with St. Thomas.", title_si:"ශාන්ත තෝමස් කඳුකර ජාතික සිද්ධස්ථානය", short_desc_si:"ශාන්ත තෝමස් අපොස්තුළුවරයා දිවි පිදූ කඳු මුදුනක සිද්ධස්ථානයකි.", desc_si:"චෙන්නායි නගරයේ පරිදර්ශක දසුන් සපයන ගෞරවනීය වන්දනා ස්ථානයකි. කඳු මුදුනේ ඇති දේවස්ථානයේ ශාන්ත තෝමස් හා සම්බන්ධ ධාතුන් වහන්සේලා තැන්පත් කර ඇත.", title_ja:"セント・トーマス・マウント国立聖堂", short_desc_ja:"使徒聖トマスが殉教した丘の上の聖堂。", desc_ja:"チェンナイ市のパノラマビューを提供する尊敬される巡礼地。山頂の教会には、聖トマスに関連する遺物が収められています。" },
      { id:"in-loc-004", country:"India", city:"Chennai", rating:4.6, title_en:"Ashtalakshmi Temple", short_desc_en:"A unique temple dedicated to the eight forms of Lakshmi.", desc_en:"Located on the shore of the Bay of Bengal, this temple is unique for its design, with four levels housing the eight different shrines of the Goddess of Wealth.", title_si:"අෂ්ටලක්ෂ්මි කෝවිල", short_desc_si:"ලක්ෂ්මිගේ രൂപ අට සඳහා කැප වූ අද්විතීය විහාරස්ථානයක්.", desc_si:"බෙංගාල බොක්ක වෙරළ තීරයේ පිහිටා ඇති මෙම දේවස්ථානය එහි සැලසුම සඳහා අද්විතීය වන අතර, ධනයට අධිපති දේවතාවියගේ විවිධ සිද්ධස්ථාන අටක් සහිත මට්ටම් හතරක් ඇත.", title_ja:"アシュタラクシュミ寺院", short_desc_ja:"ラクシュミの8つの形態に捧げられたユニークな寺院。", desc_ja:"ベンガル湾の岸に位置するこの寺院は、富の女神の8つの異なる聖堂を収容する4つのレベルがあるデザインでユニークです。" },
      { id:"in-loc-005", country:"India", city:"Tirupati", rating:5.0, title_en:"Sri Balaji & Padmavathi Temples", short_desc_en:"A major pilgrimage to Lord Venkateswara and his consort.", desc_en:"Visit the world-renowned Tirumala Venkateswara Temple (Balaji) and the nearby Sri Padmavathi Ammavari Temple in Tiruchanur for a complete spiritual journey.", title_si:"ශ්‍රී බාලාජි සහ පද්මාවතී කෝවිල්", short_desc_si:"වෙන්කටేశ්වර දෙවියන් සහ ඔහුගේ භාර්යාව වෙත ප්‍රධාන වන්දනාවක්.", desc_si:"සම්පූර්ණ අධ්‍යාත්මික ගමනක් සඳහා ලෝක ප්‍රකට තිරුමල වෙන්කටేశ්වර දේවාලය (බාලාජි) සහ ඒ අසල ඇති තිරුචනූර් හි ශ්‍රී පද්මාවතී අම්මාවාරී දේවාලය වෙත පිවිසෙන්න.", title_ja:"シュリ・バラジ＆パドマヴァティ寺院", short_desc_ja:"ヴェンカテーシュワラ卿とその配偶者への主要な巡礼。", desc_ja:"世界的に有名なティルマラ・ヴェンカテーシュワラ寺院（バラジ）と近くのティルチャヌールにあるシュリ・パドマヴァティ・アンマヴァリ寺院を訪れて、完全な精神的な旅をお楽しみください。" },
      { id:"in-loc-006", country:"India", city:"Tirupati", rating:4.8, title_en:"Sri Govindarajaswami Temple", short_desc_en:"An ancient and vast temple complex in Tirupati.", desc_en:"One of the most important temples in Tirupati, dedicated to a resting form of Lord Vishnu. It features a massive outer gopuram (tower) and intricate architecture.", title_si:"ශ්‍රී ගෝවින්දරාජස්වාමි කෝවිල", short_desc_si:"තිරුපති හි පුරාණ සහ විශාල විහාර සංකීර්ණයක්.", desc_si:"විෂ්ණු දෙවියන්ගේ විවේකී ස්වරූපයකට කැප වූ තිරුපති හි වැදගත්ම විහාරස්ථානවලින් එකකි. එහි දැවැන්ත පිටත ගෝපුරම් (කුළුණ) සහ සංකීර්ණ ගෘහ නිර්මාණ ශිල්පය ඇතුළත් වේ.", title_ja:"シュリ・ゴビンダラジャスワミ寺院", short_desc_ja:"ティルパティにある古代の広大な寺院複合施設。", desc_ja:"ティルパティで最も重要な寺院の一つで、ヴィシュヌ卿の休息の姿に捧げられています。巨大な外側のゴープラム（塔）と複雑な建築が特徴です。" }
    ],

    // --- LOCATION IMAGES ---
    // Central place to manage all location images. Use the location ID as the key.
    LOCATION_IMAGES: {
      // Sri Lanka
      "sl-loc-001": ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fwhenonearth.net%2Fancient-palace-sigiriya-sri-lanka%2F&psig=AOvVaw3xCNbJHXvZG_QkMDER5IPv&ust=1763038918239000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOi2sYTW7JADFQAAAAAdAAAAABAE'],
      "sl-loc-002": ['https://www.orienthotelsl.com/wp-content/uploads/2023/01/Nine-Arch-Bridge-Ella-1200x630-1.jpg'],
      "sl-loc-003": ['https://besttimetovisitsrilanka.com/wp-content/uploads/2021/04/Kandy-and-The-Temple.jpg'],
      "sl-loc-004": ['https://www.pelago.com/img/products/LK-Sri%20Lanka/half-day-safari-at-yala-national-park-from-yala--tissamaharama/f8b14175-caf5-4a48-abf7-96922d906fce_half-day-safari-at-yala-national-park-from-yala--tissamaharama.jpg'],
      "sl-loc-005": ['https://source.unsplash.com/800x600/?galle-fort,sri-lanka'],
      "sl-loc-006": ['https://source.unsplash.com/800x600/?whale-watching,mirissa'],
      "sl-loc-007": ['https://do6raq9h04ex.cloudfront.net/sites/8/2021/07/galle-fort-1050x700-1.jpg'],
      "sl-loc-008": ['https://www.360view.lk/wp-content/uploads/2022/08/Anuradhapura-cover-scaled.jpg'],
      "sl-loc-009": ['https://travelwider.com/wp-content/uploads/2016/09/Polonnaruwa-Sri-Lanka-scaled.jpg'],
      "sl-loc-010": ['https://upload.wikimedia.org/wikipedia/commons/0/0a/Sri_Lankan_elephants_%28Elephas_maximus_maximus%29.jpg'],
      
      // Japan
      "jp-loc-001": ['https://source.unsplash.com/800x600/?fushimi-inari,kyoto'],
      "jp-loc-002": ['https://source.unsplash.com/800x600/?arashiyama-bamboo-grove'],
      "jp-loc-003": ['https://source.unsplash.com/800x600/?shibuya-crossing,tokyo'],
      "jp-loc-004": ['https://source.unsplash.com/800x600/?mount-fuji,hakone'],
      "jp-loc-005": ['https://source.unsplash.com/800x600/?hiroshima-peace-park'],
      "jp-loc-006": ['https://source.unsplash.com/800x600/?nara-park,deer'],
      "jp-loc-007": ['https://source.unsplash.com/800x600/?dotonbori,osaka'],
      "jp-loc-008": ['https://source.unsplash.com/800x600/?kinkaku-ji,golden-pavilion'],
      "jp-loc-009": ['https://source.unsplash.com/800x600/?itsukushima-shrine,torii'],
      "jp-loc-010": ['https://source.unsplash.com/800x600/?snow-monkey,nagano'],
      
      // Thailand
      "th-loc-001": ["https://images.unsplash.com/photo-1582962275424-5cb278775438?q=80&w=1935&auto=format&fit=crop"],
      "th-loc-002": ["https://images.unsplash.com/photo-1596701975713-3302d1a37a7b?q=80&w=2070&auto=format&fit=crop"],
      "th-loc-003": ["https://images.unsplash.com/photo-1620766165535-364278477610?q=80&w=1935&auto=format&fit=crop"],
      "th-loc-004": ["https://images.unsplash.com/photo-1552601369-1c93a099d356?q=80&w=2070&auto=format&fit=crop"],
      "th-loc-005": ["https://images.unsplash.com/photo-1625413346939-242371a58010?q=80&w=1964&auto=format&fit=crop"],
      "th-loc-006": ["https://source.unsplash.com/800x600/?movie,theme-park"],
      "th-loc-007": ["https://images.unsplash.com/photo-1536319159939-20f540114093?q=80&w=2070&auto=format&fit=crop"],
      "th-loc-008": ["https://images.unsplash.com/photo-1549137426-389f4b1a4613?q=80&w=2070&auto=format&fit=crop"],
      "th-loc-009": ["https://images.unsplash.com/photo-1596522538962-0f560e2e9a5d?q=80&w=1974&auto=format&fit=crop"],
      "th-loc-010": ["https://images.unsplash.com/photo-1563503200-a657e05633a5?q=80&w=1964&auto=format&fit=crop"],
      "th-loc-011": ["https://source.unsplash.com/800x600/?cabaret,show"],
      "th-loc-012": ["https://images.unsplash.com/photo-1616052737153-29f86027a2c4?q=80&w=1931&auto=format&fit=crop"],
      "th-loc-013": ["https://images.unsplash.com/photo-1593669399434-a6c8b34336c2?q=80&w=2070&auto=format&fit=crop"],
      "th-loc-014": ["https://images.unsplash.com/photo-1581132649023-e139459a7216?q=80&w=2070&auto=format&fit=crop"],
      "th-loc-015": ["https://images.unsplash.com/photo-1591942153392-14a04d5a92a2?q=80&w=2070&auto=format&fit=crop"],
      "th-loc-016": ["https://images.unsplash.com/photo-1647718320141-59157b019b88?q=80&w=2070&auto=format&fit=crop"],
      "th-loc-017": ["https://images.unsplash.com/photo-1592813589998-d36a63a56667?q=80&w=2070&auto=format&fit=crop"],
      "th-loc-018": ["https://images.unsplash.com/photo-1601736284144-55276d6b2cbe?q=80&w=1939&auto=format&fit=crop"],
      "th-loc-019": ["https://images.unsplash.com/photo-1555691179-8442a5a04f25?q=80&w=1931&auto=format&fit=crop"],
      "th-loc-020": ["https://images.unsplash.com/photo-1594254924295-8c24f6050b10?q=80&w=2070&auto=format&fit=crop"],
      "th-loc-021": ["https://source.unsplash.com/800x600/?bangkok,skyline,dinner"],
      "th-loc-022": ["https://source.unsplash.com/800x600/?bangkok,asiatique"],
      "th-loc-023": ["https://source.unsplash.com/800x600/?amusement,park,roller-coaster"],
      "th-loc-024": ["https://source.unsplash.com/800x600/?ice,sculpture"],
      "th-loc-025": ["https://images.unsplash.com/photo-1608754483803-9fe560248231?q=80&w=2070&auto=format&fit=crop"],

      // Malaysia
      "my-loc-001": ['https://source.unsplash.com/800x600/?petronas-towers,kuala-lumpur'],
      "my-loc-002": ['https://source.unsplash.com/800x600/?batu-caves,malaysia'],
      "my-loc-003": ['https://source.unsplash.com/800x600/?genting-highlands,cable-car'],
      "my-loc-004": ['https://source.unsplash.com/800x600/?sunway-lagoon,water-park'],

      // India
      "in-loc-001": ['https://source.unsplash.com/800x600/?san-thome-basilica,chennai'],
      "in-loc-002": ['https://source.unsplash.com/800x600/?marina-beach,chennai'],
      "in-loc-003": ['https://source.unsplash.com/800x600/?st-thomas-mount,chennai'],
      "in-loc-004": ['https://source.unsplash.com/800x600/?ashtalakshmi-temple,chennai'],
      "in-loc-005": ['https://source.unsplash.com/800x600/?tirupati,temple'],
      "in-loc-006": ['https://source.unsplash.com/800x600/?govindarajaswami-temple,tirupati']
    },

    // --- REVIEWS ---
    REVIEWS_DATA: [
      { name: "Aki Takahashi", avatar: "https://randomuser.me/api/portraits/women/44.jpg", country_en: "from Japan", country_si: "ජපානයේ සිට", country_ja: "日本から", quote_en: "The trip to Sri Lanka was a dream. Everything was perfectly organized, from the car to the hotels. Our guide, Sahan, was amazing!", quote_si: "ශ්‍රී ලංකා සංචාරය හීනයක් වගේ. වාහනයේ සිට හෝටල් දක්වා හැමදේම හොඳින් සංවිධානය කරලා තිබුණා. අපේ මාර්ගෝපදේශක, සහන්, හරිම පුදුමයි!", quote_ja: "スリランカへの旅行は夢のようでした。車からホテルまで、すべてが完璧に整理されていました。ガイドのサハンは素晴らしかったです！" },
      { name: "John & Emily Carter", avatar: "https://randomuser.me/api/portraits/men/32.jpg", country_en: "from USA", country_si: "ඇමරිකා එක්සත් ජනපදයේ සිට", country_ja: "アメリカから", quote_en: "We had an unforgettable time in Thailand. The floating market tour was a highlight. Highly recommend DreamStay for a hassle-free vacation.", quote_si: "අපි තායිලන්තයේ අමතක නොවන කාලයක් ගත කළා. පාවෙන වෙළඳපොළ සංචාරය විශේෂත්වයක්. කරදරයකින් තොර නිවාඩුවක් සඳහා DreamStay බෙහෙවින් නිර්දේශ කරනවා.", quote_ja: "タイで忘れられない時間を過ごしました。水上マーケットツアーはハイライトでした。手間のかからない休暇のためにドリームステイを強くお勧めします。" },
      { name: "Priya Sharma", avatar: "https://randomuser.me/api/portraits/women/68.jpg", country_en: "from India", country_si: "ඉන්දියාවේ සිට", country_ja: "インドから", quote_en: "Our family trip to Malaysia was fantastic. The kids loved the theme parks, and the food was incredible. Thank you for the wonderful memories.", quote_si: "අපේ මැලේසියාවේ පවුල් චාරිකාව හරිම අපූරුයි. ළමයි තේමා උද්‍යානවලට ආසා කළා, කෑමත් හරිම රසයි. අපූරු මතකයන්ට ස්තූතියි.", quote_ja: "マレーシアへの家族旅行は素晴らしかったです。子供たちはテーマパークを愛し、食べ物は信じられないほどでした。素晴らしい思い出をありがとう。" },
      { name: "Kenji Tanaka", avatar: "https://randomuser.me/api/portraits/men/75.jpg", country_en: "from Japan", country_si: "ජපානයේ සිට", country_ja: "日本から", quote_en: "I explored ancient cities in Sri Lanka with DreamStay. The historical knowledge of the guide was impressive. A very educational and beautiful tour.", quote_si: "මම DreamStay සමඟ ශ්‍රී ලංකාවේ පුරාණ නගර ගවේෂණය කළා. මාර්ගෝපදේශකයාගේ ඓතිහාසික දැනුම සිත් ඇදගන්නා සුළුයි. ඉතා අධ්‍යාපනික හා ලස්සන සංචාරයක්.", quote_ja: "ドリームステイでスリランカの古代都市を探検しました。ガイドの歴史的知識は印象的でした。非常に教育的で美しいツアーでした。" }
    ],
    
    // --- FAQ DATA ---
    FAQ_DATA: [
      { q_en: "What is included in a tour package?", q_si: "සංචාරක පැකේජයකට ඇතුළත් වන්නේ මොනවාද?", q_ja: "ツアーパッケージには何が含まれていますか？", a_en: "Most packages include accommodation, transportation within the country, guided tours, and specified meals. Please check the details of each package for specifics.", a_si: "බොහෝ පැකේජවලට නවාතැන්, රට තුළ ප්‍රවාහනය, මඟ පෙන්වන සංචාර සහ නිශ්චිත ආහාර වේල් ඇතුළත් වේ. කරුණාකර විස්තර සඳහා එක් එක් පැකේජයේ විස්තර පරීක්ෂා කරන්න.", a_ja: "ほとんどのパッケージには、宿泊施設、国内交通機関、ガイド付きツアー、指定された食事が含まれています。詳細については、各パッケージの詳細を確認してください。" },
      { q_en: "Can I create a custom tour plan?", q_si: "මට අභිරුචි සංචාරක සැලැස්මක් සෑදිය හැකිද?", q_ja: "カスタムツアープランを作成できますか？", a_en: "Absolutely! Click the 'Create a Custom Plan' button, and we'll work with you to design a personalized trip that fits your interests and budget.", a_si: "ඇත්ත වශයෙන්ම! 'අභිරුචි සැලැස්මක් සාදන්න' බොත්තම ක්ලික් කරන්න, අපි ඔබේ රුචිකත්වයන්ට සහ අයවැයට ගැලපෙන පුද්ගලීකරණය කළ සංචාරයක් සැලසුම් කිරීමට ඔබ සමඟ වැඩ කරන්නෙමු.", a_ja: "もちろんです！「カスタムプランを作成」ボタンをクリックしてください。お客様の興味や予算に合ったパーソナライズされた旅行を設計するために協力します。" },
      { q_en: "Do you provide visa assistance?", q_si: "ඔබ වීසා සහාය ලබා දෙනවාද?", q_ja: "ビザのサポートは提供していますか？", a_en: "Yes, we provide professional visa assistance, especially for Japan work visas. Contact us for more details about the process.", a_si: "ඔව්, අපි විශේෂයෙන් ජපන් රැකියා වීසා සඳහා වෘත්තීය වීසා සහාය ලබා දෙනවා. ක්‍රියාවලිය පිළිබඳ වැඩි විස්තර සඳහා අප හා සම්බන්ධ වන්න.", a_ja: "はい、特に日本の就労ビザについては、専門的なビザサポートを提供しています。プロセスに関する詳細については、お問い合わせください。" },
      { q_en: "What is your cancellation policy?", q_si: "ඔබේ අවලංගු කිරීමේ ප්‍රතිපත්තිය කුමක්ද?", q_ja: "キャンセルポリシーは何ですか？", a_en: "Our cancellation policy varies depending on the tour and the time of cancellation. You can find detailed information in our Terms of Service.", a_si: "අපගේ අවලංගු කිරීමේ ප්‍රතිපත්තිය සංචාරය සහ අවලංගු කරන වේලාව අනුව වෙනස් වේ. ඔබට අපගේ සේවා නියමයන්හි සවිස්තරාත්මක තොරතුරු සොයාගත හැකිය.", a_ja: "キャンセルポリシーは、ツアーとキャンセルの時期によって異なります。詳細については、利用規約で確認できます。" }
    ],

    // --- MEDIA GALLERY ---
    MEDIA_GALLERY: [
        { type: 'photo', url: 'https://source.unsplash.com/1600x900/?sri-lanka,sigiriya', title_en: "Sigiriya Rock, Sri Lanka", title_si: "සීගිරිය පර්වතය, ශ්‍රී ලංකාව", title_ja: "シーギリヤロック、スリランカ" },
        { type: 'video', url: 'https://www.youtube.com/embed/fA8e09fP2J4', thumbnailUrl: 'https://img.youtube.com/vi/fA8e09fP2J4/hqdefault.jpg', title_en: "Train Journey in Sri Lanka", title_si: "ශ්‍රී ලංකාවේ දුම්රිය ගමනක්", title_ja: "スリランカでの列車旅行" },
        { type: 'photo', url: 'https://source.unsplash.com/1600x900/?thailand,bangkok,temple', title_en: "Bangkok Temple, Thailand", title_si: "බැංකොක් විහාරය, තායිලන්තය", title_ja: "バンコク寺院、タイ" },
        { type: 'photo', url: 'https://source.unsplash.com/1600x900/?japan,fushimi-inari', title_en: "Fushimi Inari, Japan", title_si: "ෆුෂිමි ඉනාරි, ජපානය", title_ja: "伏見稲荷、日本" },
        { type: 'video', url: 'https://www.youtube.com/embed/pklegKofT8k', thumbnailUrl: 'https://img.youtube.com/vi/pklegKofT8k/hqdefault.jpg', title_en: "Discovering Malaysia", title_si: "මැලේසියාව සොයා ගැනීම", title_ja: "マレーシアを発見" },
        { type: 'photo', url: 'https://source.unsplash.com/1600x900/?malaysia,kuala-lumpur,city', title_en: "Kuala Lumpur, Malaysia", title_si: "ක්වාලාලම්පූර්, මැලේසියාව", title_ja: "クアラルンプール、マレーシア" },
        { type: 'photo', url: 'https://source.unsplash.com/1600x900/?india,taj-mahal', title_en: "Taj Mahal, India", title_si: "ටජ් මහල්, ඉන්දියාව", title_ja: "タージ・マハル、インド" },
    ],

    // --- CHATBOT ---
    CHATBOT_DATA: {
        welcome_en: "Hi there! I'm the DreamStay Assistant. How can I help you plan your dream trip today?",
        welcome_si: "ආයුබෝවන්! මම DreamStay සහායක. අද ඔබේ සිහින සංචාරය සැලසුම් කිරීමට මම ඔබට උදව් කරන්නේ කෙසේද?",
        welcome_ja: "こんにちは！私はドリームステイアシスタントです。今日の夢の旅行の計画をお手伝いできますか？",
        questions: [
            { q_en: "Tell me about your tour packages.", q_si: "ඔබේ සංචාරක පැකේජ ගැන මට කියන්න.", q_ja: "ツアーパッケージについて教えてください。", a_en: "We offer amazing tours to Sri Lanka, Thailand, Japan, Malaysia, and India. You can explore them by clicking the country tabs above!", a_si: "අපි ශ්‍රී ලංකාව, තායිලන්තය, ජපානය, මැලේසියාව සහ ඉන්දියාව සඳහා විස්මිත සංචාර පිරිනමන්නෙමු. ඉහත රට ටැබ් ක්ලික් කිරීමෙන් ඔබට ඒවා ගවේෂණය කළ හැකිය!", a_ja: "スリランカ、タイ、日本、マレーシア、インドへの素晴らしいツアーを提供しています。上の国別タブをクリックしてご覧いただけます！" },
            { q_en: "How do I create a custom plan?", q_si: "මම අභිරුචි සැලැස්මක් සාදා ගන්නේ කෙසේද?", q_ja: "カスタムプランを作成するにはどうすればよいですか？", a_en: "It's easy! Just click the 'Create a Custom Plan' button in the main section. Fill out the form, and we'll get in touch to create your perfect trip.", a_si: "එය පහසුයි! ප්‍රධාන කොටසේ ඇති 'අභිරุචි සැලැස්මක් සාදන්න' බොත්තම ක්ලික් කරන්න. පෝරමය පුරවන්න, අපි ඔබේ පරිපූර්ණ සංචාරය නිර්මාණය කිරීමට ඔබ හා සම්බන්ධ වන්නෙමු.", a_ja: "簡単です！メインセクションの「カスタムプランを作成」ボタンをクリックしてください。フォームに記入していただければ、完璧な旅行を作成するためにご連絡いたします。" },
            { q_en: "What about Japan visas?", q_si: "ජපන් වීසා ගැන කුමක් කිව හැකිද?", q_ja: "日本のビザについてはどうですか？", a_en: "We specialize in Japan work visa assistance! It's one of our key services. Please contact us directly via WhatsApp for a detailed consultation.", a_si: "අපි ජපන් රැකියා වීසා සහාය සඳහා විශේෂඥයන්! එය අපගේ ප්‍රධාන සේවාවන්ගෙන් එකකි. සවිස්තරාත්මක උපදේශනයක් සඳහා කරුණාකර WhatsApp හරහා අපව සෘජුවම සම්බන්ධ කර ගන්න.", a_ja: "日本の就労ビザのサポートを専門としています！それは私たちの主要なサービスの1つです。詳細な相談については、WhatsAppで直接お問い合わせください。" }
        ]
    },

    // --- HERO QUOTES ---
    HERO_QUOTES: {
      en: [
        "Travel like it’s another universe",
        "Crafting memories, one journey at a time",
        "Your adventure, our expertise",
        "Discover the world, rediscover yourself"
      ],
      si: [
        "වෙනත් විශ්වයක මෙන් සංචාරය කරන්න",
        "එකවර එක ගමනක්, මතකයන් නිර්මාණය කරමින්",
        "ඔබේ වික්‍රමය, අපගේ විශේෂඥතාව",
        "ලෝකය සොයා ගන්න, ඔබව නැවත සොයා ගන්න"
      ],
      ja: [
        "まるで別世界のように旅をする",
        "一度に一つの旅、思い出を創り出す",
        "あなたの冒険、私たちの専門知識",
        "世界を発見し、自分を再発見する"
      ]
    },

    // --- ALL UI TEXT STRINGS ---
    STRINGS: {
        en: {
            chooseLangTitle: "Choose Your Language",
            heroTitle: "DreamStay Tours — Travel like it’s another universe",
            createCustomPlan: "Create a Custom Plan",
            seeAllMedia: "See All Photos & Videos",
            contactWhatsApp: "Contact via WhatsApp",
            filterDashboard: "Dashboard",
            filterSriLanka: "Sri Lanka",
            filterThailand: "Thailand",
            filterJapan: "Japan",
            filterMalaysia: "Malaysia",
            filterIndia: "India",
            sponsorsTitle: "Our Valued Partners",
            reviewsTitle: "From Our Travellers",
            faqTitle: "Frequently Asked Questions",
            footerPrivacy: "Privacy Policy",
            footerTerms: "Terms of Service",
            toggleLang: "Switch Language",
            backToHome: "Back to Home",
            galleryTitle: "Our Photo & Video Gallery",
            filterAll: "All",
            filterPhotos: "Photos",
            filterVideos: "Videos",
            customPlanTitle: "Create Your Custom Dream Trip",
            formName: "Full Name",
            formTravelers: "Number of Travelers",
            formDestinations: "Desired Destinations",
            formBudget: "Budget per Person (USD)",
            formDates: "Preferred Travel Dates",
            formNotes: "Additional Notes",
            formSubmitBtn: "Get a Quote",
            whatsappMsg: (packageName) => `Hello DreamStay Tours, I'd like to know more about the "${packageName}" package.`,
            whatsappInquiry: (packageName) => `Hello, I'm interested in the "${packageName}" location. Could you provide more details?`,
            customPlanWhatsappMsg: (data) => `*Custom Plan Inquiry*\n\n*Name:* ${data.name}\n*Travelers:* ${data.travelers}\n*Destinations:* ${data.destinations}\n*Budget:* ${data.budget}\n*Dates:* ${data.dates}\n*Notes:* ${data.notes}`,
            viewPhotos: "View Traveller's Photos",
            photosBy: "Photos by {name}",
            chatbotTitle: "DreamStay Assistant",
            chatbotAskAnother: "Ask another question",
            servicesTitle: "Our Core Services",
            serviceAirTickets: "Air Tickets",
            serviceVisa: "Visa Assistance",
            serviceTransport: "Transport",
            serviceBreakfast: "Breakfast",
            contactUs: "Contact Us",
            comingSoonNotice: "Coming Soon",
        },
        si: {
            chooseLangTitle: "භාෂාව තෝරන්න",
            heroTitle: "DreamStay Tours — වෙනත් විශ්වයක මෙන් සංචාරය කරන්න",
            createCustomPlan: "අභිරුචි සැලැස්මක් සාදන්න",
            seeAllMedia: "සියලුම ඡායාරූප සහ වීඩියෝ බලන්න",
            contactWhatsApp: "WhatsApp හරහා සම්බන්ධ වන්න",
            filterDashboard: "පාලන පුවරුව",
            filterSriLanka: "ශ්‍රී ලංකාව",
            filterThailand: "තායිලන්තය",
            filterJapan: "ජපානය",
            filterMalaysia: "මැලේසියාව",
            filterIndia: "ඉන්දියාව",
            sponsorsTitle: "අපගේ වටිනා හවුල්කරුවන්",
            reviewsTitle: "අපගේ සංචාරකයින්ගෙන්",
            faqTitle: "නිතර අසන ප්‍රශ්න",
            footerPrivacy: "රහස්‍යතා ප්‍රතිපත්තිය",
            footerTerms: "සේවා කොන්දේසි",
            toggleLang: "භාෂාව මාරු කරන්න",
            backToHome: "මුල් පිටුවට ආපසු",
            galleryTitle: "අපගේ ඡායාරූප සහ වීඩියෝ ගැලරිය",
            filterAll: "සියල්ල",
            filterPhotos: "ඡායාරූප",
            filterVideos: "වීඩියෝ",
            customPlanTitle: "ඔබේ අභිරุචි සිහින චාරිකාව සාදන්න",
            formName: "සම්පූර්ණ නම",
            formTravelers: "සංචාරකයින් ගණන",
            formDestinations: "අපේක්ෂිත ගමනාන්ත",
            formBudget: "එක් පුද්ගලයෙකුට අයවැය (USD)",
            formDates: "කැමති සංචාරක දිනයන්",
            formNotes: "අමතර සටහන්",
            formSubmitBtn: "මිල ගණන් ලබා ගන්න",
            whatsappMsg: (packageName) => `ආයුබෝවන් DreamStay Tours, මම "${packageName}" පැකේජය ගැන වැඩි විස්තර දැන ගැනීමට කැමතියි.`,
            whatsappInquiry: (packageName) => `ආයුබෝවන්, මම "${packageName}" ස්ථානය ගැන උනන්දුයි. ඔබට තවත් විස්තර ලබා දිය හැකිද?`,
            customPlanWhatsappMsg: (data) => `*අභිරุචි සැලසුම් විමසුම*\n\n*නම:* ${data.name}\n*සංචාරකයින්:* ${data.travelers}\n*ගමනාන්ත:* ${data.destinations}\n*අයවැය:* ${data.budget}\n*දිනයන්:* ${data.dates}\n*සටහන්:* ${data.notes}`,
            viewPhotos: "සංචාරකයාගේ ඡායාරූප බලන්න",
            photosBy: "{name} විසින් ගන්නා ලද ඡායාරූප",
            chatbotTitle: "DreamStay සහායක",
            chatbotAskAnother: "වෙනත් ප්‍රශ්නයක් අසන්න",
            servicesTitle: "අපගේ මූලික සේවාවන්",
            serviceAirTickets: "ගුවන් ටිකට්පත්",
            serviceVisa: "වීසා සහාය",
            serviceTransport: "ප්‍රවාහනය",
            serviceBreakfast: "උදෑසන ආහාරය",
            contactUs: "අප අමතන්න",
            comingSoonNotice: "ළඟදීම",
        },
        ja: {
            chooseLangTitle: "言語を選択してください",
            heroTitle: "DreamStay Tours — まるで別世界のように旅をする",
            createCustomPlan: "カスタムプランを作成",
            seeAllMedia: "すべての写真とビデオを見る",
            contactWhatsApp: "WhatsAppで連絡",
            filterDashboard: "ダッシュボード",
            filterSriLanka: "スリランカ",
            filterThailand: "タイ",
            filterJapan: "日本",
            filterMalaysia: "マレーシア",
            filterIndia: "インド",
            sponsorsTitle: "私たちの貴重なパートナー",
            reviewsTitle: "旅行者から",
            faqTitle: "よくある質問",
            footerPrivacy: "プライバシーポリシー",
            footerTerms: "利用規約",
            toggleLang: "言語を切り替える",
            backToHome: "ホームに戻る",
            galleryTitle: "私たちの写真とビデオギャラリー",
            filterAll: "すべて",
            filterPhotos: "写真",
            filterVideos: "ビデオ",
            customPlanTitle: "カスタムドリームトリップを作成",
            formName: "フルネーム",
            formTravelers: "旅行者の数",
            formDestinations: "希望の目的地",
            formBudget: "一人当たりの予算 (USD)",
            formDates: "希望の旅行日",
            formNotes: "追加のメモ",
            formSubmitBtn: "見積もりを取得",
            whatsappMsg: (packageName) => `こんにちはDreamStay Tours、「${packageName}」パッケージについてもっと知りたいです。`,
            whatsappInquiry: (packageName) => `こんにちは、「${packageName}」の場所について興味があります。詳細を教えていただけますか？`,
            customPlanWhatsappMsg: (data) => `*カスタムプランのお問い合わせ*\n\n*名前:* ${data.name}\n*旅行者:* ${data.travelers}\n*目的地:* ${data.destinations}\n*予算:* ${data.budget}\n*日付:* ${data.dates}\n*メモ:* ${data.notes}`,
            viewPhotos: "旅行者の写真を見る",
            photosBy: "{name}による写真",
            chatbotTitle: "DreamStayアシスタント",
            chatbotAskAnother: "別の質問をする",
            servicesTitle: "私たちのコアサービス",
            serviceAirTickets: "航空券",
            serviceVisa: "ビザのサポート",
            serviceTransport: "交通手段",
            serviceBreakfast: "朝食",
            contactUs: "お問い合わせ",
            comingSoonNotice: "近日公開",
        }
    }
};