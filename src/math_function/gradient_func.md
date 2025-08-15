# Gradient Function for Linear Regression

This code block implements the **gradient computation** for the cost function in linear regression. It is used to determine the direction and magnitude by which to update the model parameters ($w$ and $b$) in order to minimize the cost.

The gradients (partial derivatives) of the cost function with respect to the parameters are calculated as follows:

---

## 🧠 Gradient Descent Background

To minimize the cost function:

$$
J(w, b) = \frac{1}{2m} \sum_{i=1}^{m} \left(w \cdot x^{(i)} + b - y^{(i)}\right)^2
$$

We use **gradient descent**, which requires computing the partial derivatives of $J(w, b)$:

- Gradient with respect to $w$:

$$
\frac{\partial J(w, b)}{\partial w} = \frac{1}{m} \sum_{i=1}^{m} (f_{w,b}(x^{(i)}) - y^{(i)}) \cdot x^{(i)}
$$

- Gradient with respect to $b$:

$$
\frac{\partial J(w, b)}{\partial b} = \frac{1}{m} \sum_{i=1}^{m} (f_{w,b}(x^{(i)}) - y^{(i)})
$$

Where:

$$
f_{w,b}(x^{(i)}) = w \cdot x^{(i)} + b
$$

---

## 🔍 How It Works

### 📥 Inputs

- `x`: List of input features ($x^{(i)}$)
- `y`: List of corresponding true labels ($y^{(i)}$)
- `w`: Current weight (slope)
- `b`: Current bias (intercept)

---

### 📈 Step-by-Step Gradient Computation

#### 1. 📊 Prediction

For each training example, compute the predicted value:

$$
f = f_{w,b}(x^{(i)}) = w \cdot x^{(i)} + b
$$

This represents the model's output (i.e., prediction) for input $x^{(i)}$.

---

#### 2. 🔄 Accumulate Gradients

For each example, accumulate the partial derivatives:

- Gradient with respect to $w$:

$$
\text{dc\_dw} += \left(f - y^{(i)}\right) \cdot x^{(i)}
$$

- Gradient with respect to $b$:

$$
\text{dc\_db} += \left(f - y^{(i)}\right)
$$

This step adds up the individual gradients from all training examples.

---

#### 3. 🧮 Scale the Gradients (Average Over All Examples)

Once all examples have been processed, compute the average gradients:

- Final gradient with respect to $w$:

$$
\frac{\partial J}{\partial w} = \frac{1}{m} \cdot \text{dc\_dw}
$$

- Final gradient with respect to $b$:

$$
\frac{\partial J}{\partial b} = \frac{1}{m} \cdot \text{dc\_db}
$$

These gradients are returned from the function and used to update the model parameters.

---
