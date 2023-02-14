# Stripe API using Stripe CLI

## Creating an App using Stripe CLI

1. First download *.deb(For Linux)* and installing using ********apt********
2. By using following command, log in to your stripe account from CLI and follow the prompt.
    
    ```bash
    stripe login
    ```
    

1. Check your stripe version
    
    ```bash
    stripe version
    ```
    

1. Also check for Node-js version
    
    ```bash
    node -v
    ```
    

1. Install the Stripe APPS Plugin CLI, by using following command
    
    ```bash
    stripe plugin install apps
    ```
    
2.  Create an App in your local machine
    
    ```bash
    stripe apps create <**app_name**>
    ```
    
3. Get into **********************helloworld**********************  app directory
    
    ```bash
    cd helloworld
    ```
    
4. To preview the app created, start a development server on your local machine and Press Enter to open the browser
    
    *(Note: Safari browser is not supported for Stripe Dashboard)*
    
5. Start the Stripe App
    
     **
    
    ```bash
    stripe apps start
    ```
    
    ### About Stripe Apps
    
    We can create ******************Full-Stack Application, Backend-Only Applications and Frontend-Only Applications using Stripe Sample Codes.******************
    
    1. Fullstack Applications
    
    ![https://b.stripecdn.com/docs-statics-srv/assets/stripe-apps-full-stack-app.89161ebfbfe7f4954cd1efe92490739a.png](https://b.stripecdn.com/docs-statics-srv/assets/stripe-apps-full-stack-app.89161ebfbfe7f4954cd1efe92490739a.png)
    
    1. Frontend-Only Applications
        
        ![https://b.stripecdn.com/docs-statics-srv/assets/stripe-apps-frontend-only-app.458091fe3aaaa4258d952870c1539498.png](https://b.stripecdn.com/docs-statics-srv/assets/stripe-apps-frontend-only-app.458091fe3aaaa4258d952870c1539498.png)
        
    
    1. We can use Server-Side Logic to build our Apps.
    
    [](https://stripe.com/docs/stripe-apps/build-backend)
    
    ![https://b.stripecdn.com/docs-statics-srv/assets/app-backend.4ff7372f04d2ad56007b60e8fb9ce14a.png](https://b.stripecdn.com/docs-statics-srv/assets/app-backend.4ff7372f04d2ad56007b60e8fb9ce14a.png)