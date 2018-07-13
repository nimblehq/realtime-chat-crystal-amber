.row
  .col-12
    - if (current_user = context.current_user)
      .row
        .col-8.no-padding
          .chat-box
            .chat-box__actions id="messages"
              == form(class: "form-group", id: "message-form") do
                == text_field(name: "message", id: "message", class: "form-control", placeholder: "Write Message ...", autofocus: "", required: "")
              - :end
            .chat-box__messages
        .col-4.no-padding
          == render(partial: "_user-profile.slang")
    - else
      p
        == link_to("Already have an account?", "/signin")
      p
        == link_to("Don't have an account yet?", "/signup")
    
