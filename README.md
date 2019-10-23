# Twitter Search API
This simple API was done as a challenge requested by my computer engineering professor that asked me to code a server that takes the first and last names as input and outputs the user's username that best matches with the requested inputs.

## Usage
To view a quick demonstration of this code you can go to 
http://twitter.moudallal.xyz

The server accepts two query parameters when making a request right on the root endpoint: 
* firstName
* lastName

To use the actual code, you'll first need to have your own Twitter Develoepr Account you can go ahead and request for access at https://developer.twitter.com

Next, follow the steps shown below: 
1. Clone this repository
2. From your terminal, run ```npm install``` inside the root folder of this repository
3. Make a new file called ```dev.env``` inside a new directory in the root folder called ```config/```
4. Inside ```dev.env``` you need to set the following values
    * ```PORT=``` your desired port
    * ```CONSUMERKEY=``` your consumer key
    * ```CONSUMERSECRET=``` your consumer key secret
    * ```ACCESSTOKEN=``` your access token
    * ```TOKENSECRET=``` your access token secret
5. Once you completed all the steps mentioned above, from your terminal, run the following command to get the server up locally
    ```npm run dev```
  
## Issues/Comments
If you find any issues please open up an issue and/or feel free to fix it. It was a quick challenge I finished in a couple of minutes and didn't have the time to look at 😛
