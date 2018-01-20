# frozen_string_literal: true

module Users
  class OmniauthCallbacksController < Devise::OmniauthCallbacksController # :nodoc:
    def facebook
      @user = User.from_omniauth(request.env['omniauth.auth'])
      @user.save! unless @user.persisted?

      sign_in_and_redirect @user, event: :authentication # this will throw if @user is not activated
      set_flash_message(:notice, :success, kind: 'Facebook') if is_navigational_format?
    end

    def failure
      redirect_to root_path
    end
  end
end
