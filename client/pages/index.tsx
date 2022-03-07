import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import Footer from "../src/Footer";
import Navbar from "../src/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Apache Kafka Sizing Calculator | Red Hat AMQ Streams</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxWidth={false}>
        <Navbar />
        <Container maxWidth="lg">
          <Box
            sx={{
              my: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" component="h1">
              Simple Apache Kafka Sizing Calculator
            </Typography>
            <Typography variant="h3" component="h1" gutterBottom>
              for Red Hat AMQ Streams
            </Typography>
            <Typography variant="caption" gutterBottom>
              The best way to accurately size your Kafka cluster is by
              simulating the target load on your Kafka cluster. If you are
              planning to do that, you may want to use the load generation
              tools: kafka-producer-perf-test and kafka-consumer-perf-test, that
              come with Kafka, to simulate your target load. Documentation can
              be found here.
            </Typography>
            <Typography variant="caption">
              This calculator uses simple parameters to size and recommend your
              Red Hat AMQ Streams (Kafka) configuration, including the number of
              Zookeeper nodes, the number of Kafka broker nodes and the number
              of subscription cores required, among other things.
            </Typography>
            <Box
              sx={{
                my: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                // alignItems: "center",
                width: "100%",
              }}
            >
              <Typography variant="h4" textAlign="left">
                Broker Parameters
              </Typography>
              <Box sx={{ my: 2 }}>
                <Typography>Target Message Rate (msgs/s):</Typography>
                <TextField
                  required
                  id="message-rate"
                  placeholder="msgs/sec"
                  helperText="The message rate your Kafka cluster is to handle."
                  margin="normal"
                  fullWidth
                />
              </Box>
              <Box sx={{ my: 1 }}>
                <Typography>Average Message Size (number of bytes):</Typography>
                <TextField
                  required
                  id="message-rate"
                  placeholder="msgs/sec"
                  helperText="The average message size."
                  margin="normal"
                  fullWidth
                />
              </Box>
              <Box sx={{ my: 1 }}>
                <Typography>Number of Replicas:</Typography>
                <TextField
                  required
                  id="message-rate"
                  helperText="Replicas are used for redundancy. It affects the amount of storage as well as the performance of your Kafka cluster"
                  margin="normal"
                  defaultValue="3"
                  fullWidth
                />
              </Box>
              <Box sx={{ my: 1 }}>
                <Typography>Network Adapter Speed (Gbps):</Typography>
                <TextField
                  required
                  id="message-rate"
                  placeholder="Gbps"
                  helperText="The network adapter is assumed to be working in full-duplex mode. Standard Gigabit network adapter is 1 Gbps. It is likely that either the network adapter speed (or the max. disk throughput) is going to be the bottleneck of your system. You may want to use a higher speed network adapter if that is the case.
                  "
                  margin="normal"
                  fullWidth
                />
              </Box>
              <Box sx={{ my: 1 }}>
                <Typography>Max. Disk Throughput (MB/s):</Typography>
                <TextField
                  required
                  id="message-rate"
                  placeholder="MB/s"
                  helperText="For hard disks, it is around 125 MB/s. For SSDs, it could be 400MB/s or higher."
                  margin="normal"
                  fullWidth
                />
              </Box>
              <Box sx={{ my: 1 }}>
                <Typography>
                  Max. Utilization Allowed for Network Adapter and Disk
                  Subsystem (between 0.01 and 1.00):
                </Typography>
                <TextField
                  required
                  id="message-rate"
                  placeholder="between 0.01 and 1.00"
                  helperText="You do not want to have your network adapter and disk system running at 100% as this may impact the performance of the system during a sudden temporary surge in message rate."
                  margin="normal"
                  fullWidth
                />
              </Box>
              <Box sx={{ my: 1 }}>
                <Typography>Number of Consumer Groups:</Typography>
                <TextField
                  required
                  id="message-rate"
                  helperText="A consumer group is a group of related consumers that perform a task, like sending messages to a service. Different consumer groups can read from different offsets in a partition."
                  margin="normal"
                  fullWidth
                />
              </Box>
              <Box sx={{ my: 1 }}>
                <Typography>Number of Lagging Consumers:</Typography>
                <TextField
                  required
                  id="message-rate"
                  helperText="Caching of data reduces the need to read data from disk when readers (consumers in consumer groups) read data. However, the size of the cache is finite. When a slow reader tries to read the data, the data may have already been evicted from the cache necessitating a disk read which impacts performance. The more lagging consumers, the more impact on performance.
                  0 is the best case scenario. 0 means that there are no lagging readers ie, all data are in the cache and the reads do not incur the penalty of reading from disk.
                  
                  {# of Consumer Groups} + ({# of Replicas} - 1) is the worst case scenario. This implies that all reads from readers of the consumer groups as well as the followers trying to read the data from the leader to store them on their local disk incur the penalty of reading from disk.
                  "
                  margin="normal"
                  fullWidth
                />
              </Box>
              <Box sx={{ my: 1 }}>
                <Typography>Data Retention Period (number of days):</Typography>
                <TextField
                  required
                  id="message-rate"
                  placeholder="days"
                  helperText="This parameter is used to estimate the total storage required for the solution."
                  margin="normal"
                  fullWidth
                />
              </Box>
              <Box sx={{ my: 1 }}>
                <Typography>
                  Number of Zookeeper Node Failures that can be Tolerated (1 or
                  2):
                </Typography>
                <TextField
                  required
                  id="message-rate"
                  placeholder="1 or 2"
                  helperText="A Zookeeper cluster keeps track of status of the Kafka cluster nodes and Kafka topics, partitions etc. The number of Zookeeper nodes is always an odd number: 3, 5, 7, etc. This parameter determines the size of your Zookeeper cluster."
                  margin="normal"
                  fullWidth
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              my: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              // alignItems: "center",
              width: "100%",
            }}
          >
            <Typography variant="h4" textAlign="left" gutterBottom>
              Partition Parameters
            </Typography>
            <Typography variant="subtitle2">The following are optional parameters for estimating the minimum number of partitions required for a topic. This estimation will be skipped if any of the following fields are left at zero (0).</Typography>
            <Box sx={{ my: 2 }}>
              <Typography>Target Throughput of a Topic (MB/s):</Typography>
              <TextField
                required
                id="message-rate"
                placeholder="MB/s"
                helperText="This parameter specifies the target throughput for a topic."
                margin="normal"
                fullWidth
              />
            </Box>
            <Box sx={{ my: 2 }}>
              <Typography>Throughput of the Slowest Producer (MB/s):</Typography>
              <TextField
                required
                id="message-rate"
                placeholder="MB/s"
                helperText="This parameter is used to estimate the minimum number of partitions needed for producers to produce the target message throughput."
                margin="normal"
                fullWidth
              />
            </Box>
            <Box sx={{ my: 2 }}>
              <Typography>Throughput of the Slowest Consumer (MB/s):</Typography>
              <TextField
                required
                id="message-rate"
                placeholder="MB/s"
                helperText="This parameter is used to estimate the minimum number of partitions needed for consumers to consume at the target message throughput."
                margin="normal"
                fullWidth
              />
            </Box>
          </Box>
          <Box
            sx={{
              my: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              // width: "100%",
            }}
          ><Button variant="contained" color="primary" size="large">Submit for Sizing</Button></Box>
        </Container>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
