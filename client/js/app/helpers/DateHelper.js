class DateHelper{

    
    static dateToText(data){
        return  `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static textToDate(text){

        if(!/\d{4}-\d{2}-\d{2}/.test(text)){
            throw Error('Data deve estar no formato yyyy-mm-dd');
        }

        return new Date(...text.split('-')
                        .map((item, indice) => item - indice % 2));
    }

}