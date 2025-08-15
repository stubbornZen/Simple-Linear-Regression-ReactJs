# Cost Function for Linear Regression

This code block implements the **cost function** for linear regression, also known as the **Mean Squared Error (MSE)**. Its purpose is to measure how well the linear model's predictions align with the actual data. A lower cost value indicates that the model is a better fit for the data.

$$
J(w, b) = \frac{1}{2m} \sum_{i=1}^{m} \left(f_{w,b}(x^{(i)}) - y^{(i)}\right)^2
$$

Where:

- $( m )$ is the number of training examples
- $( x^{(i)} )$ is the input feature of the $( i )$-th training example
- $( y^{(i)} )$ is the actual label of the $( i )$-th training example
- $( f_{w,b}(x^{(i)}) = w \cdot x^{(i)} + b )$ is the predicted value using parameters $w$ and $b$

---

## 🔍 How It Works

### 📥 Inputs

- `x`: List of input feature values ($x^{(i)}$)
- `y`: List of target output values ($y^{(i)}$)
- `w`: Weight parameter (slope of the line)
- `b`: Bias parameter (intercept of the line)

---

### 📈 Prediction

For each training example $i$, compute the model's prediction using the linear function:

$$
f_{w,b}(x^{(i)}) = w \cdot x^{(i)} + b
$$

This gives the estimated output (prediction) for the given input feature.

---

### ❌ Error Calculation

Measure how far off the prediction is from the actual label using squared error:

$$
\left(f_{w,b}(x^{(i)}) - y^{(i)}\right)^2
$$

This penalizes larger errors more heavily and ensures all error values are positive.

---

### 🧮 Total Cost

To evaluate the model’s performance over all $m$ training examples:

1. **Accumulate** all squared errors:

$$
\sum_{i=1}^{m} \left(f_{w,b}(x^{(i)}) - y^{(i)}\right)^2
$$

2. **Average and scale** the result using $\frac{1}{2m}$:

$$
J(w, b) = \frac{1}{2m} \sum_{i=1}^{m} \left(f_{w,b}(x^{(i)}) - y^{(i)}\right)^2
$$

This gives the final **cost** — a single scalar value representing the average error of the model's predictions. Lower cost means better model performance.

---

