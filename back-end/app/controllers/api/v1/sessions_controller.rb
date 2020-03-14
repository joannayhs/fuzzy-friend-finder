class Api::V1::SessionsController < ApplicationController

    def login
        byebug
        user  = User.find_by(email: params[:session][:email])
        if user && user.authenticate(params[:session][:password])
            session[:user_id] = user.id 
            render json: user, except: [:password]
        else 
            render json: {
                error: "Invalid Email or Password"
            }
        end 
    end 

    def logout
        session.clear
    end 


end
