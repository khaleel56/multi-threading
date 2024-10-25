# multi-threading
spread load to worker thread

npm worker_threads

Instant thread creation
Scenario Overview
API Call: A client makes a request to an API endpoint that involves a heavy computation or resource-intensive task.
Main Thread: The API request is handled by the main thread, which is responsible for receiving the request and sending back the response.
Offloading the Task: Instead of processing the heavy computation in the main thread (which would block it and make it unresponsive to other requests), the application creates a worker thread to handle this computation.

Detailed Workflow:
Receive Request: The main thread receives an API request. For example, the endpoint /api/compute is called.
Spawn Worker Thread:The main thread creates a worker thread (using the worker_threads module).
It sends any necessary data to the worker thread, such as the input for the computation.
The main thread does not wait for the worker thread to finish. Instead, it continues to handle other incoming requests.
This non-blocking behavior ensures that the application remains responsive.
Worker Thread Processing:The worker thread receives the data and performs the heavy computation.
Once the computation is complete, the worker sends the result back to the main thread.
Receive Result:The main thread listens for messages from the worker thread. Once the result is received, it processes the response.
The worker can also handle errors, which the main thread should be prepared to manage.
Send Response:Finally, the main thread sends the response back to the client once it has received the result from the worker thread.

pros:
1.	Non-Blocking: By offloading heavy tasks to a worker thread, the main thread can continue to handle other incoming requests, improving the application's responsiveness.
2.	Scalability: This architecture allows your application to handle multiple simultaneous requests efficiently, as each heavy computation can be processed in its own worker thread.
3.	Improved Performance: For CPU-bound tasks, the main thread remains free to serve other requests, which can lead to better overall throughput and user experience.
4.	Error Isolation: Errors occurring in a worker thread do not crash the main thread. This helps maintain the stability of the application.
5.	Resource Management: Worker threads can be created and terminated as needed, allowing for efficient use of system resources without keeping unnecessary threads running.
On-Demand Workers:->You can create worker threads on demand when the API is called, which means they won’t be consuming resources when idle


cons:
creating a new worker thread for every incoming API request can lead to inefficiencies, especially under high load.

Define fixed number of threads:
Thread Pooling: Instead of spawning a new worker for each request, you can maintain a pool of worker threads that can be reused for multiple requests. This reduces the overhead of creating and destroying threads repeatedly.
Queueing Tasks: When requests come in, you can queue them and assign them to available worker threads in the pool. This helps in managing concurrent workloads more effectively.


->with real api which indludes database
threads contains their own context. don't have main thready memory/state so we have to establish a new connection in worker threads to make db calls.
