class TasksController < ApplicationController

  def index

  end

  def create
    @task=Task.new(task_param)
    @task.save
    respond_to do |format|
      format.js {}
    end
  end

  def task_param
    params.require(:task).permit(:start_time, :end_time, :name, :user_id)
  end

end
