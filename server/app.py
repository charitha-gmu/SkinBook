from flask import Flask, request, render_template
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
import io
import base64

app = Flask(__name__)
model = load_model('C:/Users/Tharun/Desktop/Hack/model.h5')  # Load your trained model
# Define category names based on your model's output
categories = {0: 'Acne', 1: 'Dry', 2: 'Oil', 3: 'Skin Redness', 4: 'Eczema Mild', 5: 'Vascular', 6: 'Wrinkle'}

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Adjusted to handle form data
    image_b64 = request.form['image']
    if not image_b64.startswith('data:image/png;base64,'):
        return "Error: Invalid image format", 400
    image_data = image_b64
    image_b64 = image_b64.split(",")[1]  # Remove the "data:image/png;base64," part

    # Convert base64 to PIL Image
    image_bytes = base64.b64decode(image_b64)
    image = Image.open(io.BytesIO(image_bytes)).convert('RGB')
    image = image.resize((150, 150))  # Resize to match model's expected input
    image_array = np.array(image) / 255.0  # Normalize the image
    image_array = image_array.reshape((1, 150, 150, 3))

    predictions = model.predict(image_array)[0]  # Get the first (and only) prediction

    # Normalize predictions to ensure they sum to 1 (if necessary)
    predictions = predictions / np.sum(predictions)

    # Convert prediction probabilities to percentages for each category
    probabilities = {categories[i]: f"{prob * 100:.2f}%" for i, prob in enumerate(predictions)}

    # Render result.html with the probabilities context
    
    return render_template('result.html', probabilities=probabilities, image_data=image_data)

if __name__ == '__main__':
    app.run(debug=True)
