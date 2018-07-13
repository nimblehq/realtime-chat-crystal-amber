.user-profile
    .user-profile__actions
        a.text-link href="/signout" title="Sign out"
            i class="fas fa-sign-out-alt"
    .user-profile__detail
        .user-profile__avatar
            img src="https://api.adorable.io/avatars/180/#{current_user.email}.png"
        span.user-profile__email
            a.text-link id="user" href="/profile"
                == current_user.email
