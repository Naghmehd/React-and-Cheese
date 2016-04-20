class CheesesController < ApplicationController
  before_action :set_cheese, only: [:show, :edit, :update, :destroy]
   def index
     @cheeses = Cheese.all
   end

   def show
     @cheese = Cheese.find(params[:id])
     @users = @cheese.users
   end

   def new
     @cheese = Cheese.new
   end

   def create
     @cheese = Cheese.new(cheese_params)

     respond_to do |format|
       if @cheese.save
         format.html { redirect_to @cheese, notice: 'Cheese was successfully created.' }
         format.json { render :show, status: :created, location: @cheese }
       else
         format.html { render :new }
         format.json { render json: @cheese.errors, status: :unprocessable_entity }
       end
     end
   end

   private

  def set_cheese
     @cheese = Cheese.find(params[:id])
  end

  def cheese_params
    params.require(:cheese).permit(:name)
  end

end
