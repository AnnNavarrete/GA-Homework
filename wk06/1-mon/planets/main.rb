require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'active_record'
require 'pry'

options = {
  adapter: 'postgresql',
  database: 'planets'
}

# ActiveRecord::Base is a class
ActiveRecord::Base.establish_connection(options)

# the < pointer to Planet is inhereting from the ARB class
class Planet < ActiveRecord::Base
end

get '/' do
  erb :index
end

# create another planet
get '/planets/new' do
  erb :new
end

post '/planets/create' do
  "Adding planet"
  planet = Planet.new
  planet.name = params[:name]
  planet.image = params[:image]
  planet.diameter = params[:diameter]
  planet.distance = params[:distance]
  planet.mass = params[:mass]
  planet.moons = params[:moons]
  planet.save
  redirect '/planets'
end

# read/show all planets in page
get '/planets' do
 @planets = Planet.all
 erb :planets
end

# update planet information
get '/planets/:id/update' do
  @planet = Planet.find(params[:id])
  erb :update 
end

put '/planets/:id' do
  planet = Planet.find(params[:id])
  planet.name = params[:name]
  planet.image = params[:image]
  planet.diameter = params[:diameter]
  planet.distance = params[:distance]
  planet.mass = params[:mass]
  planet.moons = params[:moons]
  planet.save
  redirect "/planets"
end

# delete planet info
get '/planets/:id' do
  @planet = Planet.find(params[:id])
  erb :show
end

delete '/planets/:id' do
  planet = Planet.find(params[:id])
  planet.delete
  redirect '/planets'
end








