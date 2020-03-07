class Api::V1::SessionsController < ApplicationController

    def create
        user  = User.find_by(username: params[:session][:username])
        if user && user.authenticate(params[:session][:password])
            session[:user_id] = user.id 
        else 
            render json: {
                error: "Invalid Username or Password"
            }
        end 
    end 

    
end
