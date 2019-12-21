class AccountController < ApplicationController
  def login
    if request.post?
      authenticate_user
    else
      if User.current.logged!
        redirect_back_or_default home_url, referer: true
      end
    end
  rescue

  end

  def logout

  end
end