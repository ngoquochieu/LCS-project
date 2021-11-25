    const profile = document.querySelector('.action .profile');
    const toggleMenu = document.querySelector('.menu');
    const js_login = document.querySelector('#js-login');
    const login_form = document.querySelector('#login-form');
    const js_logout = document.querySelector('#js-logout');
    const logout_form = document.querySelector('#logout-form');
    const menu = document.querySelector('.menu');
    const icon_selection = document.querySelector('.icon-selection');
    const user_img = document.querySelector('#user-img');
    const user_name = document.querySelector('#user-name');
    const profile_form = document.querySelector('#profile-form');
    const js_my_profile = document.querySelector('#js-my-profile');
    if(js_login) {
        icon_selection.addEventListener('click', (event) => {
            if (event.target.nodeName != 'A') return;
            return false; // prevent browser action (don't go to the URL)
        });
        //Login form
        js_login.addEventListener('click', () => {
        login_form.submit();
        })
    }else {
        menu.addEventListener('click', (event) => {
            if (event.target.nodeName != 'A') return;
            return false; // prevent browser action (don't go to the URL)
        });
        profile.addEventListener('click', ()=> {
            toggleMenu.classList.toggle('active');
        });      
        //Logout form
        js_logout.addEventListener('click', () => {
            logout_form.submit();
        });
        //profile-form
        js_my_profile.addEventListener('click',() => {
            profile_form.submit();
        });
        //Get cookie user
        if(document.cookie) {
            const cookieUser = decodeURIComponent(document.cookie);
            if(cookieUser) {
                const userInfo = JSON.parse(cookieUser.slice(cookieUser.indexOf('{')));
                user_img.src = userInfo.img;
                user_name.innerHTML = userInfo.fullname;
            }
        }
    }
    
   
 
