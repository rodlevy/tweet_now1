post '/create_user' do
  new_user = User.create(params[:user])

  if new_user.invalid?
    @errors = new_user.errors
    p @errors
    erb :errors
  else
    session[:user_id] = new_user.id
    redirect '/'
  end
end

get '/login' do
  if request.xhr?
    erb :_login, :layout => false, :locals => {:user => @user}
  else
    erb :login
  end
end

get '/create_user' do
  erb :login
end


post '/login' do
  @user = User.authenticate(params[:user])
  if @user
     session[:user_id] = @user.id
    redirect to '/'
  else
    redirect to '/'
  end
end


get '/logout' do
  session[:user_id] = nil
  redirect to '/'
end
