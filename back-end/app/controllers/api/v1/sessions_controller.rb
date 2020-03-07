class Api::V1::SessionsController < ApplicationController

    def login
        user  = User.find_by(email: params[:session][:email])
        if user && user.authenticate(params[:session][:password])
            session[:user_id] = user.id 
        else 
            render json: {
                error: "Invalid Username or Password"
            }
        end 
    end 

    def logout
        session.clear
    end 


end
