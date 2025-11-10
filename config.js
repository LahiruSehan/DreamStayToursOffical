// =================================================================================
// DREAMSTAY TOURS - CONFIGURATION FILE
// =================================================================================
// This is the central place to edit all the content for the DreamStay Tours website.
// Simply change the values here, save the file, and your website will be updated.
// No need to touch app.js, styles.css, or index.html for content changes.
// =================================================================================

window.config = {

    // --- GENERAL SETTINGS ---
    // TODO: Replace with your actual WhatsApp number.
    // Use the international format without '+' or '00'. For example: 14155552671
    WHATSAPP_NUMBER: "1234567890",

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

    // --- TOUR PACKAGES ---
    PACKAGES: [
      // Sri Lanka
      { "id":"sl-001", "country":"Sri Lanka", "title_en":"Ella Train & Tea Country", "title_si":"ඇල්ල දුම්රිය සහ තේ දේශය", "title_ja":"エッラ列車と紅茶の国", "price_from":"USD 350", "duration":"4D/3N", "rating":4.9, "images":[`https://picsum.photos/seed/sl1/800/600`,`https://picsum.photos/seed/sl2/800/600`], "desc_en":"Experience one of the world's most scenic train rides to Ella, hike to stunning viewpoints, and explore lush green tea plantations.", "desc_si":"ලෝකයේ සුන්දරම දුම්රිය ගමනක් වන ඇල්ල වෙත ගොස්, සිත් ඇදගන්නා දර්ශන නැරඹීමට කඳු තරණය කර, සශ්‍රීක හරිත තේ වතු ගවේෂණය කරන්න.", "desc_ja":"世界で最も風光明媚な列車の一つ、エッラへの旅を体験し、素晴らしい景色を望むハイキングを楽しみ、緑豊かな茶畑を散策しましょう。" },
      { "id":"sl-002", "country":"Sri Lanka", "title_en":"Galle Fort & Southern Beaches", "title_si":"ගාලු කොටුව සහ දකුණු වෙරළ", "title_ja":"ゴールフォートと南部ビーチ", "price_from":"USD 420", "duration":"5D/4N", "rating":4.8, "images":[`https://picsum.photos/seed/sl3/800/600`], "desc_en":"Explore the historic Dutch Fort in Galle, a UNESCO World Heritage site, and relax on the golden sand beaches of Unawatuna and Mirissa.", "desc_si":"UNESCO ලෝක උරුමයක් වන ගාල්ලේ ඓතිහාසික ලන්දේසි කොටුව ගවේෂණය කර, උණවටුන සහ මිරිස්ස රන්වන් වැලි වෙරළ තීරයේ විවේක ගන්න.", "desc_ja":"ユネスコ世界遺産であるゴールの歴史的なオランダの要塞を探索し、ウナワトゥナとミリッサの黄金の砂浜でリラックスしてください。" },
      { "id":"sl-003", "country":"Sri Lanka", "title_en":"Sigiriya Rock & Ancient Cities", "title_si":"සීගිරිය සහ පුරාණ නගර", "title_ja":"シーギリヤロックと古代都市", "price_from":"USD 480", "duration":"4D/3N", "rating":4.9, "images":[`https://picsum.photos/seed/sl4/800/600`], "desc_en":"Climb the magnificent Sigiriya Rock Fortress, explore the ancient ruins of Polonnaruwa, and visit the sacred city of Anuradhapura.", "desc_si":"අලංකාර සීගිරිය පර්වතය තරණය කරන්න, පොළොන්නරුවේ පුරාණ නටබුන් ගවේෂණය කරන්න, සහ පූජනීය අනුරාධපුර නගරය වෙත පිවිසෙන්න.", "desc_ja":"壮大なシーギリヤの岩の要塞に登り、ポロンナルワの古代遺跡を探索し、聖地アヌラーダプラを訪れます。" },
      
      // Japan
      { "id":"jp-001", "country":"Japan", "title_en":"Sakura Streets of Kyoto", "title_si":"කියෝටෝ හි සකුරා වීදියන්", "title_ja":"京都の桜並木", "price_from":"USD 499", "duration":"5D/4N", "rating":4.9, "images":[`https://picsum.photos/seed/jp1/800/600`,`https://picsum.photos/seed/jp2/800/600`], "desc_en":"Walk under vibrant pink sakura canopies in historic Kyoto, experience a traditional tea ceremony, and visit ancient temples that whisper tales of the past.", "desc_si":"කියෝටෝ හි රෝස පැහැති සකුරා යටින් ගමන් කර, සාම්ප්‍රදායික තේ උත්සවයකට සහභාගී වී, අතීතයේ කතා කියන පෞරාණික විහාරස්ථාන නරඹන්න.", "desc_ja":"歴史的な京都で鮮やかなピンクの桜の天蓋の下を歩き、伝統的な茶道を体験し、過去の物語をささやく古代の寺院を訪れます。" },
      { "id":"jp-002", "country":"Japan", "title_en":"Neon Nights in Tokyo", "title_si":"ටෝකියෝ හි නියෝන් රාත්‍රි", "title_ja":"東京のネオンナイト", "price_from":"USD 599", "duration":"4D/3N", "rating":4.7, "images":[`https://picsum.photos/seed/jp3/800/600`], "desc_en":"Dive into the electrifying energy of Tokyo after dark. Witness the famous Shibuya Crossing, explore vibrant arcades, and enjoy the city's world-class nightlife.", "desc_si":"අඳුර වැටුණු පසු ටෝකියෝවේ විදුලිබල ශක්තියට කිමිදෙන්න. සුප්‍රසිද්ධ ෂිබුයා හරස් මාර්ගය දැක, විචිත්‍රවත් ආකේඩ් ගවේෂණය කර, නගරයේ ලෝක මට්ටමේ රාත්‍රී ජීවිතය භුක්ති විඳින්න.", "desc_ja":"暗くなった後の東京の電撃的なエネルギーに飛び込んでください。有名な渋谷交差点を目の当たりにし、活気あるアーケードを探索し、街のワールドクラスのナイトライフを楽しみましょう。" },
      { "id":"jp-003", "country":"Japan", "title_en":"Hokkaido Snow & Onsen", "title_si":"හොක්කයිඩෝ හි හිම සහ 온센", "title_ja":"北海道の雪と温泉", "price_from":"USD 699", "duration":"6D/5N", "rating":4.8, "images":[`https://picsum.photos/seed/jp4/800/600`], "desc_en":"Embrace the winter wonderland of Hokkaido. Enjoy skiing on powdery snow, relax in natural hot springs (onsen), and savor delicious local cuisine.", "desc_si":"හොක්කයිඩෝවේ ශීත ඍතු ආශ්චර්යමත් දේශය වැළඳ ගන්න. කුඩු හිම මත හිම මත ලිස්සා යාමෙන් සතුටු වන්න, ස්වභාවික උණු දිය උල්පත්වල (ඔන්සෙන්) විවේක ගන්න, සහ රසවත් දේශීය ආහාර රසවිඳින්න.", "desc_ja":"北海道の冬のワンダーランドを満喫してください。パウダースノーでのスキーを楽しみ、天然温泉でリラックスし、美味しい地元料理を味わってください。" },
      { "id":"jp-004", "country":"Japan", "title_en":"Mt. Fuji & Hakone Retreat", "title_si":"ෆුජි කන්ද සහ හකෝනේ විවේකය", "title_ja":"富士山と箱根のリトリート", "price_from":"USD 750", "duration":"4D/3N", "rating":4.9, "images":[`https://picsum.photos/seed/jp5/800/600`], "desc_en":"Witness the majestic Mt. Fuji from the scenic Hakone region. Enjoy a cruise on Lake Ashi, ride the Hakone Ropeway, and relax in a traditional onsen with stunning views.", "desc_si":" мальчик scenic Hakone කලාපයෙන් დიდා Mt. Fuji බලන්න. අෂි විලෙහි යාත්‍රාවක් භුක්ති විඳින්න, Hakone Ropeway පදින්න, සහ විශ්මයජනක දසුන් සහිත සාම්ප්‍රදායික ඔන්සෙන් එකක විවේක ගන්න.", "desc_ja":"風光明媚な箱根地域から雄大な富士山をご覧ください。芦ノ湖でのクルーズを楽しみ、箱根ロープウェイに乗り、素晴らしい景色を望む伝統的な温泉でリラックスしてください。" },
      
      // Thailand
      { "id":"th-001","country":"Thailand","title_en":"Bangkok Temples & Street Food","title_si":"බැංකොක් විහාර සහ වීදි ආහාර","title_ja":"バンコクの寺院と屋台料理", "price_from":"USD 399","duration":"4D/3N","rating":4.6,"images":[`https://picsum.photos/seed/th1/800/600`], "desc_en":"Explore the majestic temples of Bangkok, dive into the world-famous street food scene, and experience the unique charm of a floating market.", "desc_si":"බැංකොක් නගරයේ අලංකාර විහාරස්ථාන ගවේෂණය කරන්න, ලෝක ප්‍රසිද්ධ වීදි ආහාර දර්ශනයට කිමිදෙන්න, සහ පාවෙන වෙළඳපොළක ඇති අද්විතීය ආකර්ෂණය අත්විඳින්න.", "desc_ja":"バンコクの壮大な寺院を探索し、世界的に有名な屋台料理シーンに飛び込み、水上マーケットのユニークな魅力を体験してください。" },
      { "id":"th-002","country":"Thailand","title_en":"Phuket Beach Chill","title_si":"පුකට් වෙරළේ විවේකය","title_ja":"プーケットのビーチでリラックス", "price_from":"USD 459","duration":"5D/4N","rating":4.7,"images":[`https://picsum.photos/seed/th2/800/600`], "desc_en":"Relax on the pristine white-sand beaches of Phuket. Go island hopping across the Andaman Sea and snorkel in crystal-clear turquoise waters.", "desc_si":"පුකට්හි සුදු වැලි සහිත වෙරළ තීරයේ විවේක ගන්න. අන්දමන් මුහුද හරහා දූපත් වෙත ගොස්, පැහැදිලි ටර්කියුයිස් ජලයේ ස්නෝකර්ලිං කරන්න.", "desc_ja":"プーケットの真っ白な砂浜でリラックスしてください。アンダマン海をアイランドホッピングし、透き通ったターコイズブルーの海でシュノーケリングを楽しみましょう。" },
      { "id":"th-003","country":"Thailand","title_en":"Chiang Mai Elephant Sanctuary","title_si":"චියැං මායි අලි අභයභූමිය","title_ja":"チェンマイのエレファントサンクチュアリ", "price_from":"USD 349","duration":"3D/2N","rating":4.8,"images":[`https://picsum.photos/seed/th3/800/600`], "desc_en":"Connect with gentle giants at an ethical elephant sanctuary in Chiang Mai. Learn about conservation, help care for the elephants, and trek through lush jungles.", "desc_si":"චියැං මායි හි සදාචාරාත්මක අලි අභයභූමියකදී මෘදු යෝධයන් සමඟ සම්බන්ධ වන්න. සංරක්ෂණය ගැන ඉගෙන ගන්න, අලින් රැකබලා ගැනීමට උදව් කරන්න, සහ සශ්‍රීක වනාන්තර හරහා ගමන් කරන්න.", "desc_ja":"チェンマイの倫理的な象の聖域で、穏やかな巨人たちと触れ合いましょう。保護について学び、象の世話を手伝い、緑豊かなジャングルをトレッキングします。" },
      { "id":"th-004","country":"Thailand","title_en":"Ayutthaya Ancient City Tour","title_si":"අයුත්තායා පුරාණ නගර සංචාරය", "title_ja":"アユタヤ古代都市ツアー", "price_from":"USD 299", "duration":"2D/1N","rating":4.7, "images":[`https://picsum.photos/seed/th4/800/600`], "desc_en":"Step back in time at the UNESCO World Heritage site of Ayutthaya. Explore ancient temple ruins, marvel at giant Buddha statues, and learn about the history of the former Siamese kingdom.", "desc_si":"UNESCO ලෝක උරුම අඩවියක් වන අයුත්තායාහි අතීතයට පිය නගන්න. පුරාණ විහාරස්ථාන නටබුන් ගවේෂණය කරන්න, යෝධ බුද්ධ ප්‍රතිමා கண்டு களியுங்கள், සහ පැරැණි සියම් රාජධානියේ ඉතිහාසය ගැන ඉගෙන ගන්න.", "desc_ja":"ユネスコ世界遺産のアユタヤで過去にタイムスリップ。古代の寺院の遺跡を探索し、巨大な仏像に驚嘆し、かつてのシャム王国の歴史について学びましょう。" },
      
      // Malaysia
      { "id":"my-001","country":"Malaysia","title_en":"Kuala Lumpur Culture & Food","title_si":"ක්වාලාලම්පූර් සංස්කෘතිය සහ ආහාර","title_ja":"クアラルンプールの文化と食","price_from":"USD 429","duration":"4D/3N","rating":4.5,"images":[`https://picsum.photos/seed/my1/800/600`], "desc_en":"Discover the vibrant mix of culture and cuisine in Kuala Lumpur. Visit the iconic Petronas Towers, explore bustling street food markets, and experience the city's unique charm.", "desc_si":"ක්වාලාලම්පූර්හි සංස්කෘතියේ සහ ආහාරවල විචිත්‍රවත් මිශ්‍රණය සොයා ගන්න. සුප්‍රසිද්ධ පෙට්‍රෝනාස් කුළුණු වෙත පිවිසෙන්න, කාර්යබහුල වීදි ආහාර වෙළඳපොළවල් ගවේෂණය කරන්න, සහ නගරයේ අද්විතීය ආකර්ෂණය අත්විඳින්න.", "desc_ja":"クアラルンプールで文化と料理の活気あるミックスを発見してください。象徴的なペトロナスツインタワーを訪れ、賑やかな屋台市場を探索し、街のユニークな魅力を体験してください。" },
      { "id":"my-002","country":"Malaysia","title_en":"Langkawi Rainforest Escape","title_si":"ලangkawi වැසි වනාන්තරයෙන් පැන යාම","title_ja":"ランカウイの熱帯雨林エスケープ", "price_from":"USD 499","duration":"5D/4N","rating":4.6,"images":[`https://picsum.photos/seed/my2/800/600`], "desc_en":"Escape to the natural paradise of Langkawi. Ride the famous cable car for breathtaking views, explore ancient rainforests, and relax on stunning beaches.", "desc_si":"ලangkawi හි ස්වභාවික පාරාදීසයට පැන යන්න. විශ්මයජනක දසුන් සඳහා සුප්‍රසිද්ධ කේබල් කාර් රථයේ ගමන් කරන්න, පුරාණ වැසි වනාන්තර ගවේෂණය කරන්න, සහ සිත් ඇදගන්නාසුළු වෙරළ තීරයන්හි විවේක ගන්න.", "desc_ja":"ランカウイの自然の楽園へエスケープ。有名なケーブルカーに乗って息をのむような景色を楽しみ、古代の熱帯雨林を探索し、素晴らしいビーチでリラックスしてください。" },
      { "id":"my-003","country":"Malaysia","title_en":"Cameron Highlands Tea Trails","title_si":"කැමරන් හයිලන්ඩ්ස් තේ මංපෙත්","title_ja":"キャメロンハイランドの茶畑", "price_from":"USD 379","duration":"3D/2N","rating":4.7,"images":[`https://picsum.photos/seed/my3/800/600`], "desc_en":"Journey into the cool, rolling hills of the Cameron Highlands. Walk through lush tea plantations, enjoy the refreshing climate, and hike stunning nature trails.", "desc_si":"කැමරන් හයිලන්ඩ්ස්හි සිසිල්, කඳුකර ප්‍රදේශයට ගමනක් යන්න. සශ්‍රීක තේ වතු හරහා ඇවිදින්න, ප්‍රබෝධමත් දේශගුණය භුක්ති විඳින්න, සහ විශ්මයජනක ස්වභාවික මංපෙත්වල ගමන් කරන්න.", "desc_ja":"キャメロンハイランドの涼しく起伏のある丘への旅。緑豊かな茶畑を散策し、さわやかな気候を楽しみ、素晴らしい自然の小道をハイキングしてください。" },
      { "id":"my-004","country":"Malaysia","title_en":"Penang Street Art & Food","title_si":"පිනෑන්ග් වීදි කලාව සහ ආහාර", "title_ja":"ペナンのストリートアートとグルメ", "price_from":"USD 350", "duration":"3D/2N","rating":4.8, "images":[`https://picsum.photos/seed/my4/800/600`], "desc_en":"Explore the UNESCO-listed George Town in Penang, famous for its interactive street art and legendary food scene. A paradise for art lovers and foodies alike.", "desc_si":"පිනෑන්ග් හි UNESCO ලැයිස්තුගත ජෝර්ජ් ටවුන් ගවේෂණය කරන්න, එහි අන්තර්ක්‍රියාකාරී වීදි කලාව සහ ජනප්‍රිය ආහාර දර්ශනය සඳහා ප්‍රසිද්ධය. කලා ලෝලීන්ට සහ රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැති රසැerekseaj.", "desc_ja":"ユネスコ世界遺産のペナンのジョージタウンを探索し、そのインタラクティブなストリートアートと伝説的な食のシーンで有名です。アート愛好家や食通にとっての楽園です。" },
      
      // India
      { "id":"in-001", "country":"India", "title_en":"Golden Triangle Adventure", "title_si":"ස්වර්ණමය ත්‍රිකෝණයේ වික්‍රමය", "title_ja":"ゴールデントライアングル冒険", "price_from":"USD 550", "duration":"6D/5N", "rating":4.7, "images":[`https://picsum.photos/seed/in1/800/600`], "desc_en":"Explore the iconic Golden Triangle - Delhi, Agra, and Jaipur. Witness the majestic Taj Mahal, explore historic forts, and immerse yourself in the vibrant culture of Rajasthan.", "desc_si":"දිල්ලි, අග්‍රා, සහ ජායිපූර් යන ස්වර්ණමය ත්‍රිකෝණය ගවේෂණය කරන්න. අලංකාර ටජ් මහල් බලන්න, ඓතිහාසික බලකොටු ගවේෂණය කරන්න, සහ රාජස්ථානයේ විචිත්‍රවත් සංස්කෘතියේ ගිලී සිටින්න.", "desc_ja":"象徴的なゴールデントライアングル - デリー、アグラ、ジャイプールを探索します。壮大なタージ・マハルを目撃し、歴史的な砦を探索し、ラジャスタンの活気ある文化に浸ってください。" },
      { "id":"in-002","country":"India","title_en":"Kerala Backwaters & Ayurveda","title_si":"කේරළ පසුබිම් ජලය සහ ආයුර්වේදය","title_ja":"ケララ州のバックウォーターとアーユルヴェーダ", "price_from":"USD 499","duration":"5D/4N","rating":4.8,"images":[`https://picsum.photos/seed/in2/800/600`], "desc_en":"Experience tranquility in the serene backwaters of Kerala. Glide along in a traditional houseboat, rejuvenate with Ayurvedic treatments, and explore fragrant spice plantations.", "desc_si":"කේරළයේ සන්සුන් පසුබිම් ජලයේ ශාන්තිය අත්විඳින්න. සාම්ප්‍රදායික පාරු නිවසක ගමන් කරන්න, ආයුර්වේද ප්‍රතිකාරවලින් ප්‍රබෝධමත් වන්න, සහ සුවඳවත් කුළුබඩු වතු ගවේෂණය කරන්න.", "desc_ja":"ケララ州の静かなバックウォーターで静けさを体験してください。伝統的なハウスボートで滑るように進み、アーユルヴェーダ治療で若返り、香り高いスパイスプランテーションを探索します。" },
      { "id":"in-003","country":"India","title_en":"Goa Beach Party Vibes","title_si":"ගෝවා වෙරළ සාදයේ හැඟීම්","title_ja":"ゴアのビーチパーティーバイブ", "price_from":"USD 329","duration":"3D/2N","rating":4.4,"images":[`https://picsum.photos/seed/in3/800/600`], "desc_en":"Soak up the sun and vibrant party scene in Goa. Relax on golden beaches by day and dance the night away at lively beach clubs, enjoying delicious seafood.", "desc_si":"ගෝවේ හිරු එළිය සහ විචිත්‍රවත් සාද දර්ශනය පොඟවා ගන්න. දිවා කාලයේ රන්වන් වෙරළ තීරයන්හි විවේක ගන්න, සහ සජවී වෙරළ සමාජ ශාලාවල රාත්‍රිය පුරා නටමින්, රසවත් මුහුදු ආහාර භුක්ති විඳින්න.", "desc_ja":"ゴアで太陽と活気あるパーティーシーンを満喫してください。日中は黄金のビーチでリラックスし、夜は活気のあるビーチクラブで踊り明かし、おいしいシーフードを楽しみましょう。" },
      { "id":"in-004", "country":"India", "title_en":"Varanasi Spiritual Journey", "title_si":"වාරණාසි අධ්‍යාත්මික ගමන", "title_ja":"バラナシのスピリチュアルな旅", "price_from":"USD 480", "duration":"4D/3N", "rating":4.9, "images":[`https://picsum.photos/seed/in4/800/600`], "desc_en":"Embark on a spiritual journey in the ancient city of Varanasi. Witness the mesmerizing Ganga Aarti ceremony on the banks of the Ganges and explore sacred temples.", "desc_si":"පුරාණ වාරණාසි නගරයේ අධ්‍යාත්මික ගමනක් ආරම්භ කරන්න. ගංගා නදී ඉවුරේ සිත් ඇදගන්නාසුළු ගංගා ආරතී උත්සවය 목격 කර පූජනීය විහාරස්ථාන ගවේෂණය කරන්න.", "desc_ja":"古代都市バラナシでスピリチュアルな旅に出かけましょう。ガンジス川のほとりで魅惑的なガンガー・アールティの儀式を目撃し、神聖な寺院を探索してください。" }
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
        { name: "Daniel Brown", country_en: "Visited Malaysia", country_si: "මැලේසියාවේ සංචාරය කළා", country_ja: "マレーシアを訪問", quote_en: "The cool weather and beautiful scenery of the Cameron Highlands were a perfect escape from the city heat.", quote_si: "කැමරන් හයිලන්ඩ්ස්හි සිසිල් කාලගුණය සහ සුන්දර දර්ශන නගරයේ උණුසුමෙන් පරිපූර්ණ ගැලවීමක් විය.", quote_ja: "キャメロンハイランドの涼しい気候と美しい景色は、街の暑さからの完璧な逃避でした。", avatar: `https://i.pravatar.cc/150?u=my4`, photos: [] },
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
        { name: "Nimal Perera", country_en: "Visited Sri Lanka", country_si: "ශ්‍රී ලංකාවේ සංචාරය කළා", country_ja: "スリランカを訪問", quote_en: "The train ride to Ella was the most beautiful journey I've ever taken. Truly breathtaking.", quote_si: "ඇල්ලට ගිය දුම්රිය ගමන මම ගිය සුන්දරම ගමනයි. ඇත්තටම හුස්ම හිරවෙනවා.", quote_ja: "エッラへの列車の旅は、私が今まで経験した中で最も美しい旅でした。本当に息をのむほどです。", avatar: `https://i.pravatar.cc/150?u=sl1`, photos: ['https://picsum.photos/seed/np1/800/600'] },
        { name: "Charlotte Dubois", country_en: "Visited Sri Lanka", country_si: "ශ්‍රී ලංකාවේ සංචාරය කළා", country_ja: "スリランカを訪問", quote_en: "Climbing Sigiriya at sunrise was a core memory. The views were worth the early start!", quote_si: "හිරු උදාවේදී සීගිරිය නැගීම මූලික මතකයක් විය. උදේ පාන්දරින්ම පටන් ගත්තට වටින දසුන් තිබුණා!", quote_ja: "日の出にシーギリヤに登ったのは、核となる記憶でした。早起きする価値のある景色でした！", avatar: `https://i.pravatar.cc/150?u=sl2`, photos: [] },
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
                a_si: "පැකේජයක් වෙන්කරවා ගැනීමට හෝ වැඩි විස්තර ලබා ගැනීමට, කරුණාකර ඕනෑම පැකේජයක 'විස්තර බලන්න' බොත්තම ක්ලික් කර, සපයා ඇති WhatsApp සබැඳිය හරහා අප හා සම්බන්ධ වන්න. අපි ඔබට වහාම සහාය වන්නෙමු!",
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
            serviceHotel: "3 Star Hotels",
            serviceTransport: "AC Transport",
            serviceBreakfast: "Free Breakfast"
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
            serviceHotel: "තරු 3 ሆටල්",
            serviceTransport: "AC ප්‍රවාහනය",
            serviceBreakfast: "නොමිලේ උදෑසන ආහාරය"
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
            serviceHotel: "3つ星ホテル",
            serviceTransport: "エアコン付き車両",
            serviceBreakfast: "無料の朝食"
        }
    }
};