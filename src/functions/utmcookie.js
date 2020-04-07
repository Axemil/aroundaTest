export default {
    cookieNamePrefix: "_uc_",

    utmParams: ["utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content"],

    cookieExpiryDays: 365,

    // From http://www.quirksmode.org/js/cookies.html
    createCookie: function(name, value, days) {
        let expires = "";

        if (days) {
            const date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            expires = "; expires="+date.toGMTString();
        }

		document.cookie = this.cookieNamePrefix + name + "=" + value + expires + "; path=/";
		console.log(document.cookie)
    },

    readCookie: function(name) {
        const nameEQ = this.cookieNamePrefix + name + "=";
		const ca = document.cookie.split(';');
        for(let i=0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0)===' '){
                c = c.substring(1,c.length);
            }
            if (c.indexOf(nameEQ) === 0){
                return c.substring(nameEQ.length,c.length);
            }
        }
        return null;
    },

    getUtmData: function() {
        const data = {};
        this.utmParams.forEach((paramName) => {

			let cookieVal = this.readCookie(paramName);
			
            data[paramName.replace('utm_', '')] = cookieVal;
		});
		

        return data;
    },

    eraseCookie: function(name) {
        this.createCookie(name,"",-1);
    },

    getParameterByName: function(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        const regexS = "[\\?&]" + name + "=([^&#]*)";
        const regex = new RegExp(regexS);
        const results = regex.exec(window.location.search);
        if(results == null) {
            return "";
        } else {
            return decodeURIComponent(results[1].replace(/\+/g, " "));
        }
    },

    utmPresentInUrl: function() {
        let present = false;
        for (let i = 0; i < this.utmParams.length; i++) {
            const param = this.utmParams[i];
            const value = this.getParameterByName(param);
            if (value !== "" && value !== undefined) {
                present = true;
            }
        }
        return present;
    },

    writeUtmCookieFromParams: function() {
        for (let i = 0; i < this.utmParams.length; i++) {
            const param = this.utmParams[i];
            const value = this.getParameterByName(param);
            this.createCookie(param, value, this.cookieExpiryDays)
        }
    },

    writeCookieOnce: function(name, value) {
        const existingValue = this.readCookie(name);
        if (!existingValue) {
            this.createCookie(name, value, this.cookieExpiryDays);
        }
    },

    writeReferrerOnce: function() {
        const value = document.referrer;
        if (value === "" || value === undefined) {
            this.writeCookieOnce("referrer", "direct");
        } else {
            this.writeCookieOnce("referrer", value);
        }
    },

    referrer: function() {
        return this.readCookie("referrer");
    }
};