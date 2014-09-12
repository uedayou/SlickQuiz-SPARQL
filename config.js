// SPARQLエンドポイントURL
var endpoint = "http://lodcu.cs.chubu.ac.jp/SparqlEPCU/api/yokohama_quiz";
// SPARQLクエリ
var query = (function () {/*
select distinct * where { ?uri <http://linkdata.org/property/rdf1s560i#question> ?question;
<http://linkdata.org/property/rdf1s560i#choice1> ?choise1;
<http://linkdata.org/property/rdf1s560i#choice2> ?choise2;
<http://linkdata.org/property/rdf1s560i#choice3> ?choise3;
<http://linkdata.org/property/rdf1s560i#choice4> ?choise4;
<http://linkdata.org/property/rdf1s560i#answer> ?answer_no;
<http://linkdata.org/property/rdf1s560i#kaisetsu> ?kaisetsu.
bind(concat('</p>解説：',str(?kaisetsu),'</p>') as ?correct)
bind(concat('</p>解説：',str(?kaisetsu),'</p>') as ?incorrect) } ORDER BY RAND() LIMIT 10
*/}).toString().match(/\n([\s\S]*)\n/)[1];

// クイズアプリの表示設定
var quizJSON = {
    "info": {
        "name":    "横浜検定クイズ",
        "main":    "<p>横浜に関するクイズ集です。</p>",
        "results": "<p>このアプリのクイズデータは、http://linkdata.org/work/rdf1s560i のデータを使用しています。</p>",
        "level1":  "すばらしい!",
        "level2":  "なかなかです",
        "level3":  "普通です",
        "level4":  "まだまだです",
        "level5":  "残念でした" // no comma here
    }
};

var label_correct = "<p><span>正解</span></p>";
var label_incorrect = "<p><span>不正解</span></p>";