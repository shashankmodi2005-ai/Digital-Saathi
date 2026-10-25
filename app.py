from flask import Flask, render_template

app = Flask(__name__)

# --- Home Route ---
@app.route('/')
def home():
    return render_template('index.html')

# 💡 Agar aapko koi naya page ya API route add karna ho, toh aap yahan add kar sakte hain:
# @app.route('/about')
# def about():
#     return "Digital Saathi - Cyber Safety & Digital Literacy Hub"

if __name__ == '__main__':
    app.run(debug=True)