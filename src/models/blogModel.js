"use strict"

const mongoose=require('mongoose')

const blogPostSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            trim:true,
            required:true

        },
        content:{
            type: String,
            trim: true,
            required: true 
        }
    },
    {
        collection:'blogPost',
        timestamps:true
    }
)

// const nameSchema=new  mongoose.Schema(
//     {
//     // type: Alanın veri türünü belirtir. Örneğin, String, Number, Date, Array, vb.
//     // default: Alanın varsayılan değerini belirtir. Eğer bu değer belirtilmezse, alanın varsayılan değeri bu olur.
//     // required: Bu alanın zorunlu olup olmadığını belirtir. true ise, bu alan boş geçilemez.
//     // enum: Alanın alabileceği değerleri sınırlar. Bir dizi içinde belirtilen değerlerden birine sahip olmalıdır.
//     // min / max: Sayısal alanların alabileceği minimum ve maksimum değerleri belirtir.
//     // trim: String alanlar için, girilen değerin başındaki ve sonundaki boşlukları kaldırır.
//     // lowercase / uppercase: String alanlar için, girilen değeri otomatik olarak küçük harfe veya büyük harfe dönüştürür.
//     // unique: Bu alanın benzersiz olması gerektiğini belirtir. Aynı değere sahip başka bir belge olamaz.
//     // validate: Bu alanın değerini doğrulamak için özel bir doğrulama işlevi belirtir.
//     // get / set: Alanın değerini getirmek veya ayarlamak için özel işlevler belirtir.
//         fieldName:{
//             type:String,
//             default:null,
//             trim:true,
//             unique:false,
//             select:true, // model cagrildiginda gelsin mi
//             index:false,   // dbdeki indeksine eklenirsek performans artar
//             required: true, // veri girişi gerklimi
//             required: [true, 'error message'], // gereklimi değilmi , hata mesajı
//             enum:[[1,2,3],'error message'], // belirli bir pattern e göre veri girişi
//             validate: [function(data){ return true},'error message'],// veri fonksiyon ile doğrulama
//             get: function(data){ return true} ,      // veriyi çağırırken çalışacak fonksiyon
//             set: function(data){ return true}       // veriyi kaydederken çalışacak fonksiyon


//         }

//     },
//     {
//         collection:'collectionName', // tablo ismi
//         timestamps: true // createdate, updateDate
//     }
// )