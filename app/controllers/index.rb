get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/tweet' do
  erb :tweet
end

post '/tweet' do
  tweet = params[:tweet]
  Twitter.update(tweet)

  erb :tweet
end
