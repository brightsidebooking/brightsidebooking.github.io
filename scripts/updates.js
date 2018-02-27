function Show(title, bands, date, flierImgPath, fbEventUrl){
    let self = this;
    let datestring = date.replace(/\./g, "/");

    self.title = title;
    self.bands = bands;
    self.date = new Date(datestring);
    self.dateString = date;
    self.flierImgPath = flierImgPath;
    self.fbEventUrl = fbEventUrl;

    self.getDisplayText = function(){
        let displayString = self.title === null ? getBandList() : self.title;
        let flierText = self.flierImgPath === null ? "" : ' -- <a href="'+ self.flierImgPath + '" target="_blank">'+'flier</a>';
        return '<p><a href="'+ self.fbEventUrl + '" target="_blank">' + self.dateString + ' -- ' + displayString + '</a>'+ flierText + '</p>';
    };

    function getBandList(){
        let bandList = '';
        let bandlength = self.bands.length;
        for (let i = 0; i !== bandlength; i++){
            let bandName = self.bands[i];
            let ending = '';
            if (i === bandlength -2)
                ending = ', and ';
            else if (i === bandlength - 1)
                ending = '';
            else
                ending = ', ';

            bandList += bandName + ending;
        }
        return bandList;
    }
}