# The Causal Calibration System: Stress-Testing Attribution Models
## Validating Mathematical Integrity via Synthetic Ground Truth and Causal Stress Tests

**Technical Whitepaper v1.0.0**

| **Attribute** | **Value** |
|---|---|
| **Version** | 1.0.0 |
| **Status** | Production-Ready |
| **Date** | January 31, 2026 |
| **Classification** | Quality Assurance / Statistical Validation |
| **Document Type** | Technical Whitepaper |

---

## **Abstract**

In marketing science, the "Correct" attribution is unknown (ground truth is unobserved). This creates a validation crisis: how do we know if a Markov or Shapley model is actually accurate? This paper details the **Causal Calibration System**, a robust testing suite that generates complex, synthetic datasets with **known ground-truth causal effects**. By subjecting attribution models to five "Causal Stress Tests" (including Last-Touch Bias and Confounding Variables), we quantify their error rates and identify the specific conditions under which they fail.

---

## **Glossary & Notation**

| **Term** | **Definition** |
|---|---|
| **Synthetic Ground Truth** | A simulated dataset where the exact causal effect of every action is defined by the researcher. |
| **Stress Test** | A specific data scenario designed to break a model (e.g., extreme collinearity). |
| **Last-Touch Bias** | The systematic overvaluation of bottom-funnel channels. |
| **Confounding Variable** | An unobserved factor (e.g., Seasonality) that influences both marketing spend and sales. |
| **Calibration Score** | A normalized metric (0-100) representing how closely a model's estimate matches the ground truth. |

---

## **1. The Validation Crisis**

The biggest problem with marketing attribution is that **you cannot measure what you do not know**. If a model says "Facebook drove $1M," there is no objective way to prove it is right in a real-world setting. This leads to "Attribution Shopping," where organizations choose the model that gives the most favorable results. The **Calibration System** provides an objective, scientific benchmark.

---

## **2. The Five Causal Stress Tests**

We evaluate every model against five "Worst Case" scenarios:

### **2.1 Last-Touch Bias (The "Closer" Trap)**
We simulate a journey where a "Social" ad drives 90% of the intent, but the user always performs a final "Search" before buying. 
- **Success Criteria:** The model must identify "Social" as the primary driver.
- **Fail Mode:** Heuristic models (Last-Touch) will assign 100% to Search.

### **2.2 Correlated Channels (The Collinearity Test)**
Two channels (Type A and Type B) always fire together. One is causal, the other is a passenger.
- **Success Criteria:** The model correctly identifies the marginal contribution of the causal channel.

### **2.3 Interaction Effects (The Synergy Test)**
Channel A and B do nothing alone, but together they drive massive lift.
- **Success Criteria:** The model allocates credit to the *combination* (fairly distributed).

### **2.4 Delayed Effects (The Memory Test)**
An ad at $T_0$ causes a conversion at $T_{48h}$.
- **Success Criteria:** The model correctly links the conversion to the high-friction historical touchpoint.

### **2.5 Confounding Variables (The Hidden Driver)**
Sales go up during "Rainy Days" regardless of marketing. Marketing spend also goes up on "Rainy Days."
- **Success Criteria:** The model detects the baseline lift and does not misattribute it to marketing.

---

## **3. Synthetic Data Generation Engine**

We use a generative stochastic process to build paths. Each path includes:
- **Latent Intent State:** A hidden variable representing the user's "readiness to buy."
- **Channel Impact Matrix:** A configured $\Delta$ representing how much each channel shifts that intent.
- **Noise Injection:** Stochastic variance to simulate real-world data entropy.

---

## **4. Error Decomposition & Scoring**

We calculate the **Absolute Causal Error (ACE)**:

$$ACE = \sum_{k=1}^K | \hat{\beta}_k^{Estimated} - \beta_k^{True} |$$

Models are ranked by their **Calibration Score**:
- **90-100:** Production-Ready.
- **70-89:** Use with Caution (documented biases).
- **< 70:** Failed Verification.

---

## **5. Integration with Portfolio Hub**

The Calibration System serves as the "Judge" for the entire attribution stack. Every update to the Markov or MMM engines must undergo a **Re-Certification Sweep**. The results are displayed in the Portfolio Hub, ensuring that only "Validated" models are used for client-facing decisions.

---

## **6. Technical Implementation Specification**

- **Language:** Python (NumPy, SciPy, Pandas).
- **Visualization:** Radar charts for Stress-Test multi-dimensional performance.
- **Test Volume:** Thousands of simulations per test case to ensure statistical stability.

---

## **7. Causal Interpretation & Limitations**

- **Simulation Fidelity:** A synthetic test is only as good as the simulation. If the simulation doesn't reflect real-world human behavior, the validation is moot.
- **Known-Unknowns:** We cannot test for confounding variables that we haven't first modeled in the simulation.

---

## **8. Conclusion**

Attribution without calibration is just guesswork. The Causal Calibration System turns marketing attribution into a rigorous discipline by providing the one thing real-world data cannot: **The Truth.** 
