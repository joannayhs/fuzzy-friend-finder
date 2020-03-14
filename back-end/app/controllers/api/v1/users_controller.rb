class Api::V1::UsersController < ApplicationController
     

    def index 
        users = User.all
        render json: users, except: [:password_digest]
    end 

    def show 
        user = get_user
        render json: user, except: [:password_digest]
    end 

    def create 
        user = User.new(user_params)
        if user.save
            session[:user_id]  = user.id 
            render json: user, except: [:password_digest]
        else 
            render json: {errors: user.errors.full_messages}
        end 
    end 

    private
    def get_user
        User.find_by(id: params[:id])
    end 

    def user_params
        params.require(:user).permit(:email, :password)
    end 


end
