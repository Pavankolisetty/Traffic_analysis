import torch
from ultralytics.utils.downloads import attempt_download_asset
from ultralytics.utils import temporary_modules
from ultralytics.yolo import YOLO

def torch_safe_load(weight):
    """ 
    This function attempts to load a PyTorch model with the torch.load() function. If a ModuleNotFoundError is raised, 
    it catches the error, logs a warning message, and attempts to install the missing module via the 
    check_requirements() function. After installation, the function again attempts to load the model using torch.load(). 

    Args: 
        weight (str): The file path of the PyTorch model. 

    Returns: 
        (dict): The loaded PyTorch model. 
    """ 
    try: 
        with temporary_modules({ 
                'ultralytics.yolo.utils': 'ultralytics.utils', 
                'ultralytics.yolo.v8': 'ultralytics.models.yolo', 
                'ultralytics.yolo.data': 'ultralytics.data'}):  # for legacy 8.0 Classify and Pose models 
            return torch.load(weight, map_location='cpu'), weight  # load 

    except ModuleNotFoundError as e:  # e.name is missing module name 
        # Handle the missing module error
        pass  # Replace this with your desired error handling logic

# Path to yolov8n.pt
weight_path = r"C:\Users\pavan kumar\OneDrive - Vignan University\Web dev_CISTUP\Backend\Traffic_analysis\yolov8n.pt"

# Load the model
loaded_model, weight_path = torch_safe_load(weight_path)

# Use the loaded model for inference or further processing
