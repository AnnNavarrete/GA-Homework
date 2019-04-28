require 'sinatra'
require 'sinatra/reloader'
require 'pry'

  get '/' do
    redirect '/99'
  end

  get '/0' do
    erb :restart
  end

  get '/:num_bottles' do
    @number = params['num_bottles'].to_i
    erb :number
  end

  





