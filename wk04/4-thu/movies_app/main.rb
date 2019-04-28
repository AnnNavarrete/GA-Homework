require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
 erb :index
end

get '/about' do
  erb :about
end

get '/movie_viewer' do
  title = params['title']

  url = "http://omdbapi.com/?t=#{title}&apikey=2f6435d9"
  response = HTTParty.get(url, format: :plain) #redundant
  @result = JSON.parse(response, symbolize_names: true)

  erb :movie_viewer
end

get '/search_result' do
  title = params['title']

  url = "http://omdbapi.com/?s=#{URI.escape(title)}&apikey=2f6435d9"
  response = HTTParty.get(url, normalize: :plaintext)
  result = JSON.parse(response, symbolize_names: true)
  
  file = File.open('search_history.txt', 'a+') do |file|
    file.puts "#{title}"
  end 
  
  @movies = result[:Search]
  if @movies == nil
    erb :no_movie_found
  elsif @movies.length == 1
    redirect "/movie_viewer?title=#{title}"
  else
    erb :search_result
  end
end

get '/history' do
  @history = []
  file = File.open('search_history.txt', 'r') do |file|
    file.each do |line|
      @history.push(line)
    end
  end
  erb :history
end





