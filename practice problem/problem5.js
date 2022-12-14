/* //local storage vs session storage vs cookie এর মধ্যে তিনটা পার্থক্য লিখে ফেলো। ইংরেজিতে। (নিজের মতো করে লিখবে )


Local Storage:
# The storage capacity of local storage is 5MB/10MB
# As it is not session-based, it must be deleted via javascript or manually
# The client  can only read local storage
# There is no transfer of data to the server
# There are fewer old browsers that support it


Session Storage:
# The storage capacity of session storage is 5MB
# It’s session-based and works per window or tab. This means that data is stored only for the duration of a session, i.e., until the browser (or tab) is closed
# The client can only read local storage
# There is no transfer of data to the server
# There are fewer old browsers that support it

Cookies:
# The storage capacity of Cookies is 4KB
# Cookies expire based on the setting and working per tab and window 
# Both clients and servers can read and write the cookies
# Data transfer to the server is exist
# It is supported by all the browser including older browser */