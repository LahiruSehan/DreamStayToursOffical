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

    // --- TOUR PACKAGES (10 PER COUNTRY) ---
    PACKAGES: [
      // Sri Lanka
      { "id":"sl-001", "country":"Sri Lanka", "title_en":"Ella Train & Tea Country", "title_si":"ඇල්ල දුම්රිය සහ තේ දේශය", "title_ja":"エッラ列車と紅茶の国", "price_from":"USD 350", "duration":"4D/3N", "rating":4.9, "images":[`https://picsum.photos/seed/sl1/800/600`,`https://picsum.photos/seed/sl2/800/600`], "desc_en":"Experience one of the world's most scenic train rides to Ella, hike to stunning viewpoints, and explore lush green tea plantations.", "desc_si":"ලෝකයේ සුන්දරම දුම්රිය ගමනක් වන ඇල්ල වෙත ගොස්, සිත් ඇදගන්නා දර්ශන නැරඹීමට කඳු තරණය කර, සශ්‍රීක හරිත තේ වතු ගවේෂණය කරන්න.", "desc_ja":"世界で最も風光明媚な列車の一つ、エッラへの旅を体験し、素晴らしい景色を望むハイキングを楽しみ、緑豊かな茶畑を散策しましょう。" },
      { "id":"sl-002", "country":"Sri Lanka", "title_en":"Galle Fort & Southern Beaches", "title_si":"ගාලු කොටුව සහ දකුණු වෙරළ", "title_ja":"ゴールフォートと南部ビーチ", "price_from":"USD 420", "duration":"5D/4N", "rating":4.8, "images":[`https://picsum.photos/seed/sl3/800/600`], "desc_en":"Explore the historic Dutch Fort in Galle, a UNESCO World Heritage site, and relax on the golden sand beaches of Unawatuna and Mirissa.", "desc_si":"UNESCO ලෝක උරුමයක් වන ගාල්ලේ ඓතිහාසික ලන්දේසි කොටුව ගවේෂණය කර, උණවටුන සහ මිරිස්ස රන්වන් වැලි වෙරළ තීරයේ විවේක ගන්න.", "desc_ja":"ユネスコ世界遺産であるゴールの歴史的なオランダの要塞を探索し、ウナワトゥナとミリッサの黄金の砂浜でリラックスしてください。" },
      { "id":"sl-003", "country":"Sri Lanka", "title_en":"Sigiriya Rock & Ancient Cities", "title_si":"සීගිරිය සහ පුරාණ නගර", "title_ja":"シーギリヤロックと古代都市", "price_from":"USD 480", "duration":"4D/3N", "rating":4.9, "images":[`https://picsum.photos/seed/sl4/800/600`], "desc_en":"Climb the magnificent Sigiriya Rock Fortress, explore the ancient ruins of Polonnaruwa, and visit the sacred city of Anuradhapura.", "desc_si":"අලංකාර සීගිරිය පර්වතය තරණය කරන්න, පොළොන්නරුවේ පුරාණ නටබුන් ගවේෂණය කරන්න, සහ පූජනීය අනුරාධපුර නගරය වෙත පිවිසෙන්න.", "desc_ja":"壮大なシーギリヤの岩の要塞に登り、ポロンナルワの古代遺跡を探索し、聖地アヌラーダプラを訪れます。" },
      { "id": "sl-004", "country": "Sri Lanka", "title_en": "Whale Watching in Mirissa", "title_si": "මිරිස්ස තල්මසුන් නැරඹීම", "title_ja": "ミリッサでのホエールウォッチング", "price_from": "USD 280", "duration": "2D/1N", "rating": 4.8, "images": ["https://picsum.photos/seed/sl5/800/600"], "desc_en": "Embark on an exciting boat safari from Mirissa to witness majestic blue whales and playful dolphins in their natural habitat. An unforgettable marine adventure.", "desc_si": "මිරිස්සෙන් පිටත්වන බෝට්ටු සවාරියකින් დიდ නිල් තල්මසුන් සහ සෙල්ලක්කාර ඩොල්ෆින් ඔවුන්ගේ ස්වභාවික වාසස්ථානවල දැකගන්න. අමතක නොවන සාගර වික්‍රමයකි.", "desc_ja": "ミリッサからのエキサイティングなボートサファリに乗り出し、雄大なシロナガスクジラや遊び心のあるイルカを自然の生息地で目撃しましょう。忘れられない海洋冒険です。" },
      { "id": "sl-005", "country": "Sri Lanka", "title_en": "Kandy Cultural Triangle", "title_si": "මහනුවර සංස්කෘතික ත්‍රිකෝණය", "title_ja": "キャンディ文化三角地帯", "price_from": "USD 320", "duration": "3D/2N", "rating": 4.7, "images": ["https://picsum.photos/seed/sl6/800/600"], "desc_en": "Visit the Temple of the Tooth Relic in Kandy, witness a traditional Kandyan dance performance, and explore the beautiful Peradeniya Botanical Gardens.", "desc_si": "මහනුවර දළදා මාලිගාවට පිවිසෙන්න, සාම්ප්‍රදායික උඩරට නැටුම් සංදර්ශනයක් නරඹන්න, සහ සුන්දර පේරාදෙණිය උද්භිද උද්‍යානය ගවේෂණය කරන්න.", "desc_ja": "キャンディの仏歯寺を訪れ、伝統的なキャンディアンダンスのパフォーマンスを鑑賞し、美しいペラデニヤ植物園を散策しましょう。" },
      { "id": "sl-006", "country": "Sri Lanka", "title_en": "Yala National Park Safari", "title_si": "යාල ජාතික වනෝද්‍යාන සෆාරි", "title_ja": "ヤラ国立公園サファリ", "price_from": "USD 390", "duration": "3D/2N", "rating": 4.9, "images": ["https://picsum.photos/seed/sl7/800/600"], "desc_en": "Experience the thrill of a jeep safari in Yala National Park, home to the highest density of leopards in the world. Spot elephants, crocodiles, and diverse birdlife.", "desc_si": "ලෝකයේ වැඩිම දිවි ඝනත්වයක් ඇති යාල ජාතික වනෝද්‍යානයේ ජීප් සෆාරියක උද්යෝගය අත්විඳින්න. අලි, කිඹුලන් සහ විවිධ පක්ෂි ජීවීන් නරඹන්න.", "desc_ja": "世界で最もヒョウの密度が高いヤラ国立公園で、ジープサファリのスリルを体験してください。ゾウ、ワニ、そして多様な鳥類を観察しましょう。" },
      { "id": "sl-007", "country": "Sri Lanka", "title_en": "Arugam Bay Surf & Yoga", "title_si": "ආරුගම්බේ සර්ෆ් සහ යෝගා", "title_ja": "アルガムベイのサーフィンとヨガ", "price_from": "USD 510", "duration": "6D/5N", "rating": 4.8, "images": ["https://picsum.photos/seed/sl8/800/600"], "desc_en": "Catch the perfect waves at the world-renowned Arugam Bay surf point. Combine thrilling surf sessions with relaxing yoga classes for a balanced retreat.", "desc_si": "ලෝක ප්‍රකට ආරුගම්බේ සර්ෆ් පොයින්ට්හිදී පරිපූර්ණ තරංග අල්ලන්න. සමබර විවේකයක් සඳහා උද්වේගකර සර්ෆ් සැසි ලිහිල් යෝගා පන්ති සමඟ ඒකාබද්ධ කරන්න.", "desc_ja": "世界的に有名なアルガムベイのサーフポイントで完璧な波を捉えましょう。スリリングなサーフィンセッションとリラックスできるヨガクラスを組み合わせて、バランスの取れたリトリートをお楽しみください。" },
      { "id": "sl-008", "country": "Sri Lanka", "title_en": "Jaffna Peninsula Discovery", "title_si": "යාපනය අර්ධද්වීපය සොයාගැනීම", "title_ja": "ジャフナ半島発見", "price_from": "USD 450", "duration": "4D/3N", "rating": 4.6, "images": ["https://picsum.photos/seed/sl9/800/600"], "desc_en": "Explore the unique culture and history of the northern Jaffna Peninsula. Visit ancient temples, colonial forts, and taste the distinct local cuisine.", "desc_si": "උතුරු යාපනය අර්ධද්වීපයේ අද්විතීය සංස්කෘතිය සහ ඉතිහාසය ගවේෂණය කරන්න. පුරාණ කෝවිල්, යටත් විජිත බලකොටු වෙත පිවිස, සුවිශේෂී දේශීය ආහාර රසවිඳින්න.", "desc_ja": "北部のジャフナ半島のユニークな文化と歴史を探検してください。古代の寺院や植民地時代の砦を訪れ、独特の地元料理を味わってください。" },
      { "id": "sl-009", "country": "Sri Lanka", "title_en": "Trincomalee Dolphin Watching", "title_si": "ත්‍රිකුණාමලය ඩොල්ෆින් නැරඹීම", "title_ja": "トリンコマリーのイルカウォッチング", "price_from": "USD 360", "duration": "3D/2N", "rating": 4.7, "images": ["https://picsum.photos/seed/sl10/800/600"], "desc_en": "Set sail on the beautiful east coast waters of Trincomalee to watch playful spinner dolphins. Relax on Marble Beach and visit the historic Koneswaram temple.", "desc_si": "සෙල්ලක්කාර දඟර ඩොල්ෆින් නැරඹීම සඳහා ත්‍රිකුණාමලයේ සුන්දර නැගෙනහිර වෙරළ තීරයේ යාත්‍රා කරන්න. මාබල් බීච් හි විවේක ගෙන ඓතිහාසික කෝනේශ්වරම් කෝවිලට පිවිසෙන්න.", "desc_ja": "トリンコマリーの美しい東海岸の海で帆を張り、遊び心のあるスピナードルフィンを観察しましょう。マーブルビーチでリラックスし、歴史的なコネスワラム寺院を訪れます。" },
      { "id": "sl-010", "country": "Sri Lanka", "title_en": "Kitulgala White Water Rafting", "title_si": "කිතුල්ගල සුදු ජල ඔරු පැදීම", "title_ja": "キトゥルガラのホワイトウォーターラフティング", "price_from": "USD 250", "duration": "2D/1N", "rating": 4.8, "images": ["https://picsum.photos/seed/sl11/800/600"], "desc_en": "Get your adrenaline pumping with an exciting white water rafting adventure on the Kelani River in Kitulgala, the location where 'The Bridge on the River Kwai' was filmed.", "desc_si": "'The Bridge on the River Kwai' චිත්‍රපටය රූගත කළ කිතුල්ගල කැලණි ගඟේ උද්වේගකර සුදු ජල ඔරු පැදීමේ ಸಾಹಸದಿಂದ ඔබේ ඇඩ්‍රිනලින් පොම්ප කරගන්න.", "desc_ja": "「戦場にかける橋」が撮影された場所、キトゥルガラのケラニ川でエキサイティングなホワイトウォーターラフティングアドベンチャーでアドレナリンを放出させましょう。" },
      
      // Japan
      { "id":"jp-001", "country":"Japan", "title_en":"Sakura Streets of Kyoto", "title_si":"කියෝටෝ හි සකුරා වීදියන්", "title_ja":"京都の桜並木", "price_from":"USD 499", "duration":"5D/4N", "rating":4.9, "images":[`https://picsum.photos/seed/jp1/800/600`,`https://picsum.photos/seed/jp2/800/600`], "desc_en":"Walk under vibrant pink sakura canopies in historic Kyoto, experience a traditional tea ceremony, and visit ancient temples that whisper tales of the past.", "desc_si":"කියෝටෝ හි රෝස පැහැති සකුරා යටින් ගමන් කර, සාම්ප්‍රදායික තේ උත්සවයකට සහභාගී වී, අතීතයේ කතා කියන පෞරාණික විහාරස්ථාන නරඹන්න.", "desc_ja":"歴史的な京都で鮮やかなピンクの桜の天蓋の下を歩き、伝統的な茶道を体験し、過去の物語をささやく古代の寺院を訪れます。" },
      { "id":"jp-002", "country":"Japan", "title_en":"Neon Nights in Tokyo", "title_si":"ටෝකියෝ හි නියෝන් රාත්‍රි", "title_ja":"東京のネオンナイト", "price_from":"USD 599", "duration":"4D/3N", "rating":4.7, "images":[`https://picsum.photos/seed/jp3/800/600`], "desc_en":"Dive into the electrifying energy of Tokyo after dark. Witness the famous Shibuya Crossing, explore vibrant arcades, and enjoy the city's world-class nightlife.", "desc_si":"අඳුර වැටුණු පසු ටෝකියෝවේ විදුලිබල ශක්තියට කිමිදෙන්න. සුප්‍රසිද්ධ ෂිබුයා හරස් මාර්ගය දැක, විචිත්‍රවත් ආකේඩ් ගවේෂණය කර, නගරයේ ලෝක මට්ටමේ රාත්‍රී ජීවිතය භුක්ති විඳින්න.", "desc_ja":"暗くなった後の東京の電撃的なエネルギーに飛び込んでください。有名な渋谷交差点を目の当たりにし、活気あるアーケードを探索し、街のワールドクラスのナイトライフを楽しみましょう。" },
      { "id":"jp-003", "country":"Japan", "title_en":"Hokkaido Snow & Onsen", "title_si":"හොක්කයිඩෝ හි හිම සහ 온센", "title_ja":"北海道の雪と温泉", "price_from":"USD 699", "duration":"6D/5N", "rating":4.8, "images":[`https://picsum.photos/seed/jp4/800/600`], "desc_en":"Embrace the winter wonderland of Hokkaido. Enjoy skiing on powdery snow, relax in natural hot springs (onsen), and savor delicious local cuisine.", "desc_si":"හොක්කයිඩෝවේ ශීත ඍතු ආශ්චර්යමත් දේශය වැළඳ ගන්න. කුඩු හිම මත හිම මත ලිස්සා යාමෙන් සතුටු වන්න, ස්වභාවික උණු දිය උල්පත්වල (ඔන්සෙන්) විවේක ගන්න, සහ රසවත් දේශීය ආහාර රසවිඳින්න.", "desc_ja":"北海道の冬のワンダーランドを満喫してください。パウダースノーでのスキーを楽しみ、天然温泉でリラックスし、美味しい地元料理を味わってください。" },
      { "id":"jp-004", "country":"Japan", "title_en":"Mt. Fuji & Hakone Retreat", "title_si":"ෆුජි කන්ද සහ හකෝනේ විවේකය", "title_ja":"富士山と箱根のリトリート", "price_from":"USD 750", "duration":"4D/3N", "rating":4.9, "images":[`https://picsum.photos/seed/jp5/800/600`], "desc_en":"Witness the majestic Mt. Fuji from the scenic Hakone region. Enjoy a cruise on Lake Ashi, ride the Hakone Ropeway, and relax in a traditional onsen with stunning views.", "desc_si":" мальчик scenic Hakone කලාපයෙන් დიდා Mt. Fuji බලන්න. අෂි විලෙහි යාත්‍රාවක් භුක්ති විඳින්න, Hakone Ropeway පදින්න, සහ විශ්මයජනක දසුන් සහිත සාම්ප්‍රදායික ඔන්සෙන් එකක විවේක ගන්න.", "desc_ja":"風光明媚な箱根地域から雄大な富士山をご覧ください。芦ノ湖でのクルーズを楽しみ、箱根ロープウェイに乗り、素晴らしい景色を望む伝統的な温泉でリラックスしてください。" },
      { "id":"jp-005", "country":"Japan", "title_en":"Osaka Foodie Adventure", "title_si":"ඔසාකා ආහාර රස වික්‍රමය", "title_ja":"大阪食い倒れの冒険", "price_from":"USD 450", "duration":"3D/2N", "rating":4.9, "images":[`https://picsum.photos/seed/jp6/800/600`], "desc_en":"Eat your way through Osaka, Japan's kitchen. Indulge in takoyaki, okonomiyaki, and ramen in the vibrant Dotonbori district.", "desc_si":"ජපානයේ මුළුතැන්ගෙය වන ඔසාකා හරහා ඔබේ መንገድ කන්න. විචිත්‍රවත් Dotonbori දිස්ත්‍රික්කයේ takoyaki, okonomiyaki, සහ ramen රසවිඳින්න.", "desc_ja":"日本の台所、大阪を食べ歩きましょう。活気ある道頓堀地区でたこ焼き、お好み焼き、ラーメンを堪能してください。" },
      { "id":"jp-006", "country":"Japan", "title_en":"Anime & Tech in Akihabara", "title_si":"අකිහබරා හි ඇනිමෙ සහ තාක්ෂණය", "title_ja":"秋葉原のアニメとテクノロジー", "price_from":"USD 320", "duration":"2D/1N", "rating":4.7, "images":[`https://picsum.photos/seed/jp7/800/600`], "desc_en":"Immerse yourself in the heart of otaku culture in Akihabara, Tokyo. Explore multi-story arcades, anime shops, and the latest electronics.", "desc_si":"ටෝකියෝවේ අකිහබරාහි ඔටාකු සංස්කෘතියේ හදවතෙහි ගිලී සිටින්න. බහු-මහල් ආකේඩ්, ඇනිමෙ සාප්පු සහ නවතම ඉලෙක්ට්‍රොනික උපකරණ ගවේෂණය කරන්න.", "desc_ja":"東京、秋葉原のオタク文化の中心に浸ってください。多層階のゲームセンター、アニメショップ、最新の電子機器を探検しましょう。" },
      { "id":"jp-007", "country":"Japan", "title_en":"Spiritual Koyasan Temple Stay", "title_si":"ආධ්‍යාත්මික කොයසන් විහාරස්ථානයේ නවාතැන්", "title_ja":"スピリチュアルな高野山宿坊体験", "price_from":"USD 600", "duration":"3D/2N", "rating":4.8, "images":[`https://picsum.photos/seed/jp8/800/600`], "desc_en":"Experience the tranquil life of a Buddhist monk with an overnight stay at a temple (shukubo) on Mt. Koya. Participate in morning prayers and enjoy vegetarian cuisine.", "desc_si":"කොයා කන්දේ විහාරස්ථානයක (shukubo) එක රැයක් නවාතැන් ගෙන බෞද්ධ භික්ෂුවකගේ සන්සුන් ජීවිතය අත්විඳින්න. උදෑසන වන්දනාවට සහභාගී වී නිර්මාංශ ආහාර භුක්ති විඳින්න.", "desc_ja":"高野山の宿坊に一泊し、仏教僧の静かな生活を体験してください。朝のお勤めに参加し、精進料理を楽しみましょう。" },
      { "id":"jp-008", "country":"Japan", "title_en":"Okinawa Tropical Paradise", "title_si":"ඔකිනාවා නිවර්තන පාරාදීසය", "title_ja":"沖縄のトロピカルパラダイス", "price_from":"USD 850", "duration":"6D/5N", "rating":4.7, "images":[`https://picsum.photos/seed/jp9/800/600`], "desc_en":"Discover Japan's tropical side in Okinawa. Snorkel in turquoise waters, explore unique Ryukyuan culture, and relax on stunning white-sand beaches.", "desc_si":"ඔකිනාවාහි ජපානයේ නිවර්තන පැත්ත සොයා ගන්න. ටර්කියුයිස් ජලයේ ස්නෝකර්ලිං කරන්න, අද්විතීය Ryukyuan සංස්කෘතිය ගවේෂණය කරන්න, සහ විශ්මයජනක සුදු-වැලි වෙරළ තීරයන්හි විවේක ගන්න.", "desc_ja":"沖縄で日本のトロピカルな側面を発見してください。ターコイズブルーの海でシュノーケリングをし、ユニークな琉球文化を探索し、素晴らしい白い砂浜でリラックスしましょう。" },
      { "id":"jp-009", "country":"Japan", "title_en":"Hiroshima Peace Memorial", "title_si":"හිරෝෂිමා සාම ස්මාරකය", "title_ja":"広島平和記念公園", "price_from":"USD 410", "duration":"3D/2N", "rating":4.9, "images":[`https://picsum.photos/seed/jp10/800/600`], "desc_en":"A sobering and educational journey to Hiroshima's Peace Memorial Park and Museum. Reflect on history and visit the beautiful island of Miyajima with its floating torii gate.", "desc_si":"හිරෝෂිමාවේ සාම අනුสรණ උද්‍යානය සහ කෞතුකාගාරය වෙත සංවේදී සහ අධ්‍යාපනික ගමනක්. ඉතිහාසය ගැන මෙනෙහි කර, එහි පාවෙන ටොරී දොරටුව සහිත මියාජිමා හි සුන්දර දිවයිනට පිවිසෙන්න.", "desc_ja":"広島の平和記念公園と資料館への、心に響く教育的な旅。歴史に思いを馳せ、浮かぶ鳥居で有名な美しい宮島を訪れます。" },
      { "id":"jp-010", "country":"Japan", "title_en":"Japanese Alps Discovery", "title_si":"ජපන් ඇල්ප්ස් සොයාගැනීම", "title_ja":"日本アルプス発見", "price_from":"USD 920", "duration":"7D/6N", "rating":4.8, "images":[`https://picsum.photos/seed/jp11/800/600`], "desc_en":"Trek through the stunning scenery of the Japanese Alps. Visit historic villages like Shirakawa-go, enjoy breathtaking mountain views, and experience rural Japan.", "desc_si":"ජපන් ඇල්ප්ස් හි විශ්මයජනක දර්ශන හරහා ගමන් කරන්න. Shirakawa-go වැනි ඓතිහාසික ගම්මාන වෙත පිවිස, හුස්ම හිරවන කඳු දර්ශන භුක්ති විඳ, ග්‍රාමීය ජපානය අත්විඳින්න.", "desc_ja":"日本のアルプスの素晴らしい景色の中をトレッキングします。白川郷のような歴史的な村を訪れ、息をのむような山の景色を楽しみ、日本の田舎を体験してください。" },
      
      // Thailand
      { "id":"th-001","country":"Thailand","title_en":"Bangkok Temples & Street Food","title_si":"බැංකොක් විහාර සහ වීදි ආහාර","title_ja":"バンコクの寺院と屋台料理", "price_from":"USD 399","duration":"4D/3N","rating":4.6,"images":[`https://picsum.photos/seed/th1/800/600`], "desc_en":"Explore the majestic temples of Bangkok, dive into the world-famous street food scene, and experience the unique charm of a floating market.", "desc_si":"බැංකොක් නගරයේ අලංකාර විහාරස්ථාන ගවේෂණය කරන්න, ලෝක ප්‍රසිද්ධ වීදි ආහාර දර්ශනයට කිමිදෙන්න, සහ පාවෙන වෙළඳපොළක ඇති අද්විතීය ආකර්ෂණය අත්විඳින්න.", "desc_ja":"バンコクの壮大な寺院を探索し、世界的に有名な屋台料理シーンに飛び込み、水上マーケットのユニークな魅力を体験してください。" },
      { "id":"th-002","country":"Thailand","title_en":"Phuket Beach Chill","title_si":"පුකට් වෙරළේ විවේකය","title_ja":"プーケットのビーチでリラックス", "price_from":"USD 459","duration":"5D/4N","rating":4.7,"images":[`https://picsum.photos/seed/th2/800/600`], "desc_en":"Relax on the pristine white-sand beaches of Phuket. Go island hopping across the Andaman Sea and snorkel in crystal-clear turquoise waters.", "desc_si":"පුකට්හි සුදු වැලි සහිත වෙරළ තීරයේ විවේක ගන්න. අන්දමන් මුහුද හරහා දූපත් වෙත ගොස්, පැහැදිලි ටර්කියුයිස් ජලයේ ස්නෝකර්ලිං කරන්න.", "desc_ja":"プーケットの真っ白な砂浜でリラックスしてください。アンダマン海をアイランドホッピングし、透き通ったターコイズブルーの海でシュノーケリングを楽しみましょう。" },
      { "id":"th-003","country":"Thailand","title_en":"Chiang Mai Elephant Sanctuary","title_si":"චියැං මායි අලි අභයභූමිය","title_ja":"チェンマイのエレファントサンクチュアリ", "price_from":"USD 349","duration":"3D/2N","rating":4.8,"images":[`https://picsum.photos/seed/th3/800/600`], "desc_en":"Connect with gentle giants at an ethical elephant sanctuary in Chiang Mai. Learn about conservation, help care for the elephants, and trek through lush jungles.", "desc_si":"චියැං මායි හි සදාචාරාත්මක අලි අභයභූමියකදී මෘදු යෝධයන් සමඟ සම්බන්ධ වන්න. සංරක්ෂණය ගැන ඉගෙන ගන්න, අලින් රැකබලා ගැනීමට උදව් කරන්න, සහ සශ්‍රීක වනාන්තර හරහා ගමන් කරන්න.", "desc_ja":"チェンマイの倫理的な象の聖域で、穏やかな巨人たちと触れ合いましょう。保護について学び、象の世話を手伝い、緑豊かなジャングルをトレッキングします。" },
      { "id":"th-004","country":"Thailand","title_en":"Ayutthaya Ancient City Tour","title_si":"අයුත්තායා පුරාණ නගර සංචාරය", "title_ja":"アユタヤ古代都市ツアー", "price_from":"USD 299", "duration":"2D/1N","rating":4.7, "images":[`https://picsum.photos/seed/th4/800/600`], "desc_en":"Step back in time at the UNESCO World Heritage site of Ayutthaya. Explore ancient temple ruins, marvel at giant Buddha statues, and learn about the history of the former Siamese kingdom.", "desc_si":"UNESCO ලෝක උරුම අඩවියක් වන අයුත්තායාහි අතීතයට පිය නගන්න. පුරාණ විහාරස්ථාන නටබුන් ගවේෂණය කරන්න, යෝධ බුද්ධ ප්‍රතිමා ಕಂಡು களியுங்கள், සහ පැරැණි සියම් රාජධානියේ ඉතිහාසය ගැන ඉගෙන ගන්න.", "desc_ja":"ユネスコ世界遺産のアユタヤで過去にタイムスリップ。古代の寺院の遺跡を探索し、巨大な仏像に驚嘆し、かつてのシャム王国の歴史について学びましょう。" },
      { "id":"th-005","country":"Thailand","title_en":"Krabi Rock Climbing Adventure","title_si":"ක්‍රාබි පාෂාණ නැගීමේ වික්‍රමය","title_ja":"クラビのロッククライミングアドベンチャー", "price_from":"USD 520", "duration":"4D/3N","rating":4.8, "images":[`https://picsum.photos/seed/th5/800/600`], "desc_en":"Challenge yourself with rock climbing on the stunning limestone karsts of Railay Beach, Krabi. Suitable for all levels, from beginners to experienced climbers.", "desc_si":"ක්‍රාබිහි Railay වෙරළේ විශ්මයජනක හුණුගල් කඳු මත පාෂාණ නැගීමෙන් ඔබටම අභියෝග කරන්න. ආරම්භකයින්ගේ සිට පළපුරුදු කඳු නගින්නන් දක්වා සියලුම මට්ටම් සඳහා සුදුසුය.", "desc_ja":"クラビのライレイビーチの見事な石灰岩のカルストでロッククライミングに挑戦しましょう。初心者から経験豊富なクライマーまで、すべてのレベルに適しています。" },
      { "id":"th-006","country":"Thailand","title_en":"Koh Samui Island Relaxation","title_si":"කොහ් සමුයි දූපත් විවේකය","title_ja":"サムイ島でのリラクゼーション", "price_from":"USD 650", "duration":"6D/5N","rating":4.6, "images":[`https://picsum.photos/seed/th6/800/600`], "desc_en":"Unwind on the beautiful island of Koh Samui. Enjoy pristine beaches, luxury spas, and vibrant nightlife. Perfect for a relaxing getaway.", "desc_si":"කොහ් සමුයි හි සුන්දර දිවයිනේ විවේක ගන්න. පිරිසිදු වෙරළ, සුඛෝපභෝගී ස්පා, සහ විචිත්‍රවත් රාත්‍රී ජීවිතය භුක්ති විඳින්න. විවේකී නිවාඩුවක් සඳහා පරිපූර්ණයි.", "desc_ja":"美しいサムイ島でリラックスしてください。手付かずのビーチ、豪華なスパ、活気あるナイトライフをお楽しみください。リラックスした休暇に最適です。" },
      { "id":"th-007","country":"Thailand","title_en":"Chiang Rai White Temple & Golden Triangle","title_si":"චියැං රායි සුදු පන්සල සහ ස්වර්ණමය ත්‍රිකෝණය","title_ja":"チェンライのホワイトテンプルとゴールデントライアングル", "price_from":"USD 410", "duration":"3D/2N","rating":4.7, "images":[`https://picsum.photos/seed/th7/800/600`], "desc_en":"Visit the breathtaking modern White Temple (Wat Rong Khun) in Chiang Rai and explore the Golden Triangle, where Thailand, Laos, and Myanmar meet.", "desc_si":"චියැං රායි හි විශ්මයජනක නූතන සුදු පන්සල (Wat Rong Khun) වෙත පිවිස, තායිලන්තය, ලාඕසය සහ මියන්මාරය හමුවන ස්වර්ණමය ත්‍රිකෝණය ගවේෂණය කරන්න.", "desc_ja":"チェンライの息をのむような現代的なホワイトテンプル（ワット・ロンクン）を訪れ、タイ、ラオス、ミャンマーが交わるゴールデントライアングルを探索します。" },
      { "id":"th-008","country":"Thailand","title_en":"Pai Canyon & Hot Springs","title_si":"පායි කැනියොන් සහ උණු දිය උල්පත්","title_ja":"パーイキャニオンと温泉", "price_from":"USD 320", "duration":"3D/2N","rating":4.5, "images":[`https://picsum.photos/seed/th8/800/600`], "desc_en":"Discover the laid-back town of Pai in Northern Thailand. Hike through the scenic Pai Canyon, relax in natural hot springs, and enjoy the bohemian atmosphere.", "desc_si":"උතුරු තායිලන්තයේ පායි හි සැහැල්ලු නගරය සොයා ගන්න. දර්ශනීය පායි කැනියොන් හරහා ගමන් කරන්න, ස්වභාවික උණු දිය උල්පත්වල විවේක ගන්න, සහ බොහීමියානු වාතාවරණය භුක්ති විඳින්න.", "desc_ja":"タイ北部ののんびりした町、パーイを発見してください。風光明媚なパーイキャニオンをハイキングし、天然温泉でリラックスし、ボヘミアンな雰囲気を楽しみましょう。" },
      { "id":"th-009","country":"Thailand","title_en":"Kanchanaburi River Kwai History","title_si":"කන්චනබුරි ක්වායි ගඟේ ඉතිහාසය","title_ja":"カンチャナブリのクウェー川の歴史", "price_from":"USD 280", "duration":"2D/1N","rating":4.6, "images":[`https://picsum.photos/seed/th9/800/600`], "desc_en":"Learn about the history of the Death Railway and the Bridge on the River Kwai in Kanchanaburi. A poignant and educational trip into World War II history.", "desc_si":"කන්චනබුරිහි මරණයේ දුම්රිය මාර්ගය සහ ක්වායි ගඟේ පාලම පිළිබඳ ඉතිහාසය ගැන ඉගෙන ගන්න. දෙවන ලෝක යුද්ධ ඉතිහාසය වෙත සංවේදී සහ අධ්‍යාපනික චාරිකාවක්.", "desc_ja":"カンチャナブリで死の鉄道とクウェー川にかかる橋の歴史について学びましょう。第二次世界大戦の歴史への、心に響く教育的な旅です。" },
      { "id":"th-010","country":"Thailand","title_en":"Khao Sok National Park Jungle Safari","title_si":"ඛාඕ සොක් ජාතික වනෝද්‍යාන වන සෆාරි","title_ja":"カオソック国立公園ジャングルサファリ", "price_from":"USD 480", "duration":"4D/3N","rating":4.9, "images":[`https://picsum.photos/seed/th10/800/600`], "desc_en":"Explore one of the world's oldest rainforests in Khao Sok National Park. Stay in a floating bungalow on Cheow Lan Lake and spot exotic wildlife.", "desc_si":"ලෝකයේ පැරණිතම වැසි වනාන්තරවලින් එකක් වන ඛාඕ සොක් ජාතික වනෝද්‍යානය ගවේෂණය කරන්න. Cheow Lan විලෙහි පාවෙන බංගලාවක නවාතැන් ගෙන විදේශීය වන සතුන් නරඹන්න.", "desc_ja":"世界最古の熱帯雨林の一つ、カオソック国立公園を探検しましょう。チャオラン湖に浮かぶバンガローに滞在し、エキゾチックな野生生物を観察します。" },
      
      // Malaysia
      { "id":"my-001","country":"Malaysia","title_en":"Kuala Lumpur Culture & Food","title_si":"ක්වාලාලම්පූර් සංස්කෘතිය සහ ආහාර","title_ja":"クアラルンプールの文化と食","price_from":"USD 429","duration":"4D/3N","rating":4.5,"images":[`https://picsum.photos/seed/my1/800/600`], "desc_en":"Discover the vibrant mix of culture and cuisine in Kuala Lumpur. Visit the iconic Petronas Towers, explore bustling street food markets, and experience the city's unique charm.", "desc_si":"ක්වාලාලම්පූර්හි සංස්කෘතියේ සහ ආහාරවල විචිත්‍රවත් මිශ්‍රණය සොයා ගන්න. සුප්‍රසිද්ධ පෙට්‍රෝනාස් කුළුණු වෙත පිවිසෙන්න, කාර්යබහුල වීදි ආහාර වෙළඳපොළවල් ගවේෂණය කරන්න, සහ නගරයේ අද්විතීය ආකර්ෂණය අත්විඳින්න.", "desc_ja":"クアラルンプールで文化と料理の活気あるミックスを発見してください。象徴的なペトロナスツインタワーを訪れ、賑やかな屋台市場を探索し、街のユニークな魅力を体験してください。" },
      { "id":"my-002","country":"Malaysia","title_en":"Langkawi Rainforest Escape","title_si":"ලangkawi වැසි වනාන්තරයෙන් පැන යාම","title_ja":"ランカウイの熱帯雨林エスケープ", "price_from":"USD 499","duration":"5D/4N","rating":4.6,"images":[`https://picsum.photos/seed/my2/800/600`], "desc_en":"Escape to the natural paradise of Langkawi. Ride the famous cable car for breathtaking views, explore ancient rainforests, and relax on stunning beaches.", "desc_si":"ලangkawi හි ස්වභාවික පාරාදීසයට පැන යන්න. විශ්මයජනක දසුන් සඳහා සුප්‍රසිද්ධ කේබල් කාර් රථයේ ගමන් කරන්න, පුරාණ වැසි වනාන්තර ගවේෂණය කරන්න, සහ සිත් ඇදගන්නාසුළු වෙරළ තීරයන්හි විවේක ගන්න.", "desc_ja":"ランカウイの自然の楽園へエスケープ。有名なケーブルカーに乗って息をのむような景色を楽しみ、古代の熱帯雨林を探索し、素晴らしいビーチでリラックスしてください。" },
      { "id":"my-003","country":"Malaysia","title_en":"Cameron Highlands Tea Trails","title_si":"කැමරන් හයිලන්ඩ්ස් තේ මංපෙත්","title_ja":"キャメロンハイランドの茶畑", "price_from":"USD 379","duration":"3D/2N","rating":4.7,"images":[`https://picsum.photos/seed/my3/800/600`], "desc_en":"Journey into the cool, rolling hills of the Cameron Highlands. Walk through lush tea plantations, enjoy the refreshing climate, and hike stunning nature trails.", "desc_si":"කැමරන් හයිලන්ඩ්ස්හි සිසිල්, කඳුකර ප්‍රදේශයට ගමනක් යන්න. සශ්‍රීක තේ වතු හරහා ඇවිදින්න, ප්‍රබෝධමත් දේශගුණය භුක්ති විඳින්න, සහ විශ්මයජනක ස්වභාවික මංපෙත්වල ගමන් කරන්න.", "desc_ja":"キャメロンハイランドの涼しく起伏のある丘への旅。緑豊かな茶畑を散策し、さわやかな気候を楽しみ、素晴らしい自然の小道をハイキングしてください。" },
      { "id":"my-004","country":"Malaysia","title_en":"Penang Street Art & Food","title_si":"පිනෑන්ග් වීදි කලාව සහ ආහාර", "title_ja":"ペナンのストリートアートとグルメ", "price_from":"USD 350", "duration":"3D/2N","rating":4.8, "images":[`https://picsum.photos/seed/my4/800/600`], "desc_en":"Explore the UNESCO-listed George Town in Penang, famous for its interactive street art and legendary food scene. A paradise for art lovers and foodies alike.", "desc_si":"පිනෑන්ග් හි UNESCO ලැයිස්තුගත ජෝර්ජ් ටවුන් ගවේෂණය කරන්න, එහි අන්තර්ක්‍රියාකාරී වීදි කලාව සහ ජනප්‍රිය ආහාර දර්ශනය සඳහා ප්‍රසිද්ධය. කලා ලෝලීන්ට සහ රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති" },
      { "id":"my-005","country":"Malaysia","title_en":"Borneo Orangutan Encounter","title_si":"බෝර්නියෝ ඔරංඔටන් හමුවීම","title_ja":"ボルネオのオランウータンとの出会い","price_from":"USD 720","duration":"6D/5N","rating":4.9, "images":[`https://picsum.photos/seed/my5/800/600`], "desc_en":"Journey to the heart of Borneo to see orangutans in their natural habitat at the Sepilok Rehabilitation Centre. A truly humbling wildlife experience.", "desc_si":"සෙපිලොක් පුනරුත්ථාපන මධ්‍යස්ථානයේදී ඔවුන්ගේ ස්වභාවික වාසභූමියේ ඔරංඔටන් දැකීමට බෝර්නියෝවේ හදවතට ගමනක් යන්න. සැබවින්ම නිහතමානී වනජීවී අත්දැකීමක්.", "desc_ja":"セピロックリハビリテーションセンターで自然の生息地にいるオランウータンを見るために、ボルネオの中心への旅。本当に謙虚な野生生物体験。" },
      { "id":"my-006","country":"Malaysia","title_en":"Taman Negara Jungle Trek","title_si":"ටමාන් නෙගරා වන ගමන","title_ja":"タマン・ネガラ国立公園ジャングルトレッキング", "price_from":"USD 550","duration":"4D/3N","rating":4.7, "images":[`https://picsum.photos/seed/my6/800/600`], "desc_en":"Explore one of the world's oldest deciduous rainforests in Taman Negara. Walk on the world's longest canopy walkway and discover diverse flora and fauna.", "desc_si":"ලෝකයේ පැරණිතම පතනශීලී වැසි වනාන්තරවලින් එකක් වන ටමාන් නෙගරා හි ගවේෂණය කරන්න. ලෝකයේ දිගම වියන් මාවතේ ඇවිද ගොස් විවිධ ශාක හා සත්ත්ව විශේෂ සොයා ගන්න.", "desc_ja":"タマン・ネガラで世界最古の落葉性熱帯雨林の一つを探検してください。世界最長のキャノピーウォークを歩き、多様な動植物を発見してください。" },
      { "id":"my-007","country":"Malaysia","title_en":"Malacca Historic City Tour","title_si":"මලක්කා ඓතිහාසික නගර සංචාරය","title_ja":"マラッカ歴史都市ツアー", "price_from":"USD 290","duration":"2D/1N","rating":4.6, "images":[`https://picsum.photos/seed/my7/800/600`], "desc_en":"Step into a blend of cultures in the UNESCO World Heritage city of Malacca. Explore colonial architecture, vibrant temples, and the famous Jonker Street Night Market.", "desc_si":"UNESCO ලෝක උරුම නගරයක් වන මලක්කාවේ සංස්කෘතීන්ගේ මිශ්‍රණයකට පිවිසෙන්න. යටත් විජිත ගෘහ නිර්මාණ ශිල්පය, විචිත්‍රවත් කෝවිල් සහ සුප්‍රසිද්ධ ජොන්කර් වීදි රාත්‍රී වෙළඳපොළ ගවේෂණය කරන්න.", "desc_ja":"ユネスコ世界遺産の都市マラッカで文化の融合に足を踏み入れてください。植民地時代の建築、活気ある寺院、有名なジョンカーストリートナイトマーケットを探索してください。" },
      { "id":"my-008","country":"Malaysia","title_en":"Tioman Island Diving","title_si":"ටියෝමන් දූපතේ කිමිදීම","title_ja":"ティオマン島ダイビング", "price_from":"USD 680","duration":"5D/4N","rating":4.8, "images":[`https://picsum.photos/seed/my8/800/600`], "desc_en":"Discover the vibrant underwater world of Tioman Island. With its clear waters and rich marine life, it's a perfect destination for diving and snorkeling enthusiasts.", "desc_si":"ටියෝමන් දූපතේ විචිත්‍රවත් දිය යට ලෝකය සොයා ගන්න. එහි පැහැදිලි ජලය සහ පොහොසත් සමුද්‍ර ජීවීන් සමඟ, එය කිමිදුම් සහ ස්නෝකර්ලිං ලෝලීන් සඳහා පරිපූර්ණ ගමනාන්තයකි.", "desc_ja":"ティオマン島の活気ある水中世界を発見してください。透明な水と豊かな海洋生物で、ダイビングやシュノーケリング愛好家にとって完璧な目的地です。" },
      { "id":"my-009","country":"Malaysia","title_en":"Genting Highlands Fun","title_si":"ගෙන්ටින් හයිලන්ඩ්ස් විනෝදය","title_ja":"ゲンティンハイランドの楽しみ", "price_from":"USD 310","duration":"2D/1N","rating":4.4, "images":[`https://picsum.photos/seed/my9/800/600`], "desc_en":"Experience the cool mountain air and entertainment of Genting Highlands. Enjoy theme parks, shopping, casinos, and a scenic cable car ride.", "desc_si":"ගෙන්ටින් හයිලන්ඩ්ස්හි සිසිල් කඳුකර වාතය සහ විනෝදාස්වාදය අත්විඳින්න. තේමා උද්‍යාන, සාප්පු සවාරි, කැසිනෝ, සහ දර්ශනීය කේබල් කාර් ගමනක් භුක්ති විඳින්න.", "desc_ja":"ゲンティンハイランドの涼しい山の空気とエンターテイメントを体験してください。テーマパーク、ショッピング、カジノ、そして風光明媚なケーブルカーをお楽しみください。" },
      { "id":"my-010","country":"Malaysia","title_en":"Batu Caves & Cultural Tour","title_si":"බටු ලෙන් සහ සංස්කෘතික සංචාරය","title_ja":"バトゥ洞窟と文化ツアー", "price_from":"USD 250","duration":"1D","rating":4.7, "images":[`https://picsum.photos/seed/my10/800/600`], "desc_en":"Visit the iconic Batu Caves with its giant golden statue of Lord Murugan. Climb the 272 steps to the temple cave and learn about Hindu culture in Malaysia.", "desc_si":"මුරුගන් දෙවියන්ගේ යෝධ රන් පිළිමය සහිත සුප්‍රසිද්ධ බටු ලෙන් වෙත පිවිසෙන්න. පියගැට 272 ක් නැග පන්සල් ගුහාවට ගොස් මැලේසියාවේ හින්දු සංස්කෘතිය ගැන ඉගෙන ගන්න.", "desc_ja":"ムルガン卿の巨大な黄金像がある象徴的なバトゥ洞窟を訪れてください。272段の階段を登って寺院の洞窟に行き、マレーシアのヒンドゥー文化について学びましょう。" },
      
      // India
      { "id":"in-001", "country":"India", "title_en":"Golden Triangle Adventure", "title_si":"ස්වර්ණමය ත්‍රිකෝණයේ වික්‍රමය", "title_ja":"ゴールデントライアングル冒険", "price_from":"USD 550", "duration":"6D/5N", "rating":4.7, "images":[`https://picsum.photos/seed/in1/800/600`], "desc_en":"Explore the iconic Golden Triangle - Delhi, Agra, and Jaipur. Witness the majestic Taj Mahal, explore historic forts, and immerse yourself in the vibrant culture of Rajasthan.", "desc_si":"දිල්ලි, අග්‍රා, සහ ජායිපූර් යන ස්වර්ණමය ත්‍රිකෝණය ගවේෂණය කරන්න. අලංකාර ටජ් මහල් බලන්න, ඓතිහාසික බලකොටු ගවේෂණය කරන්න, සහ රාජස්ථානයේ විචිත්‍රවත් සංස්කෘතියේ ගිලී සිටින්න.", "desc_ja":"象徴的なゴールデントライアングル - デリー、アグラ、ジャイプールを探索します。壮大なタージ・マハルを目撃し、歴史的な砦を探索し、ラジャスタンの活気ある文化に浸ってください。" },
      { "id":"in-002","country":"India","title_en":"Kerala Backwaters & Ayurveda","title_si":"කේරළ පසුබිම් ජලය සහ ආයුර්වේදය","title_ja":"ケララ州のバックウォーターとアーユルヴェーダ", "price_from":"USD 499","duration":"5D/4N","rating":4.8,"images":[`https://picsum.photos/seed/in2/800/600`], "desc_en":"Experience tranquility in the serene backwaters of Kerala. Glide along in a traditional houseboat, rejuvenate with Ayurvedic treatments, and explore fragrant spice plantations.", "desc_si":"කේරළයේ සන්සුන් පසුබිම් ජලයේ ශාන්තිය අත්විඳින්න. සාම්ප්‍රදායික පාරු නිවසක ගමන් කරන්න, ආයුර්වේද ප්‍රතිකාරවලින් ප්‍රබෝධමත් වන්න, සහ සුවඳවත් කුළුබඩු වතු ගවේෂණය කරන්න.", "desc_ja":"ケララ州の静かなバックウォーターで静けさを体験してください。伝統的なハウスボートで滑るように進み、アーユルヴェーダ治療で若返り、香り高いスパイスプランテーションを探索します。" },
      { "id":"in-003","country":"India","title_en":"Goa Beach Party Vibes","title_si":"ගෝවා වෙරළ සාදයේ හැඟීම්","title_ja":"ゴアのビーチパーティーバイブ", "price_from":"USD 329","duration":"3D/2N","rating":4.4,"images":[`https://picsum.photos/seed/in3/800/600`], "desc_en":"Soak up the sun and vibrant party scene in Goa. Relax on golden beaches by day and dance the night away at lively beach clubs, enjoying delicious seafood.", "desc_si":"ගෝවේ හිරු එළිය සහ විචිත්‍රවත් සාද දර්ශනය පොඟවා ගන්න. දිවා කාලයේ රන්වන් වෙරළ තීරයන්හි විවේක ගන්න, සහ සජවී වෙරළ සමාජ ශාලාවල රාත්‍රිය පුරා නටමින්, රසවත් මුහුදු ආහාර භුක්ති විඳින්න.", "desc_ja":"ゴアで太陽と活気あるパーティーシーンを満喫してください。日中は黄金のビーチでリラックスし、夜は活気のあるビーチクラブで踊り明かし、おいしいシーフードを楽しみましょう。" },
      { "id":"in-004", "country":"India", "title_en":"Varanasi Spiritual Journey", "title_si":"වාරණාසි අධ්‍යාත්මික ගමන", "title_ja":"バラナシのスピリチュアルな旅", "price_from":"USD 480", "duration":"4D/3N", "rating":4.9, "images":[`https://picsum.photos/seed/in4/800/600`], "desc_en":"Embark on a spiritual journey in the ancient city of Varanasi. Witness the mesmerizing Ganga Aarti ceremony on the banks of the Ganges and explore sacred temples.", "desc_si":"පුරාණ වාරණාසි නගරයේ අධ්‍යාත්මික ගමනක් ආරම්භ කරන්න. ගංගා නදී ඉවුරේ සිත් ඇදගන්නාසුළු ගංගා ආරතී උත්සවය 목격 කර පූජනීය විහාරස්ථාන ගවේෂණය කරන්න.", "desc_ja":"古代都市バラナシでスピリチュアルな旅に出かけましょう。ガンジス川のほとりで魅惑的なガンガー・アールティの儀式を目撃し、神聖な寺院を探索してください。" },
      { "id":"in-005", "country":"India", "title_en":"Himalayan Trek in Ladakh", "title_si":"ලඩාක් හි හිමාලයානු ගමන", "title_ja":"ラダックでのヒマラヤトレッキング", "price_from":"USD 950", "duration":"8D/7N", "rating":4.9, "images":[`https://picsum.photos/seed/in5/800/600`], "desc_en":"Challenge yourself with a high-altitude trek in the stunning landscapes of Ladakh. Witness dramatic mountain ranges, ancient monasteries, and unique Tibetan culture.", "desc_si":"ලඩාක්හි විශ්මයජනක භූ දර්ශනවල උස් උන්නතාංශ ගමනකින් ඔබටම අභියෝග කරන්න. නාටකීය කඳු වැටි, පුරාණ ආරාම සහ අද්විතීය ටිබෙට් සංස්කෘතිය 목격 කරන්න.", "desc_ja":"ラダックの素晴らしい風景の中で高地トレッキングに挑戦してください。ドラマチックな山脈、古代の僧院、そしてユニークなチベット文化を目撃しましょう。" },
      { "id":"in-006", "country":"India", "title_en":"Rishikesh Yoga & Meditation", "title_si":"රිෂිකේෂ් යෝගා සහ භාවනා", "title_ja":"リシケシのヨガと瞑想", "price_from":"USD 420", "duration":"5D/4N", "rating":4.8, "images":[`https://picsum.photos/seed/in6/800/600`], "desc_en":"Find your inner peace in the yoga capital of the world, Rishikesh. Practice yoga and meditation by the holy Ganges river and visit spiritual ashrams.", "desc_si":"ලෝකයේ යෝගා අගනුවර වන රිෂිකේෂ්හි ඔබේ අභ්‍යන්තර සාමය සොයා ගන්න. පූජනීය ගංගා නදිය අසබඩ යෝගා සහ භාවනා පුහුණු වී අධ්‍යාත්මික ආශ්‍රම වෙත පිවිසෙන්න.", "desc_ja":"世界のヨガの首都、リシケシで内なる平和を見つけましょう。聖なるガンジス川のほとりでヨガと瞑想を実践し、スピリチュアルなアシュラムを訪れます。" },
      { "id":"in-007", "country":"India", "title_en":"Mumbai Bollywood Experience", "title_si":"මුම්බායි බොලිවුඩ් අත්දැකීම", "title_ja":"ムンバイのボリウッド体験", "price_from":"USD 380", "duration":"3D/2N", "rating":4.5, "images":[`https://picsum.photos/seed/in7/800/600`], "desc_en":"Get a behind-the-scenes look at the vibrant world of Bollywood in Mumbai. Tour a film studio, watch a live shooting, and maybe even join a Bollywood dance class.", "desc_si":"මුම්බායිහි විචිත්‍රවත් බොලිවුඩ් ලෝකයේ තිරය පිටුපස දර්ශනයක් ලබා ගන්න. චිත්‍රපට චිත්‍රාගාරයක සංචාරය කරන්න, සජීවී රූගත කිරීමක් නරඹන්න, සමහරවිට බොලිවුඩ් නර්තන පන්තියකට පවා සම්බන්ධ වන්න.", "desc_ja":"ムンバイで活気あるボリウッドの世界の舞台裏をご覧ください。映画スタジオをツアーし、ライブ撮影を鑑賞し、ボリウッドダンスクラスに参加することもできます。" },
      { "id":"in-008", "country":"India", "title_en":"Andaman Islands Scuba Diving", "title_si":"අන්දමන් දූපත් ස්කූබා කිමිදීම", "title_ja":"アンダマン諸島のスキューバダイビング", "price_from":"USD 880", "duration":"7D/6N", "rating":4.9, "images":[`https://picsum.photos/seed/in8/800/600`], "desc_en":"Explore the pristine coral reefs and vibrant marine life of the Andaman Islands. A world-class destination for scuba diving and snorkeling.", "desc_si":"අන්දමන් දූපත්වල පිරිසිදු කොරල් පර සහ විචිත්‍රවත් සමුද්‍ර ජීවීන් ගවේෂණය කරන්න. ස්කූබා කිමිදීම සහ ස්නෝකර්ලිං සඳහා ලෝක මට්ටමේ ගමනාන්තයක්.", "desc_ja":"アンダマン諸島の pristine なサンゴ礁と活気ある海洋生物を探検してください。スキューバダイビングとシュノーケリングの世界クラスの目的地です。" },
      { "id":"in-009", "country":"India", "title_en":"Udaipur, City of Lakes", "title_si":"උදයිපූර්, විල්වල නගරය", "title_ja":"ウダイプル、湖の街", "price_from":"USD 610", "duration":"4D/3N", "rating":4.7, "images":[`https://picsum.photos/seed/in9/800/600`], "desc_en":"Experience the romance of Udaipur, the 'Venice of the East'. Enjoy a boat ride on Lake Pichola, visit the magnificent City Palace, and explore its charming streets.", "desc_si":"'නැගෙනහිර වෙනීසිය' වන උදයිපූර්හි රොමැන්ස් අත්විඳින්න. පිචෝලා විලෙහි බෝට්ටු සවාරියක් භුක්ති විඳින්න, අලංකාර නගර මාලිගය වෙත පිවිස, එහි ආකර්ශනීය වීදි ගවේෂණය කරන්න.", "desc_ja":"「東のヴェネツィア」ウダイプルのロマンスを体験してください。ピチョラ湖でのボートライドを楽しみ、壮大なシティパレスを訪れ、その魅力的な通りを探索してください。" },
      { "id":"in-010", "country":"India", "title_en":"Darjeeling Himalayan Railway", "title_si":"ඩාර්ජීලිං හිමාලයානු දුම්රිය", "title_ja":"ダージリン・ヒマラヤ鉄道", "price_from":"USD 530", "duration":"5D/4N", "rating":4.6, "images":[`https://picsum.photos/seed/in10/800/600`], "desc_en":"Ride the historic 'Toy Train', a UNESCO World Heritage Site, through the beautiful hills of Darjeeling. Enjoy stunning views of the Himalayas and visit lush tea estates.", "desc_si":"ඩාර්ජීලිං හි සුන්දර කඳු හරහා UNESCO ලෝක උරුම අඩවියක් වන ඓතිහාසික 'සෙල්ලම් දුම්රිය' පදින්න. හිමාලයේ විශ්මයජනක දර්ශන භුක්ති විඳ, සශ්‍රීක තේ වතු වෙත පිවිසෙන්න.", "desc_ja":"ダージリンの美しい丘を通って、ユネスコ世界遺産である歴史的な「トイトレイン」に乗りましょう。ヒマラヤの素晴らしい景色を楽しみ、緑豊かな茶畑を訪れます。" }
    ],

    // --- CUSTOMER REVIEWS ---
    REVIEWS_DATA: [
        // Japan Reviews (10)
        { name: "John Doe", country_en: "Visited Japan", country_si: "ජපානයේ සංචාරය කළා", country_ja: "日本を訪問", quote_en: "The Sakura tour was absolutely magical. DreamStay handled everything perfectly.", quote_si: "සකුරා චාරිකාව ඇත්තෙන්ම ඉන්ද්‍රජාලිකයි. DreamStay සෑම දෙයක්ම පරිපූර්ණව හැසිරෙව්වා.", quote_ja: "桜のツアーは本当に魔法のようでした。DreamStayはすべてを完璧に手配してくれました。", avatar: `https://i.pravatar.cc/150?u=jp1`, photos: ['https://picsum.photos/seed/jd1/800/600'] },
        { name: "Emily White", country_en: "Visited Japan", country_si: "ජපානයේ සංචාරය කළා", country_ja: "日本を訪問", quote_en: "Tokyo's energy is unreal! The food tour was a highlight. Highly recommend.", quote_si: "ටෝකියෝවේ ශක්තිය ඇදහිය නොහැකියි! ආහාර චාරිකාව විශේෂත්වයක් වුනා. බෙහෙවින් නිර්දේශ කරනවා.", quote_ja: "東京のエネルギーは現実離れしています！フードツアーがハイライトでした。強くお勧めします。", avatar: `https://i.pravatar.cc/150?u=jp2`, photos: [] },
        { name: "Kenji Tanaka", country_en: "Visited Japan", country_si: "ජපානයේ සංචාරය කළා", country_ja: "日本を訪問", quote_en: "As a local, I was impressed by their deep knowledge of hidden gems in Kyoto.", quote_si: "දේශීයයෙකු ලෙස, කියෝටෝවේ සැඟවුණු මැණික් පිළිබඳ ඔවුන්ගේ ගැඹුරු දැනුමෙන් මම පැහැදුණා.", quote_ja: "地元民として、京都の隠れた名所に関する彼らの深い知識に感銘を受けました。", avatar: `https://i.pravatar.cc/150?u=jp3`, photos: ['https://picsum.photos/seed/kt1/800/600'] },
        { name: "Sophia Chen", country_en: "Visited Japan", country_si: "ජපානයේ සංචාරය කළා", country_ja: "日本を訪問", quote_en: "The Hokkaido winter trip was a dream. The onsen experience after a day of skiing was perfect.", quote_si: "හොක්කයිඩෝ ශීත ඍතු චාරිකාව සිහිනයක් විය. හිම මත ලිස්සා යාමෙන් පසු ඔන්සෙන් අත්දැකීම පරිපූර්ණයි.", quote_ja: "北海道の冬の旅行は夢のようでした。スキーの後の温泉体験は最高でした。", avatar: `https://i.pravatar.cc/150?u=jp4`, photos: [] },
        { name: "David Miller", country_en: "Visited Japan", country_si: "ජපානයේ සංචාරය කළා", country_ja: "日本を訪問", quote_en: "Seeing Mt. Fuji up close was breathtaking. The entire Hakone trip was seamless.", quote_si: "ෆුජි කන්ද ළඟින් දැකීම හුස්ම හිරවන සුළු විය. සම්පූර්ණ හකෝනේ චාරිකාව බාධාවකින් තොර විය.", quote_ja: "富士山を間近で見たのは息をのむほどでした。箱根旅行全体がスムーズでした。", avatar: `https://i.pravatar.cc/150?u=jp5`, photos: [] },
        { name: "Olivia Garcia", country_en: "Visited Japan", country_si: "ජපානයේ සංචාරය කළා", country_ja: "日本を訪問", quote_en: "From the bustling streets of Shibuya to serene temples, every day was an adventure.", quote_si: "ෂිබුයා හි කාර්යබහුල වීදිවල සිට සන්සුන් විහාරස්ථාන දක්වා, සෑම දිනකම වික්‍රමාන්විතයක් විය.", quote_ja: "渋谷の賑やかな通りから静かなお寺まで、毎日が冒険でした。", avatar: `https://i.pravatar.cc/150?u=jp6`, photos: [] },
        { name: "Mohammed Al-Farsi", country_en: "Visited Japan", country_si: "ජපානයේ සංචාරය කළා", country_ja: "日本を訪問", quote_en: "The custom plan they made for our family was flawless. They considered everything!", quote_si: "ඔවුන් අපේ පවුල සඳහා සකස් කළ අභිරුචි සැලැස්ම දෝෂ රහිත විය. ඔවුන් සෑම දෙයක්ම සලකා බැලුවා!", quote_ja: "私たちの家族のために作ってくれたカスタムプランは完璧でした。すべてを考慮してくれました！", avatar: `https://i.pravatar.cc/150?u=jp7`, photos: ['https://picsum.photos/seed/ma1/800/600'] },
        { name: "Chloe Tremblay", country_en: "Visited Japan", country_si: "ජපානයේ සංචාරය කළා", country_ja: "日本を訪問", quote_en: "Loved the blend of modern and traditional experiences. The guides were fantastic.", quote_si: "නවීන සහ සාම්ප්‍රදායික අත්දැකීම්වල මිශ්‍රණයට ආදරය කළා. මඟ පෙන්වන්නන් විශිෂ්ටයි.", quote_ja: "モダンと伝統的な体験の融合が大好きでした。ガイドは素晴らしかったです。", avatar: `https://i.pravatar.cc/150?u=jp8`, photos: [] },
        { name: "Liam O'Connell", country_en: "Visited Japan", country_si: "ජපානයේ සංචාරය කළා", country_ja: "日本を訪問", quote_en: "An unforgettable trip. The attention to detail from DreamStay was second to none.", quote_si: "අමතක නොවන චාරිකාවක්. DreamStay වෙතින් විස්තර කෙරෙහි දැක්වූ අවධානය දෙවැනි නැත.", quote_ja: "忘れられない旅行。DreamStayの細部へのこだわりは誰にも負けません。", avatar: `https://i.pravatar.cc/150?u=jp9`, photos: [] },
        { name: "Isabella Rossi", country_en: "Visited Japan", country_si: "ජපානයේ සංචාරය කළා", country_ja: "日本を訪問", quote_en: "The food was incredible, the sights were stunning, and the organization was perfect.", quote_si: "ආහාර ඇදහිය නොහැකි විය, දර්ශන විශ්මයජනක විය, සහ සංවිධානය පරිපූර්ණ විය.", quote_ja: "食事は素晴らしく、景色は見事で、そして組織は完璧でした。", avatar: `https://i.pravatar.cc/150?u=jp10`, photos: [] },

        // India Reviews (10)
        { name: "Priya Sharma", country_en: "Visited India", country_si: "ඉන්දියාවේ සංචාරය කළා", country_ja: "インドを訪問", quote_en: "The Kerala backwaters trip was so serene and rejuvenating. The houseboat experience is a must-do!", quote_si: "කේරළ පසුපස ජල චාරිකාව ඉතා සන්සුන් සහ ප්‍රබෝධමත් විය. පාරු නිවාස අත්දැකීම අනිවාර්යයෙන්ම කළ යුතු දෙයක්!", quote_ja: "ケララのバックウォーター旅行はとても穏やかで若返りました。ハウスボートの体験は必見です！", avatar: `https://i.pravatar.cc/150?u=in1`, photos: ['https://picsum.photos/seed/ps1/800/600'] },
        { name: "James Smith", country_en: "Visited India", country_si: "ඉන්දියාවේ සංචාරය කළා", country_ja: "インドを訪問", quote_en: "The Golden Triangle tour was a whirlwind of history and color. The Taj Mahal truly is a wonder.", quote_si: "ස්වර්ණමය ත්‍රිකෝණ චාරිකාව ඉතිහාසයේ සහ වර්ණවල සුළි සුළඟක් විය. ටජ් මහල් සැබවින්ම ආශ්චර්යයකි.", quote_ja: "ゴールデントライアングルツアーは歴史と色彩の旋風でした。タージ・マハルは本当に驚異です。", avatar: `https://i.pravatar.cc/150?u=in2`, photos: [] },
        { name: "Fatima Al-Sayed", country_en: "Visited India", country_si: "ඉන්දියාවේ සංචාරය කළා", country_ja: "インドを訪問", quote_en: "Varanasi was a deeply spiritual and moving experience. Thank you for arranging it so thoughtfully.", quote_si: "වාරණාසි ඉතා ගැඹුරු අධ්‍යාත්මික සහ සංවේදී අත්දැකීමක් විය. එය එතරම් කල්පනාකාරීව සකස් කිරීම ගැන ඔබට ස්තූතියි.", quote_ja: "バラナシは深く精神的で感動的な体験でした。それをとても思慮深く手配してくれてありがとう。", avatar: `https://i.pravatar.cc/150?u=in3`, photos: ['https://picsum.photos/seed/fa1/800/600'] },
        { name: "Michael Johnson", country_en: "Visited India", country_si: "ඉන්දියාවේ සංචාරය කළා", country_ja: "インドを訪問", quote_en: "Goa was fantastic! The beaches were beautiful and the nightlife was exactly what we were looking for.", quote_si: "ගෝවා විශිෂ්ටයි! වෙරළ තීරයන් ලස්සනයි, රාත්‍රී ජීවිතය අපි සොයමින් සිටි දේමයි.", quote_ja: "ゴアは素晴らしかったです！ビーチは美しく、ナイトライフは私たちが探していたものでした。", avatar: `https://i.pravatar.cc/150?u=in4`, photos: [] },
        { name: "Ananya Rao", country_en: "Visited India", country_si: "ඉන්දියාවේ සංචාරය කළා", country_ja: "インドを訪問", quote_en: "The Ayurvedic treatments in Kerala were the most relaxing part of our trip. We came back completely refreshed.", quote_si: "කේරළයේ ආයුර්වේද ප්‍රතිකාර අපගේ සංචාරයේ වඩාත්ම විවේකී කොටස විය. අපි සම්පූර්ණයෙන්ම ප්‍රබෝධමත් වී ආපසු ආවා.", quote_ja: "ケララでのアーユルヴェーダ治療は私たちの旅行で最もリラックスできる部分でした。私たちは完全にリフレッシュして戻ってきました。", avatar: `https://i.pravatar.cc/150?u=in5`, photos: [] },
        { name: "Chris Evans", country_en: "Visited India", country_si: "ඉන්දියාවේ සංචාරය කළා", country_ja: "インドを訪問", quote_en: "Rajasthan's forts and palaces are magnificent. Our guide was incredibly knowledgeable.", quote_si: "රාජස්ථානයේ බලකොටු සහ මාලිගා විශිෂ්ටයි. අපගේ මඟ පෙන්වන්නා ඇදහිය නොහැකි තරම් දැනුමැති විය.", quote_ja: "ラジャスタンの砦と宮殿は壮大です。私たちのガイドは信じられないほど知識が豊富でした。", avatar: `https://i.pravatar.cc/150?u=in6`, photos: [] },
        { name: "Yuki Watanabe", country_en: "Visited India", country_si: "ඉන්දියාවේ සංචාරය කළා", country_ja: "インドを訪問", quote_en: "The colors, sounds, and smells of Delhi were a feast for the senses. DreamStay made it easy to navigate.", quote_si: "දිල්ලියේ වර්ණ, ශබ්ද සහ සුවඳ ඉන්ද්‍රියයන්ට මංගල්‍යයක් විය. DreamStay එය සැරිසැරීමට පහසු කළේය.", quote_ja: "デリーの色、音、そして香りは五感を満たすごちそうでした。DreamStayのおかげで簡単にナビゲートできました。", avatar: `https://i.pravatar.cc/150?u=in7`, photos: [] },
        { name: "Laura Schmidt", country_en: "Visited India", country_si: "ඉන්දියාවේ සංචාරය කළා", country_ja: "インドを訪問", quote_en: "The entire trip was well-organized, from airport pickups to hotel check-ins. Very professional service.", quote_si: "ගුවන් තොටුපළේ සිට හෝටල් පරීක්ෂා කිරීම් දක්වා මුළු සංචාරයම හොඳින් සංවිධානය කර තිබුණි. ඉතා වෘත්තීය සේවාවක්.", quote_ja: "空港の送迎からホテルのチェックインまで、旅行全体がよく組織されていました。非常にプロフェッショナルなサービスです。", avatar: `https://i.pravatar.cc/150?u=in8`, photos: [] },
        { name: "Aditya Kumar", country_en: "Visited India", country_si: "ඉන්දියාවේ සංචාරය කළා", country_ja: "インドを訪問", quote_en: "We loved exploring the spice plantations in Kerala. It was a unique and fragrant experience.", quote_si: "කේරළයේ කුළුබඩු වතු ගවේෂණය කිරීමට අපි ප්‍රිය කළෙමු. එය අද්විතීය හා සුවඳවත් අත්දැකීමක් විය.", quote_ja: "ケララのスパイスプランテーションを探索するのが大好きでした。ユニークで香り高い体験でした。", avatar: `https://i.pravatar.cc/150?u=in9`, photos: ['https://picsum.photos/seed/ak1/800/600'] },
        { name: "Zoe Williams", country_en: "Visited India", country_si: "ඉන්දියාවේ සංචාරය කළා", country_ja: "インドを訪問", quote_en: "The contrast between the chaos of the cities and the tranquility of the countryside was amazing.", quote_si: "නගරවල අවුල් සහගත බව සහ ගම්බද සන්සුන් භාවය අතර වෙනස විශ්මයජනක විය.", quote_ja: "都市の混沌と田舎の静けさの対照は素晴らしかったです。", avatar: `https://i.pravatar.cc/150?u=in10`, photos: [] },

        // Malaysia Reviews (10)
        { name: "Aisha binti Ahmad", country_en: "Visited Malaysia", country_si: "මැලේසියාවේ සංචාරය කළා", country_ja: "マレーシアを訪問", quote_en: "Exploring the rainforests in Langkawi was an unforgettable adventure. The guides were so friendly.", quote_si: "ලන්කාවි හි වැසි වනාන්තර ගවේෂණය කිරීම අමතක නොවන වික්‍රමයකි. මාර්ගෝපදේශකයින් ඉතා මිත්‍රශීලී විය.", quote_ja: "ランカウイの熱帯雨林を探検したのは忘れられない冒険でした。ガイドはとてもフレンドリーでした。", avatar: `https://i.pravatar.cc/150?u=my1`, photos: ['https://picsum.photos/seed/aa1/800/600'] },
        { name: "Ben Carter", country_en: "Visited Malaysia", country_si: "මැලේසියාවේ සංචාරය කළා", country_ja: "マレーシアを訪問", quote_en: "Kuala Lumpur is such a vibrant city! The view from the Petronas Towers is a must-see.", quote_si: "ක්වාලාලම්පූර් යනු එතරම් විචිත්‍රවත් නගරයකි! පෙට්‍රෝනාස් කුළුණුවලින් පෙනෙන දර්ශනය නැරඹිය යුතුම දෙයකි.", quote_ja: "クアラルンプールはとても活気のある街です！ペトロナスツインタワーからの眺めは必見です。", avatar: `https://i.pravatar.cc/150?u=my2`, photos: [] },
        { name: "Mei Ling", country_en: "Visited Malaysia", country_si: "මැලේසියාවේ සංචාරය කළා", country_ja: "マレーシアを訪問", quote_en: "The street art in Penang was incredible, and the food was even better. A foodie's paradise!", quote_si: "පිනෑන්ග්හි වීදි කලාව ඇදහිය නොහැකි වූ අතර ආහාර ඊටත් වඩා හොඳ විය. රසැති රසැති පාරාදීසයක්!", quote_ja: "ペナンのストリートアートは素晴らしく、食べ物はさらに良かったです。食通の楽園です！", avatar: `https://i.pravatar.cc/150?u=my3`, photos: ['https://picsum.photos/seed/ml1/800/600'] },
        { name: "Daniel Brown", country_en: "Visited Malaysia", country_si: "මැලේසියාවේ සංචාරය කළා", country_ja: "マレーシアを訪問", quote_en: "The cool weather and beautiful scenery of the Cameron Highlands were a perfect escape from the city heat.", quote_si: "කැමරන් හයිලන්ඩ්ස්හි සිසිල් කාලගුණය සහ සුන්දර දර්ශන නගරයේ උණුමෙන් පරිපූර්ණ ගැලවීමක් විය.", quote_ja: "キャメロンハイランドの涼しい気候と美しい景色は、街の暑さからの完璧な逃避でした。", avatar: `https://i.pravatar.cc/150?u=my4`, photos: [] },
        { name: "Siti Nurhaliza", country_en: "Visited Malaysia", country_si: "මැලේසියාවේ සංචාරය කළා", country_ja: "マレーシアを訪問", quote_en: "DreamStay helped us discover parts of our own country we had never seen. Amazing service.", quote_si: "DreamStay අපේ රටේ අපි කවදාවත් දැක නැති කොටස් සොයා ගැනීමට අපට උදව් කළා. පුදුම සේවාවක්.", quote_ja: "DreamStayは、私たちが今まで見たことのなかった自国の一部を発見するのを助けてくれました。素晴らしいサービス。", avatar: `https://i.pravatar.cc/150?u=my5`, photos: [] },
        { name: "Henry Wilson", country_en: "Visited Malaysia", country_si: "මැලේසියාවේ සංචාරය කළා", country_ja: "マレーシアを訪問", quote_en: "The Langkawi cable car ride offered breathtaking views. It was a highlight of our trip.", quote_si: "ලන්කාවි කේබල් කාර් ගමන හුස්ම හිරවන දසුන් ලබා දුන්නේය. එය අපගේ සංචාරයේ විශේෂත්වයක් විය.", quote_ja: "ランカウイのケーブルカーからの眺めは息をのむほどでした。それは私たちの旅行のハイライトでした。", avatar: `https://i.pravatar.cc/150?u=my6`, photos: [] },
        { name: "Grace Kim", country_en: "Visited Malaysia", country_si: "මැලේසියාවේ සංචාරය කළා", country_ja: "マレーシアを訪問", quote_en: "We loved the mix of cultures in Malacca. The history and architecture were fascinating.", quote_si: "මලක්කාවේ සංස්කෘතීන්ගේ මිශ්‍රණයට අපි ප්‍රිය කළෙමු. ඉතිහාසය සහ ගෘහ නිර්මාණ ශිල්පය සිත් ඇදගන්නා සුළු විය.", quote_ja: "マラッカの文化の融合が大好きでした。歴史と建築は魅力的でした。", avatar: `https://i.pravatar.cc/150?u=my7`, photos: [] },
        { name: "Leo Dubois", country_en: "Visited Malaysia", country_si: "මැලේසියාවේ සංචාරය කළා", country_ja: "マレーシアを訪問", quote_en: "The tea plantations were so peaceful and beautiful. A very relaxing part of our journey.", quote_si: "තේ වතු ඉතා සාමකාමී හා ලස්සන විය. අපගේ ගමනේ ඉතා විවේකී කොටසක්.", quote_ja: "茶畑はとても平和で美しかったです。私たちの旅の非常にリラックスできる部分でした。", avatar: `https://i.pravatar.cc/150?u=my8`, photos: [] },
        { name: "Sofia Novak", country_en: "Visited Malaysia", country_si: "මැලේසියාවේ සංචාරය කළා", country_ja: "マレーシアを訪問", quote_en: "The planning was meticulous. Every transfer and tour was on time and perfectly arranged.", quote_si: "සැලසුම් කිරීම ඉතා සූක්ෂම විය. සෑම මාරුවක්ම සහ සංචාරයක්ම නියමිත වේලාවට සහ පරිපූර්ණ ලෙස සකස් කර තිබුණි.", quote_ja: "計画は綿密でした。すべての送迎とツアーは時間通りで、完璧に手配されていました。", avatar: `https://i.pravatar.cc/150?u=my9`, photos: [] },
        { name: "Raj Patel", country_en: "Visited Malaysia", country_si: "මැලේසියාවේ සංචාරය කළා", country_ja: "マレーシアを訪問", quote_en: "The food recommendations in Kuala Lumpur were spot on. We ate so well!", quote_si: "ක්වාලාලම්පූර්හි ආහාර නිර්දේශ නියමයි. අපි හොඳටම කෑවා!", quote_ja: "クアラルンプールでの食事の推薦は的確でした。とてもおいしかったです！", avatar: `https://i.pravatar.cc/150?u=my10`, photos: [] },

        // Thailand Reviews (10)
        { name: "Jessica Lee", country_en: "Visited Thailand", country_si: "තායිලන්තයේ සංචාරය කළා", country_ja: "タイを訪問", quote_en: "The street food in Bangkok is on another level! Thank you DreamStay for the amazing recommendations.", quote_si: "බැංකොක්හි වීදි ආහාර වෙනත් මට්ටමක පවතී! විශ්මිත නිර්දේශ සඳහා DreamStay වෙත ස්තූතියි.", quote_ja: "バンコクの屋台料理は別格です！ DreamStayの素晴らしい推薦に感謝します。", avatar: `https://i.pravatar.cc/150?u=th1`, photos: [] },
        { name: "Tom Harris", country_en: "Visited Thailand", country_si: "තායිලන්තයේ සංචාරය කළා", country_ja: "タイを訪問", quote_en: "Phuket was paradise. The island hopping tour was the best day of our vacation.", quote_si: "පුකට් පාරාදීසයක් විය. දූපත් සංචාරය අපගේ නිවාඩුවේ හොඳම දිනය විය.", quote_ja: "プーケットは楽園でした。アイランドホッピングツアーは私たちの休暇で最高の一日でした。", avatar: `https://i.pravatar.cc/150?u=th2`, photos: ['https://picsum.photos/seed/thh1/800/600'] },
        { name: "Maria Gonzalez", country_en: "Visited Thailand", country_si: "තායිලන්තයේ සංචාරය කළා", country_ja: "タイを訪問", quote_en: "The elephant sanctuary in Chiang Mai was a beautiful and ethical experience. So heartwarming.", quote_si: "චියැං මායි හි අලි අභයභූමිය ලස්සන හා සදාචාරාත්මක අත්දැකීමක් විය. හරිම හෘදයාංගමයි.", quote_ja: "チェンマイの象の聖域は美しく倫理的な体験でした。とても心温まる。", avatar: `https://i.pravatar.cc/150?u=th3`, photos: [] },
        { name: "Kevin Anderson", country_en: "Visited Thailand", country_si: "තායිලන්තයේ සංචාරය කළා", country_ja: "タイを訪問", quote_en: "The temples in Bangkok are awe-inspiring. Our guide provided so much interesting history.", quote_si: "බැංකොක්හි විහාරස්ථාන විස්මයජනකයි. අපගේ මඟ පෙන්වන්නා බොහෝ රසවත් ඉතිහාසයක් ලබා දුන්නේය.", quote_ja: "バンコクの寺院は畏敬の念を起こさせます。私たちのガイドは多くの興味深い歴史を提供してくれました。", avatar: `https://i.pravatar.cc/150?u=th4`, photos: [] },
        { name: "Olivia Martinez", country_en: "Visited Thailand", country_si: "තායිලන්තයේ සංචාරය කළා", country_ja: "タイを訪問", quote_en: "Ayutthaya felt like stepping back in time. It was a peaceful and fascinating day trip.", quote_si: "අයුත්තායා අතීතයට පිය නැගුවාක් මෙන් දැනුනි. එය සාමකාමී හා සිත් ඇදගන්නාසුළු දින චාරිකාවක් විය.", quote_ja: "アユタヤは過去にタイムスリップしたようでした。それは平和で魅力的な日帰り旅行でした。", avatar: `https://i.pravatar.cc/150?u=th5`, photos: [] },
        { name: "Ethan Wong", country_en: "Visited Thailand", country_si: "තායිලන්තයේ සංචාරය කළා", country_ja: "タイを訪問", quote_en: "The floating markets were chaotic and wonderful. A truly unique Thai experience.", quote_si: "පාවෙන වෙළඳපොළවල් අවුල් සහගත හා අපූරු විය. සැබවින්ම අද්විතීය තායි අත්දැකීමක්.", quote_ja: "水上マーケットは混沌としていて素晴らしかったです。本当にユニークなタイの体験。", avatar: `https://i.pravatar.cc/150?u=th6`, photos: [] },
        { name: "Ava Taylor", country_en: "Visited Thailand", country_si: "තායිලන්තයේ සංචාරය කළා", country_ja: "タイを訪問", quote_en: "The snorkeling in the Andaman Sea was incredible. The water was so clear and full of life.", quote_si: "අන්දමන් මුහුදේ ස්නෝකර්ලිං ඇදහිය නොහැකි විය. ජලය ඉතා පැහැදිලි සහ ජීවයෙන් පිරී තිබුණි.", quote_ja: "アンダマン海でのシュノーケリングは信じられないほどでした。水はとても澄んでいて、生命に満ちていました。", avatar: `https://i.pravatar.cc/150?u=th7`, photos: ['https://picsum.photos/seed/at1/800/600'] },
        { name: "Noah Clark", country_en: "Visited Thailand", country_si: "තායිලන්තයේ සංචාරය කළා", country_ja: "タイを訪問", quote_en: "From the bustling cities to the quiet beaches, Thailand has it all. DreamStay planned the perfect mix.", quote_si: "කාර්යබහුල නගරවල සිට නිස්කලංක වෙරළ තීරයන් දක්වා තායිලන්තයේ සියල්ල තිබේ. DreamStay පරිපූර්ණ මිශ්‍රණය සැලසුම් කළේය.", quote_ja: "賑やかな都市から静かなビーチまで、タイにはすべてが揃っています。DreamStayは完璧なミックスを計画しました。", avatar: `https://i.pravatar.cc/150?u=th8`, photos: [] },
        { name: "Isla Lewis", country_en: "Visited Thailand", country_si: "තායිලන්තයේ සංචාරය කළා", country_ja: "タイを訪問", quote_en: "I loved the cooking class in Chiang Mai. Learning to make my favorite Thai dishes was amazing.", quote_si: "මම චියැං මායි හි ඉවුම් පිහුම් පන්තියට ආදරය කළා. මගේ ප්‍රියතම තායි කෑම සෑදීමට ඉගෙනීම පුදුම සහගත විය.", quote_ja: "チェンマイでの料理教室が大好きでした。私のお気に入りのタイ料理の作り方を学ぶのは素晴らしかったです。", avatar: `https://i.pravatar.cc/150?u=th9`, photos: [] },
        { name: "Lucas Walker", country_en: "Visited Thailand", country_si: "තායිලන්තයේ සංචාරය කළා", country_ja: "タイを訪問", quote_en: "The service was exceptional. They were always available on WhatsApp to answer our questions.", quote_si: "සේවාව සුවිශේෂී විය. අපගේ ප්‍රශ්නවලට පිළිතුරු දීමට ඔවුන් සැමවිටම WhatsApp හි සිටියහ.", quote_ja: "サービスは格別でした。彼らは私たちの質問に答えるために常にWhatsAppで利用可能でした。", avatar: `https://i.pravatar.cc/150?u=th10`, photos: [] },

        // Sri Lanka Reviews (10)
        { name: "Nimal Perera", country_en: "Visited Sri Lanka", country_si: "ශ්‍රී ලංකාවේ සංචාරය කළා", country_ja: "スリランカを訪問", quote_en: "The train ride to Ella was the most beautiful journey I've ever taken. Truly breathtaking.", quote_si: "ඇල්ලට ගිය දුම්რිය ගමන මම ගිය සුන්දරම ගමනයි. ඇත්තටම හුස්ම හිරවෙනවා.", quote_ja: "エッラへの列車の旅は、私が今まで経験した中で最も美しい旅でした。本当に息をのむほどです。", avatar: `https://i.pravatar.cc/150?u=sl1`, photos: ['https://picsum.photos/seed/np1/800/600'] },
        { name: "Charlotte Dubois", country_en: "Visited Sri Lanka", country_si: "ශ්‍රୀ ලංකාවේ සංචාරය කළා", country_ja: "スリランカを訪問", quote_en: "Climbing Sigiriya at sunrise was a core memory. The views were worth the early start!", quote_si: "හිරු උදාවේදී සීගිරිය නැගීම මූලික මතකයක් විය. උදේ පාන්දරින්ම පටන් ගත්තට වටින දසුන් තිබුණා!", quote_ja: "日の出にシーギリヤに登ったのは、核となる記憶でした。早起きする価値のある景色でした！", avatar: `https://i.pravatar.cc/150?u=sl2`, photos: [] },
        { name: "David Chen", country_en: "Visited Sri Lanka", country_si: "ශ්‍රී ලංකාවේ සංචාරය කළා", country_ja: "スリランカを訪問", quote_en: "The history of Galle Fort is fascinating, and the beaches in the south are pristine.", quote_si: "ගාලු කොටුවේ ඉතිහාසය සිත් ඇදගන්නාසුළු වන අතර දකුණේ වෙරළ තීරයන් පිරිසිදුයි.", quote_ja: "ゴールフォートの歴史は魅力的で、南部のビーチは手付かずです。", avatar: `https://i.pravatar.cc/150?u=sl3`, photos: [] },
        { name: "Fatima Khan", country_en: "Visited Sri Lanka", country_si: "ශ්‍රී ලංකාවේ සංචාරය කළා", country_ja: "スリランカを訪問", quote_en: "The variety of food was amazing! From spicy curries to fresh seafood on the coast.", quote_si: "ආහාරවල විවිධත්වය පුදුම සහගතයි! සැර ව්‍යංජනවල සිට වෙරළේ නැවුම් මුහුදු ආහාර දක්වා.", quote_ja: "食べ物の多様性は素晴らしかったです！スパイシーなカレーから海岸の新鮮なシーフードまで。", avatar: `https://i.pravatar.cc/150?u=sl4`, photos: [] },
        { name: "Alex Williams", country_en: "Visited Sri Lanka", country_si: "ශ්‍රී ලංකාවේ සංචාරය කළා", country_ja: "スリランカを訪問", quote_en: "We saw so much wildlife on our safari in Yala National Park. A truly wild experience.", quote_si: "යාල ජාතික වනෝද්‍යානයේ අපගේ සෆාරියේදී අපි බොහෝ වන සතුන් දුටුවෙමු. සැබවින්ම වනගත අත්දැකීමක්.", quote_ja: "ヤラ国立公園でのサファリでたくさんの野生生物を見ました。本当に野生の体験でした。", avatar: `https://i.pravatar.cc/150?u=sl5`, photos: ['https://picsum.photos/seed/aw1/800/600'] },
        { name: "Sophie Martin", country_en: "Visited Sri Lanka", country_si: "ශ්‍රී ලංකාවේ සංචාරය කළා", country_ja: "スリランカを訪問", quote_en: "The people are so warm and welcoming. We felt at home everywhere we went.", quote_si: "මිනිසුන් ඉතා උණුසුම් හා පිළිගැනීමේසුලුයි. අපි ගිය සෑම තැනකම අපට ගෙදර දැනුනා.", quote_ja: "人々はとても温かく歓迎してくれます。どこへ行っても家にいるように感じました。", avatar: `https://i.pravatar.cc/150?u=sl6`, photos: [] },
        { name: "Ivan Petrov", country_en: "Visited Sri Lanka", country_si: "ශ්‍රී ලංකාවේ සංචාරය කළා", country_ja: "スリランカを訪問", quote_en: "The ancient cities of Anuradhapura and Polonnaruwa were incredible. So much history to see.", quote_si: "අනුරාධපුර සහ පොළොන්නරුව යන පුරාණ නගර ඇදහිය නොහැකි විය. දැකීමට බොහෝ ඉතිහාසයක් තිබේ.", quote_ja: "アヌラーダプラとポロンナルワの古代都市は信じられないほどでした。見るべき歴史がたくさんあります。", avatar: `https://i.pravatar.cc/150?u=sl7`, photos: [] },
        { name: "Priya Anand", country_en: "Visited Sri Lanka", country_si: "ශ්‍රී ලංකාවේ සංචාරය කළා", country_ja: "スリランカを訪問", quote_en: "DreamStay's driver/guide was excellent. He was safe, knowledgeable, and made our trip perfect.", quote_si: "DreamStay හි රියදුරු / මාර්ගෝපදේශකයා විශිෂ්ටයි. ඔහු ආරක්ෂිත, දැනුමැති සහ අපගේ සංචාරය පරිපූර්ණ කළේය.", quote_ja: "DreamStayのドライバー/ガイドは素晴らしかったです。彼は安全で、知識が豊富で、私たちの旅行を完璧にしてくれました。", avatar: `https://i.pravatar.cc/150?u=sl8`, photos: [] },
        { name: "Oliver Baker", country_en: "Visited Sri Lanka", country_si: "ශ්‍රී ලංකාවේ සංචාරය කළා", country_ja: "スリランカを訪問", quote_en: "The tea plantations in Nuwara Eliya are stunningly beautiful. A must-visit for any traveler.", quote_si: "නුවරඑළියේ තේ වතු සිත් ඇදගන්නාසුළු ලෙස ලස්සනයි. ඕනෑම සංචාරකයෙකු සඳහා නැරඹිය යුතුම ස්ථානයකි.", quote_ja: "ヌワラエリヤの茶畑は驚くほど美しいです。どんな旅行者にとっても必見です。", avatar: `https://i.pravatar.cc/150?u=sl9`, photos: [] },
        { name: "Amelia Scott", country_en: "Visited Sri Lanka", country_si: "ශ්‍රී ලංකාවේ සංචාරය කළා", country_ja: "スリランカを訪問", quote_en: "From the mountains to the beaches, Sri Lanka is a gem. Can't wait to come back!", quote_si: "කඳුකරයේ සිට වෙරළ තීරයන් දක්වා ශ්‍රී ලංකාව මැණිකකි. නැවත පැමිණීමට බලා සිටිය නොහැක!", quote_ja: "山からビーチまで、スリランカは宝石です。戻ってくるのが待ちきれません！", avatar: `https://i.pravatar.cc/150?u=sl10`, photos: [] }
    ],

    // --- FREQUENTLY ASKED QUESTIONS ---
    FAQ_DATA: [
      { q_en: "Do you handle visas?", q_si: "ඔබලා වීසා සම්බන්ධ වැඩ කරනවද?", q_ja: "ビザの手配はしますか？", a_en: "We provide guidance and optional visa assistance for select packages.", a_si: "අපි තෝරාගත් පැකේජ සඳහා වීසා උපදෙස් සහ අවශ්‍ය නම් සහාය ලබා දෙමු.", a_ja: "一部のパッケージについては、ガイダンスとオプションのビザ支援を提供しています。" },
      { q_en: "What is included in the package price?", q_si: "පැකේජ මිලට මොනවාද ඇතුළත්?", q_ja: "パッケージ料金には何が含まれていますか？", a_en: "Our packages typically include accommodation, specified meals, guided tours, and internal transport. International flights are usually excluded.", a_si: "අපගේ පැකේජවලට සාමාන්‍යයෙන් නවාතැන්, නිශ්චිත ආහාර වේල්, මඟ පෙන්වන චාරිකා සහ අභ්‍යන්තර ප්‍රවාහනය ඇතුළත් වේ. ජාත්‍යන්තර ගුවන් ගමන් සාමාන්‍යයෙන් ඇතුළත් නොවේ.", a_ja: "当社のパッケージには通常、宿泊施設、指定された食事、ガイド付きツアー、国内交通機関が含まれています。国際線は通常含まれていません。" },
      { q_en: "Can I customize a tour?", q_si: "මට සංචාරයක් රිසිකරණය කළ හැකිද?", q_ja: "ツアーをカスタマイズできますか？", a_en: "Absolutely! We specialize in creating custom itineraries. Contact us via WhatsApp to discuss your dream trip.", a_si: "ඇත්ත වශයෙන්ම! අපි රිසිකරණය කළ ගමන් විස්තර නිර්මාණය කිරීමට විශේෂඥයින්. ඔබේ සිහින සංචාරය ගැන සාකච්ඡා කිරීමට WhatsApp හරහා අප හා සම්බන්ධ වන්න.", a_ja: "もちろんです！私たちはカスタム旅程の作成を専門としています。あなたの夢の旅行について話し合うために、WhatsApp経由でお問い合わせください。" },
      { q_en: "Is travel insurance provided?", q_si: "සංචාරක රක්ෂණයක් සපයනවාද?", q_ja: "旅行保険は提供されますか？", a_en: "Travel insurance is not included but is highly recommended. We can suggest trusted insurance partners.", a_si: "සංචාරක රක්ෂණය ඇතුළත් කර නැත, නමුත් එය බෙහෙවින් නිර්දේශ කෙරේ. අපට විශ්වාසදායක රක්ෂණ හවුල්කරුවන් යෝජනා කළ හැකිය.", a_ja: "旅行保険は含まれていませんが、強くお勧めします。信頼できる保険パートナーを提案できます。" }
    ],
    
    // --- MEDIA GALLERY ---
    MEDIA_GALLERY: [
        { type: 'photo', url: 'https://picsum.photos/seed/jp1/800/600', country: 'Japan', title_en: 'Sakura in Kyoto', title_si: 'කියෝටෝ හි සකුරා', title_ja: '京都の桜' },
        { type: 'video', url: 'https://www.youtube.com/embed/F4n_BW_o_Uo?autoplay=1&mute=1', thumbnailUrl: 'https://img.youtube.com/vi/F4n_BW_o_Uo/hqdefault.jpg', country: 'Japan', title_en: 'Relaxing Japan Scenery', title_si: 'සන්සුන් ජපන් දර්ශන', title_ja: '日本の癒しの風景' },
        { type: 'photo', url: 'https://picsum.photos/seed/sl1/800/600', country: 'Sri Lanka', title_en: 'Iconic Train Journey', title_si: 'සංකේතාත්මක දුම්රිය ගමන', title_ja: '象徴的な列車の旅' },
        { type: 'photo', url: 'https://picsum.photos/seed/th1/800/600', country: 'Thailand', title_en: 'Bangkok Floating Market', title_si: 'බැංකොක් පාවෙන වෙළඳපොළ', title_ja: 'バンコク水上マーケット' },
        { type: 'photo', url: 'https://picsum.photos/seed/th2/800/600', country: 'Thailand', title_en: 'Phuket Beaches', title_si: 'පුකට් වෙරළ', title_ja: 'プーケットのビーチ' },
        { type: 'video', url: 'https://www.youtube.com/embed/Ua-zT1zODbA?autoplay=1&mute=1', thumbnailUrl: 'https://img.youtube.com/vi/Ua-zT1zODbA/hqdefault.jpg', country: 'Thailand', title_en: 'Exploring Thailand', title_si: 'තායිලන්තය ගවේෂණය', title_ja: 'タイの探検' },
        { type: 'photo', url: 'https://picsum.photos/seed/sl4/800/600', country: 'Sri Lanka', title_en: 'Sigiriya Rock Fortress', title_si: 'සීගිරිය පර්වත බලකොටුව', title_ja: 'シーギリヤロック要塞' },
        { type: 'photo', url: 'https://picsum.photos/seed/my1/800/600', country: 'Malaysia', title_en: 'Petronas Towers', title_si: 'පෙට්‍රෝනාස් කුළුණු', title_ja: 'ペトロナスツインタワー' },
        { type: 'photo', url: 'https://picsum.photos/seed/in1/800/600', country: 'India', title_en: 'The Taj Mahal', title_si: 'ටජ් මහල්', title_ja: 'タージ・マハル' },
        { type: 'video', url: 'https://www.youtube.com/embed/ixg_e_2_VAY?autoplay=1&mute=1', thumbnailUrl: 'https://img.youtube.com/vi/ixg_e_2_VAY/hqdefault.jpg', country: 'India', title_en: 'Incredible India', title_si: 'විශ්මිත ඉන්දියාව', title_ja: '信じられないほどのインド' },
        { type: 'photo', url: 'https://picsum.photos/seed/jd2/800/600', country: 'Japan', title_en: 'Customer Photo: Japan Temple', title_si: 'පාරිභෝගික ඡායාරූපය: ජපන් පන්සල', title_ja: 'お客様の写真：日本のお寺' },
        { type: 'video', url: 'https://www.youtube.com/embed/zN4z21lPq-A?autoplay=1&mute=1', thumbnailUrl: 'https://img.youtube.com/vi/zN4z21lPq-A/hqdefault.jpg', country: 'Sri Lanka', title_en: 'Beautiful Sri Lanka', title_si: 'ලස්සන ශ්‍රී ලංකාව', title_ja: '美しいスリランカ' },
    ],

    // --- HERO SECTION QUOTES ---
    HERO_QUOTES: {
        en: [ "Discover worlds beyond your own.", "Your adventure is written in the stars.", "Travel to the edge of imagination.", "Another reality is just a flight away." ],
        si: [ "ඔබේ ලෝකයෙන් ඔබ්බට ලෝක සොයා ගන්න.", "ඔබේ වික්‍රමය තරු වල ලියා ඇත.", "පරිකල්පනයේ කෙළවරට ගමන් කරන්න.", "වෙනත් යථාර්ථයක් යනු ගුවන් ගමනක් පමණි." ],
        ja: [ "自分の世界を超えた世界を発見する。", "あなたの冒険は星に書かれています。", "想像力の果てまで旅をする。", "別の現実はすぐそこにある。" ]
    },

    // --- CHATBOT DATA ---
    CHATBOT_DATA: {
        welcome_en: "Hello! How can I help you today?",
        welcome_si: "ආයුබෝවන්! අද ඔබට උදව් කළ හැක්කේ කෙසේද?",
        welcome_ja: "こんにちは！今日はどういったご用件でしょうか？",
        questions: [
            {
                q_en: "Can you create a custom tour?",
                q_si: "ඔබට අභිරුචි සංචාරයක් සෑදිය හැකිද?",
                q_ja: "カスタムツアーを作成できますか？",
                a_en: "Yes, absolutely! We specialize in custom tours. Please click the 'Create a Custom Plan' button or contact us on WhatsApp to start planning your dream trip.",
                a_si: "ඔව්, අනිවාර්යයෙන්ම! අපි අභිරුචි සංචාර සඳහා විශේෂඥයන්. 'ඔබේම සංචාරයක් සාදන්න' බොත්තම ක්ලික් කරන්න හෝ ඔබේ සිහින සංචාරය සැලසුම් කිරීම ආරම්භ කිරීමට WhatsApp හි අප හා සම්බන්ධ වන්න.",
                a_ja: "はい、もちろんです！私たちはカスタムツアーを専門としています。「カスタムプランを作成」ボタンをクリックするか、WhatsAppでお問い合わせいただき、夢の旅行の計画を始めましょう。"
            },
            {
                q_en: "What destinations do you offer?",
                q_si: "ඔබ ලබා දෙන ගමනාන්ත මොනවාද?",
                q_ja: "どの目的地を提供していますか？",
                a_en: "We currently offer amazing tours in Sri Lanka, Japan, Thailand, Malaysia, and India. You can explore them using the filter tabs at the top of the page.",
                a_si: "අපි දැනට ශ්‍රී ලංකාව, ජපානය, තායිලන්තය, මැලේසියාව සහ ඉන්දියාවේ විස්මිත සංචාර පිරිනමන්නෙමු. ඔබට පිටුවේ ඉහළින් ඇති ෆිල්ටර් ටැබ් භාවිතයෙන් ඒවා ගවේෂණය කළ හැකිය.",
                a_ja: "現在、スリランカ、日本、タイ、マレーシア、インドで素晴らしいツアーを提供しています。ページ上部のフィルタータブを使用して探索できます。"
            },
            {
                q_en: "How do I book a package?",
                q_si: "මම පැකේජයක් වෙන්කර ගන්නේ කෙසේද?",
                q_ja: "パッケージを予約するにはどうすればよいですか？",
                a_en: "To book a package or get more information, please click the 'View Details' button on any package and then contact us via the WhatsApp link provided. We'll assist you right away!",
                a_si: "පැකේජයක් වෙන්කරවා ගැනීමට හෝ වැඩි විස්තර ලබා ගැනීමට, කරුණาකර ඕනෑම පැකේජයක 'විස්තර බලන්න' බොත්තම ක්ලික් කර, සපයා ඇති WhatsApp සබැඳිය හරහා අප හා සම්බන්ධ වන්න. අපි ඔබට වහාම සහාය වන්නෙමු!",
                a_ja: "パッケージを予約したり、詳細情報を入手したりするには、任意のパッケージの「詳細を見る」ボタンをクリックし、提供されているWhatsAppリンクからお問い合わせください。すぐにご案内いたします！"
            }
        ]
    },
    
    // --- WEBSITE TEXTS & TRANSLATIONS (STRINGS) ---
    STRINGS: {
        en: {
            chooseLangTitle: "Choose Language",
            heroTitle: "DreamStay Tours — Travel like it’s another universe",
            createCustomPlan: "Create a Custom Plan",
            contactWhatsApp: "Contact via WhatsApp",
            seeAllMedia: "See All Photos & Videos",
            galleryTitle: "Our Photo & Video Gallery",
            backToHome: "Back to Home",
            filterAll: "All",
            filterPhotos: "Photos",
            filterVideos: "Videos",
            filterDashboard: "Dashboard",
            filterSriLanka: "Sri Lanka",
            filterThailand: "Thailand",
            filterJapan: "Japan",
            filterMalaysia: "Malaysia",
            filterIndia: "India",
            sponsorsTitle: "Our Valued Partners",
            viewDetails: "View Details",
            faqTitle: "Frequently Asked Questions",
            reviewsTitle: "From Our Travellers",
            viewPhotos: "View Tour Photos",
            photosBy: "Photos from {name}'s trip",
            footerPrivacy: "Privacy Policy",
            footerTerms: "Terms of Service",
            toggleLang: "භාෂාව / 言語",
            whatsappMsg: (title) => `Hi DreamStay, I want info about the "${title}" package. Dates: _______`,
            customPlanTitle: "Create Your Custom Dream Trip",
            formName: "Full Name",
            formTravelers: "Number of Travelers",
            formDestinations: "Desired Destinations (e.g., Tokyo, Phuket)",
            formBudget: "Budget per Person (USD)",
            formDates: "Preferred Travel Dates",
            formNotes: "Additional Notes or Preferences",
            formSubmitBtn: "Get a Quote via WhatsApp",
            customPlanWhatsappMsg: (data) => `
Hello DreamStay, I'd like a quote for a custom trip!
---
Name: ${data.name}
Travelers: ${data.travelers}
Destinations: ${data.destinations}
Budget (per person): ${data.budget || 'Not specified'}
Dates: ${data.dates || 'Flexible'}
Notes: ${data.notes || 'None'}
            `.trim().replace(/^ +/gm, ''),
            chatbotTitle: "DreamStay Assistant",
            chatbotAskAnother: "Ask another question",
            servicesTitle: "What We Offer",
            serviceAirTickets: "Air Tickets",
            serviceVisa: "Visa Assistance",
            serviceTransport: "AC Transport",
            serviceBreakfast: "Free Breakfast",
            audioModalTitle: "Enable Sound?",
            audioModalDesc: "This site features background music for a more immersive experience.",
            audioModalEnable: "Yes, enable",
            audioModalDisable: "No, thanks"
        },
        si: {
            chooseLangTitle: "භාෂාව තෝරන්න",
            heroTitle: "DreamStay Tours — වෙනත් ග්‍රහලෝකයක මෙන් සංචාරය කරන්න",
            createCustomPlan: "ඔබේම සංචාරයක් සාදන්න",
            contactWhatsApp: "WhatsApp හරහා සම්බන්ධ වෙන්න",
            seeAllMedia: "සියලුම ඡායාරූප සහ වීඩියෝ බලන්න",
            galleryTitle: "අපගේ ඡායාරූප සහ වීඩියෝ ගැලරිය",
            backToHome: "මුල් පිටුවට",
            filterAll: "සියල්ල",
            filterPhotos: "ඡායාරූප",
            filterVideos: "වීඩියෝ",
            filterDashboard: "පුවරුව",
            filterSriLanka: "ශ්‍රී ලංකාව",
            filterThailand: "තායිලන්තය",
            filterJapan: "ජපානය",
            filterMalaysia: "මැලේසියාව",
            filterIndia: "ඉන්දියාව",
            sponsorsTitle: "අපගේ වටිනා හවුල්කරුවන්",
            viewDetails: "විස්තර බලන්න",
            faqTitle: "නිතර අසන ප්‍රශ්න",
            reviewsTitle: "අපගේ සංචාරකයින්ගෙන්",
            viewPhotos: "සංචාරයේ ඡායාරූප බලන්න",
            photosBy: "{name}ගේ සංචාරයේ ඡායාරූප",
            footerPrivacy: "පෞද්ගලිකත්ව ප්‍රතිපත්තිය",
            footerTerms: "සේවා කොන්දේසි",
            toggleLang: "Language / 言語",
            whatsappMsg: (title) => `හෙලෝ DreamStay, මට "${title}" පැකේජය ගැන තොරතුරු අවශ්‍යයි. දිනය: _______`,
            customPlanTitle: "ඔබේ සිහින චාරිකාව සාදන්න",
            formName: "සම්පූර්ණ නම",
            formTravelers: "සංචාරකයින් ගණන",
            formDestinations: "අපේක්ෂිත ගමනාන්ත (උදා: ටෝකියෝ, පුකට්)",
            formBudget: "එක් පුද්ගලයෙකුට අයවැය (USD)",
            formDates: "කැමති සංචාරක දිනයන්",
            formNotes: "අමතර සටහන් හෝ කැමති දේ",
            formSubmitBtn: "WhatsApp හරහා මිල ගණන් ලබා ගන්න",
            customPlanWhatsappMsg: (data) => `
හෙලෝ DreamStay, මට අභිරුචි චාරිකාවක් සඳහා මිල ගණන් අවශ්‍යයි!
---
නම: ${data.name}
සංචාරකයින්: ${data.travelers}
ගමනාන්ත: ${data.destinations}
අයවැය (එක් අයෙකුට): ${data.budget || 'නිශ්චිත කර නැත'}
දිනයන්: ${data.dates || 'නම්‍යශීලී'}
සටහන්: ${data.notes || 'නැත'}
            `.trim().replace(/^ +/gm, ''),
            chatbotTitle: "DreamStay සහකාර",
            chatbotAskAnother: "වෙනත් ප්‍රශ්නයක් අසන්න",
            servicesTitle: "අප පිරිනමන දේ",
            serviceAirTickets: "ගුවන් ටිකට්පත්",
            serviceVisa: "වීසා සහාය",
            serviceTransport: "AC ප්‍රවාහනය",
            serviceBreakfast: "නොමිලේ උදෑසන ආහාරය",
            audioModalTitle: "ශබ්දය සක්‍රීය කරන්නද?",
            audioModalDesc: "වඩාත් ගිලී යන අත්දැකීමක් සඳහා මෙම වෙබ් අඩවියේ පසුබිම් සංගීතය ඇතුළත් වේ.",
            audioModalEnable: "ඔව්, සක්‍රීය කරන්න",
            audioModalDisable: "එපා, ස්තූතියි"
        },
        ja: {
            chooseLangTitle: "言語を選択",
            heroTitle: "DreamStay Tours — 異世界のように旅をする",
            createCustomPlan: "カスタムプランを作成",
            contactWhatsApp: "WhatsAppで連絡",
            seeAllMedia: "すべての写真とビデオを見る",
            galleryTitle: "写真＆ビデオギャラリー",
            backToHome: "ホームに戻る",
            filterAll: "すべて",
            filterPhotos: "写真",
            filterVideos: "ビデオ",
            filterDashboard: "ダッシュボード",
            filterSriLanka: "スリランカ",
            filterThailand: "タイ",
            filterJapan: "日本",
            filterMalaysia: "マレーシア",
            filterIndia: "インド",
            sponsorsTitle: "我々の大切なパートナー",
            viewDetails: "詳細を見る",
            faqTitle: "よくある質問",
            reviewsTitle: "旅行者から",
            viewPhotos: "ツアーの写真を見る",
            photosBy: "{name}さんの旅行の写真",
            footerPrivacy: "プライバシーポリシー",
            footerTerms: "利用規約",
            toggleLang: "Language / භාෂාව",
            whatsappMsg: (title) => `こんにちはDreamStay、「${title}」パッケージについて情報が欲しいです。日程: _______`,
            customPlanTitle: "あなたの夢のカスタムトリップを作成",
            formName: "フルネーム",
            formTravelers: "旅行者数",
            formDestinations: "希望の目的地（例：東京、プーケット）",
            formBudget: "一人当たりの予算（USD）",
            formDates: "希望の旅行日",
            formNotes: "追加のメモや希望",
            formSubmitBtn: "WhatsAppで見積もりを取得",
            customPlanWhatsappMsg: (data) => `
こんにちはDreamStay、カスタム旅行の見積もりをお願いします！
---
名前: ${data.name}
旅行者数: ${data.travelers}
目的地: ${data.destinations}
予算（一人当たり）: ${data.budget || '指定なし'}
日程: ${data.dates || '柔軟'}
備考: ${data.notes || 'なし'}
            `.trim().replace(/^ +/gm, ''),
            chatbotTitle: "DreamStayアシスタント",
            chatbotAskAnother: "別の質問をする",
            servicesTitle: "私たちの提供",
            serviceAirTickets: "航空券",
            serviceVisa: "ビザサポート",
            serviceTransport: "エアコン付き車両",
            serviceBreakfast: "無料の朝食",
            audioModalTitle: "サウンドを有効にしますか？",
            audioModalDesc: "このサイトは、より没入感のある体験のために背景音楽を備えています。",
            audioModalEnable: "はい、有効にする",
            audioModalDisable: "いいえ、結構です"
        }
    }
};