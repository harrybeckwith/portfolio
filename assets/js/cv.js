/* Html tags and strings */
var HTMLName = "<h1>%data%</h1>";
var HTMLSkills = "<li>%data%</li>";
var HTMLHome = "<h3>%data%</h3>";
var HTMLPortfolio = "<a href ='#'>%data%</a>";
var HTMLEmail = "<a href ='#'>%data%</a>";
var HTMLIntro = "<p>%data%</p>";
var HTMLTitle = "<h2>%data%</h2>";
var HTMLInterests = "<p>%data%</p>";
var HTMLFooterName = '<p class ="footer__left">%data%</p>';

var personal = {
    firstName: "Harry",
    lastName: "Beckwith",
    home: "London, UK",
    portfolio: "www.codejourney.co.uk",
    email: "harryjbeckwith@gmail.com",
    skills: ["HTML", "CSS", "SCSS", "jQuery", "JavaScript"],
    title: "Front - end developer",
    intro: "I currently am working as a Front-End Developer at River Island, which is where my passion for code and development converge. See my previous work history on LinkedIn.",
    display: function () {
        /* Header */
        var formattedName = HTMLName.replace(
            "%data%",
            this.firstName + "<br>" + this.lastName
        );
        $(".header__title").append(formattedName);
        var formattedNameFooter = HTMLName.replace(
            "%data%",
            this.firstName + " " + this.lastName
        );
        $("footer .content__section").append(formattedNameFooter);


        var formattedTitle = HTMLTitle.replace("%data%", this.title);
        $(".header__title").append(formattedTitle);

        var formattedIntro = HTMLIntro.replace("%data%", this.intro);
        $(".header__intro .content__section").append(formattedIntro);

        /* End Header */

        /* Contact */
        var formattedHome = HTMLHome.replace("%data%", this.home);
        $(".header__contact").append(formattedHome);

        var formattedPortfolio = addHyperLink(
            HTMLPortfolio,
            this.portfolio,
            this.portfolio
        );
        $(".header__contact").append(formattedPortfolio);
        $("footer .content__section .footer__contact").append(formattedPortfolio);

        var formattedEmail = addHyperLink(HTMLEmail, this.email, this.email);
        $(".header__contact").append(formattedEmail);
        $("footer .content__section .footer__contact").append(formattedEmail);
        /* End - contact */

        for (skill in this.skills) {
            var formattedSkill = HTMLSkills.replace("%data%", this.skills[skill]);
            $(".skills").append(formattedSkill);
        }



    }
};

var experience = {
    Ri: {
        title: "Front-end developer",
        company: "RiverIsland",
        date: "Jan 2017",
        dateTo: new Date()
            .toString()
            .split(" ")
            .splice(1, 3)
            .join(" "),
        description: "Working as a web designer/developer my responsibilities include the design, layout, coding, technical and graphical aspects of a website - how the site works and how it looks. Also i work on the maintenance and update of an existing sites."
    },

    Experience: function (title, company, date, dateTo, description) {
        this.title = title;
        this.company = company;
        this.date = date;
        this.description = description;

        // format info
        var html = "";

        html += '<div class ="content__section">';
        html += "<h3>" + title + "</h3>";
        html += "<p>" + company + "</p>";
        html += "<p>" + date + " " + dateTo + "</p>";
        html += "<p>" + description + "</p>";
        html += "</div>";

        $(".exp__section").append(html);
    }
};

var education = {
    itec: {
        name: "ITEC Learning Technologies Ltd",
        date: '2014 - 2015',
        qualification: "City and Guilds NVQ Level 3 higher apprenticeship: IT, Software, Web and Telecoms Professionals.",
        description: "Having completed a qualification in City and Guilds NVQ Level 3 higher apprenticeship: IT, Software, Web and Telecoms Professionals. I have gained a strong understanding of the technologies used to created modern and functional websites."
    },
    uni: {
        name: "The University of Northampton",
        date: '2010 - 2012',
        qualification: 'Physical sciences'
    },

    Education: function (name, date, qualification, description) {
        this.name = name;
        this.date = date;
        this.qualification = qualification;
        this.description = description;


        // format info
        var html = "";

        html += '<div class ="content__section">';
        html += "<h3>" + name + "</h3>";
        html += "<p>" + qualification + "</p>";
        html += "<p>" + date + "</p>";
        html += "<p>" + description + "</p>";
        html += "</div>";

        $(".education__section").append(html);
    }
};

var RiExp = new experience.Experience(
    experience.Ri.title,
    experience.Ri.company,
    experience.Ri.date,
    experience.Ri.dateTo,
    experience.Ri.description
);

var ItectEd = new education.Education(
    education.itec.name,
    education.itec.date,
    education.itec.qualification,
    education.itec.description
);

var uniEd = new education.Education(
    education.uni.name,
    education.uni.date,
    education.uni.qualification
);

var interests = {
    info: 'I am always looking for new skills to learn, currently i am working on improving JavaScript skills, and being able to build web application. I have learnt the basics of React js, and i am looking forward to gaining a deeper understanding of the JS library.',

    display: function () {
        var formattedInterest = HTMLInterests.replace(
            "%data%",
            this.info
        );
        $(".interests__section .content__section").append(formattedInterest);
    }
}


/* display functions */
personal.display();
interests.display();

/* helper functions*/

function addHyperLink(html, url, text) {
    if (!text) {
        text = url;
    }

    var formattedURL = html.replace("#", url);
    formattedURL = formattedURL.replace("%data%", text);

    return formattedURL;
}
