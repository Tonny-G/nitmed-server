const mongoose=require('mongoose')
const DonationSchema=new mongoose.Schema({
    donorName:{
        type:'String',
        required:'true',
    },
    medName:{
        type:'String',
        required:'true'
    },
    medType:{
        type:'String',
        required:'true'
    },
   
    medLotNo:{
        type:'String',
        required:'true'
    },
    medExpDate:{
        type:'Date',
        required:'true'},

    isDonor:{
        type:'boolean',
        default:'false'},
    date:{
        type:'Date',
    default:Date.now}


});
module.exports=mongoose.model('Donation',DonationSchema);
