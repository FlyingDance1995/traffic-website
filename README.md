Similar tutorial: (https://ngrok.com/docs/integrations/coinbase/webhooks/) - (All: https://ngrok.com/docs/cloud-edge/modules/webhook/)
# Step 1: Start your app
For this tutorial, we'll use the sample NodeJS app available on GitHub. (https://github.com/ngrok/ngrok-webhook-nodejs-sample)

To install this sample, run the following commands in a terminal:

git clone https://github.com/ngrok/ngrok-webhook-nodejs-sample.git
cd ngrok-webhook-nodejs-sample
npm install

This will get the project installed locally.

Now you can launch the app by running the following command:

npm start

The app runs by default on port 3000.

You can validate that the app is up and running by visiting http://localhost:3000. The application logs request headers and body in the terminal and responds with a message in the browser.

# Step 2: Launch ngrok
Once your app is running successfully on localhost, let's get it on the internet securely using ngrok!

If you're not an ngrok user yet, just sign up for ngrok for free. (https://dashboard.ngrok.com/get-started/setup)

Download the ngrok agent. (https://ngrok.com/download)

Go to the ngrok dashboard (https://dashboard.ngrok.com/get-started/setup) and copy your Authtoken.
Tip: The ngrok agent uses the auth token to log into your account when you start a tunnel.

Start ngrok by running the following command:

ngrok http 3000

ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with Your App).

Management agents: (https://dashboard.ngrok.com/tunnels/agents)