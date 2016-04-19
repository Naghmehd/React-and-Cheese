class CheesesController < ApplicationController
  before_action :set_cheese, only: [:show, :edit, :update, :destroy]

  # GET /cheeses
  # GET /cheeses.json
  def index
    @cheeses = cheese.all.order(created_at: :desc)
    respond_to do |format|
      format.html
      format.json do
        render json: {cheeses: @cheeses}
      end
    end

  end

  # GET /cheeses/1
  # GET /cheeses/1.json
  def show
    @cheeses = set_cheese
    @message = @cheeses.message
    respond_to do |format|
      format.html
      format.json do
        render json: {cheese: @cheeses}
      end
    end

  end

  # GET /cheeses/new
  def new
    @cheese = cheese.new
  end

  # GET /cheeses/1/edit
  def edit
  end

  # POST /cheeses
  # POST /cheeses.json
  def create
   @cheese = current_user.cheeses.build(cheese_params)

   respond_to do |format|
       if @cheese.save
         format.html { redirect_to @cheese, notice: 'cheese was successfully created.' }
         format.json { render :show, status: :created, location: @cheese }
       else
         format.html { render :new }
         format.json { render json: @cheese.errors, status: :unprocessable_entity }
       end
     end
  end


  # PATCH/PUT /cheeses/1
  # PATCH/PUT /cheeses/1.json
  # def update
  #   respond_to do |format|
  #     if @cheese.update(cheese_params)
  #       format.html { redirect_to @cheese, notice: 'cheese was successfully updated.' }
  #       format.json { render :show, status: :ok, location: @cheese }
  #     else
  #       format.html { render :edit }
  #       format.json { render json: @cheese.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # DELETE /cheeses/1
  # DELETE /cheeses/1.json
  def destroy
    @cheese.destroy
    respond_to do |format|
      format.html { redirect_to cheeses_url, notice: 'cheese was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cheese
      @cheese = cheese.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def chees_params
      params.require(:cheese).permit(:message)
    end
end
end
